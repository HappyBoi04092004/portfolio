'use client';

import React from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-3 mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-widest', align === 'center' && 'justify-center')}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#c770f0] animate-pulse" />
        <span>{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.18]">
        {title}
      </h2>

      {description ? (
        <p className="text-muted text-base md:text-lg leading-relaxed font-normal pt-1">
          {description}
        </p>
      ) : null}
    </div>
  );
}
