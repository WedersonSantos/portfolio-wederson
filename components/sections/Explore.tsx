import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

const paths = [
  { title: "Sobre mim", detail: "Trajetória, atuação e o que orienta meu trabalho", href: "#sobre" },
  { title: "Experiência e currículo", detail: "Desenvolvimento web · integrações · suporte a ERP", href: "#experiencia" },
  { title: "Automação e dados", detail: "FarmGeo · Python · integridade · de 3 dias para 3 horas", href: "/projetos/farmgeo" },
  { title: "IA aplicada", detail: "Documentação técnica · contexto · consulta assistida", href: "/projetos/base-conhecimento" },
  { title: "Web e interfaces", detail: "Achei Araxá · navegação · interface de chat", href: "/projetos/achei-araxa" },
  { title: "Arquitetura em evolução", detail: "Ponto Fixo · projeto autoral · contexto multiempresa", href: "/projetos/ponto-fixo" },
];

export function Explore() {
  return <><section id="caminhos" className="explore-section section container" aria-labelledby="explore-title"><div className="section-header"><h2 id="explore-title">Escolha por onde<br /><span>me conhecer.</span></h2><p>Da trajetória às decisões técnicas.<br />Cada caminho mostra uma parte do trabalho.</p></div><div className="explore-list">{paths.map(path => <Link className="explore-link" href={path.href} key={path.href}><div><h3>{path.title}</h3><p>{path.detail}</p></div><Icon name="arrow" /></Link>)}</div></section><div className="specialty-strip" aria-label="Especialidades"><p>Back-end <span>·</span> Automação <span>·</span> APIs REST <span>·</span> Python <span>·</span> Dados <span>·</span> Integrações <span>·</span> SQL</p></div></>;
}
