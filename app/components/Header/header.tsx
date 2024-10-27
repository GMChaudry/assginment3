import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-BLUE-800 to-gray-700 text-white shadow-lg p-6">
      <nav className="container mx-auto flex justify-between items-center">
        {'PERCEPTION '}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-indigo-500"></span>VISION BEYOND YOUR PERCEPTIONS
        </h1>

        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="text-lg transition duration-300 transform hover:text-red-400 hover:scale-105"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="text-lg transition duration-300 transform hover:text-indigo-400 hover:scale-105"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg transition duration-300 transform hover:text-indigo-400 hover:scale-105"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
