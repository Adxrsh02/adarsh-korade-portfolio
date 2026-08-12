import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — class name utility
 * Merges Tailwind CSS classes safely, resolving conflicts,
 * and handles conditional class construction via clsx.
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-accent-500", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
