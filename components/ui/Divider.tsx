import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  /** Layout orientation */
  orientation?: "horizontal" | "vertical";
  /** Whether to use a decorative role (default: true) */
  decorative?: boolean;
}

/**
 * Divider
 * ───────
 * Visual separator between content areas.
 *
 * Horizontal: renders as <hr> — full width line
 * Vertical:   renders as <div> — full height line (inline)
 *
 * Usage:
 *   <Divider />                        — horizontal
 *   <Divider orientation="vertical" /> — vertical (needs parent height)
 */
export function Divider({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role={decorative ? "none" : undefined}
        aria-hidden={decorative ? "true" : undefined}
        className={cn(
          "inline-block self-stretch w-px bg-[#E5E5E5]",
          className
        )}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      />
    );
  }

  return (
    <hr
      role={decorative ? "none" : undefined}
      aria-hidden={decorative ? "true" : undefined}
      className={cn(
        "border-0 border-t border-[#E5E5E5] w-full",
        className
      )}
      {...(props as HTMLAttributes<HTMLHRElement>)}
    />
  );
}
