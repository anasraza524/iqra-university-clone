
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Explore IU', path: '/' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Services', path: '/student-services' },
    { name: 'Campuses', path: '/campuses' },
    { name: 'Excellence & Engagement', path: '/excellence' },
  ];

  const utilityLinks = [
    { name: 'Portal', path: '#' },
    { name: 'Information Hub', path: '#' },
    { name: 'Office of Registrar', path: '#' },
    { name: 'Help Center', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Announcement Banner */}
      <div className="bg-[#FFCC00] text-[#003366] py-2 px-4 text-center text-xs md:text-sm font-bold border-b border-[#e6b800]">
        <span>Applications for Skill-Up Batch-III are LIVE! </span>
        <a href="#" className="underline ml-2 hover:text-black">APPLY</a>
        <span className="mx-2 font-normal text-gray-600">or</span>
        <a href="#" className="underline hover:text-black">LEARN MORE !</a>
      </div>

      {/* Utility Bar */}
      <div className="bg-gray-50 text-gray-600 py-1 px-4 text-xs hidden md:block border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-end space-x-6">
          {utilityLinks.map((link) => (
            <a key={link.name} href={link.path} className="hover:text-[#003366] transition-colors uppercase tracking-wider font-semibold">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#003366] text-white p-2 rounded-lg font-bold text-xl shadow-sm">IU</div>
          <div className="flex flex-col">
            <span className="font-bold text-[#003366] leading-none uppercase">Iqra University</span>
            <span className="text-[10px] text-gray-500 tracking-widest font-medium">ESTABLISHED BY EDC</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-semibold text-sm transition-colors hover:text-[#FFCC00] uppercase tracking-wide ${
                isActive(link.path) ? 'text-[#003366] border-b-2 border-[#FFCC00]' : 'text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#003366] text-2xl">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t py-4 shadow-lg absolute w-full left-0 animate-in fade-in slide-in-from-top-4 duration-300 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold uppercase tracking-wide ${
                  isActive(link.path) ? 'text-[#003366]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              {utilityLinks.map((link) => (
                <a key={link.name} href={link.path} className="text-gray-500 uppercase text-sm font-semibold">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
