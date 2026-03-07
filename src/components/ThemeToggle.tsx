"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark/light mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15 light:border-black/20 light:bg-black/5 light:text-black"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
