'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;

    let frame: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDone(true);
        window.setTimeout(onComplete, 400);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[var(--background)] pointer-events-auto"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="text-center space-y-2 px-6">
            <p className="eyebrow">Portfolio</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gradient">
              {portfolioConfig.owner.name}
            </h1>
            <p className="text-muted text-sm max-w-xs mx-auto">
              Backend · Flutter · Cloud
            </p>
          </div>

          <div className="w-56 space-y-2">
            <div className="h-1.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_8%,transparent)] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-xs text-muted tabular-nums">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
