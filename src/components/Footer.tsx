import React from 'react';
import { footer } from '../data';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
            <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'/>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='mr-20 md:w-1/2 flex flex-col items-center md:items-center md:justify-center space-y-2 md:space-y-4'>
                    <p className='text-center md:text-left ml-20 md:-ml-80 text-xs md:text-sm'>
                        Contact: <a href="mailto:contact@consultantsinblockchain.com" className="text-gray-300 hover:underline">contact@consultantsinblockchain.com</a> 
                    </p>
                </div>
                <div className="md:w-1/5 flex flex-col items-center md:items-end md:space-y-2 md:space-x-1">
                    {footer.map((item, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start md:space-y-2 md:space-x-1">
                            <img src={item.img} className="w-40 h-16" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
