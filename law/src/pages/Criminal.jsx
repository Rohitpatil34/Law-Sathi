import { Sidebar } from '../components/ui/sidebar';
import { Navbar } from '../components/ui/Navbar';
import { Breadcrumps } from '../components/ui/Breadcrumps';
import './family.css';
import { Maincontent } from '../components/ui/Maincontent';
import legal from "../assets/legal-bg.jpg";

export default function CriminalLaw() {
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
                            name="Criminal Law"
                            img={legal} // you can keep same background or change if you have a criminal-law-related image
                            content="Understanding Criminal Law"
                            contentSmall="Insights into crimes, punishments, and legal procedures."
                            small1="Types of Crimes"
                            smallContent1="Offenses against persons, property, cybercrime, and white-collar crimes."
                            small2="Investigation & Procedure"
                            smallContent2="FIR, arrests, bail, and trial process explained."
                            small3="Punishments"
                            smallContent3="Imprisonment, fines, death penalty, and sentencing principles."
                            small4="Special Laws"
                            smallContent4="Important laws like IPC, CrPC, NDPS Act, IT Act, and POCSO."
                            mainArticle="Recent Articles"
                            article1="Indian Penal Code (IPC)"
                            article2="Criminal Procedure Code (CrPC)"
        />

                        </h1>
                         
                    </div>
                </div>
            </div>
        </div>
    );
}