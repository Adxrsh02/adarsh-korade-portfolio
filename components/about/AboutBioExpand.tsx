"use client";

import { useState } from "react";

interface AboutBioExpandProps {
  paragraphs: string[];
}

/**
 * AboutBioExpand
 * ──────────────
 * Shows the first bio paragraph always visible.
 * Remaining paragraphs revealed on "Read More" toggle.
 * Client component for the interactive expand/collapse.
 */
export function AboutBioExpand({ paragraphs }: AboutBioExpandProps) {
  const [expanded, setExpanded] = useState(false);

  const first = paragraphs[0];
  const rest = paragraphs.slice(1);

  return (
    <div className="flex flex-col gap-4">
      {/* Always visible */}
      <p className="text-base leading-relaxed text-[#404040] max-w-lg">
        {first}
      </p>

      {/* Expanded content */}
      {expanded && rest.length > 0 && (
        <div className="flex flex-col gap-3">
          {rest.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-[#404040] max-w-lg">
              {para}
            </p>
          ))}
        </div>
      )}

      {/* Toggle button */}
      {rest.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="self-start text-sm font-medium text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 rounded-sm"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less ↑" : "Read More ↓"}
        </button>
      )}
    </div>
  );
}
