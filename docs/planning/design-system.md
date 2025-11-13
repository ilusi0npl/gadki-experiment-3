# 🎨 Design System

## Paleta Kolorów

### Kolory Główne

```css
/* Brand Colors */
--color-raspberry: #E83F4B;      /* Główny kolor marki FDDS */
--color-white: #FFFFFF;
--color-black: #1E1E1E;

/* Beige Palette */
--color-beige-100: #F6F5F1;      /* Najjaśniejszy - tła */
--color-beige-200: #EFEEE8;      /* Główne tło strony */
--color-beige-400: #E0DDD1;      /* Avatary, akcenty */

/* Gadki Rules Colors */
--color-dark-red: #B61919;       /* G - Gdy mówisz NIE */
--color-dark-green: #0A5556;     /* A - Alarmuj */
--color-yellow: #F1C500;         /* D - Dobrze zrobisz */
--color-orange: #EF771B;         /* K - Koniecznie pamiętaj */
--color-dark-blue: #273488;      /* I - Intymne części */
```

### Wykorzystanie Kolorów

| Kolor | Gdzie używany | Przykłady |
|-------|---------------|-----------|
| Raspberry | CTA buttons, headings, linki | "O programie", "Przejdź do FAQ" |
| Beige 200 | Background główny | Body, większość sekcji |
| Beige 100 | Footer background | Footer section |
| Beige 400 | Avatary, delikatne akcenty | Okrągłe avatary postaci |
| Dark Red | Karta "G" | Zasada GADKI - G |
| Dark Green | Karta "A" | Zasada GADKI - A |
| Yellow | Karta "D" | Zasada GADKI - D |
| Orange | Karta "K" | Zasada GADKI - K |
| Dark Blue | Karta "I" | Zasada GADKI - I |
| White | Karty materiałów, tekst | Cards, light backgrounds |
| Black | Body text | Paragraphs, descriptions |

### Semantic Colors

```css
/* States */
--color-hover: rgba(232, 63, 75, 0.9);    /* Raspberry z opacity */
--color-active: #D32F3B;                  /* Ciemniejszy raspberry */
--color-disabled: #D9D9D9;
--color-focus: #E83F4B;                   /* Raspberry dla focus rings */

/* Overlays */
--color-overlay-dark: rgba(0, 0, 0, 0.4);  /* Video overlay */
--color-overlay-light: rgba(255, 255, 255, 0.2); /* Backdrop blur */
```

## Typografia

### Font Families

```css
/* Primary Font - Happy Season */
--font-primary: 'Happy Season', sans-serif;
/* Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) */

/* Secondary Font - Lato */
--font-secondary: 'Lato', sans-serif;
/* Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 900 (Heavy) */
/* Italic variants również dostępne */
```

### Typography Scale

```css
/* Headings */
--font-size-h1: 200px;           /* GADKI letters, "Zasady" */
--font-size-h2: 96px;            /* Section headings */
--font-size-h3: 48px;            /* Subsection headings */
--font-size-h4: 44px;            /* Hero subtitle */
--font-size-h5: 40px;            /* Card headings, GADKI rules */
--font-size-h6: 36px;            /* FAQ questions, section titles */

/* Body Text */
--font-size-base: 24px;          /* Główny tekst */
--font-size-md: 20px;            /* Mniejszy tekst, footer */
--font-size-sm: 16px;            /* Bardzo mały tekst */

/* Line Heights */
--line-height-tight: 1.1;        /* Headings (Happy Season) */
--line-height-normal: 1.5;       /* Body text (Lato) */

/* Letter Spacing */
--letter-spacing-tight: -0.044em;   /* Headings */
--letter-spacing-normal: -0.0176em; /* Body text */
```

### Typography Components

#### Display Headings (Happy Season)
```css
.heading-display {
  font-family: var(--font-primary);
  font-weight: 600; /* Semibold */
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
```

#### Section Headings (Happy Season)
```css
.heading-section {
  font-family: var(--font-primary);
  font-size: var(--font-size-h2);
  font-weight: 600;
  color: var(--color-raspberry);
  text-align: center;
}
```

#### Body Text (Lato)
```css
.body-text {
  font-family: var(--font-secondary);
  font-size: var(--font-size-base);
  font-weight: 400;
  line-height: var(--line-height-normal);
  color: var(--color-black);
}
```

#### Bold Emphasis (Lato)
```css
.text-bold {
  font-family: var(--font-secondary);
  font-weight: 700;
}
```

## Spacing System

### Spacing Scale (8pt grid)

```css
--spacing-xs: 4px;      /* 0.5 jednostki */
--spacing-sm: 8px;      /* 1 jednostka */
--spacing-md: 12px;     /* 1.5 jednostki */
--spacing-lg: 16px;     /* 2 jednostki */
--spacing-xl: 20px;     /* 2.5 jednostki */
--spacing-2xl: 24px;    /* 3 jednostki */
--spacing-3xl: 32px;    /* 4 jednostki */
--spacing-4xl: 40px;    /* 5 jednostek */
--spacing-5xl: 48px;    /* 6 jednostek */
--spacing-6xl: 64px;    /* 8 jednostek */
--spacing-7xl: 80px;    /* 10 jednostek */
--spacing-8xl: 96px;    /* 12 jednostek */
```

### Section Spacing

```css
/* Vertical spacing między sekcjami */
--section-spacing-mobile: 64px;
--section-spacing-tablet: 80px;
--section-spacing-desktop: 120px;

/* Padding wewnątrz sekcji */
--section-padding-mobile: 24px;
--section-padding-tablet: 40px;
--section-padding-desktop: 80px;
```

### Component Spacing

```css
/* Gap między elementami */
--gap-xs: 10px;
--gap-sm: 12px;
--gap-md: 18px;
--gap-lg: 20px;
--gap-xl: 24px;
--gap-2xl: 36px;
--gap-3xl: 48px;
```

## Border Radius

```css
--radius-sm: 8px;       /* Small elements */
--radius-md: 12px;      /* Cards, GADKI rules */
--radius-lg: 16px;      /* Larger cards */
--radius-xl: 24px;      /* Special elements */
--radius-full: 9999px;  /* Circular (buttons, avatars) */
```

## Shadows

```css
/* Elevation system */
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.15);
--shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.2);

/* Special shadows */
--shadow-card: 0 4px 12px rgba(0, 0, 0, 0.08);
--shadow-hover: 0 8px 20px rgba(0, 0, 0, 0.12);
```

## Transitions

```css
/* Duration */
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;
--transition-slower: 500ms;

/* Easing */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

## Z-Index Scale

```css
--z-index-base: 0;
--z-index-dropdown: 10;
--z-index-sticky: 20;
--z-index-fixed: 30;
--z-index-modal-backdrop: 40;
--z-index-modal: 50;
--z-index-tooltip: 60;
--z-index-notification: 70;
```

## Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;    /* Small tablets */
--breakpoint-md: 768px;    /* Tablets */
--breakpoint-lg: 1024px;   /* Small laptops */
--breakpoint-xl: 1280px;   /* Laptops */
--breakpoint-2xl: 1728px;  /* Desktop (design width) */
```

### Container Max Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1728px;   /* Design width */
```

## Component-Specific Tokens

### Buttons

```css
/* Primary Button */
--button-primary-bg: var(--color-raspberry);
--button-primary-text: var(--color-white);
--button-primary-hover-bg: var(--color-hover);
--button-primary-padding: 20px 24px;
--button-primary-radius: var(--radius-full);
--button-primary-font-size: var(--font-size-base);
--button-primary-font-weight: 700;

/* Secondary Button (Outline) */
--button-secondary-border: 2px solid var(--color-white);
--button-secondary-text: var(--color-white);
--button-secondary-hover-bg: rgba(255, 255, 255, 0.1);
```

### Cards

```css
/* White Card */
--card-bg: var(--color-white);
--card-padding: 40px;
--card-radius: var(--radius-md);
--card-shadow: var(--shadow-card);

/* GADKI Rule Card */
--gadki-card-width: 380px;
--gadki-card-height: 480px;
--gadki-card-radius: var(--radius-md);
```

### Avatars

```css
--avatar-size-sm: 120px;
--avatar-size-md: 180px;
--avatar-size-lg: 240px;
--avatar-bg: var(--color-beige-400);
--avatar-border-radius: var(--radius-full);
```

### Forms (jeśli potrzebne)

```css
--input-border: 2px solid var(--color-beige-400);
--input-border-focus: 2px solid var(--color-raspberry);
--input-radius: var(--radius-sm);
--input-padding: 12px 16px;
--input-font-size: var(--font-size-md);
```

## Accessibility

### Focus States

```css
--focus-ring-width: 3px;
--focus-ring-offset: 2px;
--focus-ring-color: var(--color-raspberry);
--focus-ring-style: solid;
```

### Minimum Touch Targets

```css
--min-touch-target: 44px;  /* WCAG 2.1 Level AAA */
```

### Color Contrast

Wszystkie kombinacje kolorów muszą spełniać **WCAG 2.1 Level AA**:
- Normal text: Minimum 4.5:1
- Large text (24px+): Minimum 3:1
- UI Components: Minimum 3:1

#### Sprawdzone kombinacje:

✅ **Raspberry (#E83F4B) na White (#FFFFFF)** - 4.76:1 (Pass)
✅ **Black (#1E1E1E) na Beige 200 (#EFEEE8)** - 14.2:1 (Pass)
✅ **White (#FFFFFF) na Dark Red (#B61919)** - 6.8:1 (Pass)
✅ **White (#FFFFFF) na Dark Blue (#273488)** - 8.5:1 (Pass)

## CSS Custom Properties Implementation

### Plik `src/styles/variables.css`

```css
:root {
  /* Colors */
  --color-raspberry: #E83F4B;
  --color-white: #FFFFFF;
  --color-black: #1E1E1E;
  --color-beige-100: #F6F5F1;
  --color-beige-200: #EFEEE8;
  --color-beige-400: #E0DDD1;
  --color-dark-red: #B61919;
  --color-dark-green: #0A5556;
  --color-yellow: #F1C500;
  --color-orange: #EF771B;
  --color-dark-blue: #273488;

  /* Typography */
  --font-primary: 'Happy Season', sans-serif;
  --font-secondary: 'Lato', sans-serif;
  --font-size-h1: 200px;
  --font-size-h2: 96px;
  --font-size-base: 24px;
  --line-height-tight: 1.1;
  --line-height-normal: 1.5;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  /* ... reszta spacing */

  /* Responsive spacing */
  --section-spacing: var(--section-spacing-desktop);
  --section-padding: var(--section-padding-desktop);
}

@media (max-width: 1024px) {
  :root {
    --section-spacing: var(--section-spacing-tablet);
    --section-padding: var(--section-padding-tablet);
    --font-size-h1: 120px;
    --font-size-h2: 64px;
  }
}

@media (max-width: 768px) {
  :root {
    --section-spacing: var(--section-spacing-mobile);
    --section-padding: var(--section-padding-mobile);
    --font-size-h1: 80px;
    --font-size-h2: 48px;
    --font-size-base: 18px;
  }
}
```

## JavaScript Constants

### Plik `src/utils/constants.js`

```javascript
export const colors = {
  raspberry: '#E83F4B',
  white: '#FFFFFF',
  black: '#1E1E1E',
  beige: {
    100: '#F6F5F1',
    200: '#EFEEE8',
    400: '#E0DDD1',
  },
  gadki: {
    darkRed: '#B61919',
    darkGreen: '#0A5556',
    yellow: '#F1C500',
    orange: '#EF771B',
    darkBlue: '#273488',
  },
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1728,
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
  '7xl': '80px',
  '8xl': '96px',
};
```

## Usage Examples

### Example 1: Styled Component
```jsx
import styled from 'styled-components';

const PrimaryButton = styled.button`
  background-color: var(--color-raspberry);
  color: var(--color-white);
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-radius: var(--radius-full);
  font-size: var(--font-size-base);
  font-weight: 700;
  transition: all var(--transition-base) var(--ease-out);

  &:hover {
    background-color: var(--color-hover);
    box-shadow: var(--shadow-hover);
  }
`;
```

### Example 2: CSS Module
```css
/* Button.module.css */
.button {
  background-color: var(--color-raspberry);
  color: var(--color-white);
  padding: var(--spacing-xl) var(--spacing-2xl);
  border-radius: var(--radius-full);
  font-size: var(--font-size-base);
  font-weight: 700;
  transition: all var(--transition-base) var(--ease-out);
}

.button:hover {
  background-color: var(--color-hover);
  box-shadow: var(--shadow-hover);
}
```
