import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from '../data/business.json';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const primaryColor = data.colors.primary;

  return (
    <div className="font-sans text-gray-900 bg-white flex flex-col min-h-screen">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between text-sm text-gray-600">
          <div className="flex gap-6">
            <span>📞 {data.contact.phone}</span>
            <span>📧 {data.contact.email}</span>
          </div>
          <div>
            <span>📍 {data.location.address}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight" style={{ color: primaryColor }}>
              {data.businessName.split(' ')[0]} <span className="font-light text-gray-500">{data.businessName.split(' ').slice(1).join(' ')}</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Programs', path: '/programs' },
              { name: 'News', path: '/news' },
              { name: 'Team', path: '/team' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`transition-colors hover:text-opacity-80 ${location.pathname === item.path ? 'border-b-2' : ''}`}
                style={{ 
                  color: location.pathname === item.path ? primaryColor : 'inherit',
                  borderColor: primaryColor 
                }}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: primaryColor }}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden text-2xl">☰</button>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">{data.businessName}</h3>
            <p className="text-gray-400 max-w-md mb-8">{data.about}</p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">f</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">t</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">i</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gray-200 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-200 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>📍 {data.location.address}</li>
              <li>📞 {data.contact.phone}</li>
              <li>📧 {data.contact.email}</li>
              <li>⏰ {data.contact.hours}</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center text-gray-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} {data.businessName}. All rights reserved.</p>
          <p>Powered by <a href="#" className="hover:text-gray-300 underline">WebReady Uganda</a></p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href={`https://wa.me/${data.contact.whatsapp}`}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-110 transition-transform z-50"
        title="Chat with us"
      >
        <span role="img" aria-label="whatsapp">💬</span>
      </a>
    </div>
  );
};

export default Layout;
