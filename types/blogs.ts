/* =========================================================
   BLOG PLATFORM — TYPE DEFINITIONS
   Single source of truth for Blog items, Categories, Authors,
   and Filtering options.
   ========================================================= */

/** Supported blog categories */
export type BlogCategorySlug =
  | "all"
  | "open-source"
  | "case-studies"
  | "insights"
  | "business"
  | "design"
  | "creativity"
  | "freelancing";

/** Metadata definition for a blog category */
export interface BlogCategory {
  slug: BlogCategorySlug;
  label: string;
  description: string;
}

/** Publication status of a blog post */
export type BlogPostStatus = "published" | "draft" | "external";

/** Blog post author information */
export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

/** Specific SEO metadata for individual posts */
export interface BlogPostSEO {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

/** Complete normalized blog post schema */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategorySlug;
  tags: string[];
  coverImage?: string;
  author: BlogAuthor;
  publishedAt: string; // ISO 8601 YYYY-MM-DD
  updatedAt?: string;
  readingTime: string;
  featured: boolean;
  status: BlogPostStatus;
  externalUrl?: string; // For Medium / external posts
  source?: "local" | "medium" | "devto";
  seo?: BlogPostSEO;
}

/** Client filter state props */
export interface BlogFilterOptions {
  activeCategory: BlogCategorySlug;
  searchQuery?: string;
}
