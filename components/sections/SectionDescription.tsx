import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

/**
 * SectionDescription
 * ──────────────────
 * Supporting descriptive text displayed below the
 * SectionHeading. Provides context for the section.
 *
 * Typography:
 *   - Font: Inter (body font)
 *   - Size: body-lg (1.125rem / 18px)
 *   - Weight: 400 (regular)
 *   - Color: #737373 (gray-500 — muted)
 *   - Line height: 1.6
 *   - Max width: constrained for readable line length
 *
 * Usage:
 *   <SectionDescription>
 *     A brief overview of my work across software, design,
 *     and product development.
 *   </SectionDescription>
 */
export function SectionDescription({
  className,
  children,
  ...props
}: SectionDescriptionProps) {
  return (
    <p
      className={cn(
        "text-lg leading-relaxed text-[#737373]",
        "max-w-[600px]",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
