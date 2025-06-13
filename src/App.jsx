import { useEffect, useState } from "react";
import "./index.css";

// Import components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", changeColor);
    
    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className="gradient">
      <div className="container">
        <Navbar color={color} />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
