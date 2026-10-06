"use client";

import { useState } from "react";
import { processSteps } from "@/data/process";
import { Icon } from "@/components/ui/Icon";

export function WorkProcess() {
  const [selected, setSelected] = useState(0);
  const step = processSteps[selected];
  return (
    <section id="processo" className="process-section section" aria-labelledby="process-title">
      <div className="container">
        <div className="section-header"><h2 id="process-title">Um caminho claro<br /><span>para resolver.</span></h2><p>Do contexto à validação, cada etapa tem uma pergunta a responder e um resultado a entregar.</p></div>
        <ol className="process-steps" aria-label="Etapas do meu processo de trabalho">{processSteps.map((item, index) => <li key={item.title}><button type="button" id={`process-step-${index}`} className={selected === index ? "is-selected" : ""} aria-pressed={selected === index} aria-controls="process-detail" onClick={() => setSelected(index)}><span className="step-number">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span><Icon name="arrow" /></button></li>)}</ol>
        <div id="process-detail" className="process-detail" role="region" aria-label={`Etapa ${selected + 1}: ${step.title}`} aria-live="polite" aria-atomic="true">
          <div className="process-explanation"><h3>{step.headline}</h3><p>{step.description}</p></div>
          <div className="process-inputs"><p className="process-subtitle">O que entra em análise</p><ul>{step.inputs.map((input) => <li key={input}><span aria-hidden="true" />{input}</li>)}</ul><p className="process-output"><Icon name="check" />{step.output}</p></div>
        </div>
        <p className="process-note">As etapas se conectam. Investigar e validar também fazem parte de desenvolver.</p>
      </div>
    </section>
  );
}
