'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const storedTheme = window.localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  const isDark = theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', theme);
  }, [isDark, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="ring-brand border-default bg-surface text-foreground hover:bg-surface-soft shadow-card inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition cursor-pointer"
    >
      <span aria-hidden="true">{isDark ? '☀︎' : '☾'}</span>
    </button>
  );
}
