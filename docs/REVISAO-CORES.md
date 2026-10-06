# Revisão de cores — 2026-10-05

Pedido: ampliar a cor do portfólio mantendo o preview do Codex fechado; usuário trabalha no VS Code.

## Alterações
- Base marinho, superfícies com tonalidade azul e divisores discretos.
- Hero: azul para back-end, âmbar para automação e verde para dados.
- Fluxo: cinco etapas com cores e superfícies próprias, preservando rótulos, pausa e movimento reduzido.
- FarmGeo: preview verde, arquivos e mapa com contraste tonal.
- Cases: cores próprias nos metadados, links, título e cabeçalho da demonstração.
- Processo: região violeta; stack e atuação recebem cor por função.
- Contato: marfim com texto e links escuros; currículo e destinos existentes preservados.

## Verificação desta revisão
- ESLint: passou.
- Build de produção com webpack e TypeScript: passou; cópia isolada em .qa/color-build para preservar o cache do ambiente do VS Code.
- 24 pares da paleta calculados segundo luminância relativa WCAG: mínimo 5,43:1. Este cálculo não substitui auditoria da página renderizada.
- Detector Impeccable executado uma vez: apenas avisos de documentação de cores e variantes responsivas herdadas.
- Não foram produzidos novos screenshots nem executada nova auditoria mobile/renderizada. A revisão automática de permissões rejeitou abrir uma nova aba de teste localhost porque o usuário pediu o fechamento do preview. Não foi usado outro navegador como alternativa.
- Os screenshots e auditorias anteriores descrevem a versão anterior à revisão de cores.

A estrutura, navegação, conteúdo factual e lógica das demonstrações não foram alterados.
