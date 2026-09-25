import React, { useState } from "react";
import { motion } from "framer-motion";
import { galleryCategories, galleryImages } from "@/data/siteData";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const [active, setActive] = useState("Tous");
  const filters = ["Tous", ...galleryCategories];
  const visible = active === "Tous" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <section id="galerie" className="relative bg-[#0A0F0D] py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galerie photo"
          title="La vie de Guérande 5"
          description="Matchs, entraînements, équipe et événements du club." />
        

        {/* Filtres */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) =>
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 hidden ${
            active === f ?
            "bg-emerald-500 text-[#0A0F0D]" :
            "border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20"}`
            }>
            
              {f}
            </button>
          )}
        </div>

        {/* Grille masonry */}
        <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {visible.map((img, i) =>
          <motion.div
            key={`${img.src}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i % 3 * 0.08 }}
            className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl border border-white/8">
            
              <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0A0F0D]">
                  {img.category}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}