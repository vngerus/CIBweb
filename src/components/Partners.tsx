import React from 'react';
import { brand1, brand2 } from '../data/index';

const Partners: React.FC = () => {
  const brands = [...brand1, ...brand2];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
      <h2 className="text-sm font-bold text-center mb-12 text-purple-200 uppercase tracking-widest">Our Partners</h2>
      <div className="text-center mb-12">

      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8">
        {brands.map((brand, index) => (
          <div key={index} className="flex items-center justify-center p-2">
            <img src={brand.img} alt={`Brand ${index}`} className="max-h-20 lg:max-h-24 object-contain" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-500 transition duration-300">
          View All Partners
        </button>
      </div>
    </div>
  );
};

export default Partners;
