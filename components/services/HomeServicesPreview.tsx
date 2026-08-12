import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/lib/services-data";

/* =========================================================
   HomeServicesPreview
   Editorial 3-service showcase preview section on the Home Page.

   Services Displayed (strictly 3):
     1. Full Stack Web Development
     2. Mobile App Development
     3. AI & Machine Learning Solutions
   ========================================================= */

const HOME_FEATURED_IDS = [
  "full-stack-web-development",
  "mobile-app-development",
  "ai-machine-learning-solutions",
] as const;

export function HomeServicesPreview() {
  // Select strictly the 3 featured services from the single source of truth
  const featuredServices = HOME_FEATURED_IDS.map((id) =>
    SERVICES_DATA.find((s) => s.id === id)
  ).filter(Boolean);

  return (
    <SectionWrapper
      id="services"
      background="white"
      ariaLabelledBy="services-preview-heading"
    >
      <Container>
        {/* ── Section Header ── */}
        <div className="flex flex-col gap-4 mb-12 max-w-[720px]">
          <SectionLabel>What I Do</SectionLabel>
          <SectionHeading id="services-preview-heading">
            Services &amp; Expertise
          </SectionHeading>
          <p className="text-lg leading-relaxed text-[#737373]">
            I help businesses and startups build intelligent AI applications,
            enterprise software, scalable web platforms, and automation solutions
            using cutting-edge technologies. My work combines innovation,
            performance, and user-centric design to create impactful digital
            experiences.
          </p>
        </div>

        {/* ── 3-Service Editorial Showcase Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredServices.map((service, index) => {
            if (!service) return null;
            const displayIndex = String(index + 1).padStart(2, "0");

            return (
              <Link
                key={service.id}
                href={`/services?service=${service.id}#service-explorer`}
                className="group relative flex flex-col bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#D4D4D4] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label={`Explore ${service.title} service details on the Services page`}
              >
                {/* Large Visual / Image Area */}
                <div className="relative w-full aspect-[16/10] bg-[#171717] overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6 sm:p-7 gap-4">
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                      {displayIndex}
                    </span>
                    <span className="text-xs font-medium text-[#737373] bg-[#F5F5F5] border border-[#E5E5E5] px-2.5 py-0.5 rounded-full">
                      Core Service
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-xl lg:text-2xl text-[#0A0A0A] tracking-tight leading-snug group-hover:text-[#F97316] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Supporting Description */}
                  <p className="text-sm text-[#737373] leading-relaxed flex-1 line-clamp-3">
                    {service.tagline}
                  </p>

                  {/* Action Link */}
                  <div className="pt-3 flex items-center justify-between border-t border-[#F5F5F5] mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] group-hover:text-[#EA580C] transition-colors duration-200">
                      Explore Service
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Final CTA ── */}
        <div className="mt-12 flex justify-center">
          <Button
            as={Link}
            href="/services"
            variant="secondary"
            size="lg"
            className="group"
          >
            <span>Explore All Services</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
