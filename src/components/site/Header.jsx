import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, teamInfo } from "@/data/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F0D]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo + nom */}
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-900/40 ring-1 ring-emerald-400/30">
              <span className="font-heading font-black text-white text-sm md:text-base">G5</span>
            </div>
            <div className="leading-tight">
              <span className="block font-heading text-lg md:text-xl font-black uppercase tracking-tight text-white">
                Guérande 5
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-white/50">
                {teamInfo.federationShort} · Billard
              </span>
            </div>
          </a>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:scale-x-0 after:bg-emerald-400 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="https://cuescore.com/team/GUERANDE+5+-+DD+1-1/48160828"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-[#0A0F0D] shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Voir sur CueScore
            </a>
          </div>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#0A0F0D]/95 backdrop-blur-md border-b border-white/5`}
      >
        <nav className="px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cuescore.com/team/GUERANDE+5+-+DD+1-1/48160828"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-[#0A0F0D]"
          >
            Voir sur CueScore
          </a>
        </nav>
      </div>
    </header>
  );
}