import logo from '../assets/logo.jpg'; // Make sure the name matches exactly

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-3">
        {/* Your Custom Logo */}
        <img src={logo} alt="Agri-Impact Limited" className="h-12 w-auto object-contain" />
        <span className="font-bold text-xl tracking-tight text-emerald-900 uppercase">Institute</span>
      </div>
      <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600 uppercase tracking-widest">
  <button onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-700 transition cursor-pointer">
    Programs
  </button>
  <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="hover:text-emerald-700 transition cursor-pointer">
    Partnerships
  </button>
  <button onClick={() => document.getElementById('careers').scrollIntoView({ behavior: 'smooth' })} className="hover:text-emerald-700 transition cursor-pointer">
    Insights
  </button>
</div>
<button 
  onClick={() => document.getElementById('enroll').scrollIntoView({ behavior: 'smooth' })}
  className="bg-emerald-800 text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-900 transition uppercase tracking-widest cursor-pointer"
>
        Enroll Now
      </button>
    </nav>
  );
}