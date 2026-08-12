import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";

/* =========================================================
   ServiceHero
   Hero banner for the /services page.
   ========================================================= */

export function ServiceHero() {
  return (
    <SectionWrapper
      id="services-hero"
      background="white"
      aria-label="Services hero section"
      className="!pt-6 md:!pt-8 lg:!pt-10 pb-12 md:pb-16 lg:pb-20"
    >
      <Container>
        <div className="flex flex-col gap-6 max-w-[760px]">
          {/* Eyebrow */}
          <SectionLabel>Services</SectionLabel>

          {/* H1 — one per page */}
          <h1 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0A0A0A] tracking-tight leading-[1.08]">
            Building Intelligent{" "}
            <span className="text-[#F97316]">Digital Products</span> for
            Modern Businesses.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#737373] leading-relaxed max-w-[580px]">
            I partner with startups and enterprises to design, develop, and ship
            high-performance software — from AI-powered platforms to scalable
            web applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button as="a" href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button
              as="a"
              href="#service-explorer"
              variant="secondary"
              size="lg"
            >
              Explore Services ↓
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
