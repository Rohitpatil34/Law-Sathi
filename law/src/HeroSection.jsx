import React from "react";
import bgImage from "./assets/law-bg.jpg";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "./components/ui/Navbar";
import "./HeroSection.css";
 

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Top Nav */}
       
         <Navbar/>
        <button onClick={() => navigate('/login')}>Login</button>
         
       

      {/* Center-Right Text */}
      <div className="hero-content">
        <div className="text-box">
          <h1>"Justice Begins with Awareness."</h1>
          <p>Educate. Explore. Empower.</p>
          <button onClick={() => navigate('/signup')}>Sign up — it's free</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
