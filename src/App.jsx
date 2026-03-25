import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen selection:bg-emerald-200">
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;