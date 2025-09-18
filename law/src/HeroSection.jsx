// HeroSection.jsx
import React from "react";
import bgImage from "./assets/legal-bg.jpg";
import { useNavigate } from 'react-router-dom';
import { LandingNavbar } from "./components/Landingnavbar";
import "./HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();

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
            <p>Educate. Explore. Empower.</p>
            <button onClick={() => navigate('/signup')}>Sign up — it's free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;