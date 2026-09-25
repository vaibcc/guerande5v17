import React from "react";
import { motion } from "framer-motion";
import { players } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

function PlayerCard({ player, index }) {
  const isCaptain = player.role === "Capitaine";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#141C18] transition-all duration-300 hover:border-emerald-400/30 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1">
      
      {/* Placeholder portrait */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#141C18] to-[#0A0F0D]">
        {player.photo && player.photo !== "placeholder" ?
        <img
          src={player.photo}
          alt={player.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /> :

        <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder billard élégant */}
            <div className="relative">
              <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-800/30 ring-1 ring-emerald-400/20 flex items-center justify-center">
                <span className="font-heading text-3xl font-black text-white/70">
                  {player.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-white/30 whitespace-nowrap">
                Photo à venir
              </div>
            </div>
          </div>
        }
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-transparent to-transparent" />
        {isCaptain &&
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full border border-amber-400/50 bg-amber-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300 backdrop-blur-sm">
            Capitaine
          </span>
        }
      </div>

      <div className="p-5">
        <h3 className="font-heading text-lg font-black uppercase tracking-tight text-white">
          {player.name}
        </h3>
        <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-emerald-400">
          {player.role}
        </span>
        <div className="mt-4 space-y-2 text-xs text-white/45">
          
          
        </div>
      </div>
    </motion.div>);

}

export default function Team() {
  return (
    <section id="equipe" className="relative bg-[#0A0F0D] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="L'équipe"
          title="Découvrez l'équipe"
          description="Les six joueurs confirmés de Guérande 5." />
        

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((p, i) =>
          <PlayerCard key={p.id} player={p} index={i} />
          )}
        </div>
      </div>
    </section>);

}