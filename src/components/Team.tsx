import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { team } from '../data';

interface Member {
    name: string;
    role: string;
    description: string;
    img: string;
    social: {
        linkedin?: string;
        github?: string;
    };
}

const TeamCard: React.FC<{ member: Member }> = ({ member }) => {
    return (
        <div className="w-full max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:translate-y-[-10px] hover:shadow-2xl min-h-[24rem] flex flex-col justify-end">
            <div className="flex justify-center -mt-12">
                <img 
                    src={member.img} 
                    alt={`Display Picture of ${member.name}`} 
                    className="w-32 h-32 object-cover rounded-full border-4 border-inypurple shadow-md bg-gray-800"
                />
            </div>
            <div className="text-center p-6 mt-8">
                <h1 className="text-2xl font-semibold text-white">{member.name}</h1>
                <p className="text-sm text-inypurple">{member.role}</p>
                {member.description && (
                    <p className="text-sm text-gray-400 my-4">
                        {member.description.split('\n').map((line, index) => (
                            <span key={index}>{line}<br /></span>
                        ))}
                    </p>
                )}
                <div className="flex justify-center gap-4 mt-6">
                    {member.social.linkedin && (
                        <a 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-inypurple transition-colors"
                        >
                            <FaLinkedin className="text-blue-600" />
                        </a>
                    )}
                    {member.social.github && (
                        <a 
                            href={member.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-inypurple transition-colors"
                        >
                            <FaGithub className="text-white" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Team: React.FC = () => {
    return (
        <section className="relative bg-gray-900 py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 opacity-50 blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 opacity-80">
                <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border border-gray-700"></div>
                    ))}
                </div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-lg font-bold text-inypurple uppercase mb-2"></h2>
                    <h1 className="text-4xl font-bold text-white mt-12">Meet Our Team!</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {team.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
