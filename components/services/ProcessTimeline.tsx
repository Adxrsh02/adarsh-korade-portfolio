import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ProcessStepCard, ProcessStepCardVertical } from "@/components/services/ProcessStep";
import { PROCESS_STEPS } from "@/lib/services-data";

/* =========================================================
   ProcessTimeline
   8-step development process section.
   Desktop: horizontal timeline with connector line.
   Mobile: vertical stacked list.
   ========================================================= */

export function ProcessTimeline() {
  return (
    <SectionWrapper
      id="development-process"
      background="white"
      ariaLabelledBy="process-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <SectionLabel>How I Work</SectionLabel>
          <SectionHeading id="process-heading">
            Development Process
          </SectionHeading>
          <SectionDescription>
            Every project follows a structured methodology to ensure quality,
            transparency, and predictable outcomes.
          </SectionDescription>
        </div>

        {/* ── Desktop / Tablet horizontal timeline ── */}
        <div
          className="hidden md:grid relative"
          style={{ gridTemplateColumns: "repeat(8, 1fr)" }}
          role="list"
          aria-label="Development process steps"
        >
          {/* Connector line */}
          <div
            className="absolute top-6 left-0 right-0 h-px bg-[#E5E5E5]"
            style={{ left: "3rem", right: "3rem" }}
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} role="listitem">
              <ProcessStepCard step={step} isFirst={i === 0} />
            </div>
          ))}
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div
          className="md:hidden relative flex flex-col gap-6"
          role="list"
          aria-label="Development process steps"
        >
          {/* Vertical line */}
          <div
            className="absolute left-5 top-5 bottom-5 w-px bg-[#E5E5E5]"
            aria-hidden="true"
          />

          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} role="listitem">
              <ProcessStepCardVertical step={step} isFirst={i === 0} />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
