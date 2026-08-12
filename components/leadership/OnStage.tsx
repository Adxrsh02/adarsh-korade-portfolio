"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-data";

/* =========================================================
   ON STAGE — §6
   Editorial panel photo with balanced 1140px max-width container,
   smooth 0.98 -> 1 scroll reveal, bounded rAF parallax,
   and 1.02 hover scale effect.
   ========================================================= */

export function OnStage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      const inner = innerRef.current;
      if (!container || !inner) return;

      const rect = container.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Only parallax when element is near viewport
      if (rect.bottom < 0 || rect.top > viewH) return;

      const progress = (viewH - rect.top) / (viewH + rect.height);
      const maxShift = 24; // Bounded subtle shift (px)
      const shift = (progress - 0.5) * maxShift;
      inner.style.transform = `translateY(${shift}px)`;
    });
  }, []);

  useEffect(() => {
    // Skip parallax for users who prefer reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <SectionWrapper
      id="on-stage"
      ariaLabelledBy="on-stage-heading"
      background="alt"
    >
      {/* Moderately-sized container (~1140px max width) for elegant page breathing room */}
      <Container className="max-w-[1140px]">
        {/* Header */}
        <div className="mb-8 md:mb-10 text-center max-w-[640px] mx-auto">
          <ScrollReveal delay={0}>
            <SectionLabel>Representing E-Cell</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <SectionHeading id="on-stage-heading" className="mt-2">
              On Stage
            </SectionHeading>
          </ScrollReveal>
        </div>

        <ScrollReveal className="w-full">
          <figure>
            <div
              ref={containerRef}
              className="group leadership-parallax-container relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#E5E5E5] bg-[#FAFAFA] aspect-[16/9] md:aspect-[21/9]"
            >
              <div ref={innerRef} className="leadership-parallax-inner absolute inset-[-24px]">
                <Image
                  src={LEADERSHIP_IMAGES.onStagePanel}
                  alt="Adarsh Korade on stage representing E-Cell SIES GST with guests and faculty"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority={false}
                />
                {/* Cinematic vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Caption — unchanged text & styling */}
            <figcaption className="mt-5 max-w-[680px] mx-auto text-center">
              <p className="text-[#737373] text-base md:text-[17px] leading-relaxed italic">
                Representing E-Cell and sharing a moment with the people who
                supported the journey.
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
