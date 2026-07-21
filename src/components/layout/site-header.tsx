'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const links = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#projects', label: 'Dự án' },
  { href: '#experience', label: 'Kinh nghiệm' },
  { href: '#certificates', label: 'Chứng chỉ' },
  { href: '#contact', label: 'Liên hệ' },
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

  const firstName = portfolioConfig.owner.name.split(' ')[0];

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 nav-shell pointer-events-auto transition-all duration-300',
        scrolled && 'shadow-[0_12px_40px_-15px_rgba(0,0,0,0.6)] bg-[color-mix(in_srgb,var(--background)_90%,transparent)] border-b border-[var(--border-strong)]'
      )}
    >
      <div className="section-shell h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold text-base md:text-lg tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-black shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            HP
          </div>
          <span className="text-gradient">{firstName}</span>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] border border-[var(--border)] text-muted hidden sm:inline-block">
            Software Dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_60%,transparent)] backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-muted hover:text-[var(--foreground)] rounded-full hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-2">
          {onOpenTerminal && (
            <button
              type="button"
              onClick={onOpenTerminal}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-mono font-semibold rounded-xl border border-[var(--border)] text-muted hover:text-[var(--foreground)] hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] transition-all"
              title="Mở Command Terminal (Ctrl+/)"
            >
              <Terminal className="w-3.5 h-3.5 text-[var(--accent-soft)]" />
              <span>Terminal</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-sans rounded bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)] text-muted">
                ⌘/
              </kbd>
            </button>
          )}

          <ThemeSwitcher />

          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl border border-[var(--border)] text-muted hover:text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)] transition-colors"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="lg:hidden border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_96%,transparent)] backdrop-blur-2xl">
          <nav className="section-shell py-6 flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-semibold rounded-xl hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] transition-colors flex items-center justify-between"
                onClick={() => setOpen(false)}
              >
                <span>{link.label}</span>
                <span className="text-xs text-muted font-mono">→</span>
              </a>
            ))}

            {onOpenTerminal && (
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenTerminal();
                }}
                className="mt-2 px-4 py-3 text-sm font-mono font-bold rounded-xl border border-[color-mix(in_srgb,var(--accent)_40%,var(--border))] text-[var(--accent-soft)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>Mở Command Terminal</span>
              </button>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
