import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import AuthPage from './AuthPage';
import Family from "./pages/FamilyLaw";
import Defence from "./pages/DefenceLAw";
import Property from "./pages/PropertyLaw";
import Bussiness from "./pages/Bussinesslaw";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection/>} /> {/* Landing page */}
        <Route path="/FamilyLaw" element={<Family/>} /> {/* After login/signup */}
        {/* <Route path="/CriminalLaw" element={<Criminal/>} /> */}
        {/* <Route path="/CivilLaw" element={<Civil/>} />  */}
          <Route path="/BussinessLaw" element={<Bussiness/>} />  
        <Route path="/DefenceLaw" element={<Defence/>} />
        <Route path="/PropertyLaw" element={<Property/>} />
  
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />
      </Routes>
    </Router>
  );
}

export default App;
