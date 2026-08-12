import { Logo } from "@/components/navigation/Logo";
import { FooterSocials } from "@/components/footer/FooterSocials";
import { FOOTER_BRAND } from "@/lib/constants";
import { MapPin } from "lucide-react";

/**
 * FooterBrand
 * ───────────
 * Footer brand column (Column 1 of the main 5-column grid).
 *
 * Displays:
 *   - Logo mark
 *   - Full name
 *   - Professional title
 *   - Short brand description
 *   - Social media icons (LinkedIn, GitHub, Email)
 *
 * This column is the widest (1.3fr vs 1fr for others) to give
 * the brand identity proper room to breathe.
 *
 * Rendered as a Server Component — no client JS required.
 */
export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      {/* Logo */}
      <Logo variant="footer" />

      {/* Professional title */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-medium text-[#A3A3A3] leading-relaxed max-w-[260px]">
          {FOOTER_BRAND.title}
        </p>
      </div>

      {/* Brand description */}
      <p className="text-sm leading-relaxed text-[#737373] max-w-[260px]">
        {FOOTER_BRAND.description}
      </p>

      {/* Location */}
      <div className="flex items-center gap-1.5">
        <MapPin
          size={13}
          className="text-[#A3A3A3] shrink-0"
          aria-hidden="true"
          strokeWidth={1.75}
        />
        <span className="text-xs text-[#A3A3A3]">
          {FOOTER_BRAND.location}
        </span>
      </div>

      {/* Social icons */}
      <FooterSocials size="md" />
    </div>
  );
}
