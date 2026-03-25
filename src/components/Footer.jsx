export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-emerald-500 rounded-sm"></div>
                  <span className="font-bold text-lg tracking-widest uppercase">Agri-Impact Institute</span>
              </div>
              <p className="text-slate-400 max-w-sm">Driving innovation in the agricultural sector through rigorous executive training.</p>
          </div>
          <div>
              <h4 className="font-bold uppercase text-xs mb-6 tracking-widest">Connect</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-emerald-400">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-emerald-400">Contact Us</a></li>
              </ul>
          </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-[10px] text-slate-500 uppercase tracking-[0.2em] text-center">
          © 2026 Agri-Impact Institute. Powered by ✨ Gemini AI.
      </div>
    </footer>
  );
}