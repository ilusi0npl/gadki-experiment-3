# 🏗️ Architektura Projektu

## Tech Stack

### Frontend Framework
- **React 18+** - Biblioteka UI z hooks
- **Vite** - Build tool (szybszy niż CRA)
- **TypeScript** - Opcjonalnie, dla type safety

### Styling
- **CSS Modules** lub **Styled Components**
- **NIE używamy Tailwind CSS**
- Custom CSS dla precyzyjnej kontroli nad designem

### State Management
- **React Context API** - dla globalnego state (np. menu mobile)
- **useState/useReducer** - dla lokalnego state komponentów
- **React Query** - jeśli będą fetche danych (opcjonalnie)

### Animacje
- **Framer Motion** - dla smooth animacji i transitions
- **Intersection Observer API** - scroll-triggered animations

### Assets & Icons
- **SVG** - dla ikon i prostych grafik
- **WebP/AVIF** - dla obrazów (z PNG fallback)
- **React Icons** - dla social media icons

### Routing
- **React Router v6** - Multi-page navigation
- **React Scroll** - smooth scroll do sekcji na stronie głównej
- **Code Splitting** - Lazy loading dla page components

### Forms (jeśli potrzebne)
- **React Hook Form** - wydajne zarządzanie formularzami
- **Zod** - walidacja schematów

## Struktura Folderów

```
gadki-landing/
├── public/
│   ├── fonts/                    # Custom fonts (Lato, Happy Season)
│   │   ├── lato/
│   │   └── happy-season/
│   ├── images/                   # Zoptymalizowane obrazy
│   │   ├── avatars/
│   │   ├── illustrations/
│   │   ├── decorations/
│   │   └── logos/
│   └── favicon.ico
│
├── src/
│   ├── assets/                   # Static assets w src
│   │   ├── icons/
│   │   └── vectors/
│   │
│   ├── components/               # Komponenty React
│   │   ├── atoms/               # Najmniejsze komponenty
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Avatar/
│   │   │   ├── Typography/
│   │   │   └── Icon/
│   │   │
│   │   ├── molecules/           # Komponenty złożone
│   │   │   ├── Card/
│   │   │   ├── Accordion/
│   │   │   ├── VideoPlayer/
│   │   │   ├── SocialLinks/
│   │   │   ├── AgeTabs/        # NEW - Age group tabs
│   │   │   ├── MaterialItem/   # NEW - Download/play material
│   │   │   ├── ProtectedMaterialCard/  # NEW - Locked materials
│   │   │   ├── EmailCopyButton/  # NEW - Email with copy
│   │   │   └── QuoteBox/       # NEW - Article quote
│   │   │
│   │   ├── organisms/           # Duże sekcje
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── MobileMenu/
│   │   │   ├── ContactSection/
│   │   │   ├── ExpandableArticles/  # NEW - Accordion for content
│   │   │   ├── MaterialsList/  # NEW - List of materials
│   │   │   └── ArticleContent/  # NEW - Markdown renderer
│   │   │
│   │   └── layout/              # Layout components
│   │       ├── Container/
│   │       ├── Section/
│   │       ├── Grid/
│   │       └── PageLayout/     # NEW - Main page wrapper
│   │
│   ├── pages/                   # Page components (routed)
│   │   ├── HomePage/            # Landing page (/)
│   │   ├── ForChildrenPage/     # Dla dzieci (/dla-dzieci)
│   │   ├── ForParentsPage/      # Dla rodziców (/dla-rodzicow)
│   │   ├── ForEducatorsPage/    # Dla edukatorów (/dla-edukatorow)
│   │   ├── FAQPage/             # FAQ (/faq)
│   │   ├── ArticlePage/         # Article (/artykul/:slug)
│   │   └── NotFoundPage/        # 404 page
│   │
│   ├── sections/                # Sekcje strony
│   │   ├── HeroSection/
│   │   ├── IntroSection/
│   │   ├── GadkiRulesSection/
│   │   ├── MaterialsSection/
│   │   ├── AboutSection/
│   │   ├── FAQSection/
│   │   └── HelpSection/
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── useScrollAnimation.js
│   │   ├── useMobileMenu.js
│   │   ├── useAccordion.js
│   │   └── useMediaQuery.js
│   │
│   ├── context/                 # React Context
│   │   ├── ThemeContext.jsx
│   │   └── MenuContext.jsx
│   │
│   ├── styles/                  # Global styles
│   │   ├── globals.css
│   │   ├── variables.css       # CSS custom properties
│   │   ├── reset.css
│   │   └── fonts.css
│   │
│   ├── utils/                   # Utility functions
│   │   ├── constants.js        # Stałe (kolory, breakpoints)
│   │   ├── animations.js       # Reusable animation configs
│   │   └── helpers.js
│   │
│   ├── data/                    # Static data
│   │   ├── faq.js              # FAQ questions and answers
│   │   ├── navigation.js       # Main navigation links
│   │   ├── socialLinks.js      # Social media links
│   │   ├── childrenMaterials.js  # NEW - Materials for children by age
│   │   ├── parentArticles.js    # NEW - Articles for parents
│   │   ├── educatorMaterials.js # NEW - Materials for educators
│   │   └── articles.js         # NEW - Article metadata and content
│   │
│   ├── App.jsx                  # Main App component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global imports
│
├── .env                         # Environment variables
├── .gitignore
├── package.json
├── vite.config.js              # Vite configuration
├── jsconfig.json               # Path aliases
└── README.md
```

## Component Architecture

### Atomic Design Pattern

Stosujemy **Atomic Design** dla czytelności i reusability:

1. **Atoms** - Podstawowe building blocks
   - Button, Avatar, Typography, Icon
   - Nie zawierają logiki biznesowej
   - Maksymalna reużywalność

2. **Molecules** - Kombinacje atomów
   - Card, Accordion, VideoPlayer
   - Mogą zawierać prostą logikę
   - Standalone functionality

3. **Organisms** - Złożone sekcje
   - Header, Footer, ContactSection
   - Business logic
   - Composition z molecules i atoms

4. **Templates/Sections** - Układy sekcji
   - HeroSection, FAQSection
   - Full-width sections
   - Data integration

## Routing Architecture

### React Router v6 Configuration

Aplikacja wykorzystuje **React Router v6** dla nawigacji między stronami.

#### Route Structure

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';

// Eager loading dla głównej strony
import HomePage from '@/pages/HomePage';

// Lazy loading dla pozostałych stron
const ForChildrenPage = lazy(() => import('@/pages/ForChildrenPage'));
const ForParentsPage = lazy(() => import('@/pages/ForParentsPage'));
const ForEducatorsPage = lazy(() => import('@/pages/ForEducatorsPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner fullScreen />}>
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />

          {/* Target audience pages */}
          <Route path="/dla-dzieci" element={<PageLayout><ForChildrenPage /></PageLayout>} />
          <Route path="/dla-rodzicow" element={<PageLayout><ForParentsPage /></PageLayout>} />
          <Route path="/dla-edukatorow" element={<PageLayout><ForEducatorsPage /></PageLayout>} />

          {/* Utility pages */}
          <Route path="/faq" element={<PageLayout><FAQPage /></PageLayout>} />

          {/* Dynamic article page */}
          <Route path="/artykul/:slug" element={<PageLayout><ArticlePage /></PageLayout>} />

          {/* 404 page */}
          <Route path="*" element={<PageLayout><NotFoundPage /></PageLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
```

#### Page Components Structure

Każda strona jest standalone komponentem w folderze `src/pages/`:

```
pages/
├── HomePage/
│   ├── HomePage.jsx
│   ├── HomePage.module.css
│   └── index.js
├── ForChildrenPage/
│   ├── ForChildrenPage.jsx
│   ├── ForChildrenPage.module.css
│   └── index.js
├── ForParentsPage/
│   ├── ForParentsPage.jsx
│   ├── ForParentsPage.module.css
│   └── index.js
├── ForEducatorsPage/
│   ├── ForEducatorsPage.jsx
│   ├── ForEducatorsPage.module.css
│   └── index.js
├── FAQPage/
│   ├── FAQPage.jsx
│   ├── FAQPage.module.css
│   └── index.js
├── ArticlePage/
│   ├── ArticlePage.jsx
│   ├── ArticlePage.module.css
│   └── index.js
└── NotFoundPage/
    ├── NotFoundPage.jsx
    ├── NotFoundPage.module.css
    └── index.js
```

### Example Page Component

```jsx
// src/pages/ForChildrenPage/ForChildrenPage.jsx
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AgeTabs from '@/components/molecules/AgeTabs';
import MaterialsList from '@/components/organisms/MaterialsList';
import VideoPlayer from '@/components/molecules/VideoPlayer';
import { childrenMaterials } from '@/data/childrenMaterials';
import styles from './ForChildrenPage.module.css';

const ForChildrenPage = () => {
  const [activeTab, setActiveTab] = useState('4-6');

  const ageTabs = [
    { id: 'age-4-6', label: '4-6 lat', value: '4-6' },
    { id: 'age-7-9', label: '7-9 lat', value: '7-9' },
    { id: 'age-10-12', label: '10-12 lat', value: '10-12' },
  ];

  const filteredMaterials = childrenMaterials.filter(
    (material) => material.ageGroup === activeTab
  );

  return (
    <>
      <Helmet>
        <title>Dla Dzieci - GADKI</title>
        <meta name="description" content="Materiały edukacyjne dla dzieci 4-12 lat" />
      </Helmet>

      <div className={styles.forChildrenPage}>
        <section className={styles.heroSection}>
          <h1>Materiały dla dzieci</h1>
          <p>Wybierz grupę wiekową swojego dziecka</p>
        </section>

        <section className={styles.contentSection}>
          <AgeTabs
            tabs={ageTabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <VideoPlayer
            videoUrl={filteredMaterials[0]?.videoUrl}
            thumbnailUrl={filteredMaterials[0]?.thumbnailUrl}
          />

          <MaterialsList materials={filteredMaterials} />
        </section>
      </div>
    </>
  );
};

export default ForChildrenPage;
```

### PageLayout Component

Wspólny layout dla wszystkich stron z Header i Footer:

```jsx
// src/components/layout/PageLayout/PageLayout.jsx
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import styles from './PageLayout.module.css';

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
```

### Navigation Data

```javascript
// src/data/navigation.js
export const mainNavigation = [
  {
    id: 'home',
    label: 'Strona główna',
    path: '/',
  },
  {
    id: 'for-children',
    label: 'Dla dzieci',
    path: '/dla-dzieci',
  },
  {
    id: 'for-parents',
    label: 'Dla rodziców',
    path: '/dla-rodzicow',
  },
  {
    id: 'for-educators',
    label: 'Dla edukatorów',
    path: '/dla-edukatorow',
  },
  {
    id: 'faq',
    label: 'FAQ',
    path: '/faq',
  },
];
```

### Dynamic Routes - Article Page

```jsx
// src/pages/ArticlePage/ArticlePage.jsx
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ArticleContent from '@/components/organisms/ArticleContent';
import { articles } from '@/data/articles';
import styles from './ArticlePage.module.css';

const ArticlePage = () => {
  const { slug } = useParams();

  // Find article by slug
  const article = articles.find((article) => article.slug === slug);

  // Redirect to 404 if article not found
  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - GADKI</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>

      <article className={styles.articlePage}>
        <header className={styles.articleHeader}>
          <h1>{article.title}</h1>
          <p className={styles.articleMeta}>
            {article.author} • {article.date}
          </p>
        </header>

        <ArticleContent content={article.content} />
      </article>
    </>
  );
};

export default ArticlePage;
```

### SEO Configuration

Każda strona wykorzystuje **react-helmet-async** dla SEO:

```bash
npm install react-helmet-async
```

```jsx
// src/main.jsx
import { HelmetProvider } from 'react-helmet-async';

root.render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
```

### Code Splitting Strategy

**Eager Loading (Instant):**
- HomePage - First Contentful Paint (FCP) priority
- PageLayout, Header, Footer - Used on every page

**Lazy Loading (On-demand):**
- ForChildrenPage - Loaded when user navigates to `/dla-dzieci`
- ForParentsPage - Loaded when user navigates to `/dla-rodzicow`
- ForEducatorsPage - Loaded when user navigates to `/dla-edukatorow`
- FAQPage - Loaded when user navigates to `/faq`
- ArticlePage - Loaded when user navigates to `/artykul/:slug`
- NotFoundPage - Loaded only if 404 occurs

**Benefits:**
- Initial bundle size: ~150-200KB (gzipped)
- Each lazy-loaded page: ~20-40KB (gzipped)
- Total reduction: ~50-60% smaller initial load

### Scroll Behavior

```jsx
// src/hooks/useScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Fast scroll on route change
    });
  }, [pathname]);
};

// Usage in App.jsx
function App() {
  useScrollToTop();

  return (
    <BrowserRouter>
      {/* routes */}
    </BrowserRouter>
  );
}
```

### Link Navigation

```jsx
// src/components/organisms/Header/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { mainNavigation } from '@/data/navigation';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="GADKI" />
        </Link>

        <ul className={styles.navList}>
          {mainNavigation.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : styles.navLink
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
```

### 404 Not Found Page

```jsx
// src/pages/NotFoundPage/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import Button from '@/components/atoms/Button';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h2>Nie znaleziono strony</h2>
      <p>Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <Link to="/">
        <Button variant="primary" size="large">
          Wróć do strony głównej
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
```

## File Naming Convention

### Komponenty
```
ComponentName/
  ├── ComponentName.jsx          # Component logic
  ├── ComponentName.module.css   # Scoped styles
  ├── ComponentName.test.jsx     # Unit tests (opcjonalnie)
  └── index.js                   # Export barrel
```

### Hooki
```
use{FunctionalityName}.js
```
Przykład: `useScrollAnimation.js`, `useAccordion.js`

### Stałe i utils
```
camelCase.js
```
Przykład: `constants.js`, `animationHelpers.js`

## Import Aliases

Skonfiguruj w `jsconfig.json` (lub `tsconfig.json`):

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"],
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@sections/*": ["sections/*"],
      "@hooks/*": ["hooks/*"],
      "@utils/*": ["utils/*"],
      "@styles/*": ["styles/*"],
      "@assets/*": ["assets/*"],
      "@data/*": ["data/*"]
    }
  }
}
```

Przykład użycia:
```jsx
import Button from '@components/atoms/Button';
import HomePage from '@pages/HomePage';
import { colors } from '@utils/constants';
import useScrollAnimation from '@hooks/useScrollAnimation';
import { childrenMaterials } from '@data/childrenMaterials';
```

## Build Configuration

### Vite Config (`vite.config.js`)

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@sections': path.resolve(__dirname, './src/sections'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          markdown: ['react-markdown', 'remark-gfm'],
          seo: ['react-helmet-async'],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-helmet-async',
    ],
  },
});
```

## Environment Variables

### `.env` (development)
```env
VITE_API_URL=https://api.gadki.pl
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-X
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

### `.env.production`
```env
VITE_API_URL=https://api.gadki.pl
VITE_GOOGLE_ANALYTICS_ID=UA-XXXXX-X
```

## Performance Optimization

### Code Splitting

**Pages (Lazy Loading):**
```jsx
// Lazy load page components for better initial load
const ForChildrenPage = lazy(() => import('@pages/ForChildrenPage'));
const ForParentsPage = lazy(() => import('@pages/ForParentsPage'));
const ForEducatorsPage = lazy(() => import('@pages/ForEducatorsPage'));
const FAQPage = lazy(() => import('@pages/FAQPage'));
const ArticlePage = lazy(() => import('@pages/ArticlePage'));
```

**Sections (Conditional Lazy Loading):**
```jsx
// Lazy load heavy sections on home page (below fold)
const FAQSection = lazy(() => import('@sections/FAQSection'));
const AboutSection = lazy(() => import('@sections/AboutSection'));
```

### Image Optimization
- Użyj `<picture>` z multiple sources
- WebP z PNG/JPG fallback
- Lazy loading z Intersection Observer
- Responsive images z `srcset`

### Bundle Size
- Tree-shaking unused code
- Dynamic imports dla heavy components
- Minimize third-party dependencies

## Browser Support

- **Chrome/Edge**: Last 2 versions
- **Firefox**: Last 2 versions
- **Safari**: Last 2 versions
- **Mobile Safari**: iOS 13+
- **Chrome Mobile**: Android 8+

## Development Tools

### Linting
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Stylelint** - CSS linting

### Git Hooks
- **Husky** - Pre-commit hooks
- **lint-staged** - Run linters on staged files

### Package Manager
- **npm** lub **yarn** lub **pnpm**

## Deployment

### Build Command
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Hosting Options
- **Vercel** - Recommended (zero-config)
- **Netlify** - Alternative
- **GitHub Pages** - Static hosting
- **AWS S3 + CloudFront** - Enterprise

## Next Steps

1. ✅ Setup projektu z Vite + React
2. ✅ Instalacja dependencies
3. ✅ Konfiguracja struktury folderów
4. ✅ Import fontów i design tokens
5. ✅ Routing architecture z React Router v6
6. ⏳ Budowa base components (atoms)
7. ⏳ Budowa molecules (AgeTabs, MaterialItem, etc.)
8. ⏳ Budowa organisms (ExpandableArticles, MaterialsList, etc.)
9. ⏳ Budowa pages (ForChildrenPage, ForParentsPage, etc.)
10. ⏳ Implementacja data structures
11. ⏳ SEO optimization z react-helmet-async
12. ⏳ Performance testing i optimization
