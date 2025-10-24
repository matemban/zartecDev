
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from './Icons';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Our Services', path: '/services' },
  { name: 'Request a Quote', path: '/quote' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItem: React.FC<{ path: string; children: React.ReactNode }> = ({ path, children }) => (
    <NavLink
      to={path}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'bg-black/20 text-white'
            : 'text-gray-300 hover:bg-black/20 hover:text-white'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 bg-size-400% animate-gradient-shift ${isScrolled ? 'bg-gradient-to-r from-primary-dark via-black to-black shadow-lg' : 'bg-gradient-to-r from-primary to-black'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-xl">ZARTEC TRADING</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavItem key={link.name} path={link.path}>
                  {link.name}
                </NavItem>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-300 hover:bg-black/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full text-gray-300 hover:bg-black/20 hover:text-white focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-black/20 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavItem key={link.name} path={link.path}>
                {link.name}
              </NavItem>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
