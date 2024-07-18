import React from 'react';
import { world } from '../assets'; 

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-40 bg-gray-900">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover opacity-50" src={world} autoPlay loop muted playsInline />
      </div>
      <div className="relative z-10 bg-gray-900 bg-opacity-75 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, rgba(0,0,0,0.15) 1px)', backgroundSize: '10px 10px' }}>
        <div className="flex flex-col items-center text-center py-20">
          <p className="text-sm text-purple-200 uppercase tracking-wide mb-2">Consultants in Blockchain</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Discover blockchain's secure and <span className="text-purple-200">transparent transaction solutions.</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl">
            Endorsed by the most important companies in the Fintech and Blockchain sphere. CIB tech beyond the obvious.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition duration-300 flex items-center space-x-2">
            <span>Contact Us</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
