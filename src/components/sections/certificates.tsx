'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Award, ShieldCheck, Calendar, ExternalLink, X, Compass } from 'lucide-react';
import { portfolioConfig, Certificate } from '@/config/portfolio';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section 
      id="certificates" 
      ref={containerRef}
      className="min-h-screen w-full relative flex items-center justify-center py-24 section-shell pointer-events-none"
    >
      <div className="max-w-5xl w-full space-y-12 relative z-10 pointer-events-auto">
        
        {/* Title */}
        <div className="space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">[ Credentials ]</span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white text-gradient">
            CERTIFICATIONS
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioConfig.certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-indigo-500/30 transition-all flex flex-col justify-between min-h-64 text-left cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">ID: {cert.id}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white uppercase group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono border-t border-slate-900 pt-3">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-indigo-500/80" />
                  {cert.date}
                </span>
                <span className="text-indigo-400 font-bold group-hover:underline flex items-center">
                  PREVIEW
                  <ExternalLink className="w-2.5 h-2.5 ml-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="w-full max-w-xl rounded-2xl glass-panel border border-slate-700 p-6 sm:p-8 shadow-2xl relative space-y-6"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Certificate Details visual layout */}
              <div className="border-2 border-dashed border-indigo-500/20 rounded-xl p-6 sm:p-8 space-y-6 text-center bg-slate-950/40 relative overflow-hidden">
                <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
                
                {/* Glowing radial background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />

                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                    <Award className="w-8 h-8 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest">OFFICIAL CREDENTIAL</span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-normal">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-300">
                    Presented to <span className="text-indigo-300 font-bold">{portfolioConfig.owner.name}</span>
                  </p>
                </div>

                <div className="space-y-1 text-xs text-slate-400 font-mono border-t border-slate-900 pt-4">
                  <p>ISSUER: {selectedCert.issuer}</p>
                  <p>DATE OF ISSUE: {selectedCert.date}</p>
                  <p>CREDENTIAL ID: {selectedCert.credentialId}</p>
                </div>

                <div className="flex justify-center pt-2 relative z-10">
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-bold transition-all flex items-center space-x-1.5 shadow-lg shadow-indigo-500/15"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verify Credential Status</span>
                  </a>
                </div>
              </div>

              {/* Status footer line */}
              <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono">
                <span>VERIFIED SAFE BY AUDIT AUTHORITY</span>
                <span className="flex items-center space-x-1">
                  <Compass className="w-3 h-3 text-indigo-400 animate-spin" />
                  <span>SYNCED</span>
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
