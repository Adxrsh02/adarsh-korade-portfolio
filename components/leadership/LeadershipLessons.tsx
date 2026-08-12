import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { LEADERSHIP_LESSONS } from "@/lib/leadership-data";

/* =========================================================
   LEADERSHIP LESSONS — §9
   Clean, minimal numbered lesson list.
   Editorial typography with decorative large numbers.
   ========================================================= */

export function LeadershipLessons() {
  return (
    <SectionWrapper
      id="leadership-lessons"
      ariaLabelledBy="lessons-heading"
      background="white"
    >
      <Container variant="narrow">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <ScrollReveal delay={0}>
            <SectionLabel>Reflections</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <SectionHeading id="lessons-heading" className="mt-2">
              What E-Cell Taught Me
            </SectionHeading>
          </ScrollReveal>
        </div>

        {/* Lessons list */}
        <ol aria-label="Leadership lessons from E-Cell" className="flex flex-col">
          {LEADERSHIP_LESSONS.map((lesson, idx) => (
            <ScrollReveal key={lesson.number} delay={(idx % 5) as 0 | 1 | 2 | 3 | 4}>
              <li className="leadership-lesson-item relative flex gap-6 md:gap-8 items-start py-7 px-2 border-b border-[#E5E5E5] last:border-0 group">

                {/* Large decorative number */}
                <span
                  className="flex-shrink-0 font-heading font-bold text-5xl md:text-6xl leading-none text-[#F0F0F0] group-hover:text-[#FDE8D8] transition-colors duration-300 select-none mt-1 leadership-lesson-number"
                  aria-hidden="true"
                >
                  {lesson.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1 pt-1">
                  <h3 className="font-heading font-semibold text-xl md:text-2xl text-[#0A0A0A] leading-snug group-hover:text-[#EA580C] transition-colors duration-300">
                    {lesson.title}
                  </h3>
                  <p className="text-[#737373] text-base md:text-[17px] leading-relaxed">
                    {lesson.description}
                  </p>
                </div>

                {/* Decorative orange accent line that appears on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#EA580C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </SectionWrapper>
  );
}
