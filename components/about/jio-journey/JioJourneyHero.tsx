import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { JIO_JOURNEY_HERO_QUOTE, JIO_JOURNEY_SUBQUOTE } from "@/lib/about-data";

/* =========================================================
   JIO JOURNEY HERO
   Full-width editorial page header
   ========================================================= */

export function JioJourneyHero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-12 pb-10 md:pt-16 md:pb-14"
      aria-labelledby="jio-hero-heading"
    >
      <Container variant="narrow">
        <div className="flex flex-col gap-6">
          {/* Jio logo + label */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-lg border border-[#E5E5E5] overflow-hidden bg-white shrink-0">
              <Image
                src="/images/about/logos/Jio_logo.webp"
                alt="Jio Platforms Limited logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#F97316] uppercase tracking-widest">
                Special Chapter
              </p>
              <p className="text-sm text-[#737373]">Jio Platforms Limited · 2024 – 2026</p>
            </div>
          </div>

          {/* Heading */}
          <h1
            id="jio-hero-heading"
            className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-3xl font-bold tracking-tight text-[#0A0A0A] sm:text-4xl lg:text-5xl leading-tight"
          >
            {JIO_JOURNEY_HERO_QUOTE}
          </h1>

          {/* Sub-quote */}
          <p className="text-base text-[#737373] leading-relaxed max-w-xl">
            {JIO_JOURNEY_SUBQUOTE}
          </p>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 pt-2">
            <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
            <div className="w-2 h-2 rounded-full bg-[#F97316] opacity-60" aria-hidden="true" />
            <div className="h-px flex-1 bg-[#E5E5E5]" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
