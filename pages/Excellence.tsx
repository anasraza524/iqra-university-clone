
import React from 'react';

const Excellence: React.FC = () => {
  return (
    <div className="pt-[110px] md:pt-[130px]">
      {/* Banner */}
      <div className="bg-[#003366] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-widest">Excellence & <span className="text-[#FFCC00]">Engagement</span></h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">Driving research, quality assurance, and global partnerships.</p>
      </div>

      {/* Strategic Departments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ORIC */}
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-[#003366] text-[#FFCC00] rounded-2xl flex items-center justify-center text-4xl">
                <i className="fas fa-microscope"></i>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 uppercase">ORIC</h3>
                <p className="text-sm font-bold text-[#FFCC00] mb-4 tracking-widest uppercase">Office of Research Innovation & Commercialization</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  ORIC facilitates research activities, fosters industrial linkages, and promotes innovation through incubation centers. We aim to transform ideas into viable commercial products.
                </p>
                <button className="text-[#003366] font-bold uppercase text-xs tracking-widest flex items-center hover:text-[#FFCC00]">
                  View Research Projects <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* QEC */}
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-[#FFCC00] text-[#003366] rounded-2xl flex items-center justify-center text-4xl">
                <i className="fas fa-check-double"></i>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 uppercase">QEC</h3>
                <p className="text-sm font-bold text-gray-400 mb-4 tracking-widest uppercase">Quality Enhancement Cell</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The QEC ensures that IU maintains the highest international standards of higher education. We regularly perform self-assessments and faculty evaluations to drive continuous improvement.
                </p>
                <button className="text-[#003366] font-bold uppercase text-xs tracking-widest flex items-center hover:text-[#FFCC00]">
                  Compliance Reports <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* IU International */}
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-[#003366] text-[#FFCC00] rounded-2xl flex items-center justify-center text-4xl">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 uppercase">IU International</h3>
                <p className="text-sm font-bold text-[#FFCC00] mb-4 tracking-widest uppercase">Global Academic Partnerships</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our international office manages student exchanges, faculty mobility, and collaborative degree programs with top universities in the UK, USA, and Europe.
                </p>
                <button className="text-[#003366] font-bold uppercase text-xs tracking-widest flex items-center hover:text-[#FFCC00]">
                  Partner Institutions <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>

            {/* PD */}
            <div className="p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-[#FFCC00] text-[#003366] rounded-2xl flex items-center justify-center text-4xl">
                <i className="fas fa-user-tie"></i>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#003366] mb-4 uppercase">Prof. Development</h3>
                <p className="text-sm font-bold text-gray-400 mb-4 tracking-widest uppercase">Center for Professional Excellence</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We offer short courses, certifications, and corporate training programs designed to keep professionals ahead in their respective fields through continuous learning.
                </p>
                <button className="text-[#003366] font-bold uppercase text-xs tracking-widest flex items-center hover:text-[#FFCC00]">
                  Upcoming Courses <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-[#FFCC00] mb-2">500+</p>
            <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Research Papers</p>
          </div>
          <div>
            <p className="text-5xl font-black text-[#FFCC00] mb-2">50+</p>
            <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Global Partners</p>
          </div>
          <div>
            <p className="text-5xl font-black text-[#FFCC00] mb-2">15</p>
            <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Incubated Startups</p>
          </div>
          <div>
            <p className="text-5xl font-black text-[#FFCC00] mb-2">100%</p>
            <p className="text-xs uppercase font-bold tracking-widest text-gray-400">HEC Compliance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;
