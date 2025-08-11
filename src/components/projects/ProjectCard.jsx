// File: src/components/projects/ProjectCard.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Changed: Added for hover animation

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="card bg-base-100 shadow-xl overflow-hidden"
    >
      <figure>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <p className="text-gray-600 text-sm">Tech: {project.tech.join(", ")}</p>
        <Link
          to={`/project/${project.id}`}
          className="btn btn-primary mt-4 text-white"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;