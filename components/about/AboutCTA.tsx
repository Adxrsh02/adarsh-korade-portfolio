import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { Button } from "@/components/ui/Button";
import { RESUME_PATH } from "@/lib/constants";

/* =========================================================
   ABOUT CTA
   § 10 — Closing call-to-action
   ========================================================= */

export function AboutCTA() {
  return (
    <SectionWrapper
      id="about-contact"
      background="accent"
      ariaLabelledBy="about-cta-heading"
      className="py-20 md:py-28"
    >
      <Container variant="narrow">
        <div className="flex flex-col items-center text-center gap-6">
          <SectionLabel>Let&apos;s Connect</SectionLabel>
          <SectionHeading id="about-cta-heading">
            Ready to Build Something Together?
          </SectionHeading>
          <SectionDescription className="text-center mx-auto">
            Whether you have a project in mind, a collaboration idea, or just
            want to say hello — I&apos;d love to hear from you.
          </SectionDescription>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
            <Button as={Link} href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
            <Button
              as="a"
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              Download Resume
            </Button>
            <Button as={Link} href="/projects" variant="ghost" size="lg">
              View My Work
            </Button>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
