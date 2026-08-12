/* =========================================================
   SERVICES — TYPE DEFINITIONS
   ========================================================= */

/* -------------------------------------------------------
   CORE SERVICE TYPES
------------------------------------------------------- */

export interface ServiceOverview {
  summary: string;
  details: string[];
}

export interface WorkflowStep {
  step: number;
  label: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  industry: string;
  technologies: string[];
  href: string;
  comingSoon?: boolean;
}

export interface ServiceData {
  id: string;               // URL-safe slug
  number: string;           // "01" – "11"
  title: string;
  tagline: string;
  icon: string;             // Lucide icon name
  imageSrc: string;         // Path in /public/images/services/
  imageAlt: string;
  overview: ServiceOverview;
  technologies: string[];
  workflow: WorkflowStep[];
  deliverables: string[];
  caseStudies: CaseStudy[];
}

/* -------------------------------------------------------
   PROCESS TIMELINE
------------------------------------------------------- */

export interface ProcessStep {
  step: number;
  label: string;
  icon: string;             // Lucide icon name
  description: string;
}

/* -------------------------------------------------------
   TECHNOLOGIES SECTION
------------------------------------------------------- */

export interface TechCategory {
  name: string;
  technologies: string[];
}

/* -------------------------------------------------------
   VALUE PROPOSITIONS (Why Work With Me)
------------------------------------------------------- */

export interface ValueProposition {
  number: string;           // "01" – "06"
  title: string;
  description: string;
  icon: string;             // Lucide icon name
}
