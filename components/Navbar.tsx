import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onConsultClick: () => void;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Brand Story', href: '#home' },
  { label: 'Problem', href: '#pain-points' },
  { label: 'Solution', href: '#solution' },
  { label: 'Revenue', href: '#revenue' },
  { label: 'Process', href: '#process' },
];

export const Navbar: React.FC<NavbarProps> = ({ onConsultClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-teo-green/95 backdrop-blur-sm border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex flex-col">
                <span className="text-white font-serif text-2xl font-bold tracking-wider">
                    Teo<span className="text-teo-gold">Life</span>
                </span>
                <span className="text-[10px] text-gray-300 tracking-[0.2em] uppercase mt-0.5">Oriental Medicine Network</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-gray-300 hover:text-teo-gold px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <button 
              onClick={onConsultClick}
              className="bg-teo-gold text-teo-green hover:bg-white hover:text-teo-green px-6 py-2.5 rounded-sm font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
            >
              가맹 상담 신청
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-teo-gold focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-teo-dark border-t border-white/10 absolute w-full animate-fade-in-up">
          <div className="px-4 pt-2 pb-8 space-y-2 shadow-xl">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-teo-gold hover:bg-teo-green px-3 py-3 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={() => { setIsOpen(false); onConsultClick(); }}
              className="block w-full text-center mt-6 bg-teo-gold text-teo-green px-4 py-3 rounded-sm font-bold"
            >
              가맹 상담 신청하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};