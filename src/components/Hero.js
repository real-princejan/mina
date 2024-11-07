import React from 'react';
import mina from '../assets/images/minalogo.png';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="bg-custom-bg bg-cover bg-center min-h-screen flex flex-col items-center justify-center relative">
      
      {/* About Us Button */}
      <Link to='/about'
        className="absolute top-8 right-8 font-medium text-[#BC343E] underline py-2 px-4  hover:text-black transition-all duration-300"
      >
        About Us
      </Link>

      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 text-center">
        
        {/* Centered Logo with animation */}
        <div className="flex justify-center mb-8">
          <img 
            src={mina}
            alt="Mina Logo" 
            className="w-96 h-96 object-contain japanese-wave-animation"
          />
        </div>

        {/* Enhanced Text with Icon */}
        <div className="flex items-center justify-center space-x-2 hover:text-[#bc3451] japanese-text-animation">
          <p className="text-xl md:text-2xl font-semibold text-[#BC343E]">
            Great opportunities are on the way — stay tuned!
          </p>
        </div>

      </div>
    </header>
  );
};

export default Hero;
