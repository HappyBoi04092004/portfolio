'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, BookOpen, X, Code, ShieldCheck, Flame, Compass } from 'lucide-react';
import { Github } from '@/components/ui/brand-icons';
import { portfolioConfig, Project } from '@/config/portfolio';

// Custom lightweight Tilt card wrapper
function TiltCard({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Normalize to central coordinates
    const rx = -((y - box.height / 2) / (box.height / 2)) * 8; // max 8 deg rotation
    const ry = ((x - box.width / 2) / (box.width / 2)) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;

    // Custom glow spot overlay position
    setGlowStyle({
      background: `radial-gradient(circle 120px at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setGlowStyle({});
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)' }}
      className={`relative overflow-hidden cursor-pointer select-none rounded-2xl border border-slate-800/60 bg-slate-950/40 backdrop-blur-md shadow-lg ${className}`}
    >
      {/* Dynamic Glow Spot */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={glowStyle} />
      {children}
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="projects" 
      ref={containerRef}
      className="min-h-screen w-full relative flex flex-col justify-center py-24 section-shell pointer-events-none"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12 relative z-10 pointer-events-auto">
        
        {/* Title */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Portfolio ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
            CASE STUDIES & WORK
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioConfig.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <TiltCard 
                onClick={() => setSelectedProject(project)}
                className="h-80 p-6 flex flex-col justify-between"
              >
                {/* Header info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase border border-indigo-500/20 px-2.5 py-0.5 rounded-full bg-indigo-500/5">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      ID: {project.id}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[9px] font-mono text-slate-400 bg-slate-900 border border-slate-800/40 px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[9px] font-mono text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded-md">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Actions summary */}
                  <div className="flex items-center text-xs font-mono font-bold text-indigo-400 group pt-2">
                    <BookOpen className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:translate-x-0.5" />
                    <span>READ ARCHITECTURE CASE STUDY</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[85vh] rounded-2xl glass-panel border border-slate-700 overflow-y-auto shadow-2xl relative"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover top area with abstract dynamic visual banner */}
              <div className={`h-40 bg-gradient-to-r ${selectedProject.color} p-8 flex flex-col justify-end relative overflow-hidden`}>
                <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="space-y-1 relative z-10 text-left">
                  <span className="text-[10px] font-mono text-indigo-200 border border-white/20 px-2 py-0.5 rounded-full bg-white/10 uppercase">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                    {selectedProject.title}
                  </h3>
                  <p className="text-indigo-100/90 text-xs sm:text-sm font-mono font-bold">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Case Study Grid content */}
              <div className="p-6 sm:p-8 space-y-8 text-left">
                {/* Tech & Links Header */}
                <div className="flex flex-col sm:flex-row justify-between gap-4 border-b border-slate-800 pb-6">
                  <div>
                    <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest">Stack parameters</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 items-end">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  </div>
                </div>

                {/* Main sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Core architecture & Description */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-indigo-400">
                        <Code className="w-4 h-4" />
                        <h4 className="font-mono text-xs uppercase font-bold tracking-wider">Architecture Blueprint</h4>
                      </div>
                      <p className="text-sm font-semibold text-white">{selectedProject.architecture}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-mono text-xs text-slate-500 uppercase tracking-wider">Project Narrative</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.caseStudy}</p>
                    </div>
                  </div>

                  {/* Right Column: Challenges & Solutions */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-pink-400">
                        <Flame className="w-4 h-4" />
                        <h4 className="font-mono text-xs uppercase font-bold tracking-wider">Technical Challenges</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedProject.challenges}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                        <h4 className="font-mono text-xs uppercase font-bold tracking-wider">Lessons Learned</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{selectedProject.lessonsLearned}</p>
                    </div>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <span>BLUEPRINT ARCHIVE SYNC // CONFIDENTIAL</span>
                  <span className="flex items-center space-x-1">
                    <Compass className="w-3 h-3 text-indigo-400 animate-spin" />
                    <span>SYSTEM_VERIFIED_SECURE</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
