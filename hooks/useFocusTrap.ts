"use client";

import { useEffect, useRef } from "react";

/**
 * useFocusTrap
 * ────────────
 * Traps keyboard focus within a container element
 * when `isActive` is true.
 *
 * Implements ARIA authoring practices for modal dialogs.
 * Tab wraps forward, Shift+Tab wraps backward.
 * Escape key triggers `onEscape`.
 *
 * Usage:
 *   const containerRef = useFocusTrap(isOpen, () => setIsOpen(false));
 *   <div ref={containerRef}>...</div>
 */
export function useFocusTrap(
  isActive: boolean,
  onEscape?: () => void
): React.RefObject<HTMLElement | null> {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;

    // All focusable elements within the container
    const focusableSelectors = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    function getFocusableElements(): HTMLElement[] {
      return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onEscape?.();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusableElements();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        // Shift+Tab — going backward
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab — going forward
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    // Focus the first focusable element on activation
    const focusable = getFocusableElements();
    if (focusable.length > 0) {
      // Defer to allow drawer animation to start
      const timer = setTimeout(() => focusable[0].focus(), 50);
      document.addEventListener("keydown", handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onEscape]);

  return containerRef;
}
