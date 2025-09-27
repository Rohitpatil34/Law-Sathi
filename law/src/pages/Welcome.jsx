import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import legal from "../assets/legal-bg.jpg";

export default function FamilyLaw() {
    const { mainCategory } = useParams();
    const navigate = useNavigate();

    const features = [
        {
            title: "Expert Legal Guidance",
            description: "Access comprehensive legal resources and expert advice from qualified professionals",
            icon: "⚖️"
        },
        {
            title: "Easy Navigation",
            description: "Intuitive layout designed to help you quickly find the legal information you need",
            icon: "🧭"
        },
        {
            title: "Updated Content",
            description: "Regularly updated with the latest legal information and regulations",
            icon: "🔄"
        },
        {
            title: "User-Friendly",
            description: "Designed for both legal professionals and citizens seeking legal knowledge",
            icon: "👥"
        }
    ];

    const handleExploreClick = () => {
        navigate('/family-law/overview'); // Adjust path as per your routing
    };

    return (
        <div className="family-page">
            <div className="navbar-wrapper">
                <Navbar />
            </div>

            <div className="family-content">
                <div className="sidebar-wrapper">
                    <Sidebar />
                </div>

                <div className="main-content">
                    <div className="breadcrumbs-wrapper">
                        <Breadcrumps />
                    </div>

                    <div className="content-area">
                        {!mainCategory ? (
                            <div className="welcome-page">
                                <img 
                                    src={legal} 
                                    alt="Legal Guidance Banner" 
                                    className="welcome-banner" 
                                />
                                <h1>Welcome to LawSathi</h1>
                                <p>Your trusted partner in navigating legal complexities with confidence and clarity. 
                                   We provide comprehensive legal resources to empower your decisions.</p>
                                
                                {/* <button className="cta-button" onClick={handleExploreClick}>
                                    Explore Legal Resources →
                                </button> */}
                                
                                <div className="feature-grid">
                                    {features.map((feature, index) => (
                                        <div key={index} className="feature-card">
                                            <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                                                {feature.icon}
                                            </div>
                                            <h3>{feature.title}</h3>
                                            <p>{feature.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Maincontent />
                        )}

                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}