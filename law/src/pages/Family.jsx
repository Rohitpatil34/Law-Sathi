import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function FamilyLaw() {
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
                        <h1><Maincontent
                            name="Family Law"
                            img={legal}
                            content="Understanding Family Law"
                            contentSmall="Insights into marriage, divorce, and child custody."
                            small1="Marriage"
                            smallContent1="Legal aspects of marriage in India."
                            small2="Divorce"
                            smallContent2="Divorce laws explained."
                            small3="Custody"
                            smallContent3="Child custody rules."
                            small4="Property"
                            smallContent4="Division of assets in disputes."
                            mainArticle="Recent Articles"
                            article1="The Hindu Marriage Act"
                            article2="Special Marriage Act"
                            />
                        </h1>
                         
                    </div>
                </div>
            </div>
        </div>
    );
}