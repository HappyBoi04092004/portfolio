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
      <div className="pointer-events-auto">
        <SectionHeader
          eyebrow="Liên hệ"
          title="Kết nối & Khởi tạo Dự án"
          description="Bạn đang tìm kiếm Senior Software Engineer cho dự án mới hoặc cơ hội hợp tác dài hạn? Hãy gửi tin nhắn ngay."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct channels (5 spans) */}
          <motion.div 
            className="lg:col-span-5 card p-8 sm:p-10 flex flex-col justify-between space-y-8 text-left h-full"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">[ Direct Communication ]</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Kênh Liên Lạc Trực Tiếp</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Luôn sẵn sàng trao đổi chi tiết công việc, giải pháp kiến trúc hoặc phản hồi câu hỏi của bạn.
                </p>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border border-[var(--border)]">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left font-mono">
                  <p className="text-[10px] text-muted uppercase font-bold">Email cá nhân</p>
                  <a href={`mailto:${portfolioConfig.owner.email}`} className="text-sm font-bold text-[var(--foreground)] hover:text-indigo-400 transition-colors">
                    {portfolioConfig.owner.email}
                  </a>
                </div>
              </div>

              {/* Curriculum Vitae Download */}
              <div className="p-4 rounded-2xl bg-[color-mix(in_srgb,var(--foreground)_3%,transparent)] border border-[var(--border)] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold font-mono uppercase">CURRICULUM VITAE</p>
                    <p className="text-[10px] text-muted font-mono">PDF FORMAT // 2026 EDITION</p>
                  </div>
                </div>
                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.resumeUrl}
                    download
                    className="btn btn-primary text-xs py-2 px-4 shadow-md"
                  >
                    TẢI CV
                  </a>
                </MagneticWrapper>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="space-y-3 pt-6 border-t border-[var(--border)]">
              <p className="text-xs font-mono font-bold text-muted uppercase tracking-widest">Mạng xã hội</p>
              <div className="flex flex-wrap gap-3">
                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg.card border border-[var(--border)] hover:border-indigo-500/40 text-muted hover:text-[var(--foreground)] rounded-xl transition-all inline-flex items-center gap-2 text-xs font-mono font-bold"
                    aria-label="GitHub Link"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </MagneticWrapper>

                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-card border border-[var(--border)] hover:border-indigo-500/40 text-muted hover:text-[var(--foreground)] rounded-xl transition-all inline-flex items-center gap-2 text-xs font-mono font-bold"
                    aria-label="LinkedIn Link"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </MagneticWrapper>

                <MagneticWrapper>
                  <a
                    href={portfolioConfig.owner.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-card border border-[var(--border)] hover:border-indigo-500/40 text-muted hover:text-[var(--foreground)] rounded-xl transition-all inline-flex items-center gap-2 text-xs font-mono font-bold"
                    aria-label="Facebook Link"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
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
            <div className="card p-8 sm:p-10 relative overflow-hidden h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-[var(--border)]">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                  <h3 className="font-bold text-lg">Gửi lời nhắn trực tiếp</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2 text-left">
                    <label htmlFor="form-name" className="text-xs font-mono font-bold text-muted uppercase">Họ và tên *</label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="glass-input"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div className="space-y-2 text-left">
                    <label htmlFor="form-email" className="text-xs font-mono font-bold text-muted uppercase">Địa chỉ Email *</label>
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
                  <label htmlFor="form-subject" className="text-xs font-mono font-bold text-muted uppercase">Tiêu đề bài viết</label>
                  <input
                    id="form-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="glass-input"
                    placeholder="Đề xuất dự án / Cơ hội hợp tác"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="form-message" className="text-xs font-mono font-bold text-muted uppercase">Nội dung tin nhắn *</label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input resize-none"
                    placeholder="Mô tả yêu cầu hoặc dự án của bạn tại đây..."
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex justify-start">
                  <MagneticWrapper>
                    <button
                      type="submit"
                      disabled={isSending || sentSuccess}
                      className="btn btn-primary text-xs font-mono font-bold py-3.5 px-8 shadow-xl flex items-center gap-2"
                    >
                      {isSending ? (
                        <>
                          <Compass className="w-4 h-4 animate-spin" />
                          <span>ĐANG GỬI TIN NHẮN...</span>
                        </>
                      ) : sentSuccess ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>GỬI THÀNH CÔNG</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>GỬI TIN NHẮN NGAY</span>
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
                    className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center space-y-4 font-mono text-xs text-slate-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="p-4 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full shadow-xl">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-lg uppercase tracking-tight">Gửi Tin Nhắn Thành Công!</h3>
                      <p className="text-muted max-w-sm">Cảm ơn bạn đã liên hệ. Mình sẽ phản hồi qua email trong vòng 24 giờ làm việc.</p>
                    </div>
                    <p className="text-indigo-400 font-bold">STATUS: DELIVERED // RESPOND TIME ~24H</p>
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
