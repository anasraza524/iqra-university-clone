
import React from 'react';

const StudentServices: React.FC = () => {
  const services = [
    {
      title: "Placement Services",
      icon: "fa-briefcase",
      description: "Our dedicated placement office works tirelessly to connect students with leading national and international employers.",
      features: ["Job Fairs", "CV Writing Workshops", "Interview Prep", "Industry Networking"]
    },
    {
      title: "Societies & Clubs",
      icon: "fa-users",
      description: "With over 25 active societies, students find ample opportunity to lead, innovate, and express themselves beyond the classroom.",
      features: ["Literary Society", "Drama Club", "Sports Society", "Tech Club"]
    },
    {
      title: "Information Resource Center",
      icon: "fa-book",
      description: "A modern digital library providing access to thousands of books, journals, and international databases.",
      features: ["Digital Archive", "Quiet Zones", "Group Study Rooms", "Research Assistance"]
    },
    {
      title: "Sports & Athletics",
      icon: "fa-trophy",
      description: "State-of-the-art sports facilities including swimming pools, gymnasiums, and competitive teams.",
      features: ["National Championships", "Campus Gym", "Swimming Pool", "Cricket Ground"]
    },
    {
      title: "Alumni Network",
      icon: "fa-user-graduate",
      description: "Join a global community of over 40,000 successful alumni who shape industries worldwide.",
      features: ["Alumni Portal", "Networking Events", "Mentorship Programs", "Homecoming"]
    }
  ];

  return (
    <div className="pt-[110px] md:pt-[130px]">
      {/* Banner */}
      <div className="bg-[#003366] py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-widest">Student <span className="text-[#FFCC00]">Services</span></h1>
        <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">Providing a supportive ecosystem for personal and professional growth.</p>
      </div>

      {/* Main Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all p-10 flex flex-col group">
                <div className="w-16 h-16 bg-[#003366] rounded-xl flex items-center justify-center text-[#FFCC00] text-2xl mb-8 group-hover:scale-110 transition-transform">
                  <i className={`fas ${s.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold text-[#003366] mb-4">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                  {s.description}
                </p>
                <div className="space-y-2 border-t pt-6">
                  {s.features.map((f, i) => (
                    <div key={i} className="flex items-center text-xs font-bold text-gray-400 uppercase">
                      <i className="fas fa-check text-[#FFCC00] mr-2"></i> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#003366] uppercase mb-8">Need Support?</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Our Student Help Desk is your one-stop shop for all queries regarding enrollment, documentation, or campus life. We are committed to ensuring your time at IQRA is smooth and productive.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center text-[#003366] mr-4">
                  <i className="fas fa-headset text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">24/7 Digital Support</p>
                  <p className="text-[#003366] font-bold">helpdesk@iqra.edu.pk</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#FFCC00] rounded-full flex items-center justify-center text-[#003366] mr-4">
                  <i className="fas fa-building text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">On-Campus Center</p>
                  <p className="text-[#003366] font-bold">Building A, 1st Floor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/support/800/600" className="rounded-3xl shadow-2xl" alt="Support" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentServices;
