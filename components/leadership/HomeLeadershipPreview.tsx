import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-data";

/* =========================================================
   HOME LEADERSHIP PREVIEW
   Premium editorial preview of the E-Cell leadership journey.

   Layout (desktop):
     ┌─────────────────────────────────────────────────────┐
     │ Section Header + Desktop CTA                        │
     ├────────────────────────┬────────────────────────────┤
     │ Dominant card (7 cols) │ Supporting stack (5 cols)  │
     │ on-stage-panel photo   │ portrait + stats/quote     │
     └────────────────────────┴────────────────────────────┘

   All content sourced from leadership.md — no invented data.
   Uses existing ScrollReveal + about-reveal animation system.
   No new dependencies.
   ========================================================= */

/* ── Real stats sourced from leadership.md ── */
const LEADERSHIP_STATS = [
  { value: "3", label: "Years at E-Cell" },
  { value: "3", label: "Roles — Volunteer to Chair" },
  { value: "4+", label: "Events organised end-to-end" },
] as const;

const SIGNATURE_QUOTE =
  "I started as one person in the team. I left understanding how to build a team.";

export function HomeLeadershipPreview() {
  return (
    <SectionWrapper
      id="leadership"
      background="alt"
      ariaLabelledBy="leadership-heading"
    >
      <Container>

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-12">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <ScrollReveal delay={0}>
              <SectionLabel>Leadership &amp; Community</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <SectionHeading id="leadership-heading">
                Building Beyond Code
              </SectionHeading>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <SectionDescription>
                My contributions to communities, events, and the startup
                ecosystem as E-Cell Chairperson and beyond.
              </SectionDescription>
            </ScrollReveal>
          </div>

          {/* Desktop CTA — right-aligned header (hidden on mobile) */}
          <ScrollReveal delay={1}>
            <div className="hidden sm:block shrink-0">
              <Link
                href="/leadership"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#F97316] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
                aria-label="Explore the complete leadership journey"
              >
                Explore Leadership
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Editorial Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6">

          {/* ────────────────────────────────────────────────
              DOMINANT CARD — On Stage Panel Photo (7 cols)
              Cinematic portrait card with floating role badge.
          ──────────────────────────────────────────────── */}
          <ScrollReveal delay={0} className="lg:col-span-7">
            <Link
              href="/leadership"
              className="group relative block w-full rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
              aria-label="Explore my complete leadership journey at E-Cell SIES GST"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
                <Image
                  src={LEADERSHIP_IMAGES.onStagePanel}
                  alt="Adarsh Korade on stage representing E-Cell SIES GST — Chairperson, 2025–26"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 700px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  priority={false}
                />

                {/* Cinematic gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Floating role badge — bottom left */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    {/* Role pill */}
                    <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-[#EA580C] text-white text-[11px] font-bold uppercase tracking-wider">
                      Chairperson
                    </span>
                    {/* Org + year */}
                    <p className="font-heading text-white text-base md:text-lg font-semibold leading-tight">
                      E-Cell SIES GST
                    </p>
                    <p className="text-white/70 text-xs font-medium">
                      2023–2026 &nbsp;·&nbsp; 3 Roles &nbsp;·&nbsp; 4+ Events
                    </p>
                  </div>

                  {/* Animated arrow */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-[#EA580C] group-hover:border-[#EA580C]">
                    <ArrowRight className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* ────────────────────────────────────────────────
              SUPPORTING STACK — Portrait + Stats (5 cols)
          ──────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-5">

            {/* ── Portrait Card — Personal Hero Photo ── */}
            <ScrollReveal delay={1}>
              <Link
                href="/leadership"
                className="group relative block rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label="Read the full leadership story"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
                  <Image
                    src={LEADERSHIP_IMAGES.hero}
                    alt="Adarsh Korade — leading from the front as E-Cell Chairperson"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 420px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)",
                    }}
                    aria-hidden="true"
                  />

                  {/* Caption badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-white text-[11px] font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                      Volunteer → Outreach Lead → Chairperson
                    </span>
                    <span className="text-white/80 text-[11px] font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      3 yrs
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* ── Stats + Quote Card (text-only) ── */}
            <ScrollReveal delay={2}>
              <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#D4D4D4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300">

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-[#F5F5F5]">
                  {LEADERSHIP_STATS.map((stat) => (
                    <div key={stat.label} className="flex flex-col gap-0.5">
                      <span className="font-heading text-2xl md:text-3xl font-bold text-[#0A0A0A] leading-none tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-[#737373] leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Signature quote */}
                <blockquote>
                  <div className="flex gap-3 items-start">
                    <div className="w-0.5 h-full min-h-[36px] bg-[#EA580C] rounded-full flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="font-heading text-[13px] md:text-sm font-medium text-[#525252] leading-relaxed italic">
                      &ldquo;{SIGNATURE_QUOTE}&rdquo;
                    </p>
                  </div>
                  <div className="mt-3 ml-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" aria-hidden="true" />
                    <span className="text-[11px] text-[#A3A3A3] font-medium uppercase tracking-wider">
                      Adarsh Korade · E-Cell SIES GST
                    </span>
                  </div>
                </blockquote>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* ── Bottom CTA (mobile full-width + desktop secondary link) ── */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">

          {/* Mobile: full-width pill CTA */}
          <div className="sm:hidden w-full">
            <Link
              href="/leadership"
              className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#D4D4D4] hover:bg-[#FAFAFA] hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label="Explore the complete leadership journey"
            >
              <span className="text-sm font-semibold text-[#0A0A0A]">
                Explore Leadership Story
              </span>
              <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Desktop: compact text link + subtitle */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/leadership"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              aria-label="See the complete leadership story on the Leadership page"
            >
              See Full Leadership Story
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <span className="text-sm text-[#A3A3A3]">
              E-Cell SIES GST &nbsp;·&nbsp; 2023–2026
            </span>
          </div>
        </div>

      </Container>
    </SectionWrapper>
  );
}
