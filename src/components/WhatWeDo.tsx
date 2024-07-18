import React from 'react';
import { wwd } from '../data/index';

const WhatWeDo: React.FC = () => {
  return (
    <div 
      className="w-full px-4 sm:px-6 lg:px-8 py-14 bg-gray-900 text-white relative" 
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, rgba(0,0,0,0.05) 1px)',
        backgroundSize: '10px 10px',
      }}
    >
      <h2 className="text-sm font-bold text-center mb-12 text-purple-200 uppercase tracking-widest">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wwd.map((item) => (
          <div
            key={item.id}
            className={`relative bg-gray-800 border border-white rounded-lg shadow-lg overflow-hidden ${item.className} transform transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <div className="relative h-48 w-full">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
                <div className="flex flex-col items-center text-center">
                  {item.icon}
                  <h3 className="text-lg font-bold text-white mt-2">{item.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
