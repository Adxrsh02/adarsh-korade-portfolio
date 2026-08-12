"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* =========================================================
   ServiceAccordionItem
   Single accordion item using grid-template-rows animation.
   Single-open management is handled by parent ServiceAccordion.
   ========================================================= */

interface ServiceAccordionItemProps {
  id: string;
  triggerId: string;
  panelId: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function ServiceAccordionItem({
  triggerId,
  panelId,
  title,
  isOpen,
  onToggle,
  children,
}: ServiceAccordionItemProps) {
  return (
    <div className="border-b border-[#F0F0F0] last:border-0">
      {/* ── Trigger ── */}
      <h4>
        <button
          id={triggerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={cn(
            "group w-full flex items-center justify-between gap-4 py-4 text-left",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 rounded-sm",
            isOpen
              ? "text-[#0A0A0A] font-semibold"
              : "text-[#404040] font-medium hover:text-[#0A0A0A]"
          )}
        >
          <span className="text-sm leading-snug">{title}</span>
          <ChevronRight
            size={16}
            className={cn(
              "shrink-0 text-[#A3A3A3] transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
              isOpen && "rotate-90 text-[#F97316]"
            )}
            aria-hidden="true"
          />
        </button>
      </h4>

      {/* ── Content — grid-template-rows height animation ── */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="accordion-grid transition-[grid-template-rows] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        {/* Inner wrapper must have min-h-0 to allow collapse */}
        <div className="overflow-hidden">
          <div
            className={cn(
              "pb-4 transition-opacity duration-300 ease-out",
              isOpen ? "opacity-100 delay-100" : "opacity-0"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ServiceAccordion
   Controlled single-open accordion with 6 items.
   Resets to first item (Overview) when service changes.
   ========================================================= */

import type { ServiceData } from "@/types";
import {
  AccordionOverview,
  AccordionTechnologies,
  AccordionWorkflow,
  AccordionDeliverables,
  AccordionCaseStudies,
  AccordionCTA,
} from "@/components/services/AccordionContent";

interface ServiceAccordionProps {
  service: ServiceData;
  /** Keyboard nav — refs for focus management */
  onKeyNav?: (direction: "up" | "down" | "home" | "end", currentIndex: number) => void;
}

const ACCORDION_ITEMS = [
  { key: "overview", label: "Overview" },
  { key: "technologies", label: "Technologies Used" },
  { key: "workflow", label: "Development Workflow" },
  { key: "deliverables", label: "Deliverables" },
  { key: "caseStudies", label: "Related Case Studies" },
  { key: "cta", label: "Get Started" },
] as const;

type AccordionKey = (typeof ACCORDION_ITEMS)[number]["key"];

export function ServiceAccordion({ service }: ServiceAccordionProps) {
  const [openKey, setOpenKey] = useState<AccordionKey | null>("overview");
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggle = useCallback((key: AccordionKey) => {
    setOpenKey((prev) => (prev === key ? null : key));
  }, []);

  // Keyboard navigation between triggers
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const count = ACCORDION_ITEMS.length;
      let next = index;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        next = (index + 1) % count;
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        next = (index - 1 + count) % count;
      } else if (e.key === "Home") {
        e.preventDefault();
        next = 0;
      } else if (e.key === "End") {
        e.preventDefault();
        next = count - 1;
      } else {
        return;
      }

      triggerRefs.current[next]?.focus();
    },
    []
  );

  const serviceId = service.id;

  return (
    <div aria-label={`${service.title} service details`}>
      {ACCORDION_ITEMS.map(({ key, label }, index) => {
        const triggerId = `trigger-${serviceId}-${key}`;
        const panelId = `panel-${serviceId}-${key}`;
        const isOpen = openKey === key;

        return (
          <ServiceAccordionItem
            key={key}
            id={key}
            triggerId={triggerId}
            panelId={panelId}
            title={label}
            isOpen={isOpen}
            onToggle={() => toggle(key)}
          >
            {/* Render the appropriate content based on key */}
            {key === "overview" && (
              <AccordionOverview
                summary={service.overview.summary}
                details={service.overview.details}
              />
            )}
            {key === "technologies" && (
              <AccordionTechnologies technologies={service.technologies} />
            )}
            {key === "workflow" && (
              <AccordionWorkflow steps={service.workflow} />
            )}
            {key === "deliverables" && (
              <AccordionDeliverables deliverables={service.deliverables} />
            )}
            {key === "caseStudies" && (
              <AccordionCaseStudies caseStudies={service.caseStudies} />
            )}
            {key === "cta" && <AccordionCTA />}
          </ServiceAccordionItem>
        );
      })}
    </div>
  );
}
