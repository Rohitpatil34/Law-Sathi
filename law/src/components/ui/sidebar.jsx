// Sidebar.jsx
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

  const handleStartTest = () => {
    navigate('/onlinetest');
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/act/main-categories");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (cat) => {
    const urlCategory = encodeURIComponent(cat); // URL safe
    // Pass the category name in state so breadcrumbs can display properly
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

      {/* User Info */}
      <Card>
        <CardContent className="card-content-pad">
          <div>
            <div style={{ fontWeight: 500, color: '#111827' }}>RohitPatil10</div>
            <div className="small muted">rohitpatil@gmail.com</div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
