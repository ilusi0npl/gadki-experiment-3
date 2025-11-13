/**
 * GADKI Design System - Usage Examples
 *
 * This file demonstrates how to use the design system tokens and helpers
 * in React components
 */

import React from 'react';
import { colors, spacing, fontSizes, radius, shadows } from './tokens';
import { media, rem, rgba, clamp } from './helpers';

// ========================================
// Example 1: Using tokens directly in inline styles
// ========================================
export const ButtonExample = () => {
  return (
    <button
      style={{
        backgroundColor: colors.raspberry.default,
        color: colors.white,
        padding: `${spacing[4]} ${spacing[8]}`,
        borderRadius: radius.xl,
        fontSize: fontSizes.lg,
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Click me
    </button>
  );
};

// ========================================
// Example 2: Using helpers for rgba colors
// ========================================
export const CardExample = () => {
  return (
    <div
      style={{
        backgroundColor: colors.white,
        borderRadius: radius['2xl'],
        padding: spacing[8],
        boxShadow: shadows.md,
        // Semi-transparent border
        border: `1px solid ${rgba('raspberry', 0.2)}`,
      }}
    >
      <h3 style={{ color: colors.raspberry.default }}>Card Title</h3>
      <p style={{ color: colors.black.soft }}>Card content goes here</p>
    </div>
  );
};

// ========================================
// Example 3: Using with CSS-in-JS (styled-components/emotion)
// ========================================
export const styledComponentExample = `
import styled from 'styled-components';
import { colors, spacing, radius, media } from '@/styles/design-system';

const Container = styled.div\`
  padding: \${spacing[8]};
  background-color: \${colors.beige[2]};
  border-radius: \${radius['2xl']};

  \${media.md} {
    padding: \${spacing[12]};
  }

  \${media.lg} {
    padding: \${spacing[16]};
  }
\`;
`;

// ========================================
// Example 4: Using clamp for fluid typography
// ========================================
export const FluidTypographyExample = () => {
  return (
    <h1
      style={{
        // Font size scales from 32px to 64px between 320px and 1280px viewport
        fontSize: clamp(32, 64, 320, 1280),
        color: colors.raspberry.default,
        fontFamily: "'Happy Season', cursive",
      }}
    >
      Fluid Typography
    </h1>
  );
};

// ========================================
// Example 5: CSS Modules with tokens
// ========================================
export const cssModuleExample = `
/* component.module.css */
@import '@/styles/design-system/tokens.css';

.button {
  background-color: var(--color-raspberry);
  color: var(--color-white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-size: var(--font-size-lg);
  transition: all var(--transition-base);
}

.button:hover {
  background-color: var(--color-raspberry-dark);
  box-shadow: var(--shadow-md);
}

@media (min-width: 768px) {
  .button {
    padding: var(--spacing-6) var(--spacing-12);
    font-size: var(--font-size-xl);
  }
}
`;

// ========================================
// Example 6: Responsive spacing
// ========================================
export const ResponsiveSpacingExample = () => {
  return (
    <section
      style={{
        paddingTop: spacing[16],
        paddingBottom: spacing[16],
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2>Responsive Section</h2>
        <p>Content here</p>
      </div>
    </section>
  );
};

// ========================================
// Example 7: Using utility classes from mixins.css
// ========================================
export const utilityClassExample = `
import '@/styles/design-system/mixins.css';

function MyComponent() {
  return (
    <div className="card-base">
      <h2 className="heading-2">Title</h2>
      <p className="body-base">Content</p>
      <button className="button-base button-primary">
        Click me
      </button>
    </div>
  );
}
`;

// ========================================
// Example 8: Full component with design system
// ========================================
export const HeroSection = () => {
  return (
    <section
      style={{
        backgroundColor: colors.beige[2],
        padding: `${spacing[24]} ${spacing[8]}`,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: "'Happy Season', cursive",
            fontSize: fontSizes['9xl'],
            color: colors.raspberry.default,
            marginBottom: spacing[6],
          }}
        >
          Witaj w GADKI!
        </h1>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: fontSizes.xl,
            color: colors.black.soft,
            maxWidth: '600px',
            margin: `0 auto ${spacing[8]}`,
          }}
        >
          Kampania edukacyjna wspierająca komunikację i bliskość w rodzinie
        </p>
        <button
          style={{
            backgroundColor: colors.raspberry.default,
            color: colors.white,
            padding: `${spacing[6]} ${spacing[12]}`,
            fontSize: fontSizes.xl,
            borderRadius: radius['2xl'],
            border: 'none',
            cursor: 'pointer',
            boxShadow: shadows.lg,
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.raspberry.dark;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.raspberry.default;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Dowiedz się więcej
        </button>
      </div>
    </section>
  );
};
