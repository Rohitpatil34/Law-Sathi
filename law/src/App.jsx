// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import AuthPage from './AuthPage';
import Family from "./pages/FamilyLaw";
import Criminal from "./pages/Criminal";
import Civil from "./pages/Civil";
import Business from "./pages/Bussinesslaw";
import Defence from "./pages/DefenceLAw";
import Property from "./pages/PropertyLaw";
import MCQTest from './pages/MCQtest';
import ActsList from './pages/ActsList';
import ActsSection from './pages/ActsSection';
import News from './pages/News';
import Chatbot from './pages/Chatbot'; // <-- new import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />

        <Route path="/FamilyLaw/:mainCategory?" element={<Family />} />
        <Route path="/FamilyLaw/:mainCategory/:subcategory" element={<ActsList />} />
        <Route path="/FamilyLaw/:mainCategory/:subcategory/:actId" element={<ActsSection />} />

        <Route path="/CriminalLaw" element={<Criminal />} />
        <Route path="/CivilLaw" element={<Civil />} />
        <Route path="/BusinessLaw" element={<Business />} />
        <Route path="/DefenceLaw" element={<Defence />} />
        <Route path="/PropertyLaw" element={<Property />} />

        <Route path="/onlinetest" element={<MCQTest />} />
        <Route path="/news" element={<News />} />

        {/* Chatbot route */}
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
