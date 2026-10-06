export const processSteps = [
  {
    title: "Entender",
    headline: "Definir o problema antes da solução.",
    description: "Conhecer o contexto, ouvir os requisitos e identificar o que precisa mudar. O ponto de partida é compreender o processo e o resultado esperado.",
    inputs: ["Contexto do negócio", "Requisitos e restrições", "Problema a resolver"],
    output: "Um problema bem definido.",
  },
  {
    title: "Investigar",
    headline: "Encontrar a causa por trás do comportamento.",
    description: "Cruzar logs, dados e código para compreender o que acontece. Reproduzir falhas e verificar hipóteses antes de decidir o caminho técnico.",
    inputs: ["Logs e comportamento", "Dados e inconsistências", "Código e hipóteses"],
    output: "Um diagnóstico que orienta a decisão.",
  },
  {
    title: "Estruturar",
    headline: "Dar forma à solução.",
    description: "Organizar responsabilidades, modelar os dados e desenhar o fluxo. Definir como as partes se conectam e onde ficam as regras do sistema.",
    inputs: ["Arquitetura e responsabilidades", "Fluxos e integrações", "Modelagem de dados"],
    output: "Uma estrutura clara para desenvolver.",
  },
  {
    title: "Desenvolver",
    headline: "Transformar a estrutura em funcionamento.",
    description: "Implementar back-end, automações e integrações em partes verificáveis. Conectar entradas, regras e dados para resolver o problema definido.",
    inputs: ["Back-end e regras", "Scripts e automações", "APIs e integrações"],
    output: "Uma solução técnica implementada.",
  },
  {
    title: "Validar",
    headline: "Conferir o resultado no contexto real.",
    description: "Testar os fluxos, conferir os dados e verificar o comportamento esperado. Revisar falhas e limites para avaliar se a solução atende ao problema.",
    inputs: ["Testes e cenários", "Integridade dos dados", "Resultado esperado"],
    output: "Um resultado conferido e limites conhecidos.",
  },
] as const;

export const heroFlow = [
  { title: "Entrada", detail: "Requisitos · arquivos · eventos", icon: "input" },
  { title: "Processamento", detail: "Organizar · tratar · transformar", icon: "process" },
  { title: "Back-end", detail: "APIs · regras · integrações", icon: "code" },
  { title: "Dados", detail: "Modelar · consultar · persistir", icon: "database" },
  { title: "Resultado", detail: "Uma solução funcional", icon: "check" },
] as const;
