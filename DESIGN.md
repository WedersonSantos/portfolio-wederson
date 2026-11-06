---
name: "Wederson Ferreira — Editorial"
description: "Portfólio de back-end, automação e dados com direção adaptada da referência do usuário."
colors:
  background: "#0a0705"
  surface: "#1b1510"
  surface-raised: "#272019"
  foreground: "#eee6dd"
  muted: "#b7a99b"
  accent: "#df865c"
  copper: "#c6592a"
  button: "#ad4a25"
  line: "#49372a"
typography:
  display:
    fontFamily: "Bebas Neue"
    fontWeight: 400
  body:
    fontFamily: "Space Grotesk"
  editorial:
    fontFamily: "Cormorant Garamond"
    fontStyle: italic
  code:
    fontFamily: "Geist Mono"
---

# Direção visual

Referência fornecida pelo usuário: https://caiovinicios.vercel.app/.
Capturas e comparação em `.qa/reference-redesign/`. Adaptação para o conteúdo e as rotas existentes de Wederson; não é uma cópia dos textos, da identidade pessoal ou dos projetos do autor da referência.

## Composição
- Fundo preto quente, títulos condensados em marfim e cobre, segunda linha em contorno.
- Abertura com três especialidades à esquerda e retrato real à direita; no celular, texto seguido do retrato.
- Marca tipográfica com primeiro nome em itálico e sobrenome em cobre.
- Lista de seis caminhos para trajetória e cases. Usar links reais, hover discreto e foco de teclado.
- Faixa estática de especialidades. Não introduzir movimento contínuo sem controle de pausa.
- Cases com imagens reais ou demos identificadas, contribuição, decisões, validação, resultado e aprendizado.
- Habilidades em grade de três colunas, duas em tablet e uma em celular estreito. IA aplicada fecha a grade em linha completa, sem espaços vazios decorativos.
- Contato centralizado, título grande, e-mail, redes e currículo acessíveis.

## Tipografia e espaçamento
As três famílias da referência são carregadas por `next/font/google` e servidas localmente pela aplicação. Geist Mono permanece apenas para código e medidas existentes.
Hero: aproximadamente 9vw em desktop e 18vw no celular, com limites para preservar a leitura. Títulos de seção de 48 a 80px. Corpo entre 14 e 17px; texto editorial entre 23 e 29px. Texto de case com line-height 1.85 e medida limitada a 70ch.
Contêiner máximo de 1240px; margens laterais adaptadas de 56 a 24px. Seções de 112px, 80px em tablet e 64px em celular estreito.

## Imagens e componentes
Retrato próprio de Wederson, sem imagem ou identidade de terceiros. `next/image` mantém proporção e fontes responsivas; a foto principal tem prioridade de carregamento. Máscaras suaves aproximam a composição da referência sem alterar o arquivo original.
As capturas de projetos existentes são preservadas. Ícones reutilizam o sistema SVG já existente no repositório; não adicionar emojis como substitutos de controles.

## Acessibilidade e comportamento
- Menu mobile com nome acessível, estado expandido, fechamento por Escape e retorno do foco.
- Manter skip link, semântica dos títulos, links externos identificados e estados de foco.
- Não ocultar conteúdo atrás de animações de entrada.
- Botões usam cobre mais escuro que o título para contraste com o texto claro.
- Movimento reduzido e modo de cores forçadas preservam legibilidade.
- Manter os filtros e interações das demos, com indicação explícita de dados fictícios.

## Implementação
`app/globals.css` mantém a base funcional dos componentes e das demos. `app/editorial.css`, importado depois, define a nova identidade e suas regras responsivas. O contrato de direção em `app/layout.tsx` reflete esta versão.
O sidecar antigo `.impeccable/design.json` pertence à direção anterior e não é autoridade para esta revisão. Sua sincronização não foi incluída neste trabalho.
