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
        'max-w-2xl space-y-4 mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] border border-[color-mix(in_srgb,var(--accent)_28%,transparent)]', align === 'center' && 'justify-center')}>
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] leading-[1.15]">
        {title}
      </h2>

      {description ? (
        <p className="text-muted text-base md:text-lg leading-relaxed font-normal">
          {description}
        </p>
      ) : null}
    </div>
  );
}
