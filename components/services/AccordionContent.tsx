"use client";

import { Badge } from "@/components/ui/Badge";

/* =========================================================
   AccordionOverview
   Service overview content renderer.
   ========================================================= */

interface AccordionOverviewProps {
  summary: string;
  details: string[];
}

export function AccordionOverview({ summary, details }: AccordionOverviewProps) {
  return (
    <div className="flex flex-col gap-3 pb-2">
      <p className="text-[#404040] leading-relaxed font-medium">{summary}</p>
      {details.map((paragraph, i) => (
        <p key={i} className="text-[#737373] text-sm leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/* =========================================================
   AccordionTechnologies
   Technology badge grid renderer.
   ========================================================= */

interface AccordionTechnologiesProps {
  technologies: string[];
}

export function AccordionTechnologies({ technologies }: AccordionTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 pb-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline" size="md">
          {tech}
        </Badge>
      ))}
    </div>
  );
}

/* =========================================================
   AccordionWorkflow
   Mini timeline renderer.
   ========================================================= */

interface WorkflowStep {
  step: number;
  label: string;
  description: string;
}

interface AccordionWorkflowProps {
  steps: WorkflowStep[];
}

export function AccordionWorkflow({ steps }: AccordionWorkflowProps) {
  return (
    <div className="flex flex-col gap-4 pb-2">
      {steps.map((step, i) => (
        <div key={step.step} className="flex items-start gap-4">
          {/* Step indicator + vertical line */}
          <div className="flex flex-col items-center shrink-0">
            <div
              className={[
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold",
                i === 0
                  ? "bg-[#F97316] text-white"
                  : "bg-[#F5F5F5] text-[#737373] border border-[#E5E5E5]",
              ].join(" ")}
            >
              {String(step.step).padStart(2, "0")}
            </div>
            {i < steps.length - 1 && (
              <div className="w-px h-6 bg-[#E5E5E5] mt-1" aria-hidden="true" />
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-0.5 pb-1">
            <p className="font-semibold text-sm text-[#0A0A0A]">{step.label}</p>
            <p className="text-sm text-[#737373] leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   AccordionDeliverables
   Checklist renderer.
   ========================================================= */

interface AccordionDeliverablesProps {
  deliverables: string[];
}

export function AccordionDeliverables({ deliverables }: AccordionDeliverablesProps) {
  return (
    <ul className="flex flex-col gap-2.5 pb-2" role="list">
      {deliverables.map((item) => (
        <li key={item} className="flex items-start gap-3">
          {/* Check icon */}
          <span
            className="w-5 h-5 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              className="text-[#F97316]"
            >
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm text-[#404040] leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* =========================================================
   AccordionCaseStudies
   Case study cards renderer.
   ========================================================= */

interface CaseStudy {
  title: string;
  industry: string;
  technologies: string[];
  href: string;
  comingSoon?: boolean;
}

interface AccordionCaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function AccordionCaseStudies({ caseStudies }: AccordionCaseStudiesProps) {
  return (
    <div className="flex flex-col gap-3 pb-2">
      {caseStudies.map((study) => (
        <div
          key={study.title}
          className="flex items-start justify-between p-4 bg-[#FAFAFA] rounded-lg border border-[#E5E5E5] gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-semibold text-sm text-[#0A0A0A]">{study.title}</p>
              {study.comingSoon && (
                <Badge variant="accent" size="sm">
                  Coming Soon
                </Badge>
              )}
            </div>
            <p className="text-xs text-[#737373]">{study.industry}</p>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {study.technologies.map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {!study.comingSoon && (
            <a
              href={study.href}
              className="text-sm font-medium text-[#F97316] hover:underline underline-offset-2 shrink-0 mt-0.5"
            >
              View →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   AccordionCTA
   Get started CTA block.
   ========================================================= */

export function AccordionCTA() {
  return (
    <div className="flex flex-col gap-4 pb-2">
      <p className="text-sm text-[#737373] leading-relaxed">
        Ready to discuss your project? Let&apos;s schedule a free 30-minute
        discovery call to explore how I can help.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-[#F97316] text-white text-sm font-medium rounded-md hover:bg-[#EA580C] hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
        >
          Book a Discovery Call
        </a>
        <a
          href="/contact?type=proposal"
          className="inline-flex items-center justify-center px-5 py-2.5 bg-transparent border border-[#D4D4D4] text-[#171717] text-sm font-medium rounded-md hover:bg-[#F5F5F5] hover:border-[#A3A3A3] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
        >
          Request a Proposal
        </a>
      </div>
    </div>
  );
}
