import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { CertificationCard } from "@/components/about/CertificationCard";
import { CERTIFICATION_ENTRIES } from "@/lib/about-data";

/* =========================================================
   CERTIFICATION SECTION
   § 6 — Certifications & Licenses gallery
   ========================================================= */

export function CertificationSection() {
  return (
    <SectionWrapper
      id="certifications"
      background="alt"
      ariaLabelledBy="cert-heading"
    >
      <Container>
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-4 mb-10">
            <SectionLabel>Certifications</SectionLabel>
            <SectionHeading id="cert-heading">
              Licenses &amp; Credentials
            </SectionHeading>
            <SectionDescription>
              Professional certifications in cloud infrastructure, data science,
              business intelligence, and software engineering.
            </SectionDescription>
          </div>
        </ScrollReveal>

        {/* 2×2 grid */}
        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          aria-label="Certifications and licenses"
          role="list"
        >
          {CERTIFICATION_ENTRIES.map((entry, i) => (
            <ScrollReveal
              key={entry.id}
              delay={(Math.min(i, 4) as 0 | 1 | 2 | 3 | 4 | 5)}
            >
              <li className="h-full">
                <CertificationCard entry={entry} />
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </SectionWrapper>
  );
}
