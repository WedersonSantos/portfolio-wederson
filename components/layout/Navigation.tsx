"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/profile";
import { Icon } from "@/components/ui/Icon";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
    }
    function onOutside(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutside); };
  }, [open]);

  return (
    <header className="navigation" ref={headerRef}>
      <div className="nav-inner container">
        <Link className="brand" href="/#inicio" onClick={() => setOpen(false)} ><span className="brand-mark" aria-hidden="true">w<span>.</span></span><span>Wederson Ferreira</span></Link>
        <button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="navegacao-principal" aria-label={open ? "Fechar navegação" : "Abrir navegação"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
        <nav id="navegacao-principal" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Navegação principal">
          {navigation.map((item) => <Link key={item.href} href={`/${item.href}`} onClick={() => setOpen(false)}>{item.label}</Link>)}
          <Link className="nav-contact" href="/#contato" onClick={() => setOpen(false)}>Vamos conversar <Icon name="arrow" /></Link>
        </nav>
      </div>
    </header>
  );
}
