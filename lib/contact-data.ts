import type { ContactInfoItem } from "@/types/contact";

/* =========================================================
   CONTACT PAGE — STATIC DATA
   Single source of truth for all contact page content.
   ========================================================= */

/** Personal contact information */
export const CONTACT_INFO = {
  email: "adarshkorade2004@gmail.com",
  phone: "+91 9004892091",
  phoneRaw: "+919004892091",
  linkedin: "https://www.linkedin.com/in/adarshkorade/",
  linkedinDisplay: "linkedin.com/in/adarshkorade",
  github: "https://github.com/Adxrsh02",
  githubDisplay: "github.com/Adxrsh02",
  githubUsername: "Adxrsh02",
  pinterest: "https://in.pinterest.com/Addarrshhh/",
  pinterestDisplay: "pinterest.com/Addarrshhh",
  location: "Maharashtra, India",
} as const;

/** Subject dropdown options */
export const SUBJECT_OPTIONS = [
  { value: "", label: "Select a topic (optional)" },
  { value: "project-collaboration", label: "Project Collaboration" },
  { value: "freelance-work", label: "Freelance Work" },
  { value: "job-opportunity", label: "Job Opportunity" },
  { value: "technical-consulting", label: "Technical Consulting" },
  { value: "speaking-workshop", label: "Speaking / Workshop" },
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "other", label: "Other" },
] as const;

/** Contact info cards for the sidebar */
export const CONTACT_INFO_ITEMS: ContactInfoItem[] = [
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: CONTACT_INFO.email,
    displayValue: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    id: "phone",
    icon: "phone",
    label: "Phone",
    value: CONTACT_INFO.phone,
    displayValue: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phoneRaw}`,
  },
  {
    id: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    value: CONTACT_INFO.linkedinDisplay,
    displayValue: CONTACT_INFO.linkedinDisplay,
    href: CONTACT_INFO.linkedin,
    external: true,
  },
  {
    id: "github",
    icon: "github",
    label: "GitHub",
    value: CONTACT_INFO.githubDisplay,
    displayValue: CONTACT_INFO.githubDisplay,
    href: CONTACT_INFO.github,
    external: true,
  },
  {
    id: "pinterest",
    icon: "pinterest",
    label: "Pinterest",
    value: CONTACT_INFO.pinterestDisplay,
    displayValue: CONTACT_INFO.pinterestDisplay,
    href: CONTACT_INFO.pinterest,
    external: true,
  },
];

/** Page copy */
export const CONTACT_COPY = {
  hero: {
    eyebrow: "Let's Connect",
    heading: "Have a Project in Mind?",
    headingAccent: "Let's Talk.",
    subheading:
      "I'm always open to discussing new opportunities, creative ideas, or partnerships. Whether you need a technical co-founder, a freelance engineer, or just want to say hello — I'd love to hear from you.",
  },
  form: {
    heading: "Send Me a Message",
    subheading: "I'll get back to you within 24 hours.",
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successToast: "Message sent! I'll be in touch soon.",
    errorToast: "Something went wrong. Please try again.",
  },
  sidebar: {
    heading: "Other Ways to Reach Me",
    availability: "Available for new projects",
    responseTime: "Typical response: within 24 hours",
  },
  location: {
    eyebrow: "Location",
    heading: "Based in India",
    description:
      "Currently based in Maharashtra, India — available for remote collaboration worldwide and open to relocation opportunities.",
  },
  github: {
    eyebrow: "Open Source",
    heading: "GitHub Activity",
    description:
      "My contribution to the open-source community and beyond. Building in public, one commit at a time.",
    cta: "View GitHub Profile",
  },
  cta: {
    heading: "Let's Build Something Great Together",
    description:
      "Whether you're looking for a technical partner, a creative collaborator, or just want to have a conversation about technology and innovation — I'm here.",
    primaryLabel: "Email Me",
    primaryHref: `mailto:adarshkorade2004@gmail.com`,
    secondaryLabel: "View LinkedIn",
    secondaryHref: "https://www.linkedin.com/in/adarshkorade/",
  },
} as const;
