"use client";

import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { BACK_TO_TOP_THRESHOLD } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * BackToTop
 * ─────────
 * Floating button that appears after scrolling
 * past BACK_TO_TOP_THRESHOLD (500px).
 *
 * Smooth scrolls to the top using Lenis (if active)
 * or native scrollTo as fallback.
 *
 * Positioned: fixed, bottom-right corner.
 * Fully keyboard accessible.
 */
export function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > BACK_TO_TOP_THRESHOLD;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Back to top of page"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40",
        "flex items-center justify-center",
        "w-11 h-11 rounded-full",
        "bg-[#0A0A0A] text-white shadow-lg",
        "hover:bg-[#262626] hover:scale-110",
        "transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
        // Show/hide with opacity + scale
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ArrowUp size={18} aria-hidden="true" strokeWidth={2.5} />
    </button>
  );
}
