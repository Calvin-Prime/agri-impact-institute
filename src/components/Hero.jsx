export default function Hero() {
  return (
    <header 
      className="h-[600px] flex flex-col justify-center items-center text-center px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(6, 26, 17, 0.8), rgba(6, 26, 17, 0.8)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000')" }}
    >
      <p className="uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-4">World-Class Agricultural Leadership</p>
      <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl font-serif">Transforming Global Food Systems Through Executive Education</h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-8">Join a global cohort of government leaders and private sector executives driving the next green revolution.</p>
      <div className="flex gap-4">
        <button className="bg-white text-emerald-900 px-8 py-4 font-bold hover:bg-emerald-50 transition uppercase tracking-widest text-xs">
          View Courses
        </button>
        <button className="bg-emerald-500 text-white px-8 py-4 font-bold hover:bg-emerald-600 transition uppercase tracking-widest text-xs shadow-lg flex items-center gap-2">
          ✨ Consult AI Advisor
        </button>
      </div>
    </header>
  );
}