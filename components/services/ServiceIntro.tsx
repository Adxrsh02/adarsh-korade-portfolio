import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card } from "@/components/ui/Card";

/* =========================================================
   ServiceIntro
   Philosophy + stat cards section.
   ========================================================= */

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "11", label: "Services Offered" },
  { value: "25+", label: "Technologies Mastered" },
] as const;

export function ServiceIntro() {
  return (
    <SectionWrapper
      id="services-intro"
      background="alt"
      ariaLabelledBy="services-intro-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-10">
          <SectionLabel>My Approach</SectionLabel>
          <SectionHeading id="services-intro-heading">
            How I Approach Every Project
          </SectionHeading>
          <p className="text-lg leading-relaxed text-[#737373] max-w-[680px]">
            I build software the way I&apos;d want it built for my own business
            — with clarity of purpose, attention to long-term maintainability,
            and a genuine focus on the business outcome rather than just the
            technical deliverable. Every engagement starts with understanding
            the problem deeply before writing a single line of code.
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-[680px]">
          {STATS.map(({ value, label }) => (
            <Card key={label} variant="default" padding="md" className="text-center">
              <p className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-2xl sm:text-3xl text-[#F97316] tracking-tight leading-none mb-1">
                {value}
              </p>
              <p className="text-xs sm:text-sm text-[#737373] leading-snug">
                {label}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
