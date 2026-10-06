# GitHub e Vercel
## Preparação concluída
Next.js configurado, lockfile presente, Node 24 definido, workflow CI com permissão apenas de leitura e arquivo `vercel.json` para instalar com npm ci e compilar com npm run build.

## GitHub
A raiz Git do projeto é a pasta `portfolio-wederson`. Não publique a pasta pai, o cache npm, `.qa`, `.next`, `node_modules`, arquivos de ambiente ou documentos internos.
1. Crie um repositório na conta desejada no GitHub, com a visibilidade apropriada.
2. Na raiz do projeto, revise `git status` e `git diff --cached` antes de enviar.
3. Faça o commit dos arquivos do projeto e conecte a URL real do repositório como `origin`.
4. Envie a branch `main`. O GitHub Actions executará instalação, lint e build.

O projeto local ainda não tem remote. Nenhuma URL de repositório foi inventada e nenhum arquivo foi enviado à conta.

## Vercel
1. Importe o repositório no painel da Vercel.
2. Se o repositório contém diretamente os arquivos do app, use a raiz padrão. Se inclui a pasta pai, selecione `portfolio-wederson` como Root Directory.
3. Use o preset Next.js e Node 24. O arquivo `vercel.json` já define instalação e build; mantenha o diretório de saída automático do framework.
4. Faça o primeiro deploy. Copie a URL HTTPS pública gerada.
5. Adicione `NEXT_PUBLIC_SITE_URL` com a origem dessa URL no ambiente Production e faça novo deploy.
6. Adicione o currículo final em `public/curriculo-wederson-ferreira.pdf`, quando disponível, e faça novo deploy.
7. Abra home, os cinco cases, `/robots.txt`, `/sitemap.xml` e `/opengraph-image`. Confira canonical, contato e disponibilidade do PDF no domínio real.

Sem a URL pública configurada, o site fica com noindex para impedir que uma versão sem canonical seja indexada. Previews da Vercel também ficam com noindex.

## Depois da publicação
Confira navegação mobile, contatos externos, cache e download do PDF. Meça Core Web Vitals com tráfego real antes de afirmar resultados de campo. Conectar um domínio próprio exige acesso à conta e às configurações DNS correspondentes.

Referências: [Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs) e [versões Node.js disponíveis](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).
