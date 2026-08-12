'use client';

import React from 'react';
import { portfolioConfig } from '@/config/portfolio';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-12 bg-bg relative z-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <a className="font-mono text-sm font-semibold text-fg" href="#home">
            <span className="text-cyan">/</span>nguyenhanhphuc.dev
          </a>
          <p className="mt-2 font-mono text-xs text-muted">
            {portfolioConfig.owner.headline}
          </p>
        </div>
        <p className="font-mono text-[11px] text-muted/60">
          © {currentYear} nguyenhanhphuc.dev — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
