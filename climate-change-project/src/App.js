// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Counties from './pages/Counties';
import Crops from './pages/Crops';
import ClimateChange from './pages/ClimateChange';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counties" element={<Counties />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/climate-change" element={<ClimateChange />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
