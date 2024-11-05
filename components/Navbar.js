import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between" style={{ minHeight: '100px' }}>
        {/* Logo with larger size */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" /> {/* Larger logo */}
          <span className="text-2xl font-semibold tracking-wide">Ahadu Tutors</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-300 transition duration-200">Home</Link>
          <Link href="/browse-tutors" className="hover:text-yellow-300 transition duration-200">Browse Tutors</Link>
          <Link href="/about" className="hover:text-yellow-300 transition duration-200">About</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition duration-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 p-6 space-y-4">
          <Link href="/" className="block hover:text-yellow-300" onClick={toggleMenu}>Home</Link>
          <Link href="/browse-tutors" className="block hover:text-yellow-300" onClick={toggleMenu}>Browse Tutors</Link>
          <Link href="/about" className="block hover:text-yellow-300" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="block hover:text-yellow-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
