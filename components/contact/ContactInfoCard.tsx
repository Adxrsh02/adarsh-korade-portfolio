import { cn } from "@/lib/utils";
import { Mail, Phone, ExternalLink } from "lucide-react";
import type { ContactInfoItem } from "@/types/contact";

/* =========================================================
   ContactInfoCard
   A single contact channel card with icon, label, value.
   Entirely server-rendered — no interactivity beyond the link.
   ========================================================= */

// Inline GitHub SVG icon
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// Inline LinkedIn SVG icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Inline Pinterest SVG icon
function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

function ContactIcon({
  icon,
  className,
}: {
  icon: ContactInfoItem["icon"];
  className?: string;
}) {
  switch (icon) {
    case "mail":
      return <Mail className={className} aria-hidden="true" />;
    case "phone":
      return <Phone className={className} aria-hidden="true" />;
    case "github":
      return <GitHubIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "pinterest":
      return <PinterestIcon className={className} />;
  }
}

interface ContactInfoCardProps {
  item: ContactInfoItem;
}

export function ContactInfoCard({ item }: ContactInfoCardProps) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={`${item.label}: ${item.displayValue}${item.external ? " (opens in new tab)" : ""}`}
      className={cn(
        "group flex items-center gap-4",
        "rounded-xl border border-[#E5E5E5] bg-white",
        "px-4 py-3.5",
        "transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#D4D4D4]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
      )}
    >
      {/* Icon container */}
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          "w-10 h-10 rounded-lg",
          "bg-[#FFF7ED] text-[#EA580C]",
          "transition-colors duration-150",
          "group-hover:bg-[#FFEDD5]"
        )}
        aria-hidden="true"
      >
        <ContactIcon icon={item.icon} className="w-[18px] h-[18px]" />
      </span>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-wider text-[#A3A3A3] leading-none mb-1">
          {item.label}
        </p>
        <p className="text-sm font-medium text-[#171717] truncate leading-snug">
          {item.displayValue}
        </p>
      </div>

      {/* External indicator */}
      {item.external && (
        <ExternalLink
          className="w-3.5 h-3.5 shrink-0 text-[#A3A3A3] group-hover:text-[#EA580C] transition-colors duration-150"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
