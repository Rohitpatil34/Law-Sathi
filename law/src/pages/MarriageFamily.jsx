import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './MarriageFamily.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for the acts
const allActs = [
  { id: 1, title: 'The Hindu Marriage Act, 1955', description: 'Governs the marriage and divorce for Hindus, Buddhists, Jains, and Sikhs. It outlines the conditions for a valid marriage, ceremonies, and grounds for dissolution.' },
  { id: 2, title: 'The Special Marriage Act, 1954', description: 'Provides a special form of marriage for the people of India and all Indian nationals in foreign countries, irrespective of the religion or faith followed by either party.' },
  { id: 3, title: 'The Anand Marriage Act, 1909', description: 'Gives legal recognition to the Sikh marriage ceremony known as the Anand Karaj. It simplifies the process of marriage registration for Sikhs.' },
  { id: 4, title: 'The Indian Christian Marriage Act, 1872', description: 'Consolidates and amends the law relating to the solemnization of marriages of persons professing the Christian faith in India.' },
  { id: 5, title: 'The Muslim Personal Law (Shariat) Application Act, 1937', description: 'Specifies that Indian Muslims will be governed by Islamic laws (Shariat) in matters of personal disputes and family affairs.' },
  { id: 6, title: 'Prohibition of Child Marriage Act, 2006', description: 'Aims to prohibit the solemnization of child marriages in India and provides for the protection of victims.' },
  { id: 7, title: 'The Dowry Prohibition Act, 1961', description: 'An act to prohibit the giving or taking of dowry. It aims to protect women from dowry-related harassment and violence.' },
  { id: 8, title: 'The Guardians and Wards Act, 1890', description: 'Deals with the laws of guardianship for minors and their property, ensuring their welfare and proper management of their assets.' },
];

export default function MarriageFamily() { 
    const [acts, setActs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [actsPerPage] = useState(6); // Show 6 acts per page

    useEffect(() => {
        setActs(allActs);
    }, []);

    // Get current acts for pagination
    const indexOfLastAct = currentPage * actsPerPage;
    const indexOfFirstAct = indexOfLastAct - actsPerPage;
    const currentActs = acts.slice(indexOfFirstAct, indexOfLastAct);

    // Calculate total pages
    const totalPages = Math.ceil(acts.length / actsPerPage);

    // Change page
    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

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
                        <h1 className="page-title">Acts related to Marriage Law</h1>
                        
                        {/* Acts Cards */}
                        <div className="acts-grid">
                            {currentActs.map(act => (
                                <div key={act.id} className="act-card">
                                    <h2 className="act-title">{act.title}</h2>
                                    <p className="act-description">{act.description}</p>
                                    <button className="act-button">Read More</button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="pagination">
                                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="page-arrow">
                                    <ChevronLeft size={20} />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                                    <button key={number} onClick={() => paginate(number)} className={`page-number ${currentPage === number ? 'active' : ''}`}>
                                        {number}
                                    </button>
                                ))}
                                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="page-arrow">
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