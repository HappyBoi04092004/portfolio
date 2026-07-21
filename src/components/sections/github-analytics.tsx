'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitCommit, GitFork, Star, Flame, Trophy } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

// Color categorizer for cells based on commit count
const getCellBg = (count: number) => {
  if (count === 0) return 'bg-[#161b22]'; // dark space empty
  if (count <= 2) return 'bg-[#0e4429]'; // low commits
  if (count <= 4) return 'bg-[#006d32] font-semibold'; // medium commits
  if (count <= 6) return 'bg-[#26a641]'; // high commits
  return 'bg-[#39d353]'; // maximum commits peak
};

export default function GithubAnalytics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const stats = portfolioConfig.githubStats;

  return (
    <section 
      id="github" 
      ref={containerRef}
      className="min-h-screen w-full relative flex items-center justify-center py-24 section-shell pointer-events-none"
    >
      <div className="max-w-5xl w-full space-y-12 relative z-10 pointer-events-auto">
        
        {/* Title */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Metrics ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
            GITHUB SYNC & ANALYTICS
          </h2>
        </div>

        {/* Dashboard Box */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-700/50 space-y-8">
          
          {/* Top general stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                <GitCommit className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-mono uppercase">Commits This Year</p>
                <p className="text-xl font-bold text-white font-mono">{stats.totalCommits}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-mono uppercase">Current Streak</p>
                <p className="text-xl font-bold text-white font-mono">{stats.streak} Days</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
                <GitFork className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-mono uppercase">Repositories</p>
                <p className="text-xl font-bold text-white font-mono">{stats.repositoriesCount}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-4">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-500 font-mono uppercase">Sync State</p>
                <p className="text-sm font-bold text-emerald-400 font-mono flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  STABLE
                </p>
              </div>
            </div>
          </div>

          {/* Languages distribution & Contribution Calendar Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contribution Calendar (8 spans) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Contribution Calendar
              </h3>
              
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 overflow-x-auto">
                {/* 53 columns representing weeks */}
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
                            className={`w-[9px] h-[9px] rounded-[1px] transition-all duration-300 hover:scale-125 ${getCellBg(
                              commitsCount
                            )}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Calendar Legend indicators */}
                <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono mt-4">
                  <span>Learn more about Hanh Phuc Nguyen on GitHub</span>
                  <div className="flex items-center space-x-1">
                    <span>Less</span>
                    <div className="w-2 h-2 bg-[#161b22] rounded-[1px]" />
                    <div className="w-2 h-2 bg-[#0e4429] rounded-[1px]" />
                    <div className="w-2 h-2 bg-[#006d32] rounded-[1px]" />
                    <div className="w-2 h-2 bg-[#26a641] rounded-[1px]" />
                    <div className="w-2 h-2 bg-[#39d353] rounded-[1px]" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Languages distribution (4 spans) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Language Usage
              </h3>

              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900 space-y-4">
                {stats.primaryLanguages.map((lang, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-300 font-bold">{lang.name}</span>
                      <span className="text-slate-400">{lang.percentage}%</span>
                    </div>
                    {/* Visual Bar percentage representation */}
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${lang.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
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
