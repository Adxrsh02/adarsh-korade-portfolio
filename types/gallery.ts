/* =========================================================
   GALLERY TYPES
   Type definitions for gallery items, categories, and lightbox
   ========================================================= */

export type GalleryCategory =
  | "all"
  | "leadership"
  | "jio"
  | "events"
  | "achievements";

export interface GalleryFilterOption {
  id: GalleryCategory;
  label: string;
  count: number;
}

export type GalleryAspect = "wide" | "portrait" | "standard" | "square";

export interface GalleryItemData {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  aspectRatio: GalleryAspect;
  featured?: boolean;
  heroFeatured?: boolean;
  date?: string;
  location?: string;
  description?: string;
  tags?: string[];
  alt: string;
}

export interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
}
