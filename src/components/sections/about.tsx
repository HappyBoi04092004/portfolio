'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Code2, Sparkles } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';

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
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-gradient tabular-nums">
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
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="Giới thiệu"
          title="Hành trình & Định hướng phát triển"
          description="Kết hợp backend mở rộng tốt với trải nghiệm mobile mượt — ưu tiên kiến trúc sạch, tự động hóa và vận hành hệ thống ổn định."
        />

        {/* Top Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Developer Story Card */}
          <motion.div
            className="lg:col-span-7 card p-8 sm:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-[var(--border)] pb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 flex items-center justify-center text-xl font-bold text-white shadow-xl shadow-indigo-500/20">
                    HP
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[var(--background)] flex items-center justify-center text-[10px] text-white">
                    ✓
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl">{portfolioConfig.owner.name}</h3>
                  <p className="text-sm font-semibold text-indigo-400">Senior Backend & Flutter Developer</p>
                </div>
              </div>

              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>{portfolioConfig.about.story}</p>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-muted-dark border-t border-[var(--border)]">
              <span>LOCATION: HO CHI MINH CITY, VIETNAM</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE ENGINE
              </span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {portfolioConfig.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="card card-interactive p-6 flex flex-col justify-between gap-3 text-left group"
              >
                <span className="text-xs font-semibold text-muted uppercase tracking-wider group-hover:text-indigo-400 transition-colors">
                  {stat.label}
                </span>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card card-interactive p-8 space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Sứ mệnh kỹ thuật</h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {portfolioConfig.about.mission}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="card card-interactive p-8 space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-xl">Tầm nhìn dài hạn</h3>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              {portfolioConfig.about.vision}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
