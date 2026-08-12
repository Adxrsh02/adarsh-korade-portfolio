"use client";

import { useState, useEffect } from "react";

/**
 * useScrollPosition
 * ─────────────────
 * Returns the current vertical scroll position (scrollY).
 * Uses a passive scroll listener for performance.
 * Throttled via requestAnimationFrame to avoid layout thrashing.
 *
 * Usage:
 *   const scrollY = useScrollPosition();
 *   const isScrolled = scrollY > 50;
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let rafId: number;

    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    }

    // Set initial value
    setScrollY(window.scrollY);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return scrollY;
}
