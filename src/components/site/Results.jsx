import React from "react";
import { motion } from "framer-motion";
import { results } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

function MatchCard({ match, index }) {
  const isWin = match.result === "VICTOIRE";
  const isLoss = match.result === "DÉFAITE";

  const badgeClass = isWin ?
  "border-amber-400/50 bg-amber-400/10 text-amber-300" :
  isLoss ?
  "border-white/15 bg-white/5 text-white/60" :
  "border-emerald-400/40 bg-emerald-400/10 text-emerald-300";

  const accentClass = isWin ?
  "from-amber-400/60 to-amber-600/40" :
  isLoss ?
  "from-white/20 to-white/5" :
  "from-emerald-400/60 to-emerald-600/40";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#141C18] p-6 md:p-8 transition-all duration-300 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
      
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentClass}`} />

      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] ${badgeClass}`}>
          {match.result}
        </span>
      </div>

      {/* Score */}
      <div className="mt-7 flex items-center justify-center gap-4 md:gap-8">
        <div className="flex-1 text-right">
          <div className="text-sm md:text-base font-semibold text-white/80 truncate">
            {match.teamA}
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <span className="font-heading text-5xl md:text-7xl font-black tabular-nums text-white leading-none">
            {match.scoreA}
          </span>
          <span className="text-2xl md:text-3xl font-light text-white/30">·</span>
          <span className="font-heading text-5xl md:text-7xl font-black tabular-nums text-white/60 leading-none">
            {match.scoreB}
          </span>
        </div>
        <div className="flex-1 text-left">
          <div className="text-sm md:text-base font-semibold text-white/80 truncate">
            {match.teamB}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-white/55 leading-relaxed text-center">
        {match.description}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-white/45 border-t border-white/5 pt-4">
        
        
      </div>
    </motion.div>);

}

export default function Results() {
  return (
    <section id="resultats" className="relative bg-[#0A0F0D] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Résultats récents"
          title="Nos performances"
          description="Les derniers résultats confirmés de Guérande 5." />
        

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((match, i) =>
          <MatchCard key={match.id} match={match} index={i} />
          )}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#resultats"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10">
            
            Voir tous les résultats
          </a>
        </div>
      </div>
    </section>);

}