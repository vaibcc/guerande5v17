import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { upcomingMatches } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Calendar() {
  return (
    <section id="calendrier" className="relative bg-[#0A0F0D] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Calendrier & événements"
          title="Prochains matchs"
          description="Les prochaines rencontres de Guérande 5."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/8 bg-[#141C18] p-8 md:p-12"
        >
          {upcomingMatches.length === 0 ? (
            <div className="flex flex-col items-center text-center py-10">
              {/* Rack de billards stylisé */}
              <div className="relative mb-8">
                <div className="flex flex-col items-center gap-1.5">
                  {[3, 2, 1].map((row, r) => (
                    <div key={r} className="flex gap-1.5">
                      {Array.from({ length: row }).map((_, i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-400/30 to-emerald-700/40 ring-1 ring-emerald-400/20"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-black uppercase text-white">
                Prochains matchs à venir
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/50">
                Le calendrier des prochaines rencontres sera prochainement mis à jour.
              </p>
              <a
                href="https://cuescore.com/team/GUERANDE+5+-+DD+1-1/48160828"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-[#0A0F0D] transition-all duration-300 hover:bg-emerald-400 hover:-translate-y-0.5"
              >
                Voir le calendrier sur CueScore
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {upcomingMatches.map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-white/8 bg-[#0A0F0D] p-5"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex flex-col items-center justify-center rounded-lg bg-emerald-500/10 px-4 py-2 min-w-[64px]">
                      <span className="text-[10px] uppercase text-emerald-300">Date</span>
                      <span className="font-heading text-lg font-black text-white">{m.date}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Guérande 5 vs {m.opponent}</div>
                      <div className="text-xs text-white/50 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <span className="inline-flex items-center gap-1"><Clock size={12} />{m.time}</span>
                        <span className="inline-flex items-center gap-1"><MapPin size={12} />{m.venue}</span>
                        <span>{m.homeAway} · {m.competition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}