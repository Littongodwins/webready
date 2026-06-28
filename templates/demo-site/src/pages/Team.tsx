import React from 'react';
import data from '../data/business.json';

const Team = () => {
  const primaryColor = data.colors.primary;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The dedicated individuals working behind the scenes to make our mission a reality.</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-[3rem] z-0 opacity-10" style={{ backgroundColor: primaryColor }}></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: primaryColor }}>{member.role}</p>
                <p className="text-gray-600 max-w-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team CTA */}
      <section className="py-20 px-4 bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Want to join us?</h2>
          <p className="text-lg text-gray-600 mb-10">We are always looking for passionate volunteers and professionals to support our work.</p>
          <a 
            href="https://wa.me/256700000000" 
            className="inline-block px-10 py-5 rounded-2xl font-bold text-white shadow-xl hover:-translate-y-1 transition-all"
            style={{ backgroundColor: primaryColor }}
          >
            Volunteer with us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
