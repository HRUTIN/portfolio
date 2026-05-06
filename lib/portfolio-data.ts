import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Cpu,
  DatabaseZap,
  Globe,
  Layers3,
  LineChart,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { type TechIconName } from "@/lib/tech-icons";

type SkillItem = {
  name: string;
  logo: TechIconName;
};

export const siteConfig = {
  name: "HRUTIN NAMMI",
  title: "Student Founder, AI Engineer, and Full-Stack Builder",
  description:
    "Premium 3D portfolio for a student founder building AI products, growth systems, and polished software end to end.",
  url: "https://www.hrutinnammi.in",
  email: "hrutinnammi@gmail.com",
  resume: "/HRUTIN-ai-ml-resume.pdf",
  ogImage: "/og-image.svg",
};

export const navigation = [
  { id: "hero", label: "Start" },
  { id: "profile", label: "Profile" },
  { id: "about", label: "About" },
  { id: "skills", label: "Stack" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" },
];

export const heroData = {
  eyebrow: "Available for internships, startup roles, and selective freelance builds",
  headline: "I design AI products and engineer the systems that make them scale.",
  blurb:
    "Student founder focused on AI, automation, and full-stack product execution. I ship prototypes fast, tighten them into deployable systems, and care about growth as much as architecture.",
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" as const },
    { label: "Contact Me", href: "#contact", variant: "secondary" as const },
    { label: "Resume", href: "/HRUTIN-ai-ml-resume.pdf", variant: "ghost" as const },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X / Twitter", href: "https://x.com" },
  ],
  credibility: [
    "Student founder",
    "Hackathon finalist",
    "AI builder",
    "Client systems",
    "Incubation-ready",
  ],
  metrics: [
    { label: "Products launched", value: "12+" },
    { label: "Users touched", value: "25k+" },
    { label: "Client automations", value: "18" },
  ],
};

export const aboutData = {
  story:
    "I operate at the intersection of engineering, product, and traction. That means building the system, understanding the user, and deciding what deserves to exist before writing more code.",
  intro:
    "The shift has been gradual but clear: structured roles taught execution, hackathons built technical confidence, freelance work exposed real user requirements, and Job Spring pushed the mindset from builder to owner.",
  cards: [
    {
      title: "Execution First",
      text: "I learned early that consistency, communication, and operating within real constraints matter just as much as raw technical ability.",
      icon: Rocket,
    },
    {
      title: "Builder to Owner",
      text: "The work moved from prototypes and roles into products, decisions, and responsibility for whether something should scale.",
      icon: ServerCog,
    },
    {
      title: "Systems + Product",
      text: "Now the focus is not only building features, but shaping systems that are usable, defensible, and aligned with real traction.",
      icon: Sparkles,
    },
  ],
  timeline: [
    {
      year: "2023",
      title: "Foundation + Exposure",
      detail:
        "Started in execution-heavy roles including Student Ambassador and Business Executive Intern. Learned how organizations operate, how to communicate, and how to work inside structured environments.",
      note:
        "Also explored compliance through an AML internship, which added exposure to real-world systems, process discipline, and risk thinking.",
    },
    {
      year: "2025",
      title: "Builder Phase Begins",
      detail:
        "Shifted from consuming to creating. Built and led communities like Coding Club and Google Next Club while participating in hackathons that demanded rapid prototyping and calm execution under pressure.",
      note: "This is where technical confidence started becoming real rather than theoretical.",
    },
    {
      year: "2024",
      title: "Real-World Execution",
      detail:
        "Moved beyond campus into real users and markets through freelance work in the LAC region. Worked against actual requirements instead of just ideas.",
      note: "This phase made the gap between a cool build and a usable product impossible to ignore.",
    },
    {
      year: "2024 - 2025",
      title: "Startup: Job Spring",
      detail:
        "Founded and built Job Spring with a focus on solving a real problem, not just shipping features. Handled MVP development, iteration cycles, and early positioning.",
      note: "The mindset changed here from builder to owner.",
    },
    {
      year: "Now",
      title: "Systems + Founder Thinking",
      detail:
        "Operating across engineering, product, and growth. Not just building, but deciding what is worth building, how it scales, and how it can gain traction.",
      note: "The current lens is leverage: systems, speed, clarity, and momentum.",
    },
  ],
};

export const profileData = {
  eyebrow: "Professional Profile",
  badge: "B.Tech AI / ML Engineering",
  headline: "AI/ML engineering across data, backend, and interface development.",
  description:
    "I focus on end-to-end systems that connect data preparation, model development, backend workflows, and usable interfaces.",
  identity: {
    name: "HRUTIN NAMMI",
    summary:
      "AI/ML engineering student building machine learning workflows, backend services, analytics tools, and responsive web interfaces.",
    photo: "/profile-photo.jpeg",
  },
  stats: [
    { value: "6+", label: "Projects" },
    { value: "AI + Web", label: "Core Focus" },
    { value: "1", label: "Internship" },
  ],
  focusCards: [
    {
      title: "Professional Focus",
      heading: "End-to-end AI/ML, analytics, and application development.",
      text: "I work across data preparation, model development, backend workflows, and front-end delivery so each project is functional, structured, and reviewable.",
    },
    {
      title: "Core Work",
      heading: "AI/ML systems, analytics workflows, and backend APIs.",
      text: "Most of my work is project-based: I define the problem, implement the core logic, and present the result in a clear and usable form.",
    },
    {
      title: "Engineering Approach",
      heading: "Clear architecture, practical implementation, and maintainable delivery.",
      text: "I prefer solutions that can be explained well, tested in parts, and extended without rewriting the entire system.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Programming Languages",
    description: "Core implementation languages for backend logic, prototyping, and problem solving.",
    icon: Code2,
    items: [
      { name: "Python", logo: "python" },
      { name: "Java", logo: "java" },
    ] satisfies SkillItem[],
  },
  {
    title: "Backend",
    description: "API design and service development for structured, production-friendly systems.",
    icon: DatabaseZap,
    items: [
      { name: "FastAPI", logo: "fastapi" },
      { name: "Flask", logo: "flask" },
      { name: "REST APIs", logo: "rest" },
    ] satisfies SkillItem[],
  },
  {
    title: "Frontend",
    description: "Readable interfaces with utility-first styling and lightweight interactivity.",
    icon: Layers3,
    items: [
      { name: "TailwindCSS", logo: "tailwindcss" },
      { name: "JavaScript", logo: "javascript" },
      { name: "HTML", logo: "html" },
    ] satisfies SkillItem[],
  },
  {
    title: "Databases",
    description: "Relational and cloud-backed data layers for fast product iteration.",
    icon: Globe,
    items: [
      { name: "MySQL", logo: "mysql" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Supabase", logo: "supabase" },
    ] satisfies SkillItem[],
  },
  {
    title: "Cloud & DevOps",
    description: "Deployment and container basics for shipping projects beyond local development.",
    icon: Cpu,
    items: [
      { name: "Azure", logo: "azure" },
      { name: "AWS basics", logo: "aws" },
      { name: "Docker", logo: "docker" },
    ] satisfies SkillItem[],
  },
  {
    title: "AI / ML",
    description: "Applied computer vision, ML fundamentals, language workflows, and LLM integration.",
    icon: BrainCircuit,
    items: [
      { name: "OpenCV", logo: "opencv" },
      { name: "TensorFlow basics", logo: "tensorflow" },
      { name: "NLP", logo: "nlp" },
      { name: "LLM APIs", logo: "llm" },
    ] satisfies SkillItem[],
  },
  {
    title: "Tools",
    description: "Everyday build, design, and collaboration tools.",
    icon: WandSparkles,
    items: [
      { name: "Git", logo: "git" },
      { name: "VS Code", logo: "vscode" },
      { name: "Figma", logo: "figma" },
    ] satisfies SkillItem[],
  },
];

export const journeyData = [
  {
    phase: "Startup Lab",
    role: "Founder / Product Engineer",
    period: "2025 - Present",
    detail:
      "Building AI-first products with a focus on workflow compression, growth surfaces, and founder-speed experimentation.",
    tags: ["Product strategy", "AI systems", "Go-to-market"],
  },
  {
    phase: "Client Systems",
    role: "Freelance Automation Engineer",
    period: "2024 - 2025",
    detail:
      "Delivered internal dashboards, lead routing pipelines, and automation stacks that removed repetitive work and improved response speed.",
    tags: ["Automation", "Integrations", "Ops"],
  },
  {
    phase: "Hackathon Circuit",
    role: "Builder / Pitcher",
    period: "2023 - 2025",
    detail:
      "Shipped fast under constraints, worked across cross-functional teams, and learned to make demos feel inevitable instead of incomplete.",
    tags: ["Hackathons", "Rapid prototyping", "Storytelling"],
  },
  {
    phase: "Engineering Foundation",
    role: "Full-Stack Developer",
    period: "2022 - 2024",
    detail:
      "Learned the core disciplines: frontend rigor, API design, databases, auth, and the habit of shipping end-to-end instead of in fragments.",
    tags: ["Full stack", "DX", "Deployment"],
  },
];

export const projectFilters = ["All", "AI", "Full Stack", "Automation", "Startup", "Client Work"] as const;

export const projects = [
  {
    title: "JobSpring",
    filter: ["Startup", "Full Stack"],
    problem: "Job discovery can feel noisy and repetitive for students and early-career users who need a clearer way to find relevant opportunities.",
    solution: "Built JobSpring as a focused product MVP around job discovery, iteration, and simpler user flows instead of feature-heavy complexity.",
    stack: ["Python", "FastAPI", "Flask", "OpenCV"],
    impact: "Helped shape a real product around a practical problem and pushed my work from project-building into product thinking.",
    live: "https://www.jobspring.org/",
    github: "https://github.com",
  },
  {
    title: "FlowPilot",
    filter: ["Automation", "Client Work"],
    problem: "A service business was losing leads across forms, WhatsApp, and manual spreadsheet follow-ups.",
    solution: "Designed a lead-routing engine with enrichment, CRM sync, reminder logic, and owner assignment.",
    stack: ["Next.js", "Node.js", "Postgres", "Webhook APIs", "n8n"],
    impact: "Improved first-response speed and turned a messy intake process into a tracked pipeline.",
    live: "",
    github: "https://github.com",
  },
  {
    title: "PromptLayer Studio",
    filter: ["AI", "Full Stack"],
    problem: "Teams building with LLMs lacked a fast way to test prompts, compare outputs, and review failure cases.",
    solution: "Created a prompt experiment dashboard with versioning, dataset runs, and side-by-side evaluation views.",
    stack: ["React", "TypeScript", "Python", "OpenAI", "Supabase"],
    impact: "Gave builders a tighter experimentation loop and clearer prompt quality signals.",
    live: "",
    github: "https://github.com",
  },
  {
    title: "LocalMind",
    filter: ["AI", "Full Stack"],
    problem: "Most AI tools depend on the cloud, which makes personal document search difficult for users who care about privacy and local control.",
    solution: "Built a local, privacy-first AI workspace that lets users chat with PDFs, notes, and text files through an offline assistant using a local RAG pipeline.",
    stack: ["Python", "FastAPI", "FAISS", "SQLite", "React", "Ollama"],
    impact: "Turned personal files into a searchable offline knowledge workspace without sending user data to external servers.",
    live: "https://github.com/Vinaykalacharla/LOCALMIND-OS",
    github: "https://github.com",
  },
];

export const proofData = [
  { label: "Hackathons shipped", value: "9", note: "Across AI, product, and growth-focused problem statements.", icon: Code2 },
  { label: "Client systems deployed", value: "18", note: "Automation stacks, dashboards, and lead ops flows in production.", icon: BriefcaseBusiness },
  { label: "Founder milestones", value: "3", note: "Incubation conversations, live prototypes, and early traction experiments.", icon: LineChart },
  { label: "Delivery reliability", value: "99%", note: "Projects built with clean handoff, observability, and maintainable architecture.", icon: ShieldCheck },
];

export const testimonials = [
  {
    quote:
      "He thinks like a founder, not just a developer. The product improved because he challenged the workflow, not because he blindly implemented it.",
    name: "Startup Advisor",
    role: "Product Mentor",
  },
  {
    quote:
      "Fast execution without chaotic code. That combination is rare, especially from someone still this early in their career.",
    name: "Client Partner",
    role: "Operations Lead",
  },
];

export const contactData = {
  kicker: "Let's build something that matters.",
  text:
    "If you need someone who can move from concept to shipped product, handle both AI and application layers, and care about clarity under pressure, I'm interested.",
  contactPoints: [
    { label: "Email", value: "hrutinnammi@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=hrutinnammi@gmail.com" },
    { label: "Website", value: "www.hrutinnammi.in", href: "https://www.hrutinnammi.in" },
    { label: "LinkedIn", value: "linkedin.com/in/hrutin", href: "https://linkedin.com" },
    { label: "GitHub", value: "github.com/hrutin", href: "https://github.com" },
  ],
};
