// Content data extracted from CV
// Javier Rodríguez Viñas - Lead Frontend Engineer & UX Specialist

export const personal = {
  name: "Juan Mateo Nuñez Marquisio",
  title: "Economics Graduate",
  subtitle: "Former ATP Player | Final-year Economics student | Nova Talent",
  tagline: "Bridging design and code",
  email: "jmn.marquisio@gmail.com",
  phone: "+34 641 74 68 43",
  location: "Vigo, Spain",
  locationUrl: "https://maps.app.goo.gl/UJeRYwdfmHvyEmwm6",
  social: {
    linkedin: "https://www.linkedin.com/in/juanmateonunezmarquisio/",
    github: "https://github.com/jmnmarquisio",
  },
};

export const bio = {
  short: "I am currently completing my Bachelor's degree in Economics and will relocate to the Zurich area in August/September 2026. I am seeking entry-level, internship, or graduate opportunities in banking, finance, or business-related roles, where I can contribute from day one while continuing to learn in a demanding and international environment.",
  full: [
    "I am currently completing my Bachelor's degree in Economics and will relocate to the Zurich area in August/September 2026. I am seeking entry-level, internship, or graduate opportunities in banking, finance, or business-related roles, where I can contribute from day one while continuing to learn in a demanding and international environment.",
    "Before fully focusing on my studies, I competed as a professional tennis player on the ATP Tour at 19. That experience shaped the way I work: with discipline, ownership, dedication, and the ability to perform under pressure. It also taught me how to stay calm in demanding situations, adapt quickly, and keep moving forward with consistency.",
    "At 24, I have lived in Uruguay, Spain, and Sweden, and have also spent meaningful time in the United States, Switzerland, and Norway. Moving across different countries, cultures, and systems has given me a broad perspective and a strong ability to adapt. I speak Spanish, English, and Swedish, and I am currently learning German to better integrate into Switzerland.",
    "Through my degree in Economics, I have built a solid foundation in economics, business, and financial concepts. Along the way, I have also gained exposure to areas such as marketing, taxation, entrepreneurship, and product development, which has helped me understand how different parts of a business connect. This broader background has strengthened my analytical thinking and my ability to learn quickly, understand new frameworks, and adapt to different types of work.",
    "What I bring is a combination of resilience, international perspective, analytical ability, and a strong willingness to learn. I am known for being calm, solution-oriented, and easy to work with, while also taking responsibility and maintaining high standards for myself. I value professionalism, clarity, and steady execution.",
    "Zurich especially appeals to me because of its international outlook, strong business environment, and understated ambition. It is a place whose focus, seriousness, and calm intensity align well with the kind of person I am and the kind of environment in which I do my best work.",
    "I would welcome the opportunity to be part of a team where I can contribute, grow, and build a strong long-term career.",
  ],
};

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "remote" | "hybrid" | "onsite";
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Tax Consultant Intern",
    company: "Marosa VAT",
    companyUrl: "https://marosavat.com/",
    period: "FEB 2026 → JUN 2026",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Supporting EU-based and international companies with VAT compliance across multiple jurisdictions, including registrations, filings and cross-border reporting. Gaining strong exposure to EU regulation, compliance and international business operations.",
    highlights: [
      "Built from scratch a Next.js platform interfacing (via REST APIs & WebSockets) with Big Data systems (Spark, Kafka, MinIO) for failure prediction and medium-term self-correction",
      "Implemented real-time observability dashboards, solving the dual challenge of guiding user attention via subtle burst animations and meticulously managing performance to avoid saturating the React main thread. A consistently snappy experience was not an extra, but key for building user trust in the product",
      "Designed and built a complete Design System (inspired by Shopify Polaris) using progressive disclosure: extremely powerful and expressive technical UI that never feels overwhelming",
      "Developed 'physical' animations replicating analog control panels as a design nod to the industrial context this product aims to digitize",
      "Built a type-safe, procedural system for generating complex data tables on demand (sorting, filtering via criteria pattern, pagination). The challenge wasn't just building tables, but enabling anyone (even coding agents) to spin up new ones effortlessly and consistently",
    ],
  },
  {
    role: "Financial Analyst Intern",
    company: "Denis Suárez Foundation",
    companyUrl: "https://fundaciondenissuarez.com/",
    period: "JUN 2025",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Conducted financial and strategic analysis to identify ways to increase recurring revenue and support long-term growth. Delivered structured insights to support decision-making.",
    highlights: [
      "Spearheaded the development of a Self-Sovereign Identity (SSI) Android application, managing the full vertical from the Kotlin implementation to the creation of a bespoke Design System",
      "Collaborated on both frontend and backend architectures, narrowing the gap between security requirements and user experience",
      "Implemented efficient data anonymization algorithms in Python backends (NumPy, Pandas) for sensitive datasets",
      "Built and optimized security-critical SPAs using React and Vue, and mentored interns to raise the team's code quality standards",
    ],
  },
  {
    role: "Founder",
    company: "NET",
    companyUrl: "https://net-app.io/",
    period: "JUN 2024 → Present",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Building a platform that connects racket sports professionals with job opportunities. Leading product vision, market research, UX thinking and early-stage business strategy.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
  {
    role: "Co-Founder & Marketing Manager",
    company: "Tripnest.io / Skine.no",
    period: "2021 → 2024",
    location: "Remote (Oslo, NO)",
    type: "remote",
    description: "Co-founded digital ventures and led branding, marketing, UX/UI and growth initiatives. Worked with over 50 international content creators and contributed to the visibility and expansion of a platform with 1.2M property listings.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
  {
    role: "Customer Service & VIP Lounge Staff",
    company: "Carrasco International Airport",
    companyUrl: "https://aeropuertodecarrasco.com.uy/en/",
    period: "2021 → 2022",
    location: "Onsite (Montevideo, UY)",
    type: "onsite",
    description: "Worked directly with customers across phone, email and web support, while assisting VIP and high-net-worth travelers in a fast-paced airport environment.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
];

export interface TennisExperience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "remote" | "hybrid" | "onsite";
  description: string;
  highlights: string[];
}

export const tennisexperiences: TennisExperience[] = [
  {
    role: "Tax Consultant Intern",
    company: "Marosa VAT",
    companyUrl: "https://marosavat.com/",
    period: "FEB 2026 → JUN 2026",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Supporting EU-based and international companies with VAT compliance across multiple jurisdictions, including registrations, filings and cross-border reporting. Gaining strong exposure to EU regulation, compliance and international business operations.",
    highlights: [
      "Built from scratch a Next.js platform interfacing (via REST APIs & WebSockets) with Big Data systems (Spark, Kafka, MinIO) for failure prediction and medium-term self-correction",
      "Implemented real-time observability dashboards, solving the dual challenge of guiding user attention via subtle burst animations and meticulously managing performance to avoid saturating the React main thread. A consistently snappy experience was not an extra, but key for building user trust in the product",
      "Designed and built a complete Design System (inspired by Shopify Polaris) using progressive disclosure: extremely powerful and expressive technical UI that never feels overwhelming",
      "Developed 'physical' animations replicating analog control panels as a design nod to the industrial context this product aims to digitize",
      "Built a type-safe, procedural system for generating complex data tables on demand (sorting, filtering via criteria pattern, pagination). The challenge wasn't just building tables, but enabling anyone (even coding agents) to spin up new ones effortlessly and consistently",
    ],
  },
  {
    role: "Nova Talent Member",
    company: "Nova Talent",
    companyUrl: "https://www.novatalent.com/",
    period: "AUG 2025 → PRESENT",
    location: "Remote (SP)",
    type: "remote",
    description: "Supporting EU-based and international companies with VAT compliance across multiple jurisdictions, including registrations, filings and cross-border reporting. Gaining strong exposure to EU regulation, compliance and international business operations.",
    highlights: [
      "Built from scratch a Next.js platform interfacing (via REST APIs & WebSockets) with Big Data systems (Spark, Kafka, MinIO) for failure prediction and medium-term self-correction",
      "Implemented real-time observability dashboards, solving the dual challenge of guiding user attention via subtle burst animations and meticulously managing performance to avoid saturating the React main thread. A consistently snappy experience was not an extra, but key for building user trust in the product",
      "Designed and built a complete Design System (inspired by Shopify Polaris) using progressive disclosure: extremely powerful and expressive technical UI that never feels overwhelming",
      "Developed 'physical' animations replicating analog control panels as a design nod to the industrial context this product aims to digitize",
      "Built a type-safe, procedural system for generating complex data tables on demand (sorting, filtering via criteria pattern, pagination). The challenge wasn't just building tables, but enabling anyone (even coding agents) to spin up new ones effortlessly and consistently",
    ],
  },
  {
    role: "Financial Analyst Intern",
    company: "Denis Suárez Foundation",
    companyUrl: "https://fundaciondenissuarez.com/",
    period: "JUN 2025",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Conducted financial and strategic analysis to identify ways to increase recurring revenue and support long-term growth. Delivered structured insights to support decision-making.",
    highlights: [
      "Spearheaded the development of a Self-Sovereign Identity (SSI) Android application, managing the full vertical from the Kotlin implementation to the creation of a bespoke Design System",
      "Collaborated on both frontend and backend architectures, narrowing the gap between security requirements and user experience",
      "Implemented efficient data anonymization algorithms in Python backends (NumPy, Pandas) for sensitive datasets",
      "Built and optimized security-critical SPAs using React and Vue, and mentored interns to raise the team's code quality standards",
    ],
  },
  {
    role: "Founder",
    company: "NET",
    companyUrl: "https://net-app.io/",
    period: "JUN 2024 → PRESENT",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    description: "Building a platform that connects racket sports professionals with job opportunities. Leading product vision, market research, UX thinking and early-stage business strategy.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
  {
    role: "Co-Founder & Marketing Manager",
    company: "Tripnest.io / Skine.no",
    period: "2021 → 2024",
    location: "Remote (Oslo, NO)",
    type: "remote",
    description: "Co-founded digital ventures and led branding, marketing, UX/UI and growth initiatives. Worked with over 50 international content creators and contributed to the visibility and expansion of a platform with 1.2M property listings.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
  {
    role: "Customer Service & VIP Lounge Staff",
    company: "Carrasco International Airport",
    companyUrl: "https://aeropuertodecarrasco.com.uy/en/",
    period: "2021 → 2022",
    location: "Onsite (Montevideo, UY)",
    type: "onsite",
    description: "Worked directly with customers across phone, email and web support, while assisting VIP and high-net-worth travelers in a fast-paced airport environment.",
    highlights: [
      "Designed the visual identity and implemented critical workflows in a Vue/TypeScript SPA, transforming a CLI-only tool into a modern web product",
      "Significantly improved usability and visibility, enabling external stakeholders to leverage powerful data anonymization capabilities without technical friction",
    ],
  },
];

export interface Skill {
  name: string;
  url?: string;
}

export interface SkillCategory {
  name: string;
  skills: (string | Skill)[];
  accent?: "blue" | "warm" | "neutral" | "pink" | "cyan" | "emerald" | "violet" | "amber";
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Code & Data",
    skills: [
      "Python",
      "Excel"
    ],
    accent: "warm",
  },
  {
    name: "AI tools",
    skills: [
      { name: "ChatGPT", url: "https://chatgpt.com/" },
    ],
    accent: "neutral",
  },
  {
    name: "Design & UX",
    skills: [
      { name: "Figma", url: "https://www.figma.com" },
      { name: "Adobe", url: "https://www.adobe.com/" },
    ],
    accent: "neutral",
  },
  {
    name: "Hard Skills",
    skills: [
      "Economic Analysis",
      "Financial Markets",
      "Marketing",
      "Branding",
      "UX/UI",
      "Graphics",
      "Design",
      "VAT Compliance",
    ],
    accent: "cyan",
  },
  {
    name: "Soft Skills",
    skills: [
      "Strategic Thinking",
      "Interpersonal skills",
      "Client-Oriented Mindset",
      "Discipline",
      "Work Ethic",
      "Cross-Cultural Communication",
    ],
    accent: "warm",
  },
];

export const education = {
  degree: "B.Sc. in Economics",
  institution: "University of Vigo (UVigo)",
  graduated: "SEP 2022 → JUN 2026",
};

export const certifications = [
  {
    name: "Python",
    status: "FreeCodeCamp",
  },
  {
    name: "Responsive Web Design",
    status: "FreeCodeCamp",
  },
  {
    name: "Financial Market Analysis",
    status: "IMF",
  },
  {
    name: "INCUVI Avanza",
    status: "Uvigo Entreprenourship program",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Professional Proficiency" },
  { name: "German", level: "Elementary (A1)" },
];

export const interests = {
  learning: ["Python", "AI-powered coding tools (Cursor, Claude Code)", "VAT Compliance", "SQL"],
  personal: ["Tennis", "Music", "Photography", "Travel", "Films", "Pizza", "Sports"],
};

export interface Project {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  url?: string;
  github?: string;
  isCurrent?: boolean;
}

export const projects: Project[] = [
  {
    title: "Personal Site",
    type: "Digital Identity",
    description: "My personal spot on the web, designed with a focus on typography, motion, and extreme attention to detail.",
    highlights: [
      "Bespoke design system crafted from scratch to establish a unique visual identity for myself as a professional",
      "High-performance architecture built with Astro and Preact for near-instant interactions",
      "Automated SEO optimization and semantic structure for maximum digital discoverability",
    ],
    github: "https://github.com/JaviVinnas/personal-site",
    isCurrent: true,
  },
  {
    title: "Clinical Patient Tracker",
    type: "Technical Showcase",
    description: "Patient management app optimized for perceived performance.",
    highlights: [
      "Implemented Next.js App Router with a composable skeleton strategy: each component exports its own skeleton, making complex loading states incrementally easy to build via standard React composition",
      "Custom design based on shadcn/ui for a functional, modern aesthetic that conveys calm",
    ],
    github: "https://github.com/JaviVinnas/technical-assignment-kannact",
  },
];


