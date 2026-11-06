# Design QA — Portfólio editorial

Data: 06/11/2026

## Alvo e escopo
Referência visual: https://caiovinicios.vercel.app/.
Implementação: http://127.0.0.1:3101/.
Adaptação da linguagem visual ao portfólio existente, preservando seus cases e rotas. Foto, identidade, textos e projetos são de Wederson. Não se busca reproduzir o conteúdo de Caio nem sua estrutura de URLs.

## Evidência visual
Base dos caminhos abaixo: `.qa/reference-redesign/`.
- Source visual truth path: `source-desktop.jpg`, `source-mobile.jpg`; página completa em `source-desktop-full.jpg` e `source-mobile-full.jpg`.
- Implementation screenshot path: `prototype-desktop.jpg`, `prototype-mobile.jpg`.
- Full-view comparison evidence: `comparison-desktop.jpg`, `comparison-mobile.jpg`, imagens com fonte à esquerda e implementação à direita, abertas conjuntamente para avaliação.
- Focused region evidence: as comparações da abertura permitem ler tipografia, contorno e marca. Regiões adicionais conferidas em `prototype-projects-desktop.jpg`, `prototype-skills-desktop.jpg`, `prototype-skills-mobile.jpg`, `prototype-contact-desktop.jpg` e `prototype-case-desktop.jpg` (região da demonstração).

### Dimensões e normalização
Viewport CSS desktop: 1440 × 1000. Captura JPEG da fonte: 1434 × 996; implementação: 1406 × 990.
Viewport CSS mobile: 390 × 844. Captura JPEG da fonte: 384 × 831; implementação: 375 × 812.
O navegador integrado devolveu JPEGs com pequenas diferenças de dimensão em relação ao viewport. Comparações normalizadas para 900 × 625 por lado no desktop e 390 × 844 por lado no mobile. A avaliação é de composição, hierarquia e linguagem visual, não de alinhamento pixel a pixel. Não foram atribuídas falhas aos limites da captura.
Estado: home, início, tema escuro, menu fechado. Menu expandido, Escape, âncoras e demos também foram exercitados.

## Superfícies de fidelidade
- **Fontes:** Bebas Neue em títulos, Space Grotesk no corpo e Cormorant Garamond nos trechos editoriais, como na referência. Confirmada a família do h1 no navegador. Fontes servidas pelo Next, sem hotlinks na aplicação final. Mesma hierarquia entre título condensado, linha em contorno e texto serifado; quebras adaptadas às especialidades de Wederson.
- **Espaçamento e layout:** retrato à direita no desktop e abaixo do texto no mobile; lista de caminhos com linhas horizontais e hover, contatos centralizados, navegação persistente. Conteúdo técnico adicional preservado. Conferências em 1440, 768 e 390 CSS px sem overflow horizontal.
- **Cores:** base quente #0a0705, marfim #eee6dd e cobre #c6592a. Texto secundário e botões ajustados para leitura superior à referência. Botões usam #ad4a25, com texto #fff7f0.
- **Imagens:** retrato original de Wederson e capturas de projetos preservados. A foto tem composição e iluminação diferentes das do autor da referência; diferença intencional para manter autenticidade. Nenhuma foto, marca ou projeto de terceiro foi incorporado. Sem geração de retrato ou reconstrução de imagens por CSS.
- **Conteúdo:** posicionamento Back-end, Automação e Dados, fatos e resultados das entrevistas preservados. Sem percentuais inventados de habilidade. Estados de conceito e demos fictícias continuam explícitos. Não foram adicionadas experiências em Java, Rails ou Power Platform.

## Histórico da comparação
1. Primeira rodada: a composição editorial, fontes, contorno e paleta se alinharam à referência. Foram encontrados dois ajustes P2: grade com duas células finais vazias e contraste insuficiente do botão cobre com texto claro.
2. Correções: IA aplicada passou a ocupar a última linha inteira; botões receberam cobre mais escuro. O seletor do título de experiência foi corrigido para o componente real.
3. Conferência final: build e lint aprovados; navegador recarregado após reiniciar o servidor da versão final; cor do botão confirmada como rgb(173, 74, 37); capturas desktop/mobile renovadas e comparadas juntas. Sem P0/P1/P2 aberto no escopo.

## Interações e verificações
- Menu mobile abre, fecha com Escape e fecha após navegação por âncora.
- Etapa Validar atualiza o conteúdo e o estado do botão no processo de trabalho.
- Navegação pelos cinco cases e retorno à home.
- FarmGeo: processar lote fictício retorna dois registros preparados e um para revisão.
- Base de conhecimento: pergunta sem informação retorna resposta de insuficiência da documentação fictícia.
- AACB: filtro Pendente retorna um associado fictício.
- Ponto Fixo: troca para empresa B atualiza a consulta para um registro.
- Links internos e identificação das demos mantidos.
- Console do navegador sem erros reportados nas verificações.
- Build de produção, TypeScript e ESLint aprovados. `git diff --check` sem problemas.

## Diferenças intencionais e limites
A navegação mobile tem menu acessível, ausente na referência. Textos secundários têm mais contraste, não há cursor customizado nem conteúdo inicialmente invisível, e a faixa de especialidades é estática. Os detalhes técnicos dos cases e suas demonstrações permanecem. Todas são adaptações para a avaliação profissional de Wederson.
Não foi realizada uma nova auditoria WCAG completa ou medição de performance em dispositivos reais. A validação manual do navegador não deve ser apresentada como certificação de acessibilidade.

## Checklist de entrega
- [x] Referência e implementação capturadas e comparadas conjuntamente.
- [x] Fontes, layout, cores, imagens e conteúdo avaliados.
- [x] Interações principais exercitadas e console conferido.
- [x] Ajustes P2 resolvidos e build final verificado.
- [x] Preview local mantido para revisão do usuário.
- [x] Revisão local concluída; publicação autorizada posteriormente pelo usuário.
- [x] Alterações remotas do currículo incorporadas sem modificar o PDF; botão e verificação apontam para CV_Wederson_Ferreira.pdf.

final result: passed
