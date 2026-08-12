import type {
  LeadershipTimelineEntry,
  LeadershipLessonEntry,
  LeadershipEventCard,
  LeadershipLinks,
} from "@/types";

/* =========================================================
   LEADERSHIP PAGE DATA
   Single source of truth for all Leadership page content.
   Content sourced directly from Adarsh_Implementation Files/leadership.md
   ========================================================= */

/* -------------------------------------------------------
   TIMELINE — The 3-Role Progression
------------------------------------------------------- */

export const LEADERSHIP_TIMELINE: LeadershipTimelineEntry[] = [
  {
    year: "2023",
    role: "Social Media Volunteer",
    description:
      "I joined the Social Media team and started understanding how an organisation actually works behind the scenes. I learned that even the smallest task matters when you are part of a bigger team.",
  },
  {
    year: "2024–25",
    role: "Outreach Lead",
    description:
      "Outreach wasn't just about sending messages. It meant communicating with different stakeholders, building connections, coordinating with teams, and making sure things kept moving. I became more confident in taking ownership instead of waiting for someone else.",
  },
  {
    year: "2025–26",
    role: "Chairperson",
    description:
      "Suddenly, I wasn't responsible for only one domain. Events, Outreach, Marketing, Social Media, Operations, Creatives, Finance, Partnerships — everything had to work together. My role was to bring everyone together, help remove blockers, make decisions when required, and keep the entire team moving in the same direction.",
  },
] as const;

/* -------------------------------------------------------
   EVENTS — E-Cell Event Cards
------------------------------------------------------- */

export const LEADERSHIP_EVENTS: LeadershipEventCard[] = [
  {
    name: "BIZENCE'24",
    tagline: "From an idea to an actual hackathon.",
    type: "Hackathon",
    linkedinUrl: undefined, // No dedicated post link in source
  },
  {
    name: "Mumbai Matrix 2025",
    tagline: "A bigger scale. A bigger responsibility.",
    type: "Startup Expo",
    linkedinUrl: undefined, // Link in source appears broken — omitted
  },
  {
    name: "PitchCraft 2025",
    tagline: "Ideas, people and execution.",
    type: "Pitching Event",
    linkedinUrl:
      "https://www.linkedin.com/posts/edcsiesgst_pitchcraft2025-entrepreneurship-innovation-activity-7362499091160780800-RZxS",
  },
  {
    name: "BIZENCE 2026",
    tagline: "Where Decisions Defined Destiny.",
    type: "Startup Simulation",
    linkedinUrl:
      "https://www.linkedin.com/posts/edcsiesgst_bizence2026-entrepreneurship-startupsimulation-activity-7437882987154890752-zv9F",
  },
] as const;

/* -------------------------------------------------------
   LESSONS — What E-Cell Taught Me
------------------------------------------------------- */

export const LEADERSHIP_LESSONS: LeadershipLessonEntry[] = [
  {
    number: "01",
    title: "Ownership",
    description:
      "Taking responsibility instead of waiting for someone else to solve it.",
  },
  {
    number: "02",
    title: "Communication",
    description:
      "Learning to listen, speak clearly and work with different people.",
  },
  {
    number: "03",
    title: "Teamwork",
    description: "Understanding that great things are built together.",
  },
  {
    number: "04",
    title: "Decision Making",
    description: "Making decisions even when everything isn't perfectly clear.",
  },
  {
    number: "05",
    title: "Leadership",
    description:
      "Learning that leadership isn't about being above people — it's about standing with them.",
  },
] as const;

/* -------------------------------------------------------
   LINKS — All E-Cell LinkedIn URLs
------------------------------------------------------- */

export const LEADERSHIP_LINKS: LeadershipLinks = {
  ecellLinkedin: "https://www.linkedin.com/company/edcsiesgst/",
  bizence2026Post:
    "https://www.linkedin.com/posts/edcsiesgst_bizence2026-entrepreneurship-startupsimulation-activity-7437882987154890752-zv9F",
  pitchCraft2025Post:
    "https://www.linkedin.com/posts/edcsiesgst_pitchcraft2025-entrepreneurship-innovation-activity-7362499091160780800-RZxS",
  // Mumbai Matrix 2025 link omitted — source URL appears broken
  gaurish: "https://www.linkedin.com/in/gaurishkale16/",
} as const;

/* -------------------------------------------------------
   IMAGES — Semantic paths to public/images/leadership/
------------------------------------------------------- */

export const LEADERSHIP_IMAGES = {
  hero: "/images/leadership/personal-hero.jpeg",
  creativesTheme: "/images/leadership/creatives-theme.jpg",
  eventStageSetup: "/images/leadership/event-stage-setup.jpg",
  lampLighting: "/images/leadership/lamp-lighting.jpeg",
  coreTeamGaurish: "/images/leadership/core-team-gaurish.jpeg",
  photoWithGaurish: "/images/leadership/photo-with-gaurish.jpeg",
  onStagePanel: "/images/leadership/on-stage-panel.jpeg",
  teamFinal: "/images/leadership/team-final.jpg",
} as const;
