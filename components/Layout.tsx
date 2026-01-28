
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-xl border-b border-emerald-500/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-emerald-400">
          KESAV<span className="text-white">.DEEPAK</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className = "bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]">Hire Me</a>
        
      </div>
    </nav>
  );
};

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-purple-600/10 blur-[120px] animate-blob animation-delay-4000" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <BackgroundEffects />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <footer className="py-12 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Kesav Deepak Sridharan.</p>
      </footer>
    </div>
  );
};

export default Layout;
