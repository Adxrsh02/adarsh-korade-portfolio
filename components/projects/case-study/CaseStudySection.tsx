import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* =========================================================
   CaseStudySection
   Generic reusable section container for case study content.
   Provides consistent typography, spacing, and narrow container.
   ========================================================= */

interface CaseStudySectionProps {
  id?: string;
  heading: string;
  headingLevel?: "h2" | "h3";
  children: ReactNode;
  background?: "white" | "alt";
  className?: string;
}

export function CaseStudySection({
  id,
  heading,
  headingLevel: Tag = "h2",
  children,
  background = "white",
  className,
}: CaseStudySectionProps) {
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "py-16 md:py-20",
        background === "white" ? "bg-white" : "bg-[#FAFAFA]",
        className
      )}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
        <div className="flex flex-col gap-6">
          {/* Section heading */}
          <Tag
            id={headingId}
            className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
          >
            {heading}
          </Tag>

          {/* Divider */}
          <div className="h-px w-12 bg-[#F97316] rounded-full" aria-hidden="true" />

          {/* Content */}
          <div className="text-base text-[#404040] leading-relaxed space-y-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
