import React from "react";
import { motion } from "framer-motion";
import { images } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Fond */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Table de billard en compétition"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D]/80 via-[#0A0F0D]/70 to-[#0A0F0D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0D]/90 via-transparent to-[#0A0F0D]/60" />
      </div>

      {/* Accent diagonal */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 top-1/3 h-px w-[140%] rotate-[15deg] bg-emerald-500/10" />
        <div className="absolute -left-1/4 top-2/3 h-px w-[140%] rotate-[15deg] bg-emerald-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Équipe départementale · {`FFB`}
          </span>

          <h1 className="mt-6 font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Guérande 5
          </h1>

          <p className="mt-5 text-xl sm:text-2xl font-semibold text-white/90">
            Équipe départementale de Billard Presqu'île Guérande
          </p>

          <p className="mt-4 max-w-xl text-base md:text-lg text-white/60 leading-relaxed">
            Passion, compétition et esprit d'équipe au cœur de la Presqu'île guérandaise.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#equipe"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-[#0A0F0D] shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Découvrir l'équipe
            </a>
            <a
              href="#resultats"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10 hover:-translate-y-0.5"
            >
              Voir les résultats
            </a>
          </div>
        </motion.div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Défiler</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}