# 🚀 Plan Implementacji - GADKI Project

Status: Faza 1 ukończona ✅
Data rozpoczęcia: 2024-11-13
Ostatnia aktualizacja: 2024-11-13

## 📊 Status Ogólny

### ✅ Faza 1: Fundament (UKOŃCZONA)
- [x] Setup projektu z Vite + React
- [x] Instalacja zależności
- [x] Konfiguracja struktury folderów
- [x] Import design tokens
- [x] Routing architecture z React Router v6
- [x] Podstawowe strony (placeholders)
- [x] PageLayout component
- [x] Pliki z danymi
- [x] Build test (sukces)

---

## Faza 2: Komponenty Bazowe (Atoms)

**Priorytet: Wysoki**
**Szacowany czas: 2-3 dni**

### 2.1 Button Component
**Lokalizacja:** `src/components/atoms/Button/`

- [ ] Utworzyć komponent Button.jsx
- [ ] Dodać variants: `primary`, `secondary`, `outline`, `ghost`
- [ ] Dodać sizes: `small`, `medium`, `large`
- [ ] Dodać states: `default`, `hover`, `active`, `disabled`
- [ ] Utworzyć Button.module.css
- [ ] Użyć design tokens z `@/styles/design-system`
- [ ] Dodać PropTypes lub TypeScript types
- [ ] Utworzyć index.js export

**Przykład użycia:**
```jsx
<Button variant="primary" size="large">
  Kliknij mnie
</Button>
```

### 2.2 Typography Component
**Lokalizacja:** `src/components/atoms/Typography/`

- [ ] Utworzyć Typography.jsx
- [ ] Dodać variants: `h1`, `h2`, `h3`, `h4`, `body`, `caption`
- [ ] Dodać weight: `regular`, `medium`, `bold`
- [ ] Dodać color props (using design tokens)
- [ ] Utworzyć Typography.module.css
- [ ] Użyć font families z design system
- [ ] Dodać responsive font sizes
- [ ] Utworzyć index.js export

### 2.3 Icon Component
**Lokalizacja:** `src/components/atoms/Icon/`

- [ ] Utworzyć Icon.jsx
- [ ] Dodać support dla SVG icons
- [ ] Dodać sizes: `small`, `medium`, `large`
- [ ] Dodać color props
- [ ] Utworzyć IconRegistry dla reużywalnych ikon
- [ ] Dodać ikony social media (Facebook, Instagram, YouTube)
- [ ] Dodać ikony UI (download, play, lock, etc.)
- [ ] Utworzyć index.js export

### 2.4 Avatar Component
**Lokalizacja:** `src/components/atoms/Avatar/`

- [ ] Utworzyć Avatar.jsx
- [ ] Dodać sizes: `small`, `medium`, `large`
- [ ] Support dla image URL
- [ ] Fallback do inicjałów
- [ ] Utworzyć Avatar.module.css
- [ ] Dodać border/shadow styling
- [ ] Utworzyć index.js export

### 2.5 LoadingSpinner Component
**Lokalizacja:** `src/components/atoms/LoadingSpinner/`

- [ ] Utworzyć LoadingSpinner.jsx
- [ ] Dodać sizes: `small`, `medium`, `large`
- [ ] Dodać fullScreen variant
- [ ] Animacja z CSS lub Framer Motion
- [ ] Użyć raspberry color z design system
- [ ] Utworzyć LoadingSpinner.module.css
- [ ] Zastąpić placeholder w App.jsx
- [ ] Utworzyć index.js export

---

## Faza 3: Komponenty Molekularne (Molecules)

**Priorytet: Wysoki**
**Szacowany czas: 3-4 dni**

### 3.1 Card Component
**Lokalizacja:** `src/components/molecules/Card/`

- [ ] Utworzyć Card.jsx
- [ ] Dodać variants: `default`, `outlined`, `elevated`
- [ ] Support dla image + content layout
- [ ] Hover effects z Framer Motion
- [ ] Utworzyć Card.module.css
- [ ] Responsive padding/spacing
- [ ] Utworzyć index.js export

### 3.2 Accordion Component
**Lokalizacja:** `src/components/molecules/Accordion/`

- [ ] Utworzyć Accordion.jsx
- [ ] Single item expand/collapse
- [ ] Animacja z Framer Motion
- [ ] Icon rotation dla expand state
- [ ] Utworzyć Accordion.module.css
- [ ] Accessibility (ARIA attributes)
- [ ] Utworzyć index.js export

### 3.3 VideoPlayer Component
**Lokalizacja:** `src/components/molecules/VideoPlayer/`

- [ ] Utworzyć VideoPlayer.jsx
- [ ] Support dla Vimeo embeds
- [ ] Custom thumbnail overlay
- [ ] Play button overlay
- [ ] Responsive iframe
- [ ] Utworzyć VideoPlayer.module.css
- [ ] Lazy loading iframe
- [ ] Utworzyć index.js export

### 3.4 AgeTabs Component ⭐ NEW
**Lokalizacja:** `src/components/molecules/AgeTabs/`

- [ ] Utworzyć AgeTabs.jsx
- [ ] Tabs dla 3 grup wiekowych (4-6, 7-9, 10-12)
- [ ] Active state styling
- [ ] Click handling z callback
- [ ] Utworzyć AgeTabs.module.css
- [ ] Responsive layout (stack na mobile)
- [ ] Dodać do specyfikacji w new-components.md
- [ ] Utworzyć index.js export

**Interface:**
```typescript
interface AgeTabsProps {
  tabs: { id: string; label: string; value: string }[];
  activeTab: string;
  onTabChange: (tabValue: string) => void;
}
```

### 3.5 MaterialItem Component ⭐ NEW
**Lokalizacja:** `src/components/molecules/MaterialItem/`

- [ ] Utworzyć MaterialItem.jsx
- [ ] Support dla type: `download` i `play`
- [ ] Display numbering (01, 02, etc.)
- [ ] Icon dla typu materiału
- [ ] File size display (dla downloads)
- [ ] Utworzyć MaterialItem.module.css
- [ ] Hover effects
- [ ] Utworzyć index.js export

**Interface:**
```typescript
interface MaterialItemProps {
  number: string;
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string;
}
```

### 3.6 ProtectedMaterialCard Component ⭐ NEW
**Lokalizacja:** `src/components/molecules/ProtectedMaterialCard/`

- [ ] Utworzyć ProtectedMaterialCard.jsx
- [ ] Lock icon dla materiałów wymagających logowania
- [ ] Title + description display
- [ ] Login button/link
- [ ] Utworzyć ProtectedMaterialCard.module.css
- [ ] Disabled state styling
- [ ] Utworzyć index.js export

### 3.7 EmailCopyButton Component ⭐ NEW
**Lokalizacja:** `src/components/molecules/EmailCopyButton/`

- [ ] Utworzyć EmailCopyButton.jsx
- [ ] Display email address
- [ ] Copy to clipboard functionality
- [ ] Success state (2s timeout)
- [ ] Icon change (copy → check)
- [ ] Utworzyć EmailCopyButton.module.css
- [ ] Toast notification (opcjonalnie)
- [ ] Utworzyć index.js export

### 3.8 QuoteBox Component ⭐ NEW
**Lokalizacja:** `src/components/molecules/QuoteBox/`

- [ ] Utworzyć QuoteBox.jsx
- [ ] Highlighted quote styling
- [ ] Border-left accent (raspberry)
- [ ] Background color (beige-2)
- [ ] Citation support
- [ ] Utworzyć QuoteBox.module.css
- [ ] Responsive padding
- [ ] Utworzyć index.js export

---

## Faza 4: Komponenty Organizm (Organisms)

**Priorytet: Średni**
**Szacowany czas: 4-5 dni**

### 4.1 Header Component (Full Version)
**Lokalizacja:** `src/components/organisms/Header/`

- [ ] Zastąpić SimpleHeader w PageLayout
- [ ] Logo z linkiem do home
- [ ] Desktop navigation (NavLink z React Router)
- [ ] Mobile menu toggle button
- [ ] Sticky header behavior
- [ ] Utworzyć Header.module.css
- [ ] Active link highlighting
- [ ] Utworzyć index.js export

### 4.2 MobileMenu Component
**Lokalizacja:** `src/components/organisms/MobileMenu/`

- [ ] Utworzyć MobileMenu.jsx
- [ ] Slide-in animation (Framer Motion)
- [ ] Close button
- [ ] Navigation links
- [ ] Social links
- [ ] Overlay backdrop
- [ ] Utworzyć MobileMenu.module.css
- [ ] Body scroll lock when open
- [ ] Utworzyć index.js export

### 4.3 Footer Component (Full Version)
**Lokalizacja:** `src/components/organisms/Footer/`

- [ ] Zastąpić SimpleFooter w PageLayout
- [ ] Logo
- [ ] Navigation links (columns)
- [ ] Social media icons
- [ ] Copyright text
- [ ] Newsletter signup (opcjonalnie)
- [ ] Utworzyć Footer.module.css
- [ ] Responsive layout (stack na mobile)
- [ ] Utworzyć index.js export

### 4.4 ExpandableArticles Component ⭐ NEW
**Lokalizacja:** `src/components/organisms/ExpandableArticles/`

- [ ] Utworzyć ExpandableArticles.jsx
- [ ] Lista accordion items dla artykułów
- [ ] Wykorzystać Accordion component
- [ ] Display title + excerpt
- [ ] Expand do pełnego contentu
- [ ] Utworzyć ExpandableArticles.module.css
- [ ] Markdown rendering dla content
- [ ] Utworzyć index.js export

### 4.5 MaterialsList Component ⭐ NEW
**Lokalizacja:** `src/components/organisms/MaterialsList/`

- [ ] Utworzyć MaterialsList.jsx
- [ ] Grid layout dla MaterialItem
- [ ] Filter by type (opcjonalnie)
- [ ] Empty state (brak materiałów)
- [ ] Wykorzystać MaterialItem component
- [ ] Utworzyć MaterialsList.module.css
- [ ] Responsive grid (1 col mobile, 2-3 desktop)
- [ ] Utworzyć index.js export

### 4.6 ArticleContent Component ⭐ NEW
**Lokalizacja:** `src/components/organisms/ArticleContent/`

- [ ] Utworzyć ArticleContent.jsx
- [ ] React Markdown integration
- [ ] remark-gfm plugin (tables, strikethrough)
- [ ] Custom styling dla markdown elements
- [ ] QuoteBox dla blockquotes
- [ ] Code syntax highlighting (opcjonalnie)
- [ ] Utworzyć ArticleContent.module.css
- [ ] Responsive typography
- [ ] Utworzyć index.js export

### 4.7 FAQAccordion Component
**Lokalizacja:** `src/components/organisms/FAQAccordion/`

- [ ] Utworzyć FAQAccordion.jsx
- [ ] Lista Accordion items dla FAQ
- [ ] Category filtering
- [ ] Search functionality (opcjonalnie)
- [ ] Wykorzystać faqData
- [ ] Utworzyć FAQAccordion.module.css
- [ ] Animation dla expand/collapse
- [ ] Utworzyć index.js export

---

## Faza 5: Sekcje Strony Głównej (Sections)

**Priorytet: Średni**
**Szacowany czas: 5-6 dni**

### 5.1 HeroSection
**Lokalizacja:** `src/sections/HeroSection/`

- [ ] Utworzyć HeroSection.jsx
- [ ] Large heading (Happy Season font)
- [ ] Subtitle text
- [ ] CTA button(s)
- [ ] Background image/color (beige-2)
- [ ] Utworzyć HeroSection.module.css
- [ ] Scroll animation (Framer Motion)
- [ ] Responsive layout
- [ ] Utworzyć index.js export

### 5.2 IntroSection
**Lokalizacja:** `src/sections/IntroSection/`

- [ ] Utworzyć IntroSection.jsx
- [ ] Introduction text
- [ ] Image + text layout
- [ ] Utworzyć IntroSection.module.css
- [ ] Two-column layout (desktop)
- [ ] Stack on mobile
- [ ] Utworzyć index.js export

### 5.3 GadkiRulesSection
**Lokalizacja:** `src/sections/GadkiRulesSection/`

- [ ] Utworzyć GadkiRulesSection.jsx
- [ ] 5 zasad GADKI
- [ ] Numbered list styling
- [ ] Icons dla każdej zasady
- [ ] Utworzyć GadkiRulesSection.module.css
- [ ] Animation on scroll
- [ ] Utworzyć index.js export

### 5.4 MaterialsSection
**Lokalizacja:** `src/sections/MaterialsSection/`

- [ ] Utworzyć MaterialsSection.jsx
- [ ] Showcase 3 kategorie materiałów
- [ ] Cards z links do pages
- [ ] Preview content
- [ ] Utworzyć MaterialsSection.module.css
- [ ] 3-column grid (desktop)
- [ ] Stack on mobile
- [ ] Utworzyć index.js export

### 5.5 AboutSection
**Lokalizacja:** `src/sections/AboutSection/`

- [ ] Utworzyć AboutSection.jsx
- [ ] O kampanii text
- [ ] Team/organization info
- [ ] Avatars (opcjonalnie)
- [ ] Utworzyć AboutSection.module.css
- [ ] Background color variant
- [ ] Utworzyć index.js export

### 5.6 FAQSection
**Lokalizacja:** `src/sections/FAQSection/`

- [ ] Utworzyć FAQSection.jsx
- [ ] Display 5 najważniejszych FAQ
- [ ] Wykorzystać FAQAccordion
- [ ] Link do /faq page
- [ ] Utworzyć FAQSection.module.css
- [ ] Lazy loading (React.lazy)
- [ ] Utworzyć index.js export

### 5.7 HelpSection
**Lokalizacja:** `src/sections/HelpSection/`

- [ ] Utworzyć HelpSection.jsx
- [ ] CTA do contact/help
- [ ] Email contact info
- [ ] Social links
- [ ] Utworzyć HelpSection.module.css
- [ ] Background accent color
- [ ] Utworzyć index.js export

---

## Faza 6: Rozbudowa Stron (Pages Enhancement)

**Priorytet: Średni**
**Szacowany czas: 4-5 dni**

### 6.1 HomePage - Full Implementation
**Lokalizacja:** `src/pages/HomePage/`

- [ ] Zastąpić placeholder content
- [ ] Import wszystkich sections
- [ ] HeroSection
- [ ] IntroSection
- [ ] GadkiRulesSection
- [ ] MaterialsSection
- [ ] AboutSection
- [ ] FAQSection (lazy loaded)
- [ ] HelpSection
- [ ] Scroll animations
- [ ] Zaktualizować HomePage.module.css

### 6.2 ForChildrenPage - Full Implementation
**Lokalizacja:** `src/pages/ForChildrenPage/`

- [ ] Zastąpić placeholder content
- [ ] Hero section dla dzieci
- [ ] AgeTabs component integration
- [ ] VideoPlayer dla głównego filmu
- [ ] MaterialsList dla wybranej grupy wiekowej
- [ ] Filter materials by activeTab
- [ ] Zaktualizować ForChildrenPage.module.css
- [ ] Add page-specific animations

### 6.3 ForParentsPage - Full Implementation
**Lokalizacja:** `src/pages/ForParentsPage/`

- [ ] Zastąpić placeholder content
- [ ] Hero section dla rodziców
- [ ] ExpandableArticles component
- [ ] Featured articles display
- [ ] Category filtering
- [ ] CTA do więcej artykułów
- [ ] Zaktualizować ForParentsPage.module.css
- [ ] Add page-specific animations

### 6.4 ForEducatorsPage - Full Implementation
**Lokalizacja:** `src/pages/ForEducatorsPage/`

- [ ] Zastąpić placeholder content
- [ ] Hero section dla edukatorów
- [ ] Public MaterialsList
- [ ] ProtectedMaterialCard section
- [ ] Login CTA dla protected materials
- [ ] Zaktualizować ForEducatorsPage.module.css
- [ ] Add page-specific animations

### 6.5 FAQPage - Full Implementation
**Lokalizacja:** `src/pages/FAQPage/`

- [ ] Zastąpić placeholder content
- [ ] Hero section z search bar
- [ ] FAQAccordion z wszystkimi FAQ
- [ ] Category filtering tabs
- [ ] EmailCopyButton dla contact
- [ ] Zaktualizować FAQPage.module.css
- [ ] Search functionality

### 6.6 ArticlePage - Enhanced Implementation
**Lokalizacja:** `src/pages/ArticlePage/`

- [ ] Dodać cover image
- [ ] Author bio section
- [ ] ArticleContent component
- [ ] Related articles (sidebar/bottom)
- [ ] Share buttons (opcjonalnie)
- [ ] Zaktualizować ArticlePage.module.css
- [ ] Reading progress indicator (opcjonalnie)

---

## Faza 7: Hooks i Utilities

**Priorytet: Niski**
**Szacowany czas: 2-3 dni**

### 7.1 Custom Hooks
**Lokalizacja:** `src/hooks/`

- [ ] **useScrollAnimation.js** - Intersection Observer dla animacji
- [ ] **useMobileMenu.js** - State management dla mobile menu
- [ ] **useAccordion.js** - Accordion state logic
- [ ] **useMediaQuery.js** - Responsive breakpoints
- [ ] **useScrollToTop.js** - Scroll to top on route change (dodać do App.jsx)

### 7.2 Utility Functions
**Lokalizacja:** `src/utils/`

- [ ] **constants.js** - Kolory, breakpoints, inne stałe
- [ ] **animations.js** - Framer Motion configs
- [ ] **helpers.js** - Format dates, truncate text, etc.
- [ ] **dataHelpers.js** - Filter, search helpers

### 7.3 Context Providers
**Lokalizacja:** `src/context/`

- [ ] **MenuContext.jsx** - Mobile menu state (opcjonalnie)
- [ ] **ThemeContext.jsx** - Dark mode support (opcjonalnie)

---

## Faza 8: Styling i Responsywność

**Priorytet: Wysoki**
**Szacowany czas: 3-4 dni**

### 8.1 Global Styles Enhancement
- [ ] Dodać więcej utility classes do mixins.css
- [ ] Typography helpers
- [ ] Spacing helpers
- [ ] Color helpers
- [ ] Zaktualizować index.css

### 8.2 Responsive Design
- [ ] Przejrzeć wszystkie komponenty pod kątem mobile
- [ ] Przetestować na breakpoints: 640px, 768px, 1024px, 1280px
- [ ] Stack layouts na mobile
- [ ] Adjust font sizes
- [ ] Adjust spacing
- [ ] Touch-friendly buttons (min 44x44px)

### 8.3 Animations
- [ ] Framer Motion dla transitions
- [ ] Scroll animations (IntersectionObserver)
- [ ] Page transitions
- [ ] Hover effects
- [ ] Loading states
- [ ] Micro-interactions

---

## Faza 9: Optymalizacja i Performance

**Priorytet: Średni**
**Szacowany czas: 2-3 dni**

### 9.1 Performance Optimization
- [ ] Lazy loading dla images
- [ ] React.lazy dla heavy components
- [ ] Code splitting verification
- [ ] Bundle size analysis (`npm run build`)
- [ ] Lighthouse audit
- [ ] Web Vitals optimization (FCP, LCP, CLS)

### 9.2 SEO Optimization
- [ ] Helmet meta tags dla wszystkich stron
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Sitemap generation (opcjonalnie)
- [ ] robots.txt

### 9.3 Accessibility (a11y)
- [ ] Semantic HTML
- [ ] ARIA attributes
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Color contrast (WCAG AA)
- [ ] Screen reader testing
- [ ] Alt text dla images

---

## Faza 10: Testing i Deployment

**Priorytet: Wysoki**
**Szacowany czas: 2-3 dni**

### 10.1 Manual Testing
- [ ] Test wszystkich routes
- [ ] Test mobile menu
- [ ] Test accordions
- [ ] Test forms (jeśli są)
- [ ] Test na różnych browserach (Chrome, Firefox, Safari)
- [ ] Test na różnych urządzeniach (desktop, tablet, mobile)

### 10.2 Automated Testing (opcjonalnie)
- [ ] Setup Vitest
- [ ] Component unit tests
- [ ] Integration tests
- [ ] E2E tests z Playwright/Cypress

### 10.3 Deployment
- [ ] Wybór hosting (Vercel, Netlify, etc.)
- [ ] Environment variables setup
- [ ] Production build
- [ ] Deploy
- [ ] Custom domain (opcjonalnie)
- [ ] SSL certificate
- [ ] Analytics setup (Google Analytics, Plausible)

---

## Dodatkowe Funkcjonalności (Nice-to-Have)

**Priorytet: Niski**
**Do implementacji w przyszłości**

### Newsletter Signup
- [ ] Newsletter form component
- [ ] Email validation
- [ ] Integration z email service (Mailchimp, etc.)

### Search Functionality
- [ ] Global search
- [ ] Search articles
- [ ] Search materials
- [ ] Search FAQ

### User Authentication (dla edukatorów)
- [ ] Login form
- [ ] Protected routes
- [ ] Session management
- [ ] Password reset

### Content Management
- [ ] CMS integration (Strapi, Contentful, etc.)
- [ ] Dynamic content loading
- [ ] Admin panel

### Progressive Web App (PWA)
- [ ] Service Worker
- [ ] Offline support
- [ ] App manifest
- [ ] Install prompt

---

## Metryki Sukcesu

### Performance Targets
- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 3s

### SEO Targets
- [ ] All pages have unique meta descriptions
- [ ] All images have alt text
- [ ] Proper heading hierarchy
- [ ] Mobile-friendly (Google test)

### Accessibility Targets
- [ ] WCAG AA compliance
- [ ] Keyboard navigable
- [ ] Screen reader compatible
- [ ] Color contrast ratios pass

---

## Harmonogram (Szacunkowy)

**Łącznie: ~25-35 dni roboczych**

| Faza | Czas | Status |
|------|------|--------|
| Faza 1: Fundament | 1 dzień | ✅ Ukończona |
| Faza 2: Atoms | 2-3 dni | ⏳ Oczekuje |
| Faza 3: Molecules | 3-4 dni | ⏳ Oczekuje |
| Faza 4: Organisms | 4-5 dni | ⏳ Oczekuje |
| Faza 5: Sections | 5-6 dni | ⏳ Oczekuje |
| Faza 6: Pages | 4-5 dni | ⏳ Oczekuje |
| Faza 7: Hooks/Utils | 2-3 dni | ⏳ Oczekuje |
| Faza 8: Styling | 3-4 dni | ⏳ Oczekuje |
| Faza 9: Optimization | 2-3 dni | ⏳ Oczekuje |
| Faza 10: Testing/Deploy | 2-3 dni | ⏳ Oczekuje |

---

## Notatki i Uwagi

### Zmiany względem pierwotnego planu
- React 19 downgrade do React 18 (kompatybilność z react-helmet-async)
- Vite 7 downgrade do Vite 5 (kompatybilność z Node.js 18)
- Wszystkie zależności zainstalowane z `--legacy-peer-deps`

### Decyzje techniczne
- CSS Modules zamiast Tailwind (według wymagań projektu)
- Framer Motion dla animacji
- React Router v7 (najnowsza wersja)
- React Helmet Async dla SEO

### Do dyskusji z zespołem
- Czy potrzebne jest user authentication dla edukatorów?
- Czy newsletter signup jest priorytetem?
- Czy potrzebny CMS czy wystarczą statyczne dane?
- Jakie analytics (Google Analytics vs Plausible vs inne)?

---

**Ostatnia aktualizacja:** 2024-11-13
**Następna review:** Po ukończeniu Fazy 2
