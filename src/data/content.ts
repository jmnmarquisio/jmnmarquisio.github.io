// Content data extracted from CV
// Javier Rodríguez Viñas - Lead Frontend Engineer & UX Specialist

export const personal = {
  name: "Juan Mateo Núñez Marquisio",
  title: "Economics Graduate",
  subtitle: "Former ATP Player | Final-year Economics student | Nova Member",
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

export const about = {
  label: "About Me",
  title: "Hi, Mateo here!",
  intro:
    "I was born in Uruguay and grew up in beautiful Andalucía, in southern Spain, where I lived for nine years. In 2012, my family moved to Sweden, where I lived until 2021. After spending a year and a half back in Uruguay, I moved to Vigo in 2022 to study Economics.",
  points: [
    "Before academics became my main focus, tennis was the center of my life. I competed at a high level for many years, and reached ATP Challenger-level competition at 19.",
    "Alongside my degree in Economics, I have built experience in entrepreneurship, marketing, branding, and design, and I am currently developing my skills in programming.",
    "Today, I am 24 years old, finishing my Economics degree, and focused on building the next chapter of my life.",
  ],
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
  location?: string;
  type?: "remote" | "hybrid" | "onsite";
  description?: string;
  highlights: string[];
}

export const tennisExperience: TennisExperience[] = [
  {
    role: "Tennis Coach",
    company: "Engadin Spirit",
    companyUrl: "https://stmoritz.gr-mountain.com/",
    period: "JUL 2024 → AUG 2024 & JUL 2025 → AUG 2025",
    location: "Onsite (St. Moritz, CH)",
    type: "onsite",
    highlights: [
      "Provided private coaching in St. Moritz and Silvaplana, working with international clients in prestigious hotels including Kulm Hotel and Badrutt's Palace.",
    ],
  },
  {
    role: "Team Leader",
    company: "SRNDPTY",
    companyUrl: "https://srndpty.tennis/",
    period: "JUL 2022 & JUL 2023",
    location: "Onsite (Oslo, NO)",
    type: "onsite",
    highlights: [
      "Provided private coaching in St. Moritz and Silvaplana, working with international clients in prestigious hotels including Kulm Hotel and Badrutt's Palace.",
    ],
  },
  {
    role: "Professional Tennis Player (ATP)",
    company: "ATP",
    companyUrl: "https://www.atptour.com/en/atp-challenger-tour",
    period: "2021",
    highlights: [
      "Became a professional tennis player at 19, reaching the ATP Challenger in Montevideo. After a series of significant injuries and the financial limits of continuing on tour, I decided to change course and focus on my studies."
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
    name: "INCUVI Avanza",
    status: "Uvigo Entreprenourship program",
  },
  {
    name: "Relational Databases Certification",
    status: "In Progress",
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


