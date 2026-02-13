import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Story', id: 'story' },
    { name: 'Chat', id: 'terminal' },
    { name: 'Collection', id: 'collection' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 100; // Height of the floating navbar + padding
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg px-6 py-3 flex justify-between items-center pointer-events-auto">
        <div 
          className="text-3xl font-heading text-purple-600 drop-shadow-sm cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          KIKO
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="font-heading text-xl text-purple-900 hover:text-purple-600 transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
             href={LINKS.PUMP_FUN}
             target="_blank"
             rel="noopener noreferrer"
             className="font-heading text-xl bg-purple-500 text-white px-4 py-1 rounded-full hover:bg-purple-600 transition-all hover:scale-105"
          >
            Buy Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl p-6 md:hidden flex flex-col space-y-4 items-center animate-fade-in-down pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="font-heading text-2xl text-purple-900"
              onClick={(e) => handleScroll(e, link.id)}
            >
              {link.name}
            </a>
          ))}
           <a
             href={LINKS.PUMP_FUN}
             target="_blank"
             rel="noopener noreferrer"
             className="font-heading text-2xl bg-purple-500 text-white px-6 py-2 rounded-full"
             onClick={() => setIsOpen(false)}
          >
            Buy Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;