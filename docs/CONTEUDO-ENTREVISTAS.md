# Revisão editorial a partir das entrevistas — 06/11/2026

## Objetivo
Ajudar recrutadores a reconhecer problema, participação pessoal, decisões, validação e resultado. Preservar a identidade visual e distinguir trabalho profissional, formação, proposta e demonstração.

## Estrutura aplicada
Contexto e problema → decisões técnicas → minha contribuição → validação e evidências → resultado e impacto → aprendizado. Validação e aprendizado são opcionais para não preencher projetos em concepção com práticas hipotéticas.

## Fonte das atualizações
Relatos do próprio Wederson nesta conversa, incluindo correções posteriores às primeiras respostas. São relatos profissionais, sem acesso ao código proprietário ou a medições independentes.

### FarmGeo
- Responsabilidade na homologação da API governamental e configuração cloud para download.
- Dados binários → Shapefile (também utilizado pela empresa) → KML; informações JSON como referência. Não assumir que todo JSON mencionado era GeoJSON.
- Comparações por script do conteúdo de origem e convertido, abrangendo geometria e atributos, complementadas por logs e visualização dos mapas.
- Problema concreto: geometria preservada, mas perda de proprietário e cultura/plantio nas primeiras versões. Correção da lógica e substituição de biblioteca, seguida de reprocessamento e conferência dos atributos.
- Python com lotes, multithreading e multiprocessamento: cerca de três dias para três horas, conforme observado pelo usuário. Não converter isso em throughput, SLA ou benchmark formal.
- Sem nomear biblioteca incerta, provedor cloud, volume de registros, hashes, tolerâncias geométricas ou testes automatizados não confirmados.

### Apollo e Achei Araxá
- Base técnica no ChatGPT: benefício qualitativo de centralização e consulta; sem taxa de acerto ou economia de tempo aferida. Não apresentar como agente Copilot Studio ou RAG.
- Achei Araxá: interface e integração do chat ao site dentro de trabalho coletivo. Sem atribuir motor de IA, arquitetura proposta Angular/Java, métricas de atendimento ou validação de acessibilidade formal.

## Limites mantidos
AACB e Ponto Fixo continuam com seus estados de implementação existentes. As demos locais são fictícias e não comprovam funcionalidades de produção. Não acrescentar experiência em Java, Rails, Power Platform, QA formal ou pipelines de projetos de clientes a partir de respostas hipotéticas das entrevistas.

## Pendências anteriores fora desta edição
As datas de experiência e conclusão da graduação divergem entre currículo, exportação do LinkedIn e portfólio. Precisam de conciliação antes de uma revisão cronológica. Esta edição não escolhe novas datas nem altera o PDF do currículo.

## Entrega
Revisão local concluída e publicação no repositório e no site autorizada pelo usuário após a conferência.

## Verificação desta revisão
- ESLint e build de produção com TypeScript: aprovados.
- Home e cinco cases em 1440 e 390 px: HTTP 200, sem overflow horizontal ou erros de JavaScript.
- Verificações axe WCAG A/AA nas 12 combinações de rota e viewport: sem violações reportadas.
- Interação da demonstração FarmGeo conferida; resultado profissional separado da simulação.
- Inspeção visual de capturas desktop/mobile do case e da home.
- Detector de design: avisos consultivos sobre tamanhos tipográficos já existentes; os novos estilos seguem a escala documentada.
