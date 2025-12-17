"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

// Subscribe to nothing - just need initial value
const emptySubscribe = () => () => {};

// Check if we're mounted (client-side)
function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// Custom hook to safely access localStorage
function useThemeStore() {
  const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);
    return () => window.removeEventListener("storage", callback);
  };
  
  const getSnapshot = () => {
    return localStorage.getItem("theme") || "system";
  };
  
  const getServerSnapshot = () => "system";
  
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) as Theme;
}

export function ThemeToggle() {
  const mounted = useMounted();
  const storedTheme = useThemeStore();

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    
    if (newTheme === "system") {
      root.classList.remove("light", "dark");
    } else if (newTheme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, []);

  // Apply theme when mounted
  if (mounted) {
    applyTheme(storedTheme);
  }

  const cycleTheme = () => {
    const themes: Theme[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(storedTheme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
    // Trigger storage event for sync
    window.dispatchEvent(new Event("storage"));
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 min-w-[44px] min-h-[44px] rounded-lg hover:bg-muted transition-colors flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const getIcon = () => {
    switch (storedTheme) {
      case "light":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "dark":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const getLabel = () => {
    switch (storedTheme) {
      case "light": return "Light mode (click for dark)";
      case "dark": return "Dark mode (click for system)";
      default: return "System theme (click for light)";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 min-w-[44px] min-h-[44px] rounded-lg hover:bg-muted transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </button>
  );
}

