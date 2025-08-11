// File: src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Changed: Added icons for burger/close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          SMA Bari
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static bg-primary md:bg-transparent top-16 right-4 md:right-auto p-4 md:p-0`}
        >
          <li>
            <Link to="/" className="block py-2 hover:text-accent">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" className="block py-2 hover:text-accent">
              About
            </Link>
          </li>
          <li>
            <Link to="/#skills" className="block py-2 hover:text-accent">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/#projects" className="block py-2 hover:text-accent">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="block py-2 hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;