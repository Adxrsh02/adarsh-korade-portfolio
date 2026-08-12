import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { GalleryPageClient } from "@/components/gallery/GalleryPageClient";
import { SITE_CONFIG } from "@/lib/constants";
import { GALLERY_ITEMS } from "@/lib/gallery-data";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Adarsh Korade's professional experiences, leadership summits, Jio Platforms corporate engineering, events, hackathons, and milestones.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/gallery`,
  },
  openGraph: {
    title: `Gallery — ${SITE_CONFIG.name}`,
    description:
      "Visual archive of the people, places, leadership experiences, and engineering milestones behind Adarsh Korade's journey.",
    url: `${SITE_CONFIG.url}/gallery`,
    images: [
      {
        url: "/Section_images/leadership/Creatives_theme_photo.jpg",
        width: 1200,
        height: 630,
        alt: "Adarsh Korade E-Cell Executive Leadership Team",
      },
    ],
  },
};

/* =========================================================
   JSON-LD — ImageGallery & Person Structured Data
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": `${SITE_CONFIG.url}/gallery/#gallery`,
      name: "Adarsh Korade Portfolio Gallery",
      description:
        "Visual archive of professional experiences, leadership summits, Jio Platforms engineering sprints, hackathons, and milestones.",
      url: `${SITE_CONFIG.url}/gallery`,
      author: {
        "@type": "Person",
        name: "Adarsh Korade",
      },
      image: GALLERY_ITEMS.map((item) => ({
        "@type": "ImageObject",
        name: item.title,
        description: item.description,
        contentUrl: `${SITE_CONFIG.url}${item.image}`,
      })),
    },
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: "Adarsh Korade",
      jobTitle: "Data Engineer (AI/ML) Intern",
      worksFor: {
        "@type": "Organization",
        name: "Jio Platforms Limited",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "SIES Graduate School of Technology",
      },
    },
  ],
};

/* =========================================================
   GALLERY PAGE (Server Component)
   ========================================================= */

export default function GalleryPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        <GalleryPageClient />
      </PageWrapper>
    </>
  );
}
