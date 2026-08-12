import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface PageWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * PageWrapper
 * ───────────
 * Wraps page content in a semantic <main> element.
 * Applies top padding to clear the fixed navbar height.
 *
 * Should be the direct parent of all page sections.
 * The id="main-content" connects the SkipLink.
 *
 * Navbar height:
 *   Mobile  → 56px (3.5rem)
 *   Desktop → 64px (4rem)
 */
export function PageWrapper({
  className,
  children,
  ...props
}: PageWrapperProps) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className={cn(
        // Offset for fixed navbar
        "pt-14 lg:pt-16",
        // Focus ring suppressed on main (tabIndex={-1} is for skip link focus)
        "outline-none",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}
