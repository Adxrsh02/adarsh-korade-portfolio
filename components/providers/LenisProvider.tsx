"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * LenisProvider
 * ─────────────
 * Initializes Lenis smooth scrolling globally.
 *
 * Must be a Client Component (browser-only APIs).
 * Wraps {children} in root layout.tsx.
 *
 * Respects `prefers-reduced-motion`:
 *   If the user prefers reduced motion, Lenis is NOT
 *   initialized and native scrolling is used instead.
 *
 * RAF loop:
 *   Uses requestAnimationFrame for the tick loop,
 *   cleaned up on unmount to prevent memory leaks.
 */
export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Native scroll — no Lenis
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    // RAF tick loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
