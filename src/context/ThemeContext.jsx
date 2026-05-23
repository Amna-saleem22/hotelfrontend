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
    const root = document.documentElement;
    root.setAttribute('data-theme', mode);

    const smoothCSS = 'background-color 0.38s cubic-bezier(0.4,0,0.2,1), color 0.38s cubic-bezier(0.4,0,0.2,1), border-color 0.38s cubic-bezier(0.4,0,0.2,1), box-shadow 0.38s cubic-bezier(0.4,0,0.2,1)';

    root.style.transition = smoothCSS;
    document.body.style.transition = smoothCSS;

    const layoutEls = document.querySelectorAll(
      'header, footer, nav, main, section, article, aside, [class*="luxury-"], [class*="lx-"], [class*="premium-"], [class*="feedback-"]'
    );
    layoutEls.forEach(el => { el.style.transition = smoothCSS; });
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
