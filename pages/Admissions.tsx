
import React, { useState } from 'react';

const Admissions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Business Administration');

  const tabs = [
    "Business Administration",
    "Engineering Sciences & Technology",
    "Fashion & Design",
    "Education & Social Sciences",
    "Pharmacy",
    "Health & Sciences",
    "Media Sciences",
    "International Students",
    "Financial Aid & Scholarships",
    "Application for credit transfer"
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Business Administration":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Management Sciences</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Four-Year Bachelor’s Programs (BBA-H / BS)</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 45% marks in HSSC or equivalent (recognized board).</p>
                <p className="text-gray-600 text-sm">• For “A” Levels/foreign qualifications: Equivalence certificate from IBCC.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Master’s Program (MBA)</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 2nd Division / 2.5 CGPA (16 years of education).</p>
                <p className="text-gray-600 text-sm">• 16 years Business Education → 36 credit hours (1.5 years).</p>
                <p className="text-gray-600 text-sm">• 16 years Non-Business Education → 72 credit hours.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">PhD in Business Administration</h4>
                <p className="text-gray-600 text-sm mt-2">• MS/MPhil in relevant field with minimum CGPA 3.0/4.0.</p>
                <p className="text-gray-600 text-sm">• NTS GAT (Subject) with at least 60% marks.</p>
              </div>
            </div>
          </div>
        );
      case "Engineering Sciences & Technology":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Engineering (PEC Accredited)</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">BE Software / Electronic Engineering</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 60% marks in HSSC (Pre-Engineering) or equivalent.</p>
                <p className="text-gray-600 text-sm">• Valid entry test score (Iqra Aptitude Test / NTS).</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">BS Computer Science / AI / Cyber Security</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 50% marks in HSSC (Pre-Engineering / ICS / Pre-Medical with math deficiency) or equivalent.</p>
              </div>
            </div>
          </div>
        );
      case "Fashion & Design":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Fashion & Design</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Bachelor of Fashion Design / Textile Design</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 45% marks in HSSC or equivalent.</p>
                <p className="text-gray-600 text-sm">• Creative Drawing Test and Portfolio Interview are mandatory.</p>
              </div>
            </div>
          </div>
        );
      case "Education & Social Sciences":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Education</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">B.Ed (Honors) / BS Psychology</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 45% marks in HSSC or equivalent.</p>
                <p className="text-gray-600 text-sm">• Associate Degree holders (Edu) can apply for bridging to 5th semester.</p>
              </div>
            </div>
          </div>
        );
      case "Pharmacy":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Pharmacy (PCP Recognized)</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Pharm-D (5 Year Program)</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 60% marks in HSSC (Pre-Medical) or equivalent.</p>
                <p className="text-gray-600 text-sm">• Limited seats available on merit basis.</p>
              </div>
            </div>
          </div>
        );
      case "Health & Sciences":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Health Sciences</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Doctor of Physical Therapy (DPT)</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 60% marks in HSSC (Pre-Medical) or equivalent.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">BS Nursing / Medical Lab Technology</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 50% marks in HSSC (Pre-Medical) or equivalent.</p>
              </div>
            </div>
          </div>
        );
      case "Media Sciences":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Faculty of Media Sciences</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">BS Media Sciences</h4>
                <p className="text-gray-600 text-sm mt-2">• Minimum 45% marks in HSSC or equivalent.</p>
                <p className="text-gray-600 text-sm">• Successful completion of the IU Aptitude Test and Interview.</p>
              </div>
            </div>
          </div>
        );
      case "International Students":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">International Admissions</h3>
            <p className="text-gray-600">Iqra University is home to students from over 15 countries. We offer a globally recognized curriculum and a multicultural environment.</p>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-bold text-[#003366]">Requirements</h4>
                <ul className="list-disc ml-6 text-sm text-gray-600 space-y-2">
                  <li>Valid Passport and Student Visa.</li>
                  <li>Equivalence from IBCC/HEC for all foreign qualifications.</li>
                  <li>English proficiency (IELTS/TOEFL) for non-native speakers.</li>
                  <li>NOC from Ministry of Education/Interior as per Govt policy.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Financial Aid & Scholarships":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Scholarships & Financial Assistance</h3>
            <p className="text-gray-600">We believe that financial constraints should never stand in the way of a brilliant mind. IQRA offers several types of aid.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#003366]">Merit Scholarships</h4>
                <p className="text-xs text-gray-500">Based on academic excellence in previous records and IU Aptitude Test.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#003366]">Need-Based Aid</h4>
                <p className="text-xs text-gray-500">For students requiring financial support to continue their studies.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#003366]">Kinship Discount</h4>
                <p className="text-xs text-gray-500">Available for siblings of current IU students or alumni.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[#003366]">Corporate Partner Discount</h4>
                <p className="text-xs text-gray-500">For employees and children of our corporate partners.</p>
              </div>
            </div>
          </div>
        );
      case "Application for credit transfer":
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#003366]">Credit Transfer Policy</h3>
            <p className="text-gray-600">Iqra University welcomes transfer students from recognized national and international institutions.</p>
            <ul className="list-disc ml-6 text-sm text-gray-600 space-y-2">
              <li>Course grades must be 'C' or higher for undergraduate and 'B' or higher for graduate.</li>
              <li>A maximum of 50% of the total credit hours can be transferred.</li>
              <li>Official transcript and course outlines from previous university are mandatory.</li>
              <li>The Registrar's Office makes the final decision on equivalence.</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-[110px] md:pt-[130px]">
      {/* Hero Section */}
      <section className="relative bg-[#003366] py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <span className="bg-[#FFCC00] text-[#003366] px-3 py-1 text-xs font-bold uppercase rounded-full mb-4 inline-block">Admission Open Spring 2026</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter">Start Your Journey at <span className="text-[#FFCC00]">Iqra University</span></h1>
          <p className="text-lg font-light text-gray-300">Everything you need to know about admissions in one place.</p>
          <button className="mt-8 px-10 py-4 bg-[#FFCC00] text-[#003366] font-bold uppercase rounded shadow-lg hover:bg-white transition-all">
            Apply Now – Start Your Journey
          </button>
        </div>
      </section>

      {/* Admission Hub */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003366] uppercase">Admission Hub</h2>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Your Academic Journey Need to Know</p>
            <div className="w-16 h-1 bg-[#FFCC00] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-2">
              <p className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Criteria of Admission</p>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded font-bold text-xs uppercase tracking-wide transition-all border-l-4 ${
                    activeTab === tab
                      ? 'bg-[#003366] text-white border-[#FFCC00]'
                      : 'bg-white text-gray-600 border-transparent hover:bg-gray-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100 min-h-[500px] animate-in fade-in duration-300">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
      
      {/* Ready to Begin */}
      <section className="py-24 bg-[#003366] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6 uppercase">Ready to Begin Your Future?</h2>
          <p className="text-gray-300 mb-10">Join thousands of successful graduates who started their journey at Iqra University. Your dreams are just one application away.</p>
          <button className="px-10 py-5 bg-[#FFCC00] text-[#003366] font-black uppercase rounded shadow-xl hover:bg-white transition-all">
            Apply Now – Start Your Journey
          </button>
          <p className="mt-8 text-sm text-gray-400">Don’t just dream about your future — build it with us. Our admissions team is ready to guide you through every step.</p>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
