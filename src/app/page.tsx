'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const CanvasContainer = dynamic(() => import('@/components/3d/canvas-container'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/ui/loading-screen'), { ssr: false });
const CommandTerminal = dynamic(() => import('@/components/ui/command-terminal'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/ui/custom-cursor'), { ssr: false });

import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
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

  return (
    <main className="relative min-h-screen text-[var(--foreground)] overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      <div className="page-bg" aria-hidden />

      <CanvasContainer introActive={introActive} />
      <LoadingScreen onComplete={() => setIntroActive(false)} />
      <CustomCursor />

      {!introActive ? (
        <div className="relative z-10 flex flex-col pointer-events-none">
          <SiteHeader onOpenTerminal={() => setTerminalOpen(true)} />

          <div className="pt-[var(--header-h)]">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <GithubAnalytics />
            <Certificates />
            <Contact />
          </div>

          <SiteFooter />

          <CommandTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        </div>
      ) : null}
    </main>
  );
}
