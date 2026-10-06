import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const directionContract = `<!--
THESIS: Mostrar a transformação de problemas em soluções técnicas por um fluxo legível.
OWN-WORLD: Base marinho #0B1020, Geist, azul para back-end, âmbar para automação, verde para dados, violeta no processo e contato em marfim. Diagramas SVG sem brilho.
STORY: Identificar Wederson, explorar casos e demonstrações, compreender atuação e processo, consultar trajetória e entrar em contato.
FIRST VIEWPORT: Posicionamento grande à esquerda, fluxo à direita, ação para os cases abaixo do texto.
FORM: Direção fixada pelo briefing; interface de engenharia com sequência de processamento. Seed a7fc9f81.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <template id="design-direction" dangerouslySetInnerHTML={{ __html: directionContract }} />
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
