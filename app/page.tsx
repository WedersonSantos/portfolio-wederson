import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  const person = { "@context": "https://schema.org", "@type": "Person", name: profile.name, email: profile.email, sameAs: [profile.github, profile.linkedin], knowsAbout: ["Python", "PHP", "SQL", "APIs REST", "Automação", "Dados geoespaciais"] };
  return <><Navigation /><main id="conteudo" tabIndex={-1}><Hero /><Projects /><About /><WorkProcess /><TechStack /><Experience /><Contact /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} /></>;
}
