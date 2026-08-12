interface SkipLinkProps {
  /** ID of the target element (default: main-content) */
  href?: string;
}

/**
 * SkipLink
 * ────────
 * Accessibility skip-to-content link.
 * First focusable element on the page.
 *
 * Visually hidden until focused — pressing Tab from
 * the browser URL bar will reveal it.
 *
 * Allows keyboard users to bypass the navigation
 * and jump directly to the main content.
 *
 * WCAG 2.4.1 — Bypass Blocks
 */
export function SkipLink({ href = "#main-content" }: SkipLinkProps) {
  return (
    <a href={href} className="skip-link">
      Skip to main content
    </a>
  );
}
