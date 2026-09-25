import React from "react";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow &&
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400 mb-4">
          <span className="h-px w-8 bg-emerald-500/60" />
          {eyebrow}
        </span>
      }
      

      
      {description &&
      <p className="mt-5 text-base md:text-lg text-white/60 leading-relaxed hidden">
          {description}
        </p>
      }
    </div>);

}