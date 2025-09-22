// src/components/ActDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Navbar } from './ui/Navbar';
import { Sidebar } from './ui/sidebar';
import { Breadcrumps } from './ui/Breadcrumps';
import { Loader2, AlertCircle, BookOpen } from 'lucide-react';
import ApiService from '../services/api';
import './ActDetails.css';

export default function ActDetails() {
    const { actId } = useParams();
    const location = useLocation();
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Get act details from navigation state
    const actName = location.state?.actName || 'Act Details';
    const category = location.state?.category || '';

    useEffect(() => {
        if (actId) {
            fetchActSections();
        }
    }, [actId]);

    const fetchActSections = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const sectionsData = await ApiService.getActSections(actId);
            setSections(sectionsData || []);
        } catch (err) {
            console.error('Error fetching act sections:', err);
            setError('Failed to load act sections. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleStartQuiz = async () => {
        try {
            const quizData = await ApiService.generateMCQ(actName);
            // Navigate to quiz component or show quiz modal
            console.log('Quiz data:', quizData);
        } catch (err) {
            console.error('Error generating quiz:', err);
        }
    };

    return (
        <div className="act-details-page">
            <div className="navbar-wrapper">
                <Navbar />
            </div>
            
            <div className="act-details-content">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>
                
                <div className="main-content">
                    <div className="breadcrumbs-wrapper">
                        <Breadcrumps />
                    </div>
                    
                    <div className="content-area">
                        <div className="act-header">
                            <h1 className="act-name">{actName}</h1>
                            {category && <span className="act-category">Category: {category}</span>}
                            <button className="quiz-button" onClick={handleStartQuiz}>
                                <BookOpen size={20} />
                                Take Quiz
                            </button>
                        </div>

                        {loading && (
                            <div className="loading-state">
                                <Loader2 className="animate-spin" size={32} />
                                <p>Loading act sections...</p>
                            </div>
                        )}

                        {error && !loading && (
                            <div className="error-state">
                                <AlertCircle size={32} className="error-icon" />
                                <p>{error}</p>
                                <button onClick={fetchActSections} className="retry-button">
                                    Try Again
                                </button>
                            </div>
                        )}

                        {!loading && !error && (
                            <div className="sections-container">
                                {sections.length > 0 ? (
                                    sections.map((section, index) => (
                                        <div key={section._id || index} className="section-card">
                                            <h3 className="section-title">
                                                Section {section.number}: {section.title}
                                            </h3>
                                            <div className="section-content">
                                                {section.content}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="no-sections-state">
                                        <p>No sections available for this act yet.</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}