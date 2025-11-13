# 🗣️ GADKI - Rozmowy budujące bliskość

Kampania edukacyjna wspierająca komunikację i bliskość w rodzinie poprzez rozmowy o emocjach.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)]()

🔗 **Live Demo:** [https://github.com/ilusi0npl/gadki-experiment-3](https://github.com/ilusi0npl/gadki-experiment-3)

---

## 📋 Spis Treści

- [O Projekcie](#o-projekcie)
- [Funkcjonalności](#funkcjonalności)
- [Tech Stack](#tech-stack)
- [Instalacja](#instalacja)
- [Komendy](#komendy)
- [Struktura Projektu](#struktura-projektu)
- [Routing](#routing)
- [Design System](#design-system)
- [Plan Implementacji](#plan-implementacji)
- [Contributing](#contributing)

---

## 🎯 O Projekcie

GADKI to platforma edukacyjna oferująca materiały i zasoby wspierające:
- **Dzieci** (4-12 lat) - materiały dostosowane do grup wiekowych
- **Rodziców** - artykuły i porady dotyczące komunikacji emocjonalnej
- **Edukatorów** - scenariusze zajęć i materiały metodyczne

### Cele projektu
✨ Budowanie otwartej komunikacji w rodzinach
✨ Rozwój inteligencji emocjonalnej dzieci
✨ Wsparcie rodziców i edukatorów praktycznymi narzędziami

---

## ⚡ Funkcjonalności

### Już zaimplementowane ✅
- ✅ Multi-page routing (React Router v6)
- ✅ 7 route'ów (/, /dla-dzieci, /dla-rodzicow, /dla-edukatorow, /faq, /artykul/:slug, 404)
- ✅ Design system z Figma (1314 typography tokens, 2665 colors, 1072 spacing values)
- ✅ SEO optimization (react-helmet-async)
- ✅ Code splitting & lazy loading
- ✅ Responsive layout structure
- ✅ Data structures dla wszystkich sekcji
- ✅ PageLayout component

### W trakcie implementacji 🚧
- 🚧 Komponenty bazowe (Atoms)
- 🚧 Komponenty molekularne (Molecules)
- 🚧 Sekcje strony głównej
- 🚧 Pełna implementacja stron

### Planowane 📅
- 📅 Animacje (Framer Motion)
- 📅 Search functionality
- 📅 Newsletter signup
- 📅 User authentication (dla edukatorów)
- 📅 CMS integration

---

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - UI library
- **Vite 5.4.21** - Build tool & dev server
- **React Router DOM 7.9.6** - Client-side routing

### Styling
- **CSS Modules** - Scoped styling (NO Tailwind)
- **Custom Design System** - Extracted from Figma via fig4ai

### Libraries
- **react-helmet-async** - SEO & meta tags
- **react-markdown** - Article content rendering
- **remark-gfm** - GitHub Flavored Markdown
- **framer-motion** - Animations

### Development
- **JavaScript (JSX)** - No TypeScript (by design)
- **ESLint** - Code quality
- **Git** - Version control
- **GitHub** - Repository hosting

---

## 📦 Instalacja

### Wymagania
- Node.js 18.x+ (18.19.1 tested)
- npm 9.x+ (9.2.0 tested)

### Kroki

```bash
# Clone repository
git clone https://github.com/ilusi0npl/gadki-experiment-3.git
cd gadki-experiment-3

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

---

## 🎮 Komendy

```bash
# Development
npm run dev          # Start dev server (hot reload)

# Production
npm run build        # Build for production (dist/)
npm run preview      # Preview production build

# Other
npm run lint         # Run ESLint (if configured)
```

---

## 📁 Struktura Projektu

```
gadki-experiment-3/
├── docs/
│   └── planning/              # Dokumentacja planowania
│       ├── implementation-plan.md  # Plan implementacji (10 faz)
│       ├── architecture.md         # Architektura projektu
│       ├── data-structures.md      # Struktury danych
│       ├── sections.md             # Specyfikacja sekcji
│       └── new-components.md       # Nowe komponenty
│
├── public/
│   ├── fonts/                 # Custom fonts (Lato, Happy Season)
│   └── images/                # Static images
│
├── src/
│   ├── components/
│   │   ├── atoms/            # Podstawowe komponenty
│   │   ├── molecules/        # Komponenty złożone
│   │   ├── organisms/        # Duże sekcje
│   │   └── layout/           # Layout components
│   │       └── PageLayout/   # Main layout (Header, Footer)
│   │
│   ├── pages/                # Page components (routed)
│   │   ├── HomePage/
│   │   ├── ForChildrenPage/
│   │   ├── ForParentsPage/
│   │   ├── ForEducatorsPage/
│   │   ├── FAQPage/
│   │   ├── ArticlePage/
│   │   └── NotFoundPage/
│   │
│   ├── sections/             # Sekcje strony głównej
│   ├── hooks/                # Custom React hooks
│   ├── context/              # React Context
│   ├── utils/                # Utility functions
│   ├── data/                 # Static data files
│   │   ├── navigation.js
│   │   ├── faq.js
│   │   ├── childrenMaterials.js
│   │   ├── parentArticles.js
│   │   ├── educatorMaterials.js
│   │   ├── articles.js
│   │   └── socialLinks.js
│   │
│   ├── styles/
│   │   └── design-system/    # Design tokens z Figma
│   │       ├── tokens.css    # CSS custom properties
│   │       ├── tokens.ts     # JS/React tokens
│   │       ├── helpers.ts    # Utility functions
│   │       └── mixins.css    # Utility classes
│   │
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
│
├── .designrules              # Figma design extraction (12MB)
├── vite.config.js            # Vite configuration
├── jsconfig.json             # Path aliases
└── package.json
```

---

## 🚦 Routing

### Routes

| Route | Component | Loading | Description |
|-------|-----------|---------|-------------|
| `/` | HomePage | Eager | Strona główna |
| `/dla-dzieci` | ForChildrenPage | Lazy | Materiały dla dzieci |
| `/dla-rodzicow` | ForParentsPage | Lazy | Artykuły dla rodziców |
| `/dla-edukatorow` | ForEducatorsPage | Lazy | Materiały dla edukatorów |
| `/faq` | FAQPage | Lazy | FAQ |
| `/artykul/:slug` | ArticlePage | Lazy | Dynamiczna strona artykułu |
| `*` | NotFoundPage | Lazy | 404 page |

### Code Splitting

**Eager Loading:**
- HomePage - First Contentful Paint priority
- PageLayout, Header, Footer - Used on every page

**Lazy Loading:**
- All other pages - Loaded on-demand
- **Benefit:** ~50-60% smaller initial bundle size

**Bundle Sizes (production build):**
- Vendor: ~140KB (React, React DOM)
- Router: ~33KB (React Router)
- SEO: ~14KB (React Helmet)
- Each page: ~1-2KB (lazy chunks)

---

## 🎨 Design System

### Ekstrakcja z Figma

Design system został automatycznie wyekstrahowany z Figma używając `fig4ai`:

```bash
npx fig4ai "https://www.figma.com/design/BDWqfvcMQw8RpFhMMMVRa3/Gadki_www_OST?..." --no-ai
```

**Wyniki ekstrakcji:**
- 📊 1,314 typography tokens
- 🎨 2,665 colors
- 📏 1,072 spacing values
- 🎯 4,287 styles

### Tokeny

#### Kolory
```css
--color-raspberry: #e83f4b        /* Główny kolor brandu */
--color-raspberry-dark: #b61919   /* Hover states */
--color-beige-2: #efeee8          /* Tła sekcji */
--color-black-soft: #333333       /* Tekst główny */
```

#### Spacing (8pt Grid)
```css
--spacing-4: 1rem      /* 16px */
--spacing-8: 2rem      /* 32px */
--spacing-16: 4rem     /* 64px */
--spacing-24: 6rem     /* 96px */
--spacing-32: 8rem     /* 128px */
```

#### Typography
```css
--font-primary: 'Happy Season', cursive;
--font-secondary: 'Lato', sans-serif;

--font-size-lg: 24px
--font-size-2xl: 32px
--font-size-6xl: 48px
--font-size-9xl: 64px
```

### Użycie

**CSS Modules:**
```css
.button {
  background-color: var(--color-raspberry);
  padding: var(--spacing-4) var(--spacing-8);
  font-family: var(--font-secondary);
}
```

**React (inline styles):**
```jsx
import { colors, spacing } from '@/styles/design-system';

<div style={{
  color: colors.raspberry.default,
  padding: spacing[8],
}}>
  Hello GADKI!
</div>
```

---

## 📋 Plan Implementacji

Projekt jest podzielony na **10 faz** z **213 zadaniami**.

### Status Faz

| Faza | Opis | Status | Czas |
|------|------|--------|------|
| **1** | Fundament | ✅ Ukończona | 1 dzień |
| **2** | Komponenty Bazowe (Atoms) | ⏳ Oczekuje | 2-3 dni |
| **3** | Molekuły (Molecules) | ⏳ Oczekuje | 3-4 dni |
| **4** | Organizmy (Organisms) | ⏳ Oczekuje | 4-5 dni |
| **5** | Sekcje (Sections) | ⏳ Oczekuje | 5-6 dni |
| **6** | Rozbudowa Stron | ⏳ Oczekuje | 4-5 dni |
| **7** | Hooks & Utilities | ⏳ Oczekuje | 2-3 dni |
| **8** | Styling & Responsywność | ⏳ Oczekuje | 3-4 dni |
| **9** | Optymalizacja | ⏳ Oczekuje | 2-3 dni |
| **10** | Testing & Deployment | ⏳ Oczekuje | 2-3 dni |

**Szacowany całkowity czas:** 25-35 dni roboczych

Pełny plan: [docs/planning/implementation-plan.md](docs/planning/implementation-plan.md)

---

## 🎯 Metryki Sukcesu

### Performance Targets
- ✅ Lighthouse Score > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Largest Contentful Paint < 2.5s
- ✅ Cumulative Layout Shift < 0.1
- ✅ Time to Interactive < 3s

### SEO Targets
- ✅ Unique meta descriptions dla wszystkich stron
- ✅ Alt text dla images
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly

### Accessibility Targets
- ✅ WCAG AA compliance
- ✅ Keyboard navigation
- ✅ Screen reader compatible
- ✅ Color contrast ratios

---

## 🤝 Contributing

### Development Workflow

1. **Fork & Clone**
```bash
git clone https://github.com/YOUR_USERNAME/gadki-experiment-3.git
```

2. **Create Feature Branch**
```bash
git checkout -b feature/awesome-feature
```

3. **Make Changes & Test**
```bash
npm run dev
npm run build
```

4. **Commit (follow conventional commits)**
```bash
git commit -m "feat: add awesome feature"
```

5. **Push & Create PR**
```bash
git push origin feature/awesome-feature
```

### Commit Convention

```
feat: dodanie nowej funkcjonalności
fix: naprawa błędu
docs: aktualizacja dokumentacji
style: formatowanie kodu (bez zmian logiki)
refactor: refaktoryzacja kodu
test: dodanie testów
chore: aktualizacja zależności, konfiguracji
```

---

## 📄 License

MIT License - feel free to use this project for learning or production.

---

## 🙏 Acknowledgments

- **Design System:** Extracted from Figma using [fig4ai](https://github.com/f/fig4ai)
- **Fonts:** Happy Season (display), Lato (body text)
- **Icons:** React Icons library
- **Built with:** Claude Code ❤️

---

## 📞 Contact

Projekt GADKI
📧 Email: contact@gadki.pl
🌐 Website: [https://gadki.pl](https://gadki.pl)

---

<div align="center">
  <strong>Zbudowane z ❤️ dla rodzin wspierających komunikację emocjonalną</strong>
</div>
