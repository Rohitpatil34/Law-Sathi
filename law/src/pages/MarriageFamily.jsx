// MarriageFamily.jsx
import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import './MarriageFamily.css';

export default function MarriageFamily() {
  const { category } = useParams();                                
  const [acts, setActs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [actsPerPage] = useState(6); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/act/category/${encodeURIComponent(category)}`
        );
        setActs(res.data); 
      } catch (err) {
        console.error("Error fetching acts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchActs();
  }, [category]);

  // Pagination logic
  const indexOfLastAct = currentPage * actsPerPage;
  const indexOfFirstAct = indexOfLastAct - actsPerPage;
  const currentActs = acts.slice(indexOfFirstAct, indexOfLastAct);
  const totalPages = Math.ceil(acts.length / actsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return <p style={{ padding: "2rem" }}>Loading acts...</p>;
  }

  return (
    <div className="marriage-page">
      <div className="navbar-wrapper">
        <Navbar />
      </div>

      <div className="marriage-content">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="main-content">
          <div className="breadcrumbs-wrapper">
            <Breadcrumps />
          </div>

          <div className="content-area">
            <h1 className="page-title">Acts related to {category}</h1>

            {/* Acts Cards */}
            <div className="acts-grid">
              {currentActs.map((act) => (
                <Link 
                  key={act._id} 
                  to={`/FamilyLaw/${category}/${act._id}`} 
                  className="act-card-link"
                >
                  <div className="act-card">
                    <h2 className="act-title">{act.name}</h2>
                    <p className="act-description">
                      Learn more about {act.name} and its legal details.
                    </p>
                    <span className="act-button">Read More</span>
                  </div>
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
                      className={`page-number ${
                        currentPage === number ? "active" : ""
                      }`}
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
        </div>
      </div>
    </div>
  );
}
