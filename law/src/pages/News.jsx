// src/pages/News.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loader2, Search, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import "./News.css";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const API_KEY = "edfbfaa16d714fa384d50765669cde09";

  // Fetch API URL depending on searchTerm
  const getApiUrl = (term = "") => {
    if (term) {
      return `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        term
      )}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;
    }
    // default top headlines
    return `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
  };

  // Function to fetch news
  const fetchNews = async (term = "") => {
    setLoading(true);
    try {
      const res = await axios.get(getApiUrl(term));
      setArticles(res.data.articles || []);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch latest news on page load
  useEffect(() => {
    fetchNews();
  }, []);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = query.trim();
    setSearchTerm(trimmedTerm);
    fetchNews(trimmedTerm);
  };

  return (
    <div className="news-page">
      <Navbar />
      <div className="news-content">
        <Sidebar />
        <main className="news-main">
          {/* Back Button */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          {/* Page Header */}
          <div className="page-header">
            <h1>Latest News</h1>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="news-search-form">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for legal news (e.g., Supreme Court, Parliament)"
              className="news-search-input"
            />
            <button type="submit" className="news-search-btn">
              <Search size={16} />
              <span>Search</span>
            </button>
          </form>

          {/* News Results */}
          {loading ? (
            <div className="news-loader">
              <Loader2 className="spin" size={22} />
              <span>Fetching news...</span>
            </div>
          ) : (
            <div className="news-grid">
              {articles.length > 0 ? (
                articles.map((article, index) => (
                  <div key={index} className="news-card">
                    <h2 className="news-title">{article.title}</h2>
                    <p className="news-desc">{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="news-link"
                    >
                      Read more →
                    </a>
                  </div>
                ))
              ) : (
                <p className="no-news">No news found for your search.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default News;
