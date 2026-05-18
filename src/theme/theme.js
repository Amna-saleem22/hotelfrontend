import { createTheme } from '@mui/material/styles';
import { SPACING, CONTAINER, TYPOGRAPHY, BUTTON, COLORS } from './designSystem';

const SERIF = '"Playfair Display", Georgia, "Times New Roman", serif';
const SANS = '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: COLORS.primary,
      light: '#DFC085',
      dark: COLORS.primaryDark,
    },
    background: {
      default: COLORS.background,
      paper: COLORS.backgroundElevated,
    },
    text: {
      primary: COLORS.text,
      secondary: COLORS.textSecondary,
    },
  },
  spacing: SPACING.unit,
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: SANS,
    h1: {
      fontFamily: SERIF,
      fontSize: TYPOGRAPHY.h1.xs,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: SERIF,
      fontSize: TYPOGRAPHY.h2.xs,
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: SERIF,
      fontSize: TYPOGRAPHY.h3.xs,
      fontWeight: 600,
      lineHeight: 1.28,
    },
    h4: {
      fontFamily: SERIF,
      fontSize: TYPOGRAPHY.h4.xs,
      fontWeight: 600,
    },
    h5: {
      fontFamily: SANS,
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontFamily: SANS,
      fontSize: '1.125rem',
      fontWeight: 600,
    },
    body1: { fontFamily: SANS, fontSize: TYPOGRAPHY.body.xs, lineHeight: 1.7 },
    body2: { fontFamily: SANS, fontSize: TYPOGRAPHY.bodySmall, lineHeight: 1.65 },
    caption: { fontFamily: SANS, fontSize: TYPOGRAPHY.caption },
    overline: { fontFamily: SANS, letterSpacing: '0.12em', fontWeight: 500 },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
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
        sizeLarge: { paddingTop: 12, paddingBottom: 12, paddingLeft: 32, paddingRight: 32, fontSize: BUTTON.large.fontSize },
        contained: {
          boxShadow: '0 4px 16px rgba(201,169,110,0.2)',
          '&:hover': {
            boxShadow: '0 8px 28px rgba(201,169,110,0.3)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 12 },
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined', fullWidth: true },
    },
    MuiGrid: {
      defaultProps: { spacing: SPACING.gridGap },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: SANS,
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        iconFilled: { color: '#C9A96E' },
        iconEmpty: { color: 'rgba(201,169,110,0.3)' },
      },
    },
  },
});

theme.designSystem = {
  SPACING,
  CONTAINER,
  TYPOGRAPHY,
  BUTTON,
  COLORS,
};

export default theme;
