"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NavLinks } from "@/components/navigation/NavLinks";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/ui/Button";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileDrawer
 * ────────────
 * Full-screen mobile navigation overlay.
 *
 * Features:
 *   - Slides in from the right with CSS transitions
 *   - Focus trap: Tab cycles within the drawer
 *   - Escape key closes the drawer
 *   - Body scroll is locked when open
 *   - Backdrop overlay dismisses on click
 *   - ARIA: role="dialog", aria-modal, aria-label
 */
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Lock body scroll when drawer is open
  useLockBodyScroll(isOpen);

  // Focus trap — returns ref to attach to the drawer container
  const drawerRef = useFocusTrap(isOpen, onClose);

  // Close on Escape (also handled by useFocusTrap, but for clarity)
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm",
          "transition-opacity duration-400",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef as React.RefObject<HTMLDivElement>}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex flex-col",
          "w-full max-w-sm bg-white shadow-xl",
          "transition-transform duration-400 ease-[cubic-bezier(0,0,0.2,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E5E5]">
          <Logo />
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className={cn(
              "flex items-center justify-center",
              "w-10 h-10 rounded-md text-[#404040]",
              "hover:bg-[#F5F5F5] hover:text-[#0A0A0A]",
              "transition-colors duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
            )}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          aria-label="Mobile navigation"
          className="flex-1 overflow-y-auto px-4 py-6"
        >
          <NavLinks
            items={NAV_ITEMS}
            orientation="vertical"
            onItemClick={onClose}
          />
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-6 py-6 border-t border-[#E5E5E5]">
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            as="a"
            className="w-full justify-center"
            onClick={onClose}
          >
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </>
  );
}
