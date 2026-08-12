import { Inter } from "next/font/google";

/**
 * Inter — primary body font
 * Loaded via next/font for automatic subset optimization,
 * cache, and zero FOIT (Flash of Invisible Text).
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

/**
 * Helvetica Neue — heading font
 * This is a system font — no external download required.
 * On macOS / iOS it renders as Helvetica Neue.
 * On Windows / Android it falls back to Arial.
 * The CSS variable --font-heading is defined in globals.css.
 *
 * NOTE: If a licensed Helvetica Neue file is provided in the
 * future, move it to /public/fonts/ and register it here
 * using next/font/local.
 */
// Heading font is handled via CSS custom property in globals.css:
// --font-heading: 'Helvetica Neue', Helvetica, Arial, -apple-system, sans-serif;

export const fontVariables = [inter.variable].join(" ");
