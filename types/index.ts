/* =========================================================
   SHARED TYPE DEFINITIONS
   All interfaces referenced throughout the codebase.
   ========================================================= */

/* -------------------------------------------------------
   NAVIGATION
------------------------------------------------------- */

/** A single navigation link item */
export interface NavItem {
  label: string;
  href: string;
  /** Optionally mark as external link (opens in new tab) */
  external?: boolean;
}

/** A navigation column used in the footer */
export interface FooterNavColumn {
  heading: string;
  links: Pick<NavItem, "label" | "href" | "external">[];
}

/** Content for the footer CTA banner (Layer 1) */
export interface FooterCTAContent {
  heading: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  tertiaryCTA: { label: string; href: string };
}

/** Availability status and current focus areas (Layer 3) */
export interface FooterAvailabilityData {
  statuses: readonly string[];
  currentFocus: readonly string[];
}

/** Brand identity data for the footer brand column */
export interface FooterBrandData {
  name: string;
  title: string;
  description: string;
  location: string;
  responseTime: string;
}

/* -------------------------------------------------------
   SOCIAL LINKS
------------------------------------------------------- */

export type SocialIconName = "github" | "linkedin" | "pinterest" | "twitter" | "instagram" | "email";

export interface SocialLink {
  label: string;
  href: string;
  /** Icon identifier for the icon component */
  icon: SocialIconName;
  ariaLabel: string;
}

/* -------------------------------------------------------
   COMPONENT VARIANTS
------------------------------------------------------- */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type BadgeVariant = "default" | "accent" | "outline";
export type BadgeSize = "sm" | "md";

export type CardVariant = "default" | "interactive";
export type CardPadding = "sm" | "md" | "lg";

export type SectionBackground = "white" | "alt" | "accent";

/* -------------------------------------------------------
   LAYOUT
------------------------------------------------------- */

export type ContainerVariant = "default" | "wide" | "narrow";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/* -------------------------------------------------------
   LANDING PAGE
------------------------------------------------------- */

export interface LandingSectionConfig {
  id: string;
  label: string | null;
  heading: string | null;
  description?: string;
}

/* -------------------------------------------------------
   SERVICES (re-export from services.ts)
------------------------------------------------------- */

export type {
  ServiceOverview,
  WorkflowStep,
  CaseStudy,
  ServiceData,
  ProcessStep,
  TechCategory,
  ValueProposition,
} from "./services";

/* -------------------------------------------------------
   PROJECTS (re-export from projects.ts)
------------------------------------------------------- */

export type {
  ProjectData,
  ProjectTechStack,
  PerformanceMetrics,
  PerformanceMetricRow,
  ProjectScreenshot,
  ResearchPublication,
  ChallengeSolution,
  ProjectStatus,
  DifficultyLevel,
  ProjectCategory,
} from "./projects";

/* -------------------------------------------------------
   ABOUT (re-export from about.ts)
------------------------------------------------------- */

export type {
  ExperienceEntry,
  ExperienceRole,
  EducationEntry,
  CertificationEntry,
  HackathonEntry,
  JioJourneyParagraph,
  JioJourneyPhoto,
} from "./about";

/* -------------------------------------------------------
   LEADERSHIP (re-export from leadership.ts)
------------------------------------------------------- */

export type {
  LeadershipTimelineEntry,
  LeadershipLessonEntry,
  LeadershipEventCard,
  LeadershipLinks,
} from "./leadership";

/* -------------------------------------------------------
   GALLERY (re-export from gallery.ts)
------------------------------------------------------- */

export type {
  GalleryCategory,
  GalleryFilterOption,
  GalleryAspect,
  GalleryItemData,
  LightboxState,
} from "./gallery";

/* -------------------------------------------------------
   BLOGS (re-export from blogs.ts)
------------------------------------------------------- */

export type {
  BlogCategorySlug,
  BlogCategory,
  BlogPostStatus,
  BlogAuthor,
  BlogPostSEO,
  BlogPost,
  BlogFilterOptions,
} from "./blogs";


