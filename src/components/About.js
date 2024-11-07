import React from "react";
import mina from '../assets/images/minalogo.png';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Grid Layout */}
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="flex flex-col items-start space-y-6 md:space-y-8">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-[#BC343E] sm:text-5xl md:text-6xl">
              Our Story
            </h1>
            {/* Paragraph */}
            <p className="text-lg text-gray-700 sm:text-xl leading-relaxed">
              At <b>Multimedia Institute for Nihongo Advancement Corp. (MINA Corp.)</b>, we are committed to empowering Filipinos through innovative and immersive Japanese language education. We aim to equip individuals with the skills and cultural knowledge needed for career growth, personal development, and successful living in Japan. We offer comprehensive language courses, from beginner to advanced levels, designed to meet the diverse needs of students, professionals, and those preparing for the JLPT.
            </p>
            <p className="text-lg text-gray-700 sm:text-xl leading-relaxed">
              Our unique approach combines effective teaching methods, personalized support, and a focus on cultural immersion, helping learners not only master Nihongo but also embrace new opportunities in Japan. Through collaborations with esteemed partners like JHIDO Japan, Nexus Japan, and Connective Language Training Center, we provide accredited, cutting-edge education that opens doors for Filipinos to thrive in Japan. Our partnerships enhance our offerings by blending technology, innovative teaching, and cultural insights, ensuring our students are well-prepared for academic and professional success.
            </p>
            {/* Divider */}
            <div className="w-full h-[2px] bg-[#BC343E] my-8"></div>

          </div>

          {/* Image */}
            <Link to='/'>
          <div className="relative rounded-lg overflow-hidden max-w-full">
            <img src={mina} alt="MINA Corp Logo" className="w-full h-full object-cover object-center" />
          </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default About;
