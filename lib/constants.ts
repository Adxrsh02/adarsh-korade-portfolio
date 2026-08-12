import type {
  NavItem,
  SocialLink,
  FooterNavColumn,
  FooterCTAContent,
  FooterAvailabilityData,
  FooterBrandData,
} from "@/types";

/* =========================================================
   SITE METADATA
   ========================================================= */

export const SITE_CONFIG = {
  name: "Adarsh Korade",
  title: "Adarsh Korade — Software Engineer & Product Builder",
  description:
    "Personal portfolio of Adarsh Korade — Software Engineer, Product Builder, and Community Leader building elegant, high-performance digital products.",
  url: "https://adarshkorade.com", // Update with actual URL before deployment
  ogImage: "/images/og-image.png",
  keywords: [
    "Adarsh Korade",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Product Builder",
    "Portfolio",
  ],
  author: "Adarsh Korade",
  creator: "Adarsh Korade",
} as const;

/* =========================================================
   RESUME
   Single source of truth — update this path whenever the
   CV file changes. Every download button reads from here.
   ========================================================= */

export const RESUME_PATH = "/resume/Adarsh_Korade_CV.pdf" as const;

/* =========================================================
   NAVIGATION ITEMS
   ========================================================= */

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Leadership", href: "/leadership" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adarshkorade/",
    icon: "linkedin",
    ariaLabel: "Connect with Adarsh Korade on LinkedIn (opens in new tab)",
  },
  {
    label: "GitHub",
    href: "https://github.com/Adxrsh02",
    icon: "github",
    ariaLabel: "Visit Adarsh Korade's GitHub profile (opens in new tab)",
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/Addarrshhh/",
    icon: "pinterest",
    ariaLabel: "Visit Adarsh Korade's Pinterest profile (opens in new tab)",
  },
  {
    label: "Email",
    href: "mailto:adarshkorade2004@gmail.com",
    icon: "email",
    ariaLabel: "Send an email to Adarsh Korade",
  },
];

/* =========================================================
   FOOTER — CTA BANNER (Layer 1)
   ========================================================= */

export const FOOTER_CTA: FooterCTAContent = {
  heading: "Let's Build Something Amazing Together.",
  description:
    "Whether you're building an AI-powered product, a scalable web application, or an enterprise data platform — I'd love to help bring your ideas to life with modern technologies and thoughtful engineering.",
  primaryCTA: { label: "Contact Me", href: "/contact" },
  secondaryCTA: { label: "View My Resume", href: RESUME_PATH },
  tertiaryCTA: { label: "View Projects", href: "/projects" },
} as const;

/* =========================================================
   FOOTER — BRAND IDENTITY (Layer 2, Column 1)
   ========================================================= */

export const FOOTER_BRAND: FooterBrandData = {
  name: "Adarsh Korade",
  title: "AI Engineer • Data Engineer • Full Stack Developer",
  description:
    "I design and build intelligent software powered by Generative AI, Data Engineering, and modern web technologies — creating scalable, production-ready solutions that solve real business problems.",
  location: "Navi Mumbai, Maharashtra, India",
  responseTime: "Typically replies within 24 hours",
} as const;

/* =========================================================
   FOOTER — NAVIGATION COLUMNS (Layer 2, Columns 2–5)
   ========================================================= */

export const FOOTER_NAV_COLUMNS: FooterNavColumn[] = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Leadership", href: "/leadership" },
      { label: "Projects", href: "/projects" },
      { label: "Blogs", href: "/blogs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Generative AI Apps", href: "/services" },
      { label: "AI Agents & Automation", href: "/services" },
      { label: "RAG Systems", href: "/services" },
      { label: "Full Stack Development", href: "/services" },
      { label: "Data Engineering", href: "/services" },
      { label: "Custom Software", href: "/services" },
      { label: "Portfolio & Branding", href: "/services" },
      { label: "Technical Consulting", href: "/services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        label: "Resume",
        href: RESUME_PATH,
        external: true,
      },
      { label: "Case Studies", href: "/blogs" },
      { label: "Open Source", href: "https://github.com/Adxrsh02", external: true },
      { label: "Research", href: "/blogs" },
      { label: "Technical Blogs", href: "/blogs" },
      {
        label: "GitHub",
        href: "https://github.com/Adxrsh02",
        external: true,
      },
    ],
  },
];

/* =========================================================
   FOOTER — CONNECT COLUMN CONTACT LINKS (Layer 2, Column 5)
   Used separately from FOOTER_NAV_COLUMNS to allow special
   rendering with icons and response time metadata.
   ========================================================= */

export const FOOTER_CONNECT_LINKS = [
  {
    label: "adarshkorade2004@gmail.com",
    href: "mailto:adarshkorade2004@gmail.com",
    icon: "email",
    ariaLabel: "Send an email to Adarsh Korade",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/adarshkorade/",
    icon: "linkedin",
    ariaLabel: "Connect on LinkedIn (opens in new tab)",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Adxrsh02",
    icon: "github",
    ariaLabel: "View GitHub profile (opens in new tab)",
    external: true,
  },
  {
    label: "Pinterest",
    href: "https://in.pinterest.com/Addarrshhh/",
    icon: "pinterest",
    ariaLabel: "Explore visual archive on Pinterest (opens in new tab)",
    external: true,
  },
] as const;

/* =========================================================
   FOOTER — AVAILABILITY STRIP (Layer 3)
   ========================================================= */

export const FOOTER_AVAILABILITY: FooterAvailabilityData = {
  statuses: [
    "Open for Full-Time Opportunities",
    "Available for Freelance Projects",
  ],
  currentFocus: [
    "Generative AI",
    "AI Agents",
    "RAG Systems",
    "Full Stack Apps",
  ],
} as const;

/* =========================================================
   LANDING PAGE SECTIONS (for page.tsx skeleton)
   ========================================================= */

export const LANDING_SECTIONS = [
  {
    id: "hero",
    label: null, // Hero doesn't use SectionLabel
    heading: null, // Hero has its own custom layout
  },
  {
    id: "about",
    label: "About Me",
    heading: "Who I Am",
    description: "A brief introduction to my story, background, and values.",
  },
  {
    id: "services",
    label: "What I Do",
    heading: "Services & Expertise",
    description: "A curated overview of the technical and creative services I offer.",
  },
  {
    id: "experience",
    label: "Experience",
    heading: "Professional Journey",
    description: "Key milestones from my career in software engineering and product development.",
  },
  {
    id: "projects",
    label: "Featured Work",
    heading: "Selected Projects",
    description: "A showcase of projects that reflect my technical depth and design sensibility.",
  },
  {
    id: "leadership",
    label: "Leadership & Community",
    heading: "Building Beyond Code",
    description: "My contributions to communities, events, and the startup ecosystem.",
  },
  {
    id: "blogs",
    label: "Writing",
    heading: "Latest Insights",
    description: "Thoughts on engineering, design, business, and the craft of building things.",
  },
  {
    id: "contact",
    label: "Let's Connect",
    heading: "Work With Me",
    description: "Open to new opportunities, collaborations, and conversations.",
  },
] as const;

/* =========================================================
   SCROLL THRESHOLD
   ========================================================= */

/** Scroll distance (px) before navbar turns solid */
export const NAVBAR_SCROLL_THRESHOLD = 50;

/** Scroll distance (px) before BackToTop button appears */
export const BACK_TO_TOP_THRESHOLD = 500;

/* =========================================================
   HERO SECTION
   ========================================================= */

/**
 * Role labels cycled in the Hero role rotation animation.
 * Order matters — AI Engineer is shown first as the primary identity.
 */
export const HERO_ROLES = [
  "AI Engineer",
  "Data Engineer",
  "Full Stack Developer",
  "Generative AI Engineer",
] as const;

export type HeroRole = (typeof HERO_ROLES)[number];
