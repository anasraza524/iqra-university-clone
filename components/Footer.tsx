
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div>
          <h3 className="text-2xl font-black mb-2 text-[#FFCC00] uppercase">Iqra University</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Top Ranked University</p>
          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
            For over three decades, Iqra University has been at the forefront of higher education in Pakistan, nurturing talented minds and creating leaders who shape the future.
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center"><i className="fas fa-phone mr-3 text-[#FFCC00]"></i>(021) 111 264 264</p>
            <p className="flex items-center"><i className="fas fa-map-marker-alt mr-3 text-[#FFCC00]"></i>Iqra University Main Campus, Defence View</p>
            <p className="flex items-center"><i className="fas fa-envelope mr-3 text-[#FFCC00]"></i>info@iqra.edu.pk</p>
          </div>
        </div>

        {/* Student Services */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-[#FFCC00] pl-4 uppercase">Student Services</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Alumni</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Information Resource Center (IRC)</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Placement Services</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Societies</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-[#FFCC00] pl-4 uppercase">Quick Access</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Apply for Degree/Transcripts</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Degree Verification</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Transcript Verification</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-[#FFCC00] transition-colors">Policies</a></li>
          </ul>
        </div>

        {/* Campus Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 border-l-4 border-[#FFCC00] pl-4 uppercase">Campuses</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>Karachi (Main Campus)</li>
            <li>Islamabad Campus</li>
            <li>Gulshan Campus</li>
            <li>North Nazimabad Campus</li>
            <li>Bahria Town Campus</li>
          </ul>
          <div className="mt-8 flex space-x-4">
            <a href="#" className="text-xl hover:text-[#FFCC00]"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-xl hover:text-[#FFCC00]"><i className="fab fa-x-twitter"></i></a>
            <a href="#" className="text-xl hover:text-[#FFCC00]"><i className="fab fa-youtube"></i></a>
            <a href="#" className="text-xl hover:text-[#FFCC00]"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
        <p>&copy; 2025 Iqra University. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
