import { Search, Users, Scale, Heart, Shield, FileText, Home, ChevronRight, MessageCircle } from "lucide-react"
import { Input } from '/src/components/ui/input'
import { Link } from "react-router-dom";
import './navbar.css';
export function Navbar(){
    return(
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

            {/* Navigation */}
            <nav className="nav">
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
          </div>
        </div>
      </header>
    );
}