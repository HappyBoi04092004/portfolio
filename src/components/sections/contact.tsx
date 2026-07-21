'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle2, Compass, MessageSquare } from 'lucide-react';
import { Github, Linkedin, Facebook } from '@/components/ui/brand-icons';
import { portfolioConfig } from '@/config/portfolio';
import MagneticWrapper from '@/components/ui/magnetic-wrapper';
import SectionHeader from '@/components/ui/section-header';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
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
      className="section-block section-shell pointer-events-none"
    >
      <div className="pointer-events-auto space-y-12">
        
        {/* Soumyajit Section Header */}
        <SectionHeader
          eyebrow="Communications"
          title="Connect & Collaborate"
          description="Looking to hire a Senior Developer or propose a project collaboration? Drop a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct channels & FIND ME ON (5 spans) */}
          <motion.div 
            className="lg:col-span-5 card p-8 sm:p-10 flex flex-col justify-between space-y-8 text-left border-purple-500/30 shadow-[0_0_30px_rgba(199,112,240,0.15)]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#c770f0] uppercase tracking-widest">[ Direct Channels ]</span>
                <h3 className="text-2xl font-bold text-white">GET IN TOUCH</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Available for full-time roles, freelance backend work, and mobile app architecture consultancy.
                </p>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <div className="p-3 bg-purple-500/20 border border-purple-500/40 text-[#c770f0] rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[10px] text-muted uppercase font-bold">Official Email</p>
                  <a href={`mailto:${portfolioConfig.owner.email}`} className="text-sm font-bold text-white hover:text-[#c770f0] transition-colors">
                    {portfolioConfig.owner.email}
                  </a>
                </div>
              </div>

              {/* CV Download */}
              <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-500/20 border border-purple-500/40 text-[#c770f0] rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold font-mono text-white uppercase">CURRICULUM VITAE</p>
                    <p className="text-[10px] text-muted font-mono">PDF FORMAT // 2026</p>
                  </div>
                </div>
                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.resumeUrl}
                    download
                    className="btn btn-primary text-xs py-2 px-4 shadow-lg shadow-purple-600/30"
                  >
                    DOWNLOAD
                  </a>
                </MagneticWrapper>
              </div>
            </div>

            {/* Soumyajit Circular Social Icons */}
            <div className="space-y-4 pt-6 border-t border-purple-500/20">
              <p className="text-xs font-mono font-bold text-muted uppercase tracking-widest">FIND ME ON</p>
              <div className="flex items-center gap-3">
                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] flex items-center justify-center transition-all"
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
                    className="w-11 h-11 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] flex items-center justify-center transition-all"
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
                    className="w-11 h-11 rounded-full border border-purple-500/40 bg-purple-500/10 text-white hover:text-[#c770f0] hover:border-purple-500/80 hover:shadow-[0_0_20px_rgba(199,112,240,0.5)] flex items-center justify-center transition-all"
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
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="card p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-between border-purple-500/30 shadow-[0_0_30px_rgba(199,112,240,0.15)]">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-purple-500/20">
                  <MessageSquare className="w-5 h-5 text-[#c770f0]" />
                  <h3 className="font-bold text-lg text-white">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2 text-left">
                    <label htmlFor="form-name" className="text-xs font-mono font-bold text-muted uppercase">Your Name *</label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="glass-input"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="form-email" className="text-xs font-mono font-bold text-muted uppercase">Your Email *</label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="glass-input"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-muted uppercase">Subject</label>
                  <input
                    id="form-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="glass-input"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-muted uppercase">Message *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input resize-none"
                    placeholder="Describe your project requirements or details..."
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-start">
                  <MagneticWrapper>
                    <button
                      type="submit"
                      disabled={isSending || sentSuccess}
                      className="btn btn-primary text-xs font-mono font-bold py-3.5 px-8 shadow-xl shadow-purple-600/40 flex items-center gap-2"
                    >
                      {isSending ? (
                        <>
                          <Compass className="w-4 h-4 animate-spin" />
                          <span>SENDING PACKETS...</span>
                        </>
                      ) : sentSuccess ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>MESSAGE SENT</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>DISPATCH MESSAGE</span>
                        </>
                      )}
                    </button>
                  </MagneticWrapper>
                </div>
              </form>

              {/* Success Notification Overlay */}
              <AnimatePresence>
                {sentSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-[#0c0513]/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center space-y-4 font-mono text-xs text-slate-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-lg uppercase tracking-tight">Message Dispatched Successfully!</h3>
                      <p className="text-muted max-w-sm">Thank you for reaching out. I will respond to your email within 24 hours.</p>
                    </div>
                    <p className="text-[#c770f0] font-bold">STATUS: DELIVERED // RESPONSE ~24H</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
