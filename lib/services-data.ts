import type { ServiceData, ProcessStep, TechCategory, ValueProposition } from "@/types";

/* =========================================================
   SERVICES DATA
   Single source of truth for all 11 services.
   ========================================================= */

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "full-stack-web-development",
    number: "01",
    title: "Full Stack Web Development",
    tagline: "End-to-end web applications engineered for performance, scalability, and exceptional user experience.",
    icon: "Globe",
    imageSrc: "/images/services/full-stack-web-development.jpg",
    imageAlt: "Full Stack Web Development — modern laptop displaying an orange-accented UI dashboard built with React and Next.js",
    overview: {
      summary:
        "I build production-grade web applications from the ground up — handling everything from database architecture and API design to pixel-perfect frontend interfaces. Every system I build is designed to scale, perform, and grow with your business.",
      details: [
        "My full-stack approach means I own the entire technology stack, eliminating the coordination overhead that comes from working with siloed developers. From data modeling and REST/GraphQL APIs to responsive React interfaces and CI/CD pipelines, every layer is built with the same attention to quality.",
        "I specialize in React and Next.js on the frontend, paired with Node.js, Python, or FastAPI on the backend — depending on what best fits your performance and scalability requirements. Every application I deliver includes comprehensive testing, detailed documentation, and production-ready deployment configurations.",
      ],
    },
    technologies: [
      "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI",
      "PostgreSQL", "MongoDB", "Redis", "Tailwind CSS", "GraphQL", "REST APIs",
      "Docker", "AWS", "Vercel", "CI/CD",
    ],
    workflow: [
      { step: 1, label: "Requirements Discovery", description: "Deep-dive into your business goals, user needs, and technical constraints." },
      { step: 2, label: "Architecture Design", description: "Designing the system structure — database schema, API contracts, and component architecture." },
      { step: 3, label: "UI/UX Prototyping", description: "Creating interactive prototypes for stakeholder alignment before a single line of code is written." },
      { step: 4, label: "Iterative Development", description: "Agile sprints with regular demos, shipping working software from week one." },
      { step: 5, label: "Testing & QA", description: "Unit tests, integration tests, E2E testing, and performance profiling." },
      { step: 6, label: "Deployment & Monitoring", description: "Production deployment with observability, error tracking, and uptime monitoring." },
    ],
    deliverables: [
      "Full source code with comprehensive README",
      "API documentation (OpenAPI / Swagger)",
      "Database schema and migration files",
      "Deployment configuration (Docker / CI/CD)",
      "Test suites with coverage reports",
      "Performance optimization report",
      "30-day post-launch support",
    ],
    caseStudies: [
      { title: "Enterprise Dashboard Platform", industry: "FinTech", technologies: ["Next.js", "FastAPI", "PostgreSQL"], href: "#", comingSoon: true },
      { title: "E-Commerce Web Application", industry: "Retail", technologies: ["React", "Node.js", "MongoDB"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile App Development",
    tagline: "Cross-platform mobile experiences that feel native, perform flawlessly, and delight users.",
    icon: "Smartphone",
    imageSrc: "/images/services/mobile-app-development.jpg",
    imageAlt: "Mobile App Development — sleek smartphone interface showcasing a cross-platform mobile application",
    overview: {
      summary:
        "I build cross-platform mobile applications using React Native and Expo, delivering native-quality experiences for both iOS and Android from a single codebase — reducing cost without sacrificing performance.",
      details: [
        "Mobile is often the primary touchpoint between your product and your users. I approach mobile development with a performance-first mindset — optimizing for 60fps animations, minimal memory usage, and instant perceived load times.",
        "From consumer apps to enterprise tools, every app I build goes through rigorous device testing across multiple screen sizes and OS versions. I handle App Store and Google Play submission, including all the metadata, screenshots, and review requirements.",
      ],
    },
    technologies: [
      "React Native", "Expo", "TypeScript", "Redux Toolkit", "React Query",
      "Firebase", "Supabase", "AsyncStorage", "React Navigation",
      "Reanimated", "iOS", "Android", "App Store", "Google Play",
    ],
    workflow: [
      { step: 1, label: "Platform Strategy", description: "Choosing the right architecture for your target platforms, users, and performance requirements." },
      { step: 2, label: "UX Flow Design", description: "Mapping user flows and designing mobile-native interaction patterns." },
      { step: 3, label: "Core Development", description: "Building features screen-by-screen with a shared codebase for iOS and Android." },
      { step: 4, label: "Integration", description: "Connecting backend APIs, push notifications, analytics, and third-party services." },
      { step: 5, label: "Device Testing", description: "Testing across physical devices and simulators at multiple screen sizes." },
      { step: 6, label: "Store Submission", description: "Preparing and submitting to App Store and Google Play with full compliance." },
    ],
    deliverables: [
      "Full React Native source code",
      "iOS and Android build configurations",
      "App Store and Play Store submission",
      "Push notification setup",
      "Backend API integration",
      "Analytics and crash reporting",
      "User documentation",
    ],
    caseStudies: [
      { title: "Fitness Tracking App", industry: "Health & Wellness", technologies: ["React Native", "Firebase", "Expo"], href: "#", comingSoon: true },
      { title: "Field Service Management App", industry: "Enterprise", technologies: ["React Native", "Redux", "REST API"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "ai-machine-learning-solutions",
    number: "03",
    title: "AI & Machine Learning Solutions",
    tagline: "Intelligent systems that learn, predict, and automate — transforming data into competitive advantage.",
    icon: "Brain",
    imageSrc: "/images/services/ai-machine-learning-solutions.jpg",
    imageAlt: "AI & Machine Learning — glowing neural network inside a glass cube with floating data panels, representing intelligent systems",
    overview: {
      summary:
        "I design and deploy machine learning systems that solve real business problems — from predictive analytics and computer vision to recommendation engines and intelligent classification systems.",
      details: [
        "My ML work spans the full lifecycle: data collection and preprocessing, model selection and training, evaluation and validation, and production deployment. I don't just build models — I build systems that stay accurate over time with monitoring, retraining pipelines, and drift detection.",
        "Whether you need a custom model trained on your proprietary data or integration of pre-trained models into your existing infrastructure, I bring both the research intuition and engineering discipline to ship ML reliably.",
      ],
    },
    technologies: [
      "Python", "PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face",
      "XGBoost", "Pandas", "NumPy", "Matplotlib", "MLflow",
      "FastAPI", "Docker", "AWS SageMaker", "GCP Vertex AI", "Jupyter",
    ],
    workflow: [
      { step: 1, label: "Problem Framing", description: "Defining the ML problem type, success metrics, and feasibility assessment." },
      { step: 2, label: "Data Exploration", description: "Analyzing, cleaning, and understanding your data — the foundation of every good model." },
      { step: 3, label: "Feature Engineering", description: "Extracting and creating the features that make models accurate and generalizable." },
      { step: 4, label: "Model Training", description: "Training, tuning, and validating models with rigorous cross-validation." },
      { step: 5, label: "Evaluation", description: "Comprehensive evaluation against business metrics, not just technical accuracy." },
      { step: 6, label: "Production Deployment", description: "Deploying as an API endpoint with monitoring, retraining pipelines, and drift alerts." },
    ],
    deliverables: [
      "Trained model files with documentation",
      "Model API endpoint (FastAPI/REST)",
      "Data preprocessing pipeline",
      "Evaluation report with metrics",
      "MLflow experiment tracking setup",
      "Retraining and monitoring pipeline",
      "Inference performance benchmarks",
    ],
    caseStudies: [
      { title: "Customer Churn Prediction System", industry: "SaaS", technologies: ["Python", "XGBoost", "FastAPI"], href: "#", comingSoon: true },
      { title: "Document Classification Engine", industry: "Legal Tech", technologies: ["PyTorch", "Hugging Face", "AWS"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "generative-ai-llm-applications",
    number: "04",
    title: "Generative AI & LLM Applications",
    tagline: "Production-ready AI applications powered by large language models — from chatbots to autonomous agents.",
    icon: "Sparkles",
    imageSrc: "/images/services/generative-ai-llm-applications.jpg",
    imageAlt: "Generative AI & LLM — layered translucent interface panels showing AI design and language model workflows",
    overview: {
      summary:
        "I build sophisticated applications on top of large language models — RAG systems, intelligent chatbots, document processing pipelines, autonomous agents, and custom AI tools tailored to your specific workflows.",
      details: [
        "The LLM ecosystem moves fast. I stay current with the latest models, frameworks, and patterns — including retrieval-augmented generation (RAG), function calling, structured outputs, and multi-agent orchestration — so your application benefits from state-of-the-art capabilities.",
        "I build with production quality from day one: robust prompt engineering, fallback handling, output validation, cost optimization, and observability. Every LLM application I deliver is reliable, cost-effective, and ready for real users.",
      ],
    },
    technologies: [
      "OpenAI GPT-4o", "Claude API", "LangChain", "LlamaIndex", "Pinecone",
      "Weaviate", "FAISS", "Ollama", "Mistral", "Groq",
      "Python", "FastAPI", "Streamlit", "Next.js", "Vector Databases",
    ],
    workflow: [
      { step: 1, label: "Use Case Definition", description: "Mapping the business problem to the right LLM architecture — chat, RAG, agent, or pipeline." },
      { step: 2, label: "Prompt Engineering", description: "Developing, testing, and iterating on prompts for reliability and output quality." },
      { step: 3, label: "Knowledge Base Setup", description: "Chunking, embedding, and indexing your data for retrieval-augmented generation." },
      { step: 4, label: "Application Development", description: "Building the full application layer around the LLM — APIs, UI, orchestration." },
      { step: 5, label: "Evaluation", description: "Systematic evaluation of response quality, hallucination rates, and latency." },
      { step: 6, label: "Production Hardening", description: "Rate limiting, cost controls, monitoring, and fallback strategies for reliability." },
    ],
    deliverables: [
      "Production LLM application with full source",
      "Vector database setup and indexing pipeline",
      "Prompt library with evaluation results",
      "API documentation and usage guide",
      "Cost estimation and optimization report",
      "Monitoring dashboard setup",
      "Handoff training session",
    ],
    caseStudies: [
      { title: "Enterprise Knowledge Base Chatbot", industry: "Enterprise Software", technologies: ["LangChain", "Pinecone", "GPT-4o"], href: "#", comingSoon: true },
      { title: "Automated Research Assistant", industry: "Research", technologies: ["LlamaIndex", "Claude API", "FastAPI"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "data-engineering-automation",
    number: "05",
    title: "Data Engineering & Automation",
    tagline: "Reliable data pipelines and ETL systems that turn raw data into clean, decision-ready insights.",
    icon: "Database",
    imageSrc: "/images/services/data-engineering-automation.jpg",
    imageAlt: "Data Engineering & Automation — glowing data flow visualization representing pipeline architecture and ETL systems",
    overview: {
      summary:
        "I design and build data infrastructure that makes your data accessible, reliable, and analysis-ready — automated pipelines, data warehouses, ETL processes, and real-time streaming systems.",
      details: [
        "Bad data quality costs businesses an average of $12.9M per year. My data engineering work starts with understanding your data sources and quality issues, then building robust pipelines that enforce consistency, handle failures gracefully, and scale with your data volume.",
        "Whether you need a batch ETL pipeline processing millions of records daily or a real-time streaming system ingesting live events, I architect the solution around your latency, cost, and reliability requirements.",
      ],
    },
    technologies: [
      "Apache Airflow", "dbt", "Apache Spark", "Kafka", "Python",
      "PostgreSQL", "BigQuery", "Snowflake", "Redshift", "AWS S3",
      "Pandas", "Polars", "SQLAlchemy", "Great Expectations", "Docker",
    ],
    workflow: [
      { step: 1, label: "Data Audit", description: "Mapping all data sources, understanding quality issues, and defining target schemas." },
      { step: 2, label: "Pipeline Architecture", description: "Designing the pipeline topology — batch vs. streaming, scheduling, and error handling." },
      { step: 3, label: "Transformation Logic", description: "Building dbt models or Spark jobs for data cleaning, joining, and aggregation." },
      { step: 4, label: "Orchestration Setup", description: "Configuring Airflow DAGs or equivalent schedulers for automated pipeline execution." },
      { step: 5, label: "Data Quality", description: "Implementing data quality checks, alerts, and lineage tracking." },
      { step: 6, label: "Monitoring & Optimization", description: "Pipeline observability, cost optimization, and performance tuning." },
    ],
    deliverables: [
      "Fully automated data pipeline",
      "Data warehouse schema and models",
      "Data quality test suite",
      "Pipeline monitoring and alerting",
      "Technical documentation",
      "Runbook for common failure scenarios",
      "Performance benchmarks",
    ],
    caseStudies: [
      { title: "Real-Time Analytics Pipeline", industry: "E-Commerce", technologies: ["Kafka", "Spark", "BigQuery"], href: "#", comingSoon: true },
      { title: "Multi-Source Data Warehouse", industry: "Healthcare", technologies: ["Airflow", "dbt", "Snowflake"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "business-process-automation",
    number: "06",
    title: "Business Process Automation",
    tagline: "Eliminate repetitive work and reduce operational costs with intelligent workflow automation.",
    icon: "Zap",
    imageSrc: "/images/services/business-process-automation.jpg",
    imageAlt: "Business Process Automation — orange-lit robotic gear system representing intelligent workflow automation",
    overview: {
      summary:
        "I identify high-ROI automation opportunities in your business processes and build the systems to eliminate them — from document processing and report generation to cross-system data synchronization and workflow orchestration.",
      details: [
        "Most businesses have 10-30% of their operational capacity consumed by repetitive, manual tasks. I work with your team to map these processes, identify automation candidates, and build reliable systems that handle them consistently — 24/7, without error.",
        "My automation solutions range from simple scheduled scripts to complex multi-step workflows integrating multiple SaaS platforms, databases, and internal tools. Every automation includes comprehensive logging, error alerting, and monitoring so you always know exactly what's running and what's not.",
      ],
    },
    technologies: [
      "Python", "Zapier", "Make (Integromat)", "n8n", "Playwright",
      "Selenium", "Beautiful Soup", "Celery", "RabbitMQ", "FastAPI",
      "Google Workspace APIs", "Microsoft Graph API", "Slack API", "Notion API",
    ],
    workflow: [
      { step: 1, label: "Process Mapping", description: "Documenting the current manual process step-by-step to identify automation touchpoints." },
      { step: 2, label: "ROI Assessment", description: "Quantifying time savings, error reduction, and cost impact of the proposed automation." },
      { step: 3, label: "Solution Design", description: "Choosing the right tools and architecture for reliability, maintainability, and scale." },
      { step: 4, label: "Development", description: "Building the automation with comprehensive error handling and logging." },
      { step: 5, label: "Testing", description: "Testing edge cases, failure modes, and integration points before go-live." },
      { step: 6, label: "Handover", description: "Deploying to production with documentation, training, and monitoring dashboards." },
    ],
    deliverables: [
      "Fully automated workflow system",
      "Process documentation and flowcharts",
      "Error handling and alerting setup",
      "Monitoring dashboard",
      "Operations runbook",
      "ROI measurement framework",
      "Team training session",
    ],
    caseStudies: [
      { title: "Invoice Processing Automation", industry: "Accounting", technologies: ["Python", "Google APIs", "Playwright"], href: "#", comingSoon: true },
      { title: "Cross-Platform Data Sync", industry: "SaaS", technologies: ["n8n", "REST APIs", "PostgreSQL"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "ui-ux-design",
    number: "07",
    title: "UI/UX Design",
    tagline: "Thoughtful digital interfaces designed for real users — intuitive, beautiful, and conversion-optimized.",
    icon: "PenTool",
    imageSrc: "/images/services/ui-ux-design.jpg",
    imageAlt: "UI/UX Design — layered design system panels showing wireframes, color palettes, and mobile interfaces in orange and white",
    overview: {
      summary:
        "I design digital interfaces that feel effortless to use — grounded in user research, validated through testing, and crafted with meticulous attention to visual detail. Good design is invisible; great design drives business outcomes.",
      details: [
        "My design process starts with understanding your users — their goals, frustrations, and mental models. From there, I build from low-fidelity wireframes to high-fidelity prototypes, iterating with real user feedback before development begins.",
        "I deliver design systems, not just screens. Every UI I produce includes a documented component library, spacing system, typography scale, and interaction specifications — giving developers everything they need to build with consistency.",
      ],
    },
    technologies: [
      "Figma", "Adobe XD", "Framer", "Principle", "Maze",
      "Hotjar", "UserTesting", "Miro", "FigJam", "Notion",
      "Tailwind CSS", "CSS Animations", "Lottie",
    ],
    workflow: [
      { step: 1, label: "User Research", description: "Interviews, surveys, and competitive analysis to understand user needs and market positioning." },
      { step: 2, label: "Information Architecture", description: "Structuring content hierarchy, navigation, and user flows before visual design begins." },
      { step: 3, label: "Wireframing", description: "Low-fidelity layouts to establish structure and get alignment without visual distraction." },
      { step: 4, label: "Visual Design", description: "High-fidelity UI with typography, color, components, and micro-interactions." },
      { step: 5, label: "Prototyping", description: "Interactive prototypes for user testing and stakeholder presentations." },
      { step: 6, label: "Design Handoff", description: "Developer-ready Figma files with specs, assets, and a documented design system." },
    ],
    deliverables: [
      "User research report",
      "Information architecture diagram",
      "Complete wireframe set",
      "High-fidelity UI screens (all breakpoints)",
      "Interactive prototype",
      "Design system / component library",
      "Developer handoff documentation",
    ],
    caseStudies: [
      { title: "SaaS Dashboard Redesign", industry: "B2B Software", technologies: ["Figma", "Framer", "Design System"], href: "#", comingSoon: true },
      { title: "Mobile App UX Overhaul", industry: "FinTech", technologies: ["Figma", "Maze", "UserTesting"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "graphic-design-branding",
    number: "08",
    title: "Graphic Design & Branding",
    tagline: "Strategic visual identities that communicate your values, build recognition, and earn trust.",
    icon: "Palette",
    imageSrc: "/images/services/graphic-design-branding.jpg",
    imageAlt: "Graphic Design & Branding — vibrant brand identity visualization with color palettes, typography, and logo compositions",
    overview: {
      summary:
        "I create cohesive visual identities that give your brand a distinctive, memorable presence across every touchpoint — from logo and color system to marketing materials and brand guidelines.",
      details: [
        "A strong brand is more than a logo. It's a system of visual decisions that consistently communicate your values, differentiate you from competitors, and build recognition over time. I approach branding strategically — understanding your positioning and audience before picking colors.",
        "Every brand identity I deliver is production-ready: vector files for every logo variation, a comprehensive brand guidelines document, and templates for your key marketing materials. You'll have everything you need to apply your brand consistently across any medium.",
      ],
    },
    technologies: [
      "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Figma",
      "Canva Pro", "After Effects", "Framer", "Procreate",
    ],
    workflow: [
      { step: 1, label: "Brand Discovery", description: "Understanding your business, values, audience, and competitive landscape." },
      { step: 2, label: "Mood Boarding", description: "Exploring visual directions and getting alignment on aesthetic before execution." },
      { step: 3, label: "Logo Concept Development", description: "Creating 3-5 distinct logo concepts with rationale for each direction." },
      { step: 4, label: "Brand System Build", description: "Developing the full color palette, typography system, and iconography." },
      { step: 5, label: "Collateral Design", description: "Applying the brand to business cards, presentations, social templates, and more." },
      { step: 6, label: "Guidelines & Handoff", description: "Producing a comprehensive brand guidelines document and all source files." },
    ],
    deliverables: [
      "Logo suite (primary, secondary, icon) in all formats",
      "Color system with hex, RGB, and CMYK values",
      "Typography system with font licenses",
      "Brand guidelines PDF",
      "Business card and letterhead design",
      "Social media templates",
      "All source files (AI, EPS, Figma)",
    ],
    caseStudies: [
      { title: "Tech Startup Brand Identity", industry: "Technology", technologies: ["Illustrator", "Figma", "Brand Strategy"], href: "#", comingSoon: true },
      { title: "Personal Brand & Portfolio Design", industry: "Creative", technologies: ["Figma", "Photoshop", "InDesign"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "technical-consulting",
    number: "09",
    title: "Technical Consulting",
    tagline: "Strategic technical guidance to make better architecture decisions, faster.",
    icon: "Lightbulb",
    imageSrc: "/images/services/technical-consulting.jpg",
    imageAlt: "Technical Consulting — glowing lightbulb surrounded by technical diagrams representing strategic software guidance",
    overview: {
      summary:
        "I partner with founders, CTOs, and engineering teams to solve hard technical problems — from architecture reviews and technology selection to team scaling strategies and codebase audits.",
      details: [
        "Sometimes you don't need another developer. You need an experienced engineer who can look at your current situation with fresh eyes, identify what's actually blocking your progress, and give you a clear path forward. That's where consulting fits.",
        "I've worked across diverse technology stacks and business domains. I bring that breadth to every engagement — whether you need a second opinion on your architecture, help evaluating AI vendors, or a structured plan for migrating to the cloud.",
      ],
    },
    technologies: [
      "System Architecture", "Cloud Architecture (AWS, GCP, Azure)", "Database Design",
      "API Design", "Security Review", "Performance Auditing",
      "AI/ML Strategy", "Technology Stack Selection", "Code Review",
    ],
    workflow: [
      { step: 1, label: "Context Gathering", description: "Understanding your current state, pain points, goals, and constraints in depth." },
      { step: 2, label: "Technical Assessment", description: "Reviewing your codebase, architecture, infrastructure, and development practices." },
      { step: 3, label: "Gap Analysis", description: "Identifying specific risks, bottlenecks, and areas for improvement with evidence." },
      { step: 4, label: "Recommendation Report", description: "Delivering a prioritized, actionable list of recommendations with effort estimates." },
      { step: 5, label: "Implementation Support", description: "Providing ongoing guidance as your team executes the recommended changes." },
      { step: 6, label: "Follow-Up Review", description: "Checking in to evaluate progress and adjust recommendations as needed." },
    ],
    deliverables: [
      "Technical assessment report",
      "Architecture recommendations document",
      "Prioritized improvement roadmap",
      "Risk mitigation strategies",
      "Technology evaluation matrix",
      "Implementation guidance sessions",
      "Follow-up Q&A (30 days)",
    ],
    caseStudies: [
      { title: "Startup Architecture Review", industry: "SaaS", technologies: ["AWS", "Microservices", "PostgreSQL"], href: "#", comingSoon: true },
      { title: "AI Strategy for Mid-Market Co.", industry: "Manufacturing", technologies: ["ML Strategy", "Cloud Architecture"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "portfolio-personal-branding",
    number: "10",
    title: "Portfolio & Personal Branding",
    tagline: "Distinctive digital portfolios and personal brands that open doors and create opportunities.",
    icon: "User",
    imageSrc: "/images/services/portfolio-personal-branding.jpg",
    imageAlt: "Portfolio & Personal Branding — clean personal brand visualization showing identity design elements and digital presence",
    overview: {
      summary:
        "I help developers, designers, and creative professionals build premium digital portfolios and personal brands that accurately represent their skills and attract the right opportunities.",
      details: [
        "Your portfolio is your most important professional asset. A mediocre portfolio is worse than no portfolio — it signals to potential employers and clients that this is the quality of work they can expect. I help you present your work with the craft and confidence it deserves.",
        "Beyond the portfolio website itself, I help with personal brand strategy: positioning, narrative development, LinkedIn optimization, and content strategy. A strong personal brand means opportunities come to you rather than the other way around.",
      ],
    },
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion",
      "Vercel", "Figma", "Adobe Creative Suite", "Notion", "LinkedIn Optimization",
    ],
    workflow: [
      { step: 1, label: "Personal Brand Strategy", description: "Defining your positioning, target audience, and unique professional narrative." },
      { step: 2, label: "Content Audit", description: "Reviewing your existing work and identifying the best projects to highlight." },
      { step: 3, label: "Design Direction", description: "Creating a visual style that reflects your personality and professional identity." },
      { step: 4, label: "Portfolio Development", description: "Building the full portfolio website with all case studies and project pages." },
      { step: 5, label: "Content Writing", description: "Writing compelling project descriptions and professional bio." },
      { step: 6, label: "Launch & Optimization", description: "Deploying the portfolio and optimizing for SEO and performance." },
    ],
    deliverables: [
      "Complete portfolio website",
      "Personal brand guidelines",
      "Project case study pages",
      "Professional bio and positioning statement",
      "LinkedIn profile optimization",
      "SEO configuration",
      "Analytics setup",
    ],
    caseStudies: [
      { title: "Senior Engineer Portfolio", industry: "Technology", technologies: ["Next.js", "Figma", "Vercel"], href: "#", comingSoon: true },
      { title: "Designer Personal Brand", industry: "Creative", technologies: ["Framer", "Figma", "Content Strategy"], href: "#", comingSoon: true },
    ],
  },
  {
    id: "custom-software-development",
    number: "11",
    title: "Custom Software Development",
    tagline: "Bespoke software solutions engineered precisely for your unique business requirements.",
    icon: "Code2",
    imageSrc: "/images/services/custom-software-development.jpg",
    imageAlt: "Custom Software Development — abstract visualization of bespoke code architecture and software engineering",
    overview: {
      summary:
        "When off-the-shelf software doesn't fit, I build exactly what your business needs — custom tools, internal platforms, specialized workflows, and enterprise applications engineered for your specific requirements.",
      details: [
        "Custom software is an investment that pays dividends for years. Unlike generic SaaS tools that force you to adapt your business to their constraints, custom software is built around your processes, integrates with your existing systems, and gives you a competitive advantage that can't be purchased.",
        "I specialize in understanding complex business domains quickly and translating them into clean, maintainable software. Whether you need an internal ops platform, a specialized data tool, or a customer-facing application with unique requirements, I deliver production-quality software on time.",
      ],
    },
    technologies: [
      "React", "Next.js", "Python", "FastAPI", "Node.js", "TypeScript",
      "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS",
      "Elasticsearch", "WebSockets", "gRPC", "Microservices",
    ],
    workflow: [
      { step: 1, label: "Domain Discovery", description: "Deeply understanding your business domain, processes, and what makes your requirements unique." },
      { step: 2, label: "Requirements Engineering", description: "Translating business needs into precise technical specifications and user stories." },
      { step: 3, label: "System Design", description: "Architecting the system for your scale, performance, and maintainability requirements." },
      { step: 4, label: "Agile Development", description: "Iterative development with bi-weekly demos and continuous stakeholder feedback." },
      { step: 5, label: "Integration & Testing", description: "Connecting all system components and running comprehensive integration tests." },
      { step: 6, label: "Deployment & Support", description: "Production deployment with complete documentation and ongoing maintenance." },
    ],
    deliverables: [
      "Complete custom software system",
      "Technical architecture documentation",
      "API documentation (if applicable)",
      "System administration guide",
      "User manual and training",
      "Deployment and infrastructure setup",
      "90-day warranty support",
    ],
    caseStudies: [
      { title: "Internal Operations Platform", industry: "Logistics", technologies: ["React", "FastAPI", "PostgreSQL"], href: "#", comingSoon: true },
      { title: "Custom Analytics Tool", industry: "Media", technologies: ["Next.js", "Python", "Elasticsearch"], href: "#", comingSoon: true },
    ],
  },
];

/* =========================================================
   PROCESS STEPS
   ========================================================= */

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, label: "Discovery", icon: "Search", description: "Understanding your goals, users, and technical constraints." },
  { step: 2, label: "Planning", icon: "ClipboardList", description: "Defining scope, timeline, and approach." },
  { step: 3, label: "UI/UX", icon: "PenTool", description: "Wireframes, prototypes, and design systems." },
  { step: 4, label: "Architecture", icon: "Layers", description: "Scalable, maintainable system design." },
  { step: 5, label: "Development", icon: "Code2", description: "Building with modern best practices." },
  { step: 6, label: "Testing", icon: "CheckCircle", description: "QA, unit tests, and integration testing." },
  { step: 7, label: "Deployment", icon: "Rocket", description: "CI/CD pipeline and production launch." },
  { step: 8, label: "Support", icon: "Headphones", description: "Ongoing maintenance and optimization." },
];

/* =========================================================
   TECHNOLOGY CATEGORIES
   ========================================================= */

export const TECH_CATEGORIES: TechCategory[] = [
  { name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { name: "Backend", technologies: ["Node.js", "Python", "FastAPI", "Django", "Express.js"] },
  { name: "AI / ML", technologies: ["PyTorch", "TensorFlow", "LangChain", "OpenAI", "Hugging Face"] },
  { name: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "BigQuery"] },
  { name: "Cloud & DevOps", technologies: ["AWS", "Docker", "Vercel", "GCP", "CI/CD", "Kubernetes"] },
  { name: "Design", technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Framer"] },
];

/* =========================================================
   VALUE PROPOSITIONS
   ========================================================= */

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    number: "01",
    title: "End-to-End Execution",
    description: "From concept to deployment — I own the entire product lifecycle, eliminating handoff friction and coordination overhead.",
    icon: "Rocket",
  },
  {
    number: "02",
    title: "AI-First Thinking",
    description: "Every solution is evaluated for intelligent automation opportunities — bringing AI capabilities where they create the most impact.",
    icon: "Brain",
  },
  {
    number: "03",
    title: "Scalable Architecture",
    description: "Systems designed to grow. Clean code, modular design, and infrastructure that handles scale without costly rewrites.",
    icon: "Layers",
  },
  {
    number: "04",
    title: "Production Quality",
    description: "No shortcuts. Comprehensive testing, thorough documentation, and performance optimization in every single delivery.",
    icon: "Shield",
  },
  {
    number: "05",
    title: "Transparent Process",
    description: "Regular updates, clear milestones, and honest communication. You always know exactly where your project stands.",
    icon: "Eye",
  },
  {
    number: "06",
    title: "Continuous Partnership",
    description: "The relationship doesn't end at launch. Ongoing support, iterative optimization, and long-term partnership.",
    icon: "Handshake",
  },
];

/* =========================================================
   HOME PAGE PREVIEW — 6 featured services
   ========================================================= */

export const FEATURED_SERVICE_IDS = [
  "full-stack-web-development",
  "ai-machine-learning-solutions",
  "generative-ai-llm-applications",
  "mobile-app-development",
  "ui-ux-design",
  "data-engineering-automation",
];

export const FEATURED_SERVICES = SERVICES_DATA.filter((s) =>
  FEATURED_SERVICE_IDS.includes(s.id)
);
