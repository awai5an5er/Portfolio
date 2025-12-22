"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => "dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial: Theme = stored ?? "dark";
    // Apply initial theme without triggering a second render when possible
    if (initial !== theme) {
      setTheme(initial);
    }
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm backdrop-blur transition hover:border-white/30 hover:bg-black/30 dark:border-slate-300/40 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/40 cursor-pointer"
    >
      <span
        className="flex h-4 w-4 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-violet-400 text-[10px]"
      >
        {isDark ? "☾" : "☼"}
      </span>
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"} mode</span>
    </button>
  );
}


