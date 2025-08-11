// File: src/components/Footer.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Changed: Added for fade-in
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Changed: Icons for socials

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-primary text-white py-6 text-center"
    >
      <div className="container mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} SMA Bari. All rights reserved.</p>
        <p className="mb-4 italic">
          “The only way to discover the limits of the possible is to go beyond them into the impossible.” — Arthur C. Clarke
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/mdazizulbari" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaGithub className="text-2xl inline" />
          </a>
          <a href="mailto:mdazizulbari.dev@gmail.com" className="hover:text-accent">
            <FaEnvelope className="text-2xl inline" />
          </a>
          <a href="https://wa.me/8801609300080" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            <FaWhatsapp className="text-2xl inline" />
          </a>
        </div>
        <Link to="/" className="text-accent underline hover:text-white">
          Back to Top
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;