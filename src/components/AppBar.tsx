import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code, Menu, X } from 'lucide-react';
import { constants } from '../constants';

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', action: () => scrollToSection('home') },
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Services', action: () => scrollToSection('services') },
    { label: 'Blog', to: '/blogs' },
    { label: 'Contact', action: () => scrollToSection('contact') },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Code className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">{constants.companyName}</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              item.to ? (
                <Link
                  key={index}
                  to={item.to}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              item.to ? (
                <Link
                  key={index}
                  to={item.to}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out w-full text-left"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppBar;