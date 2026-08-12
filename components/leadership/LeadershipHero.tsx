import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-data";

/* =========================================================
   LEADERSHIP HERO — §1
   Full-impact opening: personal photo + progression pills
   ========================================================= */

const ROLE_PILLS = [
  { label: "Volunteer", active: false },
  { label: "Outreach Lead", active: false },
  { label: "Chairperson", active: true },
] as const;

export function LeadershipHero() {
  return (
    <SectionWrapper
      id="leadership-hero"
      ariaLabelledBy="leadership-hero-heading"
      background="white"
      className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Text Column ── */}
          <div className="flex flex-col gap-6">
            <ScrollReveal delay={0}>
              <SectionLabel>Leadership</SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <SectionHeading
                id="leadership-hero-heading"
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight"
              >
                My Leadership
                <br />
                <span className="text-[#EA580C]">Journey</span>
              </SectionHeading>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-lg md:text-xl leading-relaxed text-[#737373] max-w-[520px]">
                From volunteering behind the scenes to leading the entire team.
                Three years of learning, building events, and growing together
                with E-Cell SIES GST.
              </p>
            </ScrollReveal>

            {/* Role progression pills */}
            <ScrollReveal delay={3}>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {ROLE_PILLS.map((pill, idx) => (
                  <div key={pill.label} className="flex items-center gap-2">
                    <span
                      className={`
                        inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium
                        ${pill.active
                          ? "bg-[#EA580C] text-white"
                          : "bg-[#F5F5F5] text-[#525252] border border-[#E5E5E5]"
                        }
                      `}
                    >
                      {pill.label}
                    </span>
                    {idx < ROLE_PILLS.length - 1 && (
                      <span className="text-[#A3A3A3] text-xs font-light select-none">→</span>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-px w-8 bg-[#EA580C]" />
                <span className="text-sm font-medium text-[#A3A3A3] tracking-widest uppercase">
                  E-Cell SIES GST · 2023–2026
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Image Column ── */}
          <ScrollReveal delay={1}>
            <figure className="relative">
              <div className="leadership-img-hover rounded-2xl shadow-lg">
                <div className="relative aspect-[4/5] w-full max-w-[480px] mx-auto lg:ml-auto rounded-2xl overflow-hidden">
                  <Image
                    src={LEADERSHIP_IMAGES.hero}
                    alt="Adarsh Korade — Chairperson, E-Cell SIES GST, leading from the front"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
                    className="object-cover object-top"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
              <figcaption className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                <span className="text-sm text-[#737373] italic">
                  Leading from the front.
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

        </div>
      </Container>
    </SectionWrapper>
  );
}
