"use client";

import { useEffect, useRef, useState } from "react";
import { heroFlow } from "@/data/process";
import { Icon } from "@/components/ui/Icon";

const points = [{ x: 24, y: 52 }, { x: 280, y: 136 }, { x: 24, y: 220 }, { x: 280, y: 304 }, { x: 24, y: 388 }];
const routes = ["M134 112 V124 H390 V136", "M390 196 V208 H134 V220", "M134 280 V292 H390 V304", "M390 364 V376 H134 V388"];

export function TechnicalFlow() {
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const figureRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = figureRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={figureRef} className={`technical-flow ${paused || !visible ? "is-paused" : ""}`}>
      <div className="flow-heading"><span className="flow-heading-line" aria-hidden="true" /><p>Do problema ao resultado</p><span className="flow-heading-dot" aria-hidden="true" /></div>
      <svg className="flow-diagram" viewBox="0 0 524 480" role="img" aria-labelledby="flow-title flow-description">
        <title id="flow-title">Fluxo de uma solução técnica</title>
        <desc id="flow-description">Requisitos, arquivos e eventos passam por processamento, back-end e organização de dados para produzir uma solução funcional. Representação conceitual.</desc>
        {routes.map((route, index) => <g key={route}><path className="flow-track" d={route} /><path className="flow-route" d={route} style={{ animationDelay: `${index * 1.6}s` }} /><circle className="flow-packet" r="3" style={{ offsetPath: `path('${route}')`, animationDelay: `${index * 1.6}s` }} /></g>)}
        {heroFlow.map((step, index) => (
          <g key={step.title} transform={`translate(${points[index].x} ${points[index].y})`} className={`flow-node flow-node-${index}`}>
            <rect className="flow-node-bg" width="220" height="60" rx="8" />
            <g transform="translate(16 18)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {step.icon === "input" && <path d="M14 4h6v16h-6M3 12h12M10 7l5 5-5 5" />}
              {step.icon === "process" && <><path d="M4 7h16M4 12h16M4 17h16" /><path d="M9 5v4M15 10v4M9 15v4" /></>}
              {step.icon === "code" && <path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18" />}
              {step.icon === "database" && <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>}
              {step.icon === "check" && <path d="m5 12 4 4L19 6" />}
            </svg></g>
            <text className="flow-node-title" x="52" y="25">{step.title}</text>
            <text className="flow-node-detail" x="52" y="44">{step.detail}</text>
            <circle className="flow-port" cx="110" cy="0" r="3" />
            {index < heroFlow.length - 1 && <circle className="flow-port" cx="110" cy="60" r="3" />}
          </g>
        ))}
        <path className="flow-branch" d="M500 166h12v168h-12M24 82H12v168h12" />
      </svg>
      <ol className="flow-mobile" aria-label="Fluxo de uma solução técnica">
        {heroFlow.map((step, index) => <li key={step.title}><Icon name={step.icon} /><div><strong>{step.title}</strong><span>{step.detail}</span></div>{index < heroFlow.length - 1 && <span className="mobile-packet" aria-hidden="true" style={{ animationDelay: `${index * 0.4}s` }} />}</li>)}
      </ol>
      <figcaption className="flow-caption"><span>Uma estrutura. Partes conectadas.</span><button className="flow-control" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}><Icon name={paused ? "play" : "pause"} />{paused ? "Animar fluxo" : "Pausar fluxo"}</button></figcaption>
    </figure>
  );
}
