"use client";

import { useEffect, useRef } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_TIMELINE } from "@/lib/leadership-data";

/* =========================================================
   LEADERSHIP TIMELINE — §2
   Animated vertical timeline for the 3-role progression.
   "use client" for the IntersectionObserver timeline line animation.
   ========================================================= */

export function LeadershipTimeline() {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const line = lineRef.current;
    const dots = dotRefs.current;

    if (!line) return;

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            line.classList.add("is-visible");
            lineObserver.unobserve(line);
          }
        });
      },
      { threshold: 0.1 }
    );

    lineObserver.observe(line);

    const dotObservers = dots.map((dot, idx) => {
      if (!dot) return null;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Stagger each dot
              setTimeout(() => {
                dot.classList.add("is-visible");
              }, idx * 350);
              obs.unobserve(dot);
            }
          });
        },
        { threshold: 0.5 }
      );
      obs.observe(dot);
      return obs;
    });

    return () => {
      lineObserver.disconnect();
      dotObservers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <SectionWrapper
      id="leadership-timeline"
      ariaLabelledBy="timeline-heading"
      background="alt"
    >
      <Container variant="narrow">
        {/* Section header */}
        <ScrollReveal delay={0}>
          <SectionLabel>The Journey</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <SectionHeading id="timeline-heading" className="mt-2 mb-3">
            From Volunteer to Chairperson
          </SectionHeading>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <SectionDescription className="mb-14">
            I joined E-Cell with no idea how far the journey would take me. Each
            role brought more responsibility, more people, and a different kind
            of learning.
          </SectionDescription>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#E5E5E5] overflow-hidden rounded-full">
            <div
              ref={lineRef}
              className="leadership-timeline-line absolute inset-0 bg-gradient-to-b from-[#EA580C] to-[#FB923C]"
            />
          </div>

          {/* Timeline entries */}
          <div className="flex flex-col gap-0">
            {LEADERSHIP_TIMELINE.map((entry, idx) => (
              <ScrollReveal key={entry.year} delay={(idx % 4) as 0 | 1 | 2 | 3}>
                <div className="relative flex gap-8 pb-12 last:pb-0">
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      ref={(el) => { dotRefs.current[idx] = el; }}
                      className="leadership-timeline-dot w-6 h-6 rounded-full border-2 border-[#EA580C] bg-white flex items-center justify-center shadow-sm"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FDBA74]/30">
                        {entry.year}
                      </span>
                    </div>

                    {/* Role title */}
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#0A0A0A] mb-3 leading-snug">
                      {entry.role}
                    </h3>

                    {/* Description */}
                    <p className="text-[#737373] leading-relaxed text-base md:text-[17px] max-w-[540px]">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
