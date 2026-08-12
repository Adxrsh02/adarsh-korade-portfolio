import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-data";

/* =========================================================
   IDEAS TO REALITY — §3
   Asymmetric 2-column photo pair: Creatives + Event Stage.
   Communicates the creative → execution pipeline.
   ========================================================= */

const PHOTOS = [
  {
    src: LEADERSHIP_IMAGES.creativesTheme,
    alt: "E-Cell creative design work — bringing event ideas to life through visuals",
    caption: "Ideas into visuals.",
    aspect: "aspect-[4/3]",
  },
  {
    src: LEADERSHIP_IMAGES.eventStageSetup,
    alt: "E-Cell event stage setup — turning vision into real experience",
    caption: "Building the experience.",
    aspect: "aspect-[3/2]",
  },
] as const;

export function IdeasToReality() {
  return (
    <SectionWrapper
      id="ideas-to-reality"
      ariaLabelledBy="ideas-heading"
      background="white"
    >
      <Container>
        {/* Section header */}
        <div className="mb-10 md:mb-12">
          <ScrollReveal delay={0}>
            <SectionLabel>Building Events</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <SectionHeading id="ideas-heading" className="mt-2 mb-3">
              From Ideas to Reality
            </SectionHeading>
          </ScrollReveal>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-end mb-10 md:mb-14">
          {PHOTOS.map((photo, idx) => (
            <ScrollReveal key={photo.src} delay={(idx % 2) as 0 | 1}>
              <figure className="group">
                <div className={`leadership-img-hover rounded-xl shadow-sm border border-[#F0F0F0] ${photo.aspect} relative overflow-hidden`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] flex-shrink-0" />
                  <span className="text-sm text-[#737373] italic">{photo.caption}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Supporting text */}
        <ScrollReveal delay={2}>
          <SectionDescription className="border-l-2 border-[#EA580C] pl-5 py-1 not-italic">
            Every event started long before the audience arrived — with ideas,
            discussions, planning, creatives and a team working behind the
            scenes. An event may look simple to someone attending it, but behind
            those few hours are weeks of preparation and countless small
            decisions.
          </SectionDescription>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
