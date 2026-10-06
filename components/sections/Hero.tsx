import { profile } from "@/data/profile";
import { TechnicalFlow } from "@/components/flow/TechnicalFlow";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section id="inicio" className="hero container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-name">WEDERSON FERREIRA</p>
        <h1 id="hero-title"><span className="hero-backend">BACK-END.</span><br /><span className="hero-automation">AUTOMAÇÃO.</span><br /><span className="hero-data">DADOS.</span></h1>
        <p className="hero-lead">Desenvolvimento de sistemas<br className="desktop-break" /> e soluções técnicas.</p>
        <p className="hero-description">Transformo processos, dados e requisitos em soluções técnicas estruturadas.</p>
        <p className="hero-tools">Python <span aria-hidden="true">/</span> PHP <span aria-hidden="true">/</span> SQL <span aria-hidden="true">/</span> APIs REST</p>
        <div className="hero-actions"><a className="button button-primary" href="#projetos">Explorar os cases <Icon name="arrow" /></a><a className="button button-quiet" href="#processo">Ver como trabalho</a></div>
        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" /> GitHub <span className="sr-only">(abre em nova aba)</span></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="arrow" className="external-arrow" /><span className="sr-only">(abre em nova aba)</span></a>
        </div>
      </div>
      <TechnicalFlow />
      <div className="hero-baseline"><p>{profile.location}</p><a href="#sobre">Explore o caminho <Icon name="arrow" /></a></div>
    </section>
  );
}
