import './index.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import About from './Routes/About';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
  );
}

export default App;
