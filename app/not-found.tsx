import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
export default function NotFound() { return <><Navigation /><main id="conteudo" tabIndex={-1} className="container section not-found"><h1>Página não encontrada.</h1><p>Este caminho não está disponível. Explore os cases publicados no portfólio.</p><Link className="button button-primary" href="/#projetos">Ver os cases</Link></main><Footer /></>; }
