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
  isComponent?: boolean;
  component?: React.ReactNode;
}

export default function CommandTerminal({ isOpen, onClose }: CommandTerminalProps) {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'output', text: 'Welcome to Hanh Phuc Nguyen\'s Workspace Terminal [v1.0.0]' },
    { type: 'output', text: 'Type "help" to view list of available operations.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Focus terminal input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Global key listener to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl + / or `~`
      if ((e.ctrlKey && e.key === '/') || e.key === '`') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Handled externally but we can do a local toggle trigger if we bind correctly
        }
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
        newLogs.push({ type: 'output', text: 'Retrieving resume file link... Open standard document tab.' });
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
          className="fixed inset-0 z-45 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-3xl h-[480px] rounded-2xl glass-panel overflow-hidden border border-slate-700 flex flex-col shadow-2xl relative"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-slate-400 select-none">
              <div className="flex items-center space-x-2 text-indigo-400">
                <TerminalIcon className="w-4 h-4" />
                <span className="font-mono text-xs font-bold tracking-wider">WORKSPACE_TERMINAL_SHELL</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] text-slate-500 font-mono">Press '`' or Esc to close</span>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal screen */}
            <div
              className="flex-1 p-6 overflow-y-auto font-mono text-xs space-y-3 text-slate-300 leading-relaxed cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              {logs.map((log, index) => (
                <div
                  key={index}
                  className={
                    log.type === 'error'
                      ? 'text-red-400 font-bold'
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
            <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex items-center space-x-2">
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
                className="flex-1 bg-transparent outline-none font-mono text-xs text-white"
                placeholder="Type 'help' to review catalog operations..."
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
