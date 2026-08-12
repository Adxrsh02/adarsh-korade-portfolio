import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { BlogHero } from "@/components/blogs/BlogHero";
import { BlogPageClient } from "@/components/blogs/BlogPageClient";
import { BlogCTA } from "@/components/blogs/BlogCTA";
import { SITE_CONFIG } from "@/lib/constants";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blogs-data";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Blogs — Adarsh Korade",
  description:
    "Technical insights, engineering experiences, experiments, ideas, and lessons across AI, data engineering, software development, and product design by Adarsh Korade.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blogs`,
  },
  openGraph: {
    title: `Blogs — ${SITE_CONFIG.name}`,
    description:
      "Technical insights, engineering experiences, research notes, and stories on AI, Data Engineering, and Full Stack development by Adarsh Korade.",
    url: `${SITE_CONFIG.url}/blogs`,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Adarsh Korade — Blogs & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blogs — ${SITE_CONFIG.name}`,
    description:
      "Technical insights, engineering experiences, and stories on AI, Data, and Software Development.",
    images: [SITE_CONFIG.ogImage],
  },
};

/* =========================================================
   JSON-LD STRUCTURED DATA
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${SITE_CONFIG.url}/blogs/#blog`,
      name: "Adarsh Korade Technical Blog & Insights",
      description:
        "Technical writeups, engineering experiences, research notes, and case studies by Adarsh Korade.",
      url: `${SITE_CONFIG.url}/blogs`,
      author: {
        "@type": "Person",
        name: "Adarsh Korade",
        url: SITE_CONFIG.url,
      },
      publisher: {
        "@type": "Person",
        name: "Adarsh Korade",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blogs/#webpage`,
      url: `${SITE_CONFIG.url}/blogs`,
      name: "Blogs — Adarsh Korade",
      description:
        "Collection of technical insights, engineering experiences, and stories.",
    },
  ],
};

/* =========================================================
   /blogs PAGE (Server Component)
   ========================================================= */

export default function BlogsPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* 1. Hero */}
        <BlogHero />

        {/* 2. Interactive Category Navigation & Post Grid / Empty State */}
        <BlogPageClient categories={BLOG_CATEGORIES} allPosts={BLOG_POSTS} />

        {/* 3. Conversion CTA */}
        <BlogCTA />
      </PageWrapper>
    </>
  );
}
