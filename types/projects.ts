/* =========================================================
   PROJECT TYPES
   Complete type definitions for the Projects section.
   ========================================================= */

/* -------------------------------------------------------
   TECHNOLOGY STACK
------------------------------------------------------- */

export interface ProjectTechStack {
  frontend?: string[];
  backend?: string[];
  languages?: string[];
  database?: string[];
  aiMl?: string[];
  dataEngineering?: string[];
  cloud?: string[];
  deployment?: string[];
  tools?: string[];
}

/* -------------------------------------------------------
   PERFORMANCE METRICS
------------------------------------------------------- */

export interface PerformanceMetricRow {
  label: string;
  values: string[];
  isBest?: boolean;
}

export interface PerformanceMetrics {
  headers: string[];
  rows: PerformanceMetricRow[];
}

/* -------------------------------------------------------
   SCREENSHOTS
------------------------------------------------------- */

export interface ProjectScreenshot {
  path: string;
  caption: string;
}

/* -------------------------------------------------------
   RESEARCH PUBLICATION
------------------------------------------------------- */

export interface ResearchPublication {
  title: string;
  domain: string[];
  abstract: string;
  publicationDetailsImagePath?: string;
  paperPdfPath?: string;
  pptPdfPath?: string;
}

/* -------------------------------------------------------
   CHALLENGES & SOLUTIONS
------------------------------------------------------- */

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

/* -------------------------------------------------------
   PROJECT STATUS & TYPES
------------------------------------------------------- */

export type ProjectStatus =
  | "Completed"
  | "Completed & Live"
  | "In Progress"
  | "Live"
  | "Research";

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced";

/* -------------------------------------------------------
   MAIN PROJECT DATA TYPE
------------------------------------------------------- */

export interface ProjectData {
  // Identity
  slug: string;
  title: string;
  tagline: string;
  categories: string[];
  isFeatured: boolean;
  difficultyLevel?: DifficultyLevel;

  // Metadata
  status: ProjectStatus;
  role: string;
  organization: string;
  industry: string;
  duration: string;
  teamSize: string;
  projectType: string;

  // Technical
  techStack: ProjectTechStack;

  // Content Sections
  portfolioDescription: string;
  businessProblem: string;
  projectObjective: string;
  targetUsers: string[];
  keyFeatures: string[];

  // Architecture
  architectureDiagramPath?: string;
  architectureDescription?: string;
  workflowSteps: Array<{ step: string; description?: string }>;

  // Performance
  performanceMetrics?: PerformanceMetrics;

  // Media
  thumbnailPath: string;
  screenshots: ProjectScreenshot[];
  videoDemoUrl?: string;

  // Research (conditional)
  research?: ResearchPublication;

  // Engineering Reflection
  challenges?: ChallengeSolution[];
  lessonsLearned?: string[];
  futureImprovements?: string[];

  // Links
  githubUrl?: string;
  liveDemoUrl?: string;
  documentationUrl?: string;
  version?: string;
  lastUpdated?: string;
}

/* -------------------------------------------------------
   CATEGORY CONFIG
------------------------------------------------------- */

export interface ProjectCategory {
  label: string;
  slug: string;
}
