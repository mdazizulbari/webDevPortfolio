// File: src/pages/Home.jsx
import Hero from "../components/Hero"; // Existing
import AboutMe from "../components/AboutMe"; // Existing
import Skills from "../components/Skills"; // Existing
import Experience from "../components/Experience"; // Changed: Added Experience section
import Contact from "../components/Contact"; // Changed: Added Contact section
import ProjectCard from "../components/projects/ProjectCard"; // Changed: Imported for projects grid
import { projects } from "../utils/constants"; // Changed: Imported projects data
import { motion } from "framer-motion"; // Changed: Added for projects animation

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      {/* Changed: Added Projects section with responsive grid */}
      <section id="projects" className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;