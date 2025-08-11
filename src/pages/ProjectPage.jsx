// File: src/pages/ProjectPage.jsx
import { useParams } from "react-router-dom"; // Changed: Imported for dynamic ID
import ProjectDetails from "../components/projects/ProjectDetails"; // Changed: Imported component
import { projects } from "../utils/constants"; // Changed: Imported projects array

const ProjectPage = () => {
  const { id } = useParams(); // Changed: Extract ID from URL
  const project = projects.find(p => p.id === parseInt(id)); // Changed: Find matching project

  return (
    <div>
      <ProjectDetails project={project} />
    </div>
  );
};

export default ProjectPage;