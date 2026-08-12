import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";

/* =========================================================
   ServicesCTA
   Final conversion section at the bottom of /services.
   ========================================================= */

export function ServicesCTA() {
  return (
    <SectionWrapper
      id="services-cta"
      background="accent"
      ariaLabelledBy="services-cta-heading"
      className="py-20 md:py-28"
    >
      <Container variant="narrow">
        <div className="flex flex-col items-center text-center gap-6">
          <SectionLabel>Ready to Start?</SectionLabel>

          <h2
            id="services-cta-heading"
            className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-tight max-w-[600px]"
          >
            Let&apos;s Build Something Great Together
          </h2>

          <p className="text-lg text-[#737373] leading-relaxed max-w-[520px]">
            Whether you need a web application, AI solution, mobile app, or
            consulting — let&apos;s discuss how I can help bring your vision to
            life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button as="a" href="/contact" variant="primary" size="lg">
              Book a Discovery Call
            </Button>
            <Button as="a" href="/projects" variant="secondary" size="lg">
              View My Projects
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
