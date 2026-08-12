import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES, LEADERSHIP_LINKS } from "@/lib/leadership-data";

/* =========================================================
   TEAM MEMORY — §8
   Emotional full-width team photo + heartfelt "Note to My Team".
   The human core of the entire page.
   ========================================================= */

export function TeamMemory() {
  return (
    <SectionWrapper
      id="team-memory"
      ariaLabelledBy="team-memory-heading"
      background="alt"
    >
      {/* Full-width team photo */}
      <Container variant="wide">
        <ScrollReveal>
          <figure className="mb-10 md:mb-14">
            <div className="leadership-img-hover relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9]">
              <Image
                src={LEADERSHIP_IMAGES.teamFinal}
                alt="The E-Cell SIES GST team — the people who made the leadership journey special"
                fill
                sizes="(max-width: 768px) 100vw, 95vw"
                className="object-cover object-center"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </figure>
        </ScrollReveal>
      </Container>

      {/* Caption + Note */}
      <Container variant="narrow">
        <ScrollReveal delay={0}>
          <div className="text-center mb-10 md:mb-12">
            <h2
              id="team-memory-heading"
              className="font-heading text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-3 tracking-tight"
            >
              The People Behind It All
            </h2>
            <p className="text-[#737373] text-lg italic">
              The people who made the journey special.
            </p>
          </div>
        </ScrollReveal>

        {/* Pull-quote text */}
        <ScrollReveal delay={1}>
          <p className="text-[#525252] leading-relaxed text-base md:text-[17px] mb-5">
            Every event, every challenge and every achievement was a team effort.
            I may have carried the Chairperson title, but this journey was built
            by all of us.
          </p>
        </ScrollReveal>

        {/* Note to Team */}
        <ScrollReveal delay={2}>
          <blockquote className="border-l-2 border-[#EA580C] pl-5 py-2 mb-5">
            <p className="font-heading text-lg md:text-xl text-[#0A0A0A] font-light leading-relaxed italic mb-4">
              "To everyone I worked with during these years — thank you."
            </p>
            <p className="text-[#737373] text-base md:text-[17px] leading-relaxed mb-4">
              Thank you for trusting me, challenging me, supporting me,
              disagreeing with me, laughing with me, and most importantly,
              building things with me.
            </p>
            <p className="text-[#737373] text-base md:text-[17px] leading-relaxed mb-4">
              There were moments when we didn't agree, but that's part of working
              together. What matters to me now is that we shared something
              meaningful.
            </p>
            <p className="text-[#525252] font-medium text-base md:text-[17px] leading-relaxed">
              Every person I met through E-Cell became a small part of my college
              story. I may have been the Chairperson at the end, but this journey
              was never mine alone.{" "}
              <span aria-label="heart">❤️</span>
            </p>
          </blockquote>
        </ScrollReveal>

        {/* E-Cell link */}
        <ScrollReveal delay={3}>
          <div className="flex items-center gap-3 mt-6">
            <div className="h-px flex-1 bg-[#E5E5E5]" />
            <a
              href={LEADERSHIP_LINKS.ecellLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit E-Cell SIES GST on LinkedIn (opens in new tab)"
              className="text-sm font-medium text-[#737373] hover:text-[#EA580C] transition-colors duration-200 whitespace-nowrap"
            >
              E-Cell SIES GST ↗
            </a>
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
