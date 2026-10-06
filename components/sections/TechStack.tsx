import { stackGroups } from "@/data/stack";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function TechStack() {
  return (
    <section id="stack" className="stack-section section container" aria-labelledby="stack-title">
      <div className="section-header"><h2 id="stack-title">A ferramenta certa<br /><span>para cada etapa.</span></h2><p>Python, PHP, SQL e APIs são o centro da minha atuação. As outras ferramentas ampliam as possibilidades de implementação.</p></div>
      <dl className="stack-list">{stackGroups.map((group) => <div key={group.title} className="stack-row" data-role={group.title}><dt><strong className="stack-role">{group.title}</strong><p>{group.description}</p></dt><dd><ul aria-label={`Tecnologias de ${group.title.toLocaleLowerCase("pt-BR")}`}>{group.technologies.map((technology) => <li key={technology.name} className={technology.primary ? "technology primary" : "technology"}>{technology.name}</li>)}</ul></dd></div>)}</dl>
      <div className="stack-evidence"><p>Código, organização e decisões técnicas.</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explorar meu GitHub <Icon name="arrow" /><span className="sr-only">(abre em nova aba)</span></a></div>
    </section>
  );
}
