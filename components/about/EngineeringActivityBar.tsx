"use client";

import { useEffect, useRef, useState } from "react";

interface ActivityBarProps {
  percent: number;
  label: string;
  detail: string;
  color?: "accent" | "secondary";
  animate?: boolean;
}

/**
 * EngineeringActivityBar
 * ──────────────────────
 * Animated horizontal progress bar with label + percentage.
 * Width transitions from 0 to final when mounted / in-view.
 */
export function EngineeringActivityBar({
  percent,
  label,
  detail,
  color = "accent",
  animate = true,
}: ActivityBarProps) {
  const [isAnimated, setIsAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) {
      setIsAnimated(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Small delay to let layout settle
            setTimeout(() => setIsAnimated(true), 80);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  const barClass =
    color === "accent"
      ? "activity-bar"
      : "activity-bar activity-bar-secondary";

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-[#0A0A0A] truncate">{label}</span>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-[#737373]">{detail}</span>
          <span className="text-xs font-semibold text-[#404040] w-8 text-right">{percent}%</span>
        </div>
      </div>
      <div className="h-1.5 rounded-full bg-[#F5F5F5] overflow-hidden">
        <div
          className={barClass}
          style={
            {
              "--bar-width": `${percent}%`,
              width: isAnimated ? `${percent}%` : "0%",
            } as React.CSSProperties
          }
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${percent}%`}
        />
      </div>
    </div>
  );
}
