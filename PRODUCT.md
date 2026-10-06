# Produto

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores e pessoas que avaliam o trabalho técnico de Wederson Ferreira. Precisam entender rapidamente seu foco profissional e encontrar exemplos concretos de suas contribuições.

## Product Purpose

Portfólio pessoal que demonstra como Wederson investiga problemas, estrutura soluções e transforma processos manuais ou informações desorganizadas em sistemas funcionais. O conteúdo deve funcionar como evidência de raciocínio técnico, além de apresentar tecnologias.

## Positioning

**Wederson Ferreira — Back-end. Automação. Dados.**

Desenvolvimento de sistemas e soluções técnicas, com foco em Python, PHP, SQL, APIs, integrações, processamento de dados geoespaciais e IA Generativa aplicada. Front-end, design e suporte fazem parte da trajetória, mas não dominam o posicionamento.

## Operating Context

- Sistemas de Informação na Faculdade Anhanguera; conclusão prevista em dezembro de 2026.
- Uberlândia, MG, Brasil.
- Projeto existente: Next.js, TypeScript, Tailwind CSS e App Router.
- Desenvolvimento em etapas, começando por diagnóstico e arquitetura antes de alterar a interface.
- Destino solicitado: GitHub e preparação de deploy gratuito na Vercel; ainda não publicados.

## Capabilities and Constraints

- Apresentar FarmGeo, base de conhecimento apoiada por LLM, Achei Araxá, AACB e Ponto Fixo como cases.
- Distinguir contribuição pessoal de trabalho coletivo, funcionalidade implementada de simulação e conceito de produto em produção.
- Demonstrações usam somente dados fictícios e devem informar isso ao visitante.
- Não inventar métricas, datas, tecnologias, responsabilidades, resultados ou repositórios.
- Não publicar documentação interna, credenciais, dados de clientes nem código proprietário.
- Na base com LLM, a implementação confirmada usa documentação consolidada como contexto em um projeto no ChatGPT. Não chamar de RAG, fine-tuning, API OpenAI, agente autônomo ou sistema multiagente.
- A implementação do chat do Achei Araxá não implica uso confirmado de IA.
- AACB e Ponto Fixo dependem de verificação por funcionalidade antes de receber alegações de implementação ou produção.
- Currículo previsto em `public/curriculo-wederson-ferreira.pdf`; o arquivo ainda não existe.
- Não destacar idade nem expor telefone na tela principal.

## Brand Commitments

Tom técnico, seguro, objetivo e profissional. Evitar clichês de desenvolvedor. Interface escura e sofisticada, espaço negativo e animações que expliquem processamento. Evitar excesso de neon, terminais falsos, gradientes, cards e ícones tecnológicos sem contexto.

## Evidence on Hand

As informações abaixo foram fornecidas pelo usuário no briefing e na resposta de 05/10/2026. São declarações do usuário, não verificação independente de repositórios ou de resultados.

### Projetos

- **FarmGeo, na Owl Mídia:** rotinas Python para leitura, processamento em lote e padronização de KML, Shapefile e GeoJSON; diagnóstico de integridade e incompatibilidade, logs e preparação para ferramentas GIS; QGIS, Mapbox e apoio a mapas interativos. Redução qualitativa de manipulação manual; sem métricas confirmadas.
- **Base de conhecimento com LLM, na experiência com ERP:** consolidação de documentos, organização de conteúdo, contexto em projeto no ChatGPT e instruções para apoiar consultas e diagnóstico.
- **Achei Araxá, na Owl Mídia:** desenvolvimento web, estruturação da interface, organização da plataforma, acessibilidade, usabilidade e desenvolvimento do chat. URL informada: https://achei.araxa.mg.gov.br. Stack específica pendente.
- **AACB:** aplicação de gestão de associados com estrutura descrita para autenticação, dashboard, cadastro, pagamentos, cobranças e configurações. TypeScript, React Native e React informados; repositório e estado de cada recurso pendentes.
- **Ponto Fixo:** projeto autoral de ERP/SaaS multiempresa; conceito de interface, service layer, regras e banco, com `tenantId` e `empresaId`. Implementação e isolamento efetivo ainda não verificados.

### Experiência profissional confirmada

| Empresa | Cargo informado | Período informado | Conteúdo confirmado |
| --- | --- | --- | --- |
| Owl Mídia | Desenvolvedor FullStack | 09/2022–06/2026 | PHP, WordPress, JavaScript, bancos de dados, back-end, integrações, scripts, APIs, automações, diagnóstico e processamento geoespacial em Python. |
| Up Pages | Estágio / Web Designer | 05/2023–11/2023 | WordPress a partir de layouts e projetos no Figma, performance, Core Web Vitals, UX/UI e requisitos. |
| Algar (Whirlpool) | Atendente Telemarketing | 10/2024–01/2026 | Cargo e período. A descrição enviada repete atividades de web design; responsabilidades pendentes de revisão. |
| Apollo Gestão de Sistemas | Analista de Suporte Técnico | 06/2026–09/2026 | Diagnóstico em ERP, SQLTools e SQL, análise de inconsistências, validação de informações fiscais, chamados e base documental apoiada por ChatGPT. |

Os períodos têm sobreposições informadas pelo usuário; preservá-los sem inferir vínculo, carga horária ou exclusividade. Startup financeira confidencial e Unz Company foram citadas, mas cargos, períodos e responsabilidades continuam pendentes.

### Contato e assets

- E-mail público: wedersonsantos2004@gmail.com.
- GitHub: https://github.com/WedersonSantos.
- LinkedIn: https://www.linkedin.com/in/wederson-ferreira-dos-santos-157229247/.
- O currículo PDF final e os repositórios correspondentes dos projetos continuam pendentes. Screenshots reais de cases e da interface estão disponíveis em docs/screenshots.

## Product Principles

1. Apresentar problemas, decisões, contribuições e resultados sustentados por informação confirmada.
2. Fazer a representação de fluxos explicar a solução técnica.
3. Preservar confidencialidade e a distinção entre demonstração e trabalho histórico.
4. Priorizar back-end, automação e dados na hierarquia editorial.
5. Manter leitura, navegação e acesso ao conteúdo mesmo sem animações.

## Accessibility & Inclusion

HTML semântico, navegação por teclado, foco visível, contraste adequado, nomes acessíveis, textos alternativos quando houver imagens e respeito a `prefers-reduced-motion`. Layout responsivo com validação prevista em 1920, 1440, 1024, 768 e 390 px. Evitar conteúdo cuja compreensão dependa apenas de cor, movimento ou hover.


## Implementation Status

Atualização em 05/10/2026: home completa, cinco páginas de cases e demos fictícias implementadas. Capturas reais desktop/mobile dos cases e seções estão em docs/screenshots, substituindo a ausência de evidência visual registrada no diagnóstico inicial. Instalação limpa, build, lint, mobile, controles por teclado e auditorias automatizadas foram verificados; detalhes e limites em docs/VALIDACAO-FINAL.md. GitHub Actions e configuração Vercel preparados, sem publicação remota. PDF final, URL pública e informações não confirmadas continuam pendentes.
