import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 text-gray-200 p-6 shadow-inner">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-lg font-semibold">&copy; 2024 PERCEPTION. All Rights Reserved.</p>
        <p className="text-sm text-gray-400">
          Crafted with passion and dedication. <span className="text-indigo-300">Vision beyond your perception. BY GM CHAUDRY</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
