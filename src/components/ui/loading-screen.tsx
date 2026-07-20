'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const steps = [
  'Initializing Portfolio...',
  'Loading Workspace...',
  'Connecting Github API...',
  'Compiling Experience...',
  'Ready.'
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    if (currentStep < steps.length) {
      const timeout = setTimeout(() => {
        setVisibleSteps((prev) => [...prev, steps[currentStep]]);
        setCurrentStep((prev) => prev + 1);
        setProgress(((currentStep + 1) / steps.length) * 100);
      }, currentStep === 0 ? 800 : 1000); // Intro delay
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsFinished(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentStep]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-[#050816] z-50 flex flex-col items-center justify-center p-6 text-slate-300 font-mono select-none"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Futuristic Grid Design */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          
          <div className="w-full max-w-md space-y-8 relative z-10">
            {/* Terminal Window Header */}
            <div className="border border-slate-700 bg-slate-950/60 rounded-t-lg px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">WORKSPACE_INIT</span>
            </div>

            {/* Terminal Content */}
            <div className="border-x border-b border-slate-700 bg-slate-950/40 backdrop-blur-md rounded-b-lg p-6 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-3 text-sm text-left">
                {visibleSteps.map((step, idx) => {
                  const isLast = idx === visibleSteps.length - 1;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center space-x-2 ${
                        step === 'Ready.' ? 'text-indigo-400 font-bold' : ''
                      }`}
                    >
                      <span className="text-indigo-500">{isLast && step !== 'Ready.' ? '⚡' : '✓'}</span>
                      <span className={isLast && step !== 'Ready.' ? 'typing-cursor' : ''}>
                        {step}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar & Status */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>BOOT_SEQUENCE</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>

            {/* Footer Information */}
            <div className="text-center text-xs text-slate-600">
              <p>SYSTEM RESOLUTION: SECURE CONNECTION IP: 127.0.0.1</p>
              <p className="mt-1">PORTFOLIO V1.0.0 // HANH PHUC NGUYEN</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Pulsing button when loading finishes to prompt entering */}
      {isFinished && !isLaunched && (
        <motion.div
          className="fixed inset-0 bg-[#050816]/95 z-50 flex items-center justify-center font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          <motion.div 
            className="text-center space-y-6 relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <h1 className="text-2xl font-bold text-white tracking-widest text-gradient uppercase">
              WORKSPACE ESTABLISHED
            </h1>
            <p className="text-slate-400 text-sm max-w-xs mx-auto px-4">
              Connection established safely. Click enter to launch 3D environments.
            </p>
            
            <button
              onClick={() => {
                setIsLaunched(true);
                onComplete();
              }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-bold shadow-lg hover:shadow-indigo-500/25 border border-indigo-400/20 hover:border-indigo-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 duration-300"
            >
              LAUNCH PORTFOLIO
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
