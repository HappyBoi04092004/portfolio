'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail, Code2, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
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
    <section id="hero" className="section-block section-shell pointer-events-none min-h-[calc(100vh-var(--header-h))] flex flex-col justify-center relative">
      <div className="w-full grid lg:grid-cols-12 gap-12 items-center pointer-events-auto py-12">
        
        {/* Left Column: Soumyajit Hero Text */}
        <div className="lg:col-span-7 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-white"
          >
            <span>Hi There!</span>
            <span className="animate-bounce inline-block">👋🏻</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase"
          >
            I&apos;M <span className="text-[#c770f0] inline-block hover:scale-105 transition-transform">{portfolioConfig.owner.name}</span>
          </motion.h1>

          {/* Typewriter Role Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-3 pt-2"
          >
            <span className="typing-cursor text-[#c770f0] bg-purple-500/10 px-4 py-2 rounded-2xl border border-purple-500/30 shadow-[0_0_20px_rgba(199,112,240,0.25)]">
              {typedRole}
            </span>
          </motion.div>

          {/* SubHeadline Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="text-base sm:text-lg text-muted max-w-xl leading-relaxed pt-2"
          >
            {portfolioConfig.owner.subHeadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="pt-6 flex flex-wrap items-center gap-4"
          >
            <MagneticWrapper>
              <a href="#contact" className="btn btn-primary text-sm shadow-xl shadow-purple-600/30">
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.resumeUrl}
                download
                className="btn btn-secondary text-sm"
              >
                <FileText className="w-4 h-4 text-[#c770f0]" />
                <span>Download CV</span>
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-8 flex items-center gap-4"
          >
            <span className="text-xs font-mono font-bold text-muted-dark uppercase tracking-widest">
              FIND ME ON:
            </span>
            <div className="flex gap-3">
              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </MagneticWrapper>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Developer Illustration Avatar with Glowing Purple Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Ambient Purple Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-600/30 blur-3xl rounded-full pointer-events-none" />

          <div className="w-full max-w-md card p-8 border-purple-500/40 relative z-10 flex flex-col items-center justify-center space-y-6 text-center shadow-[0_0_40px_rgba(199,112,240,0.25)] group hover:border-purple-500/80 transition-all">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-purple-600/50 group-hover:scale-110 transition-transform">
              HP
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
              <p className="text-xs font-mono text-[#c770f0] font-bold">
                GO · FLUTTER · NESTJS · CLOUD
              </p>
            </div>

            <div className="w-full pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-muted">
              <span>STATUS: CODING</span>
              <span className="text-[#c770f0] font-bold">FPS: 60 STABLE</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-medium text-muted pointer-events-auto hover:text-[#c770f0] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="group-hover:translate-y-0.5 transition-transform font-mono text-[11px]">SCROLL DOWN</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4 text-[#c770f0]" />
        </motion.span>
      </a>
    </section>
  );
}
