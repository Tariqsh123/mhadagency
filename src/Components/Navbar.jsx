import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../public/logo.JPG'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#121213] shadow-md fixed w-full z-50 border-b border-white">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src={Logo}
            alt="Logo"
            className="h-9 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={closeMenu}
        />
      )}

      {/* Side Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-600">
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
          <X
            className="w-6 h-6 text-white cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <ul className="flex flex-col px-6 py-4 space-y-4 text-white font-medium">
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hover:text-[#07a6e7] transition cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
