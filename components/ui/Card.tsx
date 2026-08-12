import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ElementType, HTMLAttributes, ComponentPropsWithoutRef } from "react";

const cardVariants = cva(
  // Base
  [
    "relative flex flex-col",
    "bg-white border border-[#E5E5E5] rounded-lg",
    "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
    "transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        /** Static card — no hover effects */
        default: "",
        /** Interactive card — hover lift + shadow */
        interactive: [
          "cursor-pointer",
          "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)] hover:border-[#D4D4D4]",
          "active:translate-y-0",
        ],
      },
      padding: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

interface CardBaseProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  /** If provided, renders as a Next.js Link */
  href?: string;
  /** Render as a different HTML element */
  as?: ElementType;
}

/**
 * Card
 * ────
 * General-purpose content container.
 *
 * Variants: default (static) | interactive (hover lift)
 * Padding:  sm | md | lg
 *
 * Pass `href` to render as a Next.js Link card.
 * Pass `as` to render as any HTML element.
 *
 * Usage:
 *   <Card>Static content</Card>
 *   <Card variant="interactive" href="/projects/my-project">
 *     Project card content
 *   </Card>
 */
export function Card({
  variant,
  padding,
  className,
  children,
  href,
  as: Tag,
  ...props
}: CardBaseProps) {
  const classes = cn(cardVariants({ variant, padding }), className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as object)}>
        {children}
      </Link>
    );
  }

  const Component = (Tag || "div") as React.FC<
    ComponentPropsWithoutRef<"div"> & { className?: string }
  >;
  return (
    <Component className={classes} {...(props as ComponentPropsWithoutRef<"div">)}>
      {children}
    </Component>
  );
}

export { cardVariants };
