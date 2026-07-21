'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, Code, ShieldCheck, Cpu } from 'lucide-react';
import { Github } from '@/components/ui/brand-icons';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig, Project } from '@/config/portfolio';

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="Dự án"
          title="Case Study & Sản phẩm Nổi bật"
          description="Các dự án tiêu biểu minh họa tư duy thiết kế hệ thống, tối ưu hiệu năng và giải quyết bài toán quy mô lớn."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioConfig.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelected(project)}
              className="card card-interactive p-8 text-left flex flex-col justify-between gap-6 cursor-pointer group relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-muted-dark group-hover:text-indigo-400 transition-colors">
                  ID: #{project.id}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400" />
                </h3>
                <p className="text-xs font-semibold text-muted-dark font-mono">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Footer */}
              <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-[11px]">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tag text-[11px] text-indigo-400">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <span className="text-xs font-semibold text-indigo-400 group-hover:underline flex items-center gap-1">
                  Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detailed Modal */}
      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/75 backdrop-blur-md pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto card sm:rounded-3xl rounded-t-3xl border-[var(--border-strong)] shadow-2xl relative"
              initial={{ y: 40, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 24, scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Banner */}
              <div className={`p-8 md:p-10 bg-gradient-to-br ${selected.color} relative overflow-hidden`}>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  aria-label="Đóng"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-black/30 text-white/90 border border-white/20">
                  {selected.category} ARCHITECTURE
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
                  {selected.title}
                </h3>
                <p className="text-base text-white/90 mt-2 font-medium">
                  {selected.subtitle}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10 space-y-8 text-left">
                
                {/* Tech Stack & Action Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[var(--border)]">
                  <div className="flex flex-wrap gap-2">
                    {selected.techStack.map((tech) => (
                      <span key={tech} className="tag text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary text-xs py-2.5"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                    </a>
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary text-xs py-2.5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Detailed Sections */}
                <div className="grid md:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2 p-5 rounded-2xl bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border border-[var(--border)]">
                    <div className="flex items-center gap-2 font-bold text-base text-[var(--foreground)]">
                      <Cpu className="w-4 h-4 text-indigo-400" />
                      <span>Kiến trúc hệ thống</span>
                    </div>
                    <p className="text-muted leading-relaxed">{selected.architecture}</p>
                  </div>

                  <div className="space-y-2 p-5 rounded-2xl bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border border-[var(--border)]">
                    <div className="flex items-center gap-2 font-bold text-base text-[var(--foreground)]">
                      <ShieldCheck className="w-4 h-4 text-indigo-400" />
                      <span>Tóm tắt & Quy mô</span>
                    </div>
                    <p className="text-muted leading-relaxed">{selected.caseStudy}</p>
                  </div>
                </div>

                <div className="space-y-6 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-bold text-base text-[var(--foreground)]">Thách thức kỹ thuật lớn nhất</h4>
                    <p className="text-muted leading-relaxed p-4 rounded-2xl bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)]">
                      {selected.challenges}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-base text-[var(--foreground)]">Bài học kinh nghiệm rút ra</h4>
                    <p className="text-muted leading-relaxed p-4 rounded-2xl bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] border border-[color-mix(in_srgb,var(--accent)_20%,transparent)]">
                      {selected.lessonsLearned}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
