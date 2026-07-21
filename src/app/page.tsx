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
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      
      <div className="page-ambient" aria-hidden />
      <div className="aurora-bg" aria-hidden>
        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      {/* 3D R3F Background & Canvas System */}
      <CanvasContainer introActive={introActive} />

      {/* Intro sequence loader */}
      <LoadingScreen onComplete={() => setIntroActive(false)} />

      {/* Primary Layout Sections */}
      {!introActive && (
        <div className="relative z-10 w-full flex flex-col items-center pointer-events-none">
          
          {/* Navigation Bar / Workspace Status Header */}
          <header className="fixed top-0 left-0 w-full px-4 sm:px-6 py-3 sm:py-4 z-40 nav-glass flex justify-between items-center gap-4 pointer-events-auto">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-indigo-400 tracking-widest uppercase truncate">
                HANH PHUC NGUYEN
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono text-slate-500 uppercase hidden lg:inline">
                AVAILABLE
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] text-slate-400">
              {[
                { href: '#about', label: 'Overview' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#experience', label: 'Timeline' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg hover:text-indigo-300 hover:bg-indigo-500/10 transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </a>
              ))}
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
          <section id="orbit" className="min-h-[85vh] sm:min-h-screen w-full relative flex items-center justify-center px-6 pointer-events-none">
            <div className="max-w-lg p-6 sm:p-8 rounded-2xl glass-panel border border-indigo-500/20 text-center relative z-20 shadow-[0_0_60px_-15px_rgba(99,102,241,0.35)] pointer-events-auto">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">[ Tech orbit ]</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase mt-2 tracking-tight">Stack constellation</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                Hover các node quanh quả cầu 3D để xem công nghệ trong portfolio.
              </p>
            </div>
          </section>

          <Projects />
          <Experience />
          <GithubAnalytics />
          <Certificates />
          <Contact />

          {/* Simple modular Footer */}
          <footer className="w-full py-10 border-t border-slate-800/80 bg-[var(--surface)] backdrop-blur-md text-center text-xs font-mono text-slate-500 relative z-10 pointer-events-auto">
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
            className="fixed bottom-6 right-6 p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/25 border border-indigo-400/20 hover:border-indigo-400/40 transition-all hover:scale-105 active:scale-95 z-40 cursor-pointer flex items-center space-x-2 pointer-events-auto"
          >
            <TerminalIcon className="w-5 h-5 animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-wider hidden sm:inline">TERMINAL</span>
          </button>

        </div>
      )}
    </main>
  );
}
