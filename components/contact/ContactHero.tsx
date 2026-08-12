import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { CONTACT_INFO, CONTACT_COPY } from "@/lib/contact-data";

/* =========================================================
   ContactHero
   Two-column editorial layout: personal photo (left) +
   headline + subheading + quick-contact pills (right).
   Background: white.
   ========================================================= */

export function ContactHero() {
  return (
    <SectionWrapper
      id="contact-hero"
      background="white"
      aria-label="Contact page hero"
      className="py-20 md:py-28 lg:py-32 xl:py-40"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 lg:gap-12 items-center md:max-w-none">

          {/* ── LEFT — Personal Photo ──────────────────────────── */}
          <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
            {/* Orange accent bar — left side decorative element */}
            <span
              className="absolute -left-4 top-8 w-1 h-16 bg-[#F97316] rounded-full hidden md:block"
              aria-hidden="true"
            />

            {/* Photo wrapper — capped at ~75% of original desktop size */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              {/* Subtle decorative gradient behind photo */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5]"
                aria-hidden="true"
              />

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/contact/personal_photo.jpeg"
                  alt="Adarsh Korade — smiling confidently with arms crossed"
                  width={480}
                  height={640}
                  priority
                  quality={90}
                  sizes="(max-width: 768px) 360px, (max-width: 1280px) 40vw, 480px"
                  className="w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02]"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>

              {/* Floating name badge */}
              <div
                className="absolute bottom-4 left-4 right-4 sm:-bottom-5 sm:-right-5 sm:left-auto sm:right-auto sm:w-auto"
                aria-hidden="true"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-[#E5E5E5] shadow-lg rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0A0A0A] leading-none">Adarsh Korade</p>
                    <p className="text-xs text-[#737373] mt-0.5">Available for work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Text Content ───────────────────────────── */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            {/* Eyebrow */}
            <SectionLabel>{CONTACT_COPY.hero.eyebrow}</SectionLabel>

            {/* H1 — one per contact page */}
            <h1 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight leading-[1.08]">
              {CONTACT_COPY.hero.heading}{" "}
              <span className="text-[#F97316]">
                {CONTACT_COPY.hero.headingAccent}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-[#737373] leading-relaxed max-w-[520px]">
              {CONTACT_COPY.hero.subheading}
            </p>

            {/* Quick-contact pills */}
            <div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              aria-label="Quick contact options"
            >
              {/* Email pill */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2.5 text-sm font-medium text-[#404040] transition-all duration-150 hover:border-[#FB923C] hover:bg-[#FFF7ED] hover:text-[#EA580C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label={`Send email to ${CONTACT_INFO.email}`}
              >
                <svg className="w-4 h-4 shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="truncate">{CONTACT_INFO.email}</span>
              </a>

              {/* Phone pill */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-2.5 text-sm font-medium text-[#404040] transition-all duration-150 hover:border-[#FB923C] hover:bg-[#FFF7ED] hover:text-[#EA580C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label={`Call ${CONTACT_INFO.phone}`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Scroll CTA */}
            <a
              href="#contact-form"
              className="mt-2 self-start inline-flex items-center gap-2 text-sm font-medium text-[#EA580C] hover:text-[#C2410C] transition-colors duration-150 group"
              aria-label="Scroll to contact form"
            >
              Fill out the form below
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
