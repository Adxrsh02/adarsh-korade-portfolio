import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_COPY } from "@/lib/contact-data";

/* =========================================================
   ContactCTA
   Final conversion section — warm orange-tint background.
   Background image used as a subtle overlaid decorative
   element with very low opacity.
   ========================================================= */

export function ContactCTA() {
  return (
    <SectionWrapper
      id="contact-cta"
      background="accent"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden"
    >
      {/* Decorative background image — very subtle, low opacity */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/contact/background_image.jpg"
          alt=""
          fill
          quality={40}
          sizes="100vw"
          className="object-cover object-center opacity-[0.04] grayscale"
          loading="lazy"
        />
        {/* Gradient overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7ED]/80 via-[#FFF7ED]/95 to-[#FFF7ED]" />
      </div>

      <Container variant="narrow" className="relative z-10">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Icon decoration */}
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-[#FFEDD5] shadow-[0_4px_12px_rgba(249,115,22,0.12)]"
            aria-hidden="true"
          >
            <svg
              className="w-7 h-7 text-[#F97316]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2
              id="cta-heading"
              className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-[1.1]"
            >
              {CONTACT_COPY.cta.heading}
            </h2>
            <p className="text-lg text-[#737373] leading-relaxed max-w-[520px] mx-auto">
              {CONTACT_COPY.cta.description}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button as="a" href={CONTACT_COPY.cta.primaryHref} variant="primary" size="lg">
              {CONTACT_COPY.cta.primaryLabel}
            </Button>
            <Button
              as="a"
              href={CONTACT_COPY.cta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              {CONTACT_COPY.cta.secondaryLabel} ↗
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-[#A3A3A3]">
            No spam. No sales pitch. Just a real conversation.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
