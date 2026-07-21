'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Server, Smartphone, Database, Cloud, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
  Cloud: <Cloud className="w-4 h-4" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const current = portfolioConfig.skills[activeCategory];

  return (
    <section id="skills" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="Kỹ năng"
          title="Năng lực Kỹ thuật Cốt lõi"
          description="Chuyên sâu backend, mobile cross-platform và hạ tầng cloud — từ thiết kế kiến trúc microservices đến tự động hóa CI/CD."
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {portfolioConfig.skills.map((category, index) => (
            <button
              key={category.title}
              type="button"
              onClick={() => setActiveCategory(index)}
              className={cn(
                'inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer shadow-sm',
                index === activeCategory
                  ? 'bg-indigo-600 text-white border-indigo-400/50 shadow-lg shadow-indigo-500/25 scale-[1.02]'
                  : 'bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border-[var(--border)] text-muted hover:text-[var(--foreground)] hover:border-[var(--border-strong)] hover:bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]'
              )}
            >
              {iconMap[category.icon]}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <motion.div
          className="card p-8 sm:p-10 relative overflow-hidden"
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-6">
                <div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                  <p className="text-sm text-muted mt-1">
                    Bao gồm {current.skills.length} lĩnh vực thành thạo chuyên sâu
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 w-fit">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>VERIFIED PROFICIENCY</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {current.skills.map((skill, idx) => (
                  <div key={skill.name} className="space-y-3 p-4 rounded-2xl bg-[color-mix(in_srgb,var(--foreground)_2%,transparent)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-[var(--foreground)] text-base">{skill.name}</span>
                      <span className="text-indigo-400 font-mono font-bold">{skill.level}%</span>
                    </div>

                    <div className="h-2.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.08, ease: 'easeOut' }}
                      />
                    </div>

                    <p className="text-xs text-muted leading-relaxed font-normal">
                      {skill.info}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
