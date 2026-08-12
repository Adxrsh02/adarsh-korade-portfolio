import type {
  ExperienceEntry,
  EducationEntry,
  CertificationEntry,
  HackathonEntry,
  JioJourneyParagraph,
  JioJourneyPhoto,
} from "@/types/about";

/* =========================================================
   ABOUT PAGE — CONTENT DATA
   Single source of truth for all About page content.
   Content preserved exactly from about.md — no modifications.
   ========================================================= */

/* -------------------------------------------------------
   IDENTITY / INTRODUCTION
------------------------------------------------------- */

export const ABOUT_IDENTITY = {
  name: "Adarsh Korade",
  pronouns: "He/Him",
  location: "Navi Mumbai, Maharashtra, India",
  headline:
    "AI/ML Engineer Intern @ Jio Platforms Limited (JPL) | SIES Graduate School of Technology | Artificial Intelligence | Machine Learning | Chairperson at E-Cell",
  skills: [
    "Team Leadership",
    "Team Building",
    "Entrepreneurship",
    "Creative Entrepreneurship",
    "Early-Stage Startups",
  ],
} as const;

export const ABOUT_BIO_PARAGRAPHS: string[] = [
  "I recently completed my Bachelor of Engineering in Artificial Intelligence and Machine Learning from SIES Graduate School of Technology, where I gained a strong foundation in software development, machine learning, and data engineering. Additionally, I have completed several professional certifications to expand my expertise in data visualization, SQL, and business intelligence tools.",
  "In addition to my academic and professional pursuits, I actively contribute to E-Cell SIES GST as an Chairperson. leading a team of 25 Leads and Coordinators across various domains, I coordinate events like national-level business hackathons, bringing together students from across India to foster innovation and entrepreneurship.",
  "Addiditionaly I ahve Done My full time internship an Data Engineer(AI/ML) Intern at Jio Platforms Limited, I work at the intersection of large language models and enterprise data — designing NL2SQL systems using local LLMs (Ollama · Mistral 7B), building RAG-ready knowledge bases for telecom schemas, and developing production-grade PySpark and Python pipelines for Revenue Assurance and Fraud Management (RAFM) analytics at scale. Before this, I engineered big data ETL workflows at JPL — migrating critical Revenue Assurance objects into BI platforms, expanding data coverage by 30%, and building a no-code ETL configuration tool that put data power in non-technical hands.",
];

/* -------------------------------------------------------
   MY JOURNEY — Personal Narrative (EXACT — DO NOT MODIFY)
------------------------------------------------------- */

export const MY_JOURNEY_PARAGRAPHS: string[] = [
  "My journey has never been perfectly planned. I started as a curious student who simply wanted to understand how things work, and slowly, that curiosity turned into a passion for technology. College gave me the foundation, but the real learning came from the people I met, the challenges I faced, the mistakes I made, and the opportunities I was fortunate enough to receive.",
  "My time at Jio became one of the most meaningful chapters of my journey. It was my first real step into the corporate world, and I was fortunate to have Abhijit Mane as someone who guided and supported me throughout that journey. He gave me the confidence to take responsibility, learn from mistakes, and believe that I was capable of doing more. The experience taught me much more than technical skills—it taught me how to work with people, handle pressure, stay grounded, and keep moving forward.",
  "I've had moments of doubt, setbacks, and days when I questioned myself. But every experience has shaped me a little more.",
  "I'm still learning. I'm still growing. And I'm still figuring out where this journey will take me.",
  "And honestly, that's what makes the journey exciting. ❤️",
];

/* -------------------------------------------------------
   EXPERIENCE
------------------------------------------------------- */

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    id: "jpl-ai-ml-intern",
    company: "Jio Platforms Limited (JPL)",
    companyLinkedIn:
      "https://www.linkedin.com/company/jioplatforms/posts/?feedView=all",
    logoSrc: "/images/about/logos/Jio_logo.webp",
    logoAlt: "Jio Platforms Limited logo",
    location: "Navi Mumbai, Maharashtra, India",
    locationType: "On-site",
    primaryRole: {
      title: "Data Engineer(AI/ML) Intern",
      type: "Internship",
      startDate: "Jan 2026",
      endDate: "Jul 2026",
      duration: "7 mos",
    },
    responsibilities: [
      "Designed and developed Jio BA, an enterprise platform integrating data ingestion, audit reconciliation, and a RAG-powered NL2SQL engine for telecom analytics and business intelligence.",
      "Built a production-grade RAG architecture using LangChain, Hugging Face Embeddings, FAISS, and ChromaDB to enable context-aware natural language querying over large-scale Hive/HDFS datasets.",
      "Integrated Qwen2.5-Coder as the core LLM for SQL generation, PySpark code generation, and enterprise workflow automation using telecom-specific schema context retrieved through RAG.",
      "Designed schema-aware retrieval pipelines with hybrid search, metadata filtering, prompt engineering, and semantic retrieval to improve retrieval relevance and generated SQL accuracy.",
      "Developed a deterministic XML-to-PySpark code generation engine, automating ETL pipeline creation across 80+ telecom data source integrations and significantly reducing manual development effort.",
      "Built FastAPI services for AI inference and integrated enterprise AI workflows with backend data engineering systems.",
      "Collaborated with cross-functional teams to deliver scalable AI solutions supporting enterprise data engineering, analytics, and business assurance operations.",
    ],
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "FastAPI",
      "PySpark",
      "FAISS",
      "ChromaDB",
      "NL2SQL",
      "Hugging Face",
      "Qwen2.5-Coder",
    ],
    certificatePath:
      "/images/about/certificates/Internship Completion Certificate_12_jan_2026_To_12_july_2026.PDF",
    certificateLabel: "Internship Certificate (Jan 2026 – Jul 2026)",
  },
  {
    id: "ecell-chairperson",
    company: "E-Cell SIES GST",
    companyLinkedIn:
      "https://www.linkedin.com/company/edcsiesgst/?viewAsMember=true",
    logoSrc: "/images/about/logos/E-Cell_SIES_GST_Logo.jpg",
    logoAlt: "E-Cell SIES GST logo",
    location: "Navi Mumbai, Maharashtra, India",
    locationType: "On-site",
    primaryRole: {
      title: "Chairperson",
      type: "Full-time",
      startDate: "Jul 2025",
      endDate: "May 2026",
      duration: "11 mos",
    },
    additionalRoles: [
      {
        title: "Outreach Lead",
        startDate: "Aug 2024",
        endDate: "Jul 2025",
        duration: "1 yr",
      },
      {
        title: "Social Media Volunteer",
        startDate: "Aug 2023",
        endDate: "Aug 2024",
        duration: "1 yr 1 mo",
      },
    ],
    skills: ["Canva", "Social Media", "Team Leadership", "Event Management"],
  },
  {
    id: "jpl-data-engineer-intern",
    company: "Jio Platforms Limited (JPL)",
    companyLinkedIn:
      "https://www.linkedin.com/company/jioplatforms/posts/?feedView=all",
    logoSrc: "/images/about/logos/Jio_logo.webp",
    logoAlt: "Jio Platforms Limited logo",
    location: "Navi Mumbai, Maharashtra, India",
    locationType: "On-site",
    primaryRole: {
      title: "Data Engineer Intern",
      type: "Internship",
      startDate: "Jul 2024",
      endDate: "Dec 2024",
      duration: "6 mos",
    },
    responsibilities: [
      "Assisted in developing and designing big data pipelines to support the migration of Revenue Assurance data objects into our Business Intelligence platform, using Python, PySpark, and Hive.",
      "Contributed to creating and optimizing Extract, Transform, Load (ETL) processes, improving efficiency in data processing and integration.",
      "Supported the development of a web application that simplifies ETL configuration and automates reconciliation jobs, enabling non-technical users to easily manage data tasks.",
      "Worked on data pipelines that incorporate multiple data sources, expanding the scope of business insights by integrating 30% more data into our systems.",
      "Collaborated with cross-functional teams to plan and implement efficient data architecture, focusing on automation and optimal resource usage.",
    ],
    skills: [
      "Python (Programming Language)",
      "PySpark",
      "Hive",
      "ETL",
      "SQL",
      "Data Engineering",
      "Business Intelligence",
      "Apache Kafka",
    ],
    certificatePath:
      "/images/about/certificates/Internship Certificate -Adarsh Korade_July_2024_to_Dec_2024.pdf",
    certificateLabel: "Internship Certificate (Jul 2024 – Dec 2024)",
  },
];

/* -------------------------------------------------------
   EDUCATION
------------------------------------------------------- */

export const EDUCATION_ENTRIES: EducationEntry[] = [
  {
    id: "sies-gst",
    institution: "SIES Graduate School Of Technology",
    institutionLinkedIn:
      "https://www.linkedin.com/school/sies-graduate-school-of-technology/posts/?feedView=all",
    logoSrc: "/images/about/logos/sies_gst_logonew.jpg",
    logoAlt: "SIES Graduate School of Technology logo",
    degree: "Bachelor of Engineering - BE",
    field: "Artificial Intelligence and Machine Learning",
    startDate: "Nov 2022",
    endDate: "Jul 2026",
    activities: "Chairperson - E-CELL SIES GST (Entrepreneurship Development Cell)",
    skills: ["C (Programming Language)", "Java", "+3 skills"],
    university: "University of Mumbai",
  },
  {
    id: "kbp-college",
    institution: "Karmaveer Bhaurao Patil College, Vashi",
    degree: "Higher Secondary School",
    field: "Science (PCM) — Biofocal Subject: Electronics",
    startDate: "Jul 2020",
    endDate: "May 2022",
    grade: "First Class",
  },
  {
    id: "svs-school",
    institution: "Swami Vivekanand Sankul, Sanpada",
    degree: "Secondary School Certificate",
    field: "",
    startDate: "",
    endDate: "May 2020",
    grade: "First Class",
  },
];

/* -------------------------------------------------------
   CERTIFICATIONS
------------------------------------------------------- */

export const CERTIFICATION_ENTRIES: CertificationEntry[] = [
  {
    id: "aws-cloud-foundation",
    name: "AWS Academy Graduate - AWS Academy Cloud Foundation",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "Apr 2025",
    pdfPath:
      "/images/about/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260804-8-to40m9.pdf",
    credentialUrl:
      "https://www.credly.com/badges/6c16e58e-87b2-4c45-a761-a513e796e39f/print",
    skills: ["AWS", "Cloud Computing", "Cloud Foundations"],
  },
  {
    id: "power-bi",
    name: "Power BI",
    issuer: "SIES Graduate School Of Technology",
    issuedDate: "Jan 2024",
    imageSrc: "/images/about/certificates/Power_BI_Certificate.jpg",
    imageAlt: "Power BI certification issued by SIES Graduate School of Technology",
    skills: ["Microsoft Power BI", "Data Visualization", "Business Intelligence"],
  },
  {
    id: "data-science-master",
    name: "Data Science Master",
    issuer: "PW Skills",
    issuedDate: "Mar 2024",
    credentialId: "264e0c3b-a54f-41b2-a1c4-b952e2a1e98c",
    pdfPath:
      "/images/about/certificates/DATA SCIENCE MASTER CERTIFICATION.pdf",
    skills: [
      "Python (Programming Language)",
      "Machine Learning",
      "+4 skills",
    ],
  },
  {
    id: "java-complete",
    name: "Complete Java with Desktop App, Web App & Data Structures",
    issuer: "Kamal Classes",
    issuedDate: "Oct 2023",
    credentialId: "JAJO23119",
    pdfPath: "/images/about/certificates/Complete Java Certificate.pdf",
    skills: ["Java", "Graphical User Interface (GUI)", "+4 skills"],
  },
];

/* -------------------------------------------------------
   HACKATHON
------------------------------------------------------- */

export const HACKATHON_ENTRY: HackathonEntry = {
  id: "codezen-dev-with-ai",
  teamName: "CodeZen",
  eventName: "DEV WITH AI",
  organizer: "E-CELL BVDU DET NM",
  venue: "Bharati Vidyapeeth / Bharati Vidyapeeth Deemed University, Kharghar",
  projectName: "Food Donation Platform",
  description:
    "A Food Donation Platform that connects restaurants with leftover food to nearby NGOs — combining technology and empathy to solve real-world problems.",
  features: [
    "MERN Stack Development",
    "AI-powered Chatbot using OpenAI",
    "Real-time NGO Finder & Smart Matching System",
  ],
  certificateSrc: "/images/about/certificates/HackeThon_CodeZen_Team_certificate.jpg",
  certificateAlt:
    "Team CodeZen participation certificate for DEV WITH AI Hackathon",
};

/* -------------------------------------------------------
   JIO JOURNEY — EXACT CONTENT (DO NOT MODIFY)
------------------------------------------------------- */

export const JIO_JOURNEY_HERO_QUOTE =
  "One Year. One Chapter. A Lot of Memories.";

export const JIO_JOURNEY_SUBQUOTE =
  "One year. One team. Hundreds of memories. One of the most important chapters of my life. ❤️";

export const JIO_JOURNEY_PARAGRAPHS: JioJourneyParagraph[] = [
  {
    id: "beginning",
    text: "My journey at Jio Platforms was my first real step into the corporate world. I joined as a student with excitement, curiosity, and a lot to learn. I still remember how everything felt new in the beginning — the office, the people, the processes, the tools, and the responsibility that came with working in a real organisation.\n\nI became part of the RAFM (Revenue Assurance & Fraud Management) team, where I got the opportunity to work alongside people who were much more experienced than me. What started as an internship gradually became a year of learning, responsibility, teamwork, challenges, and personal growth.\n\nDuring this journey, I worked on Jio BA (Business Assurance) and got exposure to real enterprise data and technology. I worked with data engineering and AI/ML concepts, explored large-scale data processing, ETL pipelines, PySpark, SQL, Kafka, HDFS, Hive, and later worked on areas involving RAG, NL2SQL, schema retrieval, and AI-driven solutions. But honestly, the technologies were only one part of the experience.",
  },
  {
    id: "people",
    text: "The people were the biggest part of it.\n\nI was fortunate to have Abhijit Mane as my mentor and team lead. From the beginning, he trusted me, guided me, corrected me when I was wrong, and encouraged me whenever I doubted myself. He was one of the first people who truly introduced me to the corporate world and helped me understand what it means to work professionally. More than a senior or team lead, I will always remember him as someone who guided me like a big brother.\n\nMy journey was also shaped by every person in the RAFM team. The everyday conversations, discussions, problem-solving, learning from seniors, helping each other, sharing ideas, and even the small moments between work slowly became memories that I didn't realise I would value so much.",
  },
  {
    id: "growth",
    text: "There were difficult days too. There were problems I couldn't solve immediately, moments when I questioned myself, mistakes I had to learn from, and situations where I had to step outside my comfort zone. But those moments taught me something important — professional growth isn't about knowing everything; it's about being willing to learn every day.\n\nOver the year, I didn't just become better at technology. I became more confident in communicating, taking responsibility, working with a team, handling pressure, accepting feedback, and trusting myself.",
  },
  {
    id: "last-day",
    text: "And then came the last day.\n\nI thought I was simply going to complete my internship and say goodbye. Instead, my team gave me one of the most beautiful memories of my professional life. We had a cake-cutting celebration, and team members shared their experiences and kind words about me. I also got the opportunity to express my gratitude to everyone who had been part of my journey.\n\nWhat made that moment even more special was when Abhijit said that a celebration like this had never happened before in the team — that this was the first time. He told me, \"You earned this.\"\n\nThose words meant more to me than any certificate could have.\n\nBecause at that moment, I realised that the year wasn't only about the work I had completed. It was also about the relationships I had built and the impression I had left behind.\n\nI entered Jio as a student.\n\nI left with experience, confidence, friendships, memories, and people I will always be grateful for.\n\nThis chapter taught me that your first workplace is not just where you start your career. Sometimes, it becomes the place where you discover the kind of professional and person you want to become.\n\nJio will always have a special place in my story — not simply because it was my first corporate experience, but because of the people, the lessons, the challenges, and the memories that made that year truly mine.",
  },
];

export const JIO_JOURNEY_PHOTOS: JioJourneyPhoto[] = [
  {
    src: "/images/about/jio/Jio_Team_Photo.jpg",
    alt: "Jio RAFM team group photo",
    caption: "Our RAFM team — the people who made this journey unforgettable",
    layout: "feature",
  },
  {
    src: "/images/about/jio/Confernce_room_working.jpg",
    alt: "Working together in the conference room at Jio campus",
    caption: "Collaboration in the conference room",
    layout: "half",
  },
  {
    src: "/images/about/jio/Building_TC23_Image.jpg",
    alt: "TC23 building at Jio campus — where I worked",
    caption: "TC23 — my workplace for a year",
    layout: "half",
  },
  {
    src: "/images/about/jio/Radha_Krishna_mandir_jio_campus.jpg",
    alt: "Radha Krishna Mandir at Jio campus",
    caption: "The beautiful Radha Krishna Mandir on campus",
    layout: "wide",
  },
];

export const ABHIJIT_MANE_LINKEDIN =
  "https://www.linkedin.com/in/abhijit-mane-78931914b/";
