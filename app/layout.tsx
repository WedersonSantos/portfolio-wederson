import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, Cormorant_Garamond, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./editorial.css";
import { siteUrl } from "@/lib/site";

const directionContract = `<!--
THESIS: Apresentar o trabalho técnico de Wederson com a composição editorial da referência caiovinicios.vercel.app.
OWN-WORLD: Preto quente, cobre e marfim; Bebas Neue em títulos, Space Grotesk no corpo e Cormorant Garamond nas passagens editoriais.
STORY: Retrato e especialidades, caminhos diretos, projetos com evidências, trajetória, processo e contato.
FIRST VIEWPORT: Título em três linhas à esquerda e retrato real à direita. Conteúdo visível sem depender de animação.
FORM: Adaptação da referência fornecida; conteúdo, fotografia e rotas pertencem ao portfólio de Wederson.
-->`;

const editorialDisplay = Bebas_Neue({ variable: "--font-display", subsets: ["latin"], weight: "400", display: "swap" });
const editorialSans = Space_Grotesk({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const editorialSerif = Cormorant_Garamond({ variable: "--font-editorial", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  authors: [{ name: "Wederson Ferreira" }],
  robots: { index: Boolean(siteUrl) && process.env.VERCEL_ENV !== "preview", follow: true },
  title: { default: "Wederson Ferreira | Back-end, Automação e Dados", template: "%s | Wederson Ferreira" },
  description: "Desenvolvedor focado em back-end, automação, APIs e processamento de dados com Python, PHP e SQL.",
  openGraph: {
    title: "Wederson Ferreira | Back-end, Automação e Dados",
    description: "Desenvolvimento de sistemas e soluções técnicas com Python, PHP, SQL e APIs.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${editorialDisplay.variable} ${editorialSans.variable} ${editorialSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <template id="design-direction" dangerouslySetInnerHTML={{ __html: directionContract }} />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
