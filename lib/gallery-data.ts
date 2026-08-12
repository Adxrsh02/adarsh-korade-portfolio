import type { GalleryItemData, GalleryFilterOption } from "@/types/gallery";

/* =========================================================
   GALLERY FILTER OPTIONS
   ========================================================= */

export const GALLERY_FILTERS: GalleryFilterOption[] = [
  { id: "all", label: "All Moments", count: 16 },
  { id: "leadership", label: "Leadership & E-Cell", count: 6 },
  { id: "jio", label: "Jio Professional", count: 4 },
  { id: "events", label: "Events & Sprints", count: 3 },
  { id: "achievements", label: "Achievements & Certs", count: 3 },
];

/* =========================================================
   FEATURED EDITORIAL MOMENTS
   Primary hero and spotlight stories.
   ========================================================= */

export const HERO_FEATURED_ITEM: GalleryItemData = {
  id: "hero-creatives-team",
  title: "E-Cell Executive Leadership Team",
  category: "leadership",
  categoryLabel: "LEADERSHIP & E-CELL",
  image: "/Section_images/leadership/Creatives_theme_photo.jpg",
  aspectRatio: "wide",
  heroFeatured: true,
  date: "2023 - 2024",
  location: "SIES GST Auditorium, Navi Mumbai",
  description:
    "Adarsh Korade leading the E-Cell Creatives & Executive Committee team during the flagship Entrepreneurship Summit planning and theme launch.",
  tags: ["Leadership", "E-Cell Chairperson", "Teamwork", "Event Strategy"],
  alt: "Adarsh Korade with E-Cell Creatives & Leadership team at SIES GST Auditorium",
};

export const FEATURED_SPOTLIGHT_ITEM: GalleryItemData = {
  id: "spotlight-stage-keynote",
  title: "Keynote Address at E-Cell DA Creativity Summit",
  category: "leadership",
  categoryLabel: "LEADERSHIP & EVENTS",
  image: "/Section_images/leadership/Event_da_creativeity_Stage_Photo.jpg",
  aspectRatio: "wide",
  featured: true,
  date: "Annual Summit",
  location: "Main Stage Auditorium, SIES GST",
  description:
    "Presiding as Overall Chairperson over the DA Creativity flagship summit, addressing 500+ student founders, industry mentors, and delegates.",
  tags: ["Public Speaking", "Keynote", "Entrepreneurship", "Stage Address"],
  alt: "Adarsh Korade giving a keynote speech on stage at E-Cell DA Creativity Summit",
};

/* =========================================================
   GALLERY ITEMS DATASET
   All 16 real project assets with verified image paths.
   ========================================================= */

export const GALLERY_ITEMS: GalleryItemData[] = [
  HERO_FEATURED_ITEM,
  FEATURED_SPOTLIGHT_ITEM,
  {
    id: "jio-team-sprint",
    title: "Jio Platforms AI & Data Engineering Team",
    category: "jio",
    categoryLabel: "JIO PROFESSIONAL",
    image: "/Section_images/About/Jio Section/Jio_Team_Photo.jpg",
    aspectRatio: "wide",
    date: "2024 - Present",
    location: "Reliance Corporate Park, Navi Mumbai",
    description:
      "Collaborative moments with fellow data engineers, ML researchers, and product managers at Jio Platforms Limited.",
    tags: ["Jio Platforms", "Engineering Team", "Corporate Experience", "Data AI"],
    alt: "Adarsh Korade with Jio Platforms AI and Data Engineering team",
  },
  {
    id: "jio-conference-room",
    title: "Technical Brainstorming in Jio Conference Suite",
    category: "jio",
    categoryLabel: "JIO PROFESSIONAL",
    image: "/Section_images/About/Jio Section/Confernce_room_working.jpg",
    aspectRatio: "standard",
    date: "2024",
    location: "TC23 Building, Reliance Corporate Park",
    description:
      "Deep technical architectural review and RAG pipeline debugging session inside the Jio TC23 engineering conference room.",
    tags: ["Technical Review", "Sprint", "Jio Corporate", "Architecture"],
    alt: "Adarsh Korade working in a technical conference room at Jio TC23 building",
  },
  {
    id: "jio-tc23-campus",
    title: "Jio TC23 Tech Campus Architecture",
    category: "jio",
    categoryLabel: "JIO PROFESSIONAL",
    image: "/Section_images/About/Jio Section/Building_TC23_Image.jpg",
    aspectRatio: "wide",
    date: "2024",
    location: "TC23 Complex, Navi Mumbai",
    description:
      "The flagship TC23 technology facility at Reliance Corporate Park where core enterprise AI and data pipelines are built.",
    tags: ["TC23 Campus", "Corporate Headquarters", "Reliance Corporate Park"],
    alt: "Exterior facade of Jio TC23 Tech Campus building",
  },
  {
    id: "jio-park-mandir",
    title: "Radha Krishna Mandir at Jio Tech Campus",
    category: "jio",
    categoryLabel: "JIO PROFESSIONAL",
    image: "/Section_images/About/Jio Section/Radha_Krishna_mandir_jio_campus.jpg",
    aspectRatio: "standard",
    date: "2024",
    location: "Reliance Corporate Park, Navi Mumbai",
    description:
      "The peaceful campus grounds and cultural landmark surrounding the Jio tech campus complex.",
    tags: ["Campus Life", "Environment", "Reliance Corporate Park"],
    alt: "Radha Krishna Mandir landmark within Jio Reliance Corporate Park campus",
  },
  {
    id: "lamp-lighting-ceremony",
    title: "Lamp Lighting Ceremony at SIES GST E-Cell Summit",
    category: "leadership",
    categoryLabel: "LEADERSHIP & E-CELL",
    image: "/Section_images/leadership/Lamp_lightning_cermony.jpeg",
    aspectRatio: "standard",
    date: "Annual Summit",
    location: "SIES GST Auditorium",
    description:
      "Inaugurating the annual Entrepreneurship Summit alongside faculty advisors and chief guests during the traditional lamp lighting ceremony.",
    tags: ["Inauguration", "Lamp Lighting", "E-Cell Chairperson", "Summit"],
    alt: "Adarsh Korade performing the lamp lighting inauguration ceremony at E-Cell Summit",
  },
  {
    id: "stage-panel-guests",
    title: "Stage Panel Discussion with Guests & Faculty",
    category: "leadership",
    categoryLabel: "LEADERSHIP & E-CELL",
    image: "/Section_images/leadership/Siting_on_Stage_with_guest_E-cell_maam.jpeg",
    aspectRatio: "standard",
    date: "Annual Summit",
    location: "SIES GST Main Stage",
    description:
      "Hosting distinguished industry leaders, faculty advisors, and keynote guests on stage during the E-Cell panel session.",
    tags: ["Panel Moderation", "Faculty Collaboration", "Industry Guests"],
    alt: "Adarsh Korade seated on stage with distinguished guests and faculty at E-Cell event",
  },
  {
    id: "ecell-team-ending",
    title: "E-Cell Executive Team Closing Celebration",
    category: "leadership",
    categoryLabel: "LEADERSHIP & E-CELL",
    image: "/Section_images/leadership/Team_Photo_End.jpg",
    aspectRatio: "wide",
    date: "Tenure Conclusion",
    location: "SIES GST Campus",
    description:
      "Celebrating the successful culmination of a 1-year tenure as E-Cell Overall Chairperson with the entire executive organizing committee.",
    tags: ["Team Celebration", "Tenure Milestone", "E-Cell Committee"],
    alt: "Adarsh Korade with the full E-Cell team celebration group photo",
  },
  {
    id: "leadership-collaboration-gaurish",
    title: "Peer Leadership & Strategy Session",
    category: "leadership",
    categoryLabel: "LEADERSHIP & E-CELL",
    image: "/Section_images/leadership/Phtoto_with_Gaurish.jpeg",
    aspectRatio: "portrait",
    date: "2023",
    location: "Campus Grounds",
    description:
      "Strategic alignment session with key student leadership partner Gaurish for event operations and ecosystem outreach.",
    tags: ["Peer Leadership", "Strategy", "Collaboration"],
    alt: "Adarsh Korade collaborating with peer leader Gaurish",
  },
  {
    id: "my-engineering-journey",
    title: "Career & Technical Growth Overview",
    category: "events",
    categoryLabel: "EVENTS & SPRINTS",
    image: "/Section_images/About/My_journey_section.jpg",
    aspectRatio: "wide",
    date: "2021 - 2026",
    location: "Navi Mumbai, India",
    description:
      "Visual trajectory detailing the milestones from computer science engineering undergraduate studies to AI & Data Engineering at Jio Platforms.",
    tags: ["Career Path", "Engineering Journey", "Milestones"],
    alt: "Overview image illustrating Adarsh Korade's career and engineering trajectory",
  },
  {
    id: "ecell-chairperson-certificate",
    title: "E-Cell Overall Chairperson Completion Certificate",
    category: "achievements",
    categoryLabel: "ACHIEVEMENTS & CERTS",
    image: "/Section_images/About/Certificates/E-cell_Chairperson_Complition_Certificate.png",
    aspectRatio: "standard",
    date: "2023 - 2024",
    location: "SIES GST Entrepreneurship Cell",
    description:
      "Official certificate of excellence honoring Adarsh Korade's leadership tenure as Overall Chairperson of SIES GST Entrepreneurship Cell.",
    tags: ["Certificate", "Leadership Honors", "E-Cell Chairperson"],
    alt: "Official Certificate of Completion for E-Cell Overall Chairperson tenure",
  },
  {
    id: "codezen-hackathon-cert",
    title: "CodeZen National Hackathon Team Winner Certificate",
    category: "achievements",
    categoryLabel: "ACHIEVEMENTS & CERTS",
    image: "/Section_images/About/Certificates/HackeThon_CodeZen_Team_certificate.jpg",
    aspectRatio: "standard",
    date: "National Hackathon",
    location: "CodeZen Hackathon",
    description:
      "Award certificate recognizing Adarsh Korade and team for building an innovative software solution during the CodeZen hackathon.",
    tags: ["Hackathon Winner", "CodeZen", "Team Achievement"],
    alt: "CodeZen Hackathon Team Winner Certificate of Achievement",
  },
  {
    id: "power-bi-certification",
    title: "Power BI Data Visualization Certification",
    category: "achievements",
    categoryLabel: "ACHIEVEMENTS & CERTS",
    image: "/Section_images/About/Certificates/Power_BI_Certificate.jpg",
    aspectRatio: "standard",
    date: "Professional Cert",
    location: "Data Engineering",
    description:
      "Professional certification credential for data analytics, interactive dashboarding, and Business Intelligence modeling.",
    tags: ["Power BI", "Data Analytics", "Certification"],
    alt: "Power BI Professional Certification Document",
  },
  {
    id: "retinal-ai-research-heatmap",
    title: "Published Retinal Disease AI Research Heatmap",
    category: "events",
    categoryLabel: "EVENTS & SPRINTS",
    image: "/Section_images/Projects/Automated_fundus_screening_project/retinal_Attention_heatmap_compare_Fundu_image_4.jpg",
    aspectRatio: "wide",
    date: "Research Paper",
    location: "Medical AI Lab",
    description:
      "Attention heatmap output comparison from Adarsh Korade's published research on Deep Learning automated fundus image screening.",
    tags: ["Research Paper", "Medical AI", "Deep Learning", "Attention Map"],
    alt: "Retinal attention heatmap comparison image from published AI research paper",
  },
  {
    id: "leadership-portrait-milestone",
    title: "Leadership Milestone Portrait",
    category: "events",
    categoryLabel: "EVENTS & SPRINTS",
    image: "/Section_images/leadership/Personal_photo_1.jpeg",
    aspectRatio: "portrait",
    date: "2024",
    location: "Navi Mumbai",
    description:
      "Personal leadership milestone portrait captured during senior executive tenure at SIES GST.",
    tags: ["Portrait", "Personal Milestone", "Leadership"],
    alt: "Adarsh Korade professional portrait during leadership tenure",
  },
];
