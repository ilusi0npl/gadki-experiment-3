# 📱 Responsive Design Strategy

## Breakpoints

### Definicja Breakpointów

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;    /* Small tablets portrait */
--breakpoint-md: 768px;    /* Tablets portrait */
--breakpoint-lg: 1024px;   /* Tablets landscape / Small laptops */
--breakpoint-xl: 1280px;   /* Laptops */
--breakpoint-2xl: 1728px;  /* Desktop (design width) */
```

### Urządzenia Docelowe

| Breakpoint | Szerokość | Urządzenia | Layout |
|------------|-----------|------------|--------|
| Mobile | < 640px | iPhone, Android phones | Single column, stack |
| Small Tablet | 640-767px | iPad Mini portrait | 1-2 columns |
| Tablet | 768-1023px | iPad portrait | 2-3 columns |
| Laptop | 1024-1279px | MacBook Air, small laptops | 3-4 columns |
| Desktop | 1280-1727px | Standard monitors | 4+ columns |
| Large Desktop | ≥ 1728px | Large monitors, 4K | Max-width 1728px |

---

## Media Queries

### Mobile First Syntax

```css
/* Base styles - Mobile */
.element {
  width: 100%;
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    width: 50%;
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
    padding: 40px;
  }
}
```

### JavaScript Hook

```javascript
// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Usage
const isMobile = useMediaQuery('(max-width: 768px)');
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

---

## Sekcja po Sekcji - Responsive Breakdown

### 1. Header

#### Desktop (≥ 1024px)
```
[Logo]  Dla dzieci  Dla rodziców  Dla edukatorów  FAQ  [Logowanie]
```

#### Tablet (768-1023px)
```
[Logo]  Dzieci  Rodzice  Edukatorzy  FAQ  [☰]
```
- Skrócone labels
- Login button → hamburger

#### Mobile (< 768px)
```
[Logo]                                    [☰]
```
- Logo po lewej
- Hamburger menu po prawej
- Full-screen menu overlay

**Styles**:
```css
/* Desktop */
.nav {
  display: flex;
  gap: 32px;
}

.navLink {
  font-size: 16px;
}

.mobileMenuToggle {
  display: none;
}

/* Tablet */
@media (max-width: 1023px) {
  .navLink {
    font-size: 14px;
  }

  .loginButton {
    display: none;
  }

  .mobileMenuToggle {
    display: block;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .nav {
    display: none;
  }
}
```

---

### 2. Hero Section

#### Desktop (≥ 1024px)
- 5 floating avatars (absolute positioned)
- Large logo/heading
- Video player 1180px width
- Dekoracyjne wektory visible

#### Tablet (768-1023px)
- Avatary zmniejszone (120px → 100px)
- Adjusted positions
- Video player 100% width (max 800px)
- Heading font-size reduced

#### Mobile (< 768px)
- Avatary w row/grid na top
- No floating/absolute positioning
- Stack layout
- Video player full width
- Smaller headings

**Layout Comparison**:
```css
/* Desktop */
.heroAvatars {
  position: absolute;
  /* Specific positions dla każdego */
}

.heroTitle {
  font-size: 44px;
}

.videoPlayer {
  width: 1180px;
  height: 622px;
}

/* Tablet */
@media (max-width: 1023px) {
  .heroAvatars {
    position: relative;
  }

  .heroTitle {
    font-size: 36px;
  }

  .videoPlayer {
    width: 100%;
    max-width: 800px;
    height: 450px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .heroAvatars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    position: static;
  }

  .heroTitle {
    font-size: 28px;
    padding: 0 24px;
  }

  .videoPlayer {
    width: 100%;
    height: 300px;
  }
}
```

---

### 3. Intro Section

#### Desktop (≥ 1024px)
```
        [Avatar 180px]

        Proste rozmowy
        na ważne tematy

   Gadki to rozmowy... (480px width)

   Dzieci dowiedzą się... (480px width)

       [O programie]
```

#### Mobile (< 768px)
```
  [Avatar 120px]

  Proste rozmowy
  na ważne tematy

  Gadki to rozmowy...
  (full width - 24px padding)

  Dzieci dowiedzą się...

  [O programie]
```

**Styles**:
```css
/* Desktop */
.introSection {
  max-width: 655px;
  margin: 0 auto;
  text-align: center;
}

.introAvatar {
  width: 180px;
  height: 180px;
}

.introHeading {
  font-size: 96px;
}

.introText {
  width: 480px;
  margin: 0 auto;
}

/* Mobile */
@media (max-width: 767px) {
  .introSection {
    padding: 0 24px;
  }

  .introAvatar {
    width: 120px;
    height: 120px;
  }

  .introHeading {
    font-size: 48px;
  }

  .introText {
    width: 100%;
  }
}
```

---

### 4. Zasady GADKI Section

#### Desktop (≥ 1024px)
```
5 kart w row z overlappingiem i rotacją
[G] [A] [D] [K] [I]
```

#### Tablet (768-1023px)
```
3 karty na top row
[G] [A] [D]

2 karty na bottom row
   [K] [I]
```

#### Mobile (< 768px)
```
Stack - jedna pod drugą
BEZ rotacji

[G]
[A]
[D]
[K]
[I]
```

**Styles**:
```css
/* Desktop */
.gadkiRules {
  display: flex;
  gap: -20px; /* Negative gap dla overlapping */
  justify-content: center;
}

.gadkiCard {
  width: 380px;
  height: 480px;
  transform: rotate(var(--rotation));
}

/* Tablet */
@media (max-width: 1023px) {
  .gadkiRules {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
  }

  .gadkiCard {
    width: 100%;
    max-width: 280px;
    height: 380px;
    transform: rotate(0); /* Brak rotacji na tablet */
  }

  .gadkiCard:nth-child(4),
  .gadkiCard:nth-child(5) {
    grid-column: span 1;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .gadkiRules {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 24px;
  }

  .gadkiCard {
    width: 100%;
    height: 320px;
    transform: none;
  }
}
```

---

### 5. Materiały Section

#### Desktop (≥ 1024px)
```
3 karty w row
[Dla dzieci] [Dla rodziców] [Dla edukatorów]
```

#### Tablet (768-1023px)
```
3 karty w row (smaller)
[Dzieci] [Rodzice] [Edukatorzy]
```

#### Mobile (< 768px)
```
Stack
[Dla dzieci]
[Dla rodziców]
[Dla edukatorów]
```

**Styles**:
```css
/* Desktop */
.materialsGrid {
  display: grid;
  grid-template-columns: repeat(3, 380px);
  gap: 20px;
  justify-content: center;
}

/* Tablet */
@media (max-width: 1023px) {
  .materialsGrid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .materialsGrid {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0 24px;
  }
}
```

---

### 6. O Nas Section

**Same layout across devices** - już centered i single column

**Styles adjustments**:
```css
/* Desktop */
.aboutSection {
  max-width: 655px;
  margin: 0 auto;
}

.aboutText {
  width: 480px;
  margin: 0 auto;
}

/* Mobile */
@media (max-width: 767px) {
  .aboutSection {
    padding: 0 24px;
  }

  .aboutText {
    width: 100%;
  }
}
```

---

### 7. FAQ Section

#### Desktop/Tablet (≥ 768px)
```
Często zadawane pytania

┌────────────────────────────────────────┐
│ 01  Jak rozmawiać z dzieckiem?      ▼ │
├────────────────────────────────────────┤
│ Answer...                              │
└────────────────────────────────────────┘

[Przejdź do FAQ]
```

#### Mobile (< 768px)
```
Często zadawane
pytania

┌──────────────────────┐
│ 01  Jak rozmawiać  ▼│
│     z dzieckiem?     │
├──────────────────────┤
│ Answer (smaller)     │
└──────────────────────┘

[Przejdź do FAQ]
```

**Styles**:
```css
/* Desktop */
.faqSection {
  max-width: 1080px;
  margin: 0 auto;
}

.faqQuestion {
  font-size: 36px;
}

.faqAnswer {
  font-size: 24px;
  max-width: 891px;
}

/* Mobile */
@media (max-width: 767px) {
  .faqSection {
    padding: 0 24px;
  }

  .faqQuestion {
    font-size: 24px;
  }

  .faqAnswer {
    font-size: 18px;
  }
}
```

---

### 8. Pomoc Section

#### Desktop (≥ 1024px)
```
[Card dla dzieci]    [Card dla rodziców]
```

#### Mobile (< 768px)
```
[Card dla dzieci]

[Card dla rodziców]
```

**Styles**:
```css
/* Desktop */
.helpCards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Mobile */
@media (max-width: 767px) {
  .helpCards {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 24px;
  }
}
```

---

### 9. Footer

#### Desktop (≥ 1024px)
```
[Logo]  Kontakt    Dla dzieci     Logowanie
        email      Dla rodziców   O programie
                   Dla edukatorów FAQ
```

#### Tablet (768-1023px)
```
[Logo]

Kontakt          Dla dzieci       Logowanie
email            Dla rodziców     O programie
```

#### Mobile (< 768px)
```
[Logo]

Kontakt
email

Dla dzieci
Dla rodziców
Dla edukatorów

Logowanie
O programie
FAQ
```

**Styles**:
```css
/* Desktop */
.footerGrid {
  display: grid;
  grid-template-columns: 177px repeat(3, 1fr);
  gap: 64px;
}

/* Tablet */
@media (max-width: 1023px) {
  .footerGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .footerLogo {
    grid-column: span 3;
    justify-self: center;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .footerGrid {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }
}
```

---

## Typography Scaling

### Fluid Typography

```css
/* Desktop baseline */
--font-size-h1: 200px;
--font-size-h2: 96px;
--font-size-h3: 48px;
--font-size-base: 24px;

/* Tablet */
@media (max-width: 1023px) {
  --font-size-h1: 120px;
  --font-size-h2: 64px;
  --font-size-h3: 36px;
  --font-size-base: 20px;
}

/* Mobile */
@media (max-width: 767px) {
  --font-size-h1: 80px;
  --font-size-h2: 48px;
  --font-size-h3: 28px;
  --font-size-base: 18px;
}
```

### Clamp Function (Modern Approach)

```css
.heading {
  font-size: clamp(48px, 5vw, 96px);
  /* Min: 48px, Preferred: 5% viewport, Max: 96px */
}

.body {
  font-size: clamp(16px, 1.5vw, 24px);
}
```

---

## Spacing Scaling

```css
/* Section padding */
--section-padding-desktop: 80px;
--section-padding-tablet: 40px;
--section-padding-mobile: 24px;

/* Section spacing (vertical gap) */
--section-spacing-desktop: 120px;
--section-spacing-tablet: 80px;
--section-spacing-mobile: 64px;

/* Container padding */
--container-padding-desktop: 40px;
--container-padding-tablet: 24px;
--container-padding-mobile: 16px;
```

---

## Images & Assets

### Responsive Images

```jsx
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet={imageDesktop}
  />
  <source
    media="(min-width: 768px)"
    srcSet={imageTablet}
  />
  <img
    src={imageMobile}
    alt="Description"
    loading="lazy"
  />
</picture>
```

### SVG Scaling

```css
.svgIcon {
  width: 100%;
  height: auto;
  max-width: 80px;
}

@media (max-width: 767px) {
  .svgIcon {
    max-width: 60px;
  }
}
```

---

## Touch Targets (Mobile)

### Minimum Size: 44px × 44px (WCAG 2.1)

```css
.button,
.link,
.interactiveElement {
  min-width: 44px;
  min-height: 44px;
  padding: 12px 24px;
}

/* Mobile spacing */
@media (max-width: 767px) {
  .button {
    padding: 16px 32px;
    font-size: 18px;
  }
}
```

---

## Container Strategy

### Max-Width Containers

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.containerSm { max-width: 640px; }
.containerMd { max-width: 768px; }
.containerLg { max-width: 1080px; }
.containerXl { max-width: 1280px; }
.container2xl { max-width: 1728px; }
```

---

## Testing Checklist

### Devices to Test

- [ ] iPhone SE (375px)
- [ ] iPhone 12/13/14 (390px)
- [ ] iPhone 12/13/14 Pro Max (428px)
- [ ] iPad Mini (768px)
- [ ] iPad Pro (1024px)
- [ ] MacBook Air (1280px)
- [ ] Desktop 1920px
- [ ] 4K Display (2560px+)

### Orientation

- [ ] Portrait mode (mobile/tablet)
- [ ] Landscape mode (mobile/tablet)

### Browsers

- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox
- [ ] Edge

---

## Best Practices

### ✅ Do's
- Use mobile-first approach
- Use relative units (rem, em, %)
- Test on real devices
- Use CSS Grid & Flexbox
- Optimize images dla różnych rozdzielczości
- Test touch interactions
- Use viewport meta tag

### ❌ Don'ts
- Nie używaj fixed pixel widths
- Nie zakładaj mouse hover na mobile
- Nie używaj small fonts (min 16px na mobile)
- Nie pomijaj testów landscape mode
- Nie używaj horizontal scroll

---

## Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
```

**Note**: `maximum-scale=5.0` (nie `1.0`) dla accessibility - pozwól userowi zoom

---

## Next Steps

1. Implement responsive styles dla każdej sekcji
2. Test na różnych urządzeniach
3. Optimize images (srcset, WebP)
4. Check accessibility (touch targets, zoom)
5. Performance audit (Lighthouse mobile score)
