"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay index (0–5) — applies `.about-reveal-delay-N` */
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Intersection threshold before animation triggers (default: 0.12) */
  threshold?: number;
}

/**
 * ScrollReveal
 * ────────────
 * Wraps content in an IntersectionObserver that adds `.is-visible`
 * when the element enters the viewport — triggering the
 * `.about-reveal` CSS transition defined in globals.css.
 *
 * - Respects prefers-reduced-motion (the global CSS override
 *   sets all transitions to 0.01ms so content is still visible)
 * - Animates once (observer disconnects after first trigger)
 * - Zero re-renders (ref-based DOM mutation only)
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "50px 0px" }
    );

    observer.observe(el);

    // Safety fallback: ensure content is NEVER permanently hidden if IO event is missed
    const timer = setTimeout(() => {
      if (el && !el.classList.contains("is-visible")) {
        el.classList.add("is-visible");
      }
    }, 600);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "about-reveal",
        `about-reveal-delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  );
}
