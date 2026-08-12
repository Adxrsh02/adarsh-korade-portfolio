"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLightbox } from "@/hooks/useLightbox";
import type { ProjectScreenshot } from "@/types";

/* =========================================================
   ScreenshotGallery
   Image gallery with full-screen lightbox.
   Keyboard navigable: arrows, Escape, Tab.
   ========================================================= */

interface ScreenshotGalleryProps {
  screenshots: ProjectScreenshot[];
  projectTitle: string;
}

export function ScreenshotGallery({ screenshots, projectTitle }: ScreenshotGalleryProps) {
  const { isOpen, activeIndex, open, close, goNext, goPrev } = useLightbox(
    screenshots.length
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close, goNext, goPrev]);

  if (!screenshots || screenshots.length === 0) return null;

  const active = screenshots[activeIndex];

  return (
    <>
      {/* Gallery Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label={`${projectTitle} screenshots`}
      >
        {screenshots.map((shot, i) => (
          <div
            key={i}
            role="listitem"
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] cursor-pointer hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            onClick={() => open(i)}
          >
            <Image
              src={shot.path}
              alt={shot.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
            </div>
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-xs text-white font-medium leading-snug">
                {shot.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Captions below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {screenshots.map((shot, i) => (
          <p key={i} className="text-xs text-[#737373] text-center px-2">
            {shot.caption}
          </p>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="lightbox-overlay fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Image gallery — ${active.caption}`}
          onClick={close}
        >
          {/* Content */}
          <div
            className="lightbox-image relative max-w-5xl w-full max-h-[90vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl bg-[#0A0A0A]">
              <Image
                src={active.path}
                alt={active.caption}
                width={1280}
                height={800}
                className="w-full h-auto max-h-[75vh] object-contain"
                priority
              />
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-white/80 font-medium px-4">
              {active.caption}
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-between px-2">
              <button
                onClick={goPrev}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5" role="tablist" aria-label="Image navigation">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === activeIndex}
                    onClick={() => open(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      i === activeIndex
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`View image ${i + 1}: ${screenshots[i].caption}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </>
  );
}
