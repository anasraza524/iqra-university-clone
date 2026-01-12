
import React from 'react';
import { campuses } from '../data/mockData';

const Campuses: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-[#003366] uppercase">Our Campuses</h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">Explore our nationwide network of state-of-the-art educational facilities.</p>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-16">
          {campuses.map((campus, idx) => (
            <div key={campus.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-2xl shadow-xl overflow-hidden`}>
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <img src={campus.image} alt={campus.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-[#003366] mb-6">{campus.name}</h2>
                <div className="space-y-6 text-gray-600">
                  <div className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1.5 mr-4 text-[#FFCC00] text-xl"></i>
                    <span className="text-lg">{campus.address}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-phone-alt mt-1.5 mr-4 text-[#FFCC00] text-xl"></i>
                    <span className="text-lg">{campus.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-envelope mt-1.5 mr-4 text-[#FFCC00] text-xl"></i>
                    <span className="text-lg">{campus.email}</span>
                  </div>
                </div>
                <div className="mt-12 flex space-x-6">
                  <button className="px-6 py-3 bg-[#003366] text-white font-bold rounded hover:bg-[#FFCC00] hover:text-[#003366] transition-all">
                    View Programs
                  </button>
                  <button className="px-6 py-3 border-2 border-[#003366] text-[#003366] font-bold rounded hover:bg-[#003366] hover:text-white transition-all">
                    Virtual Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Campuses;
