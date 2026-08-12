'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { href: '#services', label: t.nav.services },
    { href: '#experience', label: t.nav.experience },
    { href: '#stack', label: t.nav.stack },
    { href: '#education', label: t.nav.education },
    { href: '#projects', label: t.nav.projects },
    { href: '#manifesto', label: t.nav.manifesto },
    { href: '#contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling trigger on scroll
      setScrolled(window.scrollY >= 20);

      // Scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Active section highlight
      const sections = ['home', 'services', 'experience', 'stack', 'education', 'projects', 'manifesto', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 72; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
          {/* Brand logo link */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="font-mono text-sm font-semibold tracking-tight text-fg hover:opacity-80 transition-opacity"
          >
            <span className="text-cyan">/</span>nguyenhanhphuc.dev
          </a>

          {/* Desktop Nav menu */}
          <nav aria-label="Danh mục" className="hidden items-center gap-5 whitespace-nowrap lg:flex xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-mono text-xs transition-colors hover:text-fg ${
                  activeSection === link.href.replace('#', '') ? 'text-cyan font-medium' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selection Toggle */}
            <div className="flex items-center gap-1 font-mono text-xs select-none">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`transition-colors duration-200 focus:outline-none ${
                  language === 'en' ? 'text-cyan font-bold' : 'text-muted hover:text-fg'
                }`}
              >
                EN
              </button>
              <span className="text-muted/40">/</span>
              <button
                type="button"
                onClick={() => setLanguage('vi')}
                className={`transition-colors duration-200 focus:outline-none ${
                  language === 'vi' ? 'text-cyan font-bold' : 'text-muted hover:text-fg'
                }`}
              >
                VI
              </button>
            </div>

            {/* CV Download Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_NguyenHanhPhuc.pdf"
              className="hidden rounded-full border border-line bg-white/[0.02] px-4 py-1.5 font-mono text-xs text-fg transition-all hover:border-cyan hover:bg-cyan/5 hover:text-cyan lg:inline-block"
            >
              {t.nav.downloadCv}
            </a>

            {/* Mobile Nav Button */}
            <button
              type="button"
              aria-expanded={open}
              aria-label="Danh mục"
              onClick={() => setOpen((prev) => !prev)}
              className="font-mono text-sm text-fg lg:hidden focus:outline-none p-1"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Progress scroll bar under header */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-[var(--header-h)] z-50 h-0.5 origin-left bg-gradient-to-r from-cyan via-magenta to-lime transition-transform duration-100 ease-out"
        style={{ transform: `scaleX(${scrollProgress})`, height: '2px' }}
      ></div>

      {/* Mobile Nav Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-md lg:hidden">
          <nav className="flex h-full flex-col justify-center items-center gap-6 px-5 font-mono">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-lg transition-colors hover:text-fg ${
                  activeSection === link.href.replace('#', '') ? 'text-cyan font-bold' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume_NguyenHanhPhuc.pdf"
              className="mt-4 rounded-full border border-line px-6 py-2.5 text-sm text-fg transition-all hover:border-cyan hover:text-cyan"
            >
              {t.nav.downloadCv}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
