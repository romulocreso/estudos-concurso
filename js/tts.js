/* ============================================================
   TTS — Leitor de áudio (audiobook) com a voz nativa do navegador
   Usa a Web Speech API (speechSynthesis). Sem custo, sem internet.
   Exposto globalmente como window.TTS.
   ============================================================ */
const TTS = (function () {
  const supported = "speechSynthesis" in window;

  let playlist = [];        // [{label, text, onPlay, onEnd}]
  let trackIndex = 0;
  let chunks = [];          // pedaços do texto da faixa atual
  let chunkIndex = 0;
  let playing = false;      // está reproduzindo (ou pausado dentro de uma faixa)
  let paused = false;
  let seq = 0;              // token de geração: descarta callbacks de falas obsoletas
  let rate = parseFloat(localStorage.getItem("tts-rate") || "1");
  let voice = null;
  let voices = [];
  let autoNarrate = localStorage.getItem("tts-auto") !== "0"; // padrão: ligado
  const els = {};

  /* ---------- Preparação do texto ---------- */
  function clean(t) {
    return (t || "")
      .replace(/ /g, " ")
      .replace(/\s*\n\s*/g, ". ")
      .replace(/\s+/g, " ")
      .replace(/\.\s*\.+/g, ".")
      .replace(/\s+([.;,:!?])/g, "$1")
      .trim();
  }

  // Quebra em pedaços pequenos (~220 caracteres) para evitar cortes
  // do navegador em frases longas e dar controle fino de progresso.
  function splitChunks(text) {
    const c = clean(text);
    const sentences = c.match(/[^.!?…]+[.!?…]+|\S[^.!?…]*$/g) || [c];
    const out = [];
    let buf = "";
    sentences.forEach((s) => {
      s = s.trim();
      if ((buf + " " + s).trim().length > 220) {
        if (buf) out.push(buf.trim());
        buf = s;
      } else {
        buf = (buf + " " + s).trim();
      }
    });
    if (buf) out.push(buf.trim());
    return out.length ? out : [c];
  }

  /* ---------- Vozes ---------- */
  function loadVoices() {
    if (!supported) return;
    const all = window.speechSynthesis.getVoices();
    voices = all.filter((v) => /^pt/i.test(v.lang));
    if (!voices.length) voices = all; // fallback: nenhuma voz pt instalada
    const savedURI = localStorage.getItem("tts-voice");
    voice =
      voices.find((v) => v.voiceURI === savedURI) ||
      voices.find((v) => /pt-BR/i.test(v.lang)) ||
      voices[0] ||
      null;
    renderVoiceOptions();
  }

  function renderVoiceOptions() {
    if (!els.voice) return;
    els.voice.innerHTML = "";
    if (!voices.length) {
      const o = document.createElement("option");
      o.textContent = "Voz padrão";
      els.voice.appendChild(o);
      return;
    }
    voices.forEach((v) => {
      const o = document.createElement("option");
      o.value = v.voiceURI;
      o.textContent = v.name.replace(/Microsoft|Google|\(.*?\)/g, "").trim() + (/pt-BR/i.test(v.lang) ? " · BR" : " · PT");
      if (voice && v.voiceURI === voice.voiceURI) o.selected = true;
      els.voice.appendChild(o);
    });
  }

  /* ---------- Reprodução ---------- */
  function speakCurrent() {
    if (!supported) return;
    seq++; // invalida callbacks de falas anteriores
    window.speechSynthesis.cancel();
    const track = playlist[trackIndex];
    if (!track) {
      stop();
      return;
    }
    chunks = splitChunks(track.text);
    chunkIndex = 0;
    playing = true;
    paused = false;
    if (track.onPlay) track.onPlay(trackIndex, track);
    updateUI();
    speakChunk();
  }

  function speakChunk() {
    if (!playing) return;
    if (chunkIndex >= chunks.length) {
      const track = playlist[trackIndex];
      if (track && track.onEnd) track.onEnd(trackIndex, track);
      if (autoNarrate && trackIndex < playlist.length - 1) {
        trackIndex++;
        speakCurrent();
      } else {
        playing = false;
        paused = false;
        updateUI();
      }
      return;
    }
    const mySeq = seq;
    const u = new SpeechSynthesisUtterance(chunks[chunkIndex]);
    u.lang = (voice && voice.lang) || "pt-BR";
    u.rate = rate;
    if (voice) u.voice = voice;
    u.onend = () => {
      if (mySeq !== seq || !playing || paused) return;
      chunkIndex++;
      updateBar();
      speakChunk();
    };
    u.onerror = () => {
      if (mySeq !== seq || !playing || paused) return;
      chunkIndex++;
      speakChunk();
    };
    window.speechSynthesis.speak(u);
  }

  function play() {
    if (!supported) return;
    if (paused) {
      paused = false;
      playing = true;
      window.speechSynthesis.resume();
      // Alguns navegadores não retomam de forma confiável: garante continuidade.
      setTimeout(() => {
        if (playing && !window.speechSynthesis.speaking) speakChunk();
      }, 250);
      updateUI();
      return;
    }
    if (!playlist.length) return;
    speakCurrent();
  }

  function pause() {
    if (!supported || !playing) return;
    paused = true;
    playing = false;
    window.speechSynthesis.pause();
    updateUI();
  }

  function toggle() {
    if (playing) pause();
    else play();
  }

  function stop() {
    if (!supported) return;
    seq++; // invalida callbacks pendentes
    playing = false;
    paused = false;
    window.speechSynthesis.cancel();
    updateUI();
  }

  function next() {
    if (trackIndex < playlist.length - 1) {
      trackIndex++;
      speakCurrent();
    } else {
      stop();
    }
  }

  function prev() {
    // se já avançou no meio da faixa, reinicia a faixa; senão volta uma.
    if (chunkIndex > 1 || trackIndex === 0) {
      speakCurrent();
    } else {
      trackIndex--;
      speakCurrent();
    }
  }

  function playTrack(i) {
    if (i < 0 || i >= playlist.length) return;
    trackIndex = i;
    speakCurrent();
  }

  /* ---------- API de conteúdo ---------- */
  function load(tracks, opts) {
    opts = opts || {};
    stop();
    playlist = tracks || [];
    trackIndex = opts.startIndex || 0;
    chunkIndex = 0;
    show();
    updateUI();
    const auto = opts.autoplay !== undefined ? opts.autoplay : false;
    if (auto && playlist.length) speakCurrent();
  }

  function append(track, opts) {
    opts = opts || {};
    playlist.push(track);
    updateUI();
    if (opts.autoplay) playTrack(playlist.length - 1);
  }

  /* ---------- UI ---------- */
  function show() {
    if (els.player) els.player.classList.add("visible");
  }
  function updateBar() {
    if (!els.fill) return;
    const total = chunks.length || 1;
    els.fill.style.width = Math.min(100, ((chunkIndex) / total) * 100) + "%";
  }
  function updateUI() {
    if (!els.player) return;
    els.play.textContent = playing ? "❚❚" : "▶";
    els.play.setAttribute("aria-label", playing ? "Pausar" : "Reproduzir");
    const track = playlist[trackIndex];
    els.label.textContent = track ? track.label : "—";
    els.count.textContent = playlist.length > 1 ? `faixa ${trackIndex + 1}/${playlist.length}` : "";
    els.prev.disabled = !playlist.length;
    els.next.disabled = trackIndex >= playlist.length - 1;
    els.player.classList.toggle("is-playing", playing);
    updateBar();
  }

  function build() {
    const p = document.createElement("div");
    p.className = "tts-player";
    p.id = "ttsPlayer";
    p.innerHTML = `
      <div class="tts-row">
        <button class="tts-btn tts-prev" title="Anterior" aria-label="Anterior">⏮</button>
        <button class="tts-btn tts-play tts-main-btn" title="Reproduzir" aria-label="Reproduzir">▶</button>
        <button class="tts-btn tts-next" title="Próxima" aria-label="Próxima">⏭</button>
        <div class="tts-info">
          <div class="tts-label">—</div>
          <div class="tts-count"></div>
        </div>
        <label class="tts-auto" title="Narrar automaticamente ao avançar">
          <input type="checkbox" class="tts-auto-cb"> Auto
        </label>
        <select class="tts-speed" title="Velocidade">
          <option value="0.8">0,8×</option>
          <option value="1">1×</option>
          <option value="1.15">1,15×</option>
          <option value="1.3">1,3×</option>
          <option value="1.5">1,5×</option>
        </select>
        <select class="tts-voice" title="Voz"></select>
        <button class="tts-btn tts-stop" title="Parar" aria-label="Parar">✕</button>
      </div>
      <div class="tts-bar"><div class="tts-bar-fill"></div></div>
    `;
    document.body.appendChild(p);

    els.player = p;
    els.prev = p.querySelector(".tts-prev");
    els.play = p.querySelector(".tts-play");
    els.next = p.querySelector(".tts-next");
    els.stop = p.querySelector(".tts-stop");
    els.label = p.querySelector(".tts-label");
    els.count = p.querySelector(".tts-count");
    els.speed = p.querySelector(".tts-speed");
    els.voice = p.querySelector(".tts-voice");
    els.auto = p.querySelector(".tts-auto-cb");
    els.fill = p.querySelector(".tts-bar-fill");

    els.play.addEventListener("click", toggle);
    els.prev.addEventListener("click", prev);
    els.next.addEventListener("click", next);
    els.stop.addEventListener("click", () => {
      stop();
      p.classList.remove("visible");
    });
    els.speed.value = String(rate);
    els.speed.addEventListener("change", () => {
      rate = parseFloat(els.speed.value);
      localStorage.setItem("tts-rate", String(rate));
      // A nova velocidade passa a valer a partir da próxima frase.
    });
    els.voice.addEventListener("change", () => {
      voice = voices.find((v) => v.voiceURI === els.voice.value) || voice;
      if (voice) localStorage.setItem("tts-voice", voice.voiceURI);
      // A nova voz passa a valer a partir da próxima frase.
    });
    els.auto.checked = autoNarrate;
    els.auto.addEventListener("change", () => {
      autoNarrate = els.auto.checked;
      localStorage.setItem("tts-auto", autoNarrate ? "1" : "0");
    });

    if (!supported) {
      els.label.textContent = "Seu navegador não suporta leitura por voz.";
      [els.play, els.prev, els.next, els.speed, els.voice, els.auto].forEach((e) => (e.disabled = true));
    }
  }

  function init() {
    if (!document.body) {
      window.addEventListener("DOMContentLoaded", init);
      return;
    }
    if (els.player) return;
    build();
    if (supported) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  init();

  return {
    load,
    append,
    play,
    pause,
    toggle,
    stop,
    next,
    prev,
    playTrack,
    isAuto: () => autoNarrate,
    isSupported: () => supported,
  };
})();
