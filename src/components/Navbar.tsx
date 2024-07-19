import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaStar, FaEnvelope } from 'react-icons/fa';
import { CIB2 } from '../assets';

const Navbar: React.FC = () => {
  return (
    <nav className="text-white fixed w-full z-50 py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex items-center bg-gray-700 p-2 rounded-full">
            <Link to="/" className="flex items-center">
              <img className="h-8 w-auto mx-4" src={CIB2} alt="Logo" />
            </Link>
            <div className="hidden sm:flex space-x-4">
              <Link to="/team" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</Link>
              <Link to="/stars" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Stars</Link>
              <a href="/contact" className="relative bg-inypurple text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-900 transition duration-300">
                Contact
                <span className="absolute inset-0 border-2 border-white-500 rounded-full transform scale-105 opacity-50"></span>
              </a>
            </div>
            <div className="flex sm:hidden space-x-4">
              <Link to="/team" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaUserFriends size={20} />
              </Link>
              <Link to="/stars" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <FaStar size={20} />
              </Link>
              <a href="/contact" className="bg-inypurple text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-purple-900 transition duration-300">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
