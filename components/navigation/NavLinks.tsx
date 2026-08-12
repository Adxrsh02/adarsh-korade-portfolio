"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface NavLinksProps {
  items: NavItem[];
  /** Layout orientation */
  orientation?: "horizontal" | "vertical";
  /** Called when a link is clicked (e.g., to close mobile drawer) */
  onItemClick?: () => void;
}

/**
 * NavLinks
 * ────────
 * Renders a list of navigation links.
 * Highlights the active route via Next.js usePathname.
 *
 * Supports two orientations:
 *   horizontal → desktop navbar (flex row, small text)
 *   vertical   → mobile drawer (flex column, large text)
 */
export function NavLinks({
  items,
  orientation = "horizontal",
  onItemClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      role="list"
      className={cn(
        "flex items-center",
        {
          "flex-row gap-1": orientation === "horizontal",
          "flex-col items-start gap-1 w-full": orientation === "vertical",
        }
      )}
    >
      {items.map((item) => {
        // Active: exact match for /, prefix match for others
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href} className={orientation === "vertical" ? "w-full" : undefined}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              onClick={onItemClick}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cn(
                "relative block rounded-md transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
                // Horizontal (desktop)
                orientation === "horizontal" && [
                  "px-3 py-2 text-sm font-medium",
                  "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px",
                  "after:scale-x-0 after:transition-transform after:duration-200",
                  "hover:text-[#0A0A0A] hover:after:scale-x-100 hover:after:bg-[#0A0A0A]",
                  isActive
                    ? "text-[#F97316] font-semibold after:scale-x-100 after:bg-[#F97316]"
                    : "text-[#404040]",
                ],
                // Vertical (mobile drawer)
                orientation === "vertical" && [
                  "px-4 py-3 text-2xl font-medium w-full",
                  "hover:text-[#0A0A0A] hover:bg-[#F5F5F5]",
                  isActive
                    ? "text-[#F97316] bg-[#FFF7ED]"
                    : "text-[#404040]",
                ]
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
