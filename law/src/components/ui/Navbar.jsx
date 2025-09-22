import { Search, Scale, Menu, LogOut } from "lucide-react";
import { Input } from '/src/components/ui/input';
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import { useState } from "react";
import { auth } from "../../firebase";
 // Firebase auth instance

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // ✅ Firebase logout
      if (auth) {
        await auth.signOut();
      }

      // ✅ Clear local storage
      localStorage.removeItem("user");

      // ✅ Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Failed to logout. Try again.");
    }
  };

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
            <Link to="/family" className="nav-link">Categories</Link>
            <a href="#" className="nav-link">News</a>

            {/* ✅ Logout button */}
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
