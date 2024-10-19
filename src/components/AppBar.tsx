import React, { useState } from 'react';
import { Code, Menu } from 'lucide-react';  // Import the hamburger icon

const AppBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
      <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Prepepper Softwares</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['home', 'about', 'services', 'blog', 'contact'].map((item) => (
                  <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
              ))}
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="sm:hidden flex items-center">
              <button
                  onClick={toggleMobileMenu}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="sm:hidden bg-white dark:bg-gray-800 px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'services', 'blog', 'contact'].map((item) => (
                  <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
              ))}
            </div>
        )}
      </nav>
  );
};

export default AppBar;
