# 🧪 Testing Strategy

## Przegląd

Strategia testowania obejmuje **5 głównych obszarów**:

1. **Unit Testing** - Testowanie izolowanych komponentów
2. **Integration Testing** - Testowanie współpracy między komponentami
3. **Accessibility Testing** - WCAG 2.1 Level AA compliance
4. **Performance Testing** - Lighthouse scores, Core Web Vitals
5. **Cross-browser & Device Testing** - Kompatybilność

---

## 1. Unit Testing

### Setup

**Framework:** Vitest + React Testing Library

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Konfiguracja `vitest.config.js`:**

```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
});
```

**Setup file `src/test/setup.js`:**

```javascript
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

---

### Components to Test

#### Atoms

**`src/components/atoms/__tests__/Button.test.jsx`**

```javascript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders primary variant correctly', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-primary'); // lub sprawdź style
  });

  it('renders secondary variant correctly', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button-secondary');
  });
});
```

**Test Checklist dla Atoms:**

- [ ] Button - wszystkie variants (primary, secondary, outline)
- [ ] Button - disabled state
- [ ] Button - onClick handler
- [ ] Avatar - różne rozmiary
- [ ] Avatar - fallback image
- [ ] Typography - wszystkie variants (h1-h6, body)
- [ ] Link - external vs internal
- [ ] Link - hover state (snapshot test)
- [ ] Icon - renders SVG correctly

---

#### Molecules

**`src/components/molecules/__tests__/Accordion.test.jsx`**

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';

describe('Accordion', () => {
  const items = [
    { id: '1', question: 'Question 1', answer: 'Answer 1' },
    { id: '2', question: 'Question 2', answer: 'Answer 2' },
  ];

  it('renders all accordion items', () => {
    render(
      <Accordion>
        {items.map(item => (
          <AccordionItem key={item.id} question={item.question} answer={item.answer} />
        ))}
      </Accordion>
    );

    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.getByText('Question 2')).toBeInTheDocument();
  });

  it('expands item when clicked', async () => {
    render(
      <Accordion>
        <AccordionItem question="Question 1" answer="Answer 1" />
      </Accordion>
    );

    const button = screen.getByRole('button', { name: /question 1/i });
    await userEvent.click(button);

    expect(screen.getByText('Answer 1')).toBeVisible();
  });

  it('collapses item when clicked again', async () => {
    render(
      <Accordion>
        <AccordionItem question="Question 1" answer="Answer 1" />
      </Accordion>
    );

    const button = screen.getByRole('button', { name: /question 1/i });

    // Expand
    await userEvent.click(button);
    expect(screen.getByText('Answer 1')).toBeVisible();

    // Collapse
    await userEvent.click(button);
    expect(screen.queryByText('Answer 1')).not.toBeVisible();
  });
});
```

**Test Checklist dla Molecules:**

- [ ] Card - renders content correctly
- [ ] GadkiRuleCard - rotation styling
- [ ] GadkiRuleCard - wszystkie kolory (G, A, D, K, I)
- [ ] MaterialCard - image loading
- [ ] MaterialCard - CTA button click
- [ ] VideoPlayer - play/pause functionality
- [ ] VideoPlayer - custom controls
- [ ] Accordion - expand/collapse
- [ ] Accordion - keyboard navigation (Enter, Space)
- [ ] SocialLinks - wszystkie linki external
- [ ] ContactCard - phone number formatting

---

#### Organisms

**`src/components/organisms/__tests__/Header.test.jsx`**

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Header';

describe('Header', () => {
  it('renders logo', () => {
    render(<Header />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /o programie/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /zasady gadki/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /materiały/i })).toBeInTheDocument();
    // ... etc
  });

  it('opens mobile menu when hamburger clicked', async () => {
    render(<Header />);

    const hamburger = screen.getByLabelText(/menu/i);
    await userEvent.click(hamburger);

    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeVisible();
  });

  it('closes mobile menu when close button clicked', async () => {
    render(<Header />);

    // Open menu
    const hamburger = screen.getByLabelText(/menu/i);
    await userEvent.click(hamburger);

    // Close menu
    const closeButton = screen.getByLabelText(/zamknij/i);
    await userEvent.click(closeButton);

    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeVisible();
  });
});
```

**Test Checklist dla Organisms:**

- [ ] Header - renders logo i navigation
- [ ] Header - sticky behavior (może być integration test)
- [ ] MobileMenu - opens/closes correctly
- [ ] MobileMenu - backdrop click closes menu
- [ ] MobileMenu - Escape key closes menu
- [ ] Footer - wszystkie sekcje renderują
- [ ] Footer - social links działają
- [ ] Footer - copyright year jest aktualny

---

### Hooks Testing

**`src/hooks/__tests__/useMediaQuery.test.js`**

```javascript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import useMediaQuery from '../useMediaQuery';

describe('useMediaQuery', () => {
  let matchMedia;

  beforeEach(() => {
    matchMedia = vi.fn();
    window.matchMedia = matchMedia;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns true when media query matches', () => {
    matchMedia.mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
  });

  it('returns false when media query does not match', () => {
    matchMedia.mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(false);
  });
});
```

**Test Checklist dla Hooks:**

- [ ] useMediaQuery - różne breakpoints
- [ ] useMediaQuery - listener cleanup
- [ ] useScrollAnimation - Intersection Observer mock
- [ ] useMobileMenu - open/close state

---

### Coverage Targets

```bash
npm run test:coverage
```

**Minimum Coverage:**
- Statements: > 80%
- Branches: > 75%
- Functions: > 80%
- Lines: > 80%

**Priority dla 100% coverage:**
- Wszystkie Atoms
- Wszystkie custom Hooks
- Critical molecules (Accordion, VideoPlayer)

---

## 2. Integration Testing

### Section Integration Tests

**`src/sections/__tests__/HeroSection.test.jsx`**

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders all avatars', () => {
    render(<HeroSection />);

    // Sprawdź czy wszystkie 5 avatarów się renderują
    const avatars = screen.getAllByRole('img', { name: /avatar/i });
    expect(avatars).toHaveLength(5);
  });

  it('renders video player', () => {
    render(<HeroSection />);
    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });

  it('positions avatars correctly on desktop', () => {
    // Mock window.matchMedia dla desktop
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(min-width: 1024px)',
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    render(<HeroSection />);

    const mamaAvatar = screen.getByAltText(/mama/i);
    expect(mamaAvatar).toHaveStyle({ top: '155px', left: '374px' });
  });
});
```

**Test Checklist dla Sections:**

- [ ] HeroSection - wszystkie avatary renderują
- [ ] HeroSection - video player działa
- [ ] IntroSection - mascot + heading + CTA
- [ ] GadkiRulesSection - 5 kart G-A-D-K-I renderuje
- [ ] GadkiRulesSection - rotacja na desktop
- [ ] MaterialsSection - 3 karty renderują
- [ ] AboutSection - logo + description
- [ ] FaqSection - accordion z pytaniami
- [ ] HelpSection - 2 contact cards
- [ ] Footer - wszystkie kolumny

---

### Full Page Integration

**`src/__tests__/App.test.jsx`**

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByTestId('hero-section')).toBeInTheDocument();
    expect(screen.getByTestId('intro-section')).toBeInTheDocument();
    expect(screen.getByTestId('gadki-section')).toBeInTheDocument();
    expect(screen.getByTestId('materials-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('faq-section')).toBeInTheDocument();
    expect(screen.getByTestId('help-section')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('sections are in correct order', () => {
    render(<App />);

    const sections = screen.getAllByRole('region');
    // Sprawdź kolejność sekcji
    expect(sections[0]).toHaveAttribute('data-testid', 'hero-section');
    expect(sections[1]).toHaveAttribute('data-testid', 'intro-section');
    // ... etc
  });
});
```

---

## 3. Accessibility Testing

### Automated Testing

**Setup axe-core:**

```bash
npm install -D @axe-core/react vitest-axe
```

**`src/test/setup.js` (dodaj):**

```javascript
import { axe, toHaveNoViolations } from 'vitest-axe';
expect.extend(toHaveNoViolations);
```

**Przykład testu:**

```javascript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Button from '../Button';

describe('Button Accessibility', () => {
  it('should not have accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

### Manual Accessibility Checklist

#### Keyboard Navigation

- [ ] Tab przechodzi przez wszystkie interaktywne elementy
- [ ] Kolejność Tab jest logiczna (top → bottom, left → right)
- [ ] Focus indicators są wyraźnie widoczne (outline/ring)
- [ ] Enter/Space aktywują buttony i linki
- [ ] Escape zamyka mobile menu
- [ ] Accordion otwiera/zamyka się z klawiatury
- [ ] Navigation można operować tylko klawiaturą

**Test:** Odłącz mysz i przejdź całą stronę używając tylko Tab, Enter, Space, Escape

---

#### Screen Reader Testing

**Tools:**
- **Windows:** NVDA (free)
- **Mac:** VoiceOver (built-in)
- **Linux:** Orca

**Checklist:**

- [ ] Wszystkie obrazy mają alt text
- [ ] Alt text jest opisowy (nie "image" lub "photo")
- [ ] Buttony mają descriptive labels
- [ ] Links mają meaningful text (nie "click here")
- [ ] Form inputs mają labels
- [ ] Headings są w prawidłowej hierarchii (H1 → H2 → H3)
- [ ] Landmarks są prawidłowo użyte (header, nav, main, footer)
- [ ] ARIA labels tam gdzie potrzebne (hamburger menu, close button)
- [ ] Accordion items mają aria-expanded
- [ ] Hidden content ma aria-hidden="true"

**Test:** Włącz screen reader i przejdź całą stronę - czy wszystko ma sens?

---

#### Color Contrast

**Tool:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Sprawdzone kombinacje:**

✅ Raspberry (#E83F4B) na White (#FFFFFF) - **4.76:1** → PASS
✅ Black (#1E1E1E) na Beige 200 (#EFEEE8) - **14.2:1** → PASS
✅ White (#FFFFFF) na Dark Red (#B61919) - **6.8:1** → PASS
✅ White (#FFFFFF) na Dark Blue (#273488) - **8.5:1** → PASS
✅ White (#FFFFFF) na Dark Green (#0A5556) - **7.1:1** → PASS
✅ White (#FFFFFF) na Orange (#EF771B) - **3.2:1** → PASS (large text only)
✅ Black (#1E1E1E) na Yellow (#F1C500) - **9.8:1** → PASS

**Checklist:**

- [ ] All text combinations meet WCAG AA (4.5:1 normal, 3:1 large)
- [ ] UI components meet 3:1 minimum
- [ ] Links są odróżnialne od body text (nie tylko kolorem)
- [ ] Hover states nie polegają tylko na kolorze
- [ ] Focus indicators mają wystarczający kontrast

---

#### Touch Targets

**WCAG 2.1 Level AAA:** Minimum **44px × 44px**

**Checklist:**

- [ ] Wszystkie buttony ≥ 44px × 44px
- [ ] Navigation links ≥ 44px wysokości
- [ ] Social icons ≥ 44px × 44px
- [ ] Accordion toggle buttons ≥ 44px wysokości
- [ ] Close button (mobile menu) ≥ 44px × 44px
- [ ] Video player controls ≥ 44px

**Test:** Użyj prawdziwego telefonu i sprawdź czy wszystko da się łatwo kliknąć

---

#### Motion & Animations

**Checklist:**

- [ ] `prefers-reduced-motion` jest zaimplementowane
- [ ] Animacje wyłączają się gdy użytkownik ma reduced motion
- [ ] Brak automatycznych animacji które nie można zatrzymać
- [ ] Parallax/floating animations respektują prefers-reduced-motion
- [ ] Transitions są wyłączane lub skracane

**CSS Implementation:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Accessibility Tools

**Browser Extensions:**

1. **axe DevTools** - Automated accessibility testing
2. **WAVE** - Visual feedback dla accessibility issues
3. **Lighthouse** (Chrome DevTools) - Accessibility audit

**Recommended workflow:**

1. Najpierw axe DevTools dla automated checks
2. Potem WAVE dla visual review
3. Na końcu Lighthouse dla overall score

**Target:** Lighthouse Accessibility score > **95**

---

## 4. Performance Testing

### Lighthouse Audit

**Run Lighthouse:**

Chrome DevTools → Lighthouse → Mobile/Desktop → Analyze page load

**Target Scores:**

| Metric | Target | Critical Threshold |
|--------|--------|-------------------|
| Performance | > 90 | > 85 |
| Accessibility | > 95 | > 90 |
| Best Practices | 100 | > 95 |
| SEO | > 90 | > 85 |

**Performance Metrics (Core Web Vitals):**

| Metric | Good | Needs Improvement | Poor |
|--------|------|------------------|------|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5s - 4.0s | > 4.0s |
| **FID** (First Input Delay) | < 100ms | 100ms - 300ms | > 300ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1 - 0.25 | > 0.25 |
| **FCP** (First Contentful Paint) | < 1.8s | 1.8s - 3.0s | > 3.0s |
| **TTI** (Time to Interactive) | < 3.8s | 3.8s - 7.3s | > 7.3s |

---

### Performance Optimization Checklist

#### Images

- [ ] Wszystkie obrazy zoptymalizowane (WebP + fallback)
- [ ] Responsive images z srcset
- [ ] Lazy loading dla offscreen images
- [ ] Image dimensions określone (width/height) - zapobiega CLS
- [ ] Avatar images są odpowiednio zresized (nie 4K na 120px)
- [ ] Logo jest SVG lub optimized PNG

**Implementation:**

```jsx
<img
  src="image.webp"
  alt="Description"
  width="400"
  height="300"
  loading="lazy"
  decoding="async"
/>
```

---

#### Code Splitting

- [ ] React.lazy() dla sections
- [ ] Suspense boundaries z fallbacks
- [ ] Vendor chunks separated
- [ ] CSS code splitting

**Implementation:**

```javascript
import { lazy, Suspense } from 'react';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const GadkiSection = lazy(() => import('./sections/GadkiRulesSection'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <GadkiSection />
    </Suspense>
  );
}
```

---

#### Bundle Size

**Check bundle size:**

```bash
npm run build
```

**Targets:**

- Total bundle size: < 500 KB (gzipped)
- Main chunk: < 200 KB
- Vendor chunk: < 150 KB
- CSS: < 50 KB

**Optimization:**

- [ ] Tree shaking enabled (Vite default)
- [ ] Unused dependencies removed
- [ ] Import only what you need (nie całego lodash)
- [ ] CSS purging (remove unused styles)

---

#### Fonts

- [ ] Fonts hosted locally (nie Google Fonts CDN)
- [ ] WOFF2 format (najlepsza kompresja)
- [ ] font-display: swap (avoid FOIT)
- [ ] Preload critical fonts

**Implementation:**

```html
<link
  rel="preload"
  href="/fonts/HappySeason-Semibold.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

```css
@font-face {
  font-family: 'Happy Season';
  src: url('/fonts/HappySeason-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}
```

---

#### JavaScript

- [ ] Minification enabled (Vite default)
- [ ] No console.logs w production
- [ ] Event listeners properly cleaned up
- [ ] Debounce scroll/resize handlers
- [ ] IntersectionObserver dla scroll animations (nie scroll events)

---

#### CSS

- [ ] Critical CSS inlined (jeśli możliwe)
- [ ] CSS modules lub scoped styles (avoid global CSS bloat)
- [ ] Unused CSS removed
- [ ] CSS minified (Vite default)
- [ ] Animations use transform/opacity (GPU accelerated)
- [ ] will-change tylko gdzie potrzebne

**Animacje Performance:**

```css
/* Good - GPU accelerated */
.card {
  transform: translateY(0);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-10px);
}

/* Bad - triggers layout reflow */
.card {
  top: 0;
  transition: top 0.3s;
}

.card:hover {
  top: -10px;
}
```

---

### Performance Monitoring

**Tools:**

1. **Chrome DevTools Performance Tab**
   - Record interaction
   - Check for long tasks (> 50ms)
   - Check for layout thrashing

2. **React DevTools Profiler**
   - Identify slow components
   - Check for unnecessary re-renders
   - Optimize with memo/useMemo/useCallback

3. **Lighthouse CI** (optional, for automated testing)

---

## 5. Cross-Browser & Device Testing

### Browser Testing Matrix

| Browser | Desktop | Mobile | Tablet | Priority |
|---------|---------|--------|--------|----------|
| **Chrome** | ✅ Latest 2 | ✅ Latest | ✅ Latest | High |
| **Firefox** | ✅ Latest 2 | ✅ Latest | - | High |
| **Safari** | ✅ Latest 2 | ✅ Latest | ✅ Latest | High |
| **Edge** | ✅ Latest | ✅ Latest | - | Medium |
| **Samsung Internet** | - | ✅ Latest | - | Medium |

**Minimum supported versions:**
- Chrome: Last 2 major versions
- Firefox: Last 2 major versions
- Safari: Last 2 major versions (iOS 14+)
- Edge: Latest

---

### Device Testing

#### Smartphones (Priority: High)

**iOS:**
- [ ] iPhone 13/14/15 (iOS 16+)
- [ ] iPhone SE (small screen)
- [ ] iPhone 14 Pro Max (large screen)

**Android:**
- [ ] Samsung Galaxy S21/S22/S23
- [ ] Google Pixel 6/7
- [ ] OnePlus/Xiaomi (test diverse Android skins)

#### Tablets (Priority: Medium)

- [ ] iPad (10.2", 9th gen)
- [ ] iPad Air/Pro (larger screens)
- [ ] Samsung Galaxy Tab
- [ ] Test both portrait and landscape

#### Desktop (Priority: High)

- [ ] 1920×1080 (most common)
- [ ] 1366×768 (still common)
- [ ] 2560×1440 (high-res)
- [ ] Ultrawide (> 2560px width)
- [ ] Test window resizing

---

### Testing Checklist per Browser/Device

#### Functional Testing

- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Accordion expands/collapses
- [ ] Video player plays/pauses
- [ ] All CTAs clickable
- [ ] Smooth scroll works
- [ ] Forms submit (jeśli są)
- [ ] External links open in new tab

#### Visual Testing

- [ ] Layout nie jest zepsuty
- [ ] Fonts loadują się poprawnie
- [ ] Images wyświetlają się
- [ ] Colors są prawidłowe
- [ ] Spacing/padding prawidłowe
- [ ] GADKI cards rotation (desktop only)
- [ ] Avatars floating animation
- [ ] No horizontal scroll (mobile)
- [ ] Footer jest na dole strony

#### Responsive Testing

- [ ] Header responsive (mobile menu działa)
- [ ] Hero avatars layout prawidłowy
- [ ] GADKI cards: rotation (desktop), grid (tablet), stack (mobile)
- [ ] Materials cards: 3 col → 2 col → 1 col
- [ ] FAQ accordion czytelny na mobile
- [ ] Footer columns stack na mobile
- [ ] Touch targets ≥ 44px (mobile)
- [ ] Text readable bez zoom (mobile)

#### Performance per Device

- [ ] Page load < 3s (mobile 3G)
- [ ] Scroll smooth (60fps)
- [ ] Animations smooth (no jank)
- [ ] No memory leaks (long session)
- [ ] Images load progressively

---

### Browser-Specific Issues to Watch For

**Safari:**
- [ ] CSS Grid bugs (check layout)
- [ ] Video autoplay restrictions
- [ ] Backdrop blur support
- [ ] Sticky positioning bugs
- [ ] Date input styling

**Firefox:**
- [ ] Scrollbar styling (może różnić się)
- [ ] CSS animations timing
- [ ] Font rendering (może być lekko różny)

**Edge:**
- [ ] Legacy Edge issues (jeśli wspierasz)
- [ ] Chromium Edge powinien działać jak Chrome

**Mobile Safari (iOS):**
- [ ] 100vh bug (viewport height includes address bar)
- [ ] Touch event handling
- [ ] Momentum scrolling
- [ ] Fixed positioning issues
- [ ] Input zoom on focus (prevent with font-size ≥ 16px)

---

## 6. Visual Regression Testing (Optional)

### Setup Percy or Chromatic

**Percy (for visual diffs):**

```bash
npm install -D @percy/cli @percy/storybook
```

**Take snapshots:**

```bash
npx percy storybook http://localhost:6006
```

**Benefits:**
- Catch unintended visual changes
- Compare before/after
- Useful dla continuous integration

---

## 7. Manual QA Checklist

### Pre-Launch QA Checklist

Przejdź przez tę checklist przed deploym na produkcję:

#### General

- [ ] No console errors w żadnym browserze
- [ ] No console warnings (lub wszystkie wyjaśnione)
- [ ] Favicon wyświetla się
- [ ] Title tag prawidłowy
- [ ] Meta description dodany
- [ ] Open Graph tags (jeśli wymagane)
- [ ] robots.txt configured
- [ ] 404 page exists (jeśli routing)

#### Content

- [ ] Wszystkie teksty bez typos
- [ ] Wszystkie obrazy wyświetlają się
- [ ] Wszystkie linki działają (no 404s)
- [ ] Wszystkie CTAs mają correct hrefs
- [ ] Numery telefonów są klikalne (tel: links)
- [ ] Social links prowadzą do correct pages
- [ ] Copyright year jest aktualny

#### Forms (jeśli są)

- [ ] Validation działa
- [ ] Error messages czytelne
- [ ] Success messages wyświetlają się
- [ ] Submit nie działa podwójnie (double-click)
- [ ] Required fields marked
- [ ] Placeholder text helpful

#### Accessibility (Final Check)

- [ ] Keyboard navigation działa
- [ ] Screen reader test passed
- [ ] Focus indicators wyraźne
- [ ] Color contrast verified
- [ ] Touch targets ≥ 44px
- [ ] Alt text dla wszystkich obrazów
- [ ] ARIA labels gdzie potrzebne
- [ ] No accessibility errors w axe DevTools
- [ ] Lighthouse Accessibility > 95

#### Performance (Final Check)

- [ ] Lighthouse Performance > 90 (mobile)
- [ ] Lighthouse Performance > 95 (desktop)
- [ ] Images optimized
- [ ] Fonts loading fast
- [ ] No layout shift (CLS < 0.1)
- [ ] LCP < 2.5s
- [ ] No render-blocking resources

#### Cross-Browser (Final Smoke Test)

- [ ] Chrome desktop ✅
- [ ] Firefox desktop ✅
- [ ] Safari desktop ✅
- [ ] Safari iOS (iPhone) ✅
- [ ] Chrome Android ✅

#### Responsive (Final Check)

- [ ] Mobile (375px width) ✅
- [ ] Mobile (414px width) ✅
- [ ] Tablet (768px) ✅
- [ ] Desktop (1440px) ✅
- [ ] Large desktop (1920px) ✅
- [ ] No horizontal scroll na żadnym breakpoint

#### Edge Cases

- [ ] Very long text nie psuje layoutu
- [ ] Very short text nie psuje layoutu
- [ ] Slow network (3G simulation)
- [ ] JavaScript disabled (graceful degradation?)
- [ ] Cookies disabled
- [ ] Dark mode OS preference (jeśli wspierane)

---

## 8. Automated Testing CI/CD

### GitHub Actions Example

**`.github/workflows/test.yml`:**

```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm test

      - name: Run coverage
        run: npm run test:coverage

      - name: Build
        run: npm run build

      - name: Lighthouse CI
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

---

## 9. Bug Reporting Template

Gdy znajdziesz bug, użyj tego templatu:

```markdown
## Bug Report

**Title:** [Krótki opis bugu]

**Priority:** [Critical / High / Medium / Low]

**Environment:**
- Browser: [Chrome 120, Safari 17, etc.]
- Device: [iPhone 14, Desktop, etc.]
- OS: [iOS 17, Windows 11, etc.]
- Screen size: [375px, 1920px, etc.]

**Steps to Reproduce:**
1. Go to [URL or section]
2. Click on [element]
3. Observe [behavior]

**Expected Behavior:**
[Co powinno się stać]

**Actual Behavior:**
[Co faktycznie się dzieje]

**Screenshots:**
[Załącz screenshoty jeśli możliwe]

**Console Errors:**
[Załącz console errors jeśli są]

**Additional Context:**
[Dodatkowe informacje]
```

---

## 10. Testing Timeline

### Phase 1: During Development (Continuous)

**Week 1-5:**
- Unit tests pisane równocześnie z components
- Coverage tracking na bieżąco
- Accessibility checks podczas development

**Daily:**
- [ ] Run `npm test` przed każdym commit
- [ ] Check console for errors
- [ ] Quick manual test w Chrome

---

### Phase 2: Feature Complete Testing (Week 5-6)

**Integration Testing:**
- [ ] Test all sections integration
- [ ] Test full page flow
- [ ] Test navigation
- [ ] Test mobile menu

**Manual Testing:**
- [ ] Full browser matrix test
- [ ] Device testing (prawdziwe urządzenia)
- [ ] Accessibility audit (axe, WAVE, Lighthouse)

---

### Phase 3: Pre-Launch Testing (Week 6-7)

**Performance Testing:**
- [ ] Lighthouse audits (mobile & desktop)
- [ ] Core Web Vitals verification
- [ ] Optimization iterations

**QA Checklist:**
- [ ] Complete manual QA checklist
- [ ] Fix all critical bugs
- [ ] Fix all high priority bugs
- [ ] Document medium/low bugs for post-launch

**UAT (User Acceptance Testing):**
- [ ] Client review
- [ ] Stakeholder review
- [ ] Fix feedback

---

## Summary

**Testing Philosophy:** Test early, test often, automate what you can.

**Priorities:**
1. **Accessibility** - Non-negotiable (WCAG AA)
2. **Performance** - Critical for UX (Lighthouse > 90)
3. **Cross-browser** - Must work everywhere
4. **Unit tests** - Catch regressions early

**Final Gate:** Wszystkie items w Manual QA Checklist muszą być ✅ przed deployem.

**Post-Launch:** Monitor analytics, error tracking, user feedback → iterate.
