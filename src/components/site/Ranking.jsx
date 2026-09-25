import React from "react";
import { motion } from "framer-motion";
import { ranking } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Ranking() {
  return (
    <section id="classement" className="relative bg-[#141C18] md:py-28 scroll-mt-20 border-y border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Classement"
          title="Classement"
          description="Position actuelle de Guérande 5 dans sa division." />
        

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/8 bg-[#0A0F0D] md:p-12 px-3 py-3">
          
          {!ranking.available ?
          <div className="flex flex-col items-center text-center py-8">
              <div className="relative h-20 w-20 mb-6">
                
                

              
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-black uppercase text-white">Classement

            </h3>
              <p className="mt-3 max-w-md text-sm text-white/50">Les informations de classement.

            </p>
            </div> :

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
            { label: "Division", value: ranking.division },
            { label: "Position", value: ranking.position },
            { label: "Points", value: ranking.points },
            { label: "Matchs joués", value: ranking.played }].
            map((item) =>
            <div key={item.label} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-black text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/50">
                    {item.label}
                  </div>
                </div>
            )}
            </div>
          }

          <div className="mt-8 text-center">
            <a
              href="https://cuescore.com/tournament/Blackball+PDL+2026%252F2027+-+Championnat+D%C3%A9partemental++DD1.1/86974087"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-emerald-400/50 hover:bg-white/10">
              
              Voir le classement complet
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}