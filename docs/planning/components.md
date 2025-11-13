# 🧩 Komponenty - Technical Specification

## Spis Treści
1. [Atoms (Komponenty Atomowe)](#atoms)
2. [Molecules (Komponenty Molekularne)](#molecules)
3. [Organisms (Komponenty Organizacyjne)](#organisms)

---

## Atoms

### Button

**Ścieżka**: `src/components/atoms/Button/`

**Warianty**:
- `primary` - Wypełniony raspberry background
- `secondary` - Outline biały na ciemnym tle
- `outline` - Outline raspberry na jasnym tle

**Props**:
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}
```

**Przykład użycia**:
```jsx
<Button variant="primary" onClick={handleClick}>
  O programie
</Button>
```

**Styles** (`Button.module.css`):
```css
.button {
  font-family: var(--font-secondary);
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base) var(--ease-out);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  text-decoration: none;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.primary {
  background-color: var(--color-raspberry);
  color: var(--color-white);
  border-radius: var(--radius-full);
}

.primary:hover:not(:disabled) {
  background-color: var(--color-hover);
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.secondary {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  border-radius: var(--radius-full);
}

.secondary:hover:not(:disabled) {
  background-color: rgba(255, 255, 255, 0.1);
}

.small {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-md);
}

.medium {
  padding: var(--spacing-xl) var(--spacing-2xl);
  font-size: var(--font-size-base);
}

.large {
  padding: var(--spacing-2xl) var(--spacing-3xl);
  font-size: var(--font-size-base);
}
```

---

### Avatar

**Ścieżka**: `src/components/atoms/Avatar/`

**Props**:
```typescript
interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  borderColor?: string;
}
```

**Rozmiary**:
- `small`: 120px
- `medium`: 180px (default)
- `large`: 240px

**Przykład użycia**:
```jsx
<Avatar
  src={imgMama}
  alt="Mama"
  size="medium"
/>
```

**Styles**:
```css
.avatar {
  background-color: var(--color-beige-400);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
}

.avatarImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.small {
  width: 120px;
  height: 120px;
}

.medium {
  width: 180px;
  height: 180px;
}

.large {
  width: 240px;
  height: 240px;
}
```

---

### Typography

**Ścieżka**: `src/components/atoms/Typography/`

**Warianty**:
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `body`, `bodyLarge`, `bodySmall`
- `label`, `caption`

**Props**:
```typescript
interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'bodyLarge' | 'bodySmall';
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  align?: 'left' | 'center' | 'right';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold' | 'heavy';
  children: React.ReactNode;
  className?: string;
}
```

**Przykład użycia**:
```jsx
<Typography variant="h2" align="center" color="raspberry">
  Zasady
</Typography>

<Typography variant="body">
  Gadki to rozmowy na temat kilku prostych zasad...
</Typography>
```

**Styles**:
```css
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: var(--font-primary);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0;
}

.h1 { font-size: var(--font-size-h1); }
.h2 { font-size: var(--font-size-h2); }
.h3 { font-size: var(--font-size-h3); }
.h4 { font-size: var(--font-size-h4); }
.h5 { font-size: var(--font-size-h5); }
.h6 { font-size: var(--font-size-h6); }

.body, .bodyLarge, .bodySmall {
  font-family: var(--font-secondary);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}

.body { font-size: var(--font-size-base); }
.bodyLarge { font-size: 28px; }
.bodySmall { font-size: var(--font-size-md); }
```

---

### Icon

**Ścieżka**: `src/components/atoms/Icon/`

**Props**:
```typescript
interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}
```

**Ikony używane w projekcie**:
- Social media: Facebook, Instagram, Spotify, Telegram, YouTube
- UI: Menu (hamburger), Close (X), Arrow down, Play button

**Przykład użycia**:
```jsx
<Icon name="facebook" size={20} color="raspberry" />
```

---

## Molecules

### Card

**Ścieżka**: `src/components/molecules/Card/`

**Props**:
```typescript
interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  shadow?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
}
```

**Przykład użycia**:
```jsx
<Card backgroundColor="white" shadow hoverable>
  <Typography variant="h5">Dla dzieci</Typography>
  <img src={childrenIllustration} alt="Dzieci" />
</Card>
```

**Styles**:
```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-4xl);
  transition: all var(--transition-base) var(--ease-out);
}

.shadow {
  box-shadow: var(--shadow-card);
}

.hoverable:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}
```

---

### GadkiRuleCard

**Ścieżka**: `src/components/molecules/GadkiRuleCard/`

**Props**:
```typescript
interface GadkiRuleCardProps {
  letter: 'G' | 'A' | 'D' | 'K' | 'I';
  title: string;
  description: string;
  rotation: number;
  backgroundColor: string;
}
```

**Data**:
```javascript
const gadkiRules = [
  {
    letter: 'G',
    title: 'Gdy mówisz NIE,',
    titleLine2: 'to znaczy NIE',
    backgroundColor: 'var(--color-dark-red)',
    rotation: 7.732,
  },
  {
    letter: 'A',
    title: 'Alarmuj, gdy potrzebujesz pomocy',
    backgroundColor: 'var(--color-dark-green)',
    rotation: -6.124,
  },
  // ... reszta
];
```

**Przykład użycia**:
```jsx
<GadkiRuleCard
  letter="G"
  title="Gdy mówisz NIE,"
  titleLine2="to znaczy NIE"
  backgroundColor="var(--color-dark-red)"
  rotation={7.732}
/>
```

**Styles**:
```css
.gadkiCard {
  width: 380px;
  height: 480px;
  border-radius: var(--radius-md);
  padding: var(--spacing-4xl);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.letter {
  font-family: var(--font-primary);
  font-size: var(--font-size-h1);
  font-weight: 600;
  color: var(--color-white);
  line-height: 1;
}

.title {
  font-family: var(--font-primary);
  font-size: var(--font-size-h5);
  font-weight: 500;
  color: var(--color-white);
  line-height: var(--line-height-tight);
}

.rotated {
  transform: rotate(var(--rotation));
}
```

---

### Accordion

**Ścieżka**: `src/components/molecules/Accordion/`

**Props**:
```typescript
interface AccordionProps {
  items: Array<{
    id: string;
    number: string;
    question: string;
    answer: string;
  }>;
  defaultOpenId?: string;
}
```

**State**:
```javascript
const [openId, setOpenId] = useState(defaultOpenId || null);
```

**Przykład użycia**:
```jsx
<Accordion
  items={faqItems}
  defaultOpenId="01"
/>
```

**Styles**:
```css
.accordionItem {
  border-bottom: 1px solid var(--color-beige-400);
  padding: var(--spacing-2xl) 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  gap: var(--spacing-xl);
}

.number {
  font-family: var(--font-primary);
  font-size: var(--font-size-h6);
  font-weight: 700;
  color: var(--color-raspberry);
  min-width: 80px;
  text-align: center;
}

.question {
  font-family: var(--font-primary);
  font-size: var(--font-size-h6);
  font-weight: 500;
  color: var(--color-black);
  flex: 1;
}

.icon {
  transition: transform var(--transition-base);
}

.iconOpen {
  transform: rotate(180deg);
}

.content {
  padding: var(--spacing-2xl) 0 0 100px;
  font-family: var(--font-secondary);
  font-size: var(--font-size-base);
  color: var(--color-black);
  max-width: 891px;
}

.contentHidden {
  display: none;
}
```

---

### VideoPlayer

**Ścieżka**: `src/components/molecules/VideoPlayer/`

**Props**:
```typescript
interface VideoPlayerProps {
  posterImage: string;
  videoUrl?: string;
  onPlay?: () => void;
  overlayDarkness?: number;
}
```

**Przykład użycia**:
```jsx
<VideoPlayer
  posterImage={heroImage}
  videoUrl="https://..."
  overlayDarkness={0.4}
/>
```

**Styles**:
```css
.videoContainer {
  position: relative;
  width: 100%;
  height: 622px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.playButton {
  width: 88px;
  height: 88px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform var(--transition-base);
}

.playButton:hover {
  transform: scale(1.1);
}
```

---

### SocialLinks

**Ścieżka**: `src/components/molecules/SocialLinks/`

**Props**:
```typescript
interface SocialLinksProps {
  links: Array<{
    platform: 'facebook' | 'instagram' | 'spotify' | 'telegram' | 'youtube';
    url: string;
  }>;
  iconSize?: number;
  color?: string;
}
```

**Data** (`src/data/socialLinks.js`):
```javascript
export const socialLinks = [
  { platform: 'facebook', url: 'https://facebook.com/...' },
  { platform: 'instagram', url: 'https://instagram.com/...' },
  { platform: 'spotify', url: 'https://spotify.com/...' },
  { platform: 'telegram', url: 'https://t.me/...' },
  { platform: 'youtube', url: 'https://youtube.com/...' },
];
```

**Przykład użycia**:
```jsx
<SocialLinks
  links={socialLinks}
  iconSize={20}
  color="raspberry"
/>
```

**Styles**:
```css
.socialLinks {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.socialLink {
  display: inline-flex;
  transition: transform var(--transition-fast);
}

.socialLink:hover {
  transform: translateY(-2px);
}
```

---

### ContactCard

**Ścieżka**: `src/components/molecules/ContactCard/`

**Props**:
```typescript
interface ContactCardProps {
  title: string;
  description: string;
  phoneNumber?: string;
  websiteUrl?: string;
  primaryButton: {
    text: string;
    onClick: () => void;
  };
  secondaryButton: {
    text: string;
    onClick: () => void;
  };
}
```

**Przykład użycia**:
```jsx
<ContactCard
  title="Jeżeli jesteś dzieckiem..."
  description="Telefon Zaufania dla Dzieci i Młodzieży..."
  phoneNumber="116 111"
  websiteUrl="https://116111.pl"
  primaryButton={{
    text: "Zadzwoń",
    onClick: () => window.location.href = 'tel:116111'
  }}
  secondaryButton={{
    text: "Odwiedź stronę",
    onClick: () => window.open('https://116111.pl', '_blank')
  }}
/>
```

---

## Organisms

### Header

**Ścieżka**: `src/components/organisms/Header/`

**Props**:
```typescript
interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}
```

**State**:
```javascript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
```

**Struktura**:
```
Header
  ├── Logo
  ├── Navigation (desktop)
  │   ├── NavLink[] (Dla dzieci, Dla rodziców, Dla edukatorów, FAQ)
  │   └── Button (Logowanie/Rejestracja)
  └── MobileMenuToggle (mobile)
```

**Navigation Links** (`src/data/navigation.js`):
```javascript
export const navigationLinks = [
  { label: 'Dla dzieci', href: '#dzieci' },
  { label: 'Dla rodziców i opiekunów', href: '#rodzice' },
  { label: 'Dla edukatorów', href: '#edukatorzy' },
  { label: 'FAQ', href: '#faq' },
];
```

**Przykład użycia**:
```jsx
<Header transparent sticky />
```

**Styles**:
```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-index-sticky);
  transition: all var(--transition-base);
  padding: var(--spacing-2xl) var(--spacing-4xl);
}

.transparent {
  background-color: transparent;
}

.scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
}

.container {
  max-width: var(--container-2xl);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
  gap: var(--spacing-3xl);
  align-items: center;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
```

---

### MobileMenu

**Ścieżka**: `src/components/organisms/MobileMenu/`

**Props**:
```typescript
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}
```

**Przykład użycia**:
```jsx
<MobileMenu
  isOpen={isMenuOpen}
  onClose={() => setIsMenuOpen(false)}
  links={navigationLinks}
/>
```

**Features**:
- Slide-in from right
- Backdrop overlay
- Close on link click
- Close on escape key
- Prevent body scroll when open

**Styles**:
```css
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-index-modal-backdrop);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.overlayVisible {
  opacity: 1;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 400px;
  background-color: var(--color-white);
  z-index: var(--z-index-modal);
  transform: translateX(100%);
  transition: transform var(--transition-base) var(--ease-out);
  padding: var(--spacing-3xl);
  overflow-y: auto;
}

.menuOpen {
  transform: translateX(0);
}
```

---

### Footer

**Ścieżka**: `src/components/organisms/Footer/`

**Props**:
```typescript
interface FooterProps {
  // Opcjonalnie props jeśli footer będzie dynamiczny
}
```

**Struktura**:
```
Footer
  ├── Logo
  ├── FooterColumns[]
  │   ├── Kontakt
  │   ├── Navigation Links
  │   └── Logowanie/O programie
  ├── SocialLinks
  └── LegalLinks (Polityka prywatności, Deklaracja dostępności)
```

**Styles**:
```css
.footer {
  background-color: var(--color-beige-100);
  padding: var(--spacing-6xl) var(--spacing-4xl);
}

.container {
  max-width: var(--container-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 177px repeat(3, 1fr);
  gap: var(--spacing-6xl);
}

.column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.legalLinks {
  display: flex;
  gap: var(--spacing-4xl);
  justify-content: space-between;
  margin-top: var(--spacing-4xl);
  padding-top: var(--spacing-3xl);
  border-top: 1px solid var(--color-beige-400);
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
}
```

---

### FloatingAvatars

**Ścieżka**: `src/components/organisms/FloatingAvatars/`

**Props**:
```typescript
interface FloatingAvatarsProps {
  avatars: Array<{
    src: string;
    alt: string;
    size: 'small' | 'medium' | 'large';
    position: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    };
  }>;
}
```

**Data**:
```javascript
export const heroAvatars = [
  {
    src: imgMama,
    alt: 'Mama',
    size: 'medium',
    position: { top: '155px', left: '374px' }
  },
  {
    src: imgTata,
    alt: 'Tata',
    size: 'medium',
    position: { top: '224px', left: '1176px' }
  },
  // ... reszta
];
```

**Przykład użycia**:
```jsx
<FloatingAvatars avatars={heroAvatars} />
```

**Styles**:
```css
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.avatar {
  position: absolute;
  animation: float 6s ease-in-out infinite;
}

.avatar:nth-child(1) { animation-delay: 0s; }
.avatar:nth-child(2) { animation-delay: 0.5s; }
.avatar:nth-child(3) { animation-delay: 1s; }

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

---

## Component File Structure Template

Każdy komponent powinien mieć:

```
ComponentName/
  ├── ComponentName.jsx          # Component logic
  ├── ComponentName.module.css   # Styles
  ├── ComponentName.test.jsx     # Tests (opcjonalnie)
  ├── ComponentName.stories.jsx  # Storybook (opcjonalnie)
  └── index.js                   # Export
```

### Example: Button/index.js
```javascript
export { default } from './Button';
export * from './Button';
```

### Example: Button/Button.jsx
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  ariaLabel,
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string,
};

export default Button;
```

## Next Steps

Po zbudowaniu wszystkich komponentów:
1. Zintegruj je w sekcjach (patrz: `sections.md`)
2. Dodaj animacje i interakcje (patrz: `interactions.md`)
3. Przetestuj responsywność (patrz: `responsive.md`)
4. Przeprowadź testy (patrz: `testing.md`)
