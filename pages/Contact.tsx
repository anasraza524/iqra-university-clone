
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-[#003366] py-20 text-white text-center">
        <h1 className="text-4xl font-black uppercase mb-4">Contact Us</h1>
        <p className="text-gray-300">We are here to help you. Get in touch with our team.</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all">
                  <option>Admission Query</option>
                  <option>Fee Structure</option>
                  <option>Academic Inquiry</option>
                  <option>Job Opportunity</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="px-10 py-4 bg-[#FFCC00] text-[#003366] font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#e6b800] transition-all w-full md:w-auto uppercase tracking-widest">
                Submit Message
              </button>
            </form>
          </div>

          {/* Map & Addresses */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 h-80 bg-gray-200 relative">
              {/* Mock Map Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <i className="fas fa-map-marked-alt text-6xl mb-4"></i>
                <p className="font-bold">Interactive Map Component</p>
                <p className="text-sm">Main Campus, Karachi</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-bold text-[#003366] mb-4 uppercase flex items-center">
                  <span className="w-2 h-6 bg-[#FFCC00] mr-2"></span> Admission Office
                </h4>
                <p className="text-sm text-gray-600 mb-2">Monday - Saturday (9AM - 8PM)</p>
                <p className="text-[#003366] font-bold">+92 21 111-264-473</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-bold text-[#003366] mb-4 uppercase flex items-center">
                  <span className="w-2 h-6 bg-[#FFCC00] mr-2"></span> Support Desk
                </h4>
                <p className="text-sm text-gray-600 mb-2">Available 24/7 for Online Portal</p>
                <p className="text-[#003366] font-bold">support@iqra.edu.pk</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
