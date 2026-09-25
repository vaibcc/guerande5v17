const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { images } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="relative bg-[#0A0F0D] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="À propos"
              title="Une équipe unie par la passion"
            />
            <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed">
              Guérande 5 est une équipe départementale du Billard Presqu'île Guérande.
              Réunie autour de la passion du billard et de la compétition, l'équipe met en
              avant la concentration, la stratégie, la régularité et surtout l'esprit collectif.
            </p>
            <div className="mt-8">
              <a
                href="#equipe"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-semibold text-[#0A0F0D] shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:bg-emerald-400 hover:-translate-y-0.5"
              >
                Découvrir l'équipe
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/8 shadow-2xl shadow-black/50">
              <img
                src="/025d3454d_c7c349a4-2cb6-485d-8fdd-76967644cb94c.jpeg"
                alt="L'équipe Guérande 5 autour d'une table de billard"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}