---
name: "Wederson Ferreira"
description: "Portfólio técnico de back-end, automação e dados."
colors:
  background: "#0b1020"
  surface: "#111b2c"
  surface-raised: "#18253b"
  foreground: "#f5f7fa"
  muted: "#a7b0be"
  accent: "#70a7ff"
  cyan: "#67d8e4"
  line: "#2c3a50"
  amber: "#f0bd75"
  violet: "#bea8f5"
  mint: "#7ddbb2"
  accent-hover: "#94bdff"
  backend-surface: "#172d49"
  backend-line: "#355a88"
  amber-surface: "#302419"
  amber-line: "#795c35"
  violet-surface: "#27203b"
  violet-line: "#615080"
  cyan-surface: "#123039"
  cyan-line: "#356772"
  mint-surface: "#14362b"
  mint-line: "#396c56"
  ponto-fixo: "#a5b3ff"
  ponto-fixo-surface: "#212c4b"
  ponto-fixo-line: "#52639a"
  technology-border: "#344156"
  warning: "#edc891"
  map-fill: "#286a4c"
  map-grid: "#252d39"
  map-pending: "#111620"
  map-preview-muted: "#bad5c8"
  map-source-surface: "#204735"
  map-source-text: "#b1efcd"
  connector-muted: "#617188"
  process-surface: "#201b35"
  process-muted: "#c0b8d5"
  process-line: "#453959"
  process-hover: "#302644"
  process-selected: "#382b50"
  process-selected-text: "#f5f0ff"
  process-output: "#b1e8d2"
  contact-surface: "#f0eee7"
  contact-surface-raised: "#e5e5df"
  contact-foreground: "#172434"
  contact-muted: "#526172"
  contact-accent: "#23589c"
  contact-focus: "#146b68"
  contact-line: "#c6cbd0"
  contact-hover: "#19477f"
  contact-selection: "#c2d6ef"
  button-foreground: "#080a0f"
  selection: "#294776"
  selection-text: "#fff"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 6.1vw, 5.45rem)"
    fontWeight: 680
    lineHeight: 1.04
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.8rem)"
    fontWeight: 560
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.02em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "21px"
    fontWeight: 450
    lineHeight: 1.5
  label:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 550
    lineHeight: 1.6
    letterSpacing: ".13em"
  button:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 560
    lineHeight: 1.6
  flow-title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 550
    lineHeight: 1.6
  flow-detail:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  step-number:
    fontFamily: "Geist Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
  case-display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.04em"
  case-title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "40px"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-.035em"
  row-title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-.02em"
  narrative:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.85
  demo-heading:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-.03em"
  demo-title:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 550
    lineHeight: 1.15
rounded:
  focus: "3px"
  file-source: "4px"
  technology: "5px"
  action: "6px"
  flow: "8px"
spacing:
  tight: "8px"
  compact: "12px"
  inline: "16px"
  control: "20px"
  group: "24px"
  row: "32px"
  roomy: "48px"
  section-mobile: "64px"
  section-tablet: "80px"
  section-desktop: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.button-foreground}"
    typography: "{typography.button}"
    rounded: "{rounded.action}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-quiet:
    textColor: "{colors.muted}"
    typography: "{typography.button}"
    rounded: "{rounded.action}"
    padding: "13px 4px"
  button-quiet-hover:
    textColor: "{colors.foreground}"
  navigation:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
    height: "88px"
  technology:
    textColor: "{colors.muted}"
    rounded: "{rounded.technology}"
    padding: "7px 13px"
  technology-primary:
    backgroundColor: "{colors.backend-surface}"
    textColor: "{colors.accent}"
    rounded: "{rounded.technology}"
    padding: "7px 13px"
  flow-node:
    backgroundColor: "{colors.amber-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.flow}"
    padding: "12px 16px"
  flow-node-backend:
    backgroundColor: "{colors.backend-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.flow}"
    padding: "12px 16px"
  process-step:
    textColor: "{colors.process-muted}"
    padding: "18px 14px 24px"
  process-step-selected:
    textColor: "{colors.process-selected-text}"
  demo-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.flow}"
  demo-select:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.technology}"
    padding: "12px"
    height: "48px"
  resume-disabled:
    backgroundColor: "{colors.contact-surface-raised}"
    textColor: "{colors.contact-muted}"
    rounded: "{rounded.action}"
    padding: "13px 20px"
  resume-download:
    backgroundColor: "{colors.contact-accent}"
    textColor: "{colors.selection-text}"
    rounded: "{rounded.action}"
    padding: "13px 20px"
  portrait-image:
    rounded: "{rounded.flow}"
    width: "min(100%, 320px)"
  project-image-window:
    backgroundColor: "{colors.button-foreground}"
    rounded: "{rounded.flow}"
  contact:
    backgroundColor: "{colors.contact-surface}"
    textColor: "{colors.contact-foreground}"
---

# Design System: Wederson Ferreira

## Overview

**Creative North Star: "Do problema ao resultado"**

A direção “Do problema ao resultado” organiza uma interface de engenharia: escura, técnica, objetiva e profissional. Tipografia grande, espaço negativo e linhas discretas tornam a leitura prioritária; a base marinho recebe azul para back-end, âmbar para automação, verde para dados, violeta no processo e marfim no contato. Ciano preserva o foco e as integrações.

A profundidade vem de superfícies próximas e bordas finas. O movimento explica a conexão entre etapas do fluxo, pode ser pausado e respeita redução de movimento. A aparência preserva o compromisso visual de PRODUCT.md e do contrato em app/layout.tsx: sem brilho, excesso de neon, terminais falsos, gradientes ou ícones tecnológicos sem contexto.

**Key Characteristics:**

- Fundo escuro e superfícies tonais próximas.
- Geist para leitura e Geist Mono para números das etapas.
- Acentos por função, etapas e case; contato em marfim.
- Divisores finos, cantos discretos e espaço negativo.
- Fluxo legível com ou sem animação.

Esta atualização registra os valores e a cascata de app/globals.css, app/layout.tsx e components. A expansão cromática foi conferida no código; não houve nova validação renderizada nem novas capturas. As capturas anteriores em docs/screenshots não comprovam a nova paleta. O frontmatter registra valores observados e o sidecar não mantém rampas sintetizadas antigas.

## Colors

A base marinho sustenta acentos funcionais e um fechamento em marfim. Os valores canônicos estão no frontmatter; as combinações abaixo descrevem a cascata real.

### Primary

- **Azul de back-end — accent:** palavra Back-end no hero, primeira área de atuação, ação principal e função padrão da Stack.
- **Azul de resposta — accent-hover:** hover global da ação principal; dentro dos cases o hover mistura a cor do projeto com 18% de branco.
- **Ciano de integração — cyan:** foco global, pacotes, etapa Dados do fluxo, integração da Stack e AACB.

### Secondary

- **Âmbar de automação — amber:** Automação no hero, segunda área de atuação, Stack de automação, Entrada do fluxo e Achei Araxá.
- **Verde de dados — mint:** Dados no hero, terceira área de atuação, Stack de dados, Resultado do fluxo e FarmGeo.
- **Violeta de processo — violet:** Processamento do fluxo, seção de processo, Base de conhecimento, Web e IA aplicada na Stack.
- **Lavanda de ERP — ponto-fixo:** identificação do Ponto Fixo, separada do violeta da base de conhecimento.

### Tertiary

- **Aviso de revisão — warning:** registros separados para análise nas demos, sempre acompanhados de texto.
- **Azul de contato — contact-accent:** e-mail, hover de links e download na seção clara; contact-focus define o foco verde escuro local.

### Neutral

- **Marinho técnico — background:** fundo principal e navegação sticky.
- **Marinho de seção — surface:** menu móvel e corpo dos painéis de demonstração.
- **Marinho elevado — surface-raised:** campos nativos e hover de retorno ao topo.
- **Branco frio — foreground / cinza de leitura — muted:** texto principal e secundário no mundo escuro.
- **Marinho divisor — line:** bordas e separações globais.
- **Superfícies funcionais:** backend-surface, amber-surface, violet-surface, cyan-surface e mint-surface preenchem etapas e tecnologias prioritárias; bordas e ícones recebem o respectivo acento.
- **Superfícies de case:** FarmGeo usa mint-surface/mint-line; Base de conhecimento usa violet-surface/violet-line; Achei Araxá usa amber-surface/amber-line; AACB usa cyan-surface/cyan-line; Ponto Fixo usa ponto-fixo-surface/ponto-fixo-line. Título, categoria, CTA, número de etapa e cabeçalho de demo acompanham a identidade do case.
- **Verde de mapa:** map-fill e mint no terreno; no preview, mint-line substitui a grade global map-grid. Geometria pendente conserva map-pending, connector-muted e traço pontilhado. Fontes usam map-source-surface/map-source-text; legenda e caminhos usam map-preview-muted.
- **Violeta de seção:** process-surface, process-muted e process-line ficam restritos ao processo. Hover usa process-hover, seleção móvel process-selected, texto selecionado process-selected-text e saída process-output.
- **Marfim de contato — contact-surface:** área clara local com color-scheme light. contact-foreground, contact-muted, contact-line e contact-surface-raised mantêm conteúdo, divisores e fallback legíveis. O download tem texto branco; hover usa contact-hover. Seleção local usa contact-selection e contact-foreground.
- **Seleção global — selection / selection-text:** seleção de texto no mundo escuro.

Não há percentual de uso de acento estabelecido. Etapas, funções e cases preservam texto e estrutura; a cor não substitui seus rótulos.
## Typography

**Display Font:** Geist, com Arial e sans-serif como fallback.  
**Body Font:** Geist, com Arial e sans-serif como fallback.  
**Label/Mono Font:** Geist Mono, com monospace como fallback, usada nos números das etapas, períodos e identificação de formatos de dados.

A família é direta e compacta. Peso, escala, contraste e quebra editorial estabelecem hierarquia; não há escala matemática uniforme declarada.

### Hierarchy

- **Display:** título do hero; letras apertadas e linhas próximas. Em até 1100px usa `clamp(3rem, 6vw, 4.3rem)`; em até 800px, `clamp(3.3rem, 9vw, 4.5rem)`; em até 600px, `clamp(2.7rem, 11vw, 4rem)`.
- **Headline:** títulos de seção; a segunda linha em cinza mantém o mesmo peso. Em até 600px o tamanho é fixado em (30px).
- **Title:** título do detalhe de processo; em até 600px muda para (21px).
- **Body:** base do documento; descrição do hero usa (15px, entrelinha 1.8), sobre usa (17px, entrelinha 1.85, largura máxima 65ch), e explicação de processo usa (14px, entrelinha 1.85). No celular a descrição do hero usa (14px) e a apresentação de atuação usa (15px).
- **Lead:** introdução do hero, reduzida para (19px) em até 1100px e (18px) em até 600px.
- **Label:** identificação do hero em caixa alta; no celular usa (11px) e espaçamento (.11em). Navegação usa (14px).
- **Flow title/detail:** fluxo HTML com título (14px, peso 550) e detalhe (12px). O SVG usa coordenadas tipográficas de (16px) e (11px), dimensionadas pelo viewBox.
- **Step number:** sequência numérica monoespaçada; números ativos recebem violeta na seção de processo.
- **Technology:** rótulos (12px), reduzidos a (11px) em até 600px.

As variantes responsivas de fonte e o raio file-source de 4px são observações locais existentes, não novas escalas universais. O aviso herdado do detector de drift tipográfico/raio não autoriza transformar divergências ou defeitos em regras globais.

## Layout

O contêiner central usa `min(1240px, calc(100% - 96px))`. O ritmo de seção é (112px) acima e abaixo. Texto e listas ficam diretamente no fundo; divisores separam blocos sem transformar cada grupo em um card.

No desktop, o hero usa duas colunas (1.05fr / 1fr), intervalo (60px) e respiro superior (92px). A composição alterna texto e diagrama; a linha inferior ocupa as duas colunas. A seção Sobre usa (1fr / 1.08fr) com intervalo (96px). Processo usa cinco etapas em linha e detalhe em duas colunas; Stack usa linhas de definição em (1fr / 1.5fr).

| Condição observada | Mudança |
| --- | --- |
| A partir de 1600px | Hero com respiro superior de 112px e intervalo de 90px. |
| Até 1100px | SVG dá lugar à lista HTML do fluxo; contêiner com 32px por lado; hero ainda com duas colunas, intervalo de 30px e respiro superior de 72px. |
| Até 800px | Hero e Sobre empilhados; hero com intervalo de 54px; fluxo centralizado em até 540px; seções com 80px; cabeçalho de seção empilhado. |
| Até 600px | Contêiner com 20px por lado; menu recolhido; hero com respiro superior de 48px e intervalo de 42px; ações empilhadas; seções com 64px; etapas, detalhe do processo e Stack em uma coluna. |

A lista HTML do fluxo limita a largura a (440px), com padding (28px 18px), espaço entre nós (18px) e conectores verticais. A barra de navegação mede (88px), reduzindo a (72px) no celular. Scroll suave considera a barra, com `scroll-padding-top` de (100px), ou (88px) no celular.

As linhas de projeto com imagem usam colunas de 280px / conteúdo flexível / ação e intervalo de 32px; até 1100px, imagem de 220px e intervalo de 24px. Até 800px a imagem ocupa a linha inteira, limitada a 540px; até 600px tudo fica em uma coluna com intervalo de 18px. A figura de case começa 44px após o cabeçalho, ou 32px no celular.

## Elevation & Depth

O sistema não usa sombras nem blur. A profundidade é tonal: fundo, superfície e superfície elevada, reforçados por bordas de (1px). O diagrama usa traçados finos; bordas e superfícies âmbar, violeta, azul, ciano e verde distinguem as cinco etapas. A navegação é opaca, sticky e separada por uma linha. Não há glow.

O movimento pertence ao fluxo: traçado pontilhado em (5s), pacotes SVG em (6.4s), pacotes HTML em (2.4s), todos lineares. A interface pausa o fluxo fora da área visível e oferece controle manual. `prefers-reduced-motion` remove animações e transições, oculta pacotes e controle e preserva títulos, detalhes e conexões. Links e botões transitam cor, fundo e borda em (160ms ease).

## Shapes

Retângulos com curvas discretas mantêm precisão; fontes de arquivo usam raio file-source (4px): ações e controles usam o raio action, etiquetas usam technology e nós usam flow. O foco possui contorno ciano global ou verde escuro no contato de (2px), afastamento de (5px) e raio focus. Não há recortes decorativos.

Os ícones são SVG de linha com pontas e junções arredondadas; a base mede (20px), com tamanhos menores por contexto. A marca textual usa “w” e ponto azul. Círculos pequenos representam portas e pacotes; um losango de borda azul marca a formação. Estas formas têm funções observadas, não compõem uma ornamentação livre.

## Components

### Buttons

Ações compactas e diretas. O primário usa fundo azul e texto do fundo, com ícone de seta (17px), intervalo (18px) e altura mínima (48px). No celular a altura mínima é (46px). O quiet mantém fundo transparente e texto cinza; hover clareia o texto. No celular sua altura mínima é (38px).

O foco de ambos segue o contorno ciano global. As ações de navegação são links sem estado visual pressed. O currículo disponível usa link de download azul escuro e texto branco no contato marfim. Se o arquivo faltar, estiver ilegível ou não tiver assinatura PDF, o fallback usa superfície elevada local, texto muted local e atributo disabled, com alternativa por e-mail. Os CTAs existentes são links, preservando destinos de âncora.

### Chips / Tags

Tecnologias são itens de lista estáticos. A variante comum tem fundo transparente e borda divisor; a prioritária acompanha a função: azul padrão/back-end, verde em Dados, ciano em Integração, âmbar em Automação e violeta em Web/IA aplicada. O fundo usa a superfície funcional e a borda mistura o acento a 40% com o fundo global. O grupo permite quebra de linha com intervalo (8px). Não há seleção, hover ou ação de filtro nestes itens.

### Cards / Containers

Não há card genérico como estrutura da página. Os contêineres visuais fechados incluem o preview geométrico, o painel de demonstração e os nós do fluxo: superfície escura ou funcional, borda fina, raio flow. No HTML o conteúdo é horizontal com ícone (18px), intervalo (14px), título e detalhe; cada nó usa superfície e contorno da própria etapa. No SVG os nós medem (220 × 60 unidades) e alternam as posições conectadas.

Listas de atuação e tecnologias usam linhas e espaçamento diretamente na seção. A seção de processo recebe fundo process-surface e bordas process-line superior e inferior.

### Navigation

A marca e os links ficam em uma barra sticky. Links comuns começam em cinza e clareiam no hover; o contato tem texto claro e seta (16px). Não há indicador de seção atual implementado.

Até 600px, um botão de (44 × 44px) abre o menu vertical sob a barra. O menu possui fundo surface, links com padding (12px) e separação antes do contato. Estado expandido tem nome acessível; Escape, clique externo ou escolha de link fecham o menu. Escape devolve o foco ao botão.

### Process Steps

Cinco botões numerados alteram um painel de detalhe. No desktop, a etapa selecionada tem borda inferior violeta de (2px); hover clareia o texto e usa process-hover. Em até 600px, a lista se torna vertical, cada botão mede pelo menos (52px) de altura, e o selecionado usa process-selected e mostra a seta violeta.

Os botões usam `aria-pressed`, controlam a região de detalhe e atualizam uma região `aria-live="polite"`. Não são tabs ARIA. O painel mantém pergunta, explicação e entradas; a saída usa verde claro process-output.

### Technical Flow

A sequência Entrada → Processamento → Back-end → Dados → Resultado é a assinatura explicativa existente. As etapas usam respectivamente âmbar, violeta, azul, ciano e verde, com fundos funcionais escuros; título e detalhe mantêm os valores de leitura globais. O SVG acima de 1100px alterna nós e rotas; em até 1100px a lista HTML preserva a ordem, o conteúdo e a conexão vertical. Títulos e detalhes são conteúdo legível; pacotes e traçados animados são apoio.

O controle alterna “Pausar fluxo” e “Animar fluxo”, com ícone e `aria-pressed`. A representação é conceitual, conforme o texto acessível do SVG. Não exige hover para revelar informação.

### Text Links and Return to Top

Links textuais usam texto claro, seta (16px) e hover azul. O retorno ao topo é um controle de (40 × 40px), contorno divisor, raio action e hover com superfície elevada. Links externos existentes informam abertura em nova aba. O link “Pular para o conteúdo” aparece quando recebe foco.

A interface contém selects nativos e tabelas nas demos. Não contém formulário de envio, diálogos ou tooltips.


### Project Index and Case Reading
O case em destaque usa texto e diagrama em duas colunas, com intervalo (90px), reduzido a (40px) até 1100px e empilhado até 800px. Os outros cases usam linhas com conteúdo e ação, não uma grade de cards. No celular, a ação fica abaixo do texto. Categorias são metadados abaixo do nome do case.

As páginas de case organizam a narrativa em duas colunas com intervalo (80px), tornando-se uma coluna até 600px. O fluxo de cinco etapas usa uma linha no desktop e sequência vertical até 800px. Os números representam a ordem de processamento. O texto narrativo usa entrelinha (1.85); descrições da trajetória limitam a largura a (70ch).

### Demonstration Panel
O painel de demonstração é uma superfície delimitada, com borda fina, raio flow e áreas separadas por divisores. Cabeçalho e corpo usam padding (36px), ajustado a (20px) no celular. A identificação de demonstração fictícia é uma divulgação factual obrigatória, nunca um eyebrow decorativo.

O corpo usa duas colunas quando necessário e uma coluna até 600px. Entrada, resultado vazio, saída preparada e registro separado para revisão ficam no mesmo fluxo de leitura. O resultado usa ciano; o aviso de revisão usa warning, acompanhado de texto explícito. Resultados mutáveis usam regiões de atualização acessíveis. O esquema do FarmGeo tem papel group e nome acessível; os mapas são SVG geométrico, com grade apenas dentro do mapa.

### Selects and Tables
Selects nativos têm rótulo associado, superfície elevada, contorno technology-border, raio technology, padding (12px), texto (14px) e altura mínima (48px). Mantêm foco visível e o comportamento de teclado nativo.

Tabelas têm caption, cabeçalhos semânticos, alinhamento à esquerda, divisores de linha e conteúdo (14px), reduzido a (12px) no celular. O contêiner permite rolagem interna e foco de teclado; a página não ganha rolagem horizontal. A ação de histórico mede pelo menos (44px) de altura. Mudar filtro ou contexto atualiza os registros locais, sem afirmar autenticação, pagamento ou segurança de backend.

### Experience, Contact and Resume
A trajetória usa data e conteúdo em duas colunas (1fr / 2fr), empilhadas até 800px. A experiência complementar usa details/summary nativos. Contato usa duas colunas (1.6fr / 1fr), que se empilham até 800px; o bloco de currículo muda a separação lateral para divisor superior.

E-mail e redes são links reais. O PDF está presente em public/curriculo-wederson-ferreira.pdf. hasResume verifica abertura e assinatura %PDF- antes de exibir o link com atributo download. Se essa verificação falhar, o botão indisponível usa contact-surface-raised, contact-muted e atributo disabled; a alternativa por e-mail permanece disponível. As menções de PDF pendente em PRODUCT.md são históricas e não descrevem este estado atual. O footer preserva nome, posicionamento, localização, disclosure de dados fictícios, contato e retorno ao conteúdo.

### Portrait and Project Captures

O retrato na seção Sobre usa a primeira fotografia fornecida, preservada em public/images/wederson-perfil.jpg (1280 × 1280), com alt “Retrato de Wederson Ferreira” e legenda nominal. A largura é limitada a 320px, ou 300px até 600px, mantendo proporção e cantos flow; não recebe moldura decorativa.

ProjectVisual é a figura reutilizável da lista e dos cases. O mapa original do FarmGeo, a captura fornecida do Achei Araxá, a consulta no ChatGPT da Base de conhecimento e o painel operacional do Ponto Fixo usam “Interface do projeto”; a legenda do Ponto Fixo indica modo demo e valores demonstrativos. A captura histórica da demo da AACB usa “Demonstração fictícia”. A legenda da Base de conhecimento distingue a sugestão de SQL de sua validação técnica. Essas capturas são assets de conteúdo: não comprovam a renderização atual, produção, integração de backend ou resultado profissional. A proveniência é registrada em docs/IMAGENS.md.

A janela preserva proporção, fundo button-foreground, borda contextual fina (1px) e cantos flow. O mapa inteiro mantém sua proporção original; as demos usam o recorte definido em data/project-visuals.ts. Os originais não são editados: a janela aplica overflow hidden, e a imagem absoluta usa largura percentual e deslocamento left/top derivados das coordenadas de recorte. Não criar cortes adicionais por conveniência editorial.

A figura completa, usada no destaque e após o cabeçalho de cada case, inclui rótulo factual, legenda descritiva e “Abrir imagem”, com aviso acessível de nova aba e rel noopener noreferrer. O link abre o original completo, não o recorte. A variante compacta na lista mantém imagem e rótulo factual; a ação “Ver case” permanece separada. Legendas usam texto muted e rótulos acompanham a cor do case, sempre com identificação textual.

As imagens usam next/image com alt específico, dimensões intrínsecas e sizes responsivos, sem priority ou preload: permanecem com carregamento lazy padrão. O retrato declara sizes “(max-width: 600px) 280px, 320px”; capturas compactas declaram largura móvel, 220px até 1100px e 280px acima; figuras completas declaram largura móvel/tablet e limite 1240px. Essas declarações de carregamento são observações do código, não novas escalas globais.

## Do's and Don'ts

### Do:

- **Do** usar azul para back-end, âmbar para automação, verde para dados e violeta para o processo, preservando os rótulos.
- **Do** manter ciano no foco global e pacotes; no contato marfim, usar os tokens locais de texto, ação, seleção e foco.
- **Do** agrupar tecnologias por função e distinguir as principais com superfície e borda.
- **Do** conservar títulos e detalhes do fluxo HTML em 14px e 12px.
- **Do** preservar o fluxo estático, o foco visível e o respeito a prefers-reduced-motion.

- **Do** preservar originais, alt específico, legenda factual e a distinção entre interface do projeto e demonstração fictícia.

### Don't:

- **Don't** introduzir excesso de neon, brilho, gradientes ou terminais falsos.
- **Don't** substituir as listas e divisores por uma grade indiscriminada de cards.
- **Don't** usar ícones tecnológicos sem contexto ou tornar a compreensão dependente de movimento, cor ou hover.


- **Don't** tratar capturas históricas das demos como prova da renderização atual ou de funcionalidade em produção.
