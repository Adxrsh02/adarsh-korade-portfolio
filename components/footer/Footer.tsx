import { FooterCTA } from "@/components/footer/FooterCTA";
import { FooterGrid } from "@/components/footer/FooterGrid";
import { FooterAvailability } from "@/components/footer/FooterAvailability";
import { FooterBottom } from "@/components/footer/FooterBottom";

/**
 * Footer
 * ──────
 * Global site footer. Rendered in root layout.tsx so it appears
 * on every page of the portfolio.
 *
 * Multi-layer architecture (top to bottom):
 *
 *   Layer 1 — FooterCTA
 *   ┌────────────────────────────────────────────────────────┐
 *   │  "Let's Build Something Amazing Together."            │
 *   │   Description text                                    │
 *   │   [Contact Me]  [Download Resume]  View Projects →   │
 *   └────────────────────────────────────────────────────────┘
 *
 *   Layer 2 — FooterGrid
 *   ┌──────┬──────────┬──────────┬───────────┬─────────────┐
 *   │Brand │Navigation│ Services │ Resources │ Connect     │
 *   └──────┴──────────┴──────────┴───────────┴─────────────┘
 *
 *   Layer 3 — FooterAvailability
 *   ┌────────────────────────────────────────────────────────┐
 *   │ 🟢 Open for Full-Time  ·  Currently building [tags]  │
 *   └────────────────────────────────────────────────────────┘
 *
 *   Layer 4 — FooterBottom
 *   ┌────────────────────────────────────────────────────────┐
 *   │ © 2026 Adarsh Korade       Built with Next.js & TW   │
 *   └────────────────────────────────────────────────────────┘
 *
 * All layers are Server Components — no client-side JavaScript.
 * Animations are driven entirely by CSS (globals.css).
 *
 * The floating BackToTop button is rendered separately in
 * layout.tsx and is NOT duplicated here.
 */
export function Footer() {
  return (
    <footer aria-label="Site footer">
      {/* Layer 1 — Premium CTA Banner */}
      <FooterCTA />

      {/* Layer 2 — Main 5-Column Grid */}
      <FooterGrid />

      {/* Layer 3 — Availability & Current Focus Strip */}
      <FooterAvailability />

      {/* Layer 4 — Copyright & Attribution Bar */}
      <FooterBottom />
    </footer>
  );
}
