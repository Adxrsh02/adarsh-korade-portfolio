import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_IMAGES } from "@/lib/leadership-data";

/* =========================================================
   LAMP LIGHTING — §4
   Editorial photo moment with balanced desktop container size,
   robust ScrollReveal animation, and subtle hover scale.
   ========================================================= */

export function LampLighting() {
  return (
    <SectionWrapper
      id="lamp-lighting"
      ariaLabelledBy="lamp-heading"
      background="alt"
      className="py-12 md:py-16"
    >
      {/* Moderately-sized container (~1140px max width) for elegant page breathing room */}
      <Container className="max-w-[1140px]">
        <ScrollReveal>
          <figure className="flex flex-col gap-6">
            {/* Editorial photo container */}
            <div className="group relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#E5E5E5] bg-[#FAFAFA] aspect-[16/9]">
              <Image
                src={LEADERSHIP_IMAGES.lampLighting}
                alt="Traditional lamp lighting ceremony at E-Cell SIES GST event — a special beginning"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1140px"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority={false}
              />
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Caption block — unchanged text & styling */}
            <figcaption className="text-center max-w-[480px] mx-auto">
              <p className="font-heading text-xl md:text-2xl font-medium text-[#0A0A0A] mb-2 tracking-tight">
                <span aria-hidden="true">🪔 </span>
                <span id="lamp-heading">A Special Beginning</span>
              </p>
              <p className="text-[#737373] text-base leading-relaxed">
                Starting the event with the traditional lamp lighting ceremony.
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </Container>
    </SectionWrapper>
  );
}
