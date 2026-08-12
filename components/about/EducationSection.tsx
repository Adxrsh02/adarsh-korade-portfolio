import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { EducationCard } from "@/components/about/EducationCard";
import { EDUCATION_ENTRIES } from "@/lib/about-data";

/* =========================================================
   EDUCATION SECTION
   § 5 — Academic journey
   ========================================================= */

export function EducationSection() {
  const [primary, ...secondary] = EDUCATION_ENTRIES;

  return (
    <SectionWrapper
      id="education"
      background="white"
      ariaLabelledBy="education-heading"
    >
      <Container>
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-4 mb-10">
            <SectionLabel>Education</SectionLabel>
            <SectionHeading id="education-heading">
              Academic Foundation
            </SectionHeading>
            <SectionDescription>
              A formal foundation in Artificial Intelligence and Machine Learning,
              building from strong fundamentals in science and mathematics.
            </SectionDescription>
          </div>
        </ScrollReveal>

        {/* Education cards */}
        <ol className="flex flex-col gap-4" aria-label="Academic history">
          {/* Primary — BE */}
          <ScrollReveal delay={1}>
            <li>
              <EducationCard entry={primary} isPrimary />
            </li>
          </ScrollReveal>

          {/* Secondary entries */}
          {secondary.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={(Math.min(i + 2, 4) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <li>
                <EducationCard entry={entry} />
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </SectionWrapper>
  );
}
