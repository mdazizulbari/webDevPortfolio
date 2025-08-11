// File: src/components/projects/ProjectDetails.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Changed: Added for section animation
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Changed: Icons for links

const ProjectDetails = ({ project }) => {
  if (!project) return <p>Loading...</p>; // Changed: Added fallback for no project

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white text-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{project.name}</h2>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg mb-4"><strong>Tech Stack:</strong> {project.tech.join(", ")}</p>
        <p className="text-lg mb-4"><strong>Description:</strong> {project.description}</p>
        <div className="flex space-x-4 mb-4">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-accent">
            <FaExternalLinkAlt className="mr-2" /> Live Site
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-accent">
            <FaGithub className="mr-2" /> GitHub Repo
          </a>
        </div>
        <p className="text-lg mb-4"><strong>Challenges:</strong> {project.challenges}</p>
        <p className="text-lg mb-4"><strong>Future Plans:</strong> {project.improvements}</p>
        <Link to="/" className="btn btn-primary mt-4 text-white">Back to Home</Link>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;