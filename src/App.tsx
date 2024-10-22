import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import LandingSection from './components/LandingSection';
import WhatYouGetSection from './components/WhatYouGetSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
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
        <Routes>
          <Route path="/" element={
            <main>
              <LandingSection />
              <WhatYouGetSection />
              <ServicesSection />
              <TestimonialsSection />
              <BlogSection />
              <ContactSection />
            </main>
          } />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogPost />} />
        </Routes>
        <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </Router>
  );
}

export default App;