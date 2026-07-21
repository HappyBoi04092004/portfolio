'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitCommit, GitFork, Flame, Trophy } from 'lucide-react';
import { Github as GithubIcon } from '@/components/ui/brand-icons';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig } from '@/config/portfolio';

const getCellBg = (count: number) => {
  if (count === 0) return 'bg-purple-950/40 border border-purple-900/30';
  if (count <= 2) return 'bg-purple-900/80 border border-purple-700/50';
  if (count <= 4) return 'bg-purple-700 border border-purple-500/50 shadow-[0_0_8px_rgba(168,85,247,0.3)]';
  if (count <= 6) return 'bg-[#a855f7] shadow-[0_0_12px_rgba(168,85,247,0.6)]';
  return 'bg-[#c770f0] shadow-[0_0_15px_rgba(199,112,240,0.9)] animate-pulse';
};

export default function GithubAnalytics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const stats = portfolioConfig.githubStats;

  const statCards = [
    { icon: GitCommit, label: 'Commits (This Year)', value: stats.totalCommits.toString() },
    { icon: Flame, label: 'Current Streak', value: `${stats.streak} Days` },
    { icon: GitFork, label: 'Repositories', value: `${stats.repositoriesCount} Repos` },
    { icon: Trophy, label: 'System Uptime', value: '99.8% Stable' },
  ];

  return (
    <section id="github" ref={ref} className="section-block section-shell pointer-events-none">
      <div className="pointer-events-auto space-y-12">
        
        {/* Soumyajit Section Header */}
        <SectionHeader
          eyebrow="Contributions"
          title="Days I Code"
          description="My open-source activity, repository maintenance, and continuous daily coding streak."
        />

        <div className="card p-8 sm:p-10 space-y-10 border-purple-500/30 shadow-[0_0_30px_rgba(199,112,240,0.15)] relative overflow-hidden">
          
          {/* Top Stat Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-purple-500/20 p-5 flex items-center gap-4 bg-purple-500/5 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(199,112,240,0.3)] transition-all"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-[#c770f0] border border-purple-500/30 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono font-bold text-muted uppercase tracking-wider">{label}</p>
                  <p className="text-lg sm:text-xl font-bold font-mono tabular-nums text-white mt-0.5">
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
                <h3 className="text-base font-bold flex items-center gap-2 text-white">
                  <GithubIcon className="w-4 h-4 text-[#c770f0]" />
                  <span>Contribution Calendar (Past 53 Weeks)</span>
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                  <span>Less</span>
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-950/40 border border-purple-900/30" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-900" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-700" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#a855f7]" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#c770f0]" />
                  <span>More</span>
                </div>
              </div>

              <div className="rounded-2xl border border-purple-500/20 p-5 overflow-x-auto bg-purple-500/5">
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
              <h3 className="text-base font-bold text-white">Languages Distribution</h3>
              <div className="space-y-5 rounded-2xl border border-purple-500/20 p-5 bg-purple-500/5">
                {stats.primaryLanguages.map((lang, i) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-white">{lang.name}</span>
                      <span className="text-[#c770f0] font-mono font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-purple-950 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-[#c770f0]"
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
