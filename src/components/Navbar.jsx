import { useState } from 'react';
// We are referencing the existing logo file in your assets.
import logoFile from '../assets/logo.jpg'; 

export default function Navbar() {
  const [active, setActive] = useState('programs');

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white border-b border-slate-200 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-2">
        {/* Polished, Vectorized Firm Logo for the Institute */}
        <div className="w-auto h-12 flex items-center justify-center p-1 border border-slate-100 rounded-sm hover:border-emerald-200 transition cursor-pointer">
          <img src={logoFile} alt="Agri-Impact Limited | Institute" className="h-full w-auto object-contain" />
        </div>
        <span className="font-semibold text-lg tracking-tight text-emerald-900 uppercase">Agri-Impact Institute</span>
      </div>
      
      {/* Sleek, Center Navigation with Hover/Active States */}
      <div className="hidden lg:flex gap-10 font-medium text-sm text-slate-700 uppercase tracking-wider relative">
        <button 
          onClick={() => scrollTo('details')} 
          className={`px-3 py-1.5 rounded-full transition ${active === 'details' ? 'bg-emerald-50 text-emerald-900 font-semibold' : 'hover:text-emerald-700'}`}>
          Programs
        </button>
        <button 
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
          className={`px-3 py-1.5 rounded-full transition ${active === 'partnerships' ? 'bg-emerald-50 text-emerald-900 font-semibold' : 'hover:text-emerald-700'}`}>
          Partnerships
        </button>
        <button 
          onClick={() => scrollTo('careers')} 
          className={`px-3 py-1.5 rounded-full transition ${active === 'careers' ? 'bg-emerald-50 text-emerald-900 font-semibold' : 'hover:text-emerald-700'}`}>
          Insights
        </button>
      </div>

      {/* Primary Corporate CTA */}
      <button 
        onClick={() => scrollTo('enroll')}
        className="bg-emerald-800 text-white px-8 py-2.5 rounded-sm text-sm font-semibold hover:bg-emerald-950 transition uppercase tracking-widest cursor-pointer shadow-md">
        Enroll Now
      </button>
    </nav>
  );
}