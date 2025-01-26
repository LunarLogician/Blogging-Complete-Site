import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#213555] to-[#3E5879] text-[#F5EFE7] shadow-lg">
      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex-shrink-0 text-3xl font-extrabold tracking-wide">
          <a href="/" className="hover:text-[#D8C4B6] transition-all duration-300">
            Blogging<span className="text-[#D8C4B6]">Site</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-lg font-semibold ml-auto">
          <a href="/" className="hover:text-[#D8C4B6] transition-all duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-[#D8C4B6] transition-all duration-300">
            About
          </a>
          <a href="/blogs" className="hover:text-[#D8C4B6] transition-all duration-300">
            Blog
          </a>
          <a href="/createblog" className="hover:text-[#D8C4B6] transition-all duration-300">
            Create Blog
          </a>
          <a href="/register" className="hover:text-[#D8C4B6] transition-all duration-300">
            Register
          </a>
          <a href="/login" className="hover:text-[#D8C4B6] transition-all duration-300">
            Login
          </a>
          <a href="/contact" className="hover:text-[#D8C4B6] transition-all duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#F5EFE7] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-[#213555] text-[#F5EFE7] space-y-6 py-6 px-8 shadow-inner animate-slide-down"
        >
          <a
            href="/"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            About
          </a>
          <a
            href="/blogs"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Blog
          </a>
          <a
            href="/createblog"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Create Blog
          </a>
          <a
            href="/register"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Register
          </a>
          <a
            href="/login"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Login
          </a>
          <a
            href="/contact"
            className="block hover:text-[#D8C4B6] text-lg transition-all duration-300"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
