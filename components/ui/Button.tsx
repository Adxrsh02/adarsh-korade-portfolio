import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ElementType, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/* =========================================================
   Button Variants (class-variance-authority)
   ========================================================= */

const buttonVariants = cva(
  // Base styles — applied to ALL variants
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-md font-medium",
    "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "select-none whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        /** Orange fill — primary CTAs */
        primary: [
          "bg-[#F97316] text-white shadow-sm",
          "hover:bg-[#EA580C] hover:shadow-md hover:scale-[1.02]",
          "active:bg-[#C2410C] active:scale-[0.98]",
        ],
        /** Bordered, no fill — secondary actions */
        secondary: [
          "bg-transparent border border-[#D4D4D4] text-[#171717]",
          "hover:bg-[#F5F5F5] hover:border-[#A3A3A3]",
          "active:bg-[#E5E5E5]",
        ],
        /** No border, no fill — tertiary/ghost actions */
        ghost: [
          "bg-transparent text-[#404040]",
          "hover:bg-[#F5F5F5] hover:text-[#0A0A0A]",
          "active:bg-[#E5E5E5]",
        ],
        /** Outlined only — visible on colored backgrounds */
        outline: [
          "bg-transparent border border-[#0A0A0A] text-[#0A0A0A]",
          "hover:bg-[#0A0A0A] hover:text-white",
          "active:bg-[#171717]",
        ],
      },
      size: {
        sm: "px-4 py-2 text-sm h-9",
        md: "px-5 py-2.5 text-sm h-10",
        lg: "px-6 py-3 text-base h-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

/* =========================================================
   Button Props
   ========================================================= */

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  /** Optional icon to render before children */
  icon?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonAsLink = ButtonBaseProps & {
  as: typeof Link;
  href: string;
  [key: string]: unknown;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

/**
 * Button
 * ──────
 * Universal button/link component with multiple variants and sizes.
 *
 * Polymorphic: renders as <button>, <a>, or Next.js <Link>
 * depending on the `as` prop.
 *
 * Variants:  primary | secondary | ghost | outline
 * Sizes:     sm | md | lg
 *
 * Usage:
 *   <Button variant="primary" size="lg">Get in Touch</Button>
 *   <Button as="a" href="/contact" variant="secondary">Learn More</Button>
 *   <Button as={Link} href="/about" variant="ghost">About</Button>
 */
export function Button({
  as,
  variant,
  size,
  className,
  children,
  icon,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon && <span aria-hidden="true" className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  if (as === Link && href) {
    const LinkComponent = Link;
    return (
      <LinkComponent href={href} className={classes} {...props as object}>
        {icon && <span aria-hidden="true" className="shrink-0">{icon}</span>}
        {children}
      </LinkComponent>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon && <span aria-hidden="true" className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

// Export variants for external use (e.g., generating link styles)
export { buttonVariants };
