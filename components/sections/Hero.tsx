import Image from "next/image";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  return (
    <section id="inicio" className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero-inner container">
        <div className="editorial-hero-copy">
          <p className="hero-location">Wederson Ferreira <span>Uberlândia · Brasil</span></p>
          <h1 id="hero-title"><span>Back-end.</span><span className="outline-title">Automação.</span><span className="copper-title">Dados.</span></h1>
          <p className="editorial-hero-lead">Sistemas que se conectam.<br />Dados que preservam sua história.<br />Soluções que fazem diferença na prática.</p>
          <ul className="hero-specialties" aria-label="Áreas de atuação">{["Python", "PHP", "SQL", "APIs REST", "Automação", "Dados geoespaciais"].map(item => <li key={item}>{item}</li>)}</ul>
          <div className="editorial-hero-actions"><a className="text-link" href="#projetos">Conheça meus projetos <Icon name="arrow" /></a><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(abre em nova aba)</span></a></div>
        </div>
        <figure className="editorial-hero-photo"><Image src="/images/wederson-perfil.jpg" alt="Wederson Ferreira" fill priority sizes="(max-width: 700px) 100vw, 55vw" /></figure>
        <a className="hero-scroll" href="#caminhos" aria-label="Explorar os caminhos do portfólio">Explore <Icon name="arrow" /></a>
      </div>
    </section>
  );
}
