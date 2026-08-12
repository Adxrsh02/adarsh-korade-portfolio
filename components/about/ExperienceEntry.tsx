"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { ExperienceEntry } from "@/types/about";

interface ExperienceEntryProps {
  entry: ExperienceEntry;
}

/**
 * ExperienceEntry
 * ───────────────
 * Single timeline entry — company, role(s), responsibilities,
 * skills, and optional certificate link.
 *
 * Client component for expand/collapse of responsibilities.
 */
export function ExperienceEntryCard({ entry }: ExperienceEntryProps) {
  const [expanded, setExpanded] = useState(false);
  const hasMultipleResponsibilities =
    entry.responsibilities && entry.responsibilities.length > 3;
  const visibleResponsibilities = expanded
    ? entry.responsibilities
    : entry.responsibilities?.slice(0, 3);

  return (
    <article className="experience-entry relative flex gap-5 rounded-xl border border-[#E5E5E5] bg-white p-6 overflow-hidden hover:bg-[#FAFAFA] hover:border-[#D4D4D4] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-250">
      {/* Company logo */}
      <div className="shrink-0 mt-0.5">
        <a
          href={entry.companyLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${entry.company} on LinkedIn (opens in new tab)`}
          className="block rounded-lg border border-[#E5E5E5] overflow-hidden bg-white w-12 h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
        >
          <Image
            src={entry.logoSrc}
            alt={entry.logoAlt}
            width={48}
            height={48}
            className="w-full h-full object-contain p-1"
          />
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Primary role */}
        <div className="flex flex-col gap-0.5">
          <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-base font-semibold text-[#0A0A0A] leading-tight">
            {entry.primaryRole.title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a
              href={entry.companyLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#404040] hover:text-[#F97316] transition-colors duration-150"
            >
              {entry.company}
            </a>
            {entry.primaryRole.type && (
              <>
                <span className="text-[#D4D4D4] select-none">·</span>
                <span className="text-sm text-[#737373]">{entry.primaryRole.type}</span>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-0.5">
            <time className="text-xs text-[#737373]">
              {entry.primaryRole.startDate} – {entry.primaryRole.endDate} · {entry.primaryRole.duration}
            </time>
            <span className="text-[#D4D4D4] select-none">·</span>
            <span className="text-xs text-[#737373]">
              {entry.location} · {entry.locationType}
            </span>
          </div>
        </div>

        {/* Additional sub-roles (E-Cell) */}
        {entry.additionalRoles && entry.additionalRoles.length > 0 && (
          <div className="flex flex-col gap-1 border-l-2 border-[#E5E5E5] pl-3">
            {entry.additionalRoles.map((role, i) => (
              <div key={i} className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                <span className="text-sm font-medium text-[#404040]">{role.title}</span>
                <span className="text-[#D4D4D4] select-none">·</span>
                <time className="text-xs text-[#737373]">
                  {role.startDate} – {role.endDate} · {role.duration}
                </time>
              </div>
            ))}
          </div>
        )}

        {/* Full-time duration note */}
        {entry.additionalRoles && (
          <p className="text-xs text-[#A3A3A3]">
            Full-time · 2 yrs 10 mos
          </p>
        )}

        {/* Responsibilities */}
        {visibleResponsibilities && visibleResponsibilities.length > 0 && (
          <ul className="flex flex-col gap-2 mt-1" role="list">
            {visibleResponsibilities.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-[#525252]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4D4D4] shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Show more/less */}
        {hasMultipleResponsibilities && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="self-start text-xs font-medium text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-sm"
            aria-expanded={expanded}
          >
            {expanded
              ? "Show less ↑"
              : `Show ${(entry.responsibilities?.length ?? 0) - 3} more ↓`}
          </button>
        )}

        {/* Skills */}
        {entry.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {entry.skills.map((skill) => (
              <Badge key={skill} variant="outline" size="sm">
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {/* Certificate CTA */}
        {entry.certificatePath && entry.certificateLabel && (
          <div className="pt-1">
            <Button
              as="a"
              href={entry.certificatePath}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              aria-label={`View ${entry.certificateLabel} (opens in new tab)`}
            >
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              {entry.certificateLabel} ↗
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
