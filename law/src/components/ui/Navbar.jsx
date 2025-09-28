// src/components/ui/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Search, Scale, Menu } from "lucide-react";
import { Input } from "/src/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { auth } from "../../firebase";
import axios from "axios";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // ✅ Handle logout
  const handleLogout = async () => {
    try {
      if (auth && auth.signOut) {
        await auth.signOut();
      }
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Failed to logout. Try again.");
    }
  };

  // ✅ Fetch suggestions when user types
  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/act/search?query=${query}`
        );
        setSuggestions(res.data);
        setShowDropdown(true);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [query]);

  // ✅ When a suggestion is clicked → redirect
  const handleSelectSuggestion = (act) => {
    setQuery(act.name);
    setShowDropdown(false);

    navigate(
      `/FamilyLaw/${encodeURIComponent(act.mainCategory)}/${encodeURIComponent(act.category)}/${act._id}`
    );
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          {/* Logo */}
          <div className="logo">
            <div className="logo-badge"><Scale /></div>
            <div className="logo-text">LawSathi</div>
          </div>

          {/* Search */}
          <div className="search">
            <div className="search-wrap">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search laws..."
                className="search-input"
              />
              <div className="search-icon"><Search /></div>
            </div>

            {/* 🔎 Dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <ul className="suggestions-dropdown">
                {suggestions.slice(0, 8).map((act) => (
                  <li
                    key={act._id}
                    className="suggestion-item"
                    onClick={() => handleSelectSuggestion(act)}
                  >
                    <strong>{act.name}</strong>{" "}
                    <span className="suggestion-category">– {act.category}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu />
          </button>

          {/* Navigation */}
          <nav className={`nav${menuOpen ? " nav-open" : ""}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/chatbot" className="nav-link">Chatbot</Link>
            <Link to="/news" className="nav-link">News</Link>
            <button
              onClick={handleLogout}
              className="nav-link logout-btn"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
