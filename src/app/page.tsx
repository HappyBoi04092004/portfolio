'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Terminal as TerminalIcon } from 'lucide-react';

// Client-only component imports to avoid SSR issues with Canvas/ThreeJS/Lenis
const CanvasContainer = dynamic(() => import('@/components/3d/canvas-container'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/ui/loading-screen'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/custom-cursor'), { ssr: false });
const CommandTerminal = dynamic(() => import('@/components/ui/command-terminal'), { ssr: false });
const ThemeSwitcher = dynamic(() => import('@/components/ui/theme-switcher'), { ssr: false });

// Section Components
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import GithubAnalytics from '@/components/sections/github-analytics';
import Certificates from '@/components/sections/certificates';
import Contact from '@/components/sections/contact';

export default function Home() {
  const [introActive, setIntroActive] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Monitor Escape or Backtick key globally to close/toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setTerminalOpen(false);
      }
      if (e.key === '`') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050816] text-[#f8fafc] overflow-hidden select-none">
      
      {/* 3D R3F Background & Canvas System */}
      <CanvasContainer introActive={introActive} />

      {/* Intro sequence loader */}
      <LoadingScreen onComplete={() => setIntroActive(false)} />

      {/* Primary Layout Sections */}
      {!introActive && (
        <div className="relative z-10 w-full flex flex-col items-center">
          
          {/* Navigation Bar / Workspace Status Header */}
          <header className="fixed top-0 left-0 w-full px-6 py-4 z-40 bg-gradient-to-b from-[#050816]/80 to-transparent backdrop-blur-sm flex justify-between items-center border-b border-slate-900/40 select-none">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-xs font-bold text-indigo-400 tracking-widest uppercase">
                PORTFOLIO_NODE_0
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-slate-500 uppercase hidden sm:inline">
                CONNECTION_SECURE
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 font-mono text-xs text-slate-400">
              <a href="#about" className="hover:text-indigo-400 transition-colors uppercase">Overview</a>
              <a href="#skills" className="hover:text-indigo-400 transition-colors uppercase">Skills</a>
              <a href="#projects" className="hover:text-indigo-400 transition-colors uppercase">Case Studies</a>
              <a href="#experience" className="hover:text-indigo-400 transition-colors uppercase">Timeline</a>
              <a href="#contact" className="hover:text-indigo-400 transition-colors uppercase">Contact</a>
            </nav>

            <div className="flex items-center space-x-3">
              <ThemeSwitcher />
            </div>
          </header>

          {/* Individual section blocks */}
          <Hero />
          <About />
          <Skills />
          
          {/* Orbit spacer area (Tech orbit scene runs in 3D canvas overlay here) */}
          <section id="orbit" className="h-screen w-full relative flex items-center justify-center pointer-events-none">
            <div className="max-w-md p-6 rounded-2xl glass-panel border border-indigo-500/10 text-center relative z-20 pointer-events-auto bg-[#050816]/40 backdrop-blur-md">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">[ Constellation ]</span>
              <h3 className="text-xl font-bold text-white uppercase mt-2">Interactive Tech Orbit</h3>
              <p className="text-slate-400 text-xs mt-2 leading-relaxed font-mono">
                Interact directly by hovering over nodes to inspect specialized stack variables in real-time.
              </p>
            </div>
          </section>

          <Projects />
          <Experience />
          <GithubAnalytics />
          <Certificates />
          <Contact />

          {/* Simple modular Footer */}
          <footer className="w-full py-8 border-t border-slate-900 bg-[#050816]/60 backdrop-blur-md text-center text-xs font-mono text-slate-500 relative z-10">
            <p>© {new Date().getFullYear()} HANH PHUC NGUYEN. DESIGNED & BUILT FROM SCRATCH.</p>
            <p className="mt-1 text-[10px] text-indigo-500/60 uppercase">ALL SYSTEMS STABLE // NEXTJS_APP_ROUTER_ENGINE</p>
          </footer>

          {/* Custom cursor overlay (Client Component) */}
          <CustomCursor />

          {/* Command Terminal trigger overlay */}
          <CommandTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

          {/* Floating Terminal action button */}
          <button
            onClick={() => setTerminalOpen(true)}
            aria-label="Open command terminal"
            className="fixed bottom-6 right-6 p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/25 border border-indigo-400/20 hover:border-indigo-400/40 transition-all hover:scale-105 active:scale-95 z-40 cursor-pointer flex items-center space-x-2"
          >
            <TerminalIcon className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider hidden sm:inline">TERMINAL</span>
          </button>

        </div>
      )}
    </main>
  );
}
