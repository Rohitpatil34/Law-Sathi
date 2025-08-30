import React from "react";
import bgImage from "./assets/legal-bg.jpg";
import { useNavigate } from 'react-router-dom'; // Add this import

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Top Nav - Updated with Link components */}
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <div className="text-xl font-bold flex items-center gap-2">
          <span>⚖️</span>
          <span>LawSathi</span>
        </div>
        <div className="flex gap-6 items-center">
          <a href="/home" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Categories</a>
          <a href="#" className="hover:underline">Online Test</a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-full px-4 py-1 text-black"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">🔍</span>
          </div>
          <button 
            className="bg-white text-black px-4 py-1 rounded-full hover:bg-gray-200"
            onClick={() => navigate('/login')} // Using navigate instead of window.location
          >
            Login
          </button>
        </div>
      </div>

      {/* Center-Right Text */}
      <div className="flex-1 flex items-center justify-end text-white px-4">
        <div className="text-right max-w-md mr-8 md:mr-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            "Justice Begins with Awareness."
          </h1>
          <p className="text-lg mb-4">Educate. Explore. Empower.</p>
          <div className="flex justify-end">
            <button 
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300"
              onClick={() => navigate('/signup')} // Navigate to signup page
            >
              Sign up — it's free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;