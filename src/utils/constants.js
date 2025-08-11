// File: src/utils/constants.js
export const personalInfo = {
  name: "SMA Bari",
  designation: "MERN Stack Developer & AI Visionary",
  photo: "/images/githubBanner.png", // Your GitHub banner
  resume: "/resume.pdf", // Placeholder; update with real path
  socials: [
    { name: "GitHub", url: "https://github.com/mdazizulbari", icon: "FaGithub" },
    { name: "Email", url: "mailto:mdazizulbari.dev@gmail.com", icon: "FaEnvelope" },
    { name: "WhatsApp", url: "https://wa.me/8801609300080", icon: "FaWhatsapp" },
  ],
  contact: {
    email: "mdazizulbari.dev@gmail.com",
    phone: "+8801609300080 / +8801816354336",
    whatsapp: "+8801609300080",
  },
};

export const projects = [
  {
    id: 1,
    name: "CareGrid",
    image: "/images/caregrid.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    description: "A Medical Camp Management System (MCMS) simplifying organizer and participant coordination with secure auth and dynamic dashboards.",
    liveLink: "https://caregrid-a12.netlify.app/",
    githubLink: "https://github.com/mdazizulbari/careGrid",
    challenges: "Securing JWT authentication in real-time updates and managing complex dashboard data.",
    improvements: "Integrate AI for automated camp scheduling and participant matching.",
  },
  {
    id: 2,
    name: "WhereIsIt",
    image: "/images/whereisit.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Framer Motion"],
    description: "A lost-and-found platform connecting users with interactive search and map integration.",
    liveLink: "https://whereisit-sma.netlify.app/",
    githubLink: "https://github.com/mdazizulbari/whereIsIt",
    challenges: "Handling map API rate limits and ensuring real-time search efficiency.",
    improvements: "Enhance with AI-driven item recognition and predictive search.",
  },
  {
    id: 3,
    name: "SCSDB Clone",
    image: "/images/scsdb.png",
    tech: ["React", "Tailwind CSS", "TMDb API"],
    description: "A Netflix-inspired movie database fetching real-time data with a sleek, responsive UI.",
    liveLink: "https://scsdb-clone.vercel.app/",
    githubLink: "https://github.com/mdazizulbari/scsdb-clone",
    challenges: "Managing TMDb API rate limits and optimizing image loading.",
    improvements: "Add AI recommendations based on user viewing patterns.",
  },
];

export const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind", "DaisyUI", "WordPress"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Firebase", "Linux"],
  },
  {
    category: "Design & Media",
    skills: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "FFmpeg", "OBS"],
  },
  {
    category: "Productivity & Systems",
    skills: ["Notion", "Clockify", "Vim"],
  },
];