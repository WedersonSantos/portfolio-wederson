# Validação do portfólio completo
Data: 05/10/2026. Ambiente: Windows, Node 24.19.0, Next.js 16.3.8, React 19.2.8 e Edge headless isolado. Preview de produção local em http://127.0.0.1:3100.

## Instalação e compilação
- Instalação limpa com `npm ci`: passou, 358 pacotes instalados a partir do lockfile.
- `npm run build`: passou. Home e cinco cases estáticos, além de 404, imagem Open Graph, robots e sitemap.
- `npm run lint`: passou após converter links internos da navegação para `Link`.
- Node 24 está registrado em package.json e .nvmrc para execução e Vercel.
- O npm emitiu aviso de depreciação do ESLint 9 e de script de instalação não aprovado para unrs-resolver; nenhum bloqueou a instalação, o lint ou o build. Nenhum script adicional foi liberado.

## Navegação e mobile
Foram verificadas 30 combinações: home e cinco cases nas larguras 1440, 1024, 768, 390 e 320 px. Todas responderam HTTP 200, sem rolagem horizontal da página, com um H1 e idioma pt-BR.
Menu mobile abre, fecha por seleção e Escape, e devolve o foco ao botão. Links internos da home apontam para elementos existentes. Todos os cinco passos do processo responderam ao clique; o acionamento por Space foi verificado. A skip link leva o foco ao conteúdo.
O fluxo animado pode ser pausado, respeita prefers-reduced-motion e pausa fora da área visível. Em telas menores, o fluxo usa uma lista legível em HTML.

## Demos e estados
- FarmGeo: execução prepara dois registros e separa um registro sem geometria. Reiniciar restaura o estado inicial.
- Conhecimento: pergunta sem documento apresenta ausência de evidência; respostas são predefinidas.
- Achei Araxá: categoria altera o serviço e uma orientação fixa pode ser mostrada/ocultada.
- AACB: filtro por pendência e consulta de histórico funcionam com associados fictícios.
- Ponto Fixo: trocar a empresa muda os registros exibidos; o aviso explica que o filtro não implementa isolamento seguro.
- Currículo ausente: botão indisponível visível, sem link quebrado.
Todas as demos identificam dados sintéticos, têm limites explícitos e não acessam documentos internos, APIs, modelos de IA ou pagamentos reais.

## Acessibilidade
Axe-core 4.14.0 executou 17 auditorias (12 estados iniciais desktop/mobile e cinco estados interativos), sem violações automáticas na confirmação. Não houve erros de JavaScript.
O papel semântico do esquema FarmGeo foi corrigido para role="group". Duas auditorias adicionais da home (1440 e 390 px) confirmaram ausência de violações e de incompletos de semântica. Foram 19 auditorias sem violações na confirmação da entrega. O incompleto restante é o contraste dos textos SVG do fluxo em desktop: axe não determina o fundo desenhado pelos retângulos, conferido manualmente abaixo.
A conferência manual das cores definidas no CSS verificou contraste de 17,63:1 e 15,98:1 para texto principal, e 8,65:1 e 7,84:1 para texto secundário, nos fundos dos nós. Os valores superam 4,5:1.
Há foco visível, rótulos associados aos selects, tabelas com captions e cabeçalhos, regiões de resultado e redução de movimento. Os testes automatizados e a conferência por teclado não equivalem a uma certificação completa nem substituem testes com tecnologias assistivas reais.

## Performance
Medições de laboratório no preview local, sem limitação de CPU/rede:
| Viewport | LCP observado | CLS observado | Transferência de recursos observada |
| --- | --- | --- | --- |
| 1440 px | 168 ms | 0 | 239.155 bytes |
| 390 px | 780 ms | 0 | 33.810 bytes |

O segundo acesso reutilizou cache do mesmo contexto de navegador, portanto os valores de transferência não representam uma comparação de carregamento frio. Não são pontuações Lighthouse nem dados de campo. A home usa SVG/CSS, fontes servidas pelo Next e seções estáticas; as demos estão nos cases. Core Web Vitals em tráfego real devem ser medidos após publicar.

## SEO
Título e descrição da home e de todos os cases, idioma, hierarquia de headings, JSON-LD Person, imagem OG com HTTP 200 e PNG, robots e sitemap foram conferidos.
As regras também foram testadas isoladamente em memória: URL HTTPS normalizada, URL inválida/HTTP/credenciais rejeitadas; produção configurada permite indexação; preview e URL ausente bloqueiam; sitemap configurado gera seis URLs. O domínio de exemplo do teste não foi usado na configuração nem no build.
A URL pública real precisa ser definida em NEXT_PUBLIC_SITE_URL, com novo deploy. Sem essa variável, noindex permanece ativo e o sitemap não anuncia URLs inventadas.

## Screenshots e preparação para publicar
Capturas desktop/mobile da interface, índice de cases, cinco páginas de case, FarmGeo processado e contato estão em docs/screenshots.
README, .env.example, workflow GitHub Actions, .nvmrc e vercel.json foram preparados. Consulte PUBLICACAO.md para conexão ao repositório e deploy. Nenhum remote foi configurado e nenhum deploy foi publicado.
A revisão visual final pediu papel semântico no esquema FarmGeo e persistência dos componentes novos. O papel foi aplicado e confirmado; DESIGN.md e .impeccable/design.json foram ampliados preservando o sistema existente. O documenter delegado atingiu o limite de uso, e a documentação foi concluída inline com a referência degraded/documenter.md. O veredicto final do revisor é **ship**, com os dois achados materiais resolvidos. Consulte [REVISAO-FINAL.md](REVISAO-FINAL.md).

## Pendências de conteúdo
PDF final; cargos/períodos da startup confidencial e Unz Company; responsabilidades corretas da Algar; repositórios e recursos implementados de AACB/Ponto Fixo. A interface e a documentação não inventam essas informações.
