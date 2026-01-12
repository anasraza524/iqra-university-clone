
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerAgent from './components/CustomerAgent';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Campuses from './pages/Campuses';
import Contact from './pages/Contact';
import StudentServices from './pages/StudentServices';
import Excellence from './pages/Excellence';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CustomerAgent />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-services" element={<StudentServices />} />
            <Route path="/excellence" element={<Excellence />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
