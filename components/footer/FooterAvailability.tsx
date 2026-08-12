import { FOOTER_AVAILABILITY } from "@/lib/constants";

/**
 * FooterAvailability
 * ──────────────────
 * Layer 3 — Availability & current focus strip.
 *
 * Displays:
 *   Left:  Green pulsing dot + availability statuses
 *   Right: "Currently building" label + focus area tags
 *
 * Layout:
 *   Mobile:  Stacked, center-aligned
 *   Desktop: Horizontal, space-between
 *
 * The availability dot uses the `.availability-dot` CSS class
 * defined in globals.css for the pulse animation.
 * Animation is disabled for users who prefer reduced motion.
 *
 * Rendered as a Server Component — no client JS required.
 */
export function FooterAvailability() {
  return (
    <section
      aria-label="Availability and current focus"
      className="border-t border-b border-[#E5E5E5] bg-[#FAFAFA]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="py-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">

          {/* Left — Availability statuses */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            {FOOTER_AVAILABILITY.statuses.map((status) => (
              <div key={status} className="flex items-center gap-2">
                {/* Pulsing green dot */}
                <span
                  className="availability-dot"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-[#525252]">
                  {status}
                </span>
              </div>
            ))}
          </div>

          {/* Right — Current focus tags */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-[#A3A3A3]">
              Currently building
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {FOOTER_AVAILABILITY.currentFocus.map((area) => (
                <span
                  key={area}
                  className={[
                    "inline-flex items-center",
                    "px-3 py-1",
                    "rounded-full",
                    "border border-[#E5E5E5]",
                    "text-xs font-medium text-[#737373]",
                    "bg-white",
                    "transition-colors duration-150",
                    "hover:border-[#D4D4D4] hover:text-[#404040]",
                  ].join(" ")}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
