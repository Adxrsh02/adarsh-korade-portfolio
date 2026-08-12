"use client";

import { useState, useMemo } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { FeaturedMoment } from "@/components/gallery/FeaturedMoment";
import { GalleryFilters } from "@/components/gallery/GalleryFilters";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { GalleryCTA } from "@/components/gallery/GalleryCTA";
import type { GalleryCategory, GalleryItemData, LightboxState } from "@/types/gallery";

/**
 * GalleryPageClient
 * ─────────────────
 * Client-side interactive wrapper for the Gallery page.
 * Coordinates active category filter, search query state, and fullscreen lightbox modal.
 */
export function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxState, setLightboxState] = useState<LightboxState>({
    isOpen: false,
    currentIndex: 0,
  });

  // Calculate filtered list for lightbox index matching
  const filteredItems = useMemo(() => {
    let result = GALLERY_ITEMS;

    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.location?.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  // Open Lightbox callback
  const handleOpenLightbox = (item: GalleryItemData) => {
    const itemIdx = filteredItems.findIndex((i) => i.id === item.id);
    setLightboxState({
      isOpen: true,
      currentIndex: itemIdx !== -1 ? itemIdx : 0,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex: number) => {
    setLightboxState({
      isOpen: true,
      currentIndex: newIndex,
    });
  };

  return (
    <>
      {/* § 1 — Editorial Hero */}
      <GalleryHero onOpenLightbox={handleOpenLightbox} />

      {/* § 2 — Featured Spotlight Spread */}
      <FeaturedMoment onOpenLightbox={handleOpenLightbox} />

      {/* § 3 — Interactive Filter Bar */}
      <GalleryFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalFilteredCount={filteredItems.length}
      />

      {/* § 4 — Asymmetric Editorial Gallery Grid */}
      <GalleryGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* § 5 — Fullscreen Accessible Lightbox */}
      <GalleryLightbox
        isOpen={lightboxState.isOpen}
        currentIndex={lightboxState.currentIndex}
        items={filteredItems}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />

      {/* § 6 — Closing Call-to-Action */}
      <GalleryCTA />
    </>
  );
}
