import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function CivilLaw() {
    return (
        <div className="Family-page">
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
                        <h1><Maincontent
                            name="Civil Law"
                            img={legal} // You can use the same legal-bg or a civil-law-related image
                            content="Understanding Civil Law"
                            contentSmall="Insights into legal disputes, contracts, and property rights."
                            small1="Contracts"
                            smallContent1="Rules and regulations governing agreements and obligations."
                            small2="Torts"
                            smallContent2="Civil wrongs and remedies, including compensation claims."
                            small3="Property Disputes"
                            smallContent3="Legal issues related to ownership, transfer, and inheritance of property."
                            small4="Consumer Protection"
                            smallContent4="Rights of consumers and dispute resolution under consumer laws."
                            mainArticle="Recent Articles"
                            article1="Indian Contract Act"
                            article2="Consumer Protection Act"
                        />
                        </h1>
                         
                    </div>
                </div>
            </div>
        </div>
    );
}