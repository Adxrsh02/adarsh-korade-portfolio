import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Visual variant for different contexts */
  variant?: "default" | "footer";
}

/**
 * Logo
 * ────
 * Brand wordmark component.
 * Renders "Adarsh Korade" as a text-based logo.
 *
 * Typography: Helvetica Neue (system font) with
 * tight letter spacing for a premium wordmark feel.
 *
 * Future: Can be replaced with an SVG logo if provided.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Adarsh — back to home"
      className={cn(
        "inline-flex items-center gap-0 select-none",
        "transition-opacity duration-150 hover:opacity-80",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2 rounded-sm",
        className
      )}
    >
      <span
        className={cn(
          "font-bold tracking-tight text-[#0A0A0A]",
          "font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif]",
          {
            "text-lg leading-none": variant === "default",
            "text-xl leading-none": variant === "footer",
          }
        )}
      >
        Adarsh
      </span>
    </Link>
  );
}
