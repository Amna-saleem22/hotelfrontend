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

export const FORM = {
  labelColor: 'rgba(240,235,225,0.65)',
  borderColor: 'rgba(201,169,110,0.25)',
  borderColorFocus: '#C9A96E',
  inputColor: '#F0EBE1',
  inputStyle: {
    '& .MuiOutlinedInput-root': {
      color: '#F0EBE1',
      '& fieldset': { borderColor: 'rgba(201,169,110,0.25)' },
      '&:hover fieldset': { borderColor: 'rgba(201,169,110,0.55)' },
      '&.Mui-focused fieldset': { borderColor: '#C9A96E', borderWidth: 2, boxShadow: '0 0 12px rgba(201,169,110,0.15)' },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(240,235,225,0.65)',
      '&.Mui-focused': { color: '#C9A96E' },
    },
    '& .MuiFormHelperText-root': { color: '#f44336' },
  },
};

/** Luxury gold brand palette */
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

export default {
  SPACING,
  CONTAINER,
  TYPOGRAPHY,
  BUTTON,
  FORM,
  COLORS,
};
