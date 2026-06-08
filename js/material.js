/* ===================== Abas e acordeões ===================== */
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
    if (window.TTS) TTS.stop();
  });
});

document.querySelectorAll(".acc-head").forEach((head) => {
  head.addEventListener("click", (e) => {
    if (e.target.closest(".listen-mini")) return; // não alterna ao clicar no play
    head.closest(".acc").classList.toggle("open");
  });
});

/* ===================== Extração de texto p/ áudio ===================== */
function tableToSpeech(table) {
  const heads = [...table.querySelectorAll("thead th")].map((th) => th.textContent.trim());
  const rows = [...table.querySelectorAll("tbody tr")];
  const out = [];
  rows.forEach((r) => {
    const cells = [...r.children].map((td) => td.textContent.trim());
    if (heads.length && heads.length === cells.length) {
      out.push(cells.map((c, i) => `${heads[i]}: ${c}`).join("; ") + ".");
    } else {
      out.push(cells.join(", ") + ".");
    }
  });
  return out.join(" ");
}

function accToSpeech(acc) {
  const title = acc.querySelector("h3").textContent.trim();
  const body = acc.querySelector(".acc-content").cloneNode(true);

  // Tabelas viram frases legíveis
  body.querySelectorAll("table").forEach((t) => {
    const d = document.createElement("div");
    d.textContent = " " + tableToSpeech(t) + " ";
    t.replaceWith(d);
  });
  // Subtítulos de tópico recebem pausa e ponto
  body.querySelectorAll(".topic-title").forEach((tt) => {
    tt.textContent = " " + tt.textContent.trim().replace(/[.:]?$/, ".") + " ";
  });
  // Itens de lista e parágrafos terminam com ponto
  body.querySelectorAll("li, p").forEach((el) => {
    if (el.querySelector("table, li")) return;
    el.textContent = " " + el.textContent.trim().replace(/[.;:]?$/, ".") + " ";
  });

  return title + ". " + body.textContent;
}

/* ===================== Construção de faixas ===================== */
function buildTabPlaylist(panel) {
  const accs = [...panel.querySelectorAll(".acc")];
  return accs.map((acc) => ({
    label: acc.querySelector("h3").textContent.trim(),
    text: accToSpeech(acc),
    el: acc,
    onPlay: () => highlightAcc(acc),
    onEnd: () => acc.classList.remove("speaking"),
  }));
}

function highlightAcc(acc) {
  document.querySelectorAll(".acc.speaking").forEach((a) => a.classList.remove("speaking"));
  document.querySelectorAll(".listen-mini.speaking").forEach((b) => b.classList.remove("speaking"));
  acc.classList.add("speaking", "open");
  const mini = acc.querySelector(".listen-mini");
  if (mini) mini.classList.add("speaking");
  acc.scrollIntoView({ behavior: "smooth", block: "center" });
  saveMaterialPos(acc);
}

/* ---------- Continuar de onde parou (áudio do material) ---------- */
const MAT_KEY = "material-audio-pos";

function saveMaterialPos(acc) {
  const panel = acc.closest(".tab-panel");
  if (!panel) return;
  const tab = panel.id.replace("tab-", "");
  const index = [...panel.querySelectorAll(".acc")].indexOf(acc);
  const label = acc.querySelector("h3").textContent.trim();
  try {
    localStorage.setItem(MAT_KEY, JSON.stringify({ tab, index, label }));
  } catch (e) {}
}

function activateTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "tab-" + tab));
}

function setupMaterialResume() {
  let pos;
  try {
    pos = JSON.parse(localStorage.getItem(MAT_KEY) || "null");
  } catch (e) {
    pos = null;
  }
  const cta = document.querySelector(".audio-cta");
  if (!cta || !pos || !document.getElementById("tab-" + pos.tab)) return;

  const btn = document.createElement("button");
  btn.className = "listen-btn resume-btn";
  btn.innerHTML = `<span class="ic">▶</span> Continuar: ${pos.label}`;
  cta.insertBefore(btn, cta.querySelector(".audio-hint"));

  btn.addEventListener("click", () => {
    activateTab(pos.tab);
    const panel = document.getElementById("tab-" + pos.tab);
    const tracks = buildTabPlaylist(panel);
    const idx = Math.min(pos.index, tracks.length - 1);
    TTS.load(tracks, { autoplay: true, startIndex: idx < 0 ? 0 : idx });
  });
}

function activePanel() {
  return document.querySelector(".tab-panel.active");
}

/* ===================== Botões de áudio ===================== */
// Botão "Ouvir esta disciplina"
const listenTabBtn = document.getElementById("listenTab");
if (listenTabBtn) {
  listenTabBtn.addEventListener("click", () => {
    const tracks = buildTabPlaylist(activePanel());
    TTS.load(tracks, { autoplay: true, startIndex: 0 });
  });
}

// Botão ▶ em cada seção
document.querySelectorAll(".acc").forEach((acc) => {
  const head = acc.querySelector(".acc-head");
  const badge = head.querySelector(".badge");
  const btn = document.createElement("button");
  btn.className = "listen-mini";
  btn.title = "Ouvir esta seção";
  btn.setAttribute("aria-label", "Ouvir esta seção");
  btn.textContent = "▶";
  head.insertBefore(btn, badge);

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const panel = acc.closest(".tab-panel");
    const tracks = buildTabPlaylist(panel);
    const idx = tracks.findIndex((t) => t.el === acc);
    TTS.load(tracks, { autoplay: true, startIndex: idx < 0 ? 0 : idx });
  });
});

/* ---------- Inicialização ---------- */
setupMaterialResume();
