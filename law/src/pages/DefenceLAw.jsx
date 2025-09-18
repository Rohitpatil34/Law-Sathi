import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function DefenceLaw() {
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
                                name="Defence Law"
                                img={legal}  // Make sure to import your image like: import defenceImg from "../assets/defence.jpg";
                                content="Understanding Defence Law"
                                contentSmall="Insights into national security, armed forces regulations, and military justice."
                                small1="Military Regulations"
                                smallContent1="Laws governing armed forces and their duties."
                                small2="National Security"
                                smallContent2="Legal provisions for protecting national security."
                                small3="Defence Procurement"
                                smallContent3="Regulations for defence contracts and acquisitions."
                                small4="Military Justice"
                                smallContent4="Court-martial and disciplinary procedures."
                                mainArticle="Recent Articles"
                                article1="Armed Forces Special Powers Act"
                                article2="Defence of India Rules"
                            />
                            </h1>


                         
                    </div>
                </div>
            </div>
        </div>
    );
}