// Content data extracted from CV
// Javier Rodríguez Viñas - Lead Frontend Engineer & UX Specialist

export const personal = {
  name: "Juan Mateo Núñez Marquisio",
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
  short: "I am currently completing my Bachelor's degree in Economics and will relocate to the Zurich area in August/September 2026. I am seeking entry-level, internship, or graduate opportunities in banking, finance, or business-related roles, where I can contribute from the start while continuing to learn in a demanding and international environment.",
  full: [
    "I am currently completing my Bachelor's degree in Economics and will relocate to the Zurich area in August/September 2026. I am seeking entry-level, internship, or graduate opportunities in banking, finance, or business-related roles, where I can contribute from the start while continuing to learn in a demanding and international environment.",
    "Before fully focusing on my studies, I competed on the ATP Tour at 19. That experience shaped the way I work: with discipline, consistency, resilience, and the ability to perform under pressure. It also taught me to stay calm, adapt quickly, and take responsibility in demanding situations.",
    "At 24, I have lived in Uruguay, Spain, and Sweden, and have also spent meaningful time in the United States, Switzerland, and Norway. This international background has given me a broad perspective and a strong ability to adapt. I speak Spanish, English, and Swedish, and I am currently learning German to better integrate into Switzerland.",
    "Through my degree in Economics, I have built a solid foundation in economics, business, and finance, while also gaining exposure to areas such as marketing, taxation, entrepreneurship, and product development. This broader background has strengthened my analytical thinking and my ability to learn quickly and adapt across different types of work.",
    "What I bring is resilience, international perspective, analytical ability, and a strong willingness to learn. I am calm, dependable, and easy to work with, while also holding myself to high standards. I value professionalism, clarity, and steady execution.",
    "Zurich especially appeals to me because of its international outlook, strong business environment, and understated ambition. It is a place whose focus and seriousness align well with the kind of person I am and the kind of environment in which I do my best work.",
    "I would welcome the opportunity to contribute, grow, and build a strong long-term career.",
  ],
};

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: "remote" | "hybrid" | "onsite";
  description?: string;
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
    highlights: [
      "Managing VAT compliance for companies across Europe in multi-jurisdiction, deadline-driven environments.",
      "Working across VAT returns, annual VAT filings, ledgers, SAFT and Intrastat reporting, while maintaining daily communication with clients by phone, email and chat.",
      "The role has strengthened my Excel skills, attention to detail, and ability to stay calm and accurate under pressure, especially when key information arrives close to filing deadlines.",
    ],
  },
  {
    role: "Selected Nova Member",
    company: "Nova Talent",
    companyUrl: "https://www.novatalent.com/",
    period: "AUG 2025 → PRESENT",
    location: "Remote",
    type: "remote",
    highlights: [
      "Selected member of Nova Talent, a global professional network that brings together high-potential talent through mentoring, curated introductions, events and exclusive communities.",
    ],
  },
  {
    role: "Financial Analyst Intern",
    company: "Denis Suárez Foundation",
    companyUrl: "https://fundaciondenissuarez.com/",
    period: "JUN 2025 (1 MONTH INTERNSHIP)",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    highlights: [
      "Developed strategic projects aimed at expanding the Foundation's presence beyond Vigo and across Galicia.",
      "Supported initiatives designed to increase fundraising capacity and strengthen long-term growth.",
      "Gained insight into how a foundation operates, and how its objectives and structure differ from those of a traditional business.",
      "Contributed from a consulting perspective to branding and marketing, helping improve communication and positioning."
    ],
  },
  {
    role: "Founder",
    company: "NET",
    companyUrl: "https://net-app.io/",
    period: "JUN 2024 → Present",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    highlights: [
      "Building a platform that connects racket sports professionals with job opportunities.",
      "Leading NET from a CEO and CMO perspective, with responsibility across branding, product strategy, finance and overall business direction.",
      "Leading the visual identity and UX/UI of the product, while also driving market research and product strategy",
      "Using NET to stay sharp, keep learning and continue developing across design, product, strategy and entrepreneurship."
    ],
  },
  {
    role: "Co-Founder & Marketing Manager",
    company: "Tripnest.io / Skine.no",
    period: "2021 → 2024",
    location: "Remote (Oslo, NO)",
    type: "remote",
    highlights: [
      "What started as an attempt by two young friends to see if we could build something in that world became a valuable learning experience in marketing and design while studying my Economics degree.",
      "Worked on two early-stage startups and led work across design, branding, graphics and social media.",
      "Helped build travel platform (Tripnest) with 1.2M+ listings, focused on a B2B.",
      "Supported the growth of a B2C beauty comparison platform (Skine) through design, user communication, PR and collaborations with 30+ influencers.",
      "Both projects were eventually closed for strategic and financial reasons"
    ],
  },
  {
    role: "Customer Service & VIP Lounge Staff",
    company: "Carrasco International Airport",
    companyUrl: "https://aeropuertodecarrasco.com.uy/en/",
    period: "2021 → 2022",
    location: "Onsite (Montevideo, UY)",
    type: "onsite",
    highlights: [
      "Assisted VIP travelers across lounge reception, the members area and bar service.",
      "Helped receive and guide passengers through migration and security airport",
      "Worked rotating shifts from 7:00 to 15:00 or from 23:00 to 7:00.",
      "Supported passengers by phone, email and chat, helping make their travel experience smoother and less stressful."
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
    name: "Data & AI tools",
    skills: [
      { name: "Excel" },
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
    name: "Others",
    skills: [
      { name: "Notion", url: "https://www.notion.com/" },
    ],
    accent: "neutral",
  },
  {
    name: "Hard Skills",
    skills: [
      "Economics",
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
      "Resilience",
      "Interpersonal skills",
      "Discipline",
      "Purpose-driven ambition",
      "Work Ethic",
      "Cross-Cultural Communication",
      "Adaptability",
    ],
    accent: "warm",
  },
  {
    name: "Learning",
    skills: [
      "Python",
      "GitHub",
      "VS Code",
      "SQL",
    ],
    accent: "warm",
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  graduated: string;
  url?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Degree in Economics",
    institution: "University of Vigo (UVigo)",
    url: "https://www.uvigo.gal/",
    graduated: "SEP 2022 → JUN 2026",
  },
  {
    degree: "Study Away Exchange Program",
    institution: "Macalester College",
    url: "https://www.macalester.edu/",
    graduated: "AUG 2025 → DEC 2025",
  },
];



export const certifications = [
  {
    name: "Python",
    status: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/mate_/python-v9",
  },
  {
    name: "Responsive Web Design",
    status: "FreeCodeCamp",
    url: "https://www.freecodecamp.org/certification/mate_/responsive-web-design",
  },
  {
    name: "Financial Market Analysis",
    status: "IMF",
    url: "https://courses.edx.org/certificates/a2be632ab4544bfda76546ee3288e0c2",
  },
  {
    name: "INCUVI Avanza",
    status: "Uvigo Entreprenourship program",
    url: "https://www.uvigo.gal/en/study/employability/entrepreneurship/incuvi-scheduling",
  },
  {
    name: "TOEFL iBT",
    status: "TOEFL",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Professional Proficiency" },
  { name: "German", level: "Elementary (A1)" },
];

export const interests = {
  learning: ["Programming", "AI Tools"],
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


