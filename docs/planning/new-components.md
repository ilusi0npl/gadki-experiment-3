# 🆕 Nowe Komponenty - Dla Podstron

Ten dokument opisuje **NOWE komponenty** potrzebne do implementacji 5 dodatkowych podstron. Komponenty z `components.md` są **reużywane** tam gdzie to możliwe.

## Spis Treści

1. [Molecules - Nowe](#molecules---nowe)
2. [Organisms - Nowe](#organisms---nowe)
3. [Components Summary](#components-summary)
4. [Reusable vs New](#reusable-vs-new)

---

## Molecules - Nowe

### 1. AgeTabs

**Lokalizacja**: `src/components/molecules/AgeTabs/`
**Używane na**: Dla Dzieci page (`/dla-dzieci`)

#### Opis
Komponent zakładek do przełączania między grupami wiekowymi (4-6, 7-9, 10-12 lat).

#### Props
```typescript
interface AgeTabsProps {
  tabs: AgeTab[];
  activeTab: string;
  onTabChange: (tabValue: string) => void;
  className?: string;
}

interface AgeTab {
  id: string;
  label: string;
  value: string;
}
```

#### Przykład Użycia
```tsx
<AgeTabs
  tabs={[
    { id: 'age-4-6', label: '4-6 lat', value: '4-6' },
    { id: 'age-7-9', label: '7-9 lat', value: '7-9' },
    { id: 'age-10-12', label: '10-12 lat', value: '10-12' },
  ]}
  activeTab={activeTab}
  onTabChange={(value) => setActiveTab(value)}
/>
```

#### Style Highlights
```css
/* AgeTabs.module.css */
.ageTabs {
  display: flex;
  gap: var(--spacing-2);
  border-bottom: 2px solid var(--color-beige-3);
}

.tab {
  padding: var(--spacing-4) var(--spacing-8);
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  color: var(--color-gray);
  cursor: pointer;
  transition: all var(--transition-base);
}

.tab--active {
  color: var(--color-raspberry);
  border-bottom-color: var(--color-raspberry);
}

.tab:hover:not(.tab--active) {
  color: var(--color-raspberry-dark);
}

/* Responsive */
@media (max-width: 640px) {
  .ageTabs {
    flex-direction: column;
  }

  .tab {
    text-align: left;
    border-bottom: none;
    border-left: 3px solid transparent;
    padding-left: var(--spacing-6);
  }

  .tab--active {
    border-left-color: var(--color-raspberry);
  }
}
```

---

### 2. MaterialItem

**Lokalizacja**: `src/components/molecules/MaterialItem/`
**Używane na**: Dla Dzieci, Dla Rodziców, Dla Edukatorów pages

#### Opis
Pojedynczy item na liście materiałów do pobrania/odtworzenia z numeracją.

#### Props
```typescript
interface MaterialItemProps {
  number: string; // '01', '02', etc.
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string; // np. '2.4 MB'
  className?: string;
}
```

#### Przykład Użycia
```tsx
<MaterialItem
  number="01"
  title="Broszura"
  type="download"
  url="/downloads/broszura.pdf"
  fileSize="2.4 MB"
/>
```

#### Struktura
```tsx
// MaterialItem.tsx
const MaterialItem: React.FC<MaterialItemProps> = ({
  number,
  title,
  type,
  url,
  fileSize,
  className,
}) => {
  return (
    <div className={`${styles.materialItem} ${className || ''}`}>
      <span className={styles.number}>{number}</span>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
      </div>
      <Button
        variant={type === 'download' ? 'secondary' : 'primary'}
        icon={type === 'download' ? <DownloadIcon /> : <PlayIcon />}
        href={url}
        size="medium"
      >
        {type === 'download' ? 'Pobierz' : 'Odtwórz'}
      </Button>
    </div>
  );
};
```

#### Style Highlights
```css
.materialItem {
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  padding: var(--spacing-6);
  background: var(--color-white);
  border: 1px solid var(--color-beige-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.materialItem:hover {
  border-color: var(--color-raspberry);
  box-shadow: var(--shadow-md);
}

.number {
  font-family: var(--font-primary);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-raspberry);
  min-width: 60px;
}

.content {
  flex: 1;
}

.title {
  font-family: var(--font-secondary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-black-soft);
  margin-bottom: var(--spacing-2);
}

.fileSize {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

/* Responsive */
@media (max-width: 768px) {
  .materialItem {
    flex-direction: column;
    align-items: flex-start;
  }

  .number {
    align-self: center;
  }
}
```

---

### 3. ProtectedMaterialCard

**Lokalizacja**: `src/components/molecules/ProtectedMaterialCard/`
**Używane na**: Dla Edukatorów page

#### Opis
Karta materiału wymagającego logowania z ikoną kłódki.

#### Props
```typescript
interface ProtectedMaterialCardProps {
  title: string;
  description: string;
  requiresLogin: boolean;
  onLoginClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}
```

#### Przykład Użycia
```tsx
<ProtectedMaterialCard
  title="Formularz raportowania zajęć"
  description="Narzędzie do śledzenia i raportowania przeprowadzonych zajęć."
  requiresLogin={true}
  onLoginClick={() => navigate('/login')}
/>
```

#### Struktura
```tsx
const ProtectedMaterialCard: React.FC<ProtectedMaterialCardProps> = ({
  title,
  description,
  requiresLogin,
  onLoginClick,
  icon,
  className,
}) => {
  return (
    <div className={`${styles.protectedCard} ${className || ''}`}>
      <div className={styles.iconContainer}>
        {requiresLogin && <LockIcon className={styles.lockIcon} />}
        {icon && <div className={styles.customIcon}>{icon}</div>}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button
        variant="secondary"
        onClick={onLoginClick}
        disabled={!requiresLogin}
      >
        Zaloguj się aby uzyskać dostęp
      </Button>
    </div>
  );
};
```

#### Style Highlights
```css
.protectedCard {
  background: var(--color-white);
  border: 2px dashed var(--color-gray-light);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  text-align: center;
  transition: all var(--transition-base);
}

.protectedCard:hover {
  border-color: var(--color-raspberry);
  border-style: solid;
}

.iconContainer {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-6);
}

.lockIcon {
  width: 48px;
  height: 48px;
  color: var(--color-gray);
}

.title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-black-soft);
  margin-bottom: var(--spacing-4);
}

.description {
  font-size: var(--font-size-md);
  color: var(--color-gray);
  margin-bottom: var(--spacing-6);
  line-height: var(--line-height-normal);
}
```

---

### 4. EmailCopyButton

**Lokalizacja**: `src/components/molecules/EmailCopyButton/`
**Używane na**: FAQ page

#### Opis
Email z przyciskiem do kopiowania do schowka.

#### Props
```typescript
interface EmailCopyButtonProps {
  email: string;
  className?: string;
}
```

#### Przykład Użycia
```tsx
<EmailCopyButton email="gadki@fdds.pl" />
```

#### Struktura
```tsx
const EmailCopyButton: React.FC<EmailCopyButtonProps> = ({ email, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`${styles.emailCopyContainer} ${className || ''}`}>
      <a href={`mailto:${email}`} className={styles.email}>
        {email}
      </a>
      <button
        onClick={handleCopy}
        className={styles.copyButton}
        aria-label="Skopiuj adres email"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        <span>{copied ? 'Skopiowano!' : 'Kopiuj'}</span>
      </button>
    </div>
  );
};
```

#### Style Highlights
```css
.emailCopyContainer {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  justify-content: center;
  padding: var(--spacing-8);
  background: var(--color-beige-2);
  border-radius: var(--radius-xl);
}

.email {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-raspberry);
  text-decoration: none;
  transition: color var(--transition-base);
}

.email:hover {
  color: var(--color-raspberry-dark);
}

.copyButton {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-5);
  background: var(--color-raspberry);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  transition: all var(--transition-base);
}

.copyButton:hover {
  background: var(--color-raspberry-dark);
  transform: translateY(-2px);
}

.copyButton:active {
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 640px) {
  .emailCopyContainer {
    flex-direction: column;
    gap: var(--spacing-3);
  }

  .copyButton {
    width: 100%;
    justify-content: center;
  }
}
```

---

### 5. QuoteBox

**Lokalizacja**: `src/components/molecules/QuoteBox/`
**Używane na**: Strona Tekstowa (Article page)

#### Opis
Wyróżniony cytat w artykule z dekoracjami.

#### Props
```typescript
interface QuoteBoxProps {
  quote: string;
  author?: string;
  className?: string;
}
```

#### Przykład Użycia
```tsx
<QuoteBox
  quote="Dzieci potrzebują naszej obecności bardziej niż naszych prezentów."
  author="Jesse Jackson"
/>
```

#### Struktura
```tsx
const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author, className }) => {
  return (
    <div className={`${styles.quoteBox} ${className || ''}`}>
      <div className={styles.decorationTop} />
      <blockquote className={styles.quote}>
        "{quote}"
      </blockquote>
      {author && (
        <cite className={styles.author}>— {author}</cite>
      )}
      <div className={styles.decorationBottom} />
    </div>
  );
};
```

#### Style Highlights
```css
.quoteBox {
  background: var(--color-beige-2);
  border-left: 4px solid var(--color-raspberry);
  padding: var(--spacing-8);
  margin: var(--spacing-12) 0;
  position: relative;
}

.quote {
  font-family: var(--font-primary);
  font-size: var(--font-size-2xl);
  line-height: var(--line-height-normal);
  font-style: italic;
  color: var(--color-black-soft);
  margin: 0;
}

.author {
  display: block;
  margin-top: var(--spacing-4);
  font-family: var(--font-secondary);
  font-size: var(--font-size-md);
  font-style: normal;
  color: var(--color-gray);
}

.decorationTop,
.decorationBottom {
  position: absolute;
  width: 40px;
  height: 2px;
  background: var(--color-raspberry);
}

.decorationTop {
  top: var(--spacing-4);
  right: var(--spacing-4);
}

.decorationBottom {
  bottom: var(--spacing-4);
  left: var(--spacing-4);
}

/* Responsive */
@media (max-width: 768px) {
  .quote {
    font-size: var(--font-size-xl);
  }

  .decorationTop,
  .decorationBottom {
    width: 24px;
  }
}
```

---

## Organisms - Nowe

### 6. ExpandableArticles

**Lokalizacja**: `src/components/organisms/ExpandableArticles/`
**Używane na**: Dla Rodziców page

#### Opis
Lista rozwijanych artykułów edukacyjnych (accordion pattern dla długich treści).

#### Props
```typescript
interface ExpandableArticlesProps {
  articles: Article[];
  className?: string;
}

interface Article {
  id: string;
  title: string;
  content: string; // Markdown or HTML
  author?: string;
  readTime?: string;
}
```

#### Przykład Użycia
```tsx
<ExpandableArticles
  articles={[
    {
      id: 'article-1',
      title: 'Jak rozmawiać z dzieckiem o bezpieczeństwie?',
      content: '# Wprowadzenie\n\nRozmowy o bezpieczeństwie...',
      author: 'Eksperci FDDS',
      readTime: '8 min',
    },
    // ... more articles
  ]}
/>
```

#### Struktura
```tsx
const ExpandableArticles: React.FC<ExpandableArticlesProps> = ({
  articles,
  className,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={`${styles.articlesContainer} ${className || ''}`}>
      {articles.map((article) => (
        <ArticleAccordion
          key={article.id}
          article={article}
          isExpanded={expandedId === article.id}
          onToggle={() => handleToggle(article.id)}
        />
      ))}
    </div>
  );
};

// ArticleAccordion sub-component
const ArticleAccordion: React.FC<ArticleAccordionProps> = ({
  article,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className={styles.articleAccordion}>
      <button
        className={styles.articleHeader}
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div className={styles.headerContent}>
          <h3 className={styles.articleTitle}>{article.title}</h3>
          {article.readTime && (
            <span className={styles.readTime}>{article.readTime}</span>
          )}
        </div>
        <ChevronIcon
          className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
        />
      </button>
      <div
        className={`${styles.articleContent} ${isExpanded ? styles.articleContentExpanded : ''}`}
      >
        <div className={styles.contentInner}>
          <MarkdownRenderer content={article.content} />
          {article.author && (
            <p className={styles.author}>Autor: {article.author}</p>
          )}
        </div>
      </div>
    </div>
  );
};
```

#### Style Highlights
```css
.articlesContainer {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.articleAccordion {
  border: 1px solid var(--color-beige-3);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.articleAccordion:hover {
  border-color: var(--color-raspberry);
  box-shadow: var(--shadow-sm);
}

.articleHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-6);
  background: var(--color-white);
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background var(--transition-base);
}

.articleHeader:hover {
  background: var(--color-beige-1);
}

.headerContent {
  flex: 1;
}

.articleTitle {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-black-soft);
  margin-bottom: var(--spacing-2);
}

.readTime {
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}

.chevron {
  width: 24px;
  height: 24px;
  color: var(--color-raspberry);
  transition: transform var(--transition-base);
}

.chevronExpanded {
  transform: rotate(180deg);
}

.articleContent {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.articleContentExpanded {
  max-height: 3000px; /* Adjust based on content */
}

.contentInner {
  padding: var(--spacing-8);
  background: var(--color-beige-1);
}

/* Markdown content styling */
.contentInner h2 {
  font-size: var(--font-size-2xl);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
  color: var(--color-raspberry);
}

.contentInner p {
  margin-bottom: var(--spacing-4);
  line-height: var(--line-height-relaxed);
  color: var(--color-black-soft);
}

.contentInner ul,
.contentInner ol {
  margin-left: var(--spacing-6);
  margin-bottom: var(--spacing-4);
}

.author {
  margin-top: var(--spacing-8);
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--color-beige-3);
  font-size: var(--font-size-sm);
  color: var(--color-gray);
  font-style: italic;
}
```

---

### 7. MaterialsList

**Lokalizacja**: `src/components/organisms/MaterialsList/`
**Używane na**: Dla Dzieci, Dla Rodziców, Dla Edukatorów pages

#### Opis
Lista materiałów do pobrania/odtworzenia (wrapper dla MaterialItem).

#### Props
```typescript
interface MaterialsListProps {
  materials: Material[];
  className?: string;
}

interface Material {
  number: string;
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string;
}
```

#### Przykład Użycia
```tsx
<MaterialsList
  materials={[
    {
      number: '01',
      title: 'Broszura',
      type: 'download',
      url: '/downloads/broszura.pdf',
      fileSize: '2.4 MB',
    },
    {
      number: '02',
      title: 'Filmy instruktażowe',
      type: 'play',
      url: '/videos/instruktazowe',
    },
  ]}
/>
```

#### Struktura
```tsx
const MaterialsList: React.FC<MaterialsListProps> = ({ materials, className }) => {
  return (
    <div className={`${styles.materialsList} ${className || ''}`}>
      {materials.map((material) => (
        <MaterialItem
          key={material.number}
          number={material.number}
          title={material.title}
          type={material.type}
          url={material.url}
          fileSize={material.fileSize}
        />
      ))}
    </div>
  );
};
```

#### Style Highlights
```css
.materialsList {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

/* Responsive grid for wider screens */
@media (min-width: 1024px) {
  .materialsList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-6);
  }
}
```

---

### 8. ArticleContent (MarkdownRenderer)

**Lokalizacja**: `src/components/organisms/ArticleContent/`
**Używane na**: Strona Tekstowa (Article page)

#### Opis
Renderer dla długich artykułów w formacie Markdown.

#### Props
```typescript
interface ArticleContentProps {
  content: string; // Markdown
  className?: string;
}
```

#### Przykład Użycia
```tsx
<ArticleContent
  content={`
# Wprowadzenie

Bliskość między dzieckiem a opiekunem...

## Kluczowe Zasady

1. Regularność
2. Dostosowanie
3. Spokój
  `}
/>
```

#### Struktura (używając react-markdown)
```tsx
import ReactMarkdown from 'react-markdown';
import { QuoteBox } from '@/components/molecules/QuoteBox';

const ArticleContent: React.FC<ArticleContentProps> = ({ content, className }) => {
  return (
    <article className={`${styles.articleContent} ${className || ''}`}>
      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className={styles.heading2} {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className={styles.heading3} {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className={styles.paragraph} {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className={styles.list} {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className={styles.orderedList} {...props} />
          ),
          blockquote: ({ node, children, ...props }) => {
            // Extract quote text and author if present
            const quoteText = extractQuoteText(children);
            const author = extractAuthor(children);

            return (
              <QuoteBox quote={quoteText} author={author} />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};
```

#### Style Highlights
```css
.articleContent {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--spacing-16) var(--spacing-8);
}

.heading2 {
  font-family: var(--font-primary);
  font-size: var(--font-size-4xl);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  color: var(--color-raspberry);
}

.heading3 {
  font-family: var(--font-secondary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
  color: var(--color-black-soft);
}

.paragraph {
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-6);
  color: var(--color-black-soft);
}

.list,
.orderedList {
  margin-left: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.list li,
.orderedList li {
  margin-bottom: var(--spacing-3);
  line-height: var(--line-height-normal);
  color: var(--color-black-soft);
}

/* Responsive */
@media (max-width: 768px) {
  .articleContent {
    padding: var(--spacing-12) var(--spacing-4);
  }

  .heading2 {
    font-size: var(--font-size-3xl);
  }

  .heading3 {
    font-size: var(--font-size-xl);
  }

  .paragraph {
    font-size: var(--font-size-md);
  }
}
```

---

## Components Summary

### Nowe Molecules (5)
1. ✅ `AgeTabs` - Zakładki wiekowe
2. ✅ `MaterialItem` - Item na liście materiałów
3. ✅ `ProtectedMaterialCard` - Karta materiału z logowaniem
4. ✅ `EmailCopyButton` - Email z przyciskiem kopiowania
5. ✅ `QuoteBox` - Cytat w artykule

### Nowe Organisms (3)
6. ✅ `ExpandableArticles` - Lista rozwijanych artykułów
7. ✅ `MaterialsList` - Lista materiałów (wrapper)
8. ✅ `ArticleContent` - Renderer artykułów Markdown

---

## Reusable vs New

### ♻️ Komponenty Reużywane z Landing Page

**Z `components.md`:**
- `<Header />` - wszystkie podstrony
- `<Footer />` - wszystkie podstrony
- `<MobileMenu />` - wszystkie podstrony
- `<FloatingAvatars />` - większość podstron
- `<Accordion />` - FAQ sections (może być rozszerzone)
- `<Button />` - wszędzie
- `<Typography />` - wszędzie
- `<Avatar />` - Article Hero
- `<VideoPlayer />` - Dla Dzieci page
- `<MaterialCard />` - "Pozostałe materiały" sections
- Newsletter Section components

### 🆕 Nowe Komponenty (8 total)

**Molecules (5):**
1. AgeTabs
2. MaterialItem
3. ProtectedMaterialCard
4. EmailCopyButton
5. QuoteBox

**Organisms (3):**
6. ExpandableArticles
7. MaterialsList
8. ArticleContent

---

## File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/
│   │   ├── Typography/
│   │   ├── Avatar/
│   │   ├── Icon/
│   │   └── ... (from components.md)
│   │
│   ├── molecules/
│   │   ├── Accordion/          # Reused
│   │   ├── Card/               # Reused
│   │   ├── VideoPlayer/        # Reused
│   │   │
│   │   ├── AgeTabs/            # NEW
│   │   ├── MaterialItem/       # NEW
│   │   ├── ProtectedMaterialCard/  # NEW
│   │   ├── EmailCopyButton/    # NEW
│   │   └── QuoteBox/           # NEW
│   │
│   └── organisms/
│       ├── Header/             # Reused
│       ├── Footer/             # Reused
│       ├── MobileMenu/         # Reused
│       ├── FloatingAvatars/    # Reused
│       │
│       ├── ExpandableArticles/ # NEW
│       ├── MaterialsList/      # NEW
│       └── ArticleContent/     # NEW
│
├── pages/
│   ├── LandingPage/
│   ├── ForChildrenPage/        # NEW
│   ├── ForParentsPage/         # NEW
│   ├── ForEducatorsPage/       # NEW
│   ├── FAQPage/                # NEW
│   └── ArticlePage/            # NEW
│
└── sections/
    ├── Shared/
    │   ├── OtherMaterialsSection/  # NEW - shared across pages
    │   └── NewsletterSection/      # Reused
    │
    ├── ForChildren/
    │   ├── HeroWithAgeTabs/
    │   ├── VideoPlayerSection/
    │   └── MaterialsListSection/
    │
    ├── ForParents/
    │   ├── HelpfulArticlesSection/
    │   └── LoginCTASection/
    │
    ├── ForEducators/
    │   ├── ProtectedMaterialsSection/
    │   └── LoginEncouragementSection/
    │
    ├── FAQ/
    │   ├── FAQHeroSection/
    │   ├── FAQAccordionListSection/
    │   └── MoreQuestionsContactSection/
    │
    └── Article/
        ├── ArticleHeroSection/
        └── ArticleContentSection/
```

---

## Dependencies

### Nowe zależności npm (jeśli potrzebne):
```json
{
  "dependencies": {
    "react-markdown": "^9.0.0",        // Dla ArticleContent
    "remark-gfm": "^4.0.0",            // GitHub Flavored Markdown
    "rehype-raw": "^7.0.0"             // Pozwala na HTML w Markdown
  }
}
```

---

## Testing Requirements

Każdy nowy komponent powinien mieć:
1. **Unit tests** (Vitest + React Testing Library)
2. **Accessibility tests** (aria-labels, keyboard navigation)
3. **Responsive tests** (różne breakpointy)
4. **Snapshot tests** (dla stabilnych UI)

---

## Next Steps

1. Implementuj komponenty w kolejności: Atoms → Molecules → Organisms
2. Testuj każdy komponent przed przejściem do następnego
3. Twórz Storybook stories dla każdego komponentu
4. Dokumentuj props i usage examples w JSDoc/TSDoc
5. Accessibility audit po implementacji wszystkich komponentów
