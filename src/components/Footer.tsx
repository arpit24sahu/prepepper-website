import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Sun, Moon } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, toggleDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p>&copy; {currentYear} Prepepper Softwares. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 items-center">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <Linkedin className="h-6 w-6" />
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;