'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, FolderGit2, Cpu, Award, Mail, Star, Terminal, Menu, X, GitFork } from 'lucide-react';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const links = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skillset', icon: Cpu },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#experience', label: 'Experience', icon: Award },
  { href: '#certificates', label: 'Certificates', icon: Award },
  { href: '#contact', label: 'Contact', icon: Mail },
];

interface SiteHeaderProps {
  onOpenTerminal?: () => void;
}

export default function SiteHeader({ onOpenTerminal }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 nav-shell pointer-events-auto transition-all duration-300',
        scrolled && 'shadow-[0_10px_30px_-10px_rgba(12,5,19,0.9)] bg-[rgba(12,5,19,0.92)] border-b border-[rgba(197,115,230,0.35)] backdrop-blur-2xl'
      )}
    >
      <div className="section-shell h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-black text-xl tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="text-[#c770f0] group-hover:scale-110 transition-transform inline-block">
            HP.
          </span>
        </a>

        {/* Desktop Navigation Links with Icons */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-white/90 hover:text-[#c770f0] rounded-xl hover:bg-purple-500/10 flex items-center gap-2 transition-all relative group"
              >
                <Icon className="w-4 h-4 text-purple-400 group-hover:text-[#c770f0] transition-colors" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Star Button Soumyajit style */}
          <a
            href={portfolioConfig.owner.github}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-600/20 border border-purple-500/40 text-[#c770f0] hover:bg-purple-600/30 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(199,112,240,0.4)] transition-all"
            title="Star on GitHub"
          >
            <GitFork className="w-3.5 h-3.5" />
            <Star className="w-3.5 h-3.5 fill-[#c770f0]" />
          </a>

          {onOpenTerminal && (
            <button
              type="button"
              onClick={onOpenTerminal}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-mono font-semibold rounded-xl border border-[var(--border)] text-muted hover:text-[#c770f0] hover:border-purple-500/50 bg-purple-500/5 transition-all"
              title="Open Command Terminal (Ctrl+/)"
            >
              <Terminal className="w-3.5 h-3.5 text-[#c770f0]" />
            </button>
          )}

          <ThemeSwitcher />

          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl border border-[var(--border)] text-muted hover:text-white hover:bg-purple-500/10 transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5 text-[#c770f0]" /> : <Menu className="w-5 h-5 text-[#c770f0]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="lg:hidden border-t border-[var(--border)] bg-[#0c0513]/98 backdrop-blur-2xl">
          <nav className="section-shell py-6 flex flex-col gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-semibold rounded-xl hover:bg-purple-500/10 text-white/90 hover:text-[#c770f0] transition-colors flex items-center gap-3"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="w-5 h-5 text-[#c770f0]" />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-4 flex items-center gap-3">
              <a
                href={portfolioConfig.owner.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-purple-600/20 border border-purple-500/40 text-[#c770f0] flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4 fill-[#c770f0]" />
                <span>Star on GitHub</span>
              </a>

              {onOpenTerminal && (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    onOpenTerminal();
                  }}
                  className="p-3 rounded-xl border border-purple-500/40 text-[#c770f0] bg-purple-500/10"
                >
                  <Terminal className="w-5 h-5" />
                </button>
              )}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
