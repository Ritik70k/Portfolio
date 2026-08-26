import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { profileInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'My Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#BDD9D7]/85 backdrop-blur-md shadow-md py-3 border-b border-[#0E7C7B]/20'
          : 'bg-[#BDD9D7]/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <span className="bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            Ritik
          </span>
          <span className="text-[#0E7C7B] inline-block transition-transform duration-300 group-hover:rotate-45">
            
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-[#03363D] bg-white/60 shadow-sm border border-[#0E7C7B]/30'
                    : 'text-[#2E6B70] hover:text-[#0E7C7B] hover:bg-white/30'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl text-[#03363D] hover:bg-white/40 focus:outline-none transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#CBE2E0]/95 backdrop-blur-xl border-b border-[#0E7C7B]/30 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0E7C7B] text-white shadow-md'
                      : 'text-[#03363D] hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-2 w-full text-center px-4 py-3 text-base font-bold text-white bg-linear-to-r from-[#0E7C7B] to-[#1A6B8A] rounded-xl shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
