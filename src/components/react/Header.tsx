
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            John Doe
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#internships" className={navLinkClasses}>Internships</a>
            <a href="#projects" className={navLinkClasses}>Projects</a>
            <a 
              href="mailto:johndoe@email.com" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
