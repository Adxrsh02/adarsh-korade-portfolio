import { cn } from "@/lib/utils";
import type { HeadingLevel } from "@/types";
import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** HTML heading level (default: h2 for sections) */
  as?: HeadingLevel;
  children: React.ReactNode;
}

/**
 * SectionHeading
 * ──────────────
 * Primary heading for each section of the portfolio.
 * Renders as h2 by default (single h1 is reserved for
 * the Hero section on the landing page / page title).
 *
 * Typography:
 *   - Font: Helvetica Neue (system)
 *   - Size: fluid 1.5rem (mobile) → 2.25rem (desktop)
 *   - Weight: 600 (semibold)
 *   - Tracking: -0.01em
 *   - Color: #0A0A0A (near-black)
 *
 * Always provide an `id` when used inside SectionWrapper
 * so it can be referenced by aria-labelledby.
 *
 * Usage:
 *   <SectionHeading id="about-heading">Who I Am</SectionHeading>
 */
export function SectionHeading({
  as: Tag = "h2",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif]",
        "font-semibold tracking-tight text-[#0A0A0A]",
        // Fluid responsive size
        "text-2xl sm:text-3xl lg:text-4xl",
        // Line height
        "leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
