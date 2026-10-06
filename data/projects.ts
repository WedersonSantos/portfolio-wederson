export type Project = {
  slug: string; name: string; category: string; summary: string; status: string;
  context: string; problem: string; decision: string; contribution: string[];
  result: string; limits: string; stack: string[]; flow: string[]; url?: string;
};

export const projects: Project[] = [
  {
    slug: "farmgeo", name: "FarmGeo", category: "Automação · dados geoespaciais",
    summary: "Do arquivo geoespacial ao dado preparado para uso em mapas.", status: "Experiência profissional · Owl Mídia",
    context: "Arquivos geoespaciais precisavam ser preparados para ferramentas GIS e aplicações de mapas interativos.",
    problem: "Formatos e atributos diferentes exigiam conferência e preparação antes de utilizar os dados. Incompatibilidades dificultavam o processamento em lote.",
    decision: "Organizar a preparação em etapas: leitura, verificação, padronização e saída. Separar os registros que precisam de revisão ajuda a investigar falhas sem perder o contexto do lote.",
    contribution: ["Desenvolvimento de rotinas em Python para processamento em lote e padronização de dados geoespaciais.", "Preparação de arquivos KML, Shapefile e GeoJSON para ferramentas GIS e aplicações de mapas.", "Investigação de incompatibilidades e apoio à organização dos dados utilizados no fluxo de mapas interativos."],
    result: "As rotinas apoiaram a preparação dos dados e reduziram o trabalho manual de tratamento dos arquivos. O resultado é apresentado de forma qualitativa, sem métricas não documentadas.",
    limits: "A demonstração abaixo representa o raciocínio do fluxo. Executa apenas transformações de registros fictícios no navegador; não lê arquivos GIS nem executa o código Python utilizado no trabalho.",
    stack: ["Python", "KML", "Shapefile", "GeoJSON", "GIS"], flow: ["Arquivos", "Validação", "Padronização", "Dados preparados", "Mapa"],
  },
  {
    slug: "base-conhecimento", name: "Base de conhecimento técnico", category: "Documentação · IA generativa",
    summary: "Documentação organizada para apoiar a investigação de problemas em ERP.", status: "Experiência profissional · Apollo Gestão de Sistemas",
    context: "Tutoriais, procedimentos e registros técnicos estavam distribuídos em diferentes documentos usados no suporte a um sistema ERP.",
    problem: "Localizar uma orientação e relacioná-la ao problema investigado exigia consultar materiais dispersos e conferir o contexto de cada procedimento.",
    decision: "Consolidar e organizar o conteúdo, usando um projeto no ChatGPT como apoio à consulta. Orientar as respostas pela documentação e manter a validação técnica humana.",
    contribution: ["Consolidação de tutoriais, procedimentos e registros técnicos.", "Estruturação de uma base de conhecimento em um projeto no ChatGPT.", "Organização do contexto de consulta para apoiar a investigação de falhas no ERP."],
    result: "A documentação passou a ter uma estrutura de consulta mais organizada para apoiar o trabalho técnico. Não há medição confirmada de redução de tempo ou taxa de acerto.",
    limits: "A demo utiliza respostas previamente escritas e documentos fictícios. Não consulta uma LLM. O trabalho relatado utilizou um projeto no ChatGPT; não é apresentado como RAG, fine-tuning ou agente autônomo.",
    stack: ["ChatGPT", "Documentação técnica", "SQL", "ERP"], flow: ["Documentos", "Organização", "Contexto", "Consulta assistida", "Validação humana"],
  },
  {
    slug: "achei-araxa", name: "Achei Araxá", category: "Plataforma web · informação",
    summary: "Organização de informações e interfaces para uma plataforma de serviços.", status: "Experiência profissional · Owl Mídia",
    context: "Atuação na plataforma Achei Araxá, com foco na experiência de acesso e organização das informações.",
    problem: "Uma plataforma com diferentes serviços precisa facilitar a localização de informações e orientar a navegação com clareza.",
    decision: "Trabalhar a estrutura da interface, a organização do conteúdo e a usabilidade dos caminhos de acesso, incluindo a experiência de chat.",
    contribution: ["Atuação no desenvolvimento web e na organização da interface da plataforma.", "Contribuição para usabilidade, acessibilidade e estrutura das informações.", "Atuação na experiência de chat, sem atribuir capacidades de IA não confirmadas."],
    result: "O case apresenta a contribuição na organização da plataforma e na experiência de uso. O site público pode ser consultado como referência, sem atribuir todo o produto a um único profissional.",
    limits: "Os serviços e as respostas abaixo são fictícios. A demo é uma representação didática e não reproduz telas ou funcionalidades atuais do site público. A stack específica do projeto não foi confirmada.",
    stack: ["Interfaces web", "Arquitetura de informação", "Usabilidade"], flow: ["Necessidade", "Categoria", "Serviço", "Orientação", "Próximo passo"], url: "https://achei.araxa.mg.gov.br/",
  },
  {
    slug: "aacb", name: "Gestão de associados · AACB", category: "Aplicação · gestão",
    summary: "Estrutura de aplicação para organizar associados e acompanhar pagamentos.", status: "Projeto · implementação a confirmar",
    context: "Proposta de aplicação de gestão com áreas de autenticação, dashboard, cadastro, histórico de pagamentos, cobranças e configurações.",
    problem: "Informações de associados e rotinas financeiras precisam de uma estrutura consistente para consulta e acompanhamento.",
    decision: "Organizar as áreas da aplicação e preparar a arquitetura para integração com API e banco de dados, distinguindo a interface das regras e da persistência.",
    contribution: ["Estruturação da proposta de aplicação e das áreas de gestão de associados.", "Organização de interfaces e fluxos de cadastro, consulta e acompanhamento financeiro.", "Planejamento da conexão entre interface, API e banco de dados."],
    result: "A estrutura proposta é demonstrada por uma consulta fictícia de associados. O repositório e o estado de cada recurso precisam de confirmação antes de afirmar uma implementação em produção.",
    limits: "Não há autenticação, cobrança, pagamento ou persistência real nesta demo. TypeScript, React e React Native foram informados como tecnologias do projeto; os recursos concluídos não foram verificados.",
    stack: ["TypeScript", "React", "React Native"], flow: ["Interface", "API planejada", "Regras", "Banco planejado", "Consulta"],
  },
  {
    slug: "ponto-fixo", name: "Ponto Fixo", category: "Projeto autoral · ERP / SaaS",
    summary: "Exploração de arquitetura para um sistema de gestão multiempresa.", status: "Em desenvolvimento · conceito de arquitetura",
    context: "Projeto autoral de ERP/SaaS com organização de dados e rotinas por empresa.",
    problem: "Uma aplicação multiempresa precisa carregar o contexto da empresa em cada operação e definir como esse contexto participa das regras e do acesso aos dados.",
    decision: "Explorar a separação entre interface, camada de serviço, regras e banco, usando empresaId ou tenantId como parte explícita do contexto.",
    contribution: ["Concepção do projeto autoral e da organização das camadas da aplicação.", "Exploração do contexto de empresa nas consultas e operações.", "Estruturação do raciocínio de domínio para evolução do ERP/SaaS."],
    result: "O case apresenta uma direção de arquitetura em desenvolvimento. A demo permite observar a mudança do contexto de empresa com registros sintéticos.",
    limits: "O filtro no navegador é apenas uma simulação de consulta. Não comprova isolamento seguro entre empresas, autenticação, backend, persistência ou prontidão para produção. A stack de implementação permanece a confirmar.",
    stack: ["Modelagem de domínio", "Camada de serviço", "Contexto multiempresa"], flow: ["Interface", "Serviço", "empresaId", "Consulta", "Resultado"],
  },
];
