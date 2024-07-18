import React from 'react';
import { world } from '../assets';

const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover opacity-30" src={world} autoPlay loop muted playsInline />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-purple-200 uppercase tracking-wide mb-2">CONSULTANTS IN BLOCKCHAIN
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover blockchain's secure and <span className='text-purple-200'>transparent transaction solutions.</span> 
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl">
            Endorsed by the most important companies in the Fintech and Blockchain sphere. CIB tech beynd the obvious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
