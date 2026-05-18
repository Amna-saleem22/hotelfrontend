/**
 * Design System — single source of truth for spacing, typography, layout, and components.
 * Luxury gold palette — warm, premium, and sophisticated.
 */

export const SPACING = {
  unit: 8,
  sectionY: { xs: 5, sm: 7.5, md: 10 },
  sectionX: { xs: 2, md: 3 },
  sectionYCompact: { xs: 4, md: 6 },
  contentGap: 4,
  gridGap: 4,
  formFieldGap: 3,
  formSectionGap: 4,
  cardPadding: 3,
  inlineGap: 1.5,
  titleToBody: 2,
  sectionTitleBottom: 6,
};

export const CONTAINER = {
  form: 'md',
  content: 'lg',
  wide: 'xl',
};

export const TYPOGRAPHY = {
  hero: { xs: '2.5rem', md: '4rem', lg: '5rem' },
  h1: { xs: '2rem', md: '2.75rem', lg: '3rem' },
  h2: { xs: '1.75rem', md: '2.25rem', lg: '2.5rem' },
  h3: { xs: '1.5rem', md: '1.75rem', lg: '2rem' },
  h4: { xs: '1.25rem', md: '1.5rem' },
  body: { xs: '0.9375rem', md: '1rem' },
  bodySmall: '0.875rem',
  caption: '0.75rem',
  overline: { xs: '0.75rem', md: '0.875rem' },
};

export const BUTTON = {
  medium: { py: 1.25, px: 3, fontSize: '1rem' },
  large: { py: 1.5, px: 4, fontSize: '1.0625rem' },
  borderRadius: 2,
};

/** Dark mode palette (default) */
export const COLORS = {
  primary: '#C9A96E',
  primaryDark: '#A68550',
  primaryLight: '#C9A96E',
  background: '#0A0909',
  backgroundElevated: 'rgba(20,17,13,0.95)',
  surface: 'rgba(22,19,14,0.92)',
  border: 'rgba(201,169,110,0.14)',
  borderStrong: 'rgba(201,169,110,0.36)',
  text: '#F0EBE1',
  textSecondary: 'rgba(240,235,225,0.68)',
  textMuted: 'rgba(240,235,225,0.45)',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
};

/** Light mode palette */
export const LIGHT_COLORS = {
  primary: '#C9A96E',
  primaryDark: '#A68550',
  primaryLight: '#C9A96E',
  background: '#F7F4EF',
  backgroundElevated: 'rgba(255,253,249,0.97)',
  surface: 'rgba(255,253,249,0.95)',
  border: 'rgba(201,169,110,0.18)',
  borderStrong: 'rgba(201,169,110,0.4)',
  text: '#1A1612',
  textSecondary: 'rgba(26,22,18,0.65)',
  textMuted: 'rgba(26,22,18,0.42)',
  success: '#2e7d32',
  error: '#c62828',
  warning: '#e65100',
};

/** Returns the correct color palette for the current theme mode */
export function getColors(isDark = true) {
  return isDark ? COLORS : LIGHT_COLORS;
}

/** Returns theme-aware MUI TextField sx styles */
export function getFormStyle(isDark = true) {
  const textColor = isDark ? '#F0EBE1' : '#1A1612';
  const labelColor = isDark ? 'rgba(240,235,225,0.65)' : 'rgba(26,22,18,0.6)';
  const borderAlpha = isDark ? '0.22' : '0.28';
  const borderHoverAlpha = isDark ? '0.5' : '0.6';
  const inputBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,253,249,0.8)';

  return {
    '& .MuiOutlinedInput-root': {
      color: textColor,
      backgroundColor: inputBg,
      borderRadius: 2,
      '& fieldset': { borderColor: `rgba(201,169,110,${borderAlpha})` },
      '&:hover fieldset': { borderColor: `rgba(201,169,110,${borderHoverAlpha})` },
      '&.Mui-focused fieldset': {
        borderColor: '#C9A96E',
        borderWidth: 2,
        boxShadow: `0 0 16px rgba(201,169,110,${isDark ? '0.2' : '0.14'})`,
      },
    },
    '& .MuiInputLabel-root': {
      color: labelColor,
      '&.Mui-focused': { color: '#C9A96E' },
    },
    '& .MuiFormHelperText-root': { color: isDark ? '#f44336' : '#c62828' },
  };
}

/** Legacy dark-only form style (backward compat) */
export const FORM = {
  labelColor: 'rgba(240,235,225,0.65)',
  borderColor: 'rgba(201,169,110,0.25)',
  borderColorFocus: '#C9A96E',
  inputColor: '#F0EBE1',
  inputStyle: getFormStyle(true),
};

const designSystem = { SPACING, CONTAINER, TYPOGRAPHY, BUTTON, FORM, COLORS, LIGHT_COLORS };
export default designSystem;
