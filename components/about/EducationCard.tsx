import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { EducationEntry } from "@/types/about";

interface EducationCardProps {
  entry: EducationEntry;
  /** First entry gets a larger prominent card */
  isPrimary?: boolean;
}

/**
 * EducationCard
 * ─────────────
 * Renders a single education entry.
 * Primary (BE degree) gets a more prominent layout with logo.
 * Secondary entries (HSC, SSC) are compact.
 */
export function EducationCard({ entry, isPrimary = false }: EducationCardProps) {
  if (isPrimary) {
    return (
      <article className="flex gap-5 rounded-xl border border-[#E5E5E5] bg-white p-6 hover:bg-[#FAFAFA] hover:border-[#D4D4D4] hover:shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-250">
        {/* Logo */}
        {entry.logoSrc && (
          <div className="shrink-0">
            {entry.institutionLinkedIn ? (
              <a
                href={entry.institutionLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${entry.institution} on LinkedIn (opens in new tab)`}
                className="block rounded-lg border border-[#E5E5E5] overflow-hidden bg-white w-12 h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              >
                <Image
                  src={entry.logoSrc}
                  alt={entry.logoAlt ?? `${entry.institution} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </a>
            ) : (
              <div className="rounded-lg border border-[#E5E5E5] overflow-hidden bg-white w-12 h-12">
                <Image
                  src={entry.logoSrc}
                  alt={entry.logoAlt ?? `${entry.institution} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div>
            <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-base font-semibold text-[#0A0A0A] leading-tight">
              {entry.degree}
              {entry.field && (
                <span className="font-normal text-[#525252]"> — {entry.field}</span>
              )}
            </h3>
            {entry.institutionLinkedIn ? (
              <a
                href={entry.institutionLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#404040] hover:text-[#F97316] transition-colors duration-150"
              >
                {entry.institution}
              </a>
            ) : (
              <p className="text-sm font-medium text-[#404040]">{entry.institution}</p>
            )}
            {entry.university && (
              <p className="text-xs text-[#737373]">University of Mumbai</p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <time className="text-xs text-[#737373]">
              {entry.startDate} – {entry.endDate}
            </time>
          </div>

          {entry.activities && (
            <p className="text-sm text-[#525252] leading-relaxed">
              <span className="font-medium text-[#404040]">Activities & Societies: </span>
              {entry.activities}
            </p>
          )}

          {entry.skills && entry.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {entry.skills.map((skill) => (
                <Badge key={skill} variant="outline" size="sm">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  // Compact secondary card
  return (
    <article className="flex gap-4 rounded-xl border border-[#E5E5E5] bg-white px-5 py-4 hover:bg-[#FAFAFA] hover:border-[#D4D4D4] transition-all duration-250">
      {/* Orange accent dot */}
      <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#F97316] opacity-60" aria-hidden="true" />

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-sm font-semibold text-[#0A0A0A] leading-tight">
          {entry.degree}
          {entry.field && (
            <span className="font-normal text-[#525252]"> · {entry.field}</span>
          )}
        </h3>
        <p className="text-sm font-medium text-[#404040]">{entry.institution}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
          {(entry.startDate || entry.endDate) && (
            <time className="text-xs text-[#737373]">
              {entry.startDate ? `${entry.startDate} – ` : ""}{entry.endDate}
            </time>
          )}
          {entry.grade && (
            <>
              <span className="text-[#D4D4D4] select-none">·</span>
              <span className="text-xs text-[#737373]">Grade: {entry.grade}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
