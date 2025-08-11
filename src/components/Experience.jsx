// File: src/components/Experience.jsx
import { motion } from "framer-motion"; // Changed: Added for animation

const experiences = [
  {
    title: "WordPress Developer and Designer",
    company: "The Web Guy",
    duration: "Oct 2024 - Dec 2024 · 3 mos",
    location: "Chattogram, Bangladesh · Remote",
    link: "https://thewebguy.com.co/",
    skills:
      "WordPress, Web Design, Elementor, Bricks Builder, WooCommerce, Google Sheets, Google Workspace, Project Management",
  },
  {
    title: "Junior WordPress Designer",
    company: "Itbfy Tech",
    duration: "Sep 2024 - Nov 2024 · 3 mos",
    location: "Katgor, Patenga, Chattogram, Bangladesh · On-site",
    link: "https://itbfytech.com/",
    skills: "WordPress, WooCommerce, Elementor Page Builder",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-16 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="mb-6 text-center text-3xl font-bold">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div key={index} className="card bg-base-100 p-6 shadow-xl">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="text-sm text-gray-500">{exp.location}</p>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent mt-2 inline-block underline"
              >
                Visit Site
              </a>
              <p className="mt-2 text-sm">Skills: {exp.skills}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
