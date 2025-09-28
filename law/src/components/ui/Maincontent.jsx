import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Users, FileText } from "lucide-react";
import { Card, CardContent } from '/src/components/ui/Card';
import { Button } from '/src/components/ui/button';
import axios from 'axios';
import legalBg from '/src/assets/legal-bg.jpg';
import './maincontent.css';
import './articles.css';

export function Maincontent() {
  const { mainCategory } = useParams();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/act/main-category/${encodeURIComponent(mainCategory)}`
        );
        setTopics(res.data);
      } catch (err) {
        console.error("Error fetching topics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTopics();
  }, [mainCategory]);

  if (loading) return <p style={{ padding: "2rem" }}>Loading topics...</p>;

  return (
    <main className="main-content-area">
      {/* Page Header */}
      <div className="page-header">
        <Users className="title-icon" />
        <span>{mainCategory}</span>
      </div>

      {/* Hero Banner */}
      <Card>
        <div className="hero-banner">
          <img src={legalBg} alt="Law Banner" className="hero-image" />
          <div className="hero-text-content">
            <h2>{`Explore ${mainCategory}`}</h2>
            <p>{`All topics under ${mainCategory}`}</p>
          </div>
        </div>
      </Card>

      {/* Sub-categories Horizontal Scroll */}
      <div className="subcategories-wrapper">
        <div className="subcategories-scroll">
          {topics.map((topic, idx) => (
            <Link
              key={idx}
              to={`/FamilyLaw/${encodeURIComponent(mainCategory)}/${encodeURIComponent(topic)}`}
            >
              <Card className="subcategory-card">
                <CardContent>
                  <div className="subcategory-text-content">
                    <Users className="icon" size={28} />
                    <h3>{topic}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Articles */}
      <div className="recent-articles">
        <h2>Recent Articles</h2>
        <div className="articles-grid">
          {topics.slice(0, 2).map((article, idx) => (
            <Card key={idx} className="article-card">
              <CardContent className="article-content">
                <FileText className="article-icon" size={24} />
                <h3 className="article-title">{article}</h3>
                <p className="article-description">
                  Learn more about {article} and its legal aspects.
                </p>
                <div className="article-footer">
                  <Button variant="link" className="article-link">
                    Read More →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
