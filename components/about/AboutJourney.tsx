import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { MY_JOURNEY_PARAGRAPHS } from "@/lib/about-data";

/* =========================================================
   ABOUT JOURNEY
   § 3 — Personal narrative (content preserved exactly)
   ========================================================= */

export function AboutJourney() {
  const pullQuote = MY_JOURNEY_PARAGRAPHS[0];
  const remainingParagraphs = MY_JOURNEY_PARAGRAPHS.slice(1);

  return (
    <SectionWrapper
      id="my-journey"
      background="white"
      ariaLabelledBy="journey-heading"
    >
      <Container variant="narrow">
        <div className="flex flex-col gap-8">
          {/* Section label + heading */}
          <ScrollReveal delay={0}>
            <div className="flex flex-col gap-3">
              <SectionLabel>My Journey</SectionLabel>
              <SectionHeading id="journey-heading">The Story So Far</SectionHeading>
            </div>
          </ScrollReveal>

          {/* Pull quote — first paragraph highlighted */}
          <ScrollReveal delay={1}>
            <blockquote className="journey-pullquote">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
          </ScrollReveal>

          {/* Remaining paragraphs */}
          <div className="flex flex-col gap-5">
            {remainingParagraphs.map((para, i) => (
              <ScrollReveal key={i} delay={(Math.min(i + 2, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <p className="text-base leading-[1.85] text-[#404040] whitespace-pre-line">
                  {para}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
