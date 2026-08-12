import React from "react";
import { Sparkles } from "lucide-react";

/**
 * BlogHero Component
 * ──────────────────
 * Minimal, editorial header for the /blogs page.
 * Follows the portfolio's Helvetica Neue heading direction,
 * clean typography hierarchy, and subtle orange accents.
 */
export function BlogHero() {
  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-16 border-b border-[#E5E5E5]/80 bg-white overflow-hidden">
      {/* Background ambient detail */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
            <span>Thoughts &amp; Ideas</span>
          </div>

          {/* H1 Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] leading-[1.1] mb-6">
            Writing About What I Build, Learn &amp; Explore.
          </h1>

          {/* Subheading / Description */}
          <p className="text-lg sm:text-xl text-[#525252] leading-relaxed font-sans max-w-2xl">
            A collection of technical insights, engineering experiences, experiments,
            ideas, and lessons from my journey across AI, data, software, design, and technology.
          </p>
        </div>
      </div>
    </section>
  );
}
