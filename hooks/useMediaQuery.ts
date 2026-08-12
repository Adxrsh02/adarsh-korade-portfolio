"use client";

import { useState, useEffect } from "react";

/**
 * useMediaQuery
 * ─────────────
 * Returns whether a CSS media query currently matches.
 * Server-safe: returns `false` during SSR.
 *
 * Usage:
 *   const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    function listener(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
