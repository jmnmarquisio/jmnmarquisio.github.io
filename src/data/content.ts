// Content data extracted from CV
// Javier Rodríguez Viñas - Lead Frontend Engineer & UX Specialist

export const personal = {
  name: "Juan Mateo Núñez Marquisio",
  title: "Final-year Economics Student",
  subtitle: "Former ATP Player",
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
    "I was born in Uruguay, grew up in Spain, spent almost ten years in Sweden, lived again in Uruguay for a while, and eventually moved back to Spain to study Economics.",
  points: [
    "For many years, tennis was the center of everything. I competed internationally from a young age and reached ATP Challenger-level competition at 19. Tennis shaped the way I approach life today: with discipline, patience, resilience, and a constant desire to improve.",
    "Over time, my interests started to expand beyond the court. While studying Economics, I became more involved in product, marketing, and finance.",
    "Today, I'm finishing my Economics degree and thinking seriously about the next step. I'm especially interested in the sports industry, in roles that connect athletes, product, and performance.",
    "What motivates me most is the possibility of combining what I lived as an athlete with the analytical side I've developed through Economics, and using both to work on products, experiences, and projects that actually matter to athletes and consumers."
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
