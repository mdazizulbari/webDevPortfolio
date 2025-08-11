// File: src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Changed: Added Router wrapper for all routes, simplified structure
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;