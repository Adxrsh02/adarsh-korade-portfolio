import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { JioJourneyHero } from "@/components/about/jio-journey/JioJourneyHero";
import { JioJourneyNarrative } from "@/components/about/jio-journey/JioJourneyNarrative";
import { JioJourneyGallery } from "@/components/about/jio-journey/JioJourneyGallery";
import { JioJourneyBackCTA } from "@/components/about/jio-journey/JioJourneyBackCTA";
import { SITE_CONFIG } from "@/lib/constants";

/* =========================================================
   JIO JOURNEY PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Jio Journey",
  description:
    "One year at Jio Platforms Limited — my first corporate experience. A story of growth, mentorship, teamwork, and memories I'll always carry.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about/jio-journey`,
  },
  openGraph: {
    title: "One Year. One Chapter. A Lot of Memories. — Adarsh Korade",
    description:
      "My Jio journey — one year of growth, mentorship, teamwork, and memories at Jio Platforms Limited.",
    url: `${SITE_CONFIG.url}/about/jio-journey`,
    images: [
      {
        url: `${SITE_CONFIG.url}/images/about/jio/Jio_Team_Photo.jpg`,
        width: 1200,
        height: 675,
        alt: "Jio RAFM team group photo",
      },
    ],
  },
};

/* =========================================================
   JIO JOURNEY PAGE
   ========================================================= */

export default function JioJourneyPage() {
  return (
    <PageWrapper>
      {/* Page hero — title, Jio logo, sub-quote */}
      <JioJourneyHero />

      {/* Full narrative — 4 paragraphs, exact content */}
      <JioJourneyNarrative />

      {/* Editorial photo gallery */}
      <JioJourneyGallery />

      {/* Back to About + Contact CTAs */}
      <JioJourneyBackCTA />
    </PageWrapper>
  );
}
