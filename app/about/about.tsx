import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="flex items-center h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Left Side Image */}
      <div className="hidden md:block w-1/2 h-full">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Creative Agency"
          className="w-full h-full object-cover rounded-l-xl shadow-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-10 space-y-6 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-indigo-900">
          About <span className="text-blue-500">Us</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
          We are a <span className="text-indigo-600 font-medium">creative agency</span> dedicated to delivering 
          high-quality design and development solutions. Our mission is to bring innovative ideas to life, providing 
          exceptional value to our clients.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
