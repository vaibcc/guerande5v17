const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { teamInfo } from "@/data/siteData";

export default function Federation() {
  return (
    <section className="relative bg-[#141C18] py-16 md:py-20 border-y border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          {/* Logo FFB */}
<div className="shrink-0">
  <div className="relative rounded-2xl overflow-hidden bg-white p-3 shadow-lg">
    <img>
      src="/logo-FFB.png"
      alt="Logo Fé
            </div>
          </div>

          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-3">
              <span className="h-px w-8 bg-amber-400/60" />
              Affiliation officielle
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Fédération Française de Billard
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed">
              Guérande 5 participe aux compétitions dans le cadre de la Fédération Française de Billard.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}