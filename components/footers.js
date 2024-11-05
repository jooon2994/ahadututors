// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Ahadu Tutors</h2>
          <p>Connecting you with top tutors worldwide.</p>
        </div>
        <div className="space-x-6 flex justify-center">
          <a href="/features" className="hover:text-yellow-300">Features</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </div>
        <div className="flex space-x-4 justify-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} Ahadu Tutors All rights reserved.</p>
    </footer>
  );
}
