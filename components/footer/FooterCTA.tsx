import Link from "next/link";
import { ArrowRight, Mail, Download, Sparkles } from "lucide-react";
import { RESUME_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/* =========================================================
   FooterCTA — Unified Single Premium CTA Section
   Replaces duplicate CTA blocks with ONE cohesive, memorable
   closing experience before the main site footer grid.
   ========================================================= */

export function FooterCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="unified-cta-heading"
      className="relative overflow-hidden bg-white py-16 md:py-24 border-t border-[#E5E5E5]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* ── Main Unified Card Container ── */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-[#E5E5E5] bg-[#FAFAFA] p-8 sm:p-12 md:p-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          {/* Background Decorative Tech Vector & Orbit Grid */}
          <div
            className="absolute -inset-10 pointer-events-none opacity-30 select-none"
            aria-hidden="true"
          >
            <svg viewBox="0 0 800 500" fill="none" className="w-full h-full">
              <ellipse
                cx="400"
                cy="250"
                rx="350"
                ry="180"
                stroke="#D4D4D4"
                strokeWidth="1"
                strokeDasharray="6 6"
              />
              <ellipse
                cx="400"
                cy="250"
                rx="250"
                ry="120"
                stroke="#E5E5E5"
                strokeWidth="0.8"
                transform="rotate(-15 400 250)"
              />
              <circle cx="400" cy="250" r="8" fill="#F97316" opacity="0.4" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* ── Eyebrow Label ── */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E5] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            {/* ── Main Heading ── */}
            <h2
              id="unified-cta-heading"
              className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-[1.15]"
            >
              Let&apos;s Build Something{" "}
              <span className="text-[#F97316]">Amazing Together.</span>
            </h2>

            {/* ── Supporting Description ── */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#525252] max-w-2xl">
              Whether you&apos;re building an AI-powered product, a scalable web application,
              or an enterprise data platform — I&apos;d love to help bring your ideas to life
              with modern technology and thoughtful engineering.
            </p>

            {/* ── Action Buttons Row ── */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              {/* Primary CTA */}
              <Button
                as={Link}
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-7 shadow-sm hover:shadow-md"
              >
                <Mail size={16} className="shrink-0" aria-hidden="true" />
                <span>Let&apos;s Connect</span>
                <ArrowRight size={15} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              {/* Secondary CTA */}
              <Button
                as={Link}
                href="/projects"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto px-6 bg-white"
              >
                <span>View My Work</span>
                <ArrowRight size={15} className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              {/* Third Action: Download Resume */}
              <Button
                as="a"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto px-5 text-[#404040] hover:text-[#0A0A0A]"
              >
                <Download size={15} className="shrink-0" aria-hidden="true" />
                <span>Download Resume</span>
              </Button>
            </div>

            {/* ── Bottom Subtle Metadata Strip ── */}
            <div className="mt-10 pt-6 border-t border-[#E5E5E5]/70 w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
              <span className="font-mono font-semibold uppercase tracking-wider text-[#A3A3A3] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#F97316]" />
                AI / DATA / SOFTWARE
              </span>
              <span>Based in Navi Mumbai, India · Available for collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
