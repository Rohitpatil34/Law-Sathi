import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import { ChevronLeft, ChevronRight, FileText, Scale } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import axios from 'axios';
import './ActsList.css';
import heroImg from '../assets/legal-bg.jpg';

export default function ActsList() {
  const { mainCategory, subcategory } = useParams();
  const [acts, setActs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [actsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/act/category/${encodeURIComponent(subcategory)}`
        );
        setActs(res.data);
      } catch (err) {
        console.error('Error fetching acts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchActs();
  }, [subcategory]);

  const indexOfLastAct = currentPage * actsPerPage;
  const indexOfFirstAct = indexOfLastAct - actsPerPage;
  const currentActs = acts.slice(indexOfFirstAct, indexOfLastAct);
  const totalPages = Math.ceil(acts.length / actsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const getCategoryIcon = () => {
    switch(subcategory) {
      case 'Arbitration & Dispute Resolution':
        return <Scale size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  if (loading) return <p style={{ padding: '2rem' }}>Loading acts...</p>;

  return (
    <div className="acts-page">
      <Navbar />
      <div className="acts-content">
        <Sidebar />
        <main className="acts-main">
          {/* Breadcrumbs */}
          <Breadcrumps />

          {/* Header + Hero + Grid container */}
          <div className="acts-container">
            {/* Page Header */}
            <div className="page-header">
              {getCategoryIcon()}
              <span>{subcategory}</span>
            </div>

            {/* Hero Banner */}
            <div className="hero-banner">
              <img src={heroImg} alt="Legal Banner" className="hero-img" />
              <div className="hero-text">
                <h2>{`Explore ${subcategory}`}</h2>
                <p>{`All topics under ${subcategory}`}</p>
              </div>
            </div>

            {/* Acts Grid */}
            <div className="acts-grid">
              {currentActs.map((act) => (
                <Link
                  key={act._id}
                  to={`/FamilyLaw/${encodeURIComponent(mainCategory)}/${encodeURIComponent(subcategory)}/${act._id}`}
                  className="act-card-link"
                >
                  <Card className="act-card">
                    <CardContent>
                      <div className="act-card-content">
                        <div className="card-text-content">
                          <h3>{act.name}</h3>
                          <span className="act-button">Read More →</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="page-arrow"
                >
                  <ChevronLeft size={20} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`page-number ${currentPage === number ? 'active' : ''}`}
                    >
                      {number}
                    </button>
                  )
                )}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="page-arrow"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
