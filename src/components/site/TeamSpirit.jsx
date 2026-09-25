import React from "react";
import { motion } from "framer-motion";
import { images } from "@/data/siteData";

export default function TeamSpirit() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Fond */}
      <div className="absolute inset-0">
        <img
          src={images.teamSpirit}
          alt="Salle de billard"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0F0D]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-[#0A0F0D]/70 to-[#0A0F0D]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-6"
        >
          <span className="h-px w-8 bg-emerald-500/60" />
          Esprit d'équipe
          <span className="h-px w-8 bg-emerald-500/60" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]"
        >
          Plus qu'une équipe
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed"
        >
          Chaque rencontre est l'occasion de défendre les couleurs de Guérande 5,
          de progresser ensemble et de partager notre passion du billard.
        </motion.p>
      </div>
    </section>
  );
}