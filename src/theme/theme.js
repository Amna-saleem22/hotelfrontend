import { createTheme } from '@mui/material/styles';
import { SPACING, CONTAINER, TYPOGRAPHY, BUTTON } from './designSystem';

const SERIF = '"Playfair Display", Georgia, "Times New Roman", serif';
const SANS  = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const GOLD       = '#C9A96E';
const GOLD_LIGHT = '#DFC085';
const GOLD_DARK  = '#A68550';

const DARK = {
  bg:         '#0A0909',
  bgElevated: 'rgba(20,17,13,0.97)',
  surface:    'rgba(22,19,14,0.94)',
  text:       '#F0EBE1',
  textSec:    'rgba(240,235,225,0.68)',
};

const LIGHT = {
  bg:         '#F7F4EF',
  bgElevated: '#FFFDF8',
  surface:    'rgba(255,253,249,0.97)',
  text:       '#1A1612',
  textSec:    'rgba(26,22,18,0.65)',
};

const EASE = 'background-color 0.35s ease, color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease';

const sharedTypography = {
  fontFamily: SANS,
  h1: { fontFamily: SERIF, fontSize: TYPOGRAPHY.h1.xs, fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.01em' },
  h2: { fontFamily: SERIF, fontSize: TYPOGRAPHY.h2.xs, fontWeight: 700, lineHeight: 1.2,  letterSpacing: '-0.01em' },
  h3: { fontFamily: SERIF, fontSize: TYPOGRAPHY.h3.xs, fontWeight: 600, lineHeight: 1.28 },
  h4: { fontFamily: SERIF, fontSize: TYPOGRAPHY.h4.xs, fontWeight: 600 },
  h5: { fontFamily: SANS,  fontSize: '1.25rem',        fontWeight: 600 },
  h6: { fontFamily: SANS,  fontSize: '1.125rem',       fontWeight: 600 },
  body1:    { fontFamily: SANS, fontSize: TYPOGRAPHY.body.xs,   lineHeight: 1.7  },
  body2:    { fontFamily: SANS, fontSize: TYPOGRAPHY.bodySmall, lineHeight: 1.65 },
  caption:  { fontFamily: SANS, fontSize: TYPOGRAPHY.caption },
  overline: { fontFamily: SANS, letterSpacing: '0.12em', fontWeight: 500 },
};

export function createAppTheme(mode = 'dark') {
  const isDark = mode === 'dark';
  const colors = isDark ? DARK : LIGHT;

  return createTheme({
    palette: {
      mode,
      primary:    { main: GOLD, light: GOLD_LIGHT, dark: GOLD_DARK },
      background: { default: colors.bg, paper: colors.bgElevated },
      text:       { primary: colors.text, secondary: colors.textSec },
      divider:    isDark ? 'rgba(201,169,110,0.14)' : 'rgba(201,169,110,0.2)',
    },
    spacing:    SPACING.unit,
    shape:      { borderRadius: 8 },
    typography: sharedTypography,
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 16, paddingRight: 16,
            '@media (min-width: 600px)': { paddingLeft: 24, paddingRight: 24 },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: BUTTON.borderRadius * 4,
            fontFamily: SANS,
            fontWeight: 500,
            letterSpacing: '0.03em',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          sizeMedium: { paddingTop: 10, paddingBottom: 10, paddingLeft: 24, paddingRight: 24 },
          sizeLarge:  { paddingTop: 12, paddingBottom: 12, paddingLeft: 32, paddingRight: 32, fontSize: BUTTON.large.fontSize },
          contained: {
            boxShadow: '0 4px 16px rgba(201,169,110,0.2)',
            '&:hover': { boxShadow: '0 8px 28px rgba(201,169,110,0.3)', transform: 'translateY(-1px)' },
          },
          outlined: {
            borderColor: `rgba(201,169,110,${isDark ? '0.36' : '0.42'})`,
            '&:hover': { borderColor: GOLD, backgroundColor: 'rgba(201,169,110,0.07)' },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: { borderRadius: 12 },
          root:    { backgroundImage: 'none', transition: EASE },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { backgroundImage: 'none', transition: EASE },
        },
      },
      MuiTextField:    { defaultProps: { variant: 'outlined', fullWidth: true } },
      MuiGrid:         { defaultProps: { spacing: SPACING.gridGap } },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 8, fontFamily: SANS, transition: EASE },
        },
      },
      MuiRating: {
        styleOverrides: {
          iconFilled: { color: GOLD },
          iconEmpty:  { color: 'rgba(201,169,110,0.28)' },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: { transition: 'border-color 0.35s ease' },
        },
      },
      MuiAppBar: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: { backgroundImage: 'none', transition: EASE },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundImage: 'none',
            backgroundColor: isDark ? 'rgba(20,17,13,0.98)' : '#FFFDF8',
            border: `1px solid rgba(201,169,110,${isDark ? '0.18' : '0.22'})`,
            borderRadius: 16,
            backdropFilter: 'blur(20px)',
            transition: EASE,
          },
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: { fontFamily: SERIF, color: colors.text },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: { color: colors.textSec },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: SANS,
            color: colors.text,
            transition: 'background-color 0.2s ease, color 0.2s ease',
            '&:hover': { backgroundColor: 'rgba(201,169,110,0.1)', color: GOLD },
            '&.Mui-selected': {
              backgroundColor: 'rgba(201,169,110,0.14)',
              color: GOLD,
              '&:hover': { backgroundColor: 'rgba(201,169,110,0.2)' },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: { color: isDark ? 'rgba(240,235,225,0.55)' : 'rgba(26,22,18,0.5)' },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? 'rgba(240,235,225,0.62)' : 'rgba(26,22,18,0.58)',
            '&.Mui-focused': { color: GOLD },
            transition: 'color 0.25s ease',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: colors.text,
            transition: EASE,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: `rgba(201,169,110,${isDark ? '0.22' : '0.28'})`,
              transition: 'border-color 0.25s ease',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: `rgba(201,169,110,${isDark ? '0.5' : '0.55'})`,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: GOLD,
              boxShadow: `0 0 14px rgba(201,169,110,${isDark ? '0.18' : '0.12'})`,
            },
          },
          notchedOutline: {
            borderColor: `rgba(201,169,110,${isDark ? '0.22' : '0.28'})`,
          },
          input: {
            color: colors.text,
            '&::placeholder': { color: isDark ? 'rgba(240,235,225,0.35)' : 'rgba(26,22,18,0.35)' },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: isDark ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0.18)',
            color: colors.text,
            transition: EASE,
          },
          head: {
            fontWeight: 600,
            color: isDark ? 'rgba(240,235,225,0.85)' : 'rgba(26,22,18,0.85)',
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: { backgroundColor: colors.bgElevated, transition: EASE },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: { borderRadius: 10, fontFamily: SANS },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: { backgroundColor: GOLD },
          root: { borderBottom: `1px solid rgba(201,169,110,${isDark ? '0.14' : '0.2'})` },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: SANS,
            textTransform: 'none',
            letterSpacing: '0.04em',
            fontWeight: 500,
            color: isDark ? 'rgba(240,235,225,0.6)' : 'rgba(26,22,18,0.6)',
            transition: 'color 0.25s ease',
            '&.Mui-selected': { color: GOLD },
            '&:hover': { color: GOLD, opacity: 1 },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: isDark ? 'rgba(18,15,10,0.96)' : 'rgba(26,22,18,0.93)',
            color: '#F0EBE1',
            border: `1px solid rgba(201,169,110,${isDark ? '0.25' : '0.3'})`,
            fontSize: '0.78rem',
            fontFamily: SANS,
            borderRadius: 8,
          },
          arrow: { color: isDark ? 'rgba(18,15,10,0.96)' : 'rgba(26,22,18,0.93)' },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.Mui-checked': { color: GOLD },
            '&.Mui-checked + .MuiSwitch-track': { backgroundColor: GOLD },
          },
        },
      },
    },
  });
}

const theme = createAppTheme('dark');
theme.designSystem = { SPACING, CONTAINER, TYPOGRAPHY, BUTTON };
export default theme;
