"use client";

import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

/**
 * HeroSection
 * ───────────
 * Ultra-premium top-level Hero component.
 *
 * Layout:
 *   Desktop (≥1024px):
 *     Two-column asymmetric layout — text left (~50%) + visual right (~50%)
 *     Vertically centered within full viewport height.
 *
 *   Mobile (<768px):
 *     Single column stacked — content first, 3D visual below.
 *
 * Features:
 *   - Clean white background (`bg-white`)
 *   - Integrated scroll prompt at the bottom (`Scroll to explore ↓`)
 *   - Accessibility compliant (`aria-label`, single `h1`, decorative 3D)
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — Adarsh Korade, AI Engineer & Data Engineer"
      className={cn(
        "relative w-full",
        // Min height equals full viewport minus navbar height
        "min-h-[calc(100svh-3.5rem)] lg:min-h-[calc(100svh-4rem)]",
        "bg-white flex flex-col justify-between",
        "py-12 md:py-16 lg:py-12"
      )}
    >
      {/* ── Main Layout Container ── */}
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 my-auto">
        <div
          className={cn(
            "flex flex-col items-center gap-12",
            "md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12"
          )}
        >
          {/* ── Left: Identity, Positioning & CTAs ── */}
          <div className="w-full md:flex-1 md:max-w-[620px]">
            <HeroContent />
          </div>

          {/* ── Right: White 3D Data & AI Network Visual ── */}
          <div className="flex items-center justify-center md:flex-shrink-0">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* ── Micro Scroll Cue Indicator ── */}
      <div className="hero-animate hero-delay-5 hidden sm:flex items-center justify-center gap-2 pt-6 text-xs font-medium text-[#A3A3A3] select-none">
        <span>Scroll to explore</span>
        <ArrowDown size={14} className="animate-bounce text-[#737373]" aria-hidden="true" />
      </div>
    </section>
  );
}
