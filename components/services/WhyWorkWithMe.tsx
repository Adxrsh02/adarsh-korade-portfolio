import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ValueCard } from "@/components/services/ValueCard";
import { VALUE_PROPOSITIONS } from "@/lib/services-data";

/* =========================================================
   WhyWorkWithMe
   6-card value propositions section.
   ========================================================= */

export function WhyWorkWithMe() {
  return (
    <SectionWrapper
      id="why-work-with-me"
      background="white"
      ariaLabelledBy="why-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <SectionLabel>The Difference</SectionLabel>
          <SectionHeading id="why-heading">Why Work With Me</SectionHeading>
          <SectionDescription>
            What separates great engineering from merely good code — and why it
            matters for your project.
          </SectionDescription>
        </div>

        {/* 3-col grid desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPOSITIONS.map((value) => (
            <ValueCard key={value.number} value={value} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
