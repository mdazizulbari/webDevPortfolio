// File: src/components/AnimatedSection.jsx
import { motion } from "framer-motion"; // Changed: Imported for animations

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;