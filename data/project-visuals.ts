export type ProjectVisualData = {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: "Interface do projeto" | "Demonstração fictícia";
  caption: string;
  crop?: { left: number; top: number; width: number; height: number };
};

export const projectVisuals: Record<string, ProjectVisualData> = {
  farmgeo: {
    src: "/images/farmgeo-mapa.png", width: 960, height: 609,
    alt: "Mapa FarmGeo com imagem de satélite, perímetros de imóveis, busca e painel de informações com identificadores mascarados.",
    label: "Interface do projeto",
    caption: "Mapa com camadas geoespaciais e consulta de imóveis. Identificadores mascarados na captura fornecida.",
  },
  "base-conhecimento": {
    src: "/images/base-conhecimento-consulta.png", width: 941, height: 609,
    alt: "Consulta no ChatGPT sobre um relatório de cadastro de produtos, com referências à documentação de suporte e trecho de SQL sugerido.",
    label: "Interface do projeto",
    caption: "Consulta assistida no ChatGPT com referências à documentação técnica e sugestão de consulta SQL. A resposta exige validação técnica.",
  },
  "achei-araxa": {
    src: "/images/achei-araxa-interface.png", width: 962, height: 609,
    alt: "Interface do Achei Araxá com vídeo de apresentação, busca e painel da assistente virtual Sol exibindo categorias de serviços.",
    label: "Interface do projeto",
    caption: "Interface do Achei Araxá com apresentação da plataforma e a assistente virtual Sol, exibindo categorias de serviços.",
  },
  aacb: {
    src: "/images/aacb-demonstracao.png", width: 1440, height: 2471,
    crop: { left: 100, top: 1371, width: 1240, height: 845 },
    alt: "Demonstração fictícia de associados com filtro de situação, três registros de exemplo e consulta de histórico.",
    label: "Demonstração fictícia",
    caption: "Consulta de associados e situação dos registros com dados sintéticos.",
  },
  "ponto-fixo": {
    src: "/images/ponto-fixo-painel-operacional.png", width: 969, height: 616,
    alt: "Painel operacional do Ponto Fixo em modo demo, com menu de gestão, fechamento de caixa e indicadores demonstrativos de estoque, contas a pagar e receber.",
    label: "Interface do projeto",
    caption: "Painel operacional do Ponto Fixo em modo demo. Caixa, estoque e contas a pagar e receber com valores demonstrativos.",
  },
};
