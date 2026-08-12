import { cn } from "@/lib/utils";

/**
 * ExternalLinkIcon
 * ─────────────────
 * Minimal ↗ arrow icon indicating an external link.
 * Rendered as inline SVG for zero bundle impact.
 */
function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className="inline-block w-3 h-3 ml-1 opacity-50 align-middle"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H5.5M9.5 2.5V6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface FooterExternalLinkProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

/**
 * FooterExternalLink
 * ──────────────────
 * Reusable external link component for the footer.
 * Opens in a new tab with proper rel attributes.
 * Appends a small ↗ icon to signal external navigation.
 * Includes proper aria-label for screen readers.
 *
 * Usage:
 *   <FooterExternalLink href="https://github.com/adarshkorade" ariaLabel="GitHub (opens in new tab)">
 *     GitHub
 *   </FooterExternalLink>
 */
export function FooterExternalLink({
  href,
  children,
  ariaLabel,
  className,
}: FooterExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "footer-link",
        "inline-flex items-center gap-0",
        "text-sm text-[#737373]",
        "hover:text-[#0A0A0A]",
        "transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 rounded-sm",
        className
      )}
    >
      {children}
      <ExternalLinkIcon />
    </a>
  );
}
