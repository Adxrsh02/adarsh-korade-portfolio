"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChallengeSolution } from "@/types";

/* =========================================================
   ChallengesSection
   Expandable accordion listing engineering challenges
   and their corresponding solutions.
   ========================================================= */

interface ChallengesSectionProps {
  challenges: ChallengeSolution[];
}

export function ChallengesSection({ challenges }: ChallengesSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  if (!challenges || challenges.length === 0) return null;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col divide-y divide-[#E5E5E5] border border-[#E5E5E5] rounded-xl overflow-hidden"
      role="list"
    >
      {challenges.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `challenge-heading-${index}`;
        const panelId = `challenge-panel-${index}`;

        return (
          <div key={index} role="listitem">
            {/* Header button */}
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className={cn(
                "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-[#EA580C]",
                isOpen
                  ? "bg-[#FFF7ED]"
                  : "bg-white hover:bg-[#FAFAFA]"
              )}
            >
              <div className="flex items-start gap-3 min-w-0">
                {/* Challenge number */}
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-[#F97316] text-white text-xs font-bold flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="font-semibold text-sm text-[#0A0A0A] leading-snug pr-4">
                  {item.challenge}
                </span>
              </div>
              <span className="flex-shrink-0 text-[#737373]" aria-hidden="true">
                {isOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>

            {/* Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                isOpen ? "border-t border-[#FED7AA]" : ""
              )}
            >
              {isOpen && (
                <div className="px-6 py-5 bg-white">
                  <div className="flex flex-col gap-2 ml-9">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                      Solution
                    </p>
                    <p className="text-sm text-[#404040] leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
