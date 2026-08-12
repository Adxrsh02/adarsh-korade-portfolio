"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES, LEADERSHIP_LINKS } from "@/lib/leadership-data";

/* =========================================================
   BEYOND THE DESIGNATIONS — §5
   A personal story about friendship and working with Gaurish.
   Features a grand, editorial-style left photo column (50% width)
   visually balancing the story narrative on the right.
   ========================================================= */

const SUBTITLE_WORDS = "Some journeys are better when you have your best friend beside you.".split(" ");

const BODY_PARAGRAPHS = [
  "Gaurish was not just my Secretary in E-Cell — he was also one of my closest friends throughout college. Working together in E-Cell made our friendship even more special.",
  "As Chairperson and Secretary, we spent a lot of time discussing ideas, planning events, solving problems, making decisions, and sometimes just figuring things out together when nothing went according to plan.",
  "There were serious discussions, stressful moments, random conversations, disagreements, and plenty of laughs in between. But having someone I already trusted made many difficult situations a little easier.",
  "We both had our own responsibilities, but whenever something needed to be done, we worked together and had each other's back.",
] as const;

const CLOSING_LINE = "Looking back, I'm really glad that one of my best friends was also a part of one of the most important journeys of my college life.";

export function CoreTeam() {
  const quoteLineRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    /* ── Quote border line draw ── */
    const line = quoteLineRef.current;
    if (line) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            line.classList.add("is-visible");
            obs.unobserve(line);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(line);
    }

    /* ── Word-by-word subtitle stagger ── */
    const words = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (words.length > 0) {
      const wordObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            words.forEach((word, i) => {
              setTimeout(() => word.classList.add("is-visible"), i * 40);
            });
            wordObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      const containerEl = words[0].closest("[data-word-container]");
      if (containerEl) wordObserver.observe(containerEl);

      return () => wordObserver.disconnect();
    }
  }, []);

  return (
    <SectionWrapper
      id="core-team"
      ariaLabelledBy="core-team-heading"
      background="white"
    >
      <Container>
        {/* 50 / 50 Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* ──────────────────────────────────────────────────
              LEFT COLUMN — Prominent Large Editorial Photo (~50% width)
          ────────────────────────────────────────────────── */}
          <ScrollReveal delay={0} className="lg:col-span-6 w-full lg:sticky lg:top-24">
            <figure className="w-full flex flex-col gap-3">
              {/* Grand Large Editorial Image Container */}
              <div className="group relative w-full aspect-[4/3] sm:aspect-[3/4] lg:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5] shadow-lg hover:border-[#D4D4D4] hover:shadow-xl transition-all duration-500">
                <Image
                  src={LEADERSHIP_IMAGES.photoWithGaurish}
                  alt="Adarsh Korade with Gaurish Kale — Chairperson and Secretary at E-Cell SIES GST, best friends in college"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px"
                  className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay at bottom for depth & contrast */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.12) 45%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Floating identity badge — bottom of photograph */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between gap-3 bg-white/90 backdrop-blur-md border border-white/60 shadow-md rounded-2xl p-4">
                    <div className="flex flex-col min-w-0">
                      <span className="font-heading text-sm md:text-base font-bold text-[#0A0A0A] truncate">
                        Adarsh Korade &amp; Gaurish Kale
                      </span>
                      <span className="text-xs text-[#737373] truncate font-medium mt-0.5">
                        Chairperson &amp; Secretary &bull; E-Cell SIES GST (2023–2026)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Figcaption */}
              <figcaption className="flex items-center gap-2.5 px-1 pt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] flex-shrink-0" />
                <span className="text-xs md:text-sm text-[#737373] italic">
                  Best friends behind one of the most important college journeys.
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* ──────────────────────────────────────────────────
              RIGHT COLUMN — Personal Story Content (~50% width)
          ────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:pt-1">

            {/* Eyebrow Label */}
            <ScrollReveal delay={0}>
              <SectionLabel>Beyond the Designations</SectionLabel>
            </ScrollReveal>

            {/* Section Heading */}
            <ScrollReveal delay={1}>
              <SectionHeading id="core-team-heading" className="mb-0 leading-tight">
                Some journeys are better when you have the right person beside you.
              </SectionHeading>
            </ScrollReveal>

            {/* Subtitle with subtle word stagger */}
            <ScrollReveal delay={2}>
              <p
                className="text-base md:text-lg font-medium text-[#404040] leading-relaxed"
                data-word-container
                aria-label="Some journeys are better when you have your best friend beside you."
              >
                {SUBTITLE_WORDS.map((word, i) => (
                  <span key={i}>
                    <span
                      ref={(el) => { wordsRef.current[i] = el; }}
                      className="friendship-word"
                      style={{ transitionDelay: `${i * 40}ms` }}
                      aria-hidden="true"
                    >
                      {word}
                    </span>
                    {i < SUBTITLE_WORDS.length - 1 && (
                      <span className="friendship-word" style={{ transitionDelay: `${i * 40}ms` }} aria-hidden="true">&nbsp;</span>
                    )}
                  </span>
                ))}
              </p>
            </ScrollReveal>

            {/* Accent Orange Divider */}
            <ScrollReveal delay={2}>
              <div className="h-px w-12 bg-[#EA580C]" />
            </ScrollReveal>

            {/* Body Paragraphs */}
            <div className="flex flex-col gap-4">
              {BODY_PARAGRAPHS.map((para, idx) => (
                <ScrollReveal key={idx} delay={(idx % 4) as 0 | 1 | 2 | 3}>
                  <p className="text-[#525252] leading-relaxed text-base md:text-[17px]">
                    {para}
                  </p>
                </ScrollReveal>
              ))}

              {/* Closing Sentiment */}
              <ScrollReveal delay={3}>
                <p className="text-[#0A0A0A] leading-relaxed text-base md:text-[17px] font-medium pt-1">
                  {CLOSING_LINE}
                </p>
              </ScrollReveal>
            </div>

            {/* Editorial Pull-Quote */}
            <ScrollReveal delay={4}>
              <div className="relative flex gap-4 items-stretch mt-1">
                {/* Animated vertical border */}
                <div className="relative w-0.5 bg-[#F0F0F0] rounded-full flex-shrink-0 self-stretch overflow-hidden">
                  <div
                    ref={quoteLineRef}
                    className="friendship-quote-line absolute top-0 left-0 w-full bg-[#EA580C] rounded-full"
                    aria-hidden="true"
                  />
                </div>

                {/* Quote text */}
                <blockquote className="py-1">
                  <p className="font-heading text-base md:text-lg font-medium text-[#0A0A0A] italic leading-snug mb-2">
                    &ldquo;What mattered was the bond behind the work.&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs text-[#A3A3A3] font-medium uppercase tracking-wider">
                      Chairperson &amp; Secretary &bull; E-Cell SIES GST
                    </span>
                  </div>
                </blockquote>
              </div>
            </ScrollReveal>

            {/* Premium LinkedIn CTA Button */}
            <ScrollReveal delay={5}>
              <div className="pt-3">
                <a
                  href={LEADERSHIP_LINKS.gaurish}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Gaurish Kale's LinkedIn profile (opens in new tab)"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[#E5E5E5] bg-white text-sm font-semibold text-[#0A0A0A] hover:border-[#EA580C]/40 hover:text-[#EA580C] hover:shadow-md active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#0A0A0A] group-hover:text-[#EA580C] transition-colors duration-200 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>

                  <span>Connect with Gaurish</span>

                  {/* External Link Arrow */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#737373] group-hover:text-[#EA580C]"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
