/**
 * GADKI Design System - Design Tokens (TypeScript)
 * Generated from Figma design file via fig4ai
 *
 * Import and use these tokens in your React components
 */

export const colors = {
  // Primary Brand Colors
  raspberry: {
    default: '#e83f4b',
    dark: '#b61919',
  },

  // Secondary Colors
  teal: {
    default: '#0a5556',
    light: '#0797a7',
  },

  blue: {
    default: '#273488',
    light: '#0d4f9e',
  },

  yellow: {
    default: '#f1c500',
    light: '#faea27',
  },

  orange: {
    default: '#ef771b',
  },

  // Neutrals - Beige
  beige: {
    1: '#f6f5f1',
    2: '#efeee8',
    3: '#e0ddd1',
    4: '#d8d5c6',
  },

  // Neutrals - Grays
  white: '#ffffff',
  offWhite: '#f8f8f8',
  gray: {
    light: '#e5e5e5',
    default: '#d9d9d9',
  },
  black: {
    default: '#000000',
    soft: '#1e1e1e',
  },
} as const;

export const fonts = {
  primary: "'Happy Season', cursive",
  secondary: "'Lato', sans-serif",
} as const;

export const fontSizes = {
  xs: '16px',
  sm: '20px',
  md: '22px',
  lg: '24px',
  xl: '26px',
  '2xl': '32px',
  '3xl': '36px',
  '4xl': '40px',
  '5xl': '44px',
  '6xl': '48px',
  '7xl': '52px',
  '8xl': '56px',
  '9xl': '64px',
  '10xl': '82px',
  '11xl': '96px',
  '12xl': '120px',
  '13xl': '200px',
} as const;

export const fontWeights = {
  regular: 400,
  bold: 700,
  heavy: 800,
} as const;

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

export const radius = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  '3xl': '2rem',   // 32px
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1728px',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radius,
  shadows,
  transitions,
  breakpoints,
  zIndex,
} as const;

// Type helpers
export type Color = typeof colors;
export type FontSize = keyof typeof fontSizes;
export type Spacing = keyof typeof spacing;
export type Radius = keyof typeof radius;
export type Breakpoint = keyof typeof breakpoints;
