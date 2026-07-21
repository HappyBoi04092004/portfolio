'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitCommit, GitFork, Flame, Trophy } from 'lucide-react';
import { Github as GithubIcon } from '@/components/ui/brand-icons';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';

const getCellBg = (count: number) => {
  if (count === 0) return 'bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]';
  if (count <= 2) return 'bg-emerald-900/90 border border-emerald-800/50';
  if (count <= 4) return 'bg-emerald-700 border border-emerald-600/50';
  if (count <= 6) return 'bg-emerald-500 shadow-sm shadow-emerald-500/50';
  return 'bg-emerald-400 shadow-md shadow-emerald-400/80 animate-pulse';
};

export default function GithubAnalytics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const stats = portfolioConfig.githubStats;

  const statCards = [
    { icon: GitCommit, label: 'Commits năm nay', value: stats.totalCommits.toString() },
    { icon: Flame, label: 'Streak liên tục', value: `${stats.streak} ngày` },
    { icon: GitFork, label: 'Kho mã nguồn', value: `${stats.repositoriesCount} repos` },
    { icon: Trophy, label: 'Tỷ lệ hoạt động', value: '99.8% Ổn định' },
  ];

  return (
    <section id="github" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="GitHub Activity"
          title="Hoạt động Đóng góp Mã nguồn"
          description="Cam kết viết code thường xuyên, duy trì các repository mã nguồn mở và liên tục cập nhật công nghệ mới."
        />

        <div className="card p-8 sm:p-10 space-y-10 relative overflow-hidden">
          
          {/* Top Stat Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--border)] p-5 flex items-center gap-4 bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] hover:border-[var(--border-strong)] transition-all"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider">{label}</p>
                  <p className="text-lg sm:text-xl font-bold font-mono tabular-nums text-[var(--foreground)] mt-0.5">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Lower Grid: Heatmap + Language breakdown */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Heatmap Matrix */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>Ma trận đóng góp (53 tuần gần nhất)</span>
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[color-mix(in_srgb,var(--foreground)_6%,transparent)]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-900" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-700" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--border)] p-5 overflow-x-auto bg-[color-mix(in_srgb,var(--foreground)_2%,transparent)]">
                <div className="flex gap-[3px] min-w-[620px] justify-between">
                  {Array.from({ length: 53 }).map((_, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, dayIdx) => {
                        const cellIndex = weekIdx * 7 + dayIdx;
                        const commitsCount = stats.contributions[cellIndex] || 0;
                        return (
                          <div
                            key={dayIdx}
                            title={`${commitsCount} commits`}
                            className={`w-2.5 h-2.5 rounded-sm transition-all hover:scale-125 ${getCellBg(commitsCount)}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="lg:col-span-4 space-y-4">
              <h3 className="text-base font-bold">Tỷ lệ ngôn ngữ chính</h3>
              <div className="space-y-5 rounded-2xl border border-[var(--border)] p-5 bg-[color-mix(in_srgb,var(--foreground)_2%,transparent)]">
                {stats.primaryLanguages.map((lang, i) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-[var(--foreground)]">{lang.name}</span>
                      <span className="text-indigo-400 font-mono font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${lang.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
