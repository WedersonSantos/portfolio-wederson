import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { ProjectDemo } from "@/components/projects/ProjectDemo";
import { Icon } from "@/components/ui/Icon";
import { siteUrl } from "@/lib/site";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) return {};
  return { title: `${project.name} | Case`, description: project.summary, ...(siteUrl ? { alternates: { canonical: `/projetos/${slug}` } } : {}), openGraph: { title: `${project.name} | Wederson Ferreira`, description: project.summary, type: "article", locale: "pt_BR", ...(siteUrl ? { images: ["/opengraph-image"] } : {}) } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <><Navigation /><main id="conteudo" tabIndex={-1} className="case-main container" data-project={slug}><Link className="text-link case-back" href="/#projetos"><Icon name="arrow" /> Todos os cases</Link><header className="case-header"><h1>{project.name}</h1><p className="project-category">{project.category}</p><p className="case-lead">{project.summary}</p><p className="project-status">{project.status}</p><ul className="project-tools" aria-label="Tecnologias e áreas do projeto">{project.stack.map(tool => <li key={tool}>{tool}</li>)}</ul>{project.url && <a className="text-link case-public-link" href={project.url} target="_blank" rel="noopener noreferrer">Visitar site público <Icon name="arrow" /><span className="sr-only">(abre em nova aba)</span></a>}</header><ProjectVisual slug={slug} /><div className="case-narrative"><section><h2>Contexto e problema</h2><p>{project.context}</p><p>{project.problem}</p></section><section><h2>Decisão técnica</h2><p>{project.decision}</p></section><section><h2>Minha contribuição</h2><ul>{project.contribution.map(item => <li key={item}>{item}</li>)}</ul></section><section><h2>Resultado e estado atual</h2><p>{project.result}</p></section></div><section className="case-flow" aria-labelledby="case-flow-title"><h2 id="case-flow-title">O fluxo, em etapas.</h2><ol>{project.flow.map((step, index) => <li key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < project.flow.length - 1 && <Icon name="arrow" />}</li>)}</ol><p>Esquema didático do raciocínio do case.</p></section><section id="demonstracao" className="case-demo" aria-labelledby="demo-title"><div className="demo-heading"><span className="demo-badge">DEMONSTRAÇÃO FICTÍCIA</span><h2 id="demo-title">Explore o fluxo.</h2><p>Dados sintéticos, sem informações de clientes ou documentos internos.</p></div><ProjectDemo slug={slug} /><p className="demo-limits">{project.limits}</p></section><div className="case-next"><Link className="text-link" href="/#contato">Conversar sobre este trabalho <Icon name="arrow" /></Link><Link className="text-link" href={`/projetos/${next.slug}`}>Próximo case: {next.name} <Icon name="arrow" /></Link></div></main><Footer /></>;
}
