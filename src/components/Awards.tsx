import React from 'react';
import { awards } from '../data';

const Awards: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white">
      <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 mb-4">
        Awards
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {awards.map((item, index) => (
          <div key={index} className="flex justify-center bg-gray-900">
            <img src={item.img} className="flex md:max-w-60 max-w-32 gap-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;