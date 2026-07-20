'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Briefcase, Award, GraduationCap } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="min-h-screen w-full relative flex items-center justify-center py-24 px-6 sm:px-12 md:px-24"
    >
      <div className="max-w-4xl w-full space-y-16 relative z-10">
        
        {/* Title */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Journey ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
            CAREER TIMELINE
          </h2>
        </div>

        {/* Timeline body */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
          {portfolioConfig.experience.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-8 sm:pl-12"
              >
                {/* Glowing Anchor dot */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 border border-indigo-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
                </span>

                {/* Main Card Content */}
                <div className="p-6 rounded-2xl glass-card border border-slate-850 hover:border-indigo-500/20 transition-all space-y-4 text-left">
                  
                  {/* Card Header details */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white uppercase tracking-wide flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-indigo-400" />
                        {item.role}
                      </h3>
                      <p className="text-xs font-mono text-indigo-400">
                        {item.company} // <span className="text-slate-500">{item.location}</span>
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-850 text-slate-400 font-mono text-xs w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet achievements list */}
                  <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed list-disc list-inside">
                    {item.description.map((bullet, i) => (
                      <li key={i} className="pl-1">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-900/50 border border-slate-800 px-2 py-0.5 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row gap-4 items-start text-left"
        >
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-white font-bold uppercase tracking-wide text-sm font-mono flex items-center">
              ACADEMIC CERTIFICATION
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Bachelor of Science in Computer Science & Software Engineering // Major GPA: 3.76
            </p>
            <p className="text-[10px] text-slate-500 font-mono">
              COMPLETED WITH HONORS // ADVANCED TOPICS IN AUTOMATED CLOUD SYSTEMS
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
