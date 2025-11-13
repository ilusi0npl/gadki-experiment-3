# 📊 Data Structures - GADKI Project

Complete documentation of all data structures used in the GADKI website.

## Table of Contents

1. [Navigation Data](#navigation-data)
2. [FAQ Data](#faq-data)
3. [Children Materials Data](#children-materials-data)
4. [Parent Articles Data](#parent-articles-data)
5. [Educator Materials Data](#educator-materials-data)
6. [Articles Data](#articles-data)
7. [Social Links Data](#social-links-data)
8. [TypeScript Interfaces](#typescript-interfaces)

---

## Navigation Data

**File:** `src/data/navigation.js`

Main navigation menu structure for Header component.

```javascript
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

### Interface

```typescript
interface NavigationItem {
  id: string;           // Unique identifier
  label: string;        // Display text
  path: string;         // Route path
}
```

### Usage

```jsx
import { mainNavigation } from '@/data/navigation';

const Header = () => {
  return (
    <nav>
      {mainNavigation.map((item) => (
        <NavLink key={item.id} to={item.path}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
```

---

## FAQ Data

**File:** `src/data/faq.js`

Frequently Asked Questions for FAQ page and FAQ section on home page.

```javascript
export const faqData = [
  {
    id: 'faq-1',
    question: 'Czym są GADKI?',
    answer: 'GADKI to kampania edukacyjna wspierająca komunikację i bliskość w rodzinie poprzez rozmowy o emocjach.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Dla kogo są materiały edukacyjne?',
    answer: 'Materiały są dostępne dla dzieci (4-12 lat), rodziców i edukatorów. Każda grupa ma dedykowane zasoby.',
    category: 'materials',
  },
  {
    id: 'faq-3',
    question: 'Jak mogę pobrać materiały?',
    answer: 'Materiały można pobrać bezpośrednio ze strony w formacie PDF. Nie wymagają rejestracji.',
    category: 'materials',
  },
  {
    id: 'faq-4',
    question: 'Czy materiały są bezpłatne?',
    answer: 'Tak, wszystkie materiały są całkowicie bezpłatne i dostępne dla wszystkich.',
    category: 'general',
  },
  {
    id: 'faq-5',
    question: 'Jak często publikowane są nowe materiały?',
    answer: 'Nowe materiały publikujemy regularnie. Śledź nasz newsletter lub social media, aby być na bieżąco.',
    category: 'materials',
  },
];

// Categories for filtering
export const faqCategories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'general', label: 'Ogólne' },
  { id: 'materials', label: 'Materiały' },
];
```

### Interface

```typescript
interface FAQItem {
  id: string;           // Unique identifier
  question: string;     // Question text
  answer: string;       // Answer text (can be HTML/Markdown)
  category: string;     // Category for filtering
}

interface FAQCategory {
  id: string;           // Category ID
  label: string;        // Display name
}
```

### Usage

```jsx
import { faqData, faqCategories } from '@/data/faq';
import Accordion from '@/components/molecules/Accordion';

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <section>
      {filteredFAQs.map((faq) => (
        <Accordion
          key={faq.id}
          title={faq.question}
          content={faq.answer}
        />
      ))}
    </section>
  );
};
```

---

## Children Materials Data

**File:** `src/data/childrenMaterials.js`

Educational materials organized by age groups (4-6, 7-9, 10-12 years).

```javascript
export const childrenMaterials = [
  // Age 4-6
  {
    id: 'cm-1',
    ageGroup: '4-6',
    number: '01',
    title: 'Wprowadzenie do emocji',
    type: 'download',
    url: '/downloads/children/4-6/wprowadzenie-emocje.pdf',
    fileSize: '2.3 MB',
    description: 'Podstawowe emocje i ich rozpoznawanie',
  },
  {
    id: 'cm-2',
    ageGroup: '4-6',
    number: '02',
    title: 'Film edukacyjny - Nazywanie emocji',
    type: 'play',
    url: 'https://vimeo.com/xxxxx',
    thumbnailUrl: '/images/thumbnails/film-emocje-4-6.jpg',
    duration: '5:30',
    description: 'Krótki film uczący nazywania podstawowych emocji',
  },
  {
    id: 'cm-3',
    ageGroup: '4-6',
    number: '03',
    title: 'Karty z emocjami',
    type: 'download',
    url: '/downloads/children/4-6/karty-emocje.pdf',
    fileSize: '1.8 MB',
    description: 'Karty do druku do gry w nazywanie emocji',
  },

  // Age 7-9
  {
    id: 'cm-4',
    ageGroup: '7-9',
    number: '01',
    title: 'Rozpoznawanie emocji u innych',
    type: 'download',
    url: '/downloads/children/7-9/rozpoznawanie-emocji.pdf',
    fileSize: '3.1 MB',
    description: 'Ćwiczenia na empatię i rozpoznawanie emocji',
  },
  {
    id: 'cm-5',
    ageGroup: '7-9',
    number: '02',
    title: 'Film - Wyrażanie emocji',
    type: 'play',
    url: 'https://vimeo.com/xxxxx',
    thumbnailUrl: '/images/thumbnails/film-emocje-7-9.jpg',
    duration: '7:15',
    description: 'Film o zdrowych sposobach wyrażania emocji',
  },

  // Age 10-12
  {
    id: 'cm-6',
    ageGroup: '10-12',
    number: '01',
    title: 'Złożone emocje i ich rozumienie',
    type: 'download',
    url: '/downloads/children/10-12/zlozoone-emocje.pdf',
    fileSize: '4.2 MB',
    description: 'Materiał o złożonych emocjach i ich przyczynach',
  },
  {
    id: 'cm-7',
    ageGroup: '10-12',
    number: '02',
    title: 'Film - Radzenie sobie ze stresem',
    type: 'play',
    url: 'https://vimeo.com/xxxxx',
    thumbnailUrl: '/images/thumbnails/film-stres-10-12.jpg',
    duration: '9:20',
    description: 'Strategie radzenia sobie ze stresem i trudnymi emocjami',
  },
];

// Age groups metadata
export const ageGroups = [
  {
    id: '4-6',
    label: '4-6 lat',
    description: 'Materiały dla najmłodszych dzieci',
    color: '#e83f4b', // raspberry
  },
  {
    id: '7-9',
    label: '7-9 lat',
    description: 'Materiały dla dzieci w wieku szkolnym',
    color: '#f6a81f', // orange
  },
  {
    id: '10-12',
    label: '10-12 lat',
    description: 'Materiały dla starszych dzieci',
    color: '#8b5cf6', // purple
  },
];
```

### Interface

```typescript
interface ChildrenMaterial {
  id: string;               // Unique identifier
  ageGroup: '4-6' | '7-9' | '10-12';  // Age group
  number: string;           // Display number (01, 02, etc.)
  title: string;            // Material title
  type: 'download' | 'play';  // Type of material
  url: string;              // Download URL or video URL
  fileSize?: string;        // File size (for downloads)
  thumbnailUrl?: string;    // Thumbnail (for videos)
  duration?: string;        // Video duration (for videos)
  description: string;      // Short description
}

interface AgeGroup {
  id: string;               // Age group ID
  label: string;            // Display label
  description: string;      // Description
  color: string;            // Theme color
}
```

### Usage

```jsx
import { childrenMaterials, ageGroups } from '@/data/childrenMaterials';
import MaterialItem from '@/components/molecules/MaterialItem';

const ForChildrenPage = () => {
  const [activeAge, setActiveAge] = useState('4-6');

  const materials = childrenMaterials.filter(
    (m) => m.ageGroup === activeAge
  );

  return (
    <section>
      {materials.map((material) => (
        <MaterialItem
          key={material.id}
          number={material.number}
          title={material.title}
          type={material.type}
          url={material.url}
          fileSize={material.fileSize}
        />
      ))}
    </section>
  );
};
```

---

## Parent Articles Data

**File:** `src/data/parentArticles.js`

Educational articles for parents about communication and child development.

```javascript
export const parentArticles = [
  {
    id: 'pa-1',
    title: 'Jak rozmawiać z dzieckiem o emocjach?',
    slug: 'jak-rozmawiac-z-dzieckiem-o-emocjach',
    excerpt: 'Praktyczne wskazówki, jak budować otwartą komunikację z dzieckiem na temat emocji i uczuć.',
    category: 'communication',
    featured: true,
    expandable: true,  // For ExpandableArticles component
    content: `
# Jak rozmawiać z dzieckiem o emocjach?

## Wprowadzenie

Rozmowa o emocjach z dzieckiem to kluczowy element budowania zdrowej komunikacji w rodzinie...

## 5 kroków do lepszej komunikacji

1. **Stwórz bezpieczną przestrzeń** - Dziecko musi czuć się akceptowane
2. **Nazywaj emocje** - Pomóż dziecku nazwać to, co czuje
3. **Akceptuj wszystkie emocje** - Nie ma złych emocji
4. **Uczaj sposobów wyrażania** - Pokazuj zdrowe sposoby wyrażania emocji
5. **Bądź przykładem** - Modeluj zdrową komunikację emocjonalną

...
    `,
  },
  {
    id: 'pa-2',
    title: 'Budowanie bliskości przez codzienne rozmowy',
    slug: 'budowanie-bliskosci-przez-rozmowy',
    excerpt: 'Dlaczego codzienne rozmowy są ważne i jak je wprowadzić do rodzinnej rutyny.',
    category: 'bonding',
    featured: true,
    expandable: true,
    content: `
# Budowanie bliskości przez codzienne rozmowy

Regularne rozmowy to fundament bliskich relacji rodzinnych...
    `,
  },
  {
    id: 'pa-3',
    title: 'Radzenie sobie z trudnymi emocjami dziecka',
    slug: 'radzenie-sobie-z-trudnymi-emocjami',
    excerpt: 'Co robić, gdy dziecko odczuwa złość, strach czy smutek? Praktyczne strategie dla rodziców.',
    category: 'emotions',
    featured: false,
    expandable: true,
    content: `
# Radzenie sobie z trudnymi emocjami dziecka

## Złość

Złość to naturalna emocja. Kluczem jest...
    `,
  },
  {
    id: 'pa-4',
    title: 'Rytuały rodzinne wspierające komunikację',
    slug: 'rytualy-rodzinne',
    excerpt: 'Jak tworzyć rodzinne rytuały, które sprzyjają otwartej komunikacji.',
    category: 'bonding',
    featured: false,
    expandable: true,
    content: `
# Rytuały rodzinne wspierające komunikację

Przykłady rytuałów:
- Wieczorne rozmowy przy kolacji
- Cotygodniowe "rozmowy o tygodniu"
...
    `,
  },
];

// Categories for filtering
export const parentArticleCategories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'communication', label: 'Komunikacja' },
  { id: 'bonding', label: 'Bliskość' },
  { id: 'emotions', label: 'Emocje' },
];
```

### Interface

```typescript
interface ParentArticle {
  id: string;               // Unique identifier
  title: string;            // Article title
  slug: string;             // URL slug
  excerpt: string;          // Short description
  category: string;         // Category for filtering
  featured: boolean;        // Is featured article
  expandable: boolean;      // For accordion display
  content: string;          // Full content (Markdown)
}

interface ArticleCategory {
  id: string;               // Category ID
  label: string;            // Display name
}
```

### Usage

```jsx
import { parentArticles, parentArticleCategories } from '@/data/parentArticles';
import ExpandableArticles from '@/components/organisms/ExpandableArticles';

const ForParentsPage = () => {
  const featuredArticles = parentArticles.filter((a) => a.featured);

  return (
    <section>
      <ExpandableArticles articles={featuredArticles} />
    </section>
  );
};
```

---

## Educator Materials Data

**File:** `src/data/educatorMaterials.js`

Materials and resources for educators working with GADKI program.

```javascript
export const educatorMaterials = [
  // Public materials
  {
    id: 'em-1',
    number: '01',
    title: 'Wprowadzenie do programu GADKI',
    type: 'download',
    url: '/downloads/educators/wprowadzenie-gadki.pdf',
    fileSize: '3.5 MB',
    requiresLogin: false,
    description: 'Ogólne informacje o programie i jego celach',
  },
  {
    id: 'em-2',
    number: '02',
    title: 'Scenariusze zajęć - grupa 4-6 lat',
    type: 'download',
    url: '/downloads/educators/scenariusze-4-6.pdf',
    fileSize: '4.2 MB',
    requiresLogin: false,
    description: 'Gotowe scenariusze zajęć dla najmłodszych',
  },
  {
    id: 'em-3',
    number: '03',
    title: 'Film instruktażowy - prowadzenie zajęć',
    type: 'play',
    url: 'https://vimeo.com/xxxxx',
    thumbnailUrl: '/images/thumbnails/film-instruktaz.jpg',
    duration: '12:30',
    requiresLogin: false,
    description: 'Jak skutecznie prowadzić zajęcia GADKI',
  },
];

// Protected materials (require login/registration)
export const protectedEducatorMaterials = [
  {
    id: 'pem-1',
    title: 'Formularz raportowania zajęć',
    description: 'Formularz do raportowania przeprowadzonych zajęć',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/raportowanie',
    icon: 'document',
  },
  {
    id: 'pem-2',
    title: 'Zaawansowane materiały metodyczne',
    description: 'Szczegółowe materiały dla doświadczonych edukatorów',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/materialy-zaawansowane',
    icon: 'book',
  },
  {
    id: 'pem-3',
    title: 'Certyfikaty dla uczestników',
    description: 'Generuj certyfikaty dla dzieci uczestniczących w programie',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/certyfikaty',
    icon: 'award',
  },
];
```

### Interface

```typescript
interface EducatorMaterial {
  id: string;               // Unique identifier
  number: string;           // Display number (01, 02, etc.)
  title: string;            // Material title
  type: 'download' | 'play';  // Type of material
  url: string;              // Download URL or video URL
  fileSize?: string;        // File size (for downloads)
  thumbnailUrl?: string;    // Thumbnail (for videos)
  duration?: string;        // Video duration (for videos)
  requiresLogin: boolean;   // Requires authentication
  description: string;      // Short description
}

interface ProtectedMaterial {
  id: string;               // Unique identifier
  title: string;            // Material title
  description: string;      // Description
  requiresLogin: boolean;   // Always true for protected
  redirectTo: string;       // Login redirect URL
  icon: string;             // Icon name
}
```

### Usage

```jsx
import { educatorMaterials, protectedEducatorMaterials } from '@/data/educatorMaterials';
import MaterialItem from '@/components/molecules/MaterialItem';
import ProtectedMaterialCard from '@/components/molecules/ProtectedMaterialCard';

const ForEducatorsPage = () => {
  return (
    <>
      <section>
        <h2>Materiały ogólnodostępne</h2>
        {educatorMaterials.map((material) => (
          <MaterialItem
            key={material.id}
            number={material.number}
            title={material.title}
            type={material.type}
            url={material.url}
            fileSize={material.fileSize}
          />
        ))}
      </section>

      <section>
        <h2>Strefa dla edukatorów (wymagane logowanie)</h2>
        {protectedEducatorMaterials.map((material) => (
          <ProtectedMaterialCard
            key={material.id}
            title={material.title}
            description={material.description}
            requiresLogin={material.requiresLogin}
            onLoginClick={() => navigate(material.redirectTo)}
          />
        ))}
      </section>
    </>
  );
};
```

---

## Articles Data

**File:** `src/data/articles.js`

Blog-style articles for dynamic article pages (`/artykul/:slug`).

```javascript
export const articles = [
  {
    id: 'art-1',
    slug: 'dlaczego-rozmowy-sa-wazne',
    title: 'Dlaczego rozmowy o emocjach są ważne dla rozwoju dziecka?',
    excerpt: 'Naukowcy zgodnie potwierdzają, że otwarta komunikacja o emocjach ma kluczowe znaczenie dla zdrowego rozwoju emocjonalnego dzieci.',
    author: 'Dr Anna Kowalska',
    authorBio: 'Psycholog dziecięcy, specjalistka od rozwoju emocjonalnego',
    date: '2024-03-15',
    readTime: '8 min',
    category: 'Rozwój',
    tags: ['emocje', 'rozwój', 'komunikacja'],
    featured: true,
    coverImage: '/images/articles/rozmowy-wazne.jpg',
    content: `
# Dlaczego rozmowy o emocjach są ważne dla rozwoju dziecka?

## Wprowadzenie

Naukowcy zgodnie potwierdzają, że otwarta komunikacja o emocjach ma kluczowe znaczenie dla zdrowego rozwoju emocjonalnego dzieci.

## Badania naukowe

Według badań przeprowadzonych przez Uniwersytet Warszawski...

> "Dzieci, które regularnie rozmawiają z rodzicami o emocjach, wykazują wyższą inteligencję emocjonalną i lepsze radzenie sobie ze stresem" - Dr Anna Kowalska

## Praktyczne wskazówki

1. **Codzienne rozmowy** - Znajdź 15 minut dziennie
2. **Nazywanie emocji** - Ucz dziecko słownictwa emocjonalnego
3. **Akceptacja** - Wszystkie emocje są ważne

## Podsumowanie

Regularne rozmowy o emocjach to inwestycja w przyszłość dziecka...
    `,
  },
  {
    id: 'art-2',
    slug: '10-pytan-ktore-pomoga-rozpoczac-rozmowe',
    title: '10 pytań, które pomogą rozpocząć rozmowę z dzieckiem',
    excerpt: 'Sprawdzone pytania otwarte, które zachęcają dziecko do dzielenia się myślami i emocjami.',
    author: 'Magdalena Nowak',
    authorBio: 'Pedagog, coach rodzicielski',
    date: '2024-03-10',
    readTime: '5 min',
    category: 'Praktyka',
    tags: ['rozmowa', 'pytania', 'praktyka'],
    featured: false,
    coverImage: '/images/articles/10-pytan.jpg',
    content: `
# 10 pytań, które pomogą rozpocząć rozmowę z dzieckiem

## Lista pytań otwartych

1. Co było dzisiaj najlepszego w Twojej szkole/przedszkolu?
2. Czy coś Cię dziś zaskoczyło?
3. Z kim dzisiaj się bawiłeś/bawiłaś?
...
    `,
  },
];

// Categories
export const articleCategories = [
  { id: 'all', label: 'Wszystkie' },
  { id: 'rozwoj', label: 'Rozwój' },
  { id: 'praktyka', label: 'Praktyka' },
  { id: 'emocje', label: 'Emocje' },
];
```

### Interface

```typescript
interface Article {
  id: string;               // Unique identifier
  slug: string;             // URL slug
  title: string;            // Article title
  excerpt: string;          // Short description
  author: string;           // Author name
  authorBio: string;        // Author bio
  date: string;             // Publication date (YYYY-MM-DD)
  readTime: string;         // Estimated read time
  category: string;         // Article category
  tags: string[];           // Article tags
  featured: boolean;        // Is featured article
  coverImage: string;       // Cover image URL
  content: string;          // Full content (Markdown)
}

interface ArticleCategory {
  id: string;               // Category ID
  label: string;            // Display name
}
```

### Usage

```jsx
import { useParams } from 'react-router-dom';
import { articles } from '@/data/articles';
import ArticleContent from '@/components/organisms/ArticleContent';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  return (
    <article>
      <header>
        <h1>{article.title}</h1>
        <p>{article.author} • {article.date} • {article.readTime}</p>
      </header>
      <ArticleContent content={article.content} />
    </article>
  );
};
```

---

## Social Links Data

**File:** `src/data/socialLinks.js`

Social media links for Footer component.

```javascript
export const socialLinks = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com/gadki',
    icon: 'facebook',
    ariaLabel: 'Odwiedź nasz profil na Facebooku',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/gadki',
    icon: 'instagram',
    ariaLabel: 'Obserwuj nas na Instagramie',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/gadki',
    icon: 'youtube',
    ariaLabel: 'Subskrybuj nasz kanał YouTube',
  },
];
```

### Interface

```typescript
interface SocialLink {
  id: string;               // Unique identifier
  name: string;             // Platform name
  url: string;              // Profile URL
  icon: string;             // Icon name
  ariaLabel: string;        // Accessibility label
}
```

### Usage

```jsx
import { socialLinks } from '@/data/socialLinks';
import Icon from '@/components/atoms/Icon';

const Footer = () => {
  return (
    <footer>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
        >
          <Icon name={link.icon} />
        </a>
      ))}
    </footer>
  );
};
```

---

## TypeScript Interfaces

**File:** `src/types/index.ts`

Centralized TypeScript type definitions for entire project.

```typescript
// Navigation
export interface NavigationItem {
  id: string;
  label: string;
  path: string;
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  label: string;
}

// Children Materials
export interface ChildrenMaterial {
  id: string;
  ageGroup: '4-6' | '7-9' | '10-12';
  number: string;
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string;
  thumbnailUrl?: string;
  duration?: string;
  description: string;
}

export interface AgeGroup {
  id: string;
  label: string;
  description: string;
  color: string;
}

// Parent Articles
export interface ParentArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured: boolean;
  expandable: boolean;
  content: string;
}

// Educator Materials
export interface EducatorMaterial {
  id: string;
  number: string;
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string;
  thumbnailUrl?: string;
  duration?: string;
  requiresLogin: boolean;
  description: string;
}

export interface ProtectedMaterial {
  id: string;
  title: string;
  description: string;
  requiresLogin: boolean;
  redirectTo: string;
  icon: string;
}

// Articles
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorBio: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  coverImage: string;
  content: string;
}

// Social Links
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

// Generic Category
export interface Category {
  id: string;
  label: string;
}
```

### Usage

```typescript
import type { ChildrenMaterial, AgeGroup } from '@/types';

const materials: ChildrenMaterial[] = [
  {
    id: 'cm-1',
    ageGroup: '4-6',
    // TypeScript will enforce correct types
  },
];
```

---

## Data Management Best Practices

### 1. File Organization

Keep related data together but separate from components:

```
src/data/
├── navigation.js
├── faq.js
├── childrenMaterials.js
├── parentArticles.js
├── educatorMaterials.js
├── articles.js
└── socialLinks.js
```

### 2. Data Validation

Use PropTypes or TypeScript for runtime validation:

```javascript
import PropTypes from 'prop-types';

export const materialShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['download', 'play']).isRequired,
  url: PropTypes.string.isRequired,
});
```

### 3. Constants

Extract magic strings to constants:

```javascript
// src/utils/constants.js
export const AGE_GROUPS = {
  YOUNG: '4-6',
  MIDDLE: '7-9',
  OLDER: '10-12',
};

export const MATERIAL_TYPES = {
  DOWNLOAD: 'download',
  PLAY: 'play',
};
```

### 4. Data Fetching (Future)

Current data is static. For future API integration:

```javascript
// src/services/api.js
export const fetchChildrenMaterials = async (ageGroup) => {
  const response = await fetch(`/api/materials/children?age=${ageGroup}`);
  return response.json();
};
```

### 5. Search/Filter Helpers

```javascript
// src/utils/dataHelpers.js
export const filterByCategory = (items, category) => {
  if (category === 'all') return items;
  return items.filter((item) => item.category === category);
};

export const searchByQuery = (items, query) => {
  const lowerQuery = query.toLowerCase();
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description?.toLowerCase().includes(lowerQuery)
  );
};
```

---

## Summary

This document provides complete data structure specifications for:

- **7 data files** with consistent interfaces
- **TypeScript type definitions** for type safety
- **Usage examples** for each data structure
- **Best practices** for data management

All data is currently static and stored in JavaScript files for easy editing. Future iterations can migrate to CMS or API without changing component interfaces.
