import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import AuthPage from './AuthPage';
import Family from "./pages/FamilyLaw"; // Maincontent / Subcategories page
import Criminal from "./pages/Criminal";
import Civil from "./pages/Civil";
import Business from "./pages/Bussinesslaw";
import Defence from "./pages/DefenceLAw";
import Property from "./pages/PropertyLaw";
import MCQTest from './pages/MCQtest';
import ActsList from './pages/ActsList'; // New page showing list of acts
import ActsSection from './pages/ActsSection';   // Page showing act details

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Auth */}
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />

        {/* Family Law: optional mainCategory param */}
        <Route path="/FamilyLaw/:mainCategory?" element={<Family />} />

        {/* Dynamic Acts List page (subcategory) */}
        <Route path="/FamilyLaw/:mainCategory/:subcategory" element={<ActsList />} />

        {/* Act details page */}
        <Route path="/FamilyLaw/:mainCategory/:subcategory/:actId" element={<ActsSection />} />

        {/* Other law categories */}
        <Route path="/CriminalLaw" element={<Criminal />} />
        <Route path="/CivilLaw" element={<Civil />} />
        <Route path="/BusinessLaw" element={<Business />} />
        <Route path="/DefenceLaw" element={<Defence />} />
        <Route path="/PropertyLaw" element={<Property />} />

        {/* Online test page */}
        <Route path="/onlinetest" element={<MCQTest />} />
      </Routes>
    </Router>
  );
}

export default App;
