
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-10',
        scrolled ? 'bg-white/90 dark:bg-baobab-midnight/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 z-50">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-r from-baobab-green to-baobab-leaf rounded-md rotate-45 transform origin-center"></div>
            <div className="absolute inset-[3px] bg-white dark:bg-baobab-midnight rounded-md rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center text-baobab-green font-display font-bold text-xl">B</div>
          </div>
          <span className="font-display font-semibold text-xl text-baobab-midnight dark:text-white">Baobab Grid</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'How It Works', 'Impact', 'Get Involved'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative text-baobab-midnight/80 dark:text-white/80 hover:text-baobab-green dark:hover:text-baobab-green transition-colors py-2"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-baobab-green transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-baobab-midnight dark:text-white hover:text-baobab-green dark:hover:text-baobab-green transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white dark:bg-baobab-midnight pt-24 px-6 transition-transform duration-300 ease-in-out md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col space-y-6 items-center">
            {['About', 'How It Works', 'Impact', 'Get Involved'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xl font-medium text-baobab-midnight/80 dark:text-white/80 hover:text-baobab-green dark:hover:text-baobab-green transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
