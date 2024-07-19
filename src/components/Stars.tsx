import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import { stars } from '../data';

const Stars = () => {
    return (
        <div className="relative overflow-hidden py-16 bg-gray-900">
            <div className="absolute inset-x-0 top-0 bottom-0 bg-gray-800 opacity-50 blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 opacity-80">
                <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={`border border-gray-700`} />
                    ))}
                </div>
            </div>

            <ul className="font-inter flex flex-wrap justify-center gap-x-8 gap-y-16 max-w-screen-md mx-auto mt-20 relative z-10">
                {stars.map((person, index) => (
                    <li key={index} className="flex flex-col items-center max-w-xs mt-4">
                        <div className="relative rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                            <img src={person.img} alt={person.name} className='block align-middle w-full h-auto object-cover' />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-60 transition-opacity flex items-center justify-center">
                                <a href={person.social.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                                    <FaLinkedin className="text-white text-4xl transition-transform transform hover:scale-110 hover:text-blue-400" />
                                </a>
                                <a href={person.social.profesionalweb} target="_blank" rel="noopener noreferrer" className="ml-2">
                                    <FaGlobe className="text-white text-4xl transition-transform transform hover:scale-110 hover:text-inypurple" />
                                </a>
                            </div>
                        </div>
                        <h1 className="m-0 mt-6 text-xl font-semibold leading-8 tracking-tighter text-white text-center">
                            {person.name}
                        </h1>
                        <p className='m-0 mt-2 text-base leading-7 text-gray-300 text-center overflow-hidden max-h-14'>
                            {person.description}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stars;
