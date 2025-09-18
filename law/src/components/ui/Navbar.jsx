
import { Search, Scale, Menu } from "lucide-react";
import { Input } from '/src/components/ui/input';
import { Link } from "react-router-dom";
import './navbar.css';
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-row">
          {/* Logo */}
          <div className="logo">
            <div className="logo-badge">
              <Scale />
            </div>
            <div className="logo-text">LawSathi</div>
          </div>

          {/* Search */}
          <div className="search">
            <div className="search-wrap">
              <Input
                type="text"
                placeholder="Search laws..."
                className="search-input"
              />
              <div className="search-icon">
                <Search />
              </div>
            </div>
          </div>

          {/* Mobile menu button (moved beside search) */}
          <button
            className="menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu />
          </button>

          {/* Navigation */}
          <nav className={`nav${menuOpen ? " nav-open" : ""}`}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/family" className="nav-link">
              Catogories
            </Link>
            <a href="#" className="nav-link">
              News
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}