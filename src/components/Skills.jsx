// File: src/components/Skills.jsx
import { motion } from "framer-motion"; // Existing
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaWordpress, FaPaintBrush, FaLinux } from "react-icons/fa"; // Existing imports, corrected

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Tailwind", icon: <FaCss3Alt /> },
      { name: "DaisyUI", icon: <FaCss3Alt /> },
      { name: "WordPress", icon: <FaWordpress /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <FaGitAlt /> },
      { name: "Netlify/Firebase", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
    ],
  },
  {
    category: "Design & Media",
    skills: [
      { name: "Adobe Illustrator/Photoshop/Premiere", icon: <FaPaintBrush /> },
      { name: "FFmpeg", icon: <FaPaintBrush /> },
      { name: "OBS", icon: <FaPaintBrush /> },
    ],
  },
  {
    category: "Productivity & Systems",
    skills: [
      { name: "Notion", icon: <FaLinux /> },
      { name: "Clockify", icon: <FaLinux /> },
      { name: "Vim", icon: <FaLinux /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white text-gray-800">
      <motion.div // Line 57
        initial={{ opacity: 0, y: 50 }} // Line 58, fixed object syntax
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      {skill.icon} <span className="ml-2">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;