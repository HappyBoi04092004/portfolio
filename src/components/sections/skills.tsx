'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Server, Smartphone, Database, Cloud, Check } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

// Map icon name strings to React Components
const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const currentCategory = portfolioConfig.skills[activeCategory];

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="min-h-screen w-full relative flex items-center justify-center py-24 section-shell pointer-events-none"
    >
      <div className="max-w-5xl w-full space-y-12 relative z-10 pointer-events-auto">
        
        {/* Title */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Competency ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
            SKILLS DASHBOARD
          </h2>
        </div>

        {/* Dashboard Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: category selection menu (4 spans) */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {portfolioConfig.skills.map((category, index) => {
              const isActive = index === activeCategory;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full p-4 rounded-xl text-left font-mono text-sm border flex items-center justify-between transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-500/10 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-500/5'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}>
                      {iconMap[category.icon]}
                    </div>
                    <span className="font-bold">{category.title}</span>
                  </div>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                </button>
              );
            })}
          </motion.div>

          {/* Right panel: core statistics and skill meters (8 spans) */}
          <motion.div 
            className="lg:col-span-8 rounded-2xl glass-panel border border-slate-700/50 p-6 sm:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex-1"
              >
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white uppercase font-mono tracking-wide flex items-center space-x-2">
                    <span className="text-indigo-400">{currentCategory.title}</span>
                    <span className="text-xs text-slate-500 font-normal">({currentCategory.skills.length} parameters)</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  {currentCategory.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-bold text-slate-200 font-mono">{skill.name}</span>
                        <span className="text-indigo-400 font-mono font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Meter bar */}
                      <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800/40 relative">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        />
                      </div>
                      
                      {/* Capability info details */}
                      <p className="text-[11px] text-slate-500 font-mono italic pl-1 leading-normal">
                        ⚡ {skill.info}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dashboard Footer info */}
            <div className="mt-8 border-t border-slate-800 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>SECURITY_CLEARANCE: DEV_ADMIN</span>
              <span className="flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>REALTIME METRIC SYNCED</span>
              </span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
