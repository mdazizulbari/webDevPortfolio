// File: src/components/AboutMe.jsx
import AnimatedSection from "./AnimatedSection";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <AnimatedSection>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-4">
            My programming journey ignited with Programming Hero’s MERN Bootcamp...
          </p>
          <p className="text-lg mb-4">
            I love diving into full-stack challenges...
          </p>
          <p className="text-lg italic">
            “The only way to discover the limits of the possible is to go beyond them into the impossible.” — Arthur C. Clarke
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutMe;