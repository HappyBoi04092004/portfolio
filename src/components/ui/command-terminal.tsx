'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

interface CommandTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: 'input' | 'output' | 'error';
  text: string;
}

export default function CommandTerminal({ isOpen, onClose }: CommandTerminalProps) {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'output', text: 'Welcome to Hanh Phuc Nguyen\'s Workspace Terminal [v1.0.0]' },
    { type: 'output', text: 'Type "help" to view list of available operations.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === '/') || e.key === '`') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const args = trimmed.split(' ');
    const command = args[0];

    const newLogs: LogEntry[] = [...logs, { type: 'input', text: `nguyenhanhphuc@workspace ~ ${cmd}` }];

    switch (command) {
      case 'clear':
        setLogs([]);
        setInput('');
        return;
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available commands:
  help      - Display this helper catalog
  projects  - Show featured development projects
  skills    - Print full technical competencies list
  contact   - Display active social links and email
  resume    - Retrieve download copy of official curriculum vitae
  github    - View active source control repository stats
  clear     - Wipe console history log`
        });
        break;
      case 'projects':
        if (args[1]) {
          const project = portfolioConfig.projects.find(p => p.id === args[1]);
          if (project) {
            newLogs.push({
              type: 'output',
              text: `Project ID: ${project.id}
Title: ${project.title}
Subtitle: ${project.subtitle}
Architecture: ${project.architecture}
Tech Stack: ${project.techStack.join(', ')}
Description: ${project.description}
Challenges: ${project.challenges}
Lessons Learned: ${project.lessonsLearned}`
            });
          } else {
            newLogs.push({ type: 'error', text: `Error: Project "${args[1]}" not found. Type "projects" to view valid IDs.` });
          }
        } else {
          const plist = portfolioConfig.projects.map(p => `  - ${p.id.padEnd(15)} : ${p.title}`).join('\n');
          newLogs.push({
            type: 'output',
            text: `Featured Projects:
${plist}
Type "projects [id]" to view complete architecture case study.`
          });
        }
        break;
      case 'skills':
        const skillsOutput = portfolioConfig.skills.map(cat => {
          const list = cat.skills.map(s => `    * ${s.name.padEnd(20)} [${'■'.repeat(Math.round(s.level / 10))}${'□'.repeat(10 - Math.round(s.level / 10))}] - ${s.info}`).join('\n');
          return `  [${cat.title}]\n${list}`;
        }).join('\n\n');
        newLogs.push({
          type: 'output',
          text: `Technical Competencies Layout:\n${skillsOutput}`
        });
        break;
      case 'contact':
        newLogs.push({
          type: 'output',
          text: `Contact Info & Channels:
  - Email:    ${portfolioConfig.owner.email}
  - GitHub:   ${portfolioConfig.owner.github}
  - LinkedIn: ${portfolioConfig.owner.linkedin}
  - Facebook: ${portfolioConfig.owner.facebook}`
        });
        break;
      case 'resume':
        newLogs.push({ type: 'output', text: 'Retrieving resume file link... Opening document.' });
        if (typeof window !== 'undefined') {
          window.open(portfolioConfig.owner.resumeUrl, '_blank');
        }
        break;
      case 'github':
        newLogs.push({
          type: 'output',
          text: `GitHub Sync Status:
  - Active Repositories: ${portfolioConfig.githubStats.repositoriesCount}
  - Commits (Current Year): ${portfolioConfig.githubStats.totalCommits}
  - Target Profile: ${portfolioConfig.owner.github}
  - Core Stack breakdown:
${portfolioConfig.githubStats.primaryLanguages.map(l => `    * ${l.name.padEnd(15)} : ${l.percentage}%`).join('\n')}`
        });
        break;
      default:
        if (trimmed !== '') {
          newLogs.push({ type: 'error', text: `Command not found: "${command}". Type "help" to see available options.` });
        }
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-3xl h-[500px] rounded-3xl card border-[var(--border-strong)] overflow-hidden flex flex-col shadow-2xl relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="px-5 py-3.5 bg-[color-mix(in_srgb,var(--foreground)_5%,transparent)] border-b border-[var(--border)] flex items-center justify-between text-muted select-none">
              <div className="flex items-center gap-2.5 text-indigo-400">
                <TerminalIcon className="w-4 h-4" />
                <span className="font-mono text-xs font-bold tracking-wider">WORKSPACE_TERMINAL_SHELL</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-muted-dark font-mono hidden sm:inline">Press Esc or '`' to close</span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 hover:bg-[color-mix(in_srgb,var(--foreground)_10%,transparent)] rounded-lg transition-colors text-muted hover:text-[var(--foreground)]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal screen */}
            <div
              className="flex-1 p-6 overflow-y-auto font-mono text-xs space-y-3 text-[var(--foreground)] leading-relaxed cursor-text bg-black/40"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={
                    log.type === 'error'
                      ? 'text-rose-400 font-bold'
                      : log.type === 'input'
                      ? 'text-indigo-400 font-bold'
                      : 'text-slate-300 whitespace-pre-wrap'
                  }
                >
                  {log.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input Line */}
            <div className="p-4 bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border-t border-[var(--border)] flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-indigo-400 select-none">
                nguyenhanhphuc@workspace ~
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(input);
                  } else if (e.key === 'Escape') {
                    onClose();
                  }
                }}
                className="flex-1 bg-transparent outline-none font-mono text-xs text-[var(--foreground)]"
                placeholder="Type 'help' to review catalog operations..."
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
