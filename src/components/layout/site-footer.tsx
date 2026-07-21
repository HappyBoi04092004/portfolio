'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-md pointer-events-auto relative z-10">
      <div className="section-shell py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold text-xs">
            HP
          </div>
          <p>© {new Date().getFullYear()} {portfolioConfig.owner.name}. All rights reserved.</p>
        </div>

        <p className="text-xs font-mono text-muted-dark tracking-wide">
          Engineered with Next.js, Flutter, Go & Three.js
        </p>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-[var(--border)] bg-[color-mix(in_srgb,var(--foreground)_4%,transparent)] text-muted hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-all"
        >
          <span>Lên đầu trang</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
