import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

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
      <Router>
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
          <AppBar />
          <main>
            <Routes>
              {/* Route for the main page with all sections */}
              <Route path="/" element={
                <>
                  <LandingSection />
                  <WhatYouGetSection />
                  <ServicesSection />
                  <TestimonialsSection />
                  <ContactSection />
                  <BlogSection />
                </>
              } />

              {/* Route for the blog list page */}
              <Route path="/blogs" element={<BlogList />} />

              {/* Route for individual blog posts */}
              <Route path="/blogs/:slug" element={<BlogPost />} />
            </Routes>

          </main>
          <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </Router>
  );
}

export default App;