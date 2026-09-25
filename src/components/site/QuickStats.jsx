import React from "react";
import { motion } from "framer-motion";
import { quickStats } from "@/data/siteData";

export default function QuickStats() {
  return (
    <section className="relative -mt-px py-16 md:py-20 bg-[hsl(var(--card-foreground))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {quickStats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl border border-white/8 bg-[#141C18] p-8 text-center overflow-hidden">
            
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
              <div className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.15em] text-white/55">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}