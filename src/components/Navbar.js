// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ isVisible, toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTitleClick = () => {
    setMenuOpen((prevOpen) => !prevOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`bg-blue-900 text-white py-4 fixed top-0 left-0 w-full z-40 shadow-md transition-transform transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} dark:bg-gray-800 dark:text-gray-200`}>
      <div className="flex justify-between items-center px-4 md:px-8">
        <div className="text-2xl font-bold md:hidden cursor-pointer flex items-center" onClick={handleTitleClick}>
          <span>Fredrik Jurgell</span>
          <span className="ml-2 text-lg">{menuOpen ? '▲' : '▼'}</span>
        </div>
      </div>
      <ul className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-8 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <li><Link href="#about" className="font-bold transition-colors hover:text-yellow-400" onClick={handleLinkClick}>About</Link></li>
        <li><Link href="#projects" className="font-bold transition-colors hover:text-yellow-400" onClick={handleLinkClick}>Projects</Link></li>
        <li><Link href="#resume" className="font-bold transition-colors hover:text-yellow-400" onClick={handleLinkClick}>Résumé</Link></li>
        <li><Link href="#recommendation" className="font-bold transition-colors hover:text-yellow-400" onClick={handleLinkClick}>Recommendations</Link></li>
      </ul>
      <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
        <button onClick={toggleDarkMode} className="font-bold transition-transform duration-500 hover:scale-110">
          {darkMode ? <FaSun size={24} className="animate-spin-slow" /> : <FaMoon size={24} className="animate-pulse" />}
        </button>
      </div>
    </nav>
  );
}
