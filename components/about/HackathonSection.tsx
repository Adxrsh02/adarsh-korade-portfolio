"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { CertificateLightbox } from "@/components/about/CertificateLightbox";
import { HACKATHON_ENTRY } from "@/lib/about-data";

/* =========================================================
   HACKATHON SECTION
   § 7 — DEV WITH AI Hackathon highlight
   ========================================================= */

export function HackathonSection() {
  const entry = HACKATHON_ENTRY;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <SectionWrapper
        id="hackathon"
        background="white"
        ariaLabelledBy="hackathon-heading"
      >
        <Container>
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-4 mb-10">
              <SectionLabel>Hackathon</SectionLabel>
              <SectionHeading id="hackathon-heading">
                Building Under Pressure
              </SectionHeading>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            {/* Left: Event details */}
            <ScrollReveal delay={1}>
              <article className="flex flex-col gap-5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-7">
                {/* Event name + badge */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="accent" size="md">Hackathon</Badge>
                  </div>
                  <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-xl font-bold text-[#0A0A0A]">
                    {entry.eventName}
                  </h3>
                  <p className="text-sm font-medium text-[#404040]">
                    Team: <span className="text-[#F97316]">{entry.teamName}</span>
                  </p>
                  <p className="text-xs text-[#737373]">
                    Organized by {entry.organizer} · {entry.venue}
                  </p>
                </div>

                {/* Project */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-[#0A0A0A]">
                    Project: {entry.projectName}
                  </p>
                  <p className="text-sm leading-relaxed text-[#525252]">
                    {entry.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2" role="list" aria-label="Project features">
                  {entry.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#525252]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-70 shrink-0" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>

            {/* Right: Certificate */}
            <ScrollReveal delay={2}>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="group block w-full relative overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] aspect-[4/3] hover:border-[#D4D4D4] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
                aria-label="View Team CodeZen hackathon certificate (opens in fullscreen)"
              >
                <Image
                  src={entry.certificateSrc}
                  alt={entry.certificateAlt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/10">
                  <span className="bg-white/90 text-[#0A0A0A] text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    View Full Certificate
                  </span>
                </div>
              </button>
            </ScrollReveal>
          </div>
        </Container>
      </SectionWrapper>

      {/* Lightbox */}
      {lightboxOpen && (
        <CertificateLightbox
          imageSrc={entry.certificateSrc}
          imageAlt={entry.certificateAlt}
          certName={`${entry.eventName} — ${entry.teamName}`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
