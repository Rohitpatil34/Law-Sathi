import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function BussinessLaw() {
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
                            name="Business Law"
                            img={legal}  // Make sure to import your image like: import businessImg from "../assets/business.jpg";
                            content="Understanding Business Law"
                            contentSmall="Insights into corporate regulations, contracts, and trade laws."
                            small1="Contracts"
                            smallContent1="Legal framework for business agreements."
                            small2="Companies"
                            smallContent2="Laws governing company formation and management."
                            small3="Intellectual Property"
                            smallContent3="Protecting business ideas, trademarks, and patents."
                            small4="Trade Regulations"
                            smallContent4="Rules for domestic and international trade."
                            mainArticle="Recent Articles"
                            article1="Companies Act, 2013"
                            article2="Competition Act, 2002"
                        />
                        </h1>

                         
                    </div>
                </div>
            </div>
        </div>
    );
}