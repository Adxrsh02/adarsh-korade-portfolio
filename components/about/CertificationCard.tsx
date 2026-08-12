"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { CertificateLightbox } from "@/components/about/CertificateLightbox";
import type { CertificationEntry } from "@/types/about";

interface CertificationCardProps {
  entry: CertificationEntry;
}

/**
 * CertificationCard
 * ─────────────────
 * Displays a single certification with:
 * - Name, issuer, date, credential ID
 * - Skill badges
 * - "View Certificate ↗" CTA:
 *     - image certs → lightbox
 *     - PDF / Credly → new tab link
 */
export function CertificationCard({ entry }: CertificationCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasImageCert = !!entry.imageSrc;
  const hasPdfCert = !!entry.pdfPath;
  const hasCredentialUrl = !!entry.credentialUrl;

  const viewHref = hasCredentialUrl
    ? entry.credentialUrl
    : hasPdfCert
      ? entry.pdfPath
      : undefined;

  function handleViewClick(e: React.MouseEvent) {
    if (hasImageCert && !hasCredentialUrl) {
      e.preventDefault();
      setLightboxOpen(true);
    }
  }

  return (
    <>
      <article className="cert-card-hover flex flex-col gap-4 rounded-xl border border-[#E5E5E5] bg-white p-6 h-full">
        {/* Header */}
        <div className="flex flex-col gap-1.5 flex-1">
          {/* Certification name */}
          <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-sm font-semibold text-[#0A0A0A] leading-snug">
            {entry.name}
          </h3>

          {/* Issuer */}
          <p className="text-sm font-medium text-[#404040]">{entry.issuer}</p>

          {/* Date */}
          <time className="text-xs text-[#737373]">Issued {entry.issuedDate}</time>

          {/* Credential ID */}
          {entry.credentialId && (
            <p className="text-xs text-[#A3A3A3] font-mono mt-0.5">
              ID: {entry.credentialId}
            </p>
          )}
        </div>

        {/* Skills */}
        {entry.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.skills.map((skill) => (
              <Badge key={skill} variant="outline" size="sm">
                {skill}
              </Badge>
            ))}
          </div>
        )}

        {/* View CTA */}
        {(viewHref || hasImageCert) && (
          <div className="pt-1 border-t border-[#F5F5F5]">
            <a
              href={viewHref ?? "#"}
              target={viewHref ? "_blank" : undefined}
              rel={viewHref ? "noopener noreferrer" : undefined}
              onClick={handleViewClick}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 rounded-sm"
              aria-label={`View ${entry.name} certificate (opens in new tab)`}
            >
              View Certificate
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        )}
      </article>

      {/* Lightbox for image certs */}
      {lightboxOpen && entry.imageSrc && entry.imageAlt && (
        <CertificateLightbox
          imageSrc={entry.imageSrc}
          imageAlt={entry.imageAlt}
          certName={entry.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
