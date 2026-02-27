
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="w-full bg-white py-4 md:py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <img 
          src="https://i.imgur.com/rBxHTW4.png" 
          alt="BLUENET Header" 
          className="h-16 md:h-24 lg:h-28 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Navbar;
