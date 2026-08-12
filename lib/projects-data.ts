import type { ProjectData, ProjectCategory } from "@/types";

/* =========================================================
   PROJECT CATEGORIES
   ========================================================= */

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { label: "All", slug: "all" },
  { label: "AI & ML", slug: "ai-ml" },
  { label: "Generative AI", slug: "gen-ai" },
  { label: "Data Engineering", slug: "data-eng" },
  { label: "Full Stack", slug: "full-stack" },
  { label: "Automation", slug: "automation" },
  { label: "Computer Vision", slug: "cv" },
  { label: "Research", slug: "research" },
  { label: "Open Source", slug: "open-source" },
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

export const PROJECTS: ProjectData[] = [
  /* ─────────────────────────────────────────────────────────
     PROJECT 1 — Automated Fundus Image Screening
  ───────────────────────────────────────────────────────── */
  {
    slug: "fundus-screening",
    title: "Automated Fundus Image Screening",
    tagline:
      "A Deep Learning Approach for Automated Multi-Label Eye Disease Detection Using Transfer Learning",
    categories: ["ai-ml", "cv", "research"],
    isFeatured: true,
    difficultyLevel: "Advanced",

    status: "Completed",
    role: "AI/ML Engineer & Deep Learning Developer",
    organization: "SIES Graduate School of Technology",
    industry: "Healthcare • HealthTech • Medical AI",
    duration: "Final Year Major Project (2025–2026)",
    teamSize: "4 Students + 2 Faculty Mentors",
    projectType: "Research-Based AI/ML Project",

    techStack: {
      frontend: ["React"],
      backend: ["FastAPI"],
      languages: ["Python", "JavaScript"],
      database: ["ODIR-2019 Dataset"],
      aiMl: [
        "ResNet-50",
        "ConvNeXtV2-Tiny",
        "Vision Transformer (ViT)",
        "Transfer Learning",
        "Multi-Label Classification",
        "Binary Cross-Entropy Loss",
      ],
      dataEngineering: [
        "Image Preprocessing Pipeline",
        "Data Augmentation",
        "Data Normalization",
        "Dataset Management",
      ],
      cloud: [],
      deployment: ["Streamlit (Proposed)"],
      tools: ["PyTorch", "TensorFlow", "OpenCV", "Streamlit"],
    },

    portfolioDescription:
      "Automated Fundus Image Screening is an AI-powered medical imaging system that leverages transfer learning with ResNet-50, ConvNeXtV2-Tiny, and Vision Transformer (ViT) to perform multi-label retinal disease detection from color fundus images. The framework includes an end-to-end preprocessing pipeline, robust feature extraction, and a Streamlit-based prediction interface, achieving 95.96% accuracy on the ODIR-2019 dataset for automated clinical screening and teleophthalmology applications.",

    businessProblem:
      "Manual retinal disease diagnosis is time-consuming, subjective, and requires experienced ophthalmologists. Early detection is difficult, especially in rural and resource-constrained healthcare environments, leading to preventable vision loss.",

    projectObjective:
      "Develop an automated deep learning framework capable of accurately detecting multiple co-existing retinal diseases from fundus images using transfer learning and multi-label classification to support early diagnosis and teleophthalmology.",

    targetUsers: [
      "Ophthalmologists",
      "Hospitals",
      "Diagnostic Centers",
      "Rural Healthcare Clinics",
      "Telemedicine Platforms",
      "Medical Researchers",
    ],

    keyFeatures: [
      "Automated retinal disease screening",
      "Multi-label eye disease classification",
      "Transfer learning using multiple deep learning models (ResNet-50, ConvNeXtV2-Tiny, ViT)",
      "End-to-end image preprocessing pipeline (resize, normalize, background removal)",
      "Real-time prediction interface with confidence score visualization",
      "Clinical decision support and risk assessment",
      "RAG-Based ophthalmology knowledge assistant",
      "Dynamic knowledge base for medical Q&A",
      "Resource-efficient deployment using ConvNeXtV2-Tiny",
      "Global context learning via Vision Transformer",
    ],

    workflowSteps: [
      {
        step: "Retinal Fundus Image",
        description: "Input: ODIR-2019 color fundus photographs",
      },
      {
        step: "Image Upload & Validation",
        description: "Format check, size validation, MIME type verification",
      },
      {
        step: "Image Preprocessing",
        description: "Resize, normalization, background removal, color normalization",
      },
      {
        step: "Deep Learning Inference Engine",
        description: "ConvNeXtV2-Tiny — primary inference model",
      },
      {
        step: "Feature Extraction",
        description: "Spatial and global feature representation",
      },
      {
        step: "Disease Classification",
        description: "Multi-label classification with Binary Cross-Entropy Loss",
      },
      {
        step: "Confidence Score Generation",
        description: "Per-class probability output with threshold calibration",
      },
      {
        step: "Clinical Risk Assessment",
        description: "Risk stratification and urgency flagging",
      },
      {
        step: "Diagnostic Report & Recommendations",
        description: "Structured report with disease names, confidence scores, and clinical guidance",
      },
    ],

    performanceMetrics: {
      headers: ["Model", "Accuracy", "Precision", "Recall", "F1 Score"],
      rows: [
        {
          label: "ResNet-50",
          values: ["85.82%", "86.67%", "88.21%", "87.43%"],
        },
        {
          label: "ConvNeXtV2-Tiny",
          values: ["93.41%", "92.14%", "93.88%", "92.99%"],
        },
        {
          label: "Vision Transformer (ViT)",
          values: ["95.96%", "95.02%", "96.44%", "95.72%"],
          isBest: true,
        },
      ],
    },

    thumbnailPath: "/images/projects/fundus-screening/thumbnail.png",
    screenshots: [
      {
        path: "/images/projects/fundus-screening/home-page.jpeg",
        caption: "EyeDetect — Deep Learning Ophthalmic Screening Platform",
      },
      {
        path: "/images/projects/fundus-screening/analyze-feature.jpg",
        caption: "Upload & Analyze — Intelligent Retinal Analysis Workflow",
      },
      {
        path: "/images/projects/fundus-screening/result-diseases.jpg",
        caption: "Result & Disease Detection — Multi-Label Classification Output",
      },
      {
        path: "/images/projects/fundus-screening/heatmap.jpg",
        caption: "Retinal Attention Heatmap — GradCAM Visualization",
      },
      {
        path: "/images/projects/fundus-screening/rag-chatbot.png",
        caption: "RAG-Based Medical Chatbot — Ophthalmology Knowledge Assistant",
      },
      {
        path: "/images/projects/fundus-screening/knowledgebase.png",
        caption: "Dynamic Knowledge Base Interface — Contextual Medical Q&A",
      },
    ],

    research: {
      title:
        "Automated Fundus Image Screening: A Deep Learning Approach for Eye Disease Detection",
      domain: [
        "Deep Learning",
        "Medical Image Analysis",
        "Computer Vision",
        "Ophthalmology AI",
        "Healthcare Technology",
      ],
      abstract:
        "This research presents an automated retinal disease screening framework leveraging a fine-tuned ConvNeXtV2-Tiny architecture for fundus image classification. The proposed system aims to assist in the early detection of vision-threatening ocular diseases by combining deep feature extraction, transfer learning, and intelligent diagnostic support. Experimental results demonstrate high classification performance, highlighting the potential of AI-driven ophthalmic screening systems for preventive healthcare applications.",
      publicationDetailsImagePath:
        "/images/projects/fundus-screening/research-paper-details.png",
      paperPdfPath: "/documents/projects/fundus-screening/research-paper.pdf",
      pptPdfPath: "/documents/projects/fundus-screening/presentation.pdf",
    },

    challenges: [
      {
        challenge: "Handling class imbalance in the ODIR-2019 dataset",
        solution:
          "Applied weighted Binary Cross-Entropy Loss and used aggressive data augmentation techniques (random flips, rotations, color jitter) to balance the representation of rare disease classes during training.",
      },
      {
        challenge: "High computational cost of Vision Transformer training",
        solution:
          "Employed transfer learning from ImageNet-pretrained weights and fine-tuned only the top layers initially, then gradually unfroze deeper layers — reducing training time by approximately 60% while maintaining accuracy.",
      },
      {
        challenge: "Multi-label classification with co-occurring diseases",
        solution:
          "Used sigmoid activation (not softmax) at the output layer with Binary Cross-Entropy Loss, enabling independent probability prediction for each of the 8 disease classes without mutual exclusivity constraints.",
      },
      {
        challenge: "Image preprocessing inconsistencies across datasets",
        solution:
          "Built a standardized preprocessing pipeline that handles variable image resolutions, background artifacts, and color temperature differences through CLAHE normalization and adaptive background removal.",
      },
    ],

    lessonsLearned: [
      "Vision Transformers significantly outperform CNNs on medical image classification when sufficient pre-training data is available",
      "Transfer learning from ImageNet provides strong initialization even for medical imaging tasks despite domain differences",
      "Multi-label classification requires fundamentally different loss functions than single-label classification",
      "Attention heatmaps (GradCAM) are critical for clinical validation and physician trust in AI diagnostic tools",
      "RAG-based knowledge systems dramatically improve chatbot accuracy for domain-specific medical Q&A",
    ],

    futureImprovements: [
      "Integrate real-time video fundus stream analysis for live screening",
      "Expand the model to detect additional retinal conditions beyond the ODIR-2019 classes",
      "Implement federated learning for privacy-preserving model training across hospital networks",
      "Deploy on edge devices (Raspberry Pi / NVIDIA Jetson) for rural clinic use without internet",
      "Develop a full clinical API with HL7/FHIR integration for EHR systems",
    ],

    githubUrl: "https://github.com/Adxrsh02/Automated-Fundus-Disease-Detection",
    liveDemoUrl: undefined,
    documentationUrl: undefined,
    version: "v1.0",
    lastUpdated: "2026",
  },

  /* ─────────────────────────────────────────────────────────
     PROJECT 2 — Sai Prestige Real Estate Website
  ───────────────────────────────────────────────────────── */
  {
    slug: "sai-prestige",
    title: "Sai Prestige – Real Estate Business Website",
    tagline:
      "A modern, responsive business website built to establish Sai Prestige's digital presence and drive customer engagement",
    categories: ["full-stack"],
    isFeatured: true,
    difficultyLevel: "Intermediate",

    status: "Completed & Live",
    role: "Full Stack Web Developer",
    organization: "Sai Prestige (Real Estate Consultancy)",
    industry: "Real Estate",
    duration: "~2 Months",
    teamSize: "1 (Solo Project)",
    projectType: "Client Project",

    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript"],
      backend: [],
      languages: ["HTML", "CSS", "JavaScript"],
      database: [],
      aiMl: [],
      dataEngineering: [],
      cloud: ["Vercel"],
      deployment: ["Vercel CDN"],
      tools: [],
    },

    portfolioDescription:
      "Sai Prestige is a professional real estate business website developed for a real estate consultancy to establish a strong digital presence. The website features a modern, responsive design with dedicated sections for company information, services, client-focused solutions, portfolio highlights, and contact details. Built using HTML, CSS, and JavaScript, and deployed on Vercel, the project emphasizes clean UI/UX, responsive layouts, fast performance, and a trustworthy brand experience for prospective property buyers and investors.",

    businessProblem:
      "Sai Prestige required a professional online presence to showcase its real estate consultancy services, improve brand credibility, and provide potential clients with an easy way to explore services and contact the business. The objective was to replace reliance on offline marketing with a modern, responsive website that builds trust and generates customer inquiries.",

    projectObjective:
      "Design and develop a modern, responsive business website that strengthens Sai Prestige's digital presence, showcases its services and expertise, improves customer engagement, and increases lead generation through an intuitive user experience.",

    targetUsers: [
      "Home Buyers",
      "Property Investors",
      "Property Sellers",
      "Rental Clients",
      "Real Estate Customers",
      "Business Partners",
    ],

    keyFeatures: [
      "Premium responsive landing page optimized for all screen sizes",
      "Professional real estate branding and visual identity",
      "Modern UI/UX with smooth navigation and scroll animations",
      "Portfolio showcase section for featured properties",
      "Client testimonials section for social proof",
      "Company overview and team introduction",
      "Contact information and inquiry section",
      "SEO-friendly structure with semantic HTML",
      "Fast loading static pages via Vercel CDN",
      "Cross-browser compatible design",
    ],

    workflowSteps: [
      {
        step: "Requirements Gathering",
        description: "Client meetings to define brand identity, content, and goals",
      },
      {
        step: "Design & Wireframing",
        description: "Page layout design, color palette selection, typography system",
      },
      {
        step: "Frontend Development",
        description: "HTML5 structure, CSS3 styling, JavaScript interactivity",
      },
      {
        step: "Responsive Design",
        description: "Mobile-first CSS media queries for all breakpoints",
      },
      {
        step: "Content Integration",
        description: "Real estate content, property images, testimonials, contact info",
      },
      {
        step: "Performance Optimization",
        description: "Image compression, minification, CDN configuration",
      },
      {
        step: "Deployment",
        description: "Vercel deployment with custom domain and SSL configuration",
      },
    ],

    thumbnailPath: "/images/projects/sai-prestige/thumbnail.jpg",
    screenshots: [
      {
        path: "/images/projects/sai-prestige/home-page.png",
        caption: "Sai Prestige — Homepage with Premium Real Estate Branding",
      },
      {
        path: "/images/projects/sai-prestige/insights.png",
        caption: "Market Insights Section — Property Market Information",
      },
      {
        path: "/images/projects/sai-prestige/happy-customers.png",
        caption: "Happy Customers — Client Testimonials & Social Proof",
      },
    ],

    challenges: [
      {
        challenge: "Creating a premium feel with only vanilla HTML/CSS/JS",
        solution:
          "Used CSS custom properties for consistent design tokens, CSS Grid and Flexbox for sophisticated layouts, and carefully crafted micro-animations with CSS transitions — achieving a premium look without any frameworks.",
      },
      {
        challenge: "Ensuring pixel-perfect responsiveness across all devices",
        solution:
          "Adopted a mobile-first approach with progressive enhancement, tested on 15+ screen sizes, and used CSS clamp() for fluid typography and spacing that adapts smoothly across breakpoints.",
      },
      {
        challenge: "Optimizing performance for a fast initial load",
        solution:
          "Applied image compression (60–70% size reduction), lazy loading for below-the-fold images, minified CSS/JS, and leveraged Vercel's global CDN edge network for sub-100ms TTFB worldwide.",
      },
    ],

    lessonsLearned: [
      "Client communication and expectation setting are as important as technical execution",
      "Vanilla HTML/CSS/JS can achieve premium results with disciplined design systems",
      "Mobile-first design significantly reduces responsive fixes later in development",
      "Vercel's zero-configuration deployment dramatically accelerates client delivery",
      "Semantic HTML not only improves SEO but also makes maintenance far easier",
    ],

    futureImprovements: [
      "Migrate to Next.js for improved SEO with server-side rendering",
      "Add a property listing CMS for client self-management",
      "Integrate a WhatsApp inquiry button for mobile conversion",
      "Add Google Analytics for visitor behavior tracking",
      "Build a property search and filter functionality",
    ],

    githubUrl: "https://github.com/Adxrsh02/Sai-Prestige-Website",
    liveDemoUrl: "https://sai-prestige-website.vercel.app/",
    documentationUrl: undefined,
    version: "v1.0",
    lastUpdated: "December 2025",
  },
];

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

/**
 * Get a single project by slug.
 */
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/**
 * Get all projects that belong to a given category slug.
 * Pass "all" to get every project.
 */
export function getProjectsByCategory(categorySlug: string): ProjectData[] {
  if (categorySlug === "all") return PROJECTS;
  return PROJECTS.filter((p) => p.categories.includes(categorySlug));
}

/**
 * Get all featured projects.
 */
export function getFeaturedProjects(): ProjectData[] {
  return PROJECTS.filter((p) => p.isFeatured);
}

/**
 * Get related projects for a given project slug (same category, excluding self).
 */
export function getRelatedProjects(
  slug: string,
  limit: number = 3
): ProjectData[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];

  return PROJECTS.filter(
    (p) =>
      p.slug !== slug &&
      p.categories.some((c) => current.categories.includes(c))
  ).slice(0, limit);
}

/**
 * Get previous and next projects for navigation.
 */
export function getAdjacentProjects(slug: string): {
  previous: ProjectData | null;
  next: ProjectData | null;
} {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  return {
    previous: index > 0 ? PROJECTS[index - 1] : null,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  };
}

/**
 * Get all unique category slugs present in the dataset.
 */
export function getAllCategorySlugs(): string[] {
  const slugs = new Set<string>();
  PROJECTS.forEach((p) => p.categories.forEach((c) => slugs.add(c)));
  return Array.from(slugs);
}
