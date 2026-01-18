'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-linear-to-r from-blue-900 to-purple-900 text-white py-6 shadow-lg sticky top-0 z-50"
    >
      <div className="mx-auto px-8 flex justify-between items-center max-w-7xl">
        <motion.a
          href="#hero"
          className="text-2xl font-bold font-mono cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Meu Portfólio
        </motion.a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Tecnologias
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-300 transition-colors duration-300 relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-linear-to-r from-blue-900 to-purple-900"
        >
          <ul className="flex flex-col space-y-4 py-4 px-8">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-cyan-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologias
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;