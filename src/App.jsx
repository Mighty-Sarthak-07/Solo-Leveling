import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import NavBar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import ShadowSystem from "./components/ShadowSystem";
import ShadowGame from "./components/ShadowGame"; 
import './App.css';
import WatchTrailer from './components/WatchTrailer';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={
          <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Hero />
            <About />
            <Features />
            <Story />
            <Contact />
          </main>
        } />
        <Route path="/shadowsystem" element={<ShadowSystem />} />
        <Route path="/shadowgame" element={<ShadowGame />} />
        <Route path="/watch" element={<WatchTrailer />} />
      </Routes>
    </Router>
  );
}

export default App;
