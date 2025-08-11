// File: src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center py-20 bg-gray-200">
      <h1 className="text-4xl font-bold mb-4">404 - Lost in the Matrix</h1>
      <p className="text-lg mb-4">This page doesn’t exist… yet. Let’s evolve it!</p>
      <Link to="/" className="text-primary underline hover:text-accent">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;