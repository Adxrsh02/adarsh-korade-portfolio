import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";

/* =========================================================
   ProjectsHero
   Hero section for the /projects listing page.
   Eyebrow → H1 → Description → Stats → CTAs
   ========================================================= */

const STATS = [
  { value: "10+", label: "Projects Built" },
  { value: "20+", label: "Technologies Used" },
  { value: "5", label: "Engineering Domains" },
  { value: "2+", label: "Years of Experience" },
];

export function ProjectsHero() {
  return (
    <SectionWrapper
      id="projects-hero"
      background="white"
      aria-label="Projects hero section"
      className="!pt-6 md:!pt-8 lg:!pt-10 pb-12 md:pb-16 lg:pb-20"
    >
      <Container>
        <div className="flex flex-col gap-8 max-w-[800px]">
          {/* Eyebrow */}
          <SectionLabel>My Work</SectionLabel>

          {/* H1 — single per page */}
          <h1 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0A0A0A] tracking-tight leading-[1.08]">
            Engineering Solutions That{" "}
            <span className="text-[#F97316]">Solve Real Problems.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#737373] leading-relaxed max-w-[600px]">
            A curated collection of AI, Data Engineering, and Full Stack
            projects — each presented as a complete engineering case study
            documenting the problem, architecture, and outcome.
          </p>

          {/* Stats Grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2"
            aria-label="Portfolio statistics"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="stat-enter bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-4 flex flex-col gap-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-2xl text-[#0A0A0A] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs text-[#737373] font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button as="a" href="#projects-filter" variant="primary" size="lg">
              Explore Projects ↓
            </Button>
            <Button as="a" href="/contact" variant="secondary" size="lg">
              Let&apos;s Work Together
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
