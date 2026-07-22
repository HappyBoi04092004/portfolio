'use client';

import React, { useState, useEffect } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import ParticleBackground from '@/components/ui/particle-background';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const display = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/30 selection:text-white bg-[#0c0513]">
        {/* Preloader */}
        <div id={load ? 'preloader' : 'preloader-none'} />

        {/* Scroll Control Wrapper */}
        <div className="flex flex-col min-h-screen" id={load ? 'no-scroll' : 'scroll'}>
          {/* Particle Background */}
          <ParticleBackground />

          {/* Header */}
          <SiteHeader />

          {/* Main Content */}
          <main className="relative z-10 flex-grow pt-[var(--header-h)]">
            {children}
          </main>

          {/* Footer */}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
