import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Counties from './pages/Counties';
import ClimateChange from './pages/ClimateChange';
import About from './pages/About';
import Crops from './pages/Crops'; // Import Crops page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counties" element={<Counties />} />
          <Route path="/climate-change" element={<ClimateChange />} />
          <Route path="/about" element={<About />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Handle unknown routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
