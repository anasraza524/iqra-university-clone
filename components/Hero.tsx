
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/seed/campus/1920/1080')` }}
      >
        <div className="absolute inset-0 bg-[#003366]/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase tracking-tight">
          Shape Your Future At <br/><span className="text-[#FFCC00]">Iqra University</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200 font-light max-w-2xl mx-auto">
          Providing world-class education, state-of-the-art facilities, and a global research network to help you excel in your professional journey.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            to="/admissions" 
            className="px-8 py-4 bg-[#FFCC00] text-[#003366] font-bold rounded shadow-lg hover:bg-white transition-all w-full md:w-auto uppercase tracking-wide"
          >
            Apply Now
          </Link>
          <Link 
            to="/academics" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[#003366] transition-all w-full md:w-auto uppercase tracking-wide"
          >
            Our Programs
          </Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FFCC00] py-6 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-around text-[#003366]">
          <div className="text-center">
            <p className="text-3xl font-black">#1</p>
            <p className="text-sm font-semibold uppercase">Business School</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">100+</p>
            <p className="text-sm font-semibold uppercase">Degree Programs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">20,000+</p>
            <p className="text-sm font-semibold uppercase">Students</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black">40,000+</p>
            <p className="text-sm font-semibold uppercase">Alumni</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
