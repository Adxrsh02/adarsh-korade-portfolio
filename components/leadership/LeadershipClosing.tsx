"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* =========================================================
   LEADERSHIP CLOSING — §10
   Dramatic dark closing section with the signature quote.
   Four staggered lines + emotional finale.
   "use client" for IntersectionObserver-driven line reveals.
   ========================================================= */

const CLOSING_LINES = [
  "I joined to contribute.",
  "I stayed to learn.",
  "I became a leader.",
  "I left with memories.",
] as const;

export function LeadershipClosing() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = [
      ...lineRefs.current,
      subtitleRef.current,
      quoteRef.current,
    ].filter(Boolean) as Element[];

    const observers: IntersectionObserver[] = targets.map((el, idx) => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add("is-visible");
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      id="leadership-closing"
      aria-labelledby="closing-heading"
      className="bg-[#0A0A0A] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-[800px] px-6 sm:px-8 text-center">

        {/* ── Four headline lines ── */}
        <div className="flex flex-col gap-1 md:gap-2 mb-12 md:mb-16">
          {CLOSING_LINES.map((line, idx) => (
            <p
              key={line}
              ref={(el) => { lineRefs.current[idx] = el; }}
              className={`leadership-closing-line leadership-closing-line-delay-${idx + 1} font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1] uppercase`}
              aria-hidden={idx === 0 ? undefined : "false"}
            >
              {line}
            </p>
          ))}
        </div>

        {/* ── Orange divider ── */}
        <div className="w-12 h-px bg-[#EA580C] mx-auto mb-8 md:mb-10" />

        {/* ── Progression subtitle ── */}
        <div
          ref={subtitleRef}
          className="leadership-closing-line leadership-closing-line-delay-5 mb-8 md:mb-10"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[#525252] mb-1.5">
            Social Media Volunteer → Outreach Lead → Chairperson
          </p>
          <p className="text-sm text-[#404040] tracking-wide">
            E-Cell SIES GST &nbsp;·&nbsp; 2023–2026
          </p>
        </div>

        {/* ── Second orange divider ── */}
        <div className="w-12 h-px bg-[#2A2A2A] mx-auto mb-10 md:mb-12" />

        {/* ── Signature quote ── */}
        <p
          id="closing-heading"
          ref={quoteRef}
          className="leadership-closing-line leadership-closing-line-delay-5 font-heading text-lg md:text-xl lg:text-2xl font-light text-[#A3A3A3] italic leading-relaxed max-w-[560px] mx-auto"
        >
          &ldquo;I started as one person in the team. I left understanding how
          to build a team.&rdquo;
        </p>

        {/* ── Subtle nav back ── */}
        <div className="mt-16 md:mt-20">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#404040] hover:text-[#EA580C] transition-colors duration-200"
            aria-label="Back to the About page"
          >
            <span aria-hidden="true">←</span>
            <span>Back to About</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
