type Technology = { name: string; primary?: boolean };
type StackGroup = { title: string; description: string; technologies: Technology[] };

export const stackGroups: StackGroup[] = [
  { title: "Back-end", description: "Sistemas, regras e serviços.", technologies: [{ name: "Python", primary: true }, { name: "PHP", primary: true }, { name: "C#" }, { name: ".NET / ASP.NET Core" }] },
  { title: "Dados", description: "Consultas, organização e persistência.", technologies: [{ name: "SQL", primary: true }, { name: "MySQL", primary: true }, { name: "PostgreSQL", primary: true }] },
  { title: "Integração", description: "Conexões entre sistemas e serviços.", technologies: [{ name: "APIs REST", primary: true }] },
  { title: "Automação", description: "Rotinas que reduzem trabalho manual.", technologies: [{ name: "Python", primary: true }, { name: "Scripts", primary: true }, { name: "Processamento em lote", primary: true }] },
  { title: "Web", description: "Interfaces como parte da solução.", technologies: [{ name: "WordPress", primary: true }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "React" }, { name: "Next.js" }] },
  { title: "Ferramentas", description: "Versionamento e ambiente de desenvolvimento.", technologies: [{ name: "Git", primary: true }, { name: "GitHub", primary: true }, { name: "Docker" }] },
  { title: "IA aplicada", description: "Informação, contexto e consulta técnica.", technologies: [{ name: "LLMs" }, { name: "ChatGPT" }, { name: "Prompt Engineering" }, { name: "IA Generativa" }] },
];
