'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

// Count-up helper component
function Counter({ value, duration = 1.5, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="min-h-screen w-full relative flex items-center justify-center py-24 section-shell overflow-hidden pointer-events-none"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 pointer-events-auto">
        
        {/* Left story column (7 spans) */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Overview ]</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
              THE JOURNEY & MISSION
            </h2>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl glass-panel space-y-6">
            {/* Owner placeholder portrait frame - rendered stylishly as a futuristic terminal block */}
            <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                <span>H</span>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#050816]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{portfolioConfig.owner.name}</h3>
                <p className="text-xs text-indigo-400 font-mono">Software Engineer & Architect</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {portfolioConfig.about.story}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioConfig.about.stats.map((stat, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-2xl glass-card flex flex-col justify-between h-28">
                <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{stat.label}</span>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right mission/vision column (5 spans) */}
        <motion.div 
          className="lg:col-span-5 flex flex-col gap-6 justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mission Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-indigo-500/10 space-y-4 hover:border-indigo-500/25 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg font-mono uppercase tracking-wide">MISSION STATE</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {portfolioConfig.about.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-cyan-500/10 space-y-4 hover:border-cyan-500/25 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg font-mono uppercase tracking-wide">VISION TARGET</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {portfolioConfig.about.vision}
            </p>
          </div>

          {/* Core Philosophy Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-700/40 space-y-4 hover:border-indigo-400/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg font-mono uppercase tracking-wide">ENGINEERING LAWS</h3>
            <ul className="text-slate-400 text-xs space-y-2 list-disc list-inside">
              <li>Strict Type Checking & Safety first</li>
              <li>Microservices scale vertically & horizontally</li>
              <li>Clean Architecture reduces logic complexity</li>
              <li>Keep components dry, modular, and optimized</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
