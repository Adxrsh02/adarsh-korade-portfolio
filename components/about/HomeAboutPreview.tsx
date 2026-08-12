import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Badge } from "@/components/ui/Badge";

/* =========================================================
   CORE FOCUS AREAS (Requested by User)
   ========================================================= */

const FOCUS_AREAS = [
  "AI/ML",
  "Data Engineering",
  "Generative AI",
  "Leadership",
];

/* =========================================================
   HomeAboutPreview
   Premium, editorial "Who I Am" preview for the landing page.
   Updated with exact user-provided professional text & high-end typography hierarchy.
   ========================================================= */

export function HomeAboutPreview() {
  return (
    <SectionWrapper
      id="about"
      background="white"
      ariaLabelledBy="about-preview-heading"
      className="py-16 md:py-24 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* ─────────────────────────────────────────────────
              LEFT COLUMN: Editorial Text & Typography (7 cols)
          ───────────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Eyebrow & Primary Tagline */}
            <div className="flex flex-col gap-3">
              <SectionLabel>WHO I AM</SectionLabel>

              <h2
                id="about-preview-heading"
                className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0A0A0A] leading-[1.25]"
              >
                Building with Data. Exploring AI.{" "}
                <span className="text-[#F97316]">Growing through Experience.</span>
              </h2>
            </div>

            {/* User Provided Narrative Paragraphs */}
            <div className="flex flex-col gap-4 text-base text-[#404040] leading-relaxed">
              <p className="font-medium text-[#171717]">
                I’m Adarsh, an AI/ML &amp; Data Engineer from Navi Mumbai who enjoys turning ideas into things that actually work.
              </p>

              <p>
                My journey took me from learning as a student to working on real-world data and AI systems at Jio Platforms, where I spent a year learning, building, solving problems, and working with a team.
              </p>

              <p>
                I enjoy the space where data meets intelligence — exploring Data Engineering, RAG, LLMs, NL2SQL and Generative AI.
              </p>

              <p>
                Beyond technology, my journey as Chairperson of E-Cell SIES GST taught me about leadership, people and responsibility.
              </p>
            </div>

            {/* High-Impact Closing Motto Banner */}
            <div className="border-l-2 border-[#F97316] pl-4 py-1 bg-[#FFF7ED]/50 rounded-r-lg">
              <p className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-sm md:text-base font-semibold text-[#0A0A0A] italic tracking-wide">
                “Still learning. Still building. Still growing.”
              </p>
            </div>

            {/* Core Domain Tags / Focus Strip */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider">
                Core Focus
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {FOCUS_AREAS.map((area, i) => (
                  <div key={area} className="flex items-center gap-2">
                    <Badge variant="outline" size="sm" className="bg-[#FAFAFA] text-[#0A0A0A] font-medium border-[#E5E5E5]">
                      {area}
                    </Badge>
                    {i < FOCUS_AREAS.length - 1 && (
                      <span className="text-[#D4D4D4] text-xs" aria-hidden="true">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F97316] text-white font-medium text-sm shadow-sm hover:bg-[#EA580C] hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label="Read complete personal story on the About page"
              >
                <span>Read My Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────
              RIGHT COLUMN: Designed Visual Centerpiece (5 cols)
          ───────────────────────────────────────────────── */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Decorative Tech Vector Graphic */}
            <div className="absolute -inset-4 md:-inset-6 pointer-events-none opacity-40 select-none" aria-hidden="true">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                {/* Subtle orbital dashed lines */}
                <circle cx="200" cy="200" r="180" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="200" cy="200" r="130" stroke="#D4D4D4" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <ellipse cx="200" cy="200" rx="190" ry="80" stroke="#E5E5E5" strokeWidth="0.8" transform="rotate(-25 200 200)" />
              </svg>
            </div>

            {/* Main Image Frame Container */}
            <div className="group relative w-full max-w-[400px] aspect-[4/5] rounded-2xl md:rounded-3xl border border-[#E5E5E5] bg-[#FAFAFA] p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[#D4D4D4] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500">
              {/* Inner Image Container */}
              <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden bg-[#F5F5F5]">
                <Image
                  src="/images/about/My_journey_section.jpg"
                  alt="Adarsh Korade — AI/ML & Data Engineer"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  priority
                />

                {/* Subtle gradient vignette at bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Floating Bottom Card Label inside Image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0A0A0A] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                      Adarsh Korade
                    </span>
                    <span className="text-[11px] text-[#737373] truncate">
                      AI/ML Engineer &amp; Data Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
