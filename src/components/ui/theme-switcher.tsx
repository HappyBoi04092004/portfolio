'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initial = saved || 'dark';
    setTheme(initial);
    document.documentElement.classList.toggle('light', initial === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Đổi giao diện sáng/tối"
      className={cn(
        'p-2.5 rounded-lg border border-[var(--border)] text-muted',
        'hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-colors'
      )}
    >
      {!mounted ? (
        <span className="block w-5 h-5" />
      ) : theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
