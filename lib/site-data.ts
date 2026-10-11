export const profile = {
  name: "Lovely Ram",
  initials: "LR",
  title: "Engineering Leader · Solution Architect",
  tagline: "Cloud-Native Data & SaaS Platforms · Agentic AI Systems",
  location: "India",
  yearsExperience: "14+",
  summary:
    "Software engineering leader and architect with 14+ years building secure, scalable, data-intensive enterprise platforms — including 5 years leading and mentoring engineering teams. I own the full lifecycle, from requirements and system design to cloud-native delivery on AWS and Azure, and today I lead Generative and Agentic AI initiatives for a global retail platform.",
};

export const links = {
  github: "https://github.com/lovelyontech-crypto",
  linkedin: "https://www.linkedin.com/in/lovely-ram-62730b36",
  email: "lovelyontech@gmail.com",
  resume: "/resume.pdf",
};

export const impact = [
  { value: "14+", label: "Years building enterprise platforms" },
  { value: "90+", label: "Microservices secured through vulnerability remediation" },
  { value: "~40–50%", label: "End-to-end latency reduction via JVM & concurrency tuning" },
  { value: "24-yr", label: "Legacy system retired and migrated to a modern platform" },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  focus: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer / Tech Lead — Solution Architect (AI & Agentic AI)",
    company: "Adidas India",
    period: "2023 — Present",
    focus: "Retail merchandising (M3 / Market & Range Management)",
    highlights: [
      "Architected a central Agentic AI Orchestrator that interprets intent, plans agent task flows with human-in-the-loop clarification, and routes only validated requests to domain-bounded MCP servers — now a reusable shared capability across multiple use cases.",
      "Defined bounded autonomy for agents — validation, guardrails, timeouts, and fallbacks — separating LLM reasoning from enterprise execution so consequential actions stay secure and auditable.",
      "Built a RAG-based incident-management copilot that classifies incidents SEV-1 to SEV-4 and recommends self-healing actions, reducing manual triage for the support team.",
      "Designed a hybrid rule-based/LLM support-automation engine on Kafka, with local Ollama execution to cut inference cost and external-dependency risk.",
      "Helped decommission RMA, a 24-year-old legacy system, through phased migration testing, data reconciliation, and a runbook-driven production go-live.",
      "Led vulnerability remediation across 90+ microservices with Security and cut end-to-end latency by ~40–50%.",
    ],
    stack: ["Java 17/21", "Python", "Kafka", "MCP", "LangGraph", "Databricks Genie", "ServiceNow", "Kubernetes"],
  },
  {
    title: "Senior Software Engineer / Tech Lead — Solution Architect",
    company: "Capita India",
    period: "2021 — 2023",
    focus: "Payments (Pay360 multi-tenant SaaS)",
    highlights: [
      "Led a team of 5 engineers delivering Pay360, a microservices-based, multi-tenant SaaS payments platform — owning architecture, standards, quality, and delivery.",
      "Designed secure payment APIs with JWT/OAuth2 and tenant-scoped permissions for merchants, ISVs, and operations, plus Kafka-based integration for throughput and resilience.",
      "Introduced architecture and engineering standards that improved delivery efficiency by ~20% and reduced defects and rework by ~40–50%.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "OAuth2", "JWT", "Microservices"],
  },
  {
    title: "Product Developer",
    company: "DXC Technology",
    period: "2014 — 2021",
    focus: "Insurance (life, group & general)",
    highlights: [
      "Built and enhanced insurance solutions on CSC's Integral™ policy-administration suite — product configuration, policy and group management, and analytics.",
      "Delivered global capabilities: multi-currency, multi-language, multi-company/multi-branch processing, and country-specific regulatory configuration.",
      "Contributed to solution design, legacy modernization, and enterprise integration on ProductStage and the ITS microservice.",
    ],
    stack: ["Java", "Spring", "REST APIs", "JavaScript", "jQuery"],
  },
  {
    title: "Software Engineer",
    company: "Diaspark · Datamatics (Honeywell Technology)",
    period: "2012 — 2014",
    focus: "Enterprise insurance & business systems",
    highlights: [
      "Developed enterprise insurance applications and service-oriented components using Java, Spring, and REST APIs.",
      "Built features for Honeywell's internal Business Management System, from development through testing and defect resolution.",
    ],
    stack: ["Java", "Spring", "REST APIs", "SOA"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  visualLabel: string;
  visualKicker: string;
  visualTitle: string;
  href?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    name: "Agentic AI Orchestrator",
    description:
      "Enterprise orchestrator with a reusable MCP-based framework for the retail domain: intent understanding, human-in-the-loop clarification, guardrails, and controlled tool access — adopted as a shared capability across teams.",
    stack: ["Agentic AI", "MCP", "LangGraph", "Guardrails"],
    visualLabel: "orchestrator",
    visualKicker: "ENTERPRISE · ADIDAS",
    visualTitle: "Bounded autonomy",
  },
  {
    name: "AI Incident Copilot",
    description:
      "RAG over historical logs, runbooks, and internal documentation that classifies incidents SEV-1 to SEV-4 and recommends self-healing actions for engineers to verify.",
    stack: ["RAG", "Vector search", "LLMs", "IT Operations"],
    visualLabel: "incident triage",
    visualKicker: "ENTERPRISE · ADIDAS",
    visualTitle: "Faster triage",
  },
  {
    name: "FundKuber Social Agent",
    description:
      "AI-driven SaaS automation platform with a multi-stage agentic workflow for planning, research, copywriting, compliance, and publishing to Facebook, Instagram, and LinkedIn — with provider fallbacks and stage-level observability.",
    stack: ["Agentic workflow", "LLM orchestration", "Observability", "Social APIs"],
    visualLabel: "content pipeline",
    visualKicker: "INDEPENDENT · 2025",
    visualTitle: "Plan → publish",
  },
  {
    name: "Fund Kuber Portfolio & Risk Platform",
    description:
      "Full-stack platform for a mutual fund distributor: onboarding, risk profiling, statement extraction, goal simulation, and AI chat — with deterministic financial calculations beneath the AI layer to stay auditable.",
    stack: ["Full-stack", "AI chat", "Document extraction", "FinTech"],
    visualLabel: "portfolio analytics",
    visualKicker: "INDEPENDENT · 2025",
    visualTitle: "Compliance-safe AI",
  },
  {
    name: "Telecom 5G Knowledge Assistant",
    description:
      "Semantic Q&A over 5G technical specifications: chunking, dense embeddings in a vector database, semantic retrieval, and source-grounded answer generation.",
    stack: ["RAG", "Embeddings", "Vector DB", "Semantic search"],
    visualLabel: "knowledge search",
    visualKicker: "INDEPENDENT",
    visualTitle: "Grounded answers",
  },
  {
    name: "NotePicker",
    description:
      "Manifest V3 Chrome extension for note-taking and highlighting on the web, designed and built from PRD through implementation.",
    stack: ["TypeScript", "JavaScript", "Chrome MV3", "HTML/CSS"],
    visualLabel: "extension",
    visualKicker: "INDEPENDENT",
    visualTitle: "Capture as you read",
  },
];

export const skillGroups = [
  {
    name: "Architecture & Languages",
    items: ["Java 8–21", "Python", "Spring Boot", "Microservices", "Event-Driven Architecture", "Multi-Tenant SaaS", "System Design", "ADRs & NFRs"],
  },
  {
    name: "Generative & Agentic AI",
    items: ["Agentic AI", "MCP / FastMCP", "LangGraph", "RAG", "Vector Databases", "Guardrails", "AWS Bedrock", "Databricks Genie", "Ollama"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "CI/CD & DevSecOps", "Prometheus", "Grafana"],
  },
  {
    name: "Data & Platforms",
    items: ["Apache Kafka", "Databricks Lakehouse", "PostgreSQL", "Oracle", "MongoDB", "Data Migration & Reconciliation", "ServiceNow"],
  },
];

export const domains = [
  { name: "Retail & Merchandising", detail: "Range, segmentation, pricing, volume, and margin data at Adidas scale." },
  { name: "Payments", detail: "Multi-tenant SaaS payments with secure APIs and tenant-scoped permissions." },
  { name: "Insurance", detail: "Life, group, and general insurance policy administration across regions." },
];

export const credentials = [
  "Professional Certification in AI & Emerging Technologies — IIT Hyderabad, 2026",
  "SAFe (Scaled Agile Framework) Certified",
  "Master of Computer Applications (MCA) — BPUT, Odisha, 2011",
];

export type TalkEvent = {
  title: string;
  event: string;
  date: string;
  location: string;
  type: "Talk" | "Panel" | "Workshop" | "Attended";
  description?: string;
  href?: string;
};

// Add talks, panels, workshops, or conferences here. The section is hidden while this list is empty.
export const events: TalkEvent[] = [];
