/* =========================================================
   ABOUT PAGE — TYPE DEFINITIONS
   All interfaces referenced throughout About page components.
   ========================================================= */

/* -------------------------------------------------------
   EXPERIENCE
------------------------------------------------------- */

export interface ExperienceRole {
  title: string;
  type?: string; // "Internship" | "Full-time"
  startDate: string;
  endDate: string;
  duration: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  companyLinkedIn: string;
  logoSrc: string;
  logoAlt: string;
  location: string;
  locationType: string; // "On-site" | "Remote" | "Hybrid"
  /** Single role or most recent when multi-role */
  primaryRole: ExperienceRole;
  /** Additional sub-roles for progressive entries (E-Cell) */
  additionalRoles?: ExperienceRole[];
  /** Bullet point responsibilities */
  responsibilities?: string[];
  /** Skills/technologies */
  skills: string[];
  /** Certificate reference if any */
  certificatePath?: string;
  certificateLabel?: string;
}

/* -------------------------------------------------------
   EDUCATION
------------------------------------------------------- */

export interface EducationEntry {
  id: string;
  institution: string;
  institutionLinkedIn?: string;
  logoSrc?: string;
  logoAlt?: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  grade?: string;
  activities?: string;
  skills?: string[];
  university?: string; // Affiliated university
}

/* -------------------------------------------------------
   CERTIFICATIONS
------------------------------------------------------- */

export interface CertificationEntry {
  id: string;
  name: string;
  issuer: string;
  issuerLogoSrc?: string;
  issuedDate: string;
  credentialId?: string;
  /** For image certs (.jpg/.png) — shown in lightbox */
  imageSrc?: string;
  imageAlt?: string;
  /** For PDF certs — direct browser link */
  pdfPath?: string;
  /** External credential link (e.g. Credly) */
  credentialUrl?: string;
  skills: string[];
}

/* -------------------------------------------------------
   HACKATHON
------------------------------------------------------- */

export interface HackathonEntry {
  id: string;
  teamName: string;
  eventName: string;
  organizer: string;
  venue: string;
  projectName: string;
  description: string;
  features: string[];
  certificateSrc: string;
  certificateAlt: string;
}

/* -------------------------------------------------------
   JIO JOURNEY
------------------------------------------------------- */

export interface JioJourneyParagraph {
  id: string;
  text: string;
}

export interface JioJourneyPhoto {
  src: string;
  alt: string;
  caption?: string;
  layout: "feature" | "half" | "wide";
}
