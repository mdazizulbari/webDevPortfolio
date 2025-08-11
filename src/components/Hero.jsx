// File: src/components/Hero.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa"; // Changed: Added icons for socials

const Hero = () => {
  return (
    <section id="hero" className="bg-accent py-20 text-center text-white">
      <img
        src="/images/githubBanner.png" // Changed: Using your GitHub banner as profile pic
        alt="SMA Bari"
        className="mx-auto mb-4 h-32 w-32 rounded-full"
      />
      <h1 className="mb-2 text-4xl font-bold">SMA Bari</h1>
      <p className="mb-4 text-lg">MERN Stack Developer & AI Visionary</p>
      <a
        href="/resume.pdf" // Changed: Placeholder; swap with real path when ready
        download="SMA_Bari_Resume"
        className="bg-primary hover:bg-opacity-80 mb-4 inline-block rounded px-6 py-2 text-white"
      >
        Download Resume
      </a>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/mdazizulbari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-primary text-2xl" />
        </a>
        <a href="mailto:mdazizulbari.dev@gmail.com">
          <FaEnvelope className="hover:text-primary text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
