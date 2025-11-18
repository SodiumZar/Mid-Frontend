import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-xl font-bold">
          My Portfolio
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-300 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
