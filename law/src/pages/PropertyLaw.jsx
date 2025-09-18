import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function PropertyLaw() {
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
                    
                    {/* Add your main content here */}
                    <div className="content-area">
                        <h1>
                            <Maincontent
                                name="Property Law"
                                img={legal}  // Make sure to import your image like: import propertyImg from "../assets/property.jpg";
                                content="Understanding Property Law"
                                contentSmall="Insights into property rights, ownership, and disputes."
                                small1="Ownership"
                                smallContent1="Legal rights of property owners in India."
                                small2="Transfer"
                                smallContent2="Rules for transferring property."
                                small3="Lease"
                                smallContent3="Lease agreements and tenancy laws."
                                small4="Disputes"
                                smallContent4="Resolving property disputes legally."
                                mainArticle="Recent Articles"
                                article1="Transfer of Property Act"
                                article2="Real Estate (Regulation & Development) Act"
                            />
                        </h1>

                         
                    </div>
                </div>
            </div>
        </div>
    );
}