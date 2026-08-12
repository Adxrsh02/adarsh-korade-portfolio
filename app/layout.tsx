import type { Metadata } from "next";
import { inter, fontVariables } from "@/lib/fonts";
import { SITE_CONFIG } from "@/lib/constants";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/navigation/BackToTop";
import { SkipLink } from "@/components/ui/SkipLink";
import { LenisProvider } from "@/components/providers/LenisProvider";
import "@/app/globals.css";

/* =========================================================
   ROOT METADATA
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.creator,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: `@${SITE_CONFIG.creator.toLowerCase().replace(" ", "")}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={fontVariables}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className={inter.className}>
        {/* Accessibility: skip to main content */}
        <SkipLink />

        {/* Fixed navigation */}
        <Navbar />

        {/* Smooth scroll wrapper */}
        <LenisProvider>
          {children}
        </LenisProvider>

        {/* Global footer */}
        <Footer />

        {/* Floating back-to-top button */}
        <BackToTop />
      </body>
    </html>
  );
}
