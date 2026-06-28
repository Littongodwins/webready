import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data/business.json';

const Programs = () => {
  const primaryColor = data.colors.primary;
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Impactful initiatives designed to transform lives and communities in Uganda.</p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-24">
          {data.programs.map((program, index) => (
            <div 
              key={program.id} 
              id={program.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src={program.image} alt={program.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6" style={{ color: primaryColor }}>{program.name}</h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed mb-8">
                  <p>{program.content}</p>
                </div>
                <a 
                  href={`https://wa.me/${data.contact.whatsapp}?text=I am interested in the ${program.name} program.`}
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl text-white shadow-lg hover:opacity-90 transition-all"
                  style={{ backgroundColor: primaryColor }}
                >
                  Support this Program
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Have a specific interest?</h2>
          <p className="text-lg text-gray-600 mb-10">We are always open to new partnerships and ideas that align with our mission.</p>
          <a 
            href={`mailto:${data.contact.email}`}
            className="inline-block border-2 font-bold px-8 py-4 rounded-xl transition-all hover:bg-gray-900 hover:text-white hover:border-gray-900"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            Contact our Program Director
          </a>
        </div>
      </section>
    </div>
  );
};

export default Programs;
