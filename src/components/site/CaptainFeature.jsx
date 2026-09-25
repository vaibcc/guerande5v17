import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import { players } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function CaptainFeature() {
  const captain = players.find((p) => p.role === "Capitaine");
  if (!captain) return null;

  return (
    <section className="relative bg-[#141C18] py-20 md:py-28 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capitaine"
          title="Vaibhav KAMRA"
          description="Capitaine de Guérande 5." />
        

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Portrait */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-white/8 bg-[#0A0F0D] min-h-[360px]">
            <img
              src={captain.photo}
              alt={captain.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 inline-flex items-center rounded-full border border-amber-400/50 bg-amber-400/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-amber-300 backdrop-blur-sm">
              Capitaine
            </div>
          </div>

          {/* Infos */}
          <div className="lg:col-span-3 rounded-2xl border border-white/8 bg-[#0A0F0D] p-8">
            <h3 className="font-heading text-2xl md:text-3xl font-black uppercase text-white">
              {captain.name}
            </h3>
            <span className="mt-2 inline-block text-xs uppercase tracking-[0.2em] text-amber-400">
              Capitaine de Guérande 5
            </span>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Biographie</div>
                <p className="text-sm text-white/60 leading-relaxed">{captain.bio}</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Expérience</div>
                <p className="text-sm text-white/60 leading-relaxed">10 ans d'expérience dans le snooker et le billard américain</p>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Contact / réseaux</div>
                <div className="flex flex-wrap gap-3 text-sm text-white/60">
                  <a
                    href="mailto:contact@vaib.cc"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Mail size={14} /> contact@vaib.cc
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}