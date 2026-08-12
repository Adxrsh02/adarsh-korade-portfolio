import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_EVENTS, LEADERSHIP_LINKS } from "@/lib/leadership-data";

/* =========================================================
   BIZENCE SHOWCASE — §7
   Dedicated flagship event section featuring BIZENCE 2026
   plus all E-Cell event cards with LinkedIn links.
   ========================================================= */

// External link icon SVG
function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// LinkedIn icon SVG
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function BizenceShowcase() {
  return (
    <SectionWrapper
      id="bizence-showcase"
      ariaLabelledBy="bizence-heading"
      background="white"
    >
      <Container>
        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <ScrollReveal delay={0}>
            <SectionLabel>Flagship Event</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <SectionHeading id="bizence-heading" className="mt-2 mb-1">
              BIZENCE 2026
            </SectionHeading>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-heading text-lg md:text-xl text-[#EA580C] font-medium italic mb-4">
              Where Decisions Defined Destiny
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <SectionDescription className="max-w-[680px]">
              One of the most challenging and memorable events of my Chairperson
              journey. What started as an idea eventually became a full-day
              startup simulation where students stepped into the shoes of CEOs,
              COOs, and CTOs and had to make decisions as if they were running a
              real startup.
            </SectionDescription>
          </ScrollReveal>
        </div>

        {/* Narrative paragraph */}
        <ScrollReveal delay={0}>
          <div className="bg-[#FAFAFA] rounded-xl p-6 md:p-8 border border-[#EBEBEB] mb-10 md:mb-14">
            <p className="text-[#525252] leading-relaxed text-base md:text-[17px] mb-4">
              As the Chairperson, I was involved in taking the event from the
              initial planning stage to the final execution. It wasn't just
              about planning an event and making sure everything happened on
              time. It meant bringing different teams together, discussing ideas,
              dividing responsibilities, following up, solving problems, and
              making decisions whenever something unexpected came up.
            </p>
            <p className="text-[#525252] leading-relaxed text-base md:text-[17px]">
              Just like the participants had to make decisions under pressure, we
              also had moments where plans changed, things didn't go as expected,
              and we had to quickly figure out what to do next. That's probably
              one of the biggest things I took away from Bizence — you can plan
              everything, but you also need to be ready for what you didn't plan
              for.
            </p>
          </div>
        </ScrollReveal>

        {/* Event cards */}
        <div className="mb-10 md:mb-14">
          <ScrollReveal delay={0}>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-[#A3A3A3] mb-6">
              Events I Was Part Of
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LEADERSHIP_EVENTS.map((event, idx) => (
              <ScrollReveal key={event.name} delay={(idx % 4) as 0 | 1 | 2 | 3}>
                <div className="group relative flex flex-col h-full bg-white border border-[#E5E5E5] rounded-xl p-5 transition-all duration-300 hover:border-[#EA580C]/30 hover:shadow-md hover:-translate-y-0.5">
                  {/* Event type badge */}
                  <span className="inline-flex text-[11px] font-semibold uppercase tracking-wider text-[#EA580C] bg-[#FFF7ED] px-2.5 py-1 rounded-full border border-[#FDBA74]/20 mb-4 self-start">
                    {event.type}
                  </span>

                  {/* Event name */}
                  <h4 className="font-heading font-bold text-[#0A0A0A] text-lg mb-2 leading-tight">
                    {event.name}
                  </h4>

                  {/* Tagline */}
                  <p className="text-[#737373] text-sm leading-relaxed flex-1">
                    {event.tagline}
                  </p>

                  {/* LinkedIn link */}
                  {event.linkedinUrl && (
                    <a
                      href={event.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${event.name} on LinkedIn (opens in new tab)`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#737373] hover:text-[#EA580C] transition-colors duration-200 group/link"
                    >
                      <LinkedInIcon />
                      <span>View on LinkedIn</span>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Acknowledgements */}
        <ScrollReveal delay={0}>
          <div className="border-t border-[#E5E5E5] pt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] mb-5">
              Acknowledgements · BIZENCE 2026
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              {[
                {
                  role: "Chief Guest",
                  name: "Mr. Pravin Bhalerao",
                },
                {
                  role: "Judge",
                  name: "Mr. Kedar Kalamkar",
                },
                {
                  role: "Judge",
                  name: "Mr. Rohan Parulekar",
                },
                {
                  role: "Judge",
                  name: "Mr. Anurag Nala",
                },
                {
                  role: "Educational Partner",
                  name: "Setu Startup School",
                },
                {
                  role: "Faculty In-Charge",
                  name: "Dr. Kalyani Pampattiwar",
                },
              ].map((ack) => (
                <div key={ack.name} className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-[#A3A3A3] mb-0.5">
                    {ack.role}
                  </span>
                  <span className="font-medium text-[#525252]">{ack.name}</span>
                </div>
              ))}
            </div>

            {/* Supported by */}
            <p className="mt-6 text-sm text-[#A3A3A3]">
              Supported by the{" "}
              <span className="font-medium text-[#737373]">
                Ministry of Education's Innovation Cell
              </span>{" "}
              and{" "}
              <span className="font-medium text-[#737373]">Cafe 131</span>{" "}
              (Food Partner).
            </p>

            {/* CTA */}
            <div className="mt-6">
              <a
                href={LEADERSHIP_LINKS.bizence2026Post}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the BIZENCE 2026 LinkedIn post (opens in new tab)"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A0A0A] text-white text-sm font-semibold rounded-lg hover:bg-[#EA580C] transition-colors duration-300"
              >
                <LinkedInIcon />
                <span>View BIZENCE 2026 Post</span>
                <ExternalIcon />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
