"use client";

import { useEffect } from "react";

/**
 * useLockBodyScroll
 * ─────────────────
 * Locks body scroll when `isLocked` is true.
 * Used by MobileDrawer to prevent background scroll.
 *
 * Also preserves scroll position to avoid layout jump.
 */
export function useLockBodyScroll(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    const scrollY = window.scrollY;
    const body = document.body;

    body.classList.add("drawer-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";

    return () => {
      body.classList.remove("drawer-open");
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}
