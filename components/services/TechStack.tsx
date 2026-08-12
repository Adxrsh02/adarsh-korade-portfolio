import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { TechCategoryGroup } from "@/components/services/TechCategory";
import { TECH_CATEGORIES } from "@/lib/services-data";

/* =========================================================
   TechStack
   Categorized technology badges section.
   ========================================================= */

export function TechStack() {
  return (
    <SectionWrapper
      id="technologies"
      background="alt"
      ariaLabelledBy="tech-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <SectionLabel>Tech Arsenal</SectionLabel>
          <SectionHeading id="tech-heading">
            Technologies I Work With
          </SectionHeading>
          <SectionDescription>
            A curated set of modern technologies chosen for reliability,
            performance, and long-term maintainability.
          </SectionDescription>
        </div>

        {/* 3-col grid desktop, 2-col tablet, 1-col mobile */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_CATEGORIES.map((category) => (
            <TechCategoryGroup key={category.name} category={category} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
