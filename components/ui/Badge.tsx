import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  // Base
  [
    "inline-flex items-center font-medium rounded-sm",
    "transition-colors duration-150",
    "select-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        /** Neutral gray — default metadata */
        default: "bg-[#F5F5F5] text-[#404040] border border-[#E5E5E5]",
        /** Orange accent — highlights, categories */
        accent: "bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]",
        /** Outline only — skill tags, secondary labels */
        outline: "bg-transparent text-[#404040] border border-[#D4D4D4]",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-xs tracking-wide",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

/**
 * Badge
 * ─────
 * Small label for metadata, categories, status, or tags.
 *
 * Variants: default | accent | outline
 * Sizes:    sm | md
 *
 * Usage:
 *   <Badge variant="accent">Open Source</Badge>
 *   <Badge variant="outline">TypeScript</Badge>
 *   <Badge>Featured</Badge>
 */
export function Badge({ variant, size, className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </span>
  );
}

export { badgeVariants };
