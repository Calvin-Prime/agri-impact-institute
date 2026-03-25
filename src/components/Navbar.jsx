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
        <a href="#" className="hover:text-emerald-700 transition">Programs</a>
        <a href="#" className="hover:text-emerald-700 transition">Partnerships</a>
        <a href="#" className="hover:text-emerald-700 transition">Insights</a>
      </div>
      <button className="bg-emerald-800 text-white px-6 py-2 rounded-sm text-sm font-semibold hover:bg-emerald-900 transition uppercase tracking-widest">
        Enroll Now
      </button>
    </nav>
  );
}