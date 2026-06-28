import React from 'react';
import data from '../data/business.json';

const Contact = () => {
  const primaryColor = data.colors.primary;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Reach out with any questions or to support our work.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-4">📍</div>
                  <h3 className="font-bold mb-2">Our Office</h3>
                  <p className="text-gray-600 text-sm">{data.location.address}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-4">📞</div>
                  <h3 className="font-bold mb-2">Phone & Email</h3>
                  <p className="text-gray-600 text-sm">{data.contact.phone}</p>
                  <p className="text-gray-600 text-sm">{data.contact.email}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-4">⏰</div>
                  <h3 className="font-bold mb-2">Working Hours</h3>
                  <p className="text-gray-600 text-sm">{data.contact.hours}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                  <div className="text-2xl mb-4">💬</div>
                  <h3 className="font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm">Quick response within 24h</p>
                </div>
              </div>

              <div className="h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <iframe 
                  src={data.location.mapEmbedUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                    <option>General Inquiry</option>
                    <option>Donation Support</option>
                    <option>Volunteer Opportunities</option>
                    <option>Media/Press</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 rounded-xl font-bold text-white shadow-lg hover:-translate-y-1 transition-all"
                  style={{ backgroundColor: primaryColor }}
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-10 pt-10 border-t border-gray-100 text-center">
                <p className="text-gray-500 mb-4">Or start a chat right now:</p>
                <a 
                  href={`https://wa.me/${data.contact.whatsapp}`}
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-green-600 transition-all"
                >
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
