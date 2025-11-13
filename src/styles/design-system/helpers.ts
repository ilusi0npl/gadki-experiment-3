/**
 * GADKI Design System - TypeScript Helpers
 *
 * Utility functions for working with design tokens in TypeScript/React
 */

import { breakpoints, spacing, colors } from './tokens';

/**
 * Media query helpers for responsive design
 */
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;

/**
 * Convert spacing token to rem value
 * @example
 * rem(4) // returns '1rem'
 */
export const rem = (spacingKey: keyof typeof spacing): string => {
  return spacing[spacingKey];
};

/**
 * Create RGBA color from RGB values
 * @example
 * rgba('raspberry', 0.5) // returns 'rgba(232, 63, 75, 0.5)'
 */
export const rgba = (colorName: string, opacity: number): string => {
  const rgbMap: Record<string, string> = {
    raspberry: '232, 63, 75',
    'raspberry-dark': '182, 25, 25',
    teal: '10, 85, 86',
    'teal-light': '7, 151, 167',
    blue: '39, 52, 136',
    'blue-light': '13, 79, 158',
    yellow: '241, 197, 0',
    'yellow-light': '250, 234, 39',
    orange: '239, 119, 27',
    'beige-2': '239, 238, 232',
    white: '255, 255, 255',
    'off-white': '248, 248, 248',
    'gray-light': '229, 229, 229',
    gray: '217, 217, 217',
    black: '0, 0, 0',
    'black-soft': '30, 30, 30',
  };

  const rgb = rgbMap[colorName];
  if (!rgb) {
    console.warn(`Color "${colorName}" not found in rgba helper`);
    return `rgba(0, 0, 0, ${opacity})`;
  }

  return `rgba(${rgb}, ${opacity})`;
};

/**
 * CSS-in-JS helper for creating responsive styles
 * @example
 * const styles = {
 *   fontSize: responsive({
 *     base: '16px',
 *     md: '20px',
 *     lg: '24px',
 *   }),
 * };
 */
export const responsive = (values: {
  base?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}): Record<string, string> => {
  const styles: Record<string, string> = {};

  if (values.base) styles['@media (min-width: 0)'] = values.base;
  if (values.sm) styles[media.sm] = values.sm;
  if (values.md) styles[media.md] = values.md;
  if (values.lg) styles[media.lg] = values.lg;
  if (values.xl) styles[media.xl] = values.xl;
  if (values['2xl']) styles[media['2xl']] = values['2xl'];

  return styles;
};

/**
 * Clamp builder for fluid typography
 * @example
 * clamp(16, 24, 320, 1280) // returns 'clamp(1rem, calc(1rem + 0.625vw), 1.5rem)'
 */
export const clamp = (
  minPx: number,
  maxPx: number,
  minViewport: number = 320,
  maxViewport: number = 1280
): string => {
  const minRem = minPx / 16;
  const maxRem = maxPx / 16;
  const slope = (maxPx - minPx) / (maxViewport - minViewport);
  const yAxisIntersection = -minViewport * slope + minPx;

  return `clamp(${minRem}rem, ${yAxisIntersection / 16}rem + ${slope * 100}vw, ${maxRem}rem)`;
};

/**
 * Get CSS variable value
 * @example
 * getCSSVar('--color-raspberry') // returns the computed value
 */
export const getCSSVar = (varName: string): string => {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
};

/**
 * Set CSS variable value
 * @example
 * setCSSVar('--custom-color', '#ff0000')
 */
export const setCSSVar = (varName: string, value: string): void => {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(varName, value);
};

/**
 * Check if viewport matches breakpoint
 * @example
 * if (matchesBreakpoint('md')) {
 *   // viewport is >= 768px
 * }
 */
export const matchesBreakpoint = (breakpoint: keyof typeof breakpoints): boolean => {
  if (typeof window === 'undefined') return false;
  const bp = parseInt(breakpoints[breakpoint]);
  return window.matchMedia(`(min-width: ${bp}px)`).matches;
};

/**
 * Hook-like function to watch breakpoint changes
 * @example
 * const unsubscribe = watchBreakpoint('md', (matches) => {
 *   console.log('md breakpoint matches:', matches);
 * });
 */
export const watchBreakpoint = (
  breakpoint: keyof typeof breakpoints,
  callback: (matches: boolean) => void
): (() => void) => {
  if (typeof window === 'undefined') return () => {};

  const bp = parseInt(breakpoints[breakpoint]);
  const mediaQuery = window.matchMedia(`(min-width: ${bp}px)`);

  const handler = (e: MediaQueryListEvent | MediaQueryList) => {
    callback(e.matches);
  };

  // Initial call
  handler(mediaQuery);

  // Listen for changes
  mediaQuery.addEventListener('change', handler);

  // Return cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handler);
  };
};

/**
 * Convert hex to RGB values
 * @example
 * hexToRgb('#e83f4b') // returns { r: 232, g: 63, b: 75 }
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Get contrasting text color (black or white) based on background
 * @example
 * getContrastColor('#e83f4b') // returns '#ffffff'
 */
export const getContrastColor = (hexColor: string): string => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return '#000000';

  // Calculate relative luminance
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
};

/**
 * Spacing multiplier helper
 * @example
 * spacingMultiple(4, 2) // returns '2rem' (16px * 2 = 32px)
 */
export const spacingMultiple = (baseKey: keyof typeof spacing, multiplier: number): string => {
  const baseValue = parseFloat(spacing[baseKey]);
  return `${baseValue * multiplier}rem`;
};
