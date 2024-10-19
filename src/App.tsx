import React, { useState, useEffect } from 'react';
import AppBar from './components/AppBar';
import LandingSection from './components/LandingSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <AppBar />
      <main>
        <LandingSection />
        <WhatYouGetSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <BlogSection />
      </main>
      <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;