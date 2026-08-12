/* =========================================================
   LEADERSHIP PAGE TYPE DEFINITIONS
   ========================================================= */

/**
 * A single entry in the leadership progression timeline.
 * Three entries total: Volunteer → Outreach Lead → Chairperson.
 */
export interface LeadershipTimelineEntry {
  /** Display year / year range e.g. "2023" or "2024–25" */
  year: string;
  /** Role title */
  role: string;
  /** Short narrative description (1–2 sentences) */
  description: string;
}

/**
 * A single leadership lesson from the "What E-Cell Taught Me" section.
 */
export interface LeadershipLessonEntry {
  /** Zero-padded number string e.g. "01", "02" */
  number: string;
  /** Lesson title e.g. "Ownership" */
  title: string;
  /** One-line description of the lesson */
  description: string;
}

/**
 * An E-Cell event card shown in the Bizence Showcase section.
 */
export interface LeadershipEventCard {
  /** Event display name e.g. "BIZENCE'24" */
  name: string;
  /** Short tagline e.g. "From an idea to an actual hackathon" */
  tagline: string;
  /** Event type label e.g. "Hackathon", "Startup Expo" */
  type: string;
  /** Optional LinkedIn post URL (opens in new tab) */
  linkedinUrl?: string;
}

/**
 * Named LinkedIn URLs used throughout the Leadership page.
 */
export interface LeadershipLinks {
  ecellLinkedin: string;
  bizence2026Post: string;
  pitchCraft2025Post: string;
  mumbaiMatrix2025Post?: string;
  /** Gaurish Kale's personal LinkedIn profile */
  gaurish?: string;
}

