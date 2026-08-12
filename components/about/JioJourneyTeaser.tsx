import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { JIO_JOURNEY_HERO_QUOTE } from "@/lib/about-data";

/* =========================================================
   JIO JOURNEY TEASER
   § 9 — Bridge card to /about/jio-journey sub-page
   ========================================================= */

export function JioJourneyTeaser() {
  return (
    <SectionWrapper
      id="jio-journey-teaser"
      background="white"
      ariaLabelledBy="jio-teaser-heading"
    >
      <Container>
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-4 mb-8">
            <SectionLabel>Special Chapter</SectionLabel>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <Link
            href="/about/jio-journey"
            className="group block rounded-2xl border border-[#E5E5E5] overflow-hidden bg-[#FAFAFA] hover:bg-white hover:border-[#D4D4D4] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-350 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
            aria-label="Read the Jio 1-Year Journey story"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">
              {/* Left: Text content */}
              <div className="flex flex-col gap-5 p-7 lg:p-10 justify-center">
                {/* Jio logo */}
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-md overflow-hidden border border-[#E5E5E5] bg-white">
                    <Image
                      src="/images/about/logos/Jio_logo.webp"
                      alt="Jio Platforms Limited"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#A3A3A3] uppercase tracking-wider">
                    Jio Platforms Limited
                  </span>
                </div>

                {/* Quote */}
                <div>
                  <h2
                    id="jio-teaser-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-2xl font-bold text-[#0A0A0A] leading-snug lg:text-3xl group-hover:text-[#F97316] transition-colors duration-200"
                  >
                    {JIO_JOURNEY_HERO_QUOTE}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#737373] max-w-md">
                    My first corporate experience — a year of growth, mentorship, teamwork,
                    and memories I&apos;ll always carry. A very special chapter of my life.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#404040] group-hover:text-[#F97316] transition-colors duration-200 pointer-events-none">
                    Read the Full Story
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right: Team photo peek */}
              <div className="relative hidden lg:block h-64 lg:h-auto overflow-hidden">
                <Image
                  src="/images/about/jio/Jio_Team_Photo.jpg"
                  alt="Jio RAFM team — one year of memories"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="380px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(250,250,250,0.6) 0%, transparent 40%)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
