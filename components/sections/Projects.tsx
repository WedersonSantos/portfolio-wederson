import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Icon } from "@/components/ui/Icon";

export function Projects() {
  const [featured, ...others] = projects;
  return <section id="projetos" className="section projects-section">
    <div className="container">
      <div className="section-header"><h2>O trabalho,<br /><span>em contexto.</span></h2><p>Problemas, decisões e contribuições. Cinco cases com demonstrações fictícias para tornar o raciocínio técnico visível.</p></div>
      <article className="featured-project" data-project={featured.slug}>
        <div><h3>{featured.name}</h3><p className="project-category">{featured.category}</p><p className="project-summary">{featured.summary}</p><p className="project-status">{featured.status}</p><ul className="project-tools" aria-label="Tecnologias do FarmGeo">{featured.stack.map(tool => <li key={tool}>{tool}</li>)}</ul><Link className="button button-primary" href={`/projetos/${featured.slug}`}>Explorar o case <Icon name="arrow" /></Link></div>
        <ProjectVisual slug={featured.slug} />
      </article>
      <div className="project-index">{others.map((project) => <article key={project.slug} className="project-row" data-project={project.slug}><ProjectVisual slug={project.slug} compact /><div><h3><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h3><p className="project-category">{project.category}</p><p>{project.summary}</p><span className="project-status">{project.status}</span></div><Link className="case-link" href={`/projetos/${project.slug}`} aria-label={`Ver case ${project.name}`}><span>Ver case</span><Icon name="arrow" /></Link></article>)}</div>
    </div>
  </section>;
}
