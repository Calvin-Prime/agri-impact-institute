import ProgramAssistant from './ProgramAssistant';
import AICareerPath from './AICareerPath';

export default function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Content Area */}
        <div className="lg:col-span-2 space-y-16">
            <AICareerPath />
          <section id="details">
            <h2 className="text-4xl text-emerald-900 mb-8 font-serif italic">Mastering the Business of Agriculture</h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
                Agri-Impact Institute's curriculum is built on the HBS Case Method, adapted for the unique complexities of the agricultural supply chain. We bring together high-level industry players to solve real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-emerald-800 uppercase text-xs tracking-tighter mb-2">Duration</h4>
                    <p className="text-slate-600 font-medium">8 Weeks, Online</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-emerald-800 uppercase text-xs tracking-tighter mb-2">Effort</h4>
                    <p className="text-slate-600 font-medium">5-7 hours per week</p>
                </div>
            </div>
          </section>

          <section id="certificates" className="bg-white p-12 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 -mr-16 -mt-16 rounded-full"></div>
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1">
                    <h2 className="text-3xl text-emerald-900 mb-4 font-serif">Earn Your Credential</h2>
                    <p className="text-slate-600 mb-6">Receive an official Certificate of Completion from Agri-Impact Institute—a globally recognized credential.</p>
                    <ul className="space-y-3 text-sm font-medium text-emerald-800">
                        <li>✓ Digital verifiable credential</li>
                        <li>✓ Shareable on LinkedIn & CVs</li>
                        <li>✓ Access to the Alumni Global Network</li>
                    </ul>
                </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-8">
          <ProgramAssistant />
          
          {/* Notice how the id="enroll" is just added to the opening tag of the box below */}
          <div id="enroll" className="bg-white border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-900 mb-4 uppercase text-sm tracking-widest">Enrollment Status</h3>
            <p className="text-slate-600 mb-6 text-sm">Applications for the Summer 2026 Cohort are now open.</p>
            <div className="space-y-4">
                <div className="flex justify-between text-xs">
                    <span className="text-slate-500 uppercase">Program Fee</span>
                    <span className="font-bold text-emerald-900">$2,250</span>
                </div>
                <div className="flex justify-between text-xs">
                    <span className="text-slate-500 uppercase">Deadline</span>
                    <span className="font-bold text-emerald-900">May 15, 2026</span>
                </div>
            </div>
            <button className="w-full bg-emerald-800 text-white font-bold py-4 mt-8 hover:bg-emerald-900 transition tracking-widest text-xs uppercase cursor-pointer">Start Application</button>
          </div>
        </aside>

      </div>
    </main>
  );
}