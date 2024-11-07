import React, { useState } from 'react';
import mina from '../assets/images/minalogo.png';
import { FaArrowRight } from 'react-icons/fa6';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  const handleClick = () => {
    setAnimateText(true);
    setTimeout(() => setAnimateText(false), 1000); // Match duration with CSS animation (1s)
  };

  return (
    <header className="bg-custom-bg bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
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
        <Link to='/about' onClick={handleClick}>
          <div className={`flex items-center justify-center space-x-2 hover:text-[#bc3451] ${animateText ? 'japanese-text-animation' : ''}`}>
            <p className="text-xl md:text-2xl font-semibold text-[#BC343E]">
              Great opportunities are on the way — stay tuned!
            </p>
            <FaArrowRight className="h-6 w-6 text-[#BC343E]" />
          </div>
        </Link>

      </div>
    </header>
  );
};

export default Hero;
