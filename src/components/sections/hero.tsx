'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
import { portfolioConfig } from '@/config/portfolio';
import Image from 'next/image';

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
    <section id="hero" className="section-block section-shell pointer-events-none min-h-[calc(100vh-var(--header-h))] flex items-center">
      <div className="w-full grid lg:grid-cols-12 gap-8 items-center pointer-events-auto py-12">
        
        {/* Left Side: Hello details */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white flex items-center gap-2"
          >
            <span>Hi There!</span>
            <span className="wave">👋🏻</span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase"
          >
            I&apos;M <span className="purple inline-block hover:scale-105 transition-transform">{portfolioConfig.owner.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white pt-2"
          >
            <span className="typing-cursor purple bg-purple-500/10 px-4 py-2 rounded-xl border border-purple-500/30 shadow-[0_0_20px_rgba(199,112,240,0.2)]">
              {typedRole}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="text-base sm:text-lg text-muted max-w-xl leading-relaxed pt-2"
          >
            {portfolioConfig.owner.subHeadline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="pt-6 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn btn-primary text-sm shadow-lg shadow-purple-600/35">
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

            <a
              href={portfolioConfig.owner.resumeUrl}
              download
              className="btn btn-secondary text-sm"
            >
              <FileText className="w-4 h-4 text-[#c770f0]" />
              <span>Download CV</span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: home-main image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Cosmic Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/25 blur-3xl rounded-full pointer-events-none" />
          
          <div className="relative w-full max-w-md aspect-square select-none pointer-events-none group">
            <Image
              src="/home-main.png"
              alt="developer illustration"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(199,112,240,0.3)] group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-semibold text-muted pointer-events-auto hover:text-[#c770f0] transition-colors group"
      >
        <span className="font-mono tracking-wider group-hover:translate-y-0.5 transition-transform text-[10px]">SCROLL DOWN</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="w-4 h-4 text-[#c770f0]" />
        </motion.span>
      </a>
    </section>
  );
}
