import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ABOUT_IDENTITY, ABOUT_BIO_PARAGRAPHS } from "@/lib/about-data";
import { RESUME_PATH } from "@/lib/constants";
import { AboutBioExpand } from "@/components/about/AboutBioExpand";

/* =========================================================
   ABOUT HERO
   § 1 — Introduction: Name, identity, bio, CTAs, skills
   ========================================================= */

export function AboutHero() {
  return (
    <SectionWrapper
      id="about-intro"
      background="white"
      ariaLabelledBy="about-hero-heading"
      className="!pt-6 md:!pt-8 lg:!pt-10 pb-12 md:pb-16 lg:pb-20"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 lg:items-start">
          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <SectionLabel>About Me</SectionLabel>

            {/* Name + pronouns */}
            <div className="flex flex-col gap-1">
              <h1
                id="about-hero-heading"
                className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-4xl font-bold tracking-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl leading-none"
              >
                {ABOUT_IDENTITY.name}
              </h1>
              <span className="text-sm font-medium text-[#737373]">
                {ABOUT_IDENTITY.pronouns}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-[#F97316] shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="text-sm text-[#737373]">{ABOUT_IDENTITY.location}</span>
            </div>

            {/* Headline */}
            <p className="text-sm font-medium text-[#404040] leading-relaxed border-l-2 border-[#F97316] pl-3 max-w-lg">
              {ABOUT_IDENTITY.headline}
            </p>

            {/* Bio — first paragraph always visible, rest expandable */}
            <AboutBioExpand paragraphs={ABOUT_BIO_PARAGRAPHS} />

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                as={Link}
                href="/contact"
                variant="primary"
                size="lg"
              >
                Contact Me
              </Button>
              <Button
                as="a"
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                View My Resume
              </Button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ABOUT_IDENTITY.skills.map((skill) => (
                <Badge key={skill} variant="outline" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* ── Right: Journey image ── */}
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-2xl bg-[#F5F5F5] aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/about/My_journey_section.jpg"
                alt="Adarsh Korade — professional portrait"
                fill
                className="object-cover animate-hero-photo"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Decorative accent dot */}
            <div
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full opacity-10 pointer-events-none"
              style={{ background: "var(--color-accent)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
