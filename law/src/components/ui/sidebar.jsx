import { useEffect, useState } from "react";
import axios from "axios";
import { FileText, ArrowRight } from "lucide-react";
import { Card, CardContent } from '/src/components/ui/Card';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

export function Sidebar() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ User state
  const [user, setUser] = useState(null);

  const handleStartTest = () => {
    navigate('/onlinetest');
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/act/main-categories`);
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();

    // ✅ Load user info from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleCategoryClick = (cat) => {
    const urlCategory = encodeURIComponent(cat); // URL safe
    navigate(`/FamilyLaw/${urlCategory}`, { state: { categoryName: cat } });
  };

  return (
    <aside className="sidebar stack-vertical">
      {/* Categories */}
      <Card>
        <CardContent className="card-content-pad">
          <h2 className="section-title">
            <FileText className="icon" />
            Categories
          </h2>

          {loading ? (
            <p className="muted small">Loading categories...</p>
          ) : (
            <nav className="nav-stack category-scroll">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="nav-link clickable"
                  onClick={() => handleCategoryClick(cat)}
                >
                  <FileText className="icon" />
                  {cat}
                </div>
              ))}
            </nav>
          )}
        </CardContent>
      </Card>

      {/* Online Test */}
      <Card>
        <CardContent className="card-content-pad">
          <h2 className="section-title">
            <FileText className="icon" />
            Online Test
          </h2>
          <p className="muted small" style={{ marginBottom: '1rem' }}>
            Test your legal knowledge with our interactive quizzes.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <div className="avatar">
              <span className="avatar-initials">T</span>
            </div>
          </div>
          <button 
            className="start-test-btn" 
            onClick={handleStartTest}
          >
            Start Test Now
            <ArrowRight className="btn-arrow" size={16} />
          </button>
        </CardContent>
      </Card>

      {/* ✅ User Info (Dynamic) */}
      <Card>
        <CardContent className="card-content-pad">
          {user ? (
            <div>
              <div style={{ fontWeight: 500, color: '#111827' }}>
                {user.displayName || "Guest User"}
              </div>
              <div className="small muted">
                {user.email || "No email available"}
              </div>
            </div>
          ) : (
            <div className="small muted">Not logged in</div>
          )}
        </CardContent>
      </Card>
    </aside>
  );
}
