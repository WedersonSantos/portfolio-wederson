import Image from "next/image";
import { profile } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function About() {
  return (
    <section id="sobre" className="about section container" aria-labelledby="about-title">
      <div className="about-intro"><h2 id="about-title">Investigar a causa.<br /><span>Estruturar a solução.</span></h2><p className="section-intro">Meu trabalho conecta desenvolvimento, automação e organização de informações.</p><figure className="profile-portrait"><Image src="/images/wederson-perfil.jpg" alt="Retrato de Wederson Ferreira" width={1280} height={1280} sizes="(max-width: 600px) 280px, 320px" /><figcaption>Wederson Ferreira</figcaption></figure><p className="location"><Icon name="location" />{profile.location}</p></div>
      <div className="about-body">
        <p className="about-description">Desenvolvo soluções com foco em <strong>back-end, automação e dados</strong>. Minha experiência envolve desenvolvimento e manutenção de sistemas web, integração de serviços, investigação de falhas e criação de rotinas para reduzir trabalho manual.</p>
        <dl className="expertise-list"><div><dt>Back-end & integrações</dt><dd>PHP, Python, APIs REST e sistemas web.</dd></div><div><dt>Automação & processamento</dt><dd>Scripts, rotinas em lote e dados geoespaciais.</dd></div><div><dt>Dados & diagnóstico</dt><dd>SQL, contexto de ERP e IA Generativa aplicada à consulta técnica.</dd></div></dl>
        <div className="education"><span className="education-mark" aria-hidden="true" /><div><p>{profile.education}</p><span>{profile.institution} · {profile.graduation}</span></div></div>
      </div>
    </section>
  );
}
