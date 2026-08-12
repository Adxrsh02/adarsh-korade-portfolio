"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/navigation/Logo";
import { NavLinks } from "@/components/navigation/NavLinks";
import { MobileDrawer } from "@/components/navigation/MobileDrawer";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_ITEMS, NAVBAR_SCROLL_THRESHOLD } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Navbar
 * ──────
 * Primary site navigation bar. Fixed at the top of every page.
 *
 * Behavior:
 *   - Transparent on page load (at top)
 *   - Transitions to solid white with blur after scrolling
 *     past NAVBAR_SCROLL_THRESHOLD (50px)
 *   - Desktop (≥ 1024px): logo + nav links + CTA button
 *   - Mobile (< 1024px): logo + hamburger menu button
 *   - Mobile drawer handles full mobile navigation
 *
 * This is a Client Component because it reads scroll position
 * and manages mobile drawer state.
 */
export function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const scrollY = useScrollPosition();

  const isScrolled = scrollY > NAVBAR_SCROLL_THRESHOLD;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]",
          // Height
          "h-14 lg:h-16",
          // Background — always solid white to prevent content bleed-through;
          // scroll adds blur + border + shadow for depth
          "bg-white",
          isScrolled
            ? "backdrop-blur-lg border-b border-[#E5E5E5] shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto h-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between">
            {/* Brand */}
            <Logo />

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center"
            >
              <NavLinks items={NAV_ITEMS} orientation="horizontal" />
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="primary"
                size="sm"
                href="/contact"
                as="a"
              >
                Let&apos;s Connect
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen(true)}
              className={cn(
                "flex lg:hidden items-center justify-center",
                "w-10 h-10 rounded-md",
                "text-[#404040] hover:text-[#0A0A0A] hover:bg-[#F5F5F5]",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
              )}
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
