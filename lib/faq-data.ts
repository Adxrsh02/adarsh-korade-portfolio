export interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

/**
 * FAQ DATA SOURCE
 * Exact source material from faq.md.
 * DO NOT modify questions, answers, or wording.
 */
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-01",
    number: "01",
    question: "What kind of roles are you looking for?",
    answer:
      "I’m mainly looking for AI/ML Engineer, Data Engineer, and Generative AI Engineer roles where I can work on real-world data, AI, RAG, LLM, and scalable engineering problems.",
  },
  {
    id: "faq-02",
    number: "02",
    question: "What is your professional experience?",
    answer:
      "I have 1 year of hands-on industry experience at Jio Platforms Limited, working with the RAFM team on data engineering and AI/ML-related projects involving large-scale telecom data.",
  },
  {
    id: "faq-03",
    number: "03",
    question: "What technologies do you work with?",
    answer:
      "My core technologies include Python, SQL, PySpark, Apache Spark, Kafka, Hive, HDFS, Airflow, LangChain, RAG, LLMs, NL2SQL, and Generative AI.",
  },
  {
    id: "faq-04",
    number: "04",
    question: "Do you have experience working with real-world data?",
    answer:
      "Yes. At Jio, I worked with large-scale telecom data and enterprise data pipelines, including ETL, data processing, validation, reconciliation, and AI-based querying.",
  },
  {
    id: "faq-05",
    number: "05",
    question: "What kind of AI/ML projects have you worked on?",
    answer:
      "I have worked on RAG pipelines, NL2SQL systems, LLM-based applications, schema retrieval, embeddings, and Generative AI solutions, along with traditional data engineering workflows.",
  },
  {
    id: "faq-06",
    number: "06",
    question: "What did you learn from your time at Jio?",
    answer:
      "Beyond technology, Jio taught me how to work in a real corporate environment — take ownership, work with teams, handle problems, communicate clearly, and build solutions that have practical business value.",
  },
  {
    id: "faq-07",
    number: "07",
    question: "Can you work on both AI and Data Engineering projects?",
    answer:
      "Yes. I enjoy working at the intersection of data engineering and AI, especially where reliable data pipelines become the foundation for intelligent applications.",
  },
  {
    id: "faq-08",
    number: "08",
    question: "Are you open to opportunities outside your current specialization?",
    answer:
      "Yes. I’m open to opportunities where I can learn, contribute, and grow — especially roles related to AI/ML, Data Engineering, GenAI, and backend/data systems.",
  },
  {
    id: "faq-09",
    number: "09",
    question: "Can I collaborate with you on a project?",
    answer:
      "Absolutely. I’m open to meaningful AI, Data Engineering, GenAI, and technical projects where I can contribute my skills while learning from the people I work with.",
  },
  {
    id: "faq-10",
    number: "10",
    question: "How can I get in touch with you?",
    answer:
      "The easiest way is through the contact form on this page. You can also connect with me through LinkedIn or GitHub. I’m always happy to discuss opportunities, projects, and interesting ideas.",
  },
];
