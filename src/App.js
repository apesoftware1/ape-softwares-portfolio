import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Footer from './components/Footer'; 
import Pricing from './components/Pricing';
import './styles/global.css';
import './styles/mediaQuery.css';

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;



