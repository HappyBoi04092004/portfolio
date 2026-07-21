'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Code, Terminal, Sparkles } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';

function Counter({
  value,
  duration = 1.6,
  suffix = '',
}: {
  value: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-[#c770f0] tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto space-y-12">
        
        {/* Soumyajit Section Header */}
        <SectionHeader
          eyebrow="Biography"
          title="LET ME INTRODUCE MYSELF"
          description="Combining robust backend scalability with smooth mobile cross-platform experiences."
        />

        {/* Top Intro Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text with Purple Highlights */}
          <motion.div
            className="lg:col-span-8 card p-8 sm:p-10 space-y-6 border-purple-500/30 shadow-[0_0_30px_rgba(199,112,240,0.15)]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed">
              <p>
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              </p>
              <p>
                I am fluent in classics like <b className="text-[#c770f0]">Go (Golang), Node.js, TypeScript</b> and <b className="text-[#c770f0]">Flutter (Dart)</b>.
              </p>
              <p>
                My field of Interest&apos;s are building new <b className="text-[#c770f0]">Web & Mobile Technologies and Products</b> and also in areas related to <b className="text-[#c770f0]">High-Performance Backend Microservices & Cloud Infrastructure</b>.
              </p>
              <p>
                Whenever possible, I also apply my passion for developing products with <b className="text-[#c770f0]">Go, NestJS, PostgreSQL</b> and Modern Mobile Frameworks like <b className="text-[#c770f0]">Flutter</b>.
              </p>
            </div>
          </motion.div>

          {/* Right Stat Counters Grid */}
          <motion.div
            className="lg:col-span-4 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {portfolioConfig.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="card card-interactive p-5 flex flex-col justify-between gap-2 text-left group border-purple-500/30"
              >
                <span className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider group-hover:text-[#c770f0] transition-colors">
                  {stat.label}
                </span>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card card-interactive p-8 space-y-4 border-purple-500/30"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[#c770f0] shadow-lg shadow-purple-600/30">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Sứ mệnh kỹ thuật</h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {portfolioConfig.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="card card-interactive p-8 space-y-4 border-purple-500/30"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-[#c770f0] shadow-lg shadow-purple-600/30">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl text-white">Tầm nhìn dài hạn</h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {portfolioConfig.about.vision}
            </p>
          </motion.div>
        </div>

        {/* Soumyajit "FIND ME ON" Socials Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center space-y-4 pt-6"
        >
          <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
            FIND ME ON
          </h3>
          <p className="text-sm text-muted">
            Feel free to <span className="text-[#c770f0] font-bold">connect</span> with me
          </p>

          <div className="flex justify-center items-center gap-4 pt-2">
            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.github}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </MagneticWrapper>

            <MagneticWrapper>
              <a
                href={portfolioConfig.owner.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.6)] flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </MagneticWrapper>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
