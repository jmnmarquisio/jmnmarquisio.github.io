// Content data extracted from CV
// Javier Rodríguez Viñas - Lead Frontend Engineer & UX Specialist

export const personal = {
  name: "Juan Mateo Núñez Marquisio",
  title: "Product Analyst",
  subtitle: "Economics Graduate - Former ATP Player",
  email: "jmn.marquisio@gmail.com",
  phone: "+34 641 74 68 43",
  location: "Vigo, Spain",
  locationUrl: "https://maps.app.goo.gl/UJeRYwdfmHvyEmwm6",
  social: {
    linkedin: "https://www.linkedin.com/in/juanmateonunezmarquisio/",
    github: "https://github.com/jmnmarquisio",
  },
};

export const about = {
  label: "About Me",
  title: "Hi, Mateo here!",
  intro:
    "I grew up moving between countries. I was born in Uruguay, spent much of my childhood in Spain and Sweden, later moved back to Uruguay, and eventually returned to Spain to study Economics.",
  points: [
    "For many years, tennis was the center of my life. I competed internationally from a young age and reached ATP Challenger level at 19. Tennis shaped a lot of who I am today: discipline, resilience, patience, and the desire to keep improving.",
    "Over time, my interests expanded beyond tennis. While studying Economics, I became increasingly interested in product, marketing, finance, and entrepreneurship.",
    "Today, I'm an Economics graduate working as a Product Analyst at Marosa by Wolters Kluwer."
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
    role: "Product Analyst",
    company: "Marosa by Wolters Kluwer",
    companyUrl: "https://marosavat.com/",
    period: "JUL 2026 → PRESENT",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    highlights: [
      "As a Product Analyst, I work closely with our core product, VATify, sitting between Compliance, Product, and Development. I help identify and solve day-to-day product issues, support our Product Owner and UX work, and contribute to improving the product. The role also gives me regular exposure to senior leadership, including our CPTO, COO and CEO.",
    ],
  },
  {
    role: "Consultant Intern",
    company: "Marosa",
    companyUrl: "https://marosavat.com/",
    period: "FEB 2026 → JUN 2026",
    location: "Onsite (Vigo, SP)",
    type: "onsite",
    highlights: [
      "Support clients managing day-to-day communication through email, calls, and meetings. Help resolve client questions, coordinate with internal and external stakeholders, and maintain and organized, high-quality client experience. ",
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
      "One month internship where I supported financial and strategic analysis for a sports foundation, using Excel to organize data and build reports. Evaluated opportunities to increase revenue, improve structure, and support long-term sustainability. "
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
      "Building a side project to connect racket-sports professionals with job opportunities. Using the project to deepen my understanding of product, user & market research, branding, marketing, client relationships, and early-stage product thinking. Spoke with players, coaches and academies to better understand their needs, pain points, and decision-making process. "
    ],
  },
  {
    role: "Marketing & Branding Associate",
    company: "Tripnest",
    period: "2021 → 2024",
    location: "Remote (Oslo, NO)",
    type: "remote",
    highlights: [
      "Worked across two early-stage projects in travel and e-commerce, supporting marketing strategy, branding, UX/UI design, digital growth and user acquisition. Collaborated with 50+ content creators in Scandinavia, helped develop growth initiatives, and gained hands-on experience translating consumer behaviour, visual identity and market positioning into clearer product and brand decisions."
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
      "Delivered customer support across phone, email, and web channels while assisting VIP travellers and international passengers. Built strong habits in service quality, clear communication, fast problem-solving, and attention to detail."
    ],
  },
];

export interface TennisExperience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  type?: "remote" | "hybrid" | "onsite";
  description?: string;
  highlights: string[];
}

export const tennisExperience: TennisExperience[] = [
  {
    role: "Volunteer Assistant Coach",
    company: "Macalester College Athletics",
    companyUrl: "https://athletics.macalester.edu/",
    period: "FALL 2025",
    location: "Onsite (St. Paul, United States)",
    type: "onsite",
    highlights: [
      "Supported men's and women's teams through practise organization, on-court feedback, player communication, and team environment support.",
    ],
  },
  {
    role: "Private Tennis Coach",
    company: "GR Engadin SA",
    companyUrl: "https://stmoritz.gr-mountain.shop/en/summer/",
    period: "SUMMERS 2024 & 2025",
    location: "Onsite (St. Moritz, Switzerland)",
    type: "onsite",
    highlights: [
      "Coached international clients in premium environments across St. Moritz and Silvaplana, including the Kulm Hotel and Badrutt’s Palace. Adapted communication and training to different levels, expectations, and cultural backgrounds.",
    ],
  },
  {
    role: "Professional Tennis Player (ATP)",
    company: "ATP",
    companyUrl: "https://www.atptour.com/en/atp-challenger-tour",
    period: "2021",
    highlights: [
      "Reached ATP Challenger level. Gained first-hand experience in elite competitions, international travel, pressure management, injury setbacks, and the discipline required to keep improving in high-performance environments."
    ],
  },
  {
    role: "Semi professional Tennis Player (ITF)",
    company: "ITF",
    companyUrl: "https://www.itftennis.com/en/",
    period: "2019",
    highlights: [
      "Began my semi-professional tennis career at 17 while completing high school remotely.",
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
    name: "Core tools",
    skills: [
      { name: "Excel" },
      { name: "ChatGPT", url: "https://chatgpt.com/" },
      { name: "Notion", url: "https://www.notion.com/" },
      { name: "Figma", url: "https://www.figma.com" },
      { name: "Adobe", url: "https://www.adobe.com/" },

    ],
    accent: "neutral",
  },
  {
    name: "Learning tools",
    skills: [
      { name: "Github", url: "https://github.com/" },
      { name: "VS Code", url: "https://code.visualstudio.com/" },
      { name: "Jira", url: "https://www.atlassian.com/software/jira" },
      { name: "Python" },
      { name: "SQL" },
      { name: "Claude" }
    ],
    accent: "neutral",
  },
  {
    name: "Soft Skills",
    skills: [
      "Resilience",
      "Interpersonal skills",
      "Discipline",
      "Purpose-driven ambition",
      "Work Ethic",
      "Adaptability",
    ],
    accent: "warm",
  },
  {
    name: "Skills",
    skills: [
      "Professional Athlete Experience",
      "Economic Analysis",
      "Cross-Cultural Communication",
      "Operations",
      "Workflow Coordination",
      "Client Experience",
      "User Research",
      "Marketing",
      "Branding",
    ],
    accent: "cyan",
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
    name: "TOEFL iBT",
    status: "Score: 100/120",
    url: "/documents/toefl-score-report.pdf"
  },
  {
    name: "Digital Marketing",
    status: "ADM",
    url: "https://test.adm.com.uy/"
  },
  {
    name: "INCUVI Avanza",
    status: "Uvigo Entreprenourship program",
  },
  {
    name: "Graphic Design & Visual Content",
    status: "Instituto Bios",
  },
  {
    name: "Relational Databases Certification",
    status: "FreeCodeCamp - In Progress",
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "Swedish", level: "Native" },
  { name: "English", level: "Professional Proficiency" },
];

export const interests = {
  learning: ["Programming", "AI Tools"],
  personal: ["Tennis", "Music", "Photography", "Travel", "Films", "Pizza", "Sports"],
};

export const geography = {
  lived: ["Uruguay", "Spain", "Sweden"],
  livedExtended: ["United States", "Switzerland", "Norway"],
  worked: ["Uruguay", "Spain", "Sweden", "United States", "Switzerland", "Norway"],
};

export const volunteer = [
  {
    role: "Volunteer Assistant Tennis Coach",
    organization: "Macalester College - Athletics",
    period: "FALL 2025",
    url: "https://athletics.macalester.edu/index.aspx",
    description:
      "Supported the head coach and assistant coach with both the men's and women's teams during training sessions and matches."
  },
  {
    role: "Class Representative",
    organization: "Universidade de Vigo",
    period: "2022 → 2024",
    url: "https://www.uvigo.gal/en",
    description:
      "Elected class representative for the Economics cohort for two consecutive years."
  }
];

export const honors = [
  {
    title: "Selected Nova Member",
    issuer: "Nova",
    period: "2025",
    description: "Recognized as a selected member of the Nova Talent network.",
    url: "https://www.novatalent.com/"
  },
  {
    title: "Academic Excellence Award - The Ángeles Ruiz Robles Award",
    issuer: "Xunta de Galicia",
    period: "2022 → 2023",
    description: "Awarded for achieving the highest GPA in my cohort.",
    url: "https://www.xunta.gal/es/notas-de-prensa/-/nova/80229/xunta-galicia-convoca-los-premios-angela-ruiz-robles-excelencia-academica-grados"
  },
  {
    title: "Academic Excellence Award - The Ángeles Ruiz Robles Award",
    issuer: "Xunta de Galicia",
    period: "2023 → 2024",
    description: "Awarded for achieving the highest GPA in my cohort.",
    url: "https://www.xunta.gal/es/notas-de-prensa/-/nova/80229/xunta-galicia-convoca-los-premios-angela-ruiz-robles-excelencia-academica-grados"
  }
];

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
