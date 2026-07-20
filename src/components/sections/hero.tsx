'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/brand-icons';
import { portfolioConfig } from '@/config/portfolio';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';

export default function Hero() {
  const [typedRole, setTypedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = portfolioConfig.owner.roles;

  // Typing effect logic
  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setTypedRole(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypedRole(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const speed = isDeleting ? 30 : 80;
    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="min-h-screen w-full relative flex items-center justify-start py-20 px-6 sm:px-12 md:px-24">
      {/* Visual cyber grid overlays */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

      <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            <span>PORTFOLIO SYSTEM ONLINE</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white uppercase text-gradient"
            >
              {portfolioConfig.owner.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-8 font-mono text-lg sm:text-xl text-indigo-400 font-bold"
            >
              <span>[ </span>
              <span className="typing-cursor">{typedRole}</span>
              <span> ]</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            {portfolioConfig.owner.subHeadline}
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <MagneticWrapper>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.resumeUrl}
                download
                className="px-6 py-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-sm font-bold shadow-md transition-all duration-300 flex items-center space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Resume CV</span>
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-5 pt-6 text-slate-500"
          >
            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticWrapper>
          </motion.div>
        </div>

        {/* Right side is intentionally left blank for the 3D Canvas element */}
        <div className="hidden lg:block h-[500px]" />
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-slate-500 text-xs font-mono uppercase tracking-widest select-none pointer-events-none">
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-indigo-400" />
        </motion.div>
      </div>
    </section>
  );
}
