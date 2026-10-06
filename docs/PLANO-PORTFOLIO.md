# Diagnóstico e arquitetura proposta

Diagnóstico inicial e proposta das etapas 1 e 2 do briefing, preservados como histórico. **Atualização em 05/10/2026:** interface, cinco cases com demos fictícias, experiência, contato, currículo preparado e footer foram implementados. Instalação limpa, build, lint e validação responsiva passaram. README, screenshots, GitHub Actions e configuração Vercel foram preparados. Publicação remota e conteúdo pendente continuam a confirmar. Consulte [VALIDACAO-FINAL.md](VALIDACAO-FINAL.md) para o estado atual.

## 1. Estado inicial

| Item | Encontrado | Decisão |
| --- | --- | --- |
| Framework | Next.js 16.3.8 declarado; App Router | Preservar estrutura e versão se a instalação for validada. |
| UI | React e React DOM 19.2.8 declarados | Não adicionar outra camada de UI. |
| Linguagem | TypeScript 5, `strict: true`, alias `@/*` | Preservar tipagem estrita. |
| Estilos | Tailwind 4 via `@tailwindcss/postcss` | Manter integração existente. Não criar configuração legada do Tailwind 3. |
| Página | Scaffold padrão em `app/page.tsx` | Substituir por etapas, começando pela Navigation e pelo Hero. |
| Layout | Geist/Geist Mono via `next/font/google`; `lang="en"` e metadata padrão | Localizar para `pt-BR` e atualizar metadata durante implementação. |
| CSS | Tokens claros/escuros padrão; `body` usa Arial apesar de carregar Geist | Definir tokens escuros e aplicar a família tipográfica escolhida na etapa 3. |
| Dependências | `node_modules` incompleto; sem `package-lock.json` | Corrigir instalação antes de iniciar a interface. |
| Git | Inicialmente sem repositório; Git local inicializado na branch `main` durante o diagnóstico | Usar commits pequenos nas próximas entregas; etapa 10 concentra GitHub e README. Não há commits, remote ou publicação realizados. |
| Assets | Somente imagens do scaffold; currículo ausente | Não criar downloads ou evidências inexistentes. |

### Validação inicial

- `npm ls --depth=0`: dependências ausentes e Next inválido/incompleto.
- `npm run build`: falha porque o comando `next` não foi encontrado.
- `npm run lint`: falha porque o comando `eslint` não foi encontrado.
- Node disponível: 26.10.0; npm disponível: 11.19.1.
- A primeira tentativa de instalação, em sandbox, foi bloqueada por acesso de rede (`EACCES`). Depois da liberação pela ferramenta, três tentativas falharam: duas por timeout (`EIDLETIMEOUT`) e uma por conexão interrompida (`ECONNRESET`), com ocorrências de falha de resolução (`ENOTFOUND`) nos logs.
- As tentativas posteriores reutilizaram o cache, aumentaram o timeout e reduziram downloads simultâneos. Não houve mudança nas versões declaradas nem geração de `package-lock.json`.
- O npm desfez instalações parciais; `next`, `eslint` e componentes nativos ainda não estão disponíveis para validar a execução. Houve também avisos de limpeza `EPERM` em diretórios do Next; não foi feita remoção manual desses diretórios.
- **Situação final desta etapa:** diagnóstico e proposta registrados; build, lint e execução HTTP não validados por instalação incompleta e falhas de rede. Nenhum erro de código foi confirmado. Não houve alteração em `app/page.tsx`, `app/globals.css` ou `app/layout.tsx`.

As versões acima são as declaradas em `package.json`, não uma instalação validada. Antes da implementação, retomar a instalação e executar, no diretório `portfolio-wederson`:

```bash
npm install
npm run build
npm run lint
npm run dev
```

Confirmar a resposta da página local após o servidor iniciar. O cache usado nas tentativas deste ambiente está em `../.npm-cache`, fora do repositório da aplicação; ele contém apenas artefatos de instalação e não deve ser publicado.

## 2. Arquitetura de informação

Página principal com navegação por âncoras e cases completos, expansíveis ou em rotas próprias conforme sua extensão. A primeira entrega de interface conterá apenas as seções efetivamente implementadas; links não apontarão para âncoras futuras.

| Ordem | Seção | O que o visitante deve entender |
| --- | --- | --- |
| 1 | Navigation + Hero | Wederson Ferreira; back-end, automação e dados; Python, PHP, SQL e APIs; caminho para os cases. |
| 2 | Sobre / Como trabalho | Desenvolvimento, integração, investigação de falhas e organização de dados, com formação e localização em contexto secundário. |
| 3 | Processo | Entender → investigar → estruturar → desenvolver → validar. |
| 4 | Cases | Primeiro FarmGeo; depois base com LLM, Achei Araxá, AACB e Ponto Fixo. |
| 5 | Stack por função | Back-end, dados, integração, automação, web, ferramentas e IA; tecnologias complementares com peso secundário. |
| 6 | Experiência | Contribuições e contexto profissional; datas e cargos confirmados, mantendo o foco técnico. |
| 7 | Currículo + Contato | Download quando houver arquivo; LinkedIn, GitHub e e-mail público. |
| 8 | Footer | Identidade e acesso discreto às referências profissionais. |

O processo e os cases carregam a narrativa. A stack confirma as ferramentas usadas e não substitui evidência de trabalho. Os cases profissionais descrevem contribuições pessoais em contexto profissional; colaboração e composição de equipe entram apenas quando confirmadas, sem presumir autoria integral.

## 3. Estrutura de código proposta

```text
app/
  layout.tsx                 # idioma, fontes, metadata global
  page.tsx                   # composição das seções
  globals.css                # tokens, base e movimento reduzido
  projetos/[slug]/page.tsx   # etapa 5: leitura aprofundada dos cases
components/
  layout/
    Navigation.tsx
    MobileNavigation.tsx
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    WorkProcess.tsx
    Projects.tsx
    TechStack.tsx
    ExperienceTimeline.tsx
    Resume.tsx
    Contact.tsx
  projects/
    ProjectCase.tsx
    ProjectFlow.tsx
    DemoNotice.tsx
  flow/
    TechnicalFlow.tsx
    FlowController.tsx
  ui/
    Container.tsx
    SectionHeading.tsx
    TextLink.tsx
data/
  profile.ts
  projects.ts
  experience.ts
  stack.ts
  process.ts
types/
  portfolio.ts
public/
  curriculo-wederson-ferreira.pdf  # somente quando fornecido
  screenshots/                   # capturas reais posteriores
docs/
  PLANO-PORTFOLIO.md
PRODUCT.md                        # fatos e limites editoriais
```

Criar cada arquivo apenas quando a etapa precisar dele. `page.tsx` permanece pequeno. Componentes de conteúdo usam renderização no servidor; menu mobile, seleção de etapas e demonstrações podem ser pequenas ilhas client. Não transformar o site inteiro em um componente client nem acrescentar APIs e banco ao portfólio sem necessidade.

Rotas dos cases serão geradas a partir de slugs conhecidos. O formato de resumo na home deve mostrar problema, contribuição e resultado; a leitura completa usa problema → contexto → decisão → implementação/contribuição → resultado/evidência. Essa arquitetura é uma proposta para o portfólio, não uma afirmação sobre a arquitetura histórica dos projetos apresentados.

## 4. Dados e veracidade

Modelos tipados pequenos, sem CMS nesta fase:

- **Profile:** identidade, posicionamento, contatos confirmados, formação e disponibilidade do currículo.
- **ProjectCase:** slug, título, vínculo profissional/autoral, problema, contexto, decisões confirmadas, contribuição pessoal, implementação, resultado qualitativo, tecnologias confirmadas e passos do fluxo.
- **Feature:** descrição e estado por recurso: implementado, simulado, em desenvolvimento, planejado ou não verificado.
- **Evidence:** origem da informação e link público opcional. Relato do usuário não equivale a repositório inspecionado.
- **Demo:** passos, conteúdo sintético e identificação visível; estado independente do projeto histórico.
- **Experience:** empresa, cargo, responsabilidades, início/fim opcionais e pendências explícitas.

Separar situação do projeto, situação de cada funcionalidade e disponibilidade do código. Ausência de URL não autoriza inventar um repositório. Cases sem repositório confirmado podem mostrar “Case técnico”; “código proprietário” apenas quando a condição estiver confirmada.

### Limites por case

| Case | Conteúdo permitido | Ainda não afirmar |
| --- | --- | --- |
| FarmGeo | Python, KML, Shapefile, GeoJSON, lotes, padronização, diagnóstico, logs, GIS, QGIS, Mapbox e menor manipulação manual | Percentuais, volumes, bibliotecas não informadas ou autoria integral do produto. |
| Base com LLM | Documentos consolidados, organização, contexto e prompts em projeto no ChatGPT | RAG, embeddings, banco vetorial, fine-tuning, API OpenAI, agentes ou eliminação garantida de alucinações. |
| Achei Araxá | Desenvolvimento web, interface, organização, acessibilidade/usabilidade e chat | Stack específica, IA ou conformidade certificada de acessibilidade. |
| AACB | Estrutura informada para gestão de associados; TypeScript, React Native e React | Persistência, autenticação efetiva, cobranças reais, Node/Express ou uso em produção sem evidência. |
| Ponto Fixo | Conceito autoral multiempresa, service layer, regras, banco, `tenantId` e `empresaId` | Isolamento comprovado, clientes, módulos entregues ou SaaS operacional. |

Não ordenar experiências com datas ausentes como se sua cronologia fosse conhecida. Não corrigir períodos sobrepostos por suposição.

## 5. Design system básico proposto

Direção derivada do briefing: engenharia legível em uma interface escura, com uma linha de processamento como elemento recorrente. Esta seção é uma proposta; a documentação final do design deve refletir a interface construída.

| Papel | Proposta |
| --- | --- |
| Fundo principal | `#080A0F` |
| Fundo alternativo | `#0D1117` |
| Superfícies | `#111620` e `#161B22`, usadas quando agrupam informação de fato |
| Texto principal | `#F5F7FA` |
| Texto secundário | `#A7B0BE` |
| Acento primário | Azul `#70A7FF`, sujeito à validação de contraste em cada uso |
| Acento do fluxo | Ciano `#67D8E4`, para destacar o estágio ativo sem depender somente da cor |
| Tipografia | Avaliar Geist existente como base; mono restrito a dados, código e rótulos técnicos. Não acrescentar fontes antes de validar as atuais. |
| Escala | Chamadas com `clamp()`, texto de corpo a partir de 16 px; linhas de leitura limitadas. |
| Espaçamento | Base de 4 px e intervalos de seção de 64–120 px, adaptados ao viewport. |
| Layout | Conteúdo central até cerca de 1200 px; margens de 20 px no mobile e 32–64 px no desktop. |
| Bordas/foco | Divisores discretos e foco visível; não depender de borda de baixo contraste para identificar controles. |

Hero desktop: nome legível acima da chamada grande “BACK-END. AUTOMAÇÃO. DADOS.”, descrição curta, CTA e tecnologias centrais. O fluxo ocupa espaço próprio e mostra transformação de entradas em resultado. No mobile, a informação principal precede o diagrama; evitar altura fixa que corte conteúdo ou empurre todas as ações para fora da leitura inicial.

Projetos usam composição editorial com diagramas e texto, evitando uma grade de cards idênticos. Links externos mantêm rótulos claros. A timeline técnica dá menos peso visual à experiência de telemarketing, preservando cargo e período.

## 6. Fluxos e interações

`TechnicalFlow` recebe dados de etapas, não texto fixo. Sempre renderiza uma sequência semântica legível; SVG e pequenos marcadores CSS explicam a direção do processamento.

- Hero: Entrada → Processamento → API / Back-end → Dados → Resultado.
- FarmGeo: Arquivos geoespaciais → Python → Padronização / Diagnóstico → GIS → Mapa.
- LLM: Documentos → Consolidação → Contexto → Instruções → LLM → Apoio ao diagnóstico.
- Ponto Fixo: Interface → Service layer → Regras → Banco; identificadores como conceito, sem alegar isolamento implementado.
- Processo: escolha de etapa por botão, com descrição correspondente; nenhuma explicação disponível apenas no hover.

Primeiro implementar o fluxo estático. Depois acrescentar movimento CSS de baixa intensidade e ativação do contexto com `IntersectionObserver`, somente onde houver ganho de compreensão. Não bloquear scroll nem esconder conteúdo antes de executar JavaScript. Fluxos de cases não presumem arquitetura interna além do informado.

Em `prefers-reduced-motion`, remover deslocamentos e animação contínua; conservar rótulos, ordem e estado legíveis. Fora do viewport, interromper animações decorativas. Não adicionar Framer Motion, Three.js ou outras bibliotecas nesta fase.

Demonstrações de FarmGeo e LLM terão aviso “Demonstração com dados fictícios”. Uma simulação visual do pipeline não deve ser apresentada como execução real de Python ou de LLM no navegador.

## 7. Critérios de validação por etapa

- **Etapa 3:** Navigation, Hero, fundo e fluxo; foco, teclado, mobile e movimento reduzido; nenhuma âncora quebrada.
- **Etapa 4:** Sobre, processo e stack por papel; títulos semânticos e texto sem clichês.
- **Etapa 5:** FarmGeo primeiro, depois os demais; revisar contribuição pessoal, estado de recursos e avisos de demonstração antes de publicar.
- **Etapa 6:** Timeline com dados confirmados. Startup, Unz e descrição da Algar precisam de complemento.
- **Etapa 7:** Contato com e-mail confirmado; download apenas se existir PDF válido. Sem arquivo, botão indisponível e mensagem curta.
- **Etapa 8:** Verificar 1920, 1440, 1024, 768 e 390 px, ausência de overflow, contraste, teclado, movimento reduzido e carga de JavaScript. Configurar `pt-BR`, metadata solicitada e OpenGraph; URL canônica apenas após domínio confirmado.
- **Etapa 9:** `npm run build` e `npm run lint`; repetir após correções necessárias. Preview de produção quando possível.
- **Etapa 10:** Preparação do GitHub e README profissional com conceito, arquitetura, execução, screenshots reais, decisões e instruções de deploy. O versionamento local deve anteceder a implementação. Não inventar URLs ou imagens de implantação.
- **Etapa 11:** Preparar Vercel usando o diretório `portfolio-wederson`, build `npm run build` e framework Next.js; registrar URL somente após implantação efetiva. Limites do plano gratuito devem ser verificados quando o deploy for preparado.

## 8. Pendências factuais

- Startup financeira confidencial: cargo, datas, responsabilidades publicáveis e nível de confidencialidade.
- Unz Company: cargo, datas e responsabilidades confirmadas.
- Algar: revisar descrição de atividades; cargo e datas já informados.
- AACB e Ponto Fixo: repositórios publicáveis e situação real de cada funcionalidade.
- Achei Araxá: tecnologias específicas, caso se queira listá-las.
- Currículo PDF e capturas públicas autorizadas dos cases.
- Métricas e bibliotecas específicas do FarmGeo são opcionais; a narrativa pode permanecer qualitativa.

E-mail já confirmado: `wedersonsantos2004@gmail.com`. Datas confirmadas constam em `PRODUCT.md`.

## 9. Commits sugeridos

Não há commits realizados. Quando o versionamento local estiver preparado, organizar entregas pequenas:

1. `docs: record portfolio architecture and confirmed content`
2. `chore: restore dependencies and lock installation`
3. `feat: create portfolio hero and technical flow`
4. `feat: add responsive navigation`
5. `feat: add positioning and work process`
6. `feat: create FarmGeo case study`
7. Um commit por case subsequente, seguido de experiência e contato.
8. `a11y: validate keyboard and reduced motion`
9. `docs: prepare README and Vercel deployment`

## Próxima entrega

Etapas 3 a 10 implementadas e validadas localmente: interface, cinco cases fictícios, timeline com dados confirmados, contato/currículo preparado, footer, SEO, build/lint, README e screenshots. Etapa 11 preparada para Vercel; conexão ao GitHub e publicação remota dependem dos dados da conta e da URL final.
