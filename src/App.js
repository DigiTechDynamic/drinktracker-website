import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}

export default App;