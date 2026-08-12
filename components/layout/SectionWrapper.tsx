import { cn } from "@/lib/utils";
import type { SectionBackground } from "@/types";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  /** Anchor ID for navigation + aria-labelledby */
  id?: string;
  /** Background style for the section */
  background?: SectionBackground;
  /** ID of the heading element that labels this section */
  ariaLabelledBy?: string;
  children: React.ReactNode;
}

/**
 * SectionWrapper
 * ──────────────
 * Full-width section container with consistent vertical
 * padding, semantic <section> element, and optional
 * alternating background colors.
 *
 * Handles all vertical rhythm across the page — pair with
 * Container inside for correct horizontal constraints.
 *
 * Backgrounds:
 *   white   → #FFFFFF (default)
 *   alt     → #FAFAFA (off-white — alternate sections)
 *   accent  → #FFF7ED (subtle orange tint — CTA sections)
 */
export function SectionWrapper({
  id,
  background = "white",
  ariaLabelledBy,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        // Vertical rhythm: mobile → tablet → desktop
        "py-16 md:py-20 lg:py-24",
        // Background variants
        {
          "bg-white": background === "white",
          "bg-[#FAFAFA]": background === "alt",
          "bg-[#FFF7ED]": background === "accent",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
