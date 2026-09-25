import React from "react";
import { motion } from "framer-motion";
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
              Guérande 5 est une équipe départementale du Billard Presqu'île
              Guérande. Réunie autour de la passion du billard et de la compétition,
              l'équipe met en avant la concentration, la stratégie, la régularité
              et surtout l'esprit collectif.
            </p>
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
                src="/967644cb94c.jpeg

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/50 to-transparent" />
            </div>

            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
