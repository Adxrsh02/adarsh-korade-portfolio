import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { ExperienceEntryCard } from "@/components/about/ExperienceEntry";
import { EXPERIENCE_ENTRIES } from "@/lib/about-data";

/* =========================================================
   EXPERIENCE TIMELINE
   § 4 — Professional career timeline
   ========================================================= */

export function ExperienceTimeline() {
  return (
    <SectionWrapper
      id="experience"
      background="alt"
      ariaLabelledBy="experience-heading"
    >
      <Container>
        {/* Section header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-4 mb-12">
            <SectionLabel>Experience</SectionLabel>
            <SectionHeading id="experience-heading">
              Professional Journey
            </SectionHeading>
            <SectionDescription>
              From data engineering pipelines to RAG systems and enterprise AI — a
              timeline of roles, responsibilities, and growth.
            </SectionDescription>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line — hidden on mobile */}
          <div
            className="hidden lg:block absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-[#E5E5E5] via-[#D4D4D4] to-[#E5E5E5] timeline-line"
            aria-hidden="true"
          />

          {/* Entries */}
          <ol className="flex flex-col gap-6" aria-label="Professional experience timeline">
            {EXPERIENCE_ENTRIES.map((entry, i) => (
              <li key={entry.id} className="relative flex gap-0 lg:gap-8">
                {/* Timeline dot — desktop only */}
                <div
                  className="hidden lg:flex shrink-0 w-12 items-start justify-center pt-6"
                  aria-hidden="true"
                >
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-[#F97316] shadow-sm z-10" />
                </div>

                {/* Entry card */}
                <ScrollReveal
                  delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4 | 5)}
                  className="flex-1 min-w-0"
                >
                  <ExperienceEntryCard entry={entry} />
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </SectionWrapper>
  );
}
