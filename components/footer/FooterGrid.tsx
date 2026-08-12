import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterNavColumns, FooterConnectColumn } from "@/components/footer/FooterNav";

/**
 * FooterGrid
 * ──────────
 * Layer 2 — Main footer 5-column grid.
 *
 * Grid layout:
 *   Mobile (<640px):   Single column, all stacked
 *   Tablet (640–1023): Brand full-width, then 2×2 nav grid
 *   Desktop (1024px+): 5-column grid [1.3fr 1fr 1fr 1fr 1fr]
 *
 * Column order:
 *   1. Brand (logo, title, description, location, socials)
 *   2. Navigation (all pages)
 *   3. Services (service categories)
 *   4. Resources (resume, case studies, open source, etc.)
 *   5. Let's Connect (email, LinkedIn, GitHub + metadata)
 *
 * Rendered as a Server Component — no client JS required.
 */
export function FooterGrid() {
  return (
    <div className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div
            className={[
              "grid grid-cols-1 gap-10",
              "sm:grid-cols-2",
              "lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] lg:gap-8 xl:gap-12",
            ].join(" ")}
          >
            {/* Column 1 — Brand (spans full width on tablet) */}
            <div className="sm:col-span-2 lg:col-span-1">
              <FooterBrand />
            </div>

            {/* Columns 2–4 — Navigation, Services, Resources */}
            <FooterNavColumns />

            {/* Column 5 — Let's Connect */}
            <FooterConnectColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
