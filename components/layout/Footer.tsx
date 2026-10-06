import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
export function Footer() {
  return <footer className="container footer"><p className="footer-name">Wederson Ferreira<span>Back-end. Automação. Dados.</span></p><p className="footer-note">Demonstrações com dados fictícios.<br />Uberlândia, MG · Brasil</p><Link className="text-link" href="/#contato">Contato <Icon name="arrow" /></Link><a className="back-top" href="#conteudo" aria-label="Voltar ao início do conteúdo"><Icon name="up" /></a></footer>;
}
