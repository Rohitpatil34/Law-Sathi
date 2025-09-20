import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LandingNavbar } from "./components/Landingnavbar";
import bgImage from "./assets/legal-bg.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const fullText = "Educate. Explore. Empower.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Add next letter
      setDisplayText(fullText.slice(0, index + 1));
      setIndex(index + 1);

      // Reset when text is fully typed
      if (index + 1 === fullText.length) {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 1500); // pause before restarting
      }
    }, 150); // typing speed per letter

    return () => clearTimeout(timeout);
  }, [index, fullText]);

  return (
    <div className="hero-container">
      <LandingNavbar />

      <div className="hero">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="text-box">
            <h1>"Justice Begins with Awareness."</h1>
            <p className="animated-text">{displayText}</p>
            <button onClick={() => navigate("/signup")}>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
