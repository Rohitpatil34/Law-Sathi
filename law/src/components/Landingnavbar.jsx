// LandingNavbar.jsx
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import './landingnavbar.css';

export function LandingNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Toggle body scroll when mobile menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="landing-header">
      <div className="landing-container">
        {/* Left side - Brand */}
        <div className="landing-logo">LawSathi</div>

        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Right side - Navigation */}
        <nav className={`landing-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <Link to="/" className="landing-link" onClick={closeMobileMenu}>Home</Link>

          {/* Categories dropdown */}
          <div className="dropdown" ref={dropdownRef}>
            <button 
              className="landing-link dropdown-btn" 
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
            >
              Categories {dropdownOpen ? '▴' : '▾'}
            </button>
            <div className={`dropdown-content ${dropdownOpen ? 'dropdown-open' : ''}`}>
              <Link to="/FamilyLaw" className="dropdown-link" onClick={closeMobileMenu}>Family Law</Link>
              <Link to="/criminal" className="dropdown-link" onClick={closeMobileMenu}>Criminal Law</Link>
              <Link to="/business" className="dropdown-link" onClick={closeMobileMenu}>Business Law</Link>
            </div>
          </div>

          <a href="#news" className="landing-link" onClick={closeMobileMenu}>News</a>
          <Link to="/login" className="login-btn" onClick={closeMobileMenu}>Login</Link>
        </nav>
      </div>
    </header>
  );
}