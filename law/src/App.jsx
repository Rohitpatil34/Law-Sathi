import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import AuthPage from './AuthPage';
import Family from "./pages/FamilyLaw";
import Defence from "./pages/DefenceLAw";
import Property from "./pages/PropertyLaw";
import Business from "./pages/Bussinesslaw"; // Corrected typo
import Criminal from "./pages/Criminal";
// import Civil from  "./pages/Civil"
import Marraige from "./pages/FamilyChapters"
import Civil from "./pages/Civil";
import MCQTest from './pages/MCQtest';
import MarriageFamily from './pages/MarriageFamily'; // IMPORT the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Landing page */}
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />

        {/* Main Content Pages */}
        <Route path="/FamilyLaw" element={<Family />} />
        {/* ADDED: This is the new route for the specific "Marriage" page */}
        <Route path="/FamilyLaw/Marriage" element={<MarriageFamily />} />
        
        <Route path="/CriminalLaw" element={<Criminal />} />
        <Route path="/CivilLaw" element={<Civil />} />
        <Route path="/BusinessLaw" element={<Business />} /> {/* Corrected typo */}
        <Route path="/DefenceLaw" element={<Defence />} />
        <Route path="/PropertyLaw" element={<Property />} />
        <Route path="/onlinetest" element={<MCQTest />} />
      </Routes>
    </Router>
  );
}

export default App;
