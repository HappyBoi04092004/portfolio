'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, FolderGit2, FileText, BookOpen, Star, Menu, X, GitFork } from 'lucide-react';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/project', label: 'Projects', icon: FolderGit2 },
  { href: '/resume', label: 'Resume', icon: FileText },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
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
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 nav-shell pointer-events-auto',
        scrolled && 'sticky'
      )}
    >
      <div className="section-shell h-full flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-black text-xl tracking-tight shrink-0"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-10 h-10 select-none">
            <Image
              src="/Assets/logo.png"
              alt="brand logo"
              fill
              className="object-contain logo"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links with Icons */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="navbar-nav">
                <div className="nav-item">
                  <Link
                    href={link.href}
                    className={cn(
                      'nav-link flex items-center gap-2 font-medium text-white/95 transition-all relative group',
                      isActive && 'purple'
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Blogs external link */}
          <div className="navbar-nav">
            <div className="nav-item">
              <a
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="nav-link flex items-center gap-2 font-medium text-white/95 transition-all relative group"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span>Blogs</span>
              </a>
            </div>
          </div>
        </nav>

        {/* Action Items */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Fork & Star Button */}
          <a
            href={portfolioConfig.owner.github}
            target="_blank"
            rel="noreferrer"
            className="fork-btn-inner hidden sm:inline-flex items-center gap-2.5 px-4 py-2 rounded-lg text-sm font-bold bg-[#934cce5e] border border-[#934cce5e] text-white hover:bg-[#a24dd386] hover:border-[#a24dd386] hover:-translate-y-[2px] transition-all"
            title="Star on GitHub"
          >
            <GitFork className="w-4 h-4" />
            <Star className="w-4 h-4 fill-white" />
          </a>

          <ThemeSwitcher />

          {/* Mobile Menu Toggler */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg border border-[var(--border)] text-[#be50f4] hover:text-white transition-colors"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open ? (
        <div className="md:hidden border-t border-[var(--border)] bg-[#181a27] backdrop-blur-2xl">
          <nav className="section-shell py-6 flex flex-col gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 text-base font-semibold rounded-xl hover:bg-purple-500/10 text-white/90 hover:text-[#c770f0] transition-colors flex items-center gap-3',
                    isActive && 'purple'
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Blogs Link in Mobile */}
            <a
              href="https://soumyajitblogs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 text-base font-semibold rounded-xl hover:bg-purple-500/10 text-white/90 hover:text-[#c770f0] transition-colors flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>Blogs</span>
            </a>

            {/* GitHub Link in Mobile */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href={portfolioConfig.owner.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-[#934cce5e] border border-[#934cce5e] text-white flex items-center justify-center gap-2"
              >
                <GitFork className="w-4 h-4" />
                <Star className="w-4 h-4 fill-white" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
