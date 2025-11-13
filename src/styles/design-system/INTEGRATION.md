# Integracja Design System w Projekcie GADKI

Przewodnik szybkiego startu dla integracji design systemu w projekcie.

## 🚀 Szybki Start

### 1. Dodaj CSS Tokens do głównego pliku

```tsx
// src/main.tsx lub src/App.tsx
import './styles/design-system/tokens.css';
import './styles/design-system/mixins.css'; // opcjonalnie
```

### 2. Importuj tokeny w komponentach React

```tsx
import { colors, spacing, fontSizes } from '@/styles/design-system';

const MyComponent = () => {
  return (
    <div style={{
      color: colors.raspberry.default,
      padding: spacing[8],
      fontSize: fontSizes.lg,
    }}>
      Hello GADKI!
    </div>
  );
};
```

### 3. Użyj w CSS Modules

```css
/* component.module.css */
.button {
  background-color: var(--color-raspberry);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
}
```

## 📁 Struktura Plików

```
src/styles/design-system/
├── tokens.css          # CSS Custom Properties (importuj w main.tsx)
├── tokens.ts           # TypeScript tokens (importuj w komponentach)
├── mixins.css          # Gotowe klasy użytkowe (opcjonalnie)
├── helpers.ts          # Funkcje pomocnicze
├── index.ts            # Centralny punkt eksportu
├── examples.tsx        # Przykłady użycia
├── README.md           # Pełna dokumentacja
└── INTEGRATION.md      # Ten plik
```

## 🎯 Najważniejsze Wzorce

### Pattern 1: Komponenty Atomowe (Buttons)

```tsx
// src/components/atoms/Button/Button.tsx
import { colors, spacing, radius, fontSizes } from '@/styles/design-system';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children
}) => {
  const styles = {
    backgroundColor: variant === 'primary'
      ? colors.raspberry.default
      : 'transparent',
    color: variant === 'primary'
      ? colors.white
      : colors.raspberry.default,
    padding: size === 'large'
      ? `${spacing[6]} ${spacing[12]}`
      : `${spacing[4]} ${spacing[8]}`,
    fontSize: size === 'large' ? fontSizes.xl : fontSizes.lg,
    borderRadius: radius.xl,
    border: variant === 'secondary'
      ? `2px solid ${colors.raspberry.default}`
      : 'none',
  };

  return <button style={styles}>{children}</button>;
};
```

### Pattern 2: CSS Modules z Tokenami

```css
/* Button.module.css */
.button {
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  cursor: pointer;
  border: none;
}

.buttonPrimary {
  background-color: var(--color-raspberry);
  color: var(--color-white);
  padding: var(--spacing-4) var(--spacing-8);
}

.buttonPrimary:hover {
  background-color: var(--color-raspberry-dark);
  box-shadow: var(--shadow-md);
}

.buttonLarge {
  padding: var(--spacing-6) var(--spacing-12);
  font-size: var(--font-size-xl);
}
```

```tsx
// Button.tsx
import styles from './Button.module.css';

export const Button = ({ variant, size, children }) => {
  const className = [
    styles.button,
    variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
    size === 'large' ? styles.buttonLarge : '',
  ].join(' ');

  return <button className={className}>{children}</button>;
};
```

### Pattern 3: Styled Components (jeśli używasz)

```tsx
import styled from 'styled-components';
import { colors, spacing, radius, media } from '@/styles/design-system';

const StyledButton = styled.button`
  background-color: ${colors.raspberry.default};
  color: ${colors.white};
  padding: ${spacing[4]} ${spacing[8]};
  border-radius: ${radius.xl};
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${colors.raspberry.dark};
  }

  ${media.md} {
    padding: ${spacing[6]} ${spacing[12]};
  }
`;
```

### Pattern 4: Responsywne Spacingi

```tsx
import { spacing, media } from '@/styles/design-system';

const Section = styled.section`
  padding: ${spacing[16]} ${spacing[4]};

  ${media.md} {
    padding: ${spacing[24]} ${spacing[8]};
  }

  ${media.lg} {
    padding: ${spacing[32]} ${spacing[12]};
  }
`;
```

## 🎨 Najczęściej Używane Tokeny

### Kolory
```tsx
colors.raspberry.default  // Główny kolor brandu
colors.raspberry.dark     // Hover states
colors.beige[2]          // Tła sekcji
colors.black.soft        // Tekst główny
colors.white             // Tła, tekst na ciemnym
```

### Spacing (8pt grid)
```tsx
spacing[4]   // 16px - padding małych elementów
spacing[8]   // 32px - padding kart, sekcji małych
spacing[16]  // 64px - padding sekcji mobilnych
spacing[24]  // 96px - padding sekcji tabletów
spacing[32]  // 128px - padding sekcji desktopów
```

### Typography
```tsx
fontSizes.lg      // 24px - tekst duży
fontSizes['2xl']  // 32px - małe nagłówki
fontSizes['6xl']  // 48px - H1
fontSizes['9xl']  // 64px - Hero headings
```

## ⚡ Performance Tips

1. **Import tylko to czego potrzebujesz:**
```tsx
// ✅ Dobrze
import { colors, spacing } from '@/styles/design-system';

// ❌ Unikaj (importuje wszystko)
import * as designSystem from '@/styles/design-system';
```

2. **CSS Variables vs JS Tokens:**
   - Użyj CSS Variables (`var(--color-raspberry)`) dla dynamicznych wartości
   - Użyj JS Tokens dla wartości w runtime calculations

3. **Memoizacja stylów:**
```tsx
const styles = useMemo(() => ({
  color: colors.raspberry.default,
  padding: spacing[8],
}), []);
```

## 🔧 TypeScript Support

Design system ma pełne wsparcie TypeScript:

```tsx
import type { FontSize, Spacing, Color } from '@/styles/design-system';

interface ComponentProps {
  fontSize?: FontSize;
  padding?: Spacing;
  color?: keyof Color;
}
```

## 📚 Więcej Informacji

- Zobacz `examples.tsx` dla więcej przykładów użycia
- Zobacz `README.md` dla pełnej dokumentacji tokenów
- Zobacz `helpers.ts` dla dostępnych funkcji pomocniczych

## 🆘 Troubleshooting

### Problem: CSS Variables nie działają
**Rozwiązanie:** Upewnij się, że importujesz `tokens.css` w głównym pliku (main.tsx/App.tsx)

### Problem: TypeScript errors przy imporcie
**Rozwiązanie:** Sprawdź czy masz poprawne path aliasy w `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Problem: Kolory wyglądają inaczej niż w Figma
**Rozwiązanie:** Uruchom ponownie fig4ai aby zaktualizować tokeny:
```bash
export FIGMA_ACCESS_TOKEN=your_token
npx fig4ai "https://www.figma.com/design/..."
```
