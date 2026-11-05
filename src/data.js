export const profile = {
  name: "Jogendar Das Bairagi",
  role: "Frontend Developer",
  tagline: "I build fast, accessible React and TypeScript interfaces for a live health-tech product.",
  email: "jogendar8520@gmail.com",
  github: "https://github.com/Jogendar-Bairagi/",
  linkedin: "https://www.linkedin.com/in/jogendar-bairagi/",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = [
  "I’m a Computer Science graduate from Indore who enjoys turning designs into interfaces people actually like using. I work mostly in React and TypeScript, and I’m comfortable going into Node.js and REST APIs when a feature needs it.",
  "At Coremacasia Technologies I build features for Doctorezy, a live doctor-booking platform, from search and scheduling to OTP-based sign-in. I care about performance, so I measure first and then fix.",
  "I also deploy my own work. This portfolio is a React app hosted on AWS S3.",
];

export const experience = [
  {
    when: "May 2026 to July 2026",
    title: "Web Developer",
    org: "Coremacasia Technologies",
    points: [
      "Shipped 5+ production features on Doctorezy, a live doctor-booking platform.",
      "Built signup, OTP verification, and login with React Hook Form, with 100% test coverage on auth flows.",
      "Integrated REST APIs for doctor search, filtering, and appointment booking.",
      "Added Doctor-draf registration feature in backend.",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    when: "Jun to Jul 2025",
    title: "Web Development Intern",
    org: "Bluestock",
    points: [
      "Built an admin dashboard with React and Vite for an IPO web application.",
      "Worked with a team on dynamic IPO listings and front-end performance.",
    ],
    tags: ["React", "Vite", "JavaScript"],
  },
];

export const projects = [
  {
    name: "Doctorezy",
    text: "A live doctor-booking platform with search, scheduling, and OTP authentication. Load time dropped 40% after a performance pass.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    href: "https://doctorezy.in/",
  },
  {
    name: "Local Area Bus Tracking System",
    text: "Drivers share their live location and passengers follow buses on a map, with role-based access and updates every 3 to 5 seconds.",
    tags: ["React", "Leaflet", "Vite"],
    href: "https://driver-dashboard-six.vercel.app/",
  },
  {
    name: "AI Resume Builder",
    text: "Builds ATS-friendly resumes with a live preview and PDF export. Gemini writes a professional summary in under 2 seconds.",
    tags: ["JavaScript", "Gemini API", "jsPDF"],
    href: "https://resume-builder-xi-bice.vercel.app/",
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React Hook Form"] },
  { group: "State", items: ["Zustand", "Redux"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "MySQL"] },
  { group: "Cloud and delivery", items: ["AWS (S3)", "Basic CI/CD", "Vercel"] },
  { group: "Tools", items: ["Git", "GitHub", "Postman", "Vite", "Figma (basics)"] },
];
