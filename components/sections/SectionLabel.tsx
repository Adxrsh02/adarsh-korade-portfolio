import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionLabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/**
 * SectionLabel
 * ────────────
 * Orange uppercase overline label displayed above
 * every section heading.
 *
 * Creates visual hierarchy: Label → Heading → Description
 * The orange accent draws the eye and contextualizes
 * the section before the main heading.
 *
 * Usage:
 *   <SectionLabel>About Me</SectionLabel>
 *   <SectionLabel>Featured Work</SectionLabel>
 */
export function SectionLabel({ className, children, ...props }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block",
        "text-xs font-semibold uppercase tracking-widest",
        "text-[#EA580C]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
