import React from 'react';
import data from '../data/business.json';

const News = () => {
  const primaryColor = data.colors.primary;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stories of change, milestones, and daily life at {data.businessName}.</p>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.news.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group">
                <div className="relative overflow-hidden aspect-video">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 px-4 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold shadow-sm">
                    {post.date}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors" style={{ color: primaryColor }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-8 flex-grow">
                    {post.summary}
                  </p>
                  
                  {/* Full content hidden in a demo for now, but usually would link to detail */}
                  <div className="pt-6 border-t border-gray-100">
                    <button className="font-bold flex items-center gap-2 hover:translate-x-1 transition-transform" style={{ color: primaryColor }}>
                      Read Full Story <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup (Placeholder) */}
      <section className="py-20 px-4 bg-indigo-900 text-white mx-4 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Get updates in your inbox</h2>
          <p className="text-indigo-200 mb-10 text-lg">Subscribe to our monthly newsletter to see the impact of your support.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-300 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default News;
