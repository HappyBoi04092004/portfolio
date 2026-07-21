'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Server, Smartphone, Database, Cloud, CheckCircle, Code2, Terminal, Cpu } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-5 h-5 text-[#c770f0]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#c770f0]" />,
  Database: <Database className="w-5 h-5 text-[#c770f0]" />,
  Cloud: <Cloud className="w-5 h-5 text-[#c770f0]" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const current = portfolioConfig.skills[activeCategory];

  return (
    <section id="skills" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto space-y-12">
        
        {/* Soumyajit Section Header */}
        <SectionHeader
          eyebrow="Competencies"
          title="Professional Skillset"
          description="High-performance backend architectures, cross-platform mobile apps, and robust cloud infrastructure."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3">
          {portfolioConfig.skills.map((category, index) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={cn(
                'inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer shadow-sm',
                index === activeCategory
                  ? 'bg-purple-600/30 text-[#c770f0] border-purple-500/80 shadow-[0_0_20px_rgba(199,112,240,0.4)] scale-[1.02]'
                  : 'bg-purple-500/5 border-purple-500/20 text-muted hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10'
              )}
            >
              {iconMap[category.icon]}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid in Soumyajit Big Square Style */}
        <motion.div
          className="card p-8 sm:p-10 border-purple-500/30 shadow-[0_0_30px_rgba(199,112,240,0.15)] relative overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{current.title}</h3>
                  <p className="text-sm text-muted mt-1">
                    Displaying {current.skills.length} core competencies
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#c770f0] bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/30 w-fit">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>VERIFIED PROFICIENCY</span>
                </div>
              </div>

              {/* Grid of Square Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {current.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-5 rounded-2xl bg-purple-500/5 border border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(199,112,240,0.4)] transition-all flex flex-col justify-between space-y-4 group text-left"
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-[#c770f0] group-hover:scale-110 transition-transform">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#c770f0]">
                        {skill.level}%
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-base text-white group-hover:text-[#c770f0] transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted mt-1 line-clamp-2 leading-relaxed">
                        {skill.info}
                      </p>
                    </div>

                    <div className="h-1.5 rounded-full bg-purple-950 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-[#c770f0]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* "Tools I Use" Section */}
        <div className="space-y-6 pt-4">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-white text-center">
            Tools I <span className="text-[#c770f0]">Use</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {['Linux / Bash', 'VS Code', 'Docker & K8s', 'Postman', 'Git / GitHub', 'AWS Console'].map((tool) => (
              <div
                key={tool}
                className="p-4 rounded-2xl card border-purple-500/30 hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.4)] transition-all flex flex-col items-center justify-center gap-2 text-center group cursor-pointer"
              >
                <Terminal className="w-6 h-6 text-[#c770f0] group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono font-bold text-white group-hover:text-[#c770f0] transition-colors">
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
