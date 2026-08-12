/**
 * FooterBottom
 * ────────────
 * Layer 4 — Bottom bar of the multi-layer footer.
 *
 * Displays copyright notice, designed & developed attribution,
 * and the technology stack used to build this portfolio.
 *
 * Layout:
 *   Desktop:  Left (copyright) | Right (built with)
 *   Mobile:   Stacked, center-aligned
 *
 * Rendered as a Server Component — no client JS required.
 */
export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Left — copyright */}
          <div className="flex flex-col gap-0.5 text-center sm:text-left">
            <p className="text-sm text-[#A3A3A3]">
              &copy; {currentYear} Adarsh Korade. All rights reserved.
            </p>
            <p className="text-xs text-[#A3A3A3]">
              Designed &amp; Developed by Adarsh Korade.
            </p>
          </div>

          {/* Right — tech stack attribution */}
          <p className="text-xs text-[#A3A3A3] text-center sm:text-right">
            Built with{" "}
            <span className="text-[#737373] font-medium">Next.js</span>
            {" "}&amp;{" "}
            <span className="text-[#737373] font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </div>
  );
}
