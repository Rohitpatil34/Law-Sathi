import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import AuthPage from './AuthPage';
import IndiaBixHome from './Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Landing page */}
        <Route path="/home" element={<IndiaBixHome />} /> {/* After login/signup */}
        <Route path="/login" element={<AuthPage isLogin={true} />} />
        <Route path="/signup" element={<AuthPage isLogin={false} />} />
      </Routes>
    </Router>
  );
}

export default App;
