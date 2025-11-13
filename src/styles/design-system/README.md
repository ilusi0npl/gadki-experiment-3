# GADKI Design System

System designu wygenerowany automatycznie z pliku Figma za pomocą **fig4ai**.

## 📁 Struktura

```
src/styles/design-system/
├── tokens.css      # CSS Custom Properties (CSS Variables)
├── tokens.ts       # TypeScript/JavaScript tokens
└── README.md       # Ta dokumentacja
```

## 🎨 Użycie

### W CSS/SCSS

Zaimportuj plik z tokenami na początku głównego pliku stylów:

```css
@import './design-system/tokens.css';

.my-component {
  color: var(--color-raspberry);
  font-family: var(--font-primary);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
}
```

### W React/TypeScript

```tsx
import { colors, spacing, fontSizes } from '@/styles/design-system/tokens';

const MyComponent = () => {
  return (
    <div style={{
      color: colors.raspberry.default,
      padding: spacing[4],
      fontSize: fontSizes.lg,
    }}>
      Hello GADKI!
    </div>
  );
};
```

### W CSS Modules

```module.css
.button {
  background-color: var(--color-raspberry);
  color: var(--color-white);
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-xl);
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  transition: all var(--transition-base);
}

.button:hover {
  background-color: var(--color-raspberry-dark);
  box-shadow: var(--shadow-md);
}
```

## 🎨 Paleta Kolorów

### Kolory Brandowe

| Nazwa | Wartość | Użycie |
|-------|---------|--------|
| Raspberry | `#e83f4b` | Główny kolor brandu, CTA, akcenty |
| Raspberry Dark | `#b61919` | Hover states, warianty ciemniejsze |

### Kolory Dodatkowe

| Nazwa | Wartość | Opis |
|-------|---------|------|
| Teal | `#0a5556` | Kolor akcentowy |
| Teal Light | `#0797a7` | Wersja jasna teal |
| Blue | `#273488` | Kolor akcentowy |
| Yellow | `#f1c500` | Kolor akcentowy |
| Orange | `#ef771b` | Kolor akcentowy |

### Kolory Neutralne - Beige

| Nazwa | Wartość | Użycie |
|-------|---------|--------|
| Beige 1 | `#f6f5f1` | Tła, sekcje jasne |
| Beige 2 | `#efeee8` | Tła, sekcje |
| Beige 3 | `#e0ddd1` | Obramowania, separatory |
| Beige 4 | `#d8d5c6` | Ciemniejsze warianty |

### Kolory Neutralne - Gray/Black/White

| Nazwa | Wartość | Użycie |
|-------|---------|--------|
| White | `#ffffff` | Tła, tekst na ciemnym |
| Off White | `#f8f8f8` | Tła alternatywne |
| Gray Light | `#e5e5e5` | Obramowania |
| Gray | `#d9d9d9` | Separatory |
| Black | `#000000` | Czysty czarny |
| Black Soft | `#1e1e1e` | Tekst główny |

## 🔤 Typografia

### Rodziny Czcionek

- **Primary (Happy Season)**: Nagłówki, tytuły, akcenty
- **Secondary (Lato)**: Tekst podstawowy, paragrafy

### Skala Rozmiarów

| Token | Rozmiar | Użycie |
|-------|---------|--------|
| `xs` | 16px | Tekst najmniejszy |
| `sm` | 20px | Tekst mały |
| `md` | 22px | Tekst średni |
| `lg` | 24px | Tekst duży |
| `xl` | 26px | Tekst bardzo duży |
| `2xl` | 32px | Małe nagłówki |
| `3xl` | 36px | Nagłówki H4 |
| `4xl` | 40px | Nagłówki H3 |
| `5xl` | 44px | Nagłówki H2 |
| `6xl` | 48px | Nagłówki H1 |
| `7xl-13xl` | 52-200px | Hero headings, display |

### Wagi Czcionek

- **Regular (400)**: Tekst podstawowy
- **Bold (700)**: Nagłówki, akcenty
- **Heavy (800)**: Bardzo mocne akcenty

### Line Heights

- **Tight (1.2)**: Nagłówki
- **Normal (1.5)**: Tekst podstawowy
- **Relaxed (1.75)**: Długie paragrafy

## 📏 Spacing (8pt Grid)

System spacingów oparty na siatce 8px:

```
0  → 0
1  → 4px
2  → 8px
3  → 12px
4  → 16px
5  → 20px
6  → 24px
8  → 32px
10 → 40px
12 → 48px
16 → 64px
20 → 80px
24 → 96px
32 → 128px
40 → 160px
48 → 192px
56 → 224px
64 → 256px
```

## 🎯 Border Radius

- `none` → 0
- `sm` → 4px
- `md` → 8px
- `lg` → 12px
- `xl` → 16px
- `2xl` → 24px
- `3xl` → 32px
- `full` → 9999px (pełne zaokrąglenie)

## 🌓 Shadows

- `sm`: Lekki cień
- `md`: Średni cień (domyślny dla kart)
- `lg`: Duży cień (podniesione elementy)
- `xl`: Bardzo duży cień (modals, overlays)

## ⚡ Transitions

- `fast`: 150ms - Szybkie interakcje (hover)
- `base`: 250ms - Standardowe przejścia
- `slow`: 350ms - Wolniejsze animacje

## 📱 Breakpoints

| Nazwa | Wartość | Opis |
|-------|---------|------|
| `sm` | 640px | Small devices |
| `md` | 768px | Medium devices (tablets) |
| `lg` | 1024px | Large devices (laptops) |
| `xl` | 1280px | Extra large (desktops) |
| `2xl` | 1728px | Extra extra large (large desktops) |

## 📚 Z-Index Scale

System warstw dla układania elementów:

```
base: 0
dropdown: 1000
sticky: 1100
fixed: 1200
modalBackdrop: 1300
modal: 1400
popover: 1500
tooltip: 1600
```

## 🔄 Aktualizacja Design Tokens

Aby zaktualizować tokeny z Figma:

```bash
# Uruchom fig4ai z nowym linkiem do Figma
export FIGMA_ACCESS_TOKEN=your_token
npx fig4ai "https://www.figma.com/design/BDWqfvcMQw8RpFhMMMVRa3/Gadki_www_OST?node-id=21-2"

# Plik .designrules zostanie zaktualizowany
# Następnie ręcznie zaktualizuj tokens.css i tokens.ts jeśli potrzeba
```

## 📖 Więcej Informacji

- Pełna dokumentacja planowania: `/docs/planning/`
- Figma Design File: [Gadki_www_OST](https://www.figma.com/design/BDWqfvcMQw8RpFhMMMVRa3/Gadki_www_OST)
- Generated Design Rules: `/.designrules` (12MB - pełna ekstrakcja z Figma)

---

**Wygenerowano:** 2025-11-13
**Narzędzie:** fig4ai + Claude Code
**Źródło:** Figma Design File (BDWqfvcMQw8RpFhMMMVRa3)
