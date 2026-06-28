import React from 'react';
import data from '../data/business.json';

const About = () => {
  const primaryColor = data.colors.primary;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.aboutPage.title}</h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: primaryColor }}></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-16">
            <p>{data.aboutPage.content}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: primaryColor }}></div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                Our Mission
              </h2>
              <p className="text-gray-600 italic text-lg">"{data.aboutPage.mission}"</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: data.colors.secondary }}></div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                Our Vision
              </h2>
              <p className="text-gray-600 italic text-lg">"{data.aboutPage.vision}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values or History placeholder */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide our work every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Transparency", desc: "We maintain open and honest communication with our donors and the community." },
              { title: "Empowerment", desc: "We provide tools and knowledge to enable self-reliance." },
              { title: "Compassion", desc: "Every action we take is rooted in empathy and care for the vulnerable." }
            ].map((value, i) => (
              <div key={i} className="p-8">
                <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg" style={{ backgroundColor: primaryColor }}>
                  {value.title[0]}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
