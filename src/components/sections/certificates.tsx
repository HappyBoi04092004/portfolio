'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Award, ShieldCheck, Calendar, ExternalLink, X, Compass } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';
import { portfolioConfig, Certificate } from '@/config/portfolio';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      id="certificates" 
      ref={containerRef}
      className="section-block section-shell pointer-events-none"
    >
      <div className="pointer-events-auto space-y-12">
        
        {/* Soumyajit Section Header */}
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications & Badges"
          description="Verified certifications from AWS, Google Cloud, and Android ATC in cloud architecture & app engineering."
        />

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onClick={() => setSelectedCert(cert)}
              className="card card-interactive p-7 flex flex-col justify-between min-h-[240px] text-left cursor-pointer group border-purple-500/30 hover:border-purple-500/80 shadow-[0_0_20px_rgba(199,112,240,0.15)] relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-[#c770f0] group-hover:scale-110 transition-transform shadow-lg shadow-purple-600/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-dark font-semibold">
                    ID: {cert.id}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#c770f0] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-[#c770f0]">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-muted font-mono border-t border-purple-500/20 pt-4 mt-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c770f0]" />
                  {cert.date}
                </span>
                <span className="text-[#c770f0] font-bold group-hover:underline flex items-center gap-1">
                  PREVIEW
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="w-full max-w-xl rounded-3xl card border-purple-500/50 p-6 sm:p-10 shadow-2xl relative space-y-6"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-purple-500/20 text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Graphic Framing */}
              <div className="border-2 border-dashed border-purple-500/40 rounded-2xl p-6 sm:p-8 space-y-6 text-center bg-purple-500/5 relative overflow-hidden">
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-4 bg-purple-500/20 text-[#c770f0] rounded-full border border-purple-500/40 shadow-lg shadow-purple-600/40">
                    <Award className="w-10 h-10 animate-pulse" />
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#c770f0] uppercase tracking-widest">
                    OFFICIAL DIGITAL CREDENTIAL
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm font-mono text-muted">
                    Awarded to: <span className="text-[#c770f0] font-bold">{portfolioConfig.owner.name}</span>
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-muted font-mono border-t border-purple-500/20 pt-4">
                  <p>ISSUER: {selectedCert.issuer}</p>
                  <p>DATE: {selectedCert.date}</p>
                  <p>ID: {selectedCert.credentialId}</p>
                </div>

                <div className="flex justify-center pt-2 relative z-10">
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary text-xs font-mono font-bold py-3 px-6 shadow-xl shadow-purple-600/40"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Credential Online</span>
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-muted-dark font-mono">
                <span>AUDITED BY AUTHORIZED AUTHORITY</span>
                <span className="flex items-center gap-1 text-[#c770f0] font-bold">
                  <Compass className="w-3.5 h-3.5 animate-spin" />
                  <span>VERIFIED SAFE</span>
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
