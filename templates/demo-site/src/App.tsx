import React from 'react';
import data from './data/business.json';

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={data.businessName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{data.businessName}</h1>
          <p className="text-xl md:text-2xl mb-8">{data.tagline}</p>
          <a 
            href={`https://wa.me/${data.contact.whatsapp}`} 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Order on WhatsApp
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-amber-800">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">{data.about}</p>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-600 transition hover:scale-105 duration-300">
                <h3 className="text-xl font-bold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.price && <p className="font-bold text-amber-600 text-lg">{service.price}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800">What People Say</h2>
          <div className="space-y-8">
            {data.reviews.map((review, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-lg border-l-8 border-amber-600 italic shadow-sm">
                <p className="text-lg mb-4">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold">- {review.author}</p>
                  <div className="text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-800">Location & Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{data.businessName}</h3>
              <div className="flex items-start mb-6">
                <span className="text-amber-600 mr-3">📍</span>
                <p className="text-gray-700">{data.location.address}</p>
              </div>
              <h4 className="font-bold mb-3 text-gray-800">Opening Hours:</h4>
              <div className="flex items-start mb-8">
                <span className="text-amber-600 mr-3">⏰</span>
                <p className="text-gray-700">{data.contact.hours}</p>
              </div>
              <a 
                href={`tel:${data.contact.phone}`}
                className="text-amber-600 font-bold hover:underline"
              >
                Call us: {data.contact.phone}
              </a>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg border-4 border-white">
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
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">{data.businessName}</h3>
            <p className="text-gray-400">{data.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-amber-500 uppercase tracking-wider text-sm">Contact Us</h4>
            <p className="text-gray-400 mb-2">Phone: {data.contact.phone}</p>
            <p className="text-gray-400 mb-2">Email: {data.contact.email}</p>
          </div>
          <div className="text-center md:text-right">
            <a 
              href={`https://wa.me/${data.contact.whatsapp}`} 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {data.businessName}. Powered by <a href="#" className="text-amber-600 hover:underline">WebReady Uganda</a>.
        </div>
      </footer>
    </div>
  );
};

export default App;
