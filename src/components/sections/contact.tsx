'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle2, Compass } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
import { portfolioConfig } from '@/config/portfolio';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    // Simulate API delivery delay
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="min-h-screen w-full relative flex flex-col justify-center py-24 px-6 sm:px-12 md:px-24"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Left Column: Social details (5 spans) */}
        <motion.div 
          className="lg:col-span-5 space-y-8 flex flex-col justify-between text-left h-full min-h-[300px]"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Communications ]</span>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
              CONNECT WORKSPACE
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Have an opening, a project collaboration proposal, or simply want to say hello? Drop a message.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-slate-300">
              <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left font-mono">
                <p className="text-[10px] text-slate-500 uppercase">Secure Email</p>
                <a href={`mailto:${portfolioConfig.owner.email}`} className="text-sm font-bold hover:text-indigo-400 transition-colors">
                  {portfolioConfig.owner.email}
                </a>
              </div>
            </div>

            {/* Resume CV Download Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-900 border border-slate-800 text-slate-400 rounded-lg">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white uppercase font-mono">CURRICULUM VITAE</p>
                  <p className="text-[9px] text-slate-500 font-mono">PDF FORMAT // 156KB</p>
                </div>
              </div>
              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.resumeUrl}
                  download
                  className="px-3.5 py-1.5 bg-indigo-600/15 border border-indigo-500/30 text-indigo-400 rounded-lg text-xs font-mono font-bold hover:bg-indigo-600 hover:text-white transition-all"
                >
                  DOWNLOAD
                </a>
              </MagneticWrapper>
            </div>
          </div>

          {/* Social connection networks */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Connect Networks</p>
            <div className="flex flex-wrap gap-3">
              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-950/80 border border-slate-900 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
                  aria-label="GitHub Link"
                >
                  <Github className="w-5 h-5" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-950/80 border border-slate-900 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
                  aria-label="LinkedIn Link"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </MagneticWrapper>

              <MagneticWrapper>
                <a
                  href={portfolioConfig.owner.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-950/80 border border-slate-900 hover:border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all"
                  aria-label="Facebook Link"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </MagneticWrapper>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact form (7 spans) */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-750 relative overflow-hidden">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-name" className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Full Name *</label>
                  <input
                    id="form-name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm glass-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-email" className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Email Address *</label>
                  <input
                    id="form-email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm glass-input"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="form-subject" className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Subject</label>
                <input
                  id="form-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm glass-input"
                  placeholder="Inquiry topic"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="form-message" className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Message Content *</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm glass-input resize-none"
                  placeholder="Write your details here..."
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 flex justify-start">
                <button
                  type="submit"
                  disabled={isSending || sentSuccess}
                  className="px-6 py-3 w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:from-indigo-900 disabled:to-indigo-950 disabled:text-slate-500 text-white rounded-xl text-xs font-mono font-bold shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20 transition-all flex items-center justify-center space-x-2"
                >
                  {isSending ? (
                    <>
                      <Compass className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING PACKETS...</span>
                    </>
                  ) : sentSuccess ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>DISPATCHED SUCCESSFULLY</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>DISPATCH MESSAGE</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Success notification overlay */}
            <AnimatePresence>
              {sentSuccess && (
                <motion.div
                  className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-4 font-mono text-xs text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-sm uppercase">Secure Handshake Succeeded</h3>
                    <p className="text-slate-400">Message successfully logged inside connection routing pools.</p>
                  </div>
                  <p className="text-[10px] text-indigo-400">STATUS: DELIVERED // RESPOND TIME ~24H</p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
