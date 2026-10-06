# Imagens do portfólio

## Uso aplicado
- Sobre: primeira foto de perfil fornecida pelo usuário.
- FarmGeo: captura do mapa fornecida pelo usuário, com o rótulo “Interface do projeto”.
- Ponto Fixo: captura do painel operacional fornecida pelo usuário, identificada como “Interface do projeto”, com legenda indicando modo demo e valores demonstrativos.
- Achei Araxá: captura da interface fornecida pelo usuário, com apresentação da plataforma e assistente virtual Sol, identificada como “Interface do projeto”.
- Base de conhecimento: captura fornecida de consulta no ChatGPT, com referências à documentação e sugestão de SQL, identificada como “Interface do projeto”. A legenda mantém a necessidade de validação técnica.
- AACB: captura já existente da demonstração local, identificada como “Demonstração fictícia”.
- As mesmas imagens aparecem como prévias no índice e em tamanho maior nas páginas dos cases.
- “Abrir imagem” permite consultar o arquivo original em nova aba.

## Implementação
Os seis arquivos foram copiados para public/images sem alterar os pixels. A captura de página da AACB recebe enquadramento por CSS usando as coordenadas em data/project-visuals.ts; os originais completos permanecem disponíveis. A foto de corpo inteiro não foi incluída, conforme a escolha aprovada.

next/image usa dimensões intrínsecas, carregamento lazy padrão e sizes responsivos. A imagem mantém proporção reservada para reduzir deslocamento de layout. Alt e legendas descrevem o conteúdo e distinguem capturas reais de simulações; as demos interativas continuam disponíveis.

## Atualização do Ponto Fixo
A prévia antiga foi substituída pela captura do painel operacional em modo demo na lista e na página do case. O novo arquivo mantém os pixels originais e dimensões verificadas; nenhuma funcionalidade em produção é inferida da captura.

## Atualização do Achei Araxá
A prévia anterior foi substituída pela captura fornecida da plataforma na lista e na página do case. O arquivo e seu enquadramento foram preservados, com dimensões verificadas, legenda e texto alternativo específicos. A imagem não é usada para inferir uma integração com LLM.

## Atualização da Base de conhecimento
A prévia fictícia foi substituída pela captura fornecida de uma consulta no ChatGPT na lista e na página do case. O arquivo original e as dimensões foram preservados. A captura mostra uma sugestão de SQL; não comprova sua execução ou validação. A demonstração interativa local segue identificada como fictícia.

## Verificação
- ESLint: passou.
- Build de produção e TypeScript: passaram em cópia isolada .qa/images-build, preservando o ambiente do VS Code.
- Dimensões dos seis arquivos e limites dos enquadramentos originais: conferidos.
- Detector visual executado uma vez: avisos herdados de documentação de tipografia e cor, sem violação nova impeditiva.
- Não houve nova inspeção renderizada desktop/mobile nem nova auditoria de navegador. O preview permanece fechado conforme pedido anterior do usuário.
- As capturas usadas são conteúdo visual dos cases e não comprovam a aparência da versão atual do portfólio.
