export const personal = {
  name: "Thomas Gleiforst",
  title: "Lead Software Engineer / Technical Lead",
  location: "Kirkland, WA",
  email: "thomas@gleiforst.com",
  github: "https://github.com/thomas-gleiforst",
  linkedin: "",
  summary:
    "Senior software engineer with 5+ years owning features end-to-end across high-traffic production systems — from architecture and implementation through deployment, observability, and continuous improvement. An early and disciplined practitioner of AI-assisted development, using GitHub Copilot, Windsurf IDE, and multi-agent cloud workflows in production-grade ways daily. Experienced technical lead with a track record of mentoring engineers, driving code quality, and raising the engineering bar across cross-functional teams.",
}

export type ExperienceEntry = {
  company: string
  role: string
  dates: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "AT&T",
    role: "Lead Software Engineer / Technical Lead",
    dates: "January 2025 – Present",
    bullets: [
      "Use AI-assisted development tools — GitHub Copilot, Windsurf IDE, and cloud-based agentic coding workflows — in a disciplined, production-grade way across the full development lifecycle",
      "Developed custom AI-powered workflow skills for Windsurf IDE, enabling teammates to apply consistent patterns through natural language to generate knowledge vaults and LLDs — reducing ramp time and enforcing standards at the point of development",
      "Delegate story implementation to multiple cloud-based AI agents in parallel, compressing delivery timelines while personally driving architecture decisions and high-impact, complex features",
      "Produce AI-assisted Low Level Design documentation for epics, reducing ambiguity and aligning a 9-engineer cross-functional team before implementation begins",
      "Conduct approximately 20–30 technical interviews per year for senior and principal developer lead candidates, consistently raising the hiring bar across the organization",
      "Piloted an integrated operating model uniting business, product, research, analytics, design, and content leads — improving cross-functional alignment and reducing handoff friction across the delivery cycle",
      "Planned and delivered at least 3 end-to-end epics per Program Increment, partnering with release management, performance testing, and site reliability to maintain smooth bi-weekly production releases",
    ],
  },
  {
    company: "AT&T",
    role: "Senior Software Engineer",
    dates: "July 2022 – January 2025",
    bullets: [
      "Owned a new offers page construct end-to-end — architecture, implementation, A/B experimentation, and production monitoring — serving 250k users/month with a 14% engagement rate",
      "Designed and ran A/B experiments using feature flag-driven development to safely ramp features, instrument behavior, and iterate rapidly from real usage telemetry",
      "Architected a shared component library of 65+ reusable components, establishing the patterns and governance that multiple product teams built on top of",
      "Optimized legacy frontend code, improving Largest Contentful Paint (LCP) by 20% and achieving an 'A' accessibility rating",
      "Decreased production defect rate by 80% through rigorous code review culture, unit test creation, and consistent engineering standards",
      "Accelerated feature delivery 50% faster than traditional scrum cadence by championing a standalone Kanban model",
      "Built and maintain a Chrome extension adopted across the wider AT&T CTX org — streamlines debugging, enables production testing, and automates repetitive workflows for engineers, QA, and non-technical business partners",
    ],
  },
  {
    company: "AT&T",
    role: "Technology Development Program – Engineer I",
    dates: "May 2021 – July 2022",
    bullets: [
      "Centralized shared component architecture, removing 1,000+ lines of duplicate code and standardizing design decisions across teams",
      "Introduced granular chunk-based page loading to improve rendering performance across high-traffic customer experiences",
      "Debugged build and pipeline issues to maintain continuous deployment to dev and test environments",
    ],
  },
  {
    company: "AT&T",
    role: "Technology Development Program – Intern (Remote)",
    dates: "June 2020 – August 2020",
    bullets: [
      "Refactored a plain HTML/JS site into a full ReactJS dashboard with improved structure and maintainability",
      "Built a React Native app focused on accessibility and customer-first design",
    ],
  },
  {
    company: "Missouri S&T Mars Rover Design Team",
    role: "Software Architect",
    dates: "August 2018 – May 2021",
    bullets: [
      "Led migration of a C# WPF codebase to ReactJS + Electron, owning architecture decisions and mentoring the front-end team through the full transition",
      "Architected a multi-monitor, real-time desktop control application under strict hardware constraints — designing for reliability, performance, and maintainability",
      "Performed thorough code reviews across all repositories and taught 20 new developers agile, ticket-driven development practices",
      "Coordinated multidisciplinary communication on requirements, constraints, and design decisions across engineering disciplines",
    ],
  },
]

export const education = {
  school: "Missouri University of Science & Technology",
  degree: "B.S. Computer Science & B.S. Computer Engineering",
  detail: "GPA: 3.896 / 4.000",
}

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Node.js", "HTML/CSS", "C++/C#", "Java"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Electron", "Nx (monorepo)", "Bit.dev", "Sanity.io", "Jest", "Redux"],
  },
  {
    category: "Tools",
    items: ["Jira", "Azure DevOps", "Git", "Quantum Metric", "Dynatrace", "ELK", "Redis", "Figma", "GitHub Copilot", "Windsurf IDE"],
  },
  {
    category: "Methodologies",
    items: ["Scrum", "Kanban", "SAFe Agile (SAFe 5 Certified Agilist)"],
  },
  {
    category: "Additional",
    items: [
      "Web performance optimization",
      "Accessibility (WCAG)",
      "A/B testing & experimentation",
      "Feature flag driven development",
      "AI-assisted technical documentation",
      "Multi-agent cloud development",
      "Component library architecture",
      "Technical interviewing",
    ],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  tech: string[]
  link?: { label: string; href: string }
  visibility: "Private" | "Live" | "Public"
}

export const projects: Project[] = [
  {
    name: "Together Better",
    tagline: "Shared productivity app for couples",
    description:
      "Full-stack productivity app for couples — shared budgeting, meal planning with auto-generated shopping lists, and a recipe library. Built with Next.js wrapped in Electron via Nextron, shipping the same codebase as both a web app and a native desktop app. Google OAuth, MongoDB Atlas persistence, and a built-in test-data mode let preview deployments run fully in-memory without touching production data or secrets, backed by automated daily database backups via GitHub Actions.",
    tech: ["Next.js", "Electron", "TypeScript", "MongoDB", "NextAuth", "Tailwind CSS", "Radix UI"],
    visibility: "Private",
  },
  {
    name: "Foodie",
    tagline: "Storefront for a small-batch home bakery",
    description:
      "Ordering platform for a small-batch home bakery — weekly product drops with live inventory limits, a guided checkout and payment flow, and a recipe blog that can import recipes directly from a URL. Built with Next.js and Tailwind, backed by Vercel KV.",
    tech: ["Next.js", "TypeScript", "Vercel KV", "Tailwind CSS", "Radix UI"],
    visibility: "Private",
  },
  {
    name: "DnD Live",
    tagline: "Multiplayer first-person virtual tabletop",
    description:
      "A multiplayer, first-person virtual tabletop for D&D-style campaigns. One player hosts as Dungeon Master with live top-down or fly-around map editing — painting floors and walls in real time — while other players connect over the network and explore the dungeon from a first-person, grid-based movement view.",
    tech: ["Godot 4", "GDScript", "ENet Networking"],
    visibility: "Private",
  },
  {
    name: "Traveller Utils",
    tagline: "Foundry VTT module for Traveller 2e",
    description:
      "A Foundry Virtual Tabletop module for Traveller 2e campaigns: decodes Universal World Profiles (UWP), looks up trade codes, and calculates jump distances between star systems to speed up game prep at the table.",
    tech: ["JavaScript", "Foundry VTT API"],
    visibility: "Private",
  },
  {
    name: "kaitlin.gleiforst.com",
    tagline: "Photography & artist portfolio site",
    description:
      "A photography and artist portfolio and shop — category-based galleries, upcoming shows and events, an online shop, and a contact page. Statically exported and deployed via GitHub Pages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: { label: "Visit site", href: "https://kaitlin.gleiforst.com" },
    visibility: "Live",
  },
]
