import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { navLinks, teamInfo } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="relative bg-[#070B09] border-t border-white/5 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Identité */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center ring-1 ring-emerald-400/30">
                <span className="font-heading font-black text-white text-sm">G5</span>
              </div>
              <div>
                <div className="font-heading text-lg font-black uppercase text-white">Guérande 5</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Équipe départementale</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Équipe départementale de Billard Presqu'île Guérande.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-300/80">
              Fédération Française de Billard
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Navigation</div>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Réseaux */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 hidden">Suivez-nous</div>
            <div className="flex gap-3 hidden">
              {[Facebook, Instagram, Mail].map((Icon, i) =>
              <a
                key={i}
                href="#contact"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-emerald-400 hover:border-emerald-400/40 transition-all duration-300"
                aria-label="Réseau social">
                
                  <Icon size={18} />
                </a>
              )}
            </div>
            

            
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © Guérande 5 – Billard Presqu'île Guérande
          </p>
          <p className="text-xs text-white/30">
            {teamInfo.location}
          </p>
        </div>
      </div>
    </footer>);

}