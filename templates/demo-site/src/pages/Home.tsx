import React from 'react';
import data from '../data/business.json';
import { Link } from 'react-router-dom';

const Home = () => {
  const primaryColor = data.colors.primary;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={data.businessName} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {data.tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              {data.about}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/programs" 
                className="px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:-translate-y-1 transition-all"
                style={{ backgroundColor: primaryColor }}
              >
                Our Programs
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 rounded-xl font-bold text-lg bg-white text-gray-900 shadow-lg hover:-translate-y-1 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Summary */}
      <section className="py-24 px-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: primaryColor }}>
              Our Mission & Vision
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: primaryColor }}>M</span>
                  Mission
                </h3>
                <p className="text-gray-600 text-lg italic border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                  "{data.aboutPage.mission}"
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm" style={{ backgroundColor: primaryColor }}>V</span>
                  Vision
                </h3>
                <p className="text-gray-600 text-lg italic border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                  "{data.aboutPage.vision}"
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl z-[-1]" style={{ backgroundColor: data.colors.secondary }}></div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on sustainable impact through these key areas of development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.programs.map((program) => (
              <div key={program.id} className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                <div className="md:w-1/3 aspect-square">
                  <img src={program.image} alt={program.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Link 
                    to={`/programs#${program.id}`} 
                    className="font-bold flex items-center gap-2 hover:underline" 
                    style={{ color: primaryColor }}
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News CTA */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Updates from the Field</h2>
              <p className="text-gray-400">Keep up with our latest activities and success stories.</p>
            </div>
            <Link to="/news" className="px-6 py-3 border border-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-colors">
              View All News
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {data.news.slice(0, 2).map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-2xl overflow-hidden flex flex-col">
                <img src={post.image} alt={post.title} className="aspect-video object-cover" />
                <div className="p-8">
                  <span className="text-sm font-bold opacity-60 mb-2 block">{post.date}</span>
                  <h3 className="text-xl font-bold mb-4">{post.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">{post.summary}</p>
                  <Link to="/news" className="font-bold hover:underline" style={{ color: data.colors.secondary }}>Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
