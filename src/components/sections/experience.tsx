'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, GraduationCap, Building2, MapPin, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="Kinh nghiệm"
          title="Lộ trình & Quá trình Công tác"
          description="Kinh nghiệm thực chiến qua các dự án doanh nghiệp — cam kết chuẩn mực lập trình, tối ưu hiệu năng và phối hợp nhóm Agile."
        />

        {/* Timeline Stream */}
        <div className="relative pl-6 md:pl-10 border-l-2 border-[color-mix(in_srgb,var(--accent)_30%,var(--border))] space-y-12">
          {portfolioConfig.experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Glowing Node Marker */}
              <span className="absolute -left-[calc(1.5rem+7px)] md:-left-[calc(2.5rem+7px)] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-500/25 group-hover:scale-125 transition-transform shadow-lg shadow-indigo-500/50" />

              <div className="card card-interactive p-8 space-y-6">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--border)] pb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-indigo-400 font-semibold mt-1">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-muted" />
                        {item.company}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5 text-muted font-normal">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                {/* Achievements Bullet List */}
                <ul className="space-y-3 text-sm sm:text-base text-muted leading-relaxed">
                  {item.description.map((line) => (
                    <li key={line.slice(0, 40)} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tag text-xs font-mono font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card card-interactive p-8 mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
        >
          <div className="flex gap-5 items-start">
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 shadow-lg">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xl">Học vấn & Trình độ</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  GPA 3.76 / 4.0
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Cử nhân Khoa học Máy tính — Chuyên sâu Hệ thống Phân tán, Cloud Computing và Kiến trúc Phần mềm.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-xl border border-indigo-500/20 shrink-0">
            <Award className="w-4 h-4" />
            <span>HONORS GRADUATE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
