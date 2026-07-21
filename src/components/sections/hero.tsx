'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import { portfolioConfig } from '@/config/portfolio';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';

export default function Hero() {
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioConfig.owner.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        setTypedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setTypedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        window.setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }, speed);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="section-block section-shell pointer-events-none min-h-[calc(100vh-var(--header-h))] flex flex-col justify-center relative">
      <div className="w-full max-w-4xl pointer-events-auto py-12">
        
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_30%,transparent)] shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-[var(--accent-soft)]">
            Sẵn sàng hợp tác & tuyển dụng
          </span>
        </motion.div>

        {/* Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold text-gradient leading-[1.08] tracking-tight"
        >
          {portfolioConfig.owner.name}
        </motion.h1>

        {/* Animated Typed Role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--foreground)] flex items-center gap-2"
        >
          <span className="text-muted font-normal">Chuyên môn:</span>
          <span className="typing-cursor text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-lg border border-indigo-500/20">
            {typedRole}
          </span>
        </motion.div>

        {/* SubHeadline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
        >
          {portfolioConfig.owner.subHeadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticWrapper>
            <a href="#contact" className="btn btn-primary text-sm shadow-xl">
              <Mail className="w-4 h-4" />
              <span>Liên hệ hợp tác</span>
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href={portfolioConfig.owner.resumeUrl}
              download
              className="btn btn-secondary text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Tải CV cá nhân</span>
            </a>
          </MagneticWrapper>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex items-center gap-3"
        >
          <span className="text-xs font-mono text-muted-dark uppercase tracking-widest mr-2">
            Social Networks:
          </span>
          <MagneticWrapper>
            <a
              href={portfolioConfig.owner.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] text-muted hover:text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] transition-all flex items-center gap-2 text-xs font-medium"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a
              href={portfolioConfig.owner.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-[var(--border)] bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] text-muted hover:text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] transition-all flex items-center gap-2 text-xs font-medium"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </MagneticWrapper>
        </motion.div>

      </div>

      {/* Scroll Down Hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium text-muted pointer-events-auto hover:text-[var(--foreground)] transition-colors group"
        aria-label="Cuộn xuống"
      >
        <span className="group-hover:translate-y-0.5 transition-transform">Khám phá portfolio</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4 text-indigo-400" />
        </motion.span>
      </a>
    </section>
  );
}
