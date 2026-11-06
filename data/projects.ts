export type Project = {
  slug: string; name: string; category: string; summary: string; status: string;
  context: string; problem: string; decision: string; contribution: string[];
  result: string; limits: string; stack: string[]; flow: string[]; url?: string;
  validation?: string[]; learning?: string; outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "farmgeo", name: "FarmGeo", category: "Automação · dados geoespaciais",
    summary: "Integração com API governamental e conversão de dados geoespaciais com verificação de geometria e atributos.", status: "Experiência profissional · Owl Mídia",
    outcome: "De cerca de 3 dias para 3 horas de processamento.",
    context: "A empresa precisava obter dados de uma API governamental e disponibilizá-los em Shapefile e KML para ferramentas GIS e mapas interativos. Minha atuação começou na homologação da API e na configuração do ambiente cloud para baixar os dados.",
    problem: "A rotina inicial processava os arquivos individualmente e levava aproximadamente três dias. Além disso, as primeiras conversões preservavam o desenho do mapa, mas perdiam atributos como proprietário do terreno e cultura plantada. A aparência correta escondia dados incompletos.",
    decision: "Manter o Shapefile como etapa intermediária, pois ele também era utilizado pela empresa, em vez de converter diretamente para KML. Ajustar a lógica e substituir a biblioteca de conversão para preservar os atributos. Para melhorar a escala, reorganizar a execução em lotes com multithreading e multiprocessamento.",
    contribution: ["Homologação da API governamental e configuração do ambiente cloud para obtenção dos arquivos.", "Desenvolvimento de scripts Python para leitura de dados binários, conversão para Shapefile e geração de KML.", "Implementação de comparações entre o conteúdo original e as saídas, utilizando também informações em JSON como referência.", "Correção da perda de atributos e otimização do processamento com lotes, multithreading e multiprocessamento."],
    validation: ["Comparação do conteúdo binário de origem com o Shapefile gerado, incluindo as informações geográficas e os atributos de texto.", "Nova verificação de integridade após a conversão para KML, complementada pela comparação visual dos mapas e pelo acompanhamento dos logs.", "Reprocessamento após a correção do script e a troca de biblioteca para conferir a presença dos atributos de proprietário e plantio na saída final."],
    result: "O tempo de execução passou de aproximadamente três dias para três horas, disponibilizando os arquivos mais rapidamente para visualização e consulta territorial. A conversão passou a preservar também os atributos que se perdiam nas versões iniciais. Os tempos são aproximados e foram observados durante o projeto.",
    learning: "Um mapa visualmente correto pode estar incompleto. A validação precisa conferir geometria e atributos em cada transformação; melhorar o desempenho não dispensa verificar a integridade da saída.",
    limits: "Esta simulação usa registros fictícios no navegador. Não acessa a API governamental, não converte arquivos GIS e não executa o pipeline Python ou seu paralelismo. As verificações do projeto não constituem uma medição formal de precisão geográfica.",
    stack: ["Python", "APIs", "Cloud", "Shapefile", "KML", "JSON", "GIS"], flow: ["API e binários", "Shapefile", "Conferência", "KML", "Nova conferência"],
  },
  {
    slug: "base-conhecimento", name: "Base de conhecimento técnico", category: "Documentação · IA generativa",
    summary: "Documentação organizada para apoiar a investigação de problemas em ERP.", status: "Experiência profissional · Apollo Gestão de Sistemas",
    context: "Tutoriais, procedimentos e registros técnicos estavam distribuídos em diferentes documentos usados no suporte a um sistema ERP.",
    problem: "Localizar uma orientação e relacioná-la ao problema investigado exigia consultar materiais dispersos e conferir o contexto de cada procedimento.",
    decision: "Consolidar e organizar o conteúdo, usando um projeto no ChatGPT como apoio à consulta. Orientar as respostas pela documentação e manter a validação técnica humana.",
    contribution: ["Consolidação de tutoriais, procedimentos e registros técnicos.", "Estruturação de uma base de conhecimento em um projeto no ChatGPT.", "Organização do contexto de consulta para apoiar a investigação de falhas no ERP."],
    result: "A documentação passou a ser consultada em uma base unificada, facilitando o acesso aos procedimentos e registros técnicos durante o atendimento e a investigação de problemas no ERP.",
    validation: ["O trabalho teve uso como apoio à consulta técnica; não houve avaliação formal de precisão das respostas nem medição de tempo economizado.", "A captura do projeto mostra uma consulta com referências à documentação e uma sugestão de SQL. Ela não comprova a execução ou a correção da consulta sugerida."],
    learning: "Organizar o conhecimento facilita a consulta, mas não garante a correção de uma resposta gerada por IA. O conteúdo precisa ser conferido no contexto do sistema antes de orientar uma ação.",
    limits: "A demo utiliza respostas previamente escritas e documentos fictícios. Não consulta uma LLM. O trabalho relatado utilizou um projeto no ChatGPT; não é apresentado como RAG, fine-tuning ou agente autônomo.",
    stack: ["ChatGPT", "Documentação técnica", "SQL", "ERP"], flow: ["Documentos", "Organização", "Contexto", "Consulta assistida", "Validação humana"],
  },
  {
    slug: "achei-araxa", name: "Achei Araxá", category: "Plataforma web · informação",
    summary: "Organização de informações e interfaces para uma plataforma de serviços.", status: "Experiência profissional · Owl Mídia",
    context: "Atuação na plataforma Achei Araxá, com foco na experiência de acesso e organização das informações.",
    problem: "Uma plataforma com diferentes serviços precisa facilitar a localização de informações e orientar a navegação com clareza.",
    decision: "Trabalhar a estrutura da interface, a organização do conteúdo e a usabilidade dos caminhos de acesso, incluindo a experiência de chat.",
    contribution: ["Desenvolvimento web e estruturação da interface e da navegação da plataforma.", "Organização das informações com atenção à usabilidade e à acessibilidade.", "Desenvolvimento da interface do chat da assistente virtual e integração dessa interação ao site."],
    result: "A plataforma passou a contar com a interface do chat integrada ao ambiente web. Minha contribuição foi na interface e na experiência de interação, dentro de um trabalho de equipe.",
    validation: ["A entrega relatada foi a interface do chat incorporada ao site. Não há métricas registradas de uso, satisfação ou redução de atendimentos.", "O site público serve como referência do produto e pode ter evoluído após minha participação."],
    learning: "Descrever uma entrega exige delimitar responsabilidades: implementar a interface de uma assistente não significa desenvolver seu motor de IA ou toda a plataforma.",
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
