import React, { useState } from 'react';
import { CIB2 } from '../assets';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white fixed w-full z-50 py-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex items-center bg-gray-700 p-2 rounded-full">
            <img className="h-8 w-auto mx-4" src={CIB2} alt="Logo" />
            <div className="hidden sm:flex space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
              <a href="#" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our Stars</a>
              <a href="#" className="relative bg-inypurple text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-900 transition duration-300">
                Contact
                <span className="absolute inset-0 border-2 border-white-500 rounded-full transform scale-105 opacity-50"></span>
              </a>
            </div>
          </div>
          <div className="absolute top-4 right-4 sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-16 right-0 bg-gray-900 w-48 p-2 rounded-lg shadow-lg z-50 sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">What We Do</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#" className="bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
