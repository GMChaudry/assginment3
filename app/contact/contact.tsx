import React from 'react';
//import contactImage from './contact-us.jpg';

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="flex items-center h-screen bg-gradient-to-r from-green-50 to-teal-100">
      {/* Left Side Image */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img
          src="https://shorturl.at/p0svP"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-l-xl shadow-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-10 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-teal-900 mb-4">
          Contact <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Feel free to reach out to us for any inquiries or collaborations.
        </p>
        
        <button className="mt-4 px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
