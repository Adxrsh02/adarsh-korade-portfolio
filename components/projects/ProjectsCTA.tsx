import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RESUME_PATH } from "@/lib/constants";

/* =========================================================
   ProjectsCTA
   Final conversion section at the bottom of the /projects page.
   Matches the accent background pattern from ServicesCTA.
   ========================================================= */

export function ProjectsCTA() {
  return (
    <SectionWrapper
      background="accent"
      aria-label="Call to action — work with Adarsh"
      className="py-24 md:py-32"
    >
      <Container variant="narrow">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-[1.08]">
              Let&apos;s Build Something{" "}
              <span className="text-[#F97316]">Amazing Together.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-[520px] mx-auto">
              Whether you&apos;re looking for an AI Engineer, Data Engineer, or
              Full Stack Developer — I&apos;d love to help turn your ideas into
              scalable, production-ready software.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button as="a" href="/contact" variant="primary" size="lg">
              Contact Me
            </Button>
            <Button
              as="a"
              href={RESUME_PATH}
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              download="Adarsh_Korade_CV.pdf"
            >
              Download Resume
            </Button>
          </div>

          {/* Availability indicator */}
          <p className="inline-flex items-center gap-2 text-sm text-[#737373]">
            <span
              className="availability-dot"
              aria-hidden="true"
            />
            Open for full-time &amp; freelance opportunities
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
