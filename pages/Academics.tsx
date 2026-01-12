
import React from 'react';
import { programs } from '../data/mockData';

const Academics: React.FC = () => {
  const faculties = [
    "Faculty of Management Sciences",
    "Faculty of Computing & Technology",
    "Faculty of Engineering",
    "Faculty of Media Sciences",
    "Faculty of Fashion & Design",
    "Faculty of Pharmacy",
    "Faculty of Health Sciences"
  ];

  return (
    <div className="pt-[110px] md:pt-[130px]">
      <div className="bg-[#003366] py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-black uppercase tracking-widest mb-4">Explore IU <span className="text-[#FFCC00]">Academics</span></h1>
          <p className="text-xl font-light text-gray-300">World-class programs recognized by HEC and top regulatory bodies.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Faculty Filter/Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-40">
                <h3 className="text-sm font-black text-[#003366] mb-6 uppercase tracking-widest border-b pb-2">Faculties</h3>
                <ul className="space-y-4">
                  {faculties.map((f, i) => (
                    <li key={i}>
                      <a href={`#faculty-${i}`} className="text-xs font-bold text-gray-600 hover:text-[#003366] uppercase block transition-colors">
                        {f}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Programs Listing */}
            <div className="lg:col-span-3 space-y-24">
              {faculties.map((faculty, fIdx) => (
                <div key={fIdx} id={`faculty-${fIdx}`} className="scroll-mt-40">
                  <div className="flex items-center space-x-4 mb-8">
                    <h2 className="text-2xl font-black text-[#003366] uppercase">{faculty}</h2>
                    <div className="flex-grow h-px bg-gray-200"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programs
                      .filter(p => p.category === faculty)
                      .map((p) => (
                        <div key={p.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                          <div className="h-48 overflow-hidden relative">
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="p-8">
                            <h3 className="text-xl font-bold text-[#003366] mb-3">{p.title}</h3>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{p.description}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                              <span className="text-[10px] font-black bg-gray-100 text-[#003366] px-2 py-1 rounded uppercase">Recognized by HEC</span>
                              <button className="text-[#003366] font-black uppercase text-[10px] tracking-widest hover:text-[#FFCC00]">
                                Program Details <i className="fas fa-plus ml-1"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    {programs.filter(p => p.category === faculty).length === 0 && (
                      <p className="text-gray-400 italic text-sm">Programs for this faculty are being updated for Spring 2026.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
