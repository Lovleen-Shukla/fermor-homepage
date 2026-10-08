"use client";
import { useState } from "react";

const links = [["Product", "#product"], ["How it works", "#how"], ["Try it", "#projection"], ["FAQ", "#faq"]];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-mist/80 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="font-serif text-2xl font-semibold tracking-tight">Fermor<span className="text-moss">.</span></a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => <a key={h} href={h} className="text-ink/70 transition hover:text-ink">{l}</a>)}
          <a href="#cta" className="rounded-full bg-ink px-5 py-2 font-medium text-paper transition hover:bg-moss">Get started</a>
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="border-t border-mist bg-paper px-5 pb-6 pt-2 md:hidden">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-mist py-3.5 text-lg">{l}</a>)}
          <a href="#cta" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-ink py-3 text-center font-medium text-paper">Get started</a>
        </div>
      )}
    </header>
  );
}
