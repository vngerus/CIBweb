import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="relative bg-gray-900 font-sans lg:h-screen py-24">
      <div className="absolute inset-0 bg-gray-800 opacity-50 blur-md"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900 opacity-80">
        <div className="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border border-gray-700"></div>
          ))}
        </div>
      </div>
      <div className="relative grid lg:grid-cols-3 items-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
        <div className="max-w-lg mx-auto lg:mx-0 lg:text-left text-center mb-6">
          <h2 className="text-4xl font-extrabold text-white">Get In Touch</h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Interested in blockchain technology or need development services? Our experienced team is here to assist you with your next big project.
          </p>

          <form className="mt-8 bg-gray-900 border border-white rounded-lg p-6 shadow-md space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md h-12 px-6 bg-gray-100 text-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md h-12 px-6 bg-gray-100 text-sm outline-none"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-6 bg-gray-100 text-sm pt-3 outline-none"
            ></textarea>
            <button
              type="button"
              className="text-gray-800 bg-white hover:text-white hover:bg-inypurple font-semibold rounded-md text-sm px-6 py-3 w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="relative lg:col-span-2">
          <img
            src="https://readymadeui.com/images/analtsis.webp"
            alt="Contact Illustration"
            className="w-3/4 object-contain block mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
