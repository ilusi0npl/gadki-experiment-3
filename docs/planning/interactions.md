# ⚡ Interakcje i Animacje

## Spis Treści
1. [Scroll Animations](#scroll-animations)
2. [Hover Effects](#hover-effects)
3. [Click Interactions](#click-interactions)
4. [Mobile Hamburger Menu](#mobile-hamburger-menu)
5. [Page Transitions](#page-transitions)
6. [Loading States](#loading-states)
7. [Micro-interactions](#micro-interactions)

---

## Scroll Animations

### Fade In on Scroll

**Gdzie używane**: Wszystkie główne sekcje (Intro, Zasady, Materiały, O Nas, FAQ, Pomoc)

**Biblioteka**: Framer Motion

**Implementation**:
```jsx
import { motion } from 'framer-motion';

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
```

**Variants**:
- **Fast**: duration 0.3s - małe elementy (buttons, icons)
- **Normal**: duration 0.6s - sekcje, cards
- **Slow**: duration 0.9s - duże headingi

---

### Stagger Children Animation

**Gdzie używane**:
- Zasady GADKI cards (5 kart wchodzi po kolei)
- Materiały cards (3 karty)
- FAQ items
- Footer columns

**Implementation**:
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

<motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={item}>
      {/* Content */}
    </motion.div>
  ))}
</motion.div>
```

---

### Parallax Effect

**Gdzie używane**:
- Dekoracyjne wektory w tle
- Floating avatars

**Implementation** (bez biblioteki):
```javascript
// useParallax.js hook
import { useEffect, useState } from 'react';

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

// Użycie
const offset = useParallax(0.3);

<div style={{ transform: `translateY(${offset}px)` }}>
  {/* Decorative element */}
</div>
```

---

### Sticky Header Animation

**Behavior**:
- Header transparent na top strony
- Po scroll 100px: white background + shadow + backdrop blur
- Logo fade in/out (opcjonalnie)

**Implementation**:
```jsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<motion.header
  className={styles.header}
  initial={{ backgroundColor: 'transparent' }}
  animate={{
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
  }}
  transition={{ duration: 0.3 }}
>
```

---

## Hover Effects

### Button Hover

**Effect**: Scale up + shadow + background color change

**Implementation**:
```jsx
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    backgroundColor: 'var(--color-hover)',
  }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  O programie
</motion.button>
```

**CSS Alternative**:
```css
.button {
  transition: all 0.25s ease-out;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  background-color: var(--color-hover);
}

.button:active {
  transform: translateY(0);
}
```

---

### Card Hover

**Effect**: Lift up + shadow increase

**Where**: Materiały cards, GADKI rule cards (subtle)

**Implementation**:
```jsx
<motion.div
  className={styles.card}
  whileHover={{
    y: -4,
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
  }}
  transition={{ duration: 0.25 }}
>
  {/* Card content */}
</motion.div>
```

---

### Link Hover

**Effect**: Underline slide-in, color change

**Implementation**:
```css
.link {
  position: relative;
  color: var(--color-raspberry);
  text-decoration: none;
  transition: color 0.2s;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-raspberry);
  transition: width 0.3s ease-out;
}

.link:hover::after {
  width: 100%;
}
```

---

### Avatar Float

**Effect**: Subtle floating animation (keyframes)

**Where**: Floating avatars w Hero section

**Implementation**:
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floatingAvatar {
  animation: float 6s ease-in-out infinite;
}

.floatingAvatar:nth-child(1) { animation-delay: 0s; }
.floatingAvatar:nth-child(2) { animation-delay: 0.5s; }
.floatingAvatar:nth-child(3) { animation-delay: 1s; }
.floatingAvatar:nth-child(4) { animation-delay: 1.5s; }
.floatingAvatar:nth-child(5) { animation-delay: 2s; }
```

---

### Social Icon Hover

**Effect**: Lift up slightly + color change

**Implementation**:
```jsx
<motion.a
  whileHover={{ y: -3, scale: 1.1 }}
  transition={{ duration: 0.2 }}
  className={styles.socialLink}
>
  <Icon name="facebook" />
</motion.a>
```

---

## Click Interactions

### Accordion Expand/Collapse

**Behavior**:
- Click question to expand/collapse
- Only one open at a time
- Arrow icon rotation
- Smooth height transition

**Implementation**:
```jsx
const [openId, setOpenId] = useState('01');

const toggleAccordion = (id) => {
  setOpenId(openId === id ? null : id);
};

<motion.div
  initial={false}
  animate={{
    height: isOpen ? 'auto' : 0,
    opacity: isOpen ? 1 : 0,
  }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
  className={styles.content}
>
  {answer}
</motion.div>

<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3 }}
  className={styles.icon}
>
  <Icon name="chevron-down" />
</motion.div>
```

---

### Mobile Menu Toggle

**Behavior**:
- Hamburger → X animation
- Menu slide-in from right
- Backdrop fade-in
- Body scroll lock

**Implementation**:
```jsx
// Hamburger animation
<motion.div
  animate={isOpen ? 'open' : 'closed'}
  variants={{
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 },
  }}
  className={styles.hamburgerLine}
/>

// Menu slide-in
<motion.div
  initial={{ x: '100%' }}
  animate={{ x: isOpen ? 0 : '100%' }}
  transition={{ type: 'tween', duration: 0.3 }}
  className={styles.mobileMenu}
>
  {/* Menu content */}
</motion.div>

// Backdrop
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: isOpen ? 1 : 0 }}
  className={styles.backdrop}
  onClick={() => setIsOpen(false)}
/>
```

**Body Scroll Lock**:
```javascript
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return () => {
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);
```

---

### Video Player Play

**Behavior**:
- Click play button → show video
- Play button fade out
- Video fade in

**Implementation**:
```jsx
const [isPlaying, setIsPlaying] = useState(false);

<AnimatePresence>
  {!isPlaying && (
    <motion.button
      className={styles.playButton}
      onClick={() => setIsPlaying(true)}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Icon name="play" />
    </motion.button>
  )}
</AnimatePresence>

{isPlaying && (
  <motion.iframe
    src={videoUrl}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    allow="autoplay"
  />
)}
```

---

### Smooth Scroll to Section

**Behavior**: Click navigation link → smooth scroll do sekcji

**Implementation**:
```javascript
// Utils function
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Component usage
<a
  href={`#${section.id}`}
  onClick={(e) => {
    e.preventDefault();
    scrollToSection(section.id);
  }}
>
  {section.label}
</a>
```

**Alternative z React Scroll**:
```jsx
import { Link } from 'react-scroll';

<Link
  to="dzieci"
  smooth={true}
  duration={500}
  offset={-80} // Header height
>
  Dla dzieci
</Link>
```

---

## Mobile Hamburger Menu

### Przegląd

**Gdzie**: Header (widoczny na mobile < 768px i tablet < 1024px)

**Design**: Pełnoekranowy overlay menu z czerwonym tłem (#E83F4B)

**Trigger**: Hamburger icon (3 linie) w prawym górnym rogu headera

---

### Struktura Menu

#### Layout Overlay

```
┌─────────────────────────────┐
│ Logo (lewy)    GADKI  [X]   │ ← Header
│                              │
│                              │
│    Dla dzieci                │ ← Duże linki (96px)
│                              │
│    Dla rodziców i opiekunów  │
│                              │
│    Dla edukatorów            │
│    i nauczycieli             │
│                              │
│                              │
│  O programie  FAQ  Login...  │ ← Małe linki (24px)
│                              │
│  [Dekoracyjne elementy]      │
│                              │
│  ~~~~~~ Wavy bottom ~~~~~~   │
└─────────────────────────────┘
```

#### Elementy Menu

**Header w menu:**
- Logo FDDS (lewy górny róg) - 164px × 71px
- Logo GADKI (środek) - 146px × 67px
- Przycisk Close [X] (prawy górny róg) - 48px × 48px white

**Główne linki (duży font):**
- "Dla dzieci" - Happy Season Semibold, 96px, white
- "Dla rodziców i opiekunów" - Happy Season Semibold, 96px, white
- "Dla edukatorów i nauczycieli" - Happy Season Semibold, 96px, white
- Gap między linkami: 26px

**Dodatkowe linki (mały font):**
- "O programie" - Lato Medium, 24px, white
- "FAQ" - Lato Medium, 24px, white
- "Logowanie/Rejestracja" - Lato Medium, 24px, white
- "Для батьків" - Lato Medium, 24px, white
- Gap między linkami: 48px (poziomo)

**Dekoracyjne elementy:**
- Abstrakcyjne kształty po lewej stronie (biały outline)
- Abstrakcyjna grafika po prawej (rotowana 15°, opacity 90%)
- Wavy bottom border (white)

---

### Component Structure

```
MobileMenu/
├── MobileMenu.jsx         # Main menu component
├── MobileMenuOverlay.jsx  # Backdrop + overlay container
├── MobileMenuNav.jsx      # Navigation links
└── MobileMenu.module.css  # Styles
```

---

### Implementation

#### 1. MobileMenu Component

```jsx
// src/components/organisms/MobileMenu.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './MobileMenu.module.css';

const MobileMenu = ({ isOpen, onClose }) => {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Render in portal
  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Overlay */}
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu główne"
          >
            {/* Header */}
            <div className={styles.header}>
              <img
                src="/images/logo-fdds.svg"
                alt="Fundacja Dajemy Dzieciom Siłę"
                className={styles.logoFdds}
              />
              <img
                src="/images/logo-gadki.svg"
                alt="GADKI"
                className={styles.logoGadki}
              />
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Zamknij menu"
              >
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M14 14L34 34M34 14L14 34"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Main Navigation */}
            <nav className={styles.mainNav}>
              <motion.ul
                className={styles.mainLinks}
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {[
                  { label: 'Dla dzieci', href: '#dzieci' },
                  { label: 'Dla rodziców i opiekunów', href: '#rodzice' },
                  { label: 'Dla edukatorów i nauczycieli', href: '#edukatorzy' },
                ].map((link) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className={styles.mainLink}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        // Smooth scroll do sekcji
                        setTimeout(() => {
                          document.getElementById(link.href.slice(1))?.scrollIntoView({
                            behavior: 'smooth',
                          });
                        }, 300);
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Secondary Links */}
              <motion.ul
                className={styles.secondaryLinks}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <li>
                  <a href="#o-programie" onClick={onClose}>
                    O programie
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={onClose}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#login" onClick={onClose}>
                    Logowanie/Rejestracja
                  </a>
                </li>
                <li>
                  <a href="#ua" onClick={onClose} lang="uk">
                    Для батьків
                  </a>
                </li>
              </motion.ul>
            </nav>

            {/* Decorative Elements */}
            <div className={styles.decorations}>
              <img
                src="/images/menu-decoration-left.svg"
                alt=""
                className={styles.decorationLeft}
              />
              <img
                src="/images/menu-decoration-right.svg"
                alt=""
                className={styles.decorationRight}
              />
            </div>

            {/* Wavy Bottom */}
            <div className={styles.wavyBottom}>
              <svg viewBox="0 0 1750 113" fill="none" preserveAspectRatio="none">
                <path
                  d="M0 56.5C145.833 18.8333 437.5 -24.1 525.5 13.5C613.5 51.1 701.667 99.6667 745.5 113H1750V113H0V56.5Z"
                  fill="white"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileMenu;
```

---

#### 2. Hook: useMobileMenu

```javascript
// src/hooks/useMobileMenu.js
import { useState, useCallback } from 'react';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};
```

---

#### 3. Hamburger Button Component

```jsx
// src/components/atoms/HamburgerButton.jsx
import { motion } from 'framer-motion';
import styles from './HamburgerButton.module.css';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={styles.hamburger}
      onClick={onClick}
      aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
      aria-expanded={isOpen}
    >
      <motion.span
        className={styles.line}
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles.line}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles.line}
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default HamburgerButton;
```

---

#### 4. Styles (CSS Modules)

```css
/* MobileMenu.module.css */

.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 40;
  backdrop-filter: blur(4px);
}

.menu {
  position: fixed;
  inset: 0;
  background-color: var(--color-raspberry);
  z-index: 50;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

/* Header */
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px 100px 0;
  height: 177px;
}

.logoFdds {
  width: 164px;
  height: 71px;
  transform: scaleY(-1); /* Flipped */
}

.logoGadki {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 146px;
  height: 67px;
}

.closeButton {
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s;
}

.closeButton:hover {
  transform: scale(1.1);
}

.closeButton:active {
  transform: scale(0.95);
}

/* Navigation */
.mainNav {
  padding: 0 374px;
  margin-top: 123px;
}

.mainLinks {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.mainLink {
  font-family: var(--font-primary);
  font-size: 96px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -1.056px;
  color: var(--color-white);
  text-decoration: none;
  transition: opacity 0.2s;
  display: inline-block;
}

.mainLink:hover {
  opacity: 0.8;
}

.mainLink:focus-visible {
  outline: 3px solid var(--color-white);
  outline-offset: 8px;
  border-radius: 4px;
}

.secondaryLinks {
  list-style: none;
  padding: 0;
  margin-top: 64px;
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.secondaryLinks a {
  font-family: var(--font-secondary);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.264px;
  color: var(--color-white);
  text-decoration: none;
  transition: opacity 0.2s;
}

.secondaryLinks a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

/* Decorations */
.decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.decorationLeft {
  position: absolute;
  left: -180px;
  top: 485px;
  width: 454px;
  height: 419px;
}

.decorationRight {
  position: absolute;
  right: 3.58%;
  top: 26.86%;
  width: 334px;
  height: 205px;
  transform: rotate(15deg);
  opacity: 0.9;
}

/* Wavy Bottom */
.wavyBottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 113px;
}

.wavyBottom svg {
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .header {
    padding: 40px 24px 0;
    height: auto;
  }

  .logoFdds {
    width: 120px;
    height: auto;
  }

  .logoGadki {
    width: 100px;
    height: auto;
  }

  .closeButton {
    width: 44px;
    height: 44px;
  }

  .mainNav {
    padding: 0 24px;
    margin-top: 80px;
  }

  .mainLink {
    font-size: 48px;
    letter-spacing: -0.528px;
  }

  .secondaryLinks {
    gap: 24px;
    margin-top: 40px;
  }

  .secondaryLinks a {
    font-size: 18px;
  }
}
```

```css
/* HamburgerButton.module.css */

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44px;
  height: 44px;
  padding: 10px 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 60;
}

.hamburger:focus-visible {
  outline: 2px solid var(--color-raspberry);
  outline-offset: 4px;
  border-radius: 4px;
}

.line {
  width: 100%;
  height: 3px;
  background-color: var(--color-raspberry);
  border-radius: 2px;
  transform-origin: center;
}

/* Na białym headerze */
.hamburger[data-theme="light"] .line {
  background-color: var(--color-raspberry);
}

/* Na ciemnym headerze */
.hamburger[data-theme="dark"] .line {
  background-color: var(--color-white);
}

@media (min-width: 1024px) {
  .hamburger {
    display: none;
  }
}
```

---

#### 5. Header Integration

```jsx
// src/components/organisms/Header.jsx
import { useMobileMenu } from '../../hooks/useMobileMenu';
import HamburgerButton from '../atoms/HamburgerButton';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import styles from './Header.module.css';

const Header = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/images/logo-gadki.svg" alt="GADKI" />
          </div>

          {/* Desktop Navigation (≥ 1024px) */}
          <Navigation className={styles.desktopNav} />

          {/* Hamburger Button (< 1024px) */}
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
```

---

### Breakpoint Visibility

```css
/* Header.module.css */

/* Desktop Navigation - widoczna tylko na ≥ 1024px */
.desktopNav {
  display: none;
}

@media (min-width: 1024px) {
  .desktopNav {
    display: flex;
  }
}

/* Hamburger Button - widoczny tylko na < 1024px */
/* Już zdefiniowane w HamburgerButton.module.css */
```

---

### Accessibility Features

**Keyboard Navigation:**

- ✅ Tab key przechodzi przez wszystkie linki
- ✅ Enter/Space aktywuje linki
- ✅ Escape zamyka menu
- ✅ Focus trap - focus nie wychodzi poza menu gdy otwarte

**Screen Reader:**

- ✅ `role="dialog"` na menu overlay
- ✅ `aria-modal="true"` na menu
- ✅ `aria-label="Menu główne"` na menu
- ✅ `aria-label` na hamburger i close button
- ✅ `aria-expanded` state na hamburger
- ✅ Backdrop ma `aria-hidden="true"`

**Focus Management:**

```javascript
// Dodatkowo: Focus trap implementation
useEffect(() => {
  if (!isOpen) return;

  const focusableElements = menuRef.current?.querySelectorAll(
    'a[href], button:not([disabled])'
  );

  const firstElement = focusableElements?.[0];
  const lastElement = focusableElements?.[focusableElements.length - 1];

  const handleTab = (e) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement?.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement?.focus();
    }
  };

  document.addEventListener('keydown', handleTab);
  firstElement?.focus();

  return () => document.removeEventListener('keydown', handleTab);
}, [isOpen]);
```

---

### Touch Target Sizes

**WCAG 2.1 Level AAA - Minimum 44px × 44px:**

- ✅ Hamburger button: 44px × 44px
- ✅ Close button: 48px × 48px
- ✅ Main links: 96px height (plenty)
- ✅ Secondary links: 24px font + padding = ≥ 44px tap area

```css
/* Ensure minimum touch targets */
.secondaryLinks a {
  padding: 10px 0; /* 24px + 20px padding = 44px */
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
```

---

### Performance Optimization

**Portal Rendering:**
- Menu renderuje się w `document.body` (nie w Header DOM)
- Unika layout thrashing
- Lepszy z-index control

**Body Scroll Lock:**
- Zapobiega scrollowaniu body gdy menu otwarte
- iOS-friendly z `-webkit-overflow-scrolling: touch`

**Animation Performance:**
- Używamy tylko `opacity` i `transform` (GPU accelerated)
- Framer Motion automatycznie optymalizuje

**Lazy Loading (opcjonalnie):**
```jsx
// Lazy load menu component
const MobileMenu = lazy(() => import('./MobileMenu'));

// W Header.jsx
<Suspense fallback={null}>
  <MobileMenu isOpen={isOpen} onClose={closeMenu} />
</Suspense>
```

---

### Testing Checklist

**Functionality:**
- [ ] Hamburger otwiera menu
- [ ] Close button zamyka menu
- [ ] Backdrop click zamyka menu
- [ ] Escape key zamyka menu
- [ ] Link click zamyka menu i scrolluje do sekcji
- [ ] Body scroll locked gdy menu otwarte

**Animations:**
- [ ] Fade-in smooth (350ms)
- [ ] Stagger children animation działa
- [ ] Hamburger → X transition smooth
- [ ] No layout shift podczas open/close

**Responsive:**
- [ ] Menu widoczne < 1024px
- [ ] Menu hidden ≥ 1024px
- [ ] Layout adaptuje się na małych ekranach
- [ ] Touch targets ≥ 44px

**Accessibility:**
- [ ] Keyboard navigation działa
- [ ] Screen reader announces menu state
- [ ] Focus trap działa
- [ ] Escape closes menu
- [ ] Focus indicators widoczne

**Cross-browser:**
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile iOS)
- [ ] Firefox
- [ ] Edge

---

### Figma Assets URLs

**Images potrzebne z Figma** (ważne 7 dni od pobrania):

```javascript
// Zapisz te URLe w src/data/menuAssets.js
export const menuAssets = {
  logoFdds: 'https://www.figma.com/api/mcp/asset/ef38b098-9253-4075-9d38-96f1ddd08af4',
  logoGadki: 'https://www.figma.com/api/mcp/asset/fc169dea-f3a9-4d1c-bd5e-98db48f497d5',
  decorationLeft: 'https://www.figma.com/api/mcp/asset/43be4f01-1116-4781-af7c-5c70268145aa',
  decorationRight: 'https://www.figma.com/api/mcp/asset/43be4f01-1116-4781-af7c-5c70268145aa',
  wavyBottom: 'https://www.figma.com/api/mcp/asset/ef518a57-5911-45fb-ac77-7633c1723eee',
};
```

**WAŻNE:** Te URLe wygasają po 7 dniach! Pobierz obrazy i zapisz lokalnie w `public/images/`.

---

### Data Structure

```javascript
// src/data/navigation.js

export const mainNavigation = [
  {
    id: 'dzieci',
    label: 'Dla dzieci',
    href: '#dzieci',
  },
  {
    id: 'rodzice',
    label: 'Dla rodziców i opiekunów',
    href: '#rodzice',
  },
  {
    id: 'edukatorzy',
    label: 'Dla edukatorów i nauczycieli',
    href: '#edukatorzy',
  },
];

export const secondaryNavigation = [
  {
    id: 'o-programie',
    label: 'O programie',
    href: '#o-programie',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '#faq',
  },
  {
    id: 'login',
    label: 'Logowanie/Rejestracja',
    href: '#login',
  },
  {
    id: 'ua',
    label: 'Для батьків',
    href: '#ua',
    lang: 'uk',
  },
];
```

---

### Implementation Timeline

**Phase 1 (1-2 dni):**
- [ ] Create HamburgerButton component
- [ ] Create useMobileMenu hook
- [ ] Integrate hamburger w Header

**Phase 2 (2-3 dni):**
- [ ] Create MobileMenu component
- [ ] Implement animations (Framer Motion)
- [ ] Add backdrop and portal rendering
- [ ] Body scroll lock

**Phase 3 (1 dzień):**
- [ ] Add navigation data structure
- [ ] Implement smooth scroll to sections
- [ ] Close menu on link click

**Phase 4 (1 dzień):**
- [ ] Accessibility: keyboard navigation, focus trap
- [ ] Screen reader support
- [ ] Touch target optimization

**Phase 5 (1 dzień):**
- [ ] Responsive styling
- [ ] Cross-browser testing
- [ ] Performance optimization

**Total:** 6-8 dni roboczych

---

## Page Transitions

### Page Load Animation

**Behavior**: Cała strona fade-in na start

**Implementation**:
```jsx
// App.jsx lub Layout
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Page content */}
</motion.div>
```

---

### Section Entrance

**Behavior**: Sekcje wchodzą z różnych kierunków

**Variants**:
```javascript
const sectionVariants = {
  fromLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  },
  fromRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  },
  fromBottom: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
};
```

**Usage**:
```jsx
<motion.section
  variants={sectionVariants.fromBottom}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  {/* Section content */}
</motion.section>
```

---

## Loading States

### Button Loading

**Behavior**: Spinner po kliknięciu, disabled state

**Implementation**:
```jsx
const [isLoading, setIsLoading] = useState(false);

<motion.button
  disabled={isLoading}
  animate={{ opacity: isLoading ? 0.6 : 1 }}
>
  {isLoading ? (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    >
      <Icon name="spinner" />
    </motion.div>
  ) : (
    'Wyślij'
  )}
</motion.button>
```

---

### Image Lazy Loading

**Behavior**: Skeleton → Fade-in image po załadowaniu

**Implementation**:
```jsx
const [isLoaded, setIsLoaded] = useState(false);

<div className={styles.imageContainer}>
  {!isLoaded && (
    <div className={styles.skeleton} />
  )}

  <motion.img
    src={imageSrc}
    alt={alt}
    onLoad={() => setIsLoaded(true)}
    initial={{ opacity: 0 }}
    animate={{ opacity: isLoaded ? 1 : 0 }}
    transition={{ duration: 0.4 }}
  />
</div>
```

---

## Micro-interactions

### Focus Ring Animation

**Behavior**: Animated focus ring dla accessibility

**Implementation**:
```css
.focusable:focus-visible {
  outline: 3px solid var(--color-raspberry);
  outline-offset: 2px;
  animation: focusRing 0.3s ease-out;
}

@keyframes focusRing {
  0% {
    outline-offset: 0;
    outline-width: 0;
  }
  100% {
    outline-offset: 2px;
    outline-width: 3px;
  }
}
```

---

### Ripple Effect (Material Design)

**Where**: Primary buttons

**Implementation**:
```jsx
const Ripple = ({ x, y }) => (
  <motion.span
    className={styles.ripple}
    initial={{ scale: 0, opacity: 1 }}
    animate={{ scale: 2, opacity: 0 }}
    transition={{ duration: 0.6 }}
    style={{ left: x, top: y }}
  />
);

const Button = ({ children, onClick }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples([...ripples, { x, y, id: Date.now() }]);
    onClick?.(e);

    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {ripples.map((ripple) => (
        <Ripple key={ripple.id} x={ripple.x} y={ripple.y} />
      ))}
      {children}
    </button>
  );
};
```

---

### Number Counter Animation

**Where**: Statistics (jeśli będą)

**Implementation**:
```jsx
import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};
```

---

## Animation Timing Guide

### Durations
- **Instant**: 100-150ms - Feedback interactions
- **Fast**: 200-300ms - Hovers, small transitions
- **Normal**: 400-500ms - Default, most animations
- **Slow**: 600-800ms - Large movements, page transitions
- **Very Slow**: 1000ms+ - Special effects, counters

### Easing Functions
```javascript
const easings = {
  easeOut: [0, 0, 0.2, 1],        // Default dla większości
  easeIn: [0.4, 0, 1, 1],         // Entrance
  easeInOut: [0.4, 0, 0.2, 1],    // Smooth both ways
  bounce: [0.68, -0.55, 0.265, 1.55], // Playful effect
};
```

### Best Practices
- ✅ Use `once: true` dla viewport animations (nie re-trigger)
- ✅ Debounce scroll listeners
- ✅ Use `will-change` dla animowanych właściwości
- ✅ Prefer `transform` i `opacity` (GPU accelerated)
- ❌ Avoid animating `height`, `width` bez `will-change`
- ❌ Don't animate too many elements at once

### Performance Optimization

```javascript
// Reduce motion dla accessibility
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const duration = prefersReducedMotion ? 0 : 0.6;

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration }}
>
```

---

## Animation Libraries Used

1. **Framer Motion** - Primary animation library
   - Install: `npm install framer-motion`
   - Import: `import { motion } from 'framer-motion'`

2. **React Scroll** (optional) - Smooth scrolling
   - Install: `npm install react-scroll`

3. **CSS Keyframes** - Simple animations (floating, loading)

---

## Next Steps

1. Implement scroll animations na wszystkich sekcjach
2. Add hover effects na interactive elements
3. Setup accordion animation w FAQ
4. Mobile menu transitions
5. Test performance (60fps target)
6. Accessibility: respect `prefers-reduced-motion`
