export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className="h-[650px] flex flex-col justify-center items-center text-center px-4 text-white bg-cover bg-center"
      style={{ backgroundImage: "linear-gradient(rgba(4, 28, 18, 0.85), rgba(4, 28, 18, 0.85)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000')" }}
    >
      <p className="uppercase tracking-[0.35em] text-emerald-400 font-semibold mb-4 text-xs md:text-sm">World-Class Agricultural Leadership</p>
      <h1 className="text-5xl md:text-7xl mb-8 max-w-4xl font-serif leading-tight">Transforming Global Food Systems Through Executive Education</h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed">Join a global cohort of government leaders and private sector executives driving the next green revolution.</p>
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Fixed View Courses Button */}
        <button 
          onClick={() => scrollTo('details')} 
          className="bg-white text-emerald-950 px-10 py-4 font-bold hover:bg-emerald-50 transition uppercase tracking-widest text-xs cursor-pointer shadow-lg rounded-sm"
        >
          View Courses
        </button>

        {/* Fixed AI Advisor Button (previous code updated to match this) */}
        <button 
          onClick={() => scrollTo('ai-consultant')} 
          className="bg-emerald-500 text-emerald-950 px-10 py-4 font-bold hover:bg-emerald-600 transition uppercase tracking-widest text-xs shadow-xl flex items-center gap-2.5 cursor-pointer rounded-sm"
        >
          ✨ Consult AI Advisor
        </button>
      </div>
    </header>
  );
}