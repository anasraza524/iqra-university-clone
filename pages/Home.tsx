
import React from 'react';
import Hero from '../components/Hero';
import { programs, news } from '../data/mockData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="pt-[110px] md:pt-[130px]">
      <Hero />

      {/* Why Choose IQRA? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#003366] uppercase mb-4 tracking-tight">Why Choose <span className="text-[#FFCC00]">IQRA University?</span></h2>
            <div className="w-24 h-1.5 bg-[#FFCC00] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-16 h-16 bg-[#003366] rounded-xl flex items-center justify-center text-[#FFCC00] text-3xl mb-8 group-hover:rotate-6 transition-transform">
                <i className="fas fa-award"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Top Ranked Faculty</h3>
              <p className="text-gray-600 leading-relaxed">
                IU boasts the highest number of PhD faculty members in the region, ensuring academic excellence and research-driven learning.
              </p>
            </div>
            
            <div className="group p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-16 h-16 bg-[#FFCC00] rounded-xl flex items-center justify-center text-[#003366] text-3xl mb-8 group-hover:rotate-6 transition-transform">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Global Career Placement</h3>
              <p className="text-gray-600 leading-relaxed">
                Our active Placement Office maintains strong ties with industry leaders, ensuring our graduates are sought after by top multinational corporations.
              </p>
            </div>
            
            <div className="group p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="w-16 h-16 bg-[#003366] rounded-xl flex items-center justify-center text-[#FFCC00] text-3xl mb-8 group-hover:rotate-6 transition-transform">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Research Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Ranked as the #1 Research University by HEC, we provide state-of-the-art labs and funding for innovative breakthroughs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] uppercase mb-4">Our Academic Excellence</h2>
              <div className="w-20 h-1 bg-[#FFCC00]"></div>
            </div>
            <Link to="/academics" className="text-[#003366] font-bold uppercase tracking-wider text-sm flex items-center hover:text-[#FFCC00] transition-colors mt-6 md:mt-0">
              View All Programs <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.slice(0, 6).map((program) => (
              <div key={program.id} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="h-64 overflow-hidden relative">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#003366]/80 px-3 py-1 rounded backdrop-blur-sm">
                      {program.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed line-clamp-2">
                    {program.description}
                  </p>
                  <Link to="/academics" className="inline-flex items-center text-[#003366] font-extrabold uppercase text-xs tracking-widest hover:text-[#FFCC00] transition-colors group-hover:translate-x-2 duration-300">
                    Discover More <i className="fas fa-plus ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-24 bg-[#003366] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase leading-tight">Life At <span className="text-[#FFCC00]">IQRA</span></h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
              Education at Iqra University extends far beyond the lecture halls. Our campus is a vibrant ecosystem where students engage in professional societies, competitive sports, and creative arts.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-bold text-[#FFCC00]">25+</span>
                <span className="text-sm uppercase font-semibold tracking-widest">Active Societies</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-bold text-[#FFCC00]">10+</span>
                <span className="text-sm uppercase font-semibold tracking-widest">Sports Facilities</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-bold text-[#FFCC00]">100+</span>
                <span className="text-sm uppercase font-semibold tracking-widest">Annual Events</span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-4xl font-bold text-[#FFCC00]">Infinite</span>
                <span className="text-sm uppercase font-semibold tracking-widest">Opportunities</span>
              </div>
            </div>
            <button className="mt-12 px-10 py-4 bg-[#FFCC00] text-[#003366] font-black uppercase rounded shadow-lg hover:bg-white transition-all">
              Explore Campus Life
            </button>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-3">
              <img src="https://picsum.photos/seed/life/800/800" alt="Student Life" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FFCC00] rounded-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] uppercase mb-4">Latest from Iqra</h2>
            <div className="w-20 h-1 bg-[#FFCC00] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {news.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <span className="text-sm font-bold text-[#FFCC00] mb-2 uppercase">{item.date}</span>
                  <h3 className="text-xl font-bold text-[#003366] mb-4 group-hover:text-[#FFCC00] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {item.summary}
                  </p>
                  <button className="text-[#003366] font-black uppercase text-xs tracking-widest flex items-center">
                    Read Story <i className="fas fa-arrow-right ml-2 text-[#FFCC00]"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
