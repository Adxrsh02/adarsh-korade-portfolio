import { cn } from "@/lib/utils";
import type { ContainerVariant } from "@/types";
import type { ElementType, HTMLAttributes, ComponentPropsWithoutRef } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  /** Render as a different HTML element (default: "div") */
  as?: ElementType;
  /** Width variant */
  variant?: ContainerVariant;
  children: React.ReactNode;
}

/**
 * Container
 * ─────────
 * Universal width-constraining wrapper.
 * Handles max-width, horizontal padding, and centering.
 *
 * All page sections should use Container to ensure
 * consistent content width across the site.
 *
 * Variants:
 *   default  → max-w-[1280px]  (standard content)
 *   wide     → max-w-[1440px]  (full-bleed sections)
 *   narrow   → max-w-[960px]   (focused, readable content)
 */
export function Container({
  as: Tag = "div",
  variant = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  // Cast Tag to a permissive type so JSX children constraint resolves
  const Component = Tag as React.FC<
    ComponentPropsWithoutRef<"div"> & { className?: string }
  >;

  return (
    <Component
      className={cn(
        // Base: horizontal padding (mobile-first) + centering
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        // Width variant
        {
          "max-w-[1280px]": variant === "default",
          "max-w-[1440px]": variant === "wide",
          "max-w-[960px]": variant === "narrow",
        },
        className
      )}
      {...(props as ComponentPropsWithoutRef<"div">)}
    >
      {children}
    </Component>
  );
}
