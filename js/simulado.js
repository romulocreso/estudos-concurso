const DISC_LABELS = {port:"Português", cg:"Conhecimentos Gerais", ce:"Conhecimentos Específicos"};
const FONTE_LABEL = "Auctor · Chácara-MG, 2022";
const LETTERS = ["A","B","C","D"];

/* Campo `wrong`: explica, por índice de alternativa, por que cada opção
   incorreta está errada (ou por que não é a resposta, em questões de
   "assinale a EXCETO/INCORRETA"). Usado na narração em áudio e na revisão. */
const ALL_QUESTIONS = [
/* ==================== PORTUGUÊS ==================== */
{id:1,disc:"port",topic:"Interpretação de texto",
q:`Leia o trecho: "A Câmara Municipal, como casa legislativa, exerce função primordial na democracia representativa: ela traduz a vontade popular em normas jurídicas, fiscaliza o Executivo e aprova o orçamento que define as prioridades da cidade."

Com base exclusivamente no texto, a Câmara Municipal:`,
opts:["É responsável pela execução das políticas públicas municipais.","Exerce apenas função fiscalizatória sobre o Poder Executivo.","Tem entre suas atribuições converter a vontade dos cidadãos em leis.","Aprova o orçamento municipal de forma independente do Poder Executivo."],
ans:2,exp:"O texto afirma que a Câmara \"traduz a vontade popular em normas jurídicas\" — ou seja, converte a vontade dos cidadãos em leis (C). As demais alternativas distorcem ou extrapolam o que o trecho diz.",
wrong:{0:"a execução de políticas públicas é função do Poder Executivo; o texto diz que a Câmara fiscaliza o Executivo, não que executa.",1:"o texto cita várias funções — legislar, fiscalizar e aprovar o orçamento —, logo restringir a 'apenas fiscalizar' contraria o trecho.",3:"o texto não fala em independência; afirma apenas que a Câmara aprova o orçamento, sendo 'de forma independente' uma extrapolação."}},

{id:2,disc:"port",topic:"Ortografia",
q:`Assinale a alternativa em que TODAS as palavras estão corretamente grafadas:`,
opts:["assessoria, burocracia, privilégio, comissão","asseçoria, burocracia, privilégio, comissão","assessoria, burocraçia, privilégio, comissão","assessoria, burocracia, privelério, comissão"],
ans:0,exp:"\"Assessoria\" (ss), \"burocracia\" (c, não ç), \"privilégio\" (é), \"comissão\" (ss). Todas corretas em A.",
wrong:{1:"'asseçoria' está incorreta; o correto é 'assessoria', com ss.",2:"'burocraçia' está com ç; o correto é 'burocracia', com c.",3:"'privelério' está incorreta; o correto é 'privilégio'."}},

{id:3,disc:"port",topic:"Acentuação gráfica",
q:`Assinale a alternativa em que há ERRO de acentuação:`,
opts:["O analista leu vários relatórios.","O secretário entregou o parecer ao vereador.","A reunião foi adiada para a próxima semana.","Os servidores devem agir com etica e responsabilidade."],
ans:3,exp:"\"Ética\" é proparoxítona (é-ti-ca) e deve ser acentuada. Todas as proparoxítonas são obrigatoriamente acentuadas.",
wrong:{0:"não é a resposta: 'vários' e 'relatórios' estão corretamente acentuados.",1:"não é a resposta: 'secretário' está corretamente acentuada e não há erro.",2:"não é a resposta: 'reunião' e 'próxima' estão acentuadas corretamente."}},

{id:4,disc:"port",topic:"Concordância verbal",
q:`Assinale a alternativa em que há ERRO de concordância verbal:`,
opts:["Fazem três anos que o servidor foi admitido.","Os analistas e o diretor participaram da reunião.","É necessário que todos cumpram o regulamento interno.","A comissão aprovou todos os projetos de lei."],
ans:0,exp:"\"Fazer\" indicando tempo decorrido é verbo impessoal e fica sempre no singular: \"Faz três anos\". Usar \"fazem\" é erro clássico em provas.",
wrong:{1:"não é a resposta: sujeito composto antes do verbo leva o verbo ao plural — 'participaram' está correto.",2:"não é a resposta: 'cumpram' concorda com 'todos'; concordância correta.",3:"não é a resposta: sujeito coletivo 'a comissão' leva o verbo ao singular — 'aprovou' está correto."}},

{id:5,disc:"port",topic:"Concordância nominal",
q:`Assinale a alternativa com concordância nominal CORRETA:`,
opts:["Os servidores ficaram satisfeitos e animadas com a decisão.","As servidoras ficaram satisfeitas e animadas com a decisão.","As servidoras ficaram satisfeito e animadas com a decisão.","Os servidores ficaram satisfeito e animada com a decisão."],
ans:1,exp:"Com sujeito feminino plural (\"as servidoras\"), os predicativos devem estar no feminino plural: \"satisfeitas e animadas\".",
wrong:{0:"'animadas', no feminino, não concorda com 'os servidores', masculino.",2:"'satisfeito', masculino singular, não concorda com 'as servidoras'.",3:"'satisfeito' e 'animada' no singular não concordam com 'os servidores', plural."}},

{id:6,disc:"port",topic:"Regência verbal",
q:`Assinale a alternativa em que a regência verbal está CORRETA:`,
opts:["O vereador aspirava o cargo de presidente da Câmara.","O servidor obedeceu as normas do regimento interno.","O diretor visava ao cumprimento das metas anuais.","O secretário assistiu o vereador durante toda a sessão."],
ans:2,exp:"\"Visar\" no sentido de \"ter como objetivo\" é transitivo indireto (visar a). As demais: \"aspirar\" a (não diretamente); \"obedecer\" a; \"assistir\" a (presenciar). Apenas C está correto.",
wrong:{0:"no sentido de almejar, 'aspirar' é transitivo indireto: o correto é 'aspirava AO cargo'.",1:"'obedecer' rege preposição: o correto é 'obedeceu ÀS normas'.",3:"no sentido de presenciar, 'assistir' é indireto: o correto é 'assistiu À sessão'."}},

{id:7,disc:"port",topic:"Uso da crase",
q:`Em qual alternativa o emprego da crase está INCORRETO?`,
opts:["Entregou o relatório à Câmara Municipal.","O servidor assistiu à sessão de votação.","Ele se referiu à ela durante o pronunciamento.","As sessões ocorrem às terças-feiras."],
ans:2,exp:"Pronomes pessoais do caso reto (ele, ela, eu, tu, nós, vós) não admitem crase antes deles. O correto é \"a ela\", sem acento grave.",
wrong:{0:"não é a resposta: 'entregar a' + 'a Câmara' (feminino com artigo) exige crase — uso correto.",1:"não é a resposta: 'assistir a' + 'a sessão' gera crase — uso correto.",3:"não é a resposta: 'às terças-feiras' é locução adverbial feminina de tempo, que leva crase."}},

{id:8,disc:"port",topic:"Colocação pronominal",
q:`Assinale a alternativa com ERRO de colocação pronominal segundo a norma culta escrita:`,
opts:["Entregou-me os documentos no prazo estipulado.","Não nos informaram sobre a mudança no horário.","Me disseram que a reunião foi adiada.","Jamais lhe direi o que aconteceu naquela sessão."],
ans:2,exp:"Em início de oração não se usa pronome oblíquo átono. O correto seria \"Disseram-me\" (ênclise) ou, com palavra atrativa antes: \"Não me disseram\".",
wrong:{0:"não é a resposta: 'Entregou-me' usa ênclise corretamente no início da oração.",1:"não é a resposta: 'não' é palavra atrativa que pede próclise — 'não nos informaram' está correto.",3:"não é a resposta: 'jamais' atrai o pronome para antes do verbo — 'jamais lhe direi' está correto."}},

{id:9,disc:"port",topic:"Pontuação",
q:`Assinale a alternativa em que o uso da vírgula está CORRETO:`,
opts:["O vereador, disse que votaria contra o projeto.","As sessões ordinárias, ocorrem toda terça-feira.","O projeto, aprovado por unanimidade, seguiu para promulgação.","Os vereadores votaram, e o presidente da Câmara, assinou o projeto."],
ans:2,exp:"Em C, a oração adjetiva explicativa \"aprovado por unanimidade\" está corretamente isolada por vírgulas. Em A e B, há vírgula separando sujeito do predicado (erro). Em D, há vírgula entre sujeito composto e verbo.",
wrong:{0:"há vírgula separando o sujeito 'o vereador' do verbo 'disse', o que é proibido.",1:"há vírgula separando o sujeito 'as sessões ordinárias' do verbo 'ocorrem'.",3:"a vírgula isola indevidamente o sujeito 'o presidente da Câmara' do verbo 'assinou'."}},

{id:10,disc:"port",topic:"Figuras de linguagem",
q:`"O orçamento municipal é o esqueleto que sustenta o corpo das políticas públicas."

A figura de linguagem empregada no trecho é:`,
opts:["Metonímia","Antítese","Metáfora","Hipérbole"],
ans:2,exp:"Metáfora é a comparação implícita sem conectivo comparativo. O orçamento é comparado a um esqueleto e as políticas públicas a um corpo, de forma implícita — característica da metáfora.",
wrong:{0:"metonímia é substituição por contiguidade; aqui há comparação implícita, não troca de um termo por outro próximo.",1:"antítese opõe ideias contrárias, o que não ocorre no trecho.",3:"hipérbole é exagero; o trecho compara, não exagera."}},

{id:11,disc:"port",topic:"Semântica",
q:`As palavras \"legislar\" e \"executar\", no contexto da administração pública, são:`,
opts:["Sinônimas, pois ambas indicam ação governamental.","Antônimas, pois representam funções opostas na tripartição de poderes.","Parônimas, pois têm origem etimológica semelhante.","Homônimas, pois possuem grafias parecidas."],
ans:1,exp:"\"Legislar\" (criar leis, função do Legislativo) e \"executar\" (implementar políticas, função do Executivo) representam funções distintas e opostas na tripartição dos poderes. São antônimas nesse contexto.",
wrong:{0:"não são sinônimas: criar leis e executá-las são ações de sentidos distintos.",2:"parônimas são palavras parecidas na forma e no som, o que não é o caso de 'legislar' e 'executar'.",3:"homônimas têm mesma grafia ou som com sentidos diferentes; as duas palavras não se parecem na forma."}},

{id:12,disc:"port",topic:"Morfologia — classes de palavras",
q:`"O leal servidor público sempre cumpre seus deveres com diligência."

Nessa oração, a palavra \"diligência\" é:`,
opts:["Adjetivo","Advérbio","Substantivo","Verbo"],
ans:2,exp:"\"Diligência\" é substantivo feminino abstrato, aqui funcionando como objeto da preposição \"com\". O adjetivo da oração é \"leal\" e o advérbio é \"sempre\".",
wrong:{0:"o adjetivo da oração é 'leal'; 'diligência' nomeia algo, não caracteriza o substantivo.",1:"o advérbio é 'sempre'; 'diligência' não modifica o verbo.",3:"o verbo é 'cumpre'; 'diligência' não exprime ação."}},

{id:13,disc:"port",topic:"Sintaxe — análise",
q:`"Os vereadores aprovaram o projeto de lei."

Na oração acima, \"o projeto de lei\" exerce a função de:`,
opts:["Sujeito","Objeto direto","Objeto indireto","Complemento nominal"],
ans:1,exp:"\"Os vereadores\" é o sujeito; \"aprovaram\" é verbo transitivo direto; \"o projeto de lei\" é objeto direto (completa o sentido do verbo sem preposição).",
wrong:{0:"o sujeito é 'os vereadores', quem pratica a ação de aprovar.",2:"não há preposição ligando o verbo ao termo; 'aprovar' é transitivo direto, então o complemento é objeto direto.",3:"complemento nominal completa o sentido de um nome, não de um verbo."}},

{id:14,disc:"port",topic:"Coesão e coerência",
q:`"O vereador apresentou o projeto. Entretanto, o projeto foi aprovado por unanimidade."

O uso do conectivo \"entretanto\" está:`,
opts:["Correto, pois indica adição de uma ideia à anterior.","Correto, pois indica conclusão lógica.","Incorreto, pois indica oposição onde não há contraste real entre as orações.","Incorreto, pois deveria ser substituído por \"portanto\"."],
ans:2,exp:"\"Entretanto\" é adversativo (indica contraste/oposição). No trecho, as duas orações não se opõem: o projeto foi apresentado e, em seguida, aprovado — relação de sequência, não de contraste.",
wrong:{0:"'entretanto' não é aditivo; é conjunção adversativa, que indica oposição.",1:"'entretanto' não exprime conclusão; quem conclui é 'portanto', 'logo'.",3:"'portanto' é conclusivo e também não caberia; a relação entre as orações é de sequência, pedindo um aditivo como 'e'."}},

{id:15,disc:"port",topic:"Interpretação de texto",
q:`"A transparência é pressuposto indispensável da boa gestão pública, pois sem acesso à informação, o cidadão não pode exercer seu papel de fiscal da administração."

Segundo o texto, a relação entre transparência e controle social é:`,
opts:["A transparência é consequência do controle exercido pelos cidadãos.","O controle social pelos cidadãos é viabilizado pela transparência.","A transparência dispensa o controle social, tornando-o desnecessário.","O controle social prescinde da transparência para ser efetivo."],
ans:1,exp:"O texto afirma que \"sem acesso à informação, o cidadão não pode exercer seu papel de fiscal\" — a transparência é, portanto, condição (pressuposto) para que o cidadão exerça o controle social.",
wrong:{0:"o texto inverte a relação: a transparência é pressuposto, ou seja, vem antes e possibilita o controle, não o contrário.",2:"o texto valoriza o controle social do cidadão, não o dispensa.",3:"'prescinde' significa dispensar; o texto diz justamente que sem informação não há como fiscalizar."}},

/* ==================== CONHECIMENTOS GERAIS ==================== */
{id:16,disc:"cg",topic:"Santana de Cataguases — localização",
q:`Santana de Cataguases é um município de Minas Gerais pertencente à mesorregião:`,
opts:["Vale do Rio Doce","Zona da Mata","Sul e Sudoeste de Minas","Triângulo Mineiro"],
ans:1,exp:"Santana de Cataguases integra a mesorregião da Zona da Mata Mineira, que compreende municípios do leste de Minas Gerais, próximos à fronteira com os estados do Rio de Janeiro e Espírito Santo.",
wrong:{0:"o Vale do Rio Doce fica a leste/nordeste de MG; o município pertence à Zona da Mata.",2:"o Sul e Sudoeste de Minas fica em outra porção do estado, não na microrregião de Cataguases.",3:"o Triângulo Mineiro localiza-se no oeste do estado, distante da Zona da Mata."}},

{id:17,disc:"cg",topic:"Câmara Municipal — função",
q:`Qual é a principal função legislativa da Câmara Municipal?`,
opts:["Executar as leis municipais aprovadas pelo prefeito.","Elaborar, discutir e votar leis de interesse local.","Fiscalizar os tribunais de contas em âmbito municipal.","Nomear e exonerar os secretários municipais."],
ans:1,exp:"A Câmara Municipal exerce a função legislativa: elaborar, discutir e votar leis de interesse local. A execução das leis é função do Executivo (prefeitura); a nomeação de secretários é prerrogativa do prefeito.",
wrong:{0:"executar leis é função do Poder Executivo (prefeitura), não do Legislativo.",2:"é o Tribunal de Contas que auxilia a fiscalizar; a Câmara não fiscaliza os tribunais de contas.",3:"nomear e exonerar secretários é prerrogativa do prefeito, chefe do Executivo."}},

{id:18,disc:"cg",topic:"Minas Gerais — história",
q:`A Inconfidência Mineira (1789), movimento que visava à independência do Brasil, teve como epicentro a cidade de:`,
opts:["Belo Horizonte","Mariana","Vila Rica (atual Ouro Preto)","São João del-Rei"],
ans:2,exp:"A Inconfidência Mineira eclodiu em Vila Rica, atual Ouro Preto, que era a capital da capitania à época. Tiradentes (Joaquim José da Silva Xavier) é o principal mártir do movimento.",
wrong:{0:"Belo Horizonte só foi fundada e inaugurada em 1897, mais de um século depois do movimento.",1:"Mariana é histórica e próxima, mas o epicentro foi Vila Rica, capital da capitania.",3:"São João del-Rei teve importância no período, mas não foi o centro da Inconfidência."}},

{id:19,disc:"cg",topic:"Organização político-administrativa",
q:`De acordo com a Constituição Federal de 1988, a República Federativa do Brasil é formada por:`,
opts:["União, estados e municípios","União, estados e Distrito Federal","União, estados, Distrito Federal e municípios","União, estados, territórios e municípios"],
ans:2,exp:"O art. 1º da CF/88 define que a República Federativa do Brasil é formada pela União, estados, Distrito Federal e municípios, todos autônomos nos termos da Constituição.",
wrong:{0:"falta o Distrito Federal, que também é ente federativo autônomo.",1:"faltam os municípios, que integram a Federação segundo a CF/88.",3:"os territórios não são entes da Federação; integrariam a União, e atualmente não existem territórios federais."}},

{id:20,disc:"cg",topic:"Atualidades — meio ambiente",
q:`A COP30, Conferência das Nações Unidas sobre Mudança do Clima de 2025, foi realizada na cidade brasileira de:`,
opts:["São Paulo","Brasília","Belém","Manaus"],
ans:2,exp:"A COP30 foi realizada em Belém (PA) em novembro de 2025. A escolha da cidade amazônica foi simbólica, reforçando a importância da Amazônia para o debate climático global.",
wrong:{0:"São Paulo não sediou a conferência; a escolha recaiu sobre a Amazônia.",1:"Brasília é a capital federal, mas não foi sede da COP30.",3:"Manaus está na Amazônia, mas a cidade-sede foi Belém, no Pará."}},

{id:21,disc:"cg",topic:"Atualidades — Agenda 2030",
q:`Os Objetivos de Desenvolvimento Sustentável (ODS), adotados pela ONU pela Agenda 2030, são compostos por:`,
opts:["8 objetivos","15 objetivos","17 objetivos","21 objetivos"],
ans:2,exp:"A Agenda 2030 da ONU prevê 17 Objetivos de Desenvolvimento Sustentável (ODS) e 169 metas, abrangendo temas como erradicação da pobreza, educação, saúde, igualdade de gênero e ação climática.",
wrong:{0:"8 eram os antigos Objetivos de Desenvolvimento do Milênio (ODM), substituídos pelos ODS.",1:"não são 15; a Agenda 2030 define 17 objetivos.",3:"não são 21; o número correto de ODS é 17."}},

{id:22,disc:"cg",topic:"Minas Gerais — cultura",
q:`O movimento literário que floresceu em Minas Gerais no século XVIII, tendo Tomás Antônio Gonzaga como principal expoente, é denominado:`,
opts:["Romantismo","Arcadismo (Neoclassicismo)","Barroco","Modernismo"],
ans:1,exp:"Tomás Antônio Gonzaga foi poeta do Arcadismo (Neoclassicismo) brasileiro, autor de \"Marília de Dirceu\". O movimento surgiu como reação ao Barroco, valorizando razão, natureza e modelos greco-latinos.",
wrong:{0:"o Romantismo é do século XIX, posterior a Gonzaga.",2:"o Barroco antecede o Arcadismo, que surgiu como reação a ele.",3:"o Modernismo é do século XX, muito posterior ao autor."}},

{id:23,disc:"cg",topic:"CF/88 — princípios",
q:`O princípio da impessoalidade que rege a administração pública (art. 37, CF/88) tem como objetivo central:`,
opts:["Assegurar que os atos administrativos sejam praticados sempre pelo mesmo servidor.","Vedar o uso da máquina pública para promoção pessoal ou benefício de grupos.","Garantir que todos os servidores recebam a mesma remuneração.","Exigir que todos os atos administrativos sejam publicados no Diário Oficial."],
ans:1,exp:"A impessoalidade determina que a Administração deve agir voltada ao interesse público, sem discriminação ou favorecimento pessoal. Veda a promoção pessoal do agente por meio de atos, programas e obras oficiais.",
wrong:{0:"a impessoalidade não exige o mesmo servidor; ao contrário, o ato é da Administração, não do agente.",2:"remuneração igual não é objeto da impessoalidade; isso confunde com isonomia salarial.",3:"a publicação no Diário Oficial decorre do princípio da publicidade, não da impessoalidade."}},

{id:24,disc:"cg",topic:"Atualidades — saúde",
q:`São princípios doutrinários do Sistema Único de Saúde (SUS), EXCETO:`,
opts:["Universalidade de acesso","Integralidade da assistência","Equidade","Privatização dos serviços essenciais"],
ans:3,exp:"Os princípios doutrinários do SUS são: universalidade (acesso para todos), integralidade (atendimento completo) e equidade (tratar desiguais de forma desigual, priorizando quem mais necessita). A privatização é oposta aos princípios do SUS.",
wrong:{0:"não é a exceção: a universalidade é, sim, princípio doutrinário do SUS.",1:"não é a exceção: a integralidade é princípio doutrinário do SUS.",2:"não é a exceção: a equidade é princípio doutrinário do SUS."}},

{id:25,disc:"cg",topic:"CF/88 — processo legislativo",
q:`A aprovação de Emenda à Constituição Federal exige, em cada Casa do Congresso Nacional:`,
opts:["Maioria simples em votação única","Maioria absoluta em dois turnos de votação","Maioria de três quintos em dois turnos de votação","Unanimidade em sessão conjunta do Congresso"],
ans:2,exp:"Conforme o art. 60, §2º, da CF/88, a PEC deve ser aprovada em dois turnos em cada Casa, com três quintos dos votos dos respectivos membros (não apenas dos presentes).",
wrong:{0:"maioria simples e turno único é quórum de lei ordinária, não de emenda constitucional.",1:"maioria absoluta é quórum de lei complementar; emenda exige três quintos.",3:"a Constituição não exige unanimidade nem votação em sessão conjunta para emendas."}},

{id:26,disc:"cg",topic:"Atualidades — energia",
q:`O Brasil ocupa posição de destaque mundial em energia renovável. O principal tipo de energia elétrica gerada no país é proveniente de:`,
opts:["Energia eólica","Energia solar","Energia hidrelétrica","Energia nuclear"],
ans:2,exp:"A matriz elétrica brasileira é majoritariamente renovável, com a energia hidrelétrica respondendo por mais de 60% da geração. O Brasil possui uma das matrizes mais limpas do mundo.",
wrong:{0:"a eólica cresce muito, mas ainda é complementar, não a principal fonte.",1:"a solar está em expansão acelerada, porém não é a maior fonte do país.",3:"a energia nuclear tem participação pequena na matriz elétrica brasileira."}},

{id:27,disc:"cg",topic:"Atualidades — educação",
q:`O Índice de Desenvolvimento da Educação Básica (IDEB) é calculado com base em:`,
opts:["Número de matrículas e taxa de analfabetismo","Taxa de aprovação dos alunos e desempenho nas avaliações do SAEB","Investimento per capita em educação e número de professores por aluno","Taxa de formação no ensino superior e acesso à internet"],
ans:1,exp:"O IDEB (criado em 2007 pelo INEP/MEC) combina dois componentes: a taxa de aprovação (fluxo escolar) e o desempenho dos alunos no SAEB (Sistema de Avaliação da Educação Básica).",
wrong:{0:"o IDEB não usa taxa de analfabetismo nem número de matrículas em seu cálculo.",2:"investimento per capita e número de professores não compõem a fórmula do IDEB.",3:"o IDEB é da educação básica e não considera ensino superior nem acesso à internet."}},

{id:28,disc:"cg",topic:"Atualidades — finanças públicas",
q:`A Lei Complementar nº 200/2023, que instituiu o novo arcabouço fiscal, substituiu qual instrumento anterior de controle de gastos?`,
opts:["Lei de Responsabilidade Fiscal (LC 101/2000)","Emenda Constitucional do Teto de Gastos (EC 95/2016)","Lei de Diretrizes Orçamentárias (LDO)","Plano Plurianual (PPA)"],
ans:1,exp:"A EC 95/2016 (\"teto de gastos\") limitava o crescimento das despesas primárias federais à variação do IPCA por 20 anos. O novo arcabouço fiscal (LC 200/2023) substituiu esse mecanismo por regras mais flexíveis, mas ainda com tetos de crescimento de despesas.",
wrong:{0:"a LRF continua em vigor; não foi substituída pelo arcabouço fiscal.",2:"correto seria este — mas como distrator, lembre que a EC 95 é justamente a substituída; as demais alternativas não foram revogadas.",3:"o PPA é instrumento de planejamento de quatro anos e permanece vigente."}},

{id:29,disc:"cg",topic:"Câmara Municipal — composição",
q:`A presidência da Câmara Municipal é exercida por:`,
opts:["O prefeito municipal, como chefe do Executivo local.","Um vereador eleito pelos próprios vereadores.","Um servidor efetivo indicado pelo Tribunal de Contas do Estado.","Um juiz indicado pelo Tribunal de Justiça de Minas Gerais."],
ans:1,exp:"A Câmara Municipal é presidida por um vereador eleito pelos próprios pares para exercer a mesa diretora. O prefeito é chefe do Poder Executivo municipal e não tem função na presidência do Legislativo.",
wrong:{0:"o prefeito chefia o Executivo e não preside o Legislativo, por separação de poderes.",2:"servidores não presidem a Câmara, e o TCE apenas auxilia a fiscalização das contas.",3:"juízes integram o Judiciário e não dirigem o Poder Legislativo municipal."}},

{id:30,disc:"cg",topic:"Atualidades — legislativo",
q:`Na estrutura constitucional brasileira, é competência EXCLUSIVA do município:`,
opts:["Legislar sobre direito civil e comercial.","Instituir e arrecadar tributos de sua competência e aplicar suas rendas.","Legislar sobre direito do trabalho.","Organizar e manter a polícia civil e militar."],
ans:1,exp:"Conforme a CF/88, é competência exclusiva dos municípios, entre outras: legislar sobre assuntos de interesse local, suplementar legislação federal/estadual, e instituir e arrecadar os tributos de sua competência (IPTU, ISS, ITBI).",
wrong:{0:"legislar sobre direito civil e comercial é competência privativa da União.",2:"competência correta do município.",3:"organizar polícias civil e militar é competência dos estados, não dos municípios."}},

/* ==================== QUESTÕES REAIS — AUCTOR CONSULTORIA (Chácara-MG, 2022) ==================== */
{id:51,disc:"port",real:true,topic:"Interpretação de texto",
q:`Leia o texto e responda:\n\n"DISCURSOS REVELAM NOVA LINGUAGEM DA ESPLANADA — Com a mudança de governo, novas palavras ganharam força no vocabulário do poder. A análise dos discursos dos 34 ministros que tomaram posse mostra que temas escanteados na gestão do ex-presidente Jair Bolsonaro ganharam protagonismo. A palavra 'ciência' foi citada 66 vezes; 'cultura', 81 vezes; 'democracia', 93 vezes. O nome do presidente Lula apareceu 256 vezes — o sexto mais lembrado. A palavra 'todes' foi utilizada em pelo menos seis eventos de transmissão de cargo. Simone Tebet afirmou: 'Nos últimos anos, faltou vacina, faltou comida, faltou remédio, faltou emprego, faltou educação, faltou cultura. Faltou sustentabilidade. Faltou vida.'" (O Globo, 08/01/23)\n\nO principal objetivo comunicativo do texto é:`,
opts:["Apresentar os prós e contras da adoção de uma nova linguagem utilizada na cerimônia de posse dos novos ministros.","Refletir sobre o vocabulário utilizado durante o governo de Jair Bolsonaro.","Informar a nova linguagem utilizada no Governo Lula que marca o reaparecimento de termos como 'cultura' e 'ciência'.","Exaltar o personalismo em torno do presidente Lula, apresentando-o como uma liderança mundial."],
ans:2,exp:"O texto tem caráter informativo: relata e analisa as palavras em destaque nos discursos dos ministros, mostrando as mudanças de vocabulário em relação ao governo anterior. Não apresenta prós/contras (A), não tem como foco o governo Bolsonaro (B) e não exalta o personalismo (D).",
wrong:{0:"o texto não debate vantagens e desvantagens da nova linguagem; apenas relata os dados.",1:"o foco é a nova linguagem do novo governo; o governo anterior é só referência de contraste.",3:"citar o nome de Lula 256 vezes é dado de análise, não exaltação; o tom é informativo."}},

{id:52,disc:"port",real:true,topic:"Figuras de linguagem",
q:`Considere o trecho do mesmo texto:\n\n"Nos últimos anos, faltou vacina, faltou comida, faltou remédio, faltou emprego, faltou educação, faltou cultura. Faltou sustentabilidade. Faltou vida." (Simone Tebet)\n\nNeste trecho, a palavra "faltou" é repetida no início de cada oração para intensificar seu significado. A esse recurso dá-se o nome de:`,
opts:["Anáfora.","Ironia.","Eufemismo.","Prosopopeia."],
ans:0,exp:"Anáfora é a figura de linguagem que consiste na repetição intencional de um termo no início de orações ou versos consecutivos, criando ênfase e ritmo. A repetição de 'faltou' é exemplo clássico de anáfora com efeito expressivo e emotivo.",
wrong:{1:"ironia é dizer o contrário do que se pensa; não há esse sentido na repetição de 'faltou'.",2:"eufemismo suaviza uma ideia desagradável; aqui se intensifica, não se suaviza.",3:"prosopopeia é personificação; não há atribuição de traços humanos a seres inanimados."}},

{id:53,disc:"port",real:true,topic:"Interpretação de texto",
q:`Considerando o mesmo texto sobre a linguagem da Esplanada, são exemplos de linguagem mais inclusiva citados no texto, EXCETO:`,
opts:["A utilização da palavra 'todes'.","A referência a indígenas e à comunidade LGBTQIAP+.","O emprego de expressões como 'homens e mulheres pretos e pretas do Brasil'.","O aparecimento da palavra 'Deus' em 27 vezes."],
ans:3,exp:"O texto menciona 'Deus' como herança do vocabulário do governo anterior (lema 'Deus acima de tudo'), sem relacioná-lo à linguagem inclusiva. As alternativas A, B e C descrevem diretamente iniciativas de linguagem inclusiva mencionadas no texto.",
wrong:{0:"não é a exceção: 'todes' é exemplo de linguagem inclusiva citado no texto.",1:"não é a exceção: a referência a indígenas e à comunidade LGBTQIAP+ é exemplo de inclusão.",2:"não é a exceção: 'homens e mulheres pretos e pretas' é exemplo de linguagem inclusiva."}},

{id:54,disc:"port",real:true,topic:"Morfossintaxe — análise de texto",
q:`Leia o poema de Yulia Novytska, ucraniana de 18 anos:\n\n"Escrevo o que não germinará nesta terra.\nA terra que pertence ao meu povo e a mim,\nonde soa minha língua, onde vibram meus pensamentos.\nVolto com eles à terra que amo e,\nsempre que penso na estepe, sou atingida pelo medo,\ncomo o vento da primavera que ressoa\ncom mísseis amaldiçoados que caem ao chão.\nMorte, medo e ódio.\nQuando há guerra, não há vento calmo no horizonte,\nnão há narcisos ao redor da escola."\n\nAnalise as afirmações:\nI – Em 'Escrevo o que não germinará nesta terra', a palavra 'nesta' é um artigo definido.\nII – O pronome 'onde', em suas duas ocorrências, retoma anaforicamente o substantivo 'terra'.\nIII – A oração subordinada adverbial temporal 'Quando há guerra...' é acompanhada por duas orações principais.\nIV – Em 'Volto com eles à terra que amo...', o emprego da crase é facultativo.\nEstá certo o que se afirma em:`,
opts:["I e III","II e III","II e IV","I e IV"],
ans:1,exp:"I – FALSA: 'nesta' é pronome demonstrativo (ne + esta), não artigo. II – VERDADEIRA: 'onde' retoma 'terra' anaforicamente. III – VERDADEIRA: 'Quando há guerra, [não há vento calmo...], [não há narcisos...]' — duas orações principais. IV – FALSA: crase é obrigatória antes de substantivo feminino com artigo ('à terra').",
wrong:{0:"inclui a afirmativa I, que é falsa: 'nesta' é pronome demonstrativo, não artigo definido.",2:"inclui a afirmativa IV, que é falsa: diante de 'à terra' a crase é obrigatória, não facultativa.",3:"reúne justamente as duas afirmativas falsas, I e IV."}},

{id:55,disc:"port",real:true,topic:"Pontuação",
q:`Observe o emprego das vírgulas nos fragmentos do mesmo poema:\nI – 'Quando há guerra, não há vento calmo no horizonte...'\nII – 'Em breve, as escolas podem nem mais existir.'\nIII – 'Busco força para pensar uma nova realidade, mas a mente alcança o que era antes...'\nIV – 'Aqui, o mundo está quieto e a terra é doce.'\n\nA vírgula foi empregada corretamente em:`,
opts:["I, II e III.","II, III e IV.","I, III e IV.","I, II, III e IV."],
ans:0,exp:"I – correta: vírgula após oração adverbial temporal anteposta. II – correta: vírgula após adjunto adverbial de uma só palavra anteposto. III – correta: vírgula antes de conjunção adversativa 'mas'. IV – discutível/incorreta pela banca: 'Aqui', adjunto curto e integrado, não exigiria vírgula nesse contexto segundo o critério adotado.",
wrong:{1:"inclui a IV, cuja vírgula após 'Aqui' não é exigida segundo o critério da banca.",2:"também inclui a IV, considerada inadequada pela banca.",3:"afirma que todas estão corretas, mas a IV foi considerada incorreta."}},

{id:56,disc:"port",real:true,topic:"Semântica — modalização",
q:`Leia o trecho:\n"Infelizmente, os exemplos citados não refletem as dificuldades vividas por mais de dois milhões de brasileiros, mas sinalizam que o autismo [...] pode e deve ser tratado."\n\nAssinale a alternativa em que a palavra destacada denota um estado emocional momentâneo da enunciadora:`,
opts:["'Depoimentos demonstram como pessoas com o diagnóstico do transtorno surpreendem positivamente...'","'Frequentemente a mesma sociedade que desconsidera a diversidade...'","'Infelizmente, os exemplos citados não refletem as dificuldades vividas por mais de dois milhões de brasileiros...'","'As atenções humanas deixam a humanização de lado e buscam individualmente...'"],
ans:2,exp:"'Infelizmente' é advérbio modal afetivo que expressa a avaliação subjetiva e o estado emocional da autora diante do que afirma. 'Positivamente' (modo), 'frequentemente' (frequência) e 'individualmente' (modo) são advérbios que não exprimem emoção da enunciadora.",
wrong:{0:"'positivamente' é advérbio de modo, indica como algo ocorre, não a emoção da autora.",1:"'frequentemente' indica frequência, não estado emocional.",3:"'individualmente' é advérbio de modo, sem carga emocional do enunciador."}},

{id:57,disc:"port",real:true,topic:"Sintaxe — aposto",
q:`No fragmento: "Qual a relação de Lionel Messi, jogador de futebol argentino, a cantora Courtney Love, o nadador Michael Phelps e o cineasta Tim Burton? Os quatro são pessoas com certo grau de autismo [...]"\n\nÉ possível encontrar quatro apostos no fragmento. Está INCORRETAMENTE indicado como aposto:`,
opts:["Lionel Messi","Courtney Love","Michael Phelps","Tim Burton"],
ans:0,exp:"Na construção 'Lionel Messi, jogador de futebol argentino', 'Lionel Messi' é o termo principal e 'jogador de futebol argentino' é o aposto. Nas demais construções ('a cantora Courtney Love', 'o nadador Michael Phelps', 'o cineasta Tim Burton'), os nomes próprios são os apostos que identificam os substantivos comuns precedentes.",
wrong:{1:"em 'a cantora Courtney Love', o nome próprio é o aposto do substantivo 'cantora' — corretamente indicado.",2:"em 'o nadador Michael Phelps', o nome é aposto de 'nadador' — corretamente indicado.",3:"em 'o cineasta Tim Burton', o nome é aposto de 'cineasta' — corretamente indicado."}},

{id:58,disc:"port",real:true,topic:"Morfossintaxe — conjunção integrante vs. pronome relativo",
q:`Sobre o texto do autismo, assinale a alternativa em que a palavra 'que' NÃO é um pronome relativo:`,
opts:["'...que é considerado um transtorno e não se encaixa na definição de doença'","'...que não os impediu de conseguir sucesso e bom desempenho na carreira...'","'...deixa de refletir que todos têm ou terão um dia uma deficiência...'","'...buscando direitos que inclusive estão previstos em lei...'"],
ans:2,exp:"Em C, 'que' introduz uma oração subordinada substantiva objetiva direta (objeto de 'refletir') — é conjunção integrante, não pronome relativo. Nas demais, 'que' retoma um antecedente nominal (o autismo, os quatro, direitos), sendo pronome relativo.",
wrong:{0:"aqui 'que' retoma o antecedente (o transtorno/autismo), funcionando como pronome relativo.",1:"'que' retoma 'os quatro' como antecedente; é pronome relativo.",3:"'que' retoma 'direitos'; logo é pronome relativo, não conjunção integrante."}},

{id:59,disc:"port",real:true,topic:"Colocação pronominal",
q:`Leia o fragmento do Hino Municipal de Chácara-MG:\n\n"Cumprimento-te Chácara amada, / o seu povo querido e viril. / Não te troco no Mundo por nada. / Tu és grandeza do meu Brasil! / Deus te deu a beleza e a fama, / e o povo se encanta ao te ver. / Ao sentir tua voz que me chama, / juro que sinto por ti, um prazer!"\n\nSobre o emprego de pronomes, identifique (V) para verdadeiras e (F) para falsas:\n( ) No título 'Te amo cidade querida!', há falha na colocação do pronome oblíquo átono.\n( ) Ao referir-se à cidade, os pronomes foram utilizados de maneira uniforme.\n( ) Em 'o povo se encanta ao te ver', o pronome 'se' é reflexivo.\n( ) Em 'Tu tens Matas!', o pronome 'Tu' é pessoal do caso reto.\nSequência correta, de cima para baixo:`,
opts:["V – F – V – F","V – F – V – V","F – F – V – V","F – V – V – F"],
ans:1,exp:"(V) 'Te amo' em início absoluto de oração viola a norma culta escrita — deveria ser 'Amo-te'. (F) O hino alterna 'te/tua' (2ª pessoa) e 'seu' (3ª pessoa) ao referir-se à cidade — há inconsistência. (V) 'se encanta' é voz reflexiva. (V) 'Tu' é pronome pessoal do caso reto (sujeito).",
wrong:{0:"erra a última: 'Tu' é pronome reto, então o final deveria ser V, não F.",2:"erra a primeira: 'Te amo' no início absoluto viola a norma, então deveria começar com V.",3:"erra a primeira (é V) e a segunda (é F, pois há inconsistência no uso dos pronomes)."}},

{id:60,disc:"port",real:true,topic:"Morfologia — estrutura do verbo",
q:`Leia: "Um discurso de Barack Obama — 'se trouxerem facas, levaremos armas' — foi estrela da noite." (Folha de S. Paulo, 13/01/2011)\n\nAssinale a alternativa em que NÃO foi identificado corretamente um elemento estrutural do verbo 'levaremos':`,
opts:["Radical – lev","Vogal temática – a","Desinência modo-temporal – re","Desinência número-pessoal – os"],
ans:3,exp:"'levaremos' = lev (radical) + a (vogal temática) + re (desinência modo-temporal do futuro do presente) + mos (desinência número-pessoal da 1ª pessoa do plural). A alternativa D afirma que a DNP é 'os', o que é incorreto — a desinência é 'mos'.",
wrong:{0:"está correta: 'lev' é mesmo o radical do verbo levar.",1:"está correta: 'a' é a vogal temática da 1ª conjugação.",2:"está correta: 're' marca o futuro do presente — o erro está em D, onde a desinência número-pessoal é 'mos', não 'os'."}},

{id:61,disc:"cg",real:true,topic:"Matriz energética brasileira",
q:`Leia: "Com 23,9 gigawatts (GW) de potência instalada, a energia solar se tornou a segunda maior fonte energética do Brasil em 2022, segundo a ABSOLAR. A fonte solar já trouxe ao Brasil mais de R$120,8 bilhões em investimentos e gerou mais de 705 mil empregos." (Brasil61)\n\nMesmo com o crescimento da energia solar, a principal fonte energética do Brasil é:`,
opts:["Energia hídrica.","Energia eólica.","Energia nuclear.","Energia termoelétrica."],
ans:0,exp:"O texto afirma que a energia solar se tornou a segunda maior fonte, confirmando que a energia hídrica (hidroelétrica) permanece como primeira. O Brasil possui uma das matrizes elétricas mais limpas do mundo, com a hidroeletricidade respondendo por mais de 60% da geração nacional.",
wrong:{1:"a eólica cresce, mas o texto coloca a solar em segundo lugar, atrás da hídrica.",2:"a energia nuclear tem participação pequena na matriz brasileira.",3:"as térmicas são complementares e acionadas em períodos de baixa nos reservatórios, não a fonte principal."}},

{id:62,disc:"cg",real:true,topic:"Defesa Civil e federalismo",
q:`"Após desastres naturais, seis cidades brasileiras vão receber repasse de mais de R$ 3,2 milhões do Governo Federal por meio da Defesa Civil Nacional. Cidades em situação de emergência ou estado de calamidade pública reconhecido pela Defesa Civil Nacional estão aptas a solicitar recursos."\n\nOs repasses desses recursos são autorizados pelo:`,
opts:["Ministério da Saúde.","Ministério da Justiça e Segurança Pública.","Ministério da Agricultura e Pecuária.","Ministério da Integração e do Desenvolvimento Regional."],
ans:3,exp:"A Defesa Civil Nacional é vinculada ao Ministério da Integração e do Desenvolvimento Regional (MIDR), responsável pela coordenação das ações de proteção e defesa civil, prevenção e resposta a desastres.",
wrong:{0:"a Saúde cuida de emergências sanitárias, não dos repasses de defesa civil por desastres.",1:"a Justiça e Segurança Pública não coordena a Defesa Civil Nacional.",2:"a Agricultura não responde pelos recursos de resposta a desastres."}},

{id:63,disc:"cg",real:true,topic:"Fundo de Participação dos Municípios",
q:`"A prévia do Censo Demográfico de 2022 causou a diminuição do coeficiente de 863 cidades no Fundo de Participação dos Municípios (FPM), levando-as a receber menos recursos a partir de janeiro de 2023."\n\nEm relação à aplicação dos recursos do FPM pelos municípios:`,
opts:["Devem ser aplicados exclusivamente na manutenção e desenvolvimento da educação básica pública.","Devem ser aplicados exclusivamente no enfrentamento de emergências de saúde pública.","Devem ser aplicados exclusivamente na universalização do saneamento básico.","Não há vinculações específicas obrigatórias para a aplicação desses recursos."],
ans:3,exp:"O FPM é transferência constitucional de livre aplicação pelos municípios, diferentemente do FUNDEB (vinculado à educação) ou repasses do SUS (saúde). Os municípios têm autonomia para alocar os recursos conforme suas prioridades, respeitando as regras gerais da LRF.",
wrong:{0:"a vinculação à educação é característica do FUNDEB, não do FPM.",1:"recursos carimbados para saúde vêm de transferências do SUS, não do FPM.",2:"o FPM não tem destinação obrigatória ao saneamento; é de livre aplicação."}},

{id:64,disc:"cg",real:true,topic:"Atualidades — posse presidencial",
q:`"A posse do presidente eleito Luiz Inácio Lula da Silva foi a última realizada no dia 1º de janeiro. A mudança da data está prevista em emenda constitucional aprovada em setembro de 2022."\n\nDe acordo com a nova regra, a partir de 2027 a posse dos presidentes e vices ocorrerá no dia:`,
opts:["6 de janeiro.","15 de novembro.","5 de janeiro.","31 de janeiro."],
ans:2,exp:"A EC aprovada em 2022 fixou o dia 5 de janeiro como nova data de posse presidencial a partir de 2027. A mudança visa dar mais tempo para a transição de governo após a eleição de outubro.",
wrong:{0:"a data fixada foi 5 de janeiro, não 6.",1:"15 de novembro é a data da Proclamação da República, não da posse.",3:"31 de janeiro não corresponde à nova data definida pela emenda."}},

{id:65,disc:"cg",real:true,topic:"Atualidades — Pix",
q:`"O Banco Central anunciou mudanças no Pix para oferecer mais segurança e flexibilidade ao mecanismo de pagamento."\n\nSão mudanças anunciadas pelo BC, EXCETO:`,
opts:["O limite individual por transação deixa de existir.","A fixação de cobrança de taxa para transações comuns de pessoa física.","O horário noturno passou a ser personalizado pelo usuário.","Os valores das modalidades Pix Saque e Pix Troco foram aumentados."],
ans:1,exp:"O Pix é gratuito para pessoas físicas por determinação do Banco Central — nenhuma taxa foi cobrada para transações comuns de PF. As demais mudanças (fim do limite fixo por transação, personalização do horário noturno e aumento dos limites do Pix Saque/Troco) foram efetivamente implementadas.",
wrong:{0:"não é a exceção: o fim do limite fixo por transação foi de fato anunciado.",2:"não é a exceção: a personalização do horário noturno foi uma mudança real.",3:"não é a exceção: o aumento dos valores de Pix Saque e Pix Troco foi implementado."}},

{id:66,disc:"cg",real:true,topic:"Atualidades — transferência de renda",
q:`"O Auxílio Brasil impactou diretamente na economia das cidades brasileiras e de milhões de pessoas em situação de vulnerabilidade. Em 2022, o programa bateu recorde, com 21,6 milhões de famílias contempladas."\n\nDas cinco regiões do país, aquela que reúne o maior número de famílias contempladas pelos benefícios sociais é:`,
opts:["Nordeste.","Sudeste.","Norte.","Sul."],
ans:0,exp:"O Nordeste concentra o maior número de beneficiários de programas de transferência de renda, reflexo dos maiores índices de pobreza e vulnerabilidade da região. Estados como Bahia, Ceará, Maranhão e Pernambuco lideram historicamente o número de famílias beneficiadas.",
wrong:{1:"o Sudeste é populoso, mas não é a região com mais famílias beneficiadas.",2:"o Norte tem população menor e não lidera o número de beneficiários.",3:"o Sul tem os menores índices de pobreza, logo menos famílias contempladas."}},

/* ==================== CONHECIMENTOS ESPECÍFICOS ==================== */
{id:31,disc:"ce",topic:"Princípios administrativos — legalidade",
q:`O princípio da legalidade, para a Administração Pública, significa que:`,
opts:["O administrador pode fazer tudo que a lei não proibir expressamente.","O administrador só pode agir quando houver expressa autorização legal.","A legalidade aplica-se apenas ao Poder Executivo federal.","Os atos administrativos ilegais geram apenas responsabilidade política."],
ans:1,exp:"Para o particular, legalidade = pode fazer o que a lei não proíbe. Para a Administração, legalidade = só pode agir com prévia autorização legal. Esse sentido mais restrito é fundamental em provas.",
wrong:{0:"esse é o sentido da legalidade para o particular, não para a Administração Pública.",2:"a legalidade vincula toda a Administração, em todos os entes e Poderes, não só o Executivo federal.",3:"atos ilegais podem ser anulados e gerar responsabilização administrativa, civil e penal, não apenas política."}},

{id:32,disc:"ce",topic:"Princípios administrativos — LIMPE",
q:`O princípio da eficiência foi inserido no caput do art. 37 da CF/88 por meio da:`,
opts:["Emenda Constitucional nº 19/1998 (Reforma Administrativa)","Lei 8.112/1990 (Estatuto dos Servidores Federais)","Emenda Constitucional nº 45/2004 (Reforma do Judiciário)","Lei Complementar nº 101/2000 (Lei de Responsabilidade Fiscal)"],
ans:0,exp:"A EC 19/1998 (Reforma Administrativa) acrescentou o princípio da eficiência ao art. 37, completando o acrônimo LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.",
wrong:{1:"a Lei 8.112/90 é o estatuto dos servidores federais e não alterou a Constituição.",2:"a EC 45/2004 tratou da reforma do Judiciário, não do princípio da eficiência.",3:"a LC 101/2000 é a Lei de Responsabilidade Fiscal, sem relação com o art. 37."}},

{id:33,disc:"ce",topic:"Atos administrativos — atributos",
q:`São atributos (características) dos atos administrativos, EXCETO:`,
opts:["Presunção de legitimidade e veracidade","Imperatividade","Autoexecutoriedade","Irrevogabilidade"],
ans:3,exp:"Os atributos clássicos são: presunção de legitimidade, imperatividade (impõe obrigações) e autoexecutoriedade (execução direta). A irrevogabilidade NÃO é atributo — a Administração pode revogar atos discricionários por conveniência e oportunidade.",
wrong:{0:"não é a exceção: a presunção de legitimidade e veracidade é atributo do ato.",1:"não é a exceção: a imperatividade é atributo clássico do ato administrativo.",2:"não é a exceção: a autoexecutoriedade também é atributo do ato."}},

{id:34,disc:"ce",topic:"Poderes administrativos — polícia",
q:`O poder que permite à Administração aplicar sanções (multas, interdições) sem autorização judicial prévia é o poder:`,
opts:["Discricionário","Hierárquico","De polícia","Regulamentar"],
ans:2,exp:"O poder de polícia é a faculdade da Administração de condicionar e restringir atividades particulares em benefício da coletividade. Manifesta-se pela autoexecutoriedade: aplicação direta de sanções sem necessidade do Judiciário.",
wrong:{0:"discricionariedade é a margem de escolha do administrador, não o poder de aplicar sanções a particulares.",1:"o poder hierárquico organiza e coordena internamente a Administração, não restringe atividades de particulares.",3:"o poder regulamentar edita normas para executar leis, não aplica multas ou interdições."}},

{id:35,disc:"ce",topic:"Atos administrativos — vinculado/discricionário",
q:`O ato administrativo que pode ser revogado pela própria Administração por razões de conveniência e oportunidade é o ato:`,
opts:["Vinculado","Discricionário","Nulo","Complexo"],
ans:1,exp:"Atos discricionários conferem ao administrador margem de liberdade (juízo de mérito). Por conterem esse elemento de escolha, são passíveis de revogação pela Administração a qualquer tempo. Atos vinculados, em regra, não admitem revogação.",
wrong:{0:"atos vinculados não admitem revogação por conveniência, pois não há juízo de mérito.",2:"ato nulo é anulado por ilegalidade, não revogado por conveniência e oportunidade.",3:"'complexo' refere-se à formação do ato (várias vontades), não à possibilidade de revogação."}},

{id:36,disc:"ce",topic:"Administração indireta",
q:`São entidades da Administração Indireta, conforme o Decreto-Lei 200/1967:`,
opts:["Ministérios, secretarias e departamentos","Autarquias, fundações públicas, empresas públicas e sociedades de economia mista","Câmaras legislativas, tribunais e ministério público","Conselhos de fiscalização profissional e organizações sociais"],
ans:1,exp:"A Administração Indireta é composta por: autarquias (ex.: INSS), fundações públicas (ex.: IBGE), empresas públicas (ex.: Correios) e sociedades de economia mista (ex.: Petrobras). Todos possuem personalidade jurídica própria.",
wrong:{0:"ministérios, secretarias e departamentos integram a Administração Direta.",2:"câmaras, tribunais e Ministério Público são órgãos de outros Poderes/funções, não Administração Indireta.",3:"conselhos de fiscalização e organizações sociais não compõem o rol clássico do Decreto-Lei 200/67."}},

{id:37,disc:"ce",topic:"Licitações — Lei 14.133/2021",
q:`Com a Nova Lei de Licitações (Lei 14.133/2021), qual modalidade prevista na Lei 8.666/1993 foi EXTINTA?`,
opts:["Pregão","Concorrência","Tomada de preços","Concurso"],
ans:2,exp:"A Lei 14.133/2021 manteve concorrência, pregão, concurso e leilão, e criou o diálogo competitivo. A tomada de preços (assim como o convite) foi extinta pela nova lei.",
wrong:{0:"o pregão foi mantido pela nova lei.",1:"a concorrência continua existindo na Lei 14.133/2021.",3:"o concurso também foi mantido; a extinta foi a tomada de preços, junto com o convite."}},

{id:38,disc:"ce",topic:"Licitações — dispensa",
q:`Na Lei 14.133/2021, é dispensável a licitação para contratação de obras e serviços de engenharia com valor de até:`,
opts:["R$ 15.000,00","R$ 50.000,00","R$ 100.000,00","R$ 200.000,00"],
ans:2,exp:"Conforme o art. 75, I, da Lei 14.133/2021, é dispensável a licitação para obras e serviços de engenharia (e manutenção de veículos) cujo valor não ultrapasse R$ 100.000,00. Para outros bens e serviços, o limite é R$ 50.000,00 (art. 75, II).",
wrong:{0:"R$ 15.000 está abaixo do limite legal previsto para obras de engenharia.",1:"R$ 50.000 é o limite para outros bens e serviços, não para obras de engenharia.",3:"R$ 200.000 ultrapassa o limite de R$ 100.000 fixado para obras e engenharia."}},

{id:39,disc:"ce",topic:"Contratos administrativos — cláusulas exorbitantes",
q:`A cláusula exorbitante que permite à Administração alterar unilateralmente o objeto do contrato para melhor adequá-lo ao interesse público é denominada:`,
opts:["Cláusula de rescisão unilateral","Cláusula de aplicação de penalidades","Cláusula de modificação unilateral","Cláusula de encampação"],
ans:2,exp:"As cláusulas exorbitantes são prerrogativas da AP não usuais no direito privado. A modificação unilateral permite alterar cláusulas para adequar o contrato ao interesse público, respeitado o limite legal (até 25% do valor original para acréscimos/supressões).",
wrong:{0:"a rescisão unilateral encerra o contrato, não altera o seu objeto.",1:"a aplicação de penalidades pune o contratado, não modifica o objeto contratual.",3:"encampação é a retomada de concessão por interesse público, não uma cláusula de alteração do objeto."}},

{id:40,disc:"ce",topic:"Contratos — rescisão",
q:`O contrato administrativo pode ser rescindido unilateralmente pela Administração. Assinale a hipótese que NÃO autoriza essa rescisão:`,
opts:["Inexecução total do contrato pelo contratado","Razões de interesse público devidamente justificadas","Inadimplemento de obrigações pelo contratado","Interesse exclusivo do contratado em encerrar o vínculo"],
ans:3,exp:"A rescisão unilateral pela Administração só ocorre por ato do poder público (inexecução pelo contratado ou interesse público). Se o interesse é exclusivo do contratado, ele deve buscar via judicial ou negociar amigavelmente — não cabe à Administração rescindir unilateralmente nessa hipótese.",
wrong:{0:"não é a resposta: a inexecução total pelo contratado autoriza a rescisão unilateral pela Administração.",1:"não é a resposta: razões de interesse público justificadas autorizam a rescisão unilateral.",2:"não é a resposta: o inadimplemento do contratado autoriza a rescisão pela Administração."}},

{id:41,disc:"ce",topic:"Gestão de RH — recrutamento",
q:`O recrutamento INTERNO, como forma de preenchimento de cargo em uma organização, apresenta como vantagem:`,
opts:["Introdução de novas ideias e experiências externas à organização.","Renovação da cultura organizacional com perfis distintos.","Motivação dos servidores e aproveitamento do potencial interno.","Ampliação da diversidade de perfis na organização."],
ans:2,exp:"O recrutamento interno valoriza e motiva os servidores existentes, aproveita o conhecimento que já têm da organização e custa menos. As demais alternativas (A, B, D) descrevem vantagens do recrutamento externo.",
wrong:{0:"trazer ideias e experiências externas é vantagem do recrutamento externo.",1:"renovar a cultura com novos perfis é característica do recrutamento externo.",3:"ampliar a diversidade de perfis também é benefício do recrutamento externo."}},

{id:42,disc:"ce",topic:"Gestão de RH — seleção",
q:`A entrevista de seleção ESTRUTURADA, comparada à não estruturada, caracteriza-se por:`,
opts:["Maior informalidade e liberdade na condução.","Perguntas padronizadas e previamente definidas para todos os candidatos.","Ausência de critérios objetivos de avaliação.","Adaptação total das perguntas ao perfil individual de cada candidato."],
ans:1,exp:"Na entrevista estruturada, todas as perguntas são definidas previamente e aplicadas igualmente a todos os candidatos, garantindo objetividade, comparabilidade e redução do viés do entrevistador.",
wrong:{0:"informalidade e liberdade descrevem a entrevista não estruturada.",2:"a estruturada é justamente mais objetiva, com critérios definidos.",3:"adaptar todas as perguntas a cada candidato é típico da entrevista não estruturada."}},

{id:43,disc:"ce",topic:"Gestão de RH — treinamento",
q:`O Levantamento das Necessidades de Treinamento (LNT) tem como objetivo principal:`,
opts:["Definir o orçamento disponível para capacitação.","Identificar as lacunas de conhecimento, habilidades e atitudes dos servidores.","Estabelecer o cronograma de férias dos servidores.","Avaliar o desempenho dos gestores responsáveis pelas equipes."],
ans:1,exp:"O LNT é a etapa diagnóstica do ciclo de treinamento: identifica a diferença entre as competências que os servidores têm e as que o cargo/função exige. A partir daí, planeja-se o treinamento mais adequado.",
wrong:{0:"definir orçamento é etapa de planejamento, não o objetivo do diagnóstico de necessidades.",2:"cronograma de férias não tem relação com o levantamento de necessidades de treinamento.",3:"o LNT diagnostica necessidades de capacitação, não avalia o desempenho das chefias."}},

{id:44,disc:"ce",topic:"Gestão de RH — avaliação de desempenho",
q:`A avaliação de desempenho pelo método 360 graus distingue-se dos métodos tradicionais porque:`,
opts:["É realizada exclusivamente pelo superior hierárquico imediato.","Utiliza apenas critérios quantitativos de produção.","Envolve feedback de múltiplas fontes: superiores, pares, subordinados e autoavaliação.","Aplica-se somente a cargos de chefia e gestão."],
ans:2,exp:"A avaliação 360º coleta feedback de múltiplas fontes — o próprio avaliado (autoavaliação), superiores, colegas e subordinados — fornecendo uma visão mais completa e fidedigna do desempenho.",
wrong:{0:"avaliar só pelo superior imediato descreve o método tradicional, não a 360 graus.",1:"a 360 graus é qualitativa e multifonte, não restrita a critérios quantitativos.",3:"a 360 graus aplica-se a diversos níveis, não apenas a cargos de chefia."}},

{id:45,disc:"ce",topic:"Orçamento público — princípios",
q:`O princípio orçamentário que determina que a LOA deve conter TODAS as receitas e despesas do governo, sem fundos externos ao orçamento, é o princípio da:`,
opts:["Anualidade","Publicidade","Universalidade","Exclusividade"],
ans:2,exp:"A universalidade determina que todas as receitas e despesas públicas devem estar incluídas na LOA. Não pode haver fundo ou conta paralela fora do orçamento. (Exclusividade proíbe matéria estranha à previsão de receitas e fixação de despesas.)",
wrong:{0:"a anualidade trata da vigência de um ano do orçamento, não da inclusão de todas as contas.",1:"a publicidade refere-se à divulgação dos atos, não à abrangência das receitas e despesas.",3:"a exclusividade proíbe matéria estranha na LOA, mas não exige que tudo esteja no orçamento."}},

{id:46,disc:"ce",topic:"PPA / LDO / LOA",
q:`Na hierarquia orçamentária, a Lei de Diretrizes Orçamentárias (LDO) tem como principal função:`,
opts:["Detalhar o orçamento de um exercício financeiro.","Estabelecer o planejamento de médio prazo por 4 anos.","Orientar a elaboração da LOA, definindo metas e prioridades fiscais.","Regulamentar os contratos e licitações do poder público."],
ans:2,exp:"A LDO (art. 165, §2º, CF/88) orienta a elaboração da LOA, estabelecendo metas e prioridades, diretrizes para a política fiscal e condições para transferências. O PPA planeja os 4 anos; a LOA detalha o exercício anual.",
wrong:{0:"detalhar o orçamento do exercício é função da LOA, não da LDO.",1:"o planejamento de médio prazo de quatro anos é função do PPA.",3:"regulamentar contratos e licitações não é função da LDO; isso cabe à legislação específica."}},

{id:47,disc:"ce",topic:"Lei de Responsabilidade Fiscal",
q:`A Lei de Responsabilidade Fiscal (LC 101/2000) estabelece que os municípios não podem comprometer mais de ___% da Receita Corrente Líquida com gastos de pessoal:`,
opts:["50%","54%","60%","70%"],
ans:2,exp:"O art. 19 da LRF fixa que os municípios não podem gastar mais de 60% da RCL com pessoal (54% para o Executivo municipal + 6% para a Câmara Municipal). É um dos limites mais cobrados em provas.",
wrong:{0:"50% é o limite total da União, não dos municípios.",1:"54% é a parcela específica do Executivo municipal, não o limite total do município.",3:"70% excede o limite legal de 60% da Receita Corrente Líquida."}},

{id:48,disc:"ce",topic:"Receita orçamentária",
q:`As receitas provenientes da cobrança de impostos, taxas e contribuições são classificadas como:`,
opts:["Receitas de capital","Receitas correntes tributárias","Receitas extraorçamentárias","Receitas de operações de crédito"],
ans:1,exp:"Receitas tributárias (impostos, taxas, contribuições de melhoria) são subclassificação das receitas correntes — aumentam o patrimônio líquido e não geram obrigação de devolução. Receitas de capital envolvem operações de crédito e alienação de bens.",
wrong:{0:"as receitas de capital vêm de crédito e alienação de bens, não da cobrança de tributos.",2:"tributos são receitas orçamentárias; extraorçamentárias são valores de terceiros em trânsito.",3:"operações de crédito (empréstimos) são receitas de capital, não tributárias."}},

{id:49,disc:"ce",topic:"Gestão estratégica",
q:`O planejamento estratégico de uma organização pública resulta na definição de:`,
opts:["Procedimentos operacionais padrão para cada setor.","Missão, visão, valores e objetivos estratégicos.","Horários de trabalho e escalas de plantão dos servidores.","Tabelas de vencimentos e planos de cargos e salários."],
ans:1,exp:"O planejamento estratégico define: missão (razão de ser), visão (onde se quer chegar), valores (princípios) e objetivos estratégicos de longo prazo. Serve de base para o planejamento tático (setorial) e operacional (procedimentos).",
wrong:{0:"procedimentos operacionais padrão pertencem ao nível operacional, não ao estratégico.",2:"horários e escalas são questões operacionais de rotina, não definições estratégicas.",3:"tabelas de vencimentos integram o plano de cargos e salários, não o planejamento estratégico."}},

{id:50,disc:"ce",topic:"Bens públicos",
q:`São bens de USO ESPECIAL, integrantes do patrimônio público:`,
opts:["Praças, ruas e rios navegáveis","Prédios de repartições públicas, escolas e hospitais do governo","Terrenos de marinha e terras devolutas","Ilhas fluviais e plataforma continental"],
ans:1,exp:"Bens de uso especial são destinados ao uso exclusivo da Administração: edifícios de repartições públicas, escolas, hospitais e quartéis. Bens de uso comum (praças, rios) são acessíveis a todos. Bens dominicais (terras devolutas) integram o patrimônio disponível do Estado.",
wrong:{0:"praças, ruas e rios navegáveis são bens de uso comum do povo, acessíveis a todos.",2:"terrenos de marinha e terras devolutas são bens dominicais, do patrimônio disponível do Estado.",3:"ilhas fluviais e plataforma continental também são bens dominicais da União, não de uso especial."}}
];

/* ==================== NARRAÇÃO EM ÁUDIO ==================== */
function speechClean(t){
  return (t || "").replace(/\[\.\.\.\]/g, " ").replace(/\n+/g, ". ").replace(/\s+/g, " ").replace(/\s+([.,;:!?])/g, "$1").trim();
}

function questionNarration(q){
  let s = `${DISC_LABELS[q.disc]}. Tópico: ${q.topic}. `;
  if(q.real) s += `Questão de prova real, ${FONTE_LABEL}. `;
  s += speechClean(q.q) + " ";
  q.opts.forEach((o, i) => { s += `Alternativa ${LETTERS[i]}: ${speechClean(o)}. `; });
  return s;
}

function explanationNarration(q){
  const c = q.ans;
  let s = `Resposta correta: alternativa ${LETTERS[c]}. ${speechClean(q.opts[c])}. `;
  s += speechClean(q.exp) + " ";
  const wrongIdx = q.opts.map((_, i) => i).filter((i) => i !== c);
  const hasWrong = q.wrong && wrongIdx.some((i) => q.wrong[i]);
  if(hasWrong){
    s += "Agora, por que as outras alternativas estão incorretas. ";
    wrongIdx.forEach((i) => { if(q.wrong[i]) s += `Alternativa ${LETTERS[i]}: ${speechClean(q.wrong[i])} `; });
  }
  return s;
}

/* ==================== QUIZ LOGIC ==================== */
let filtered = [], current = 0, score = 0, answered = [];
let activeDisc = "all";

/* ---------- Continuar de onde parou (persistência) ---------- */
const SAVE_KEY = "simulado-progresso";

function saveProgress(){
  try{
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      disc: activeDisc,
      order: filtered.map(q=>q.id),
      current, score, answered,
    }));
  }catch(e){/* ignora cota/erros */}
}

function clearProgress(){
  try{ localStorage.removeItem(SAVE_KEY); }catch(e){}
}

function loadProgress(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return null;
    const p = JSON.parse(raw);
    if(!p || !Array.isArray(p.order) || !p.order.length) return null;
    return p;
  }catch(e){ return null; }
}

function showResumeButton(){
  const p = loadProgress();
  const btn = document.getElementById("resumeBtn");
  const meta = document.getElementById("resumeMeta");
  if(!p){ btn.style.display="none"; meta.style.display="none"; return; }
  const total = p.order.length;
  const pos = Math.min(p.current + 1, total);
  btn.style.display = "block";
  btn.textContent = `▶ Continuar de onde parei (questão ${pos} de ${total})`;

  // Desempenho parcial: acertos e erros entre as questões já respondidas
  const byId = new Map(ALL_QUESTIONS.map(q=>[q.id,q]));
  let respondidas = 0, acertos = 0;
  p.order.forEach((id,i)=>{
    const a = p.answered && p.answered[i];
    if(a==null) return;
    respondidas++;
    const q = byId.get(id);
    if(q && a===q.ans) acertos++;
  });
  const erros = respondidas - acertos;
  if(respondidas > 0){
    const pct = Math.round(acertos/respondidas*100);
    meta.style.display = "block";
    meta.innerHTML = `Até aqui: <b class="rm-ok">${acertos} acerto${acertos!==1?"s":""}</b> · <b class="rm-err">${erros} erro${erros!==1?"s":""}</b> · ${respondidas} de ${total} respondidas (${pct}% de acerto)`;
  } else {
    meta.style.display = "none";
  }
}

function resumeQuiz(){
  const p = loadProgress();
  if(!p) return;
  const byId = new Map(ALL_QUESTIONS.map(q=>[q.id,q]));
  filtered = p.order.map(id=>byId.get(id)).filter(Boolean);
  if(!filtered.length){ clearProgress(); return; }
  activeDisc = p.disc || "all";
  // answered é alinhado ao tamanho de filtered
  answered = filtered.map((_,i)=> (p.answered && p.answered[i]!=null) ? p.answered[i] : null);
  // recalcula score a partir das respostas (fonte da verdade)
  score = filtered.reduce((acc,q,i)=> acc + (answered[i]===q.ans ? 1 : 0), 0);
  current = Math.min(p.current || 0, filtered.length-1);
  document.getElementById("startScreen").style.display="none";
  document.getElementById("resultsScreen").style.display="none";
  document.getElementById("quizScreen").style.display="block";
  renderQ();
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}
  return arr;
}

function updateStartMeta(){
  let pool;
  if(activeDisc === "all") pool = ALL_QUESTIONS;
  else if(activeDisc === "real") pool = ALL_QUESTIONS.filter(q=>q.real);
  else pool = ALL_QUESTIONS.filter(q=>q.disc===activeDisc);
  const n = pool.length;
  document.getElementById("startMeta").innerHTML = `Serão exibidas <b>${n} questão${n!==1?"s":""}</b> em ordem aleatória.`;
}

document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeDisc = btn.dataset.disc;
    updateStartMeta();
  });
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("resumeBtn").addEventListener("click", resumeQuiz);
document.getElementById("nextBtn").addEventListener("click", nextQ);
document.getElementById("restartBtn").addEventListener("click", ()=>{ restartQuiz(); });
document.getElementById("backBtn").addEventListener("click", ()=>{
  if(window.TTS) TTS.stop();
  document.getElementById("resultsScreen").style.display="none";
  document.getElementById("startScreen").style.display="block";
  showResumeButton();
});

// Botões de áudio
document.getElementById("listenQ").addEventListener("click", ()=>{
  if(window.TTS) TTS.playTrack(0);
});
document.getElementById("listenExp").addEventListener("click", ()=>{
  if(!window.TTS) return;
  // a explicação é a faixa 1 (a pergunta é a faixa 0)
  TTS.playTrack(1);
});
document.getElementById("listenReview").addEventListener("click", ()=>{
  if(!window.TTS) return;
  const tracks = filtered.map((q,i)=>({
    label:`Revisão Q${i+1} · ${DISC_LABELS[q.disc]}`,
    text: questionNarration(q) + " " + explanationNarration(q),
  }));
  TTS.load(tracks, {autoplay:true});
});

function startQuiz(){
  let pool;
  if(activeDisc === "all") pool = [...ALL_QUESTIONS];
  else if(activeDisc === "real") pool = ALL_QUESTIONS.filter(q=>q.real);
  else pool = ALL_QUESTIONS.filter(q=>q.disc===activeDisc);
  filtered = shuffle(pool);
  current = 0; score = 0; answered = new Array(filtered.length).fill(null);
  document.getElementById("startScreen").style.display="none";
  document.getElementById("quizScreen").style.display="block";
  renderQ();
}

function restartQuiz(){
  document.getElementById("resultsScreen").style.display="none";
  startQuiz();
}

function renderQ(){
  const q = filtered[current];
  const n = filtered.length;
  document.getElementById("progressText").textContent = `Questão ${current+1} de ${n}`;
  document.getElementById("progressBar").style.width = ((current/n)*100)+"%";
  document.getElementById("scoreBadge").textContent = `${score} / ${current}`;
  document.getElementById("qDisc").textContent = DISC_LABELS[q.disc];
  const topicEl = document.getElementById("qTopic");
  topicEl.textContent = q.topic;
  const existing = topicEl.querySelector(".real-badge");
  if(existing) existing.remove();
  if(q.real){
    const badge = document.createElement("span");
    badge.className = "real-badge";
    badge.textContent = "Prova real · " + FONTE_LABEL;
    topicEl.appendChild(badge);
  }
  document.getElementById("qText").textContent = q.q;
  const fb = document.getElementById("feedback");
  fb.style.display="none"; fb.className="feedback";
  document.getElementById("nextBtn").style.display="none";
  const opts = document.getElementById("opts");
  opts.innerHTML="";
  q.opts.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.className="opt-btn";
    btn.innerHTML=`<span class="opt-letter">${LETTERS[i]}</span><span>${opt}</span>`;
    btn.addEventListener("click",()=>selectAnswer(i));
    opts.appendChild(btn);
  });

  // Áudio + estado: se a questão já foi respondida (ao continuar de onde parou),
  // revela a resposta e carrega as duas faixas; senão, carrega só a pergunta.
  if(answered[current]!=null){
    revealAnswer(q, answered[current]);
    if(window.TTS){
      TTS.load([
        {label:`Questão ${current+1} · pergunta`, text: questionNarration(q)},
        {label:`Questão ${current+1} · explicação`, text: explanationNarration(q)},
      ], {autoplay:false});
    }
  } else if(window.TTS){
    TTS.load([{label:`Questão ${current+1} · pergunta`, text: questionNarration(q)}], {autoplay: TTS.isAuto()});
  }
  saveProgress();
}

function revealAnswer(q, chosen){
  const correct = q.ans;
  document.querySelectorAll(".opt-btn").forEach((btn,i)=>{
    btn.disabled=true;
    if(i===correct) btn.classList.add(chosen===correct?"correct":"reveal");
    if(i===chosen && chosen!==correct) btn.classList.add("wrong");
  });
  const fb = document.getElementById("feedback");
  fb.style.display="block";
  fb.className="feedback";
  if(chosen===correct){
    fb.classList.add("correct-fb");
    document.getElementById("fbTitle").textContent="Correto!";
  } else {
    fb.classList.add("wrong-fb");
    document.getElementById("fbTitle").textContent=`Incorreto — resposta correta: ${LETTERS[correct]}`;
  }
  document.getElementById("fbText").textContent=q.exp;
  const scoreSoFar = filtered.slice(0,current+1).reduce((a,qq,i)=>a+(answered[i]===qq.ans?1:0),0);
  document.getElementById("scoreBadge").textContent=`${scoreSoFar} / ${current+1}`;
  const nxt = document.getElementById("nextBtn");
  nxt.style.display="block";
  nxt.textContent = current+1 < filtered.length ? "Próxima questão →" : "Ver resultado →";
}

function selectAnswer(chosen){
  if(answered[current]!=null) return; // já respondida
  const q = filtered[current];
  answered[current] = chosen;
  if(chosen===q.ans) score++;
  revealAnswer(q, chosen);
  saveProgress();

  // Áudio: anexa a explicação como faixa 1 e narra (se o modo Auto estiver ligado)
  if(window.TTS){
    TTS.append({label:`Questão ${current+1} · explicação`, text: explanationNarration(q)}, {autoplay: TTS.isAuto()});
  }
}

function nextQ(){
  current++;
  if(current >= filtered.length){ showResults(); return; }
  renderQ();
}

function showResults(){
  if(window.TTS) TTS.stop();
  clearProgress(); // simulado concluído: não há mais o que retomar
  document.getElementById("quizScreen").style.display="none";
  document.getElementById("resultsScreen").style.display="block";
  const n = filtered.length;
  const pct = Math.round(score/n*100);
  document.getElementById("rScore").textContent = pct+"%";
  document.getElementById("rSubtitle").textContent = `${score} de ${n} questões corretas · ${pct>=60?"Aprovado no critério geral (60%)":"Abaixo do mínimo de 60%"}`;

  // Per-discipline breakdown
  const byDisc = {};
  filtered.forEach((q,i)=>{
    if(!byDisc[q.disc]) byDisc[q.disc]={total:0,correct:0};
    byDisc[q.disc].total++;
    if(answered[i]===q.ans) byDisc[q.disc].correct++;
  });
  const grid = document.getElementById("resultGrid");
  grid.innerHTML="";
  // Overall
  const overall = document.createElement("div");
  const passClass = pct>=60?"pass":"fail";
  overall.className=`result-card ${passClass}`;
  overall.innerHTML=`<div class="rc-label">Geral</div><div class="rc-val">${pct}%</div><div class="rc-sub">${score}/${n} questões</div>`;
  grid.appendChild(overall);
  Object.entries(byDisc).forEach(([disc,data])=>{
    const dp = Math.round(data.correct/data.total*100);
    const minPass = disc==="cg" ? 50 : 50;
    const card = document.createElement("div");
    card.className=`result-card ${dp>=minPass?"pass":"fail"}`;
    card.innerHTML=`<div class="rc-label">${DISC_LABELS[disc]}</div><div class="rc-val">${dp}%</div><div class="rc-sub">${data.correct}/${data.total} questões</div>`;
    grid.appendChild(card);
  });

  // Review
  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML="";
  filtered.forEach((q,i)=>{
    const ok = answered[i]===q.ans;
    const item = document.createElement("div");
    item.className="review-item";
    item.innerHTML=`
      <div class="review-item-head">
        <span class="ri-num">Q${i+1}</span>
        <span class="ri-tag ${ok?"correct-tag":"wrong-tag"}">${ok?"Correta":"Errada"}</span>
        <span style="font-size:12px;color:var(--ink-soft);flex:1;text-align:right">${DISC_LABELS[q.disc]} · ${q.topic}</span>
      </div>
      <div class="review-item-body">
        <div class="ri-q">${q.q.split('\n')[0]}</div>
        ${!ok?`<div class="ri-ans" style="color:var(--red)">Sua resposta: ${answered[i]!==null?LETTERS[answered[i]]+" — "+q.opts[answered[i]]:"não respondida"}</div>`:""}
        <div class="ri-ans" style="color:var(--green)">Correta: ${LETTERS[q.ans]} — ${q.opts[q.ans]}</div>
        <div class="ri-exp">${q.exp}</div>
        <button class="listen-mini ri-listen" type="button" title="Ouvir explicação" aria-label="Ouvir explicação">▶</button>
      </div>`;
    const btn = item.querySelector(".ri-listen");
    btn.addEventListener("click", ()=>{
      if(window.TTS) TTS.load([{label:`Q${i+1} · explicação`, text: explanationNarration(q)}], {autoplay:true});
    });
    reviewList.appendChild(item);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}

/* ---------- Inicialização ---------- */
showResumeButton();
