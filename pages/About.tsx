
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-[110px] md:pt-[130px]">
      {/* Header */}
      <div className="bg-[#003366] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">Excellence In <span className="text-[#FFCC00]">Education</span></h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto">Providing world-class education for over 30 years as Pakistan's premier higher education institution.</p>
        </div>
      </div>

      {/* Chancellor's Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="https://picsum.photos/seed/leader/600/800" alt="Leadership" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-10 -right-10 bg-[#FFCC00] p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-[#003366] font-black text-xl italic mb-2">"Our mission is to create thinkers, innovators, and leaders."</p>
              <p className="text-[#003366] font-bold text-sm uppercase">— Chancellor's Vision</p>
            </div>
          </div>
          <div>
            <span className="text-[#FFCC00] font-bold uppercase tracking-widest text-sm mb-4 block">Leadership Message</span>
            <h2 className="text-4xl font-black text-[#003366] uppercase mb-8 leading-tight">A Word From Our <span className="text-[#FFCC00]">Chancellor</span></h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Iqra University was founded with a singular vision: to empower the youth of Pakistan with knowledge that is both competitive and transformative. Since our inception in 1998, we have focused on academic rigor, research innovation, and ethical leadership.
              </p>
              <p>
                Our commitment to quality is reflected in our #1 ranking by the HEC and our growing global footprint. We believe that every student who enters our gates carries the potential to change the world, and it is our sacred duty to provide them with the tools to do so.
              </p>
              <p>
                As we look towards the future, we continue to invest in emerging technologies, sustainable research, and a diverse faculty to ensure that Iqra University remains a beacon of hope and excellence for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#003366] uppercase">Our Journey</h2>
            <div className="w-24 h-1.5 bg-[#FFCC00] mx-auto mt-4"></div>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="md:text-right md:pr-12">
                <span className="text-4xl font-black text-[#FFCC00] mb-2 block">1998</span>
                <h3 className="text-2xl font-bold text-[#003366] mb-4">Establishment</h3>
                <p className="text-gray-600">Iqra University was established by the Economic Development Council (EDC) in Karachi, starting with a handful of programs.</p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#003366] shadow-md z-10"></div>
              <div className="md:pl-12">
                <img src="https://picsum.photos/seed/hist1/600/400" alt="1998" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
              <div className="md:order-2 md:pl-12">
                <span className="text-4xl font-black text-[#FFCC00] mb-2 block">2010</span>
                <h3 className="text-2xl font-bold text-[#003366] mb-4">The HEC #1 Rank</h3>
                <p className="text-gray-600">IU achieved the prestigious #1 ranking for Business Universities in Pakistan, a title we have maintained for over a decade.</p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#003366] shadow-md z-10"></div>
              <div className="md:order-1 md:pr-12">
                <img src="https://picsum.photos/seed/hist2/600/400" alt="2010" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="md:text-right md:pr-12">
                <span className="text-4xl font-black text-[#FFCC00] mb-2 block">2024</span>
                <p className="text-gray-600">Today, IU is a multi-campus, multi-faculty research giant with over 40,000 alumni worldwide.</p>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#003366] shadow-md z-10"></div>
              <div className="md:pl-12">
                <img src="https://picsum.photos/seed/hist3/600/400" alt="Present" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-10 bg-gray-50 rounded-2xl group hover:bg-[#003366] transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:scale-110 transition-transform">
              <i className="fas fa-lightbulb text-[#003366] text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#FFCC00]">Innovation</h3>
            <p className="text-gray-600 group-hover:text-gray-300">Constantly pushing the boundaries of traditional education through research and modern technology.</p>
          </div>
          
          <div className="p-10 bg-gray-50 rounded-2xl group hover:bg-[#003366] transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:scale-110 transition-transform">
              <i className="fas fa-handshake text-[#003366] text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#FFCC00]">Integrity</h3>
            <p className="text-gray-600 group-hover:text-gray-300">Upholding the highest standards of ethical conduct and academic honesty in all our pursuits.</p>
          </div>

          <div className="p-10 bg-gray-50 rounded-2xl group hover:bg-[#003366] transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-md group-hover:scale-110 transition-transform">
              <i className="fas fa-users-cog text-[#003366] text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4 group-hover:text-[#FFCC00]">Community</h3>
            <p className="text-gray-600 group-hover:text-gray-300">Fostering a sense of belonging and social responsibility among our students and staff.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
