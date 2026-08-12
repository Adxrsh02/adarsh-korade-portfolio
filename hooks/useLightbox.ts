"use client";

import { useState, useCallback } from "react";

/**
 * useLightbox
 * ───────────
 * Manages lightbox open/close state and the active image index
 * for the screenshot gallery component.
 */
export function useLightbox(totalImages: number) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  return { isOpen, activeIndex, open, close, goNext, goPrev };
}
