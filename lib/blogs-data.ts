import type { BlogCategory, BlogPost, BlogCategorySlug } from "@/types/blogs";

/* =========================================================
   BLOG CATEGORIES CATALOG
   Defined categories according to blogs.md specification.
   ========================================================= */

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "all",
    label: "All Blogs",
    description: "All technical insights, stories, experiments, and research notes.",
  },
  {
    slug: "open-source",
    label: "Open Source",
    description: "Open-source tools, developer libraries, ecosystem contributions, and experiments.",
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    description: "Deep dives into software architecture, system breakdowns, and real-world engineering solutions.",
  },
  {
    slug: "insights",
    label: "Insights",
    description: "Perspectives on AI/ML, data pipelines, generative tech, and modern software development.",
  },
  {
    slug: "business",
    label: "Business",
    description: "Intersections of technology, startup building, digital product strategy, and automation.",
  },
  {
    slug: "design",
    label: "Design",
    description: "UI/UX architecture, product design, visual systems, and user-centric engineering.",
  },
  {
    slug: "creativity",
    label: "Creativity",
    description: "Personal experiments, creative coding, innovation ideas, and technical explorations.",
  },
  {
    slug: "freelancing",
    label: "Freelancing",
    description: "Client product delivery, consulting lessons, personal branding, and independent work.",
  },
];

/* =========================================================
   BLOG POSTS DATA SOURCE
   Currently zero published personal articles.
   The architecture strictly supports an intentional empty state
   while remaining future-ready for article publishing.
   ========================================================= */

export const BLOG_POSTS: BlogPost[] = [];

/* =========================================================
   BLOG DATA HELPER UTILITIES
   ========================================================= */

/**
 * Returns all published blog posts.
 */
export function getPublishedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === "published");
}

/**
 * Returns the currently featured blog post (if any).
 */
export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find(
    (post) => post.featured && post.status === "published"
  );
}

/**
 * Returns posts filtered by category.
 */
export function getPostsByCategory(categorySlug: BlogCategorySlug): BlogPost[] {
  const published = getPublishedPosts();
  if (categorySlug === "all") {
    return published;
  }
  return published.filter((post) => post.category === categorySlug);
}

/**
 * Returns a single post by slug.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/**
 * Returns category metadata by slug.
 */
export function getCategoryBySlug(slug: BlogCategorySlug): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((cat) => cat.slug === slug);
}
