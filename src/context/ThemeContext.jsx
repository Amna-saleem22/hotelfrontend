import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({ mode: 'dark', toggleMode: () => {}, isDark: true });

export function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('luxury-theme-mode') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleMode = () => {
    setMode(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('luxury-theme-mode', next); } catch {}
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    document.body.style.transition = 'background-color 0.35s ease, color 0.35s ease';
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, isDark: mode === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeMode() {
  return useContext(ThemeContext);
}
