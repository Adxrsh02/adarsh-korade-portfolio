import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ServiceGridCard } from "@/components/services/ServiceGridCard";
import { SERVICES_DATA } from "@/lib/services-data";

/* =========================================================
   ServiceGrid
   Full 11-card services overview grid section.
   ========================================================= */

export function ServiceGrid() {
  return (
    <SectionWrapper
      id="services-overview"
      background="white"
      ariaLabelledBy="services-grid-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12">
          <SectionLabel>What I Do</SectionLabel>
          <SectionHeading id="services-grid-heading">
            Services Overview
          </SectionHeading>
          <SectionDescription>
            From full-stack engineering to AI solutions — a comprehensive range
            of technical services designed to solve real business challenges.
          </SectionDescription>
        </div>

        {/* Grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="list"
        >
          {SERVICES_DATA.map((service) => (
            <div key={service.id} role="listitem">
              <ServiceGridCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
