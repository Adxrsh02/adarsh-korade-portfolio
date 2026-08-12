import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { FOOTER_NAV_COLUMNS, FOOTER_CONNECT_LINKS, FOOTER_BRAND } from "@/lib/constants";
import { FooterExternalLink } from "@/components/footer/FooterExternalLink";

/**
 * FooterNavColumns
 * ────────────────
 * Renders columns 2–4 of the main footer grid:
 * Navigation, Services, Resources.
 *
 * Internal links use Next.js <Link>.
 * External links (marked external: true) use <FooterExternalLink>
 * which adds a ↗ icon and opens in a new tab.
 *
 * Each column heading is uppercase with wide tracking —
 * consistent with the premium editorial style.
 */
export function FooterNavColumns() {
  return (
    <>
      {FOOTER_NAV_COLUMNS.map((column) => (
        <div key={column.heading} className="flex flex-col gap-4">
          {/* Column heading */}
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]">
            {column.heading}
          </h3>

          {/* Links */}
          <ul role="list" className="flex flex-col gap-3">
            {column.links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                {link.external ? (
                  <FooterExternalLink
                    href={link.href}
                    ariaLabel={`${link.label} (opens in new tab)`}
                  >
                    {link.label}
                  </FooterExternalLink>
                ) : (
                  <Link
                    href={link.href}
                    className={[
                      "footer-link",
                      "text-sm text-[#737373]",
                      "hover:text-[#0A0A0A]",
                      "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 rounded-sm",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

/**
 * FooterConnectColumn
 * ───────────────────
 * Column 5 — "Let's Connect".
 *
 * Differs from the standard nav columns in that it:
 *   - Shows contact-specific links (email, LinkedIn, GitHub)
 *   - Includes a location indicator with a map pin icon
 *   - Shows response time expectation
 *   - Has a thin horizontal divider between links and metadata
 *
 * The response time is a trust signal — it answers the
 * implicit question "will I get a reply if I reach out?"
 */
export function FooterConnectColumn() {
  return (
    <div className="flex flex-col gap-4">
      {/* Column heading */}
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]">
        Let&apos;s Connect
      </h3>

      {/* Contact links */}
      <ul role="list" className="flex flex-col gap-3">
        {FOOTER_CONNECT_LINKS.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <FooterExternalLink
                href={link.href}
                ariaLabel={link.ariaLabel}
              >
                {link.label}
              </FooterExternalLink>
            ) : (
              <a
                href={link.href}
                aria-label={link.ariaLabel}
                className={[
                  "footer-link",
                  "text-sm text-[#737373]",
                  "hover:text-[#0A0A0A]",
                  "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 rounded-sm",
                ].join(" ")}
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Thin divider */}
      <div className="h-px w-8 bg-[#E5E5E5]" aria-hidden="true" />

      {/* Location */}
      <div className="flex items-start gap-1.5">
        <MapPin
          size={13}
          className="text-[#A3A3A3] mt-0.5 shrink-0"
          aria-hidden="true"
          strokeWidth={1.75}
        />
        <span className="text-xs text-[#A3A3A3] leading-relaxed">
          {FOOTER_BRAND.location}
        </span>
      </div>

      {/* Response time */}
      <div className="flex items-start gap-1.5">
        <Clock
          size={13}
          className="text-[#A3A3A3] mt-0.5 shrink-0"
          aria-hidden="true"
          strokeWidth={1.75}
        />
        <span className="text-xs text-[#A3A3A3] leading-relaxed italic">
          {FOOTER_BRAND.responseTime}
        </span>
      </div>
    </div>
  );
}

/**
 * FooterNav
 * ─────────
 * Combined export for backward compatibility.
 * Renders all four navigation columns (2–5).
 * Used internally by FooterGrid.
 */
export function FooterNav() {
  return (
    <>
      <FooterNavColumns />
      <FooterConnectColumn />
    </>
  );
}
