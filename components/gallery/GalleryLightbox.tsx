"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from "lucide-react";
import type { GalleryItemData } from "@/types/gallery";

interface GalleryLightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItemData[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

/**
 * GalleryLightbox
 * ───────────────
 * Fullscreen accessible image viewing modal.
 * Supports keyboard navigation (Esc, Left, Right), body scroll lock,
 * item metadata footer, and touch controls.
 */
export function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  // Navigate next/prev callbacks
  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const prev = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(prev);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const next = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(next);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Esc listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo lightbox: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/92 backdrop-blur-xl text-white animate-toast-enter"
    >
      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/40">
        <div className="flex items-center gap-3">
          <Badge variant="accent" size="sm">
            {currentItem.categoryLabel}
          </Badge>
          <span className="text-xs font-mono text-white/70">
            {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox modal (Esc)"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
        >
          <X size={20} />
        </button>
      </div>

      {/* Center Image Display & Side Arrow Controls */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
        
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo (Left Arrow)"
            className="absolute left-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Main Image */}
        <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center overflow-hidden">
          <Image
            src={currentItem.image}
            alt={currentItem.alt}
            fill
            sizes="100vw"
            priority
            className="object-contain max-h-[70vh] sm:max-h-[75vh]"
          />
        </div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo (Right Arrow)"
            className="absolute right-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <ChevronRight size={24} />
          </button>
        )}

      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 p-4 sm:p-6 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto max-w-4xl space-y-2">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
              {currentItem.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-white/70 shrink-0">
              {currentItem.location && (
                <span className="flex items-center gap-1">
                  <MapPin size={13} className="text-[#FB923C]" />
                  {currentItem.location}
                </span>
              )}
              {currentItem.date && (
                <span className="flex items-center gap-1">
                  <Calendar size={13} className="text-[#FB923C]" />
                  {currentItem.date}
                </span>
              )}
            </div>
          </div>

          {currentItem.description && (
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {currentItem.description}
            </p>
          )}

          {currentItem.tags && currentItem.tags.length > 0 && (
            <div className="pt-1 flex flex-wrap items-center gap-1.5">
              <Tag size={12} className="text-[#FB923C] mr-1" />
              {currentItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-white/90 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
