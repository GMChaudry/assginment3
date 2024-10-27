import React from 'react';
//import portfolioImage from './portfolio.jpg'; // Adjust the image name and path as necessary

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="flex items-center h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      {/* Left Side Image */}
      <div className="hidden md:block w-1/2 h-full relative">
        <img
          src="https://via.placeholder.com/600x800" // Use your imported image here
          alt="Portfolio Showcase"
          className="w-full h-full object-cover rounded-l-xl shadow-lg"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 h-full p-10 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-indigo-900 mb-4">
          Our <span className="text-blue-500">Portfolio</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Here are some of the amazing projects we’ve worked on.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-lg">Project 1</h3>
            <p className="text-gray-600">Brief description of Project 1.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-lg">Project 2</h3>
            <p className="text-gray-600">Brief description of Project 2.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-lg">Project 3</h3>
            <p className="text-gray-600">Brief description of Project 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
