import React from 'react';
import { projects } from '../data/index';
import { people } from '../assets';

const Projects: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-gray-900 text-white">
      <h2 className="text-sm font-bold text-center mb-12 text-purple-200 uppercase tracking-widest">Our Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center lg:items-start lg:col-span-1 text-center lg:text-left">
          <img src={people} alt="Clients Image" className="w-52 h-52 lg:w-64 lg:h-64 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-purple-200">Collaborating with Leaders</h3>
          <p className="text-gray-300 mb-4">We are proud to partner with industry leaders who trust our expertise to achieve outstanding results.</p>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="relative flex items-center justify-center bg-gray-800 rounded-2xl transition-transform duration-300 hover:scale-105 w-40 h-40 lg:w-48 lg:h-48 m-1 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-grid-pattern bg-opacity-10 z-0 rounded-2xl"></div>
              <img
                src={project.img}
                alt={`Project ${index}`}
                className="h-full w-full object-contain z-10 p-2"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
