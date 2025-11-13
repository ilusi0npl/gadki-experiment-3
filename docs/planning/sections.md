# 📄 Sekcje Strony - Breakdown

## Spis Treści
1. [Header](#1-header)
2. [Hero Section](#2-hero-section)
3. [Intro Section](#3-intro-section)
4. [Zasady GADKI Section](#4-zasady-gadki-section)
5. [Materiały Section](#5-materiały-section)
6. [O Nas Section](#6-o-nas-section)
7. [FAQ Section](#7-faq-section)
8. [Pomoc Section](#8-pomoc-section)
9. [Footer](#9-footer)

---

## 1. Header

**Ścieżka**: `src/sections/Header/` lub `src/components/organisms/Header/`

### Desktop Layout
```
┌────────────────────────────────────────────────────────────┐
│  [Logo]    Dla dzieci  Dla rodziców  Dla edukatorów  FAQ  │
│                                    [Logowanie/Rejestracja] │
└────────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌──────────────────────────┐
│  [Logo]        [☰ Menu]  │
└──────────────────────────┘
```

### Komponenty Używane
- `<Logo />` (atom)
- `<Navigation />` (molekuła) - desktop only
- `<Button />` (atom) - "Logowanie/Rejestracja"
- `<MobileMenuToggle />` (atom) - mobile only

### Funkcjonalności
- ✅ Sticky header (przyklejony na top przy scrollu)
- ✅ Transparent na top, white background po scrollu
- ✅ Smooth scroll do sekcji po kliknięciu w link
- ✅ Mobile menu slide-in

### Data
```javascript
// src/data/navigation.js
export const navigationLinks = [
  { id: 'dzieci', label: 'Dla dzieci', href: '#dzieci' },
  { id: 'rodzice', label: 'Dla rodziców i opiekunów', href: '#rodzice' },
  { id: 'edukatorzy', label: 'Dla edukatorów', href: '#edukatorzy' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];
```

### Styles Highlights
```css
/* Sticky behavior */
position: fixed;
top: 0;
z-index: var(--z-index-sticky);

/* Backdrop blur effect po scrollu */
backdrop-filter: blur(10px);
background-color: rgba(255, 255, 255, 0.95);
```

---

## 2. Hero Section

**Ścieżka**: `src/sections/HeroSection/`

### Layout
```
┌────────────────────────────────────────────────────┐
│              [Avatar]  [Avatar]  [Avatar]          │
│                                                     │
│                  [Gadki Logo SVG]                  │
│         "Program wzmacniania bezpieczeństwa        │
│                     dzieci"                        │
│                                                     │
│              [Video Player with Play]              │
│                                                     │
│  [Avatar]                            [Avatar]      │
└────────────────────────────────────────────────────┘
```

### Komponenty Używane
- `<FloatingAvatars />` (organism) - 5 floating avatars
- `<Typography variant="h4" />` - "Program wzmacniania..."
- `<VideoPlayer />` (molekuła)
- Dekoracyjne SVG (tło)

### Avatary Positions (desktop)
```javascript
const heroAvatars = [
  {
    character: 'mama',
    src: imgMama,
    alt: 'Mama',
    size: 'medium',
    position: { top: '155px', left: '374px' }
  },
  {
    character: 'corka',
    src: imgDziewczyna,
    alt: 'Córka',
    size: 'medium',
    position: { top: '618px', left: '274px' }
  },
  {
    character: 'gadek',
    src: imgGadek,
    alt: 'Gadek - maskotka',
    size: 'medium',
    position: { top: '80px', left: '774px' }
  },
  {
    character: 'tata',
    src: imgTata,
    alt: 'Tata',
    size: 'medium',
    position: { top: '224px', left: '1176px' }
  },
  {
    character: 'max',
    src: imgChopak,
    alt: 'Max',
    size: 'medium',
    position: { top: '545px', left: '1266px' }
  },
];
```

### Video Player Specs
- **Poster image**: Hero background image
- **Wymiary**: 1180px × 622px (desktop)
- **Play button**: Centered, białe tło, ikona play
- **Overlay**: rgba(0, 0, 0, 0.4)

### Background Decorations
- Czerwone/różowe dekoracyjne wektory (SVG)
- `position: absolute` z różnymi `z-index`

### Responsive Behavior
- **Desktop**: Avatary absolute positioned
- **Tablet**: Zmniejszone avatary, adjusted positions
- **Mobile**: Avatary w row/grid, nie floating

---

## 3. Intro Section

**Ścieżka**: `src/sections/IntroSection/`

### Layout
```
┌────────────────────────────────────────┐
│          [Avatar Gadek]                │
│                                         │
│       "Proste rozmowy                  │
│        na ważne tematy"                │
│                                         │
│   Gadki to rozmowy na temat kilku      │
│   prostych zasad, które pomogą...      │
│                                         │
│   Dzieci dowiedzą się z nich...        │
│                                         │
│         [O programie - Button]         │
└────────────────────────────────────────┘
```

### Komponenty Używane
- `<Avatar size="large" />` - Gadek maskotka
- `<Typography variant="h2" />` - Main heading
- `<Typography variant="body" />` - Opis (2 paragrafy)
- `<Button variant="primary" />` - CTA

### Content
```javascript
const introContent = {
  heading: {
    line1: 'Proste rozmowy',
    line2: 'na ważne tematy',
  },
  descriptions: [
    'Gadki to rozmowy na temat kilku prostych zasad, które pomogą ochronić Twoje dziecko przed wykorzystywaniem seksualnym.',
    'Dzieci dowiedzą się z nich, że to one decydują o swoim ciele, zawsze mają prawo powiedzieć „nie" i powinny szukać pomocy, jeżeli coś je niepokoi lub martwi.',
  ],
  cta: {
    text: 'O programie',
    href: '#o-programie',
  },
};
```

### Spacing
- Gap między avatarem a heading: 48px
- Gap między paragrafami: 40px
- Gap przed buttonem: 48px

---

## 4. Zasady GADKI Section

**Ścieżka**: `src/sections/GadkiRulesSection/`

### Layout
```
┌────────────────────────────────────────────────────┐
│                                                     │
│                    "Zasady"                        │
│                                                     │
│  Każda z liter wchodzących w skład słowa GADKI...  │
│                                                     │
│    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  │
│    │  G  │  │  A  │  │  D  │  │  K  │  │  I  │  │
│    │     │  │     │  │     │  │     │  │     │  │
│    └─────┘  └─────┘  └─────┘  └─────┘  └─────┘  │
│   (rotated) (rotated) (rotated) (rotated) (rotated)│
│                                                     │
│              [Dekoracyjny element]                 │
└────────────────────────────────────────────────────┘
```

### Komponenty Używane
- `<Typography variant="h1" />` - "Zasady"
- `<Typography variant="body" />` - Opis GADKI
- `<GadkiRuleCard />` × 5 (molekuła)
- Dekoracyjne wektory SVG

### Cards Data
```javascript
const gadkiRulesData = [
  {
    id: 'g',
    letter: 'G',
    color: '#B61919', // dark-red
    rotation: 7.732,
    title: {
      line1: 'Gdy mówisz NIE,',
      line2: 'to znaczy NIE',
    },
  },
  {
    id: 'a',
    letter: 'A',
    color: '#0A5556', // dark-green
    rotation: -6.124,
    title: 'Alarmuj, gdy potrzebujesz pomocy',
  },
  {
    id: 'd',
    letter: 'D',
    color: '#F1C500', // yellow
    rotation: 3.584,
    title: 'Dobrze zrobisz, mówiąc o tajemnicach, które cię niepokoją',
  },
  {
    id: 'k',
    letter: 'K',
    color: '#EF771B', // orange
    rotation: -0.251,
    title: 'Koniecznie pamiętaj, że twoje ciało należy do Ciebie',
  },
  {
    id: 'i',
    letter: 'I',
    color: '#273488', // dark-blue
    rotation: 4.711,
    title: 'Intymne części ciała są prywatne',
    hasDecoration: true, // I ma dekoracyjny wektor
  },
];
```

### Cards Layout
- **Desktop**: 5 kart ułożonych w row z overlappingiem
- **Tablet**: 3-2 grid
- **Mobile**: Stack (jedna pod drugą, bez rotacji)

### Rotation Implementation
```css
.gadkiCard {
  transform: rotate(var(--rotation));
}
```

### Dekoracyjny Element
- Fioletowy wektor na karcie "I"
- SVG imported jako component

---

## 5. Materiały Section

**Ścieżka**: `src/sections/MaterialsSection/`

### Layout
```
┌────────────────────────────────────────┐
│           "Materiały"                  │
│                                         │
│  Na tej stronie znajdują się...        │
│                                         │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ │
│  │         │ │         │ │         │ │
│  │   Dla   │ │   Dla   │ │   Dla   │ │
│  │  dzieci │ │rodziców │ │edukatorów│ │
│  │         │ │         │ │         │ │
│  └─────────┘ └─────────┘ └─────────┘ │
└────────────────────────────────────────┘
```

### Komponenty Używane
- `<Typography variant="h1" />` - "Materiały"
- `<Typography variant="body" />` - Opis
- `<MaterialCard />` × 3 (custom komponenta lub Card)

### Cards Data
```javascript
const materialsCards = [
  {
    id: 'dzieci',
    title: 'Dla dzieci',
    illustrations: [
      { src: imgChopak, alt: 'Chłopiec' },
      { src: imgDziewczyna, alt: 'Dziewczynka' },
    ],
    href: '#dzieci',
  },
  {
    id: 'rodzice',
    title: {
      line1: 'Dla rodziców',
      line2: 'i opiekunów',
    },
    illustrations: [
      { src: imgMama, alt: 'Mama' },
      { src: imgTata, alt: 'Tata' },
    ],
    href: '#rodzice',
  },
  {
    id: 'edukatorzy',
    title: {
      line1: 'Dla edukatorów',
      line2: 'i nauczycieli',
    },
    illustrations: [
      { src: imgEdukatorka, alt: 'Edukatorka' },
      { src: imgEdukator, alt: 'Edukator' },
    ],
    href: '#edukatorzy',
  },
];
```

### Card Specs
- **Tło**: Białe (#FFFFFF)
- **Wymiary**: 380px × 480px
- **Border radius**: 12px
- **Shadow**: `var(--shadow-card)`
- **Hover**: Transform + shadow

### Ilustracje w Kartach
- 2 ilustracje postaci per karta
- Positioned at bottom
- Overlap ze sobą

---

## 6. O Nas Section

**Ścieżka**: `src/sections/AboutSection/`

### Layout
```
┌────────────────────────────────────────┐
│          [Logo FDDS]                   │
│                                         │
│            "O nas"                     │
│                                         │
│  W Fundacji Dajemy Dzieciom Siłę...    │
│                                         │
│  Zapewniamy dzieciom i ich opiekunom...│
│                                         │
│    [Poznaj nasze działania - Button]  │
│                                         │
│       [Dekoracyjny wektor]             │
└────────────────────────────────────────┘
```

### Komponenty Używane
- `<Logo variant="fdds" />` (atom) - Logo FDDS w okręgu
- `<Typography variant="h2" />` - "O nas"
- `<Typography variant="body" />` - Opis (2 paragrafy)
- `<Button variant="primary" />` - CTA
- Dekoracyjny wektor SVG

### Content
```javascript
const aboutContent = {
  logo: imgLogoFDDS,
  heading: 'O nas',
  descriptions: [
    {
      text: 'W Fundacji Dajemy Dzieciom Siłę od ponad 30 lat chronimy dzieci przed przemocą i wykorzystaniem seksualnym.',
      variant: 'semibold',
      color: 'raspberry',
    },
    {
      text: 'Zapewniamy dzieciom i ich opiekunom wsparcie, profesjonalną pomoc psychologiczną i prawną. Uczymy dorosłych, jak mądrze i skutecznie reagować na przemoc wobec dzieci oraz co robić, gdy podejrzewają, że dziecko jest krzywdzone.',
      variant: 'regular',
      color: 'black',
    },
  ],
  cta: {
    text: 'Poznaj nasze działania',
    href: 'https://fdds.pl',
    external: true,
  },
};
```

### Background
- Beige (#EFEEE8)
- Dekoracyjne różowe wektory na bokach

---

## 7. FAQ Section

**Ścieżka**: `src/sections/FAQSection/`

### Layout
```
┌────────────────────────────────────────┐
│     "Często zadawane pytania"          │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 01  Jak rozmawiać z dzieckiem? ▼│ │
│  ├──────────────────────────────────┤ │
│  │ Nie traktuj rozmowy dotyczącej...│ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 02  Czy rozmowa o wykorzyst...  │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 03  Co zrobić, jeśli moje...    │ │
│  └──────────────────────────────────┘ │
│                                         │
│        [Przejdź do FAQ - Button]      │
└────────────────────────────────────────┘
```

### Komponenty Używane
- `<Typography variant="h2" />` - "Często zadawane pytania"
- `<Accordion />` (molekuła)
- `<Button variant="primary" />` - CTA

### FAQ Data
```javascript
// src/data/faq.js
export const faqItems = [
  {
    id: '01',
    number: '01',
    question: 'Jak rozmawiać z dzieckiem?',
    answer: 'Nie traktuj rozmowy dotyczącej zasad zachowania bezpieczeństwa jako jednorazowego wydarzenia. Znacznie lepiej jest rozmawiać na te tematy krócej, a częściej. Pomoże to dziecku zapamiętać kluczowe informacje i stosować się do przedstawionych zasad.',
  },
  {
    id: '02',
    number: '02',
    question: 'Czy rozmowa o wykorzystywaniu nie przestraszy dziecka?',
    answer: '...',
  },
  {
    id: '03',
    number: '03',
    question: 'Co zrobić, jeśli moje dziecko powie coś, co mnie zaniepokoi?',
    answer: '...',
  },
];
```

### Accordion Behavior
- ✅ Tylko jeden otwarty na raz (collapse others)
- ✅ Pierwszy domyślnie otwarty
- ✅ Smooth expand/collapse animation
- ✅ Arrow icon rotation

---

## 8. Pomoc Section

**Ścieżka**: `src/sections/HelpSection/`

### Layout
```
┌─────────────────────────────────────────────────┐
│                                                  │
│  ┌──────────────────────┐  ┌─────────────────┐ │
│  │ Jeżeli jesteś       │  │ Jesteś rodzicem │ │
│  │ dzieckiem...        │  │ lub nauczycielem│ │
│  │                     │  │ i chcesz...     │ │
│  │ Telefon Zaufania... │  │                 │ │
│  │                     │  │ Możesz...       │ │
│  │ [Zadzwoń]          │  │                 │ │
│  │ [Odwiedź stronę]   │  │ [Zadzwoń]       │ │
│  │                     │  │ [Odwiedź stronę]│ │
│  └──────────────────────┘  └─────────────────┘ │
│                                                  │
│         [Piesek - dekoracja]                    │
└─────────────────────────────────────────────────┘
```

### Komponenty Używane
- `<ContactCard />` × 2 (molekuła)
- Dekoracyjny piesek (SVG/image)
- Dekoracyjne wektory (tło)

### Background
- Różowe/czerwone faliste tło (SVG)
- `position: relative` dla dekoracji

### Contact Cards Data
```javascript
const helpCards = [
  {
    id: 'dzieci',
    title: 'Jeżeli jesteś dzieckiem i trudno Ci porozmawiać z osobą dorosłą z Twojego otoczenia...',
    description: 'Telefon Zaufania dla Dzieci i Młodzieży –116 111 może Ci pomóc. Prowadzimy bezpłatną i anonimową pomoc. Zadzwoń do nas pod numer 116 111 lub odwiedź naszą stronę internetową 116111.pl.',
    phoneNumber: '116 111',
    websiteUrl: 'https://116111.pl',
    primaryButton: {
      text: 'Zadzwoń',
      href: 'tel:116111',
    },
    secondaryButton: {
      text: 'Odwiedź stronę',
      href: 'https://116111.pl',
      external: true,
    },
  },
  {
    id: 'rodzice',
    title: 'Jesteś rodzicem lub nauczycielem i chcesz porozmawiać o bezpieczeństwie dziecka?',
    description: 'Możesz skontaktować się z nami telefonicznie pod numerem Telefonu dla Rodziców i Nauczycieli w sprawie Bezpieczeństwa Dzieci: 800 100 100 lub poprzez stronę 800100100.pl.',
    phoneNumber: '800 100 100',
    websiteUrl: 'https://800100100.pl',
    primaryButton: {
      text: 'Zadzwoń',
      href: 'tel:800100100',
    },
    secondaryButton: {
      text: 'Odwiedź stronę',
      href: 'https://800100100.pl',
      external: true,
    },
  },
];
```

### Dekoracje
- Piesek na dole sekcji (centered)
- Różowe/beżowe wektory po bokach

---

## 9. Footer

**Ścieżka**: `src/components/organisms/Footer/`

### Layout (Desktop)
```
┌────────────────────────────────────────────────────┐
│  [Logo FDDS]                                       │
│                                                     │
│              Kontakt          Dla dzieci       Logowanie │
│              gadki@fdds.pl    Dla rodziców     O programie │
│                              Dla edukatorów    FAQ │
│                                                Для батьків │
│                                                     │
│  [FB] [IG] [Spotify] [Telegram] [YT]              │
│                                                     │
│  Polityka prywatności | Deklaracja dostępności    │
│  | Zaprojektował i wdrożył cięty język|            │
└────────────────────────────────────────────────────┘
```

### Layout (Mobile)
```
┌──────────────────────┐
│  [Logo FDDS]         │
│                      │
│  Kontakt             │
│  gadki@fdds.pl       │
│                      │
│  Dla dzieci          │
│  Dla rodziców        │
│  Dla edukatorów      │
│                      │
│  Logowanie           │
│  O programie         │
│  FAQ                 │
│  Для батьків         │
│                      │
│  [Social Links]      │
│                      │
│  Polityka prywatności│
│  Deklaracja dostęp.  │
│  Zaprojektował...    │
└──────────────────────┘
```

### Komponenty Używane
- `<Logo variant="fdds" />` (atom)
- `<FooterColumn />` × 3 (custom molecule)
- `<SocialLinks />` (molekuła)
- `<Typography />` - Legal links

### Footer Data
```javascript
// src/data/footer.js
export const footerColumns = [
  {
    id: 'contact',
    title: 'Kontakt',
    items: [
      { text: 'gadki@fdds.pl', href: 'mailto:gadki@fdds.pl' },
    ],
  },
  {
    id: 'sections',
    title: null,
    items: [
      { text: 'Dla dzieci', href: '#dzieci' },
      { text: 'Dla rodziców i opiekunów', href: '#rodzice' },
      { text: 'Dla edukatorów', href: '#edukatorzy' },
    ],
  },
  {
    id: 'links',
    title: 'Logowanie/Rejestracja',
    items: [
      { text: 'O programie', href: '#o-programie' },
      { text: 'FAQ', href: '#faq' },
      { text: 'Для батьків', href: '#ua' },
    ],
  },
];

export const legalLinks = [
  { text: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  { text: 'Deklaracja dostępności', href: '/deklaracja-dostepnosci' },
  {
    text: 'Zaprojektował i wdrożył ',
    boldText: 'cięty język|',
    href: 'https://cietyjezyk.pl',
    external: true,
  },
];
```

### Background
- Beige 100 (#F6F5F1)
- Border-top: 1px solid beige-400 (opcjonalnie)

---

## Sekcje - Kolejność na Stronie

1. Header (sticky)
2. Hero Section
3. Intro Section
4. Zasady GADKI Section
5. Materiały Section
6. O Nas Section
7. FAQ Section
8. Pomoc Section
9. Footer

## Spacing Między Sekcjami

```css
/* Desktop */
.section + .section {
  margin-top: 120px;
}

/* Tablet */
@media (max-width: 1024px) {
  .section + .section {
    margin-top: 80px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .section + .section {
    margin-top: 64px;
  }
}
```

## Container Widths

```css
/* Max-width dla content */
--container-sm: 640px;   /* Małe teksty */
--container-md: 768px;   /* Średnie content */
--container-lg: 1080px;  /* FAQ, About */
--container-xl: 1180px;  /* Materiały, Zasady */
--container-2xl: 1728px; /* Full width design */
```

---

# 📄 NOWE PODSTRONY - Sekcje

## Routing Structure

Poniższe strony to **osobne podstrony z routingiem** (nie sekcje na landing page):

- `/dla-dzieci` - Dla Dzieci
- `/dla-rodzicow` - Dla Rodziców i Opiekunów
- `/dla-edukatorow` - Dla Edukatorów i Nauczycieli
- `/faq` - Często Zadawane Pytania
- `/artykul/:slug` - Strona Tekstowa (dynamiczny template)

### Wspólne Komponenty

Wszystkie podstrony używają tych samych komponentów co landing page:
- ✅ `<Header />` - identyczny
- ✅ `<Footer />` - identyczny
- ✅ `<MobileMenu />` - identyczny
- ✅ `<FloatingAvatars />` - na większości stron
- ✅ `<NewsletterSection />` - na większości stron
- ✅ Sekcja "Pomoc" (Contact Cards) - na większości stron

---

## 10. Dla Dzieci Page (`/dla-dzieci`)

**Ścieżka**: `src/pages/ForChildrenPage/`
**Figma Node**: 33:18

### Page Structure
```
1. Header (reused)
2. Hero Section with Age Tabs
3. Video Player Section
4. Materials Section (6 items)
5. "Zapytaj Gadka" FAQ Section
6. "Pozostałe materiały" Section
7. Newsletter Section
8. Help Section (Contact Cards)
9. Footer (reused)
```

### 🆕 Hero Section z Zakładkami Wiekowymi

**Ścieżka**: `src/sections/ForChildren/HeroWithAgeTabs/`

#### Layout
```
┌────────────────────────────────────────────────────┐
│      [Avatar] [Avatar] [Avatar] [Avatar] [Avatar] │
│                                                     │
│                  "Dla dzieci"                      │
│                                                     │
│        ┌─────────┬─────────┬──────────┐           │
│        │ 4-6 lat │ 7-9 lat │ 10-12 lat│           │
│        └─────────┴─────────┴──────────┘           │
│                                                     │
│   Treść dostosowana do wybranej grupy wiekowej    │
│                                                     │
└────────────────────────────────────────────────────┘
```

#### Komponenty Używane
- `<FloatingAvatars />` (reused)
- `<Typography variant="h1" />` - "Dla dzieci"
- `<AgeTabs />` **(NOWY)** - 3 zakładki wiekowe
- `<AgeSpecificContent />` **(NOWY)** - content per age group

#### AgeTabs Component

```javascript
// src/components/molecules/AgeTabs/
const ageTabs = [
  {
    id: 'age-4-6',
    label: '4-6 lat',
    value: '4-6',
  },
  {
    id: 'age-7-9',
    label: '7-9 lat',
    value: '7-9',
  },
  {
    id: 'age-10-12',
    label: '10-12 lat',
    value: '10-12',
  },
];

// State management
const [activeTab, setActiveTab] = useState('4-6');

// Content per tab
const contentByAge = {
  '4-6': {
    heading: 'Materiały dla najmłodszych',
    description: 'Treści dostosowane do dzieci w wieku 4-6 lat...',
  },
  '7-9': {
    heading: 'Materiały dla starszych dzieci',
    description: 'Treści dostosowane do dzieci w wieku 7-9 lat...',
  },
  '10-12': {
    heading: 'Materiały dla nastolatków',
    description: 'Treści dostosowane do dzieci w wieku 10-12 lat...',
  },
};
```

#### Styling
```css
.ageTabs {
  display: flex;
  gap: var(--spacing-2);
  border-bottom: 2px solid var(--color-beige-3);
}

.ageTab {
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

.ageTab--active {
  color: var(--color-raspberry);
  border-bottom-color: var(--color-raspberry);
}

.ageTab:hover {
  color: var(--color-raspberry-dark);
}
```

### 🆕 Video Player Section

**Ścieżka**: `src/sections/ForChildren/VideoPlayerSection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│       [Video Thumbnail]                │
│       [  ▶️  Play Button  ]            │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<VideoPlayer />` (reused from landing page Hero)
- Może być wrapper section z padding/background

#### Specs
- Aspect ratio: 16:9
- Max-width: 1080px
- Play button overlay
- Thumbnail from Figma or video service

### 🆕 Materials List Section

**Ścieżka**: `src/sections/ForChildren/MaterialsListSection/`

#### Layout
```
┌────────────────────────────────────────┐
│  01  Broszura              [Download] │
│  02  Ulotka                [Download] │
│  03  Plan zajęć            [Download] │
│  04  Ćwiczenia             [Download] │
│  05  Plakat                [Download] │
│  06  Filmy instruktażowe   [Play]     │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<MaterialsList />` **(NOWY)** - component
- `<MaterialItem />` **(NOWY)** - pojedynczy item

#### MaterialItem Component
```javascript
// src/components/molecules/MaterialItem/
interface MaterialItemProps {
  number: string; // '01', '02', etc.
  title: string;
  type: 'download' | 'play';
  url: string;
  fileSize?: string; // optional, np. '2.4 MB'
}

const MaterialItem: React.FC<MaterialItemProps> = ({
  number,
  title,
  type,
  url,
  fileSize,
}) => {
  return (
    <div className={styles.materialItem}>
      <span className={styles.number}>{number}</span>
      <h3 className={styles.title}>{title}</h3>
      {fileSize && <span className={styles.fileSize}>{fileSize}</span>}
      <Button
        variant={type === 'download' ? 'secondary' : 'primary'}
        icon={type === 'download' ? <DownloadIcon /> : <PlayIcon />}
        href={url}
      >
        {type === 'download' ? 'Pobierz' : 'Odtwórz'}
      </Button>
    </div>
  );
};
```

#### Data Structure
```javascript
// src/data/materials/forChildren.js
export const forChildrenMaterials = [
  {
    number: '01',
    title: 'Broszura',
    type: 'download',
    url: '/downloads/broszura-dzieci.pdf',
    fileSize: '2.4 MB',
  },
  {
    number: '02',
    title: 'Ulotka',
    type: 'download',
    url: '/downloads/ulotka-dzieci.pdf',
    fileSize: '1.2 MB',
  },
  {
    number: '03',
    title: 'Plan zajęć',
    type: 'download',
    url: '/downloads/plan-zajec.pdf',
    fileSize: '890 KB',
  },
  {
    number: '04',
    title: 'Ćwiczenia',
    type: 'download',
    url: '/downloads/cwiczenia.pdf',
    fileSize: '1.8 MB',
  },
  {
    number: '05',
    title: 'Plakat',
    type: 'download',
    url: '/downloads/plakat.pdf',
    fileSize: '3.2 MB',
  },
  {
    number: '06',
    title: 'Filmy instruktażowe',
    type: 'play',
    url: '/videos/filmy-instruktazowe',
  },
];
```

### 🆕 "Zapytaj Gadka" FAQ Section

**Ścieżka**: `src/sections/ForChildren/AskGadekFAQSection/`

#### Layout - Podobny do FAQ Section z landing page
```
┌────────────────────────────────────────┐
│         "Zapytaj Gadka"                │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 01  Pytanie specyficzne dla...  │ │
│  ├──────────────────────────────────┤ │
│  │ Odpowiedź...                     │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 02  Kolejne pytanie...           │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Accordion />` (reused)
- Heading custom "Zapytaj Gadka"

#### FAQ Data
```javascript
// src/data/faq/forChildren.js
export const forChildrenFAQ = [
  {
    number: '01',
    question: 'W jakim wieku mogę rozmawiać z dzieckiem o zasadach GADKI?',
    answer: 'Możesz rozpocząć rozmowy już od 4. roku życia...',
  },
  {
    number: '02',
    question: 'Jak dostosować materiały do wieku dziecka?',
    answer: 'Użyj zakładek wiekowych na górze strony...',
  },
  {
    number: '03',
    question: 'Czy mogę pobrać materiały dla wszystkich grup wiekowych?',
    answer: 'Tak, wszystkie materiały są dostępne za darmo...',
  },
];
```

### 🆕 "Pozostałe materiały" Cards Section

**Ścieżka**: `src/sections/Shared/OtherMaterialsSection/`

#### Layout
```
┌────────────────────────────────────────┐
│      "Pozostałe materiały"             │
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │  Dla     │  │  Dla     │           │
│  │ rodziców │  │edukatorów│           │
│  │          │  │          │           │
│  └──────────┘  └──────────┘           │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<MaterialCard />` (reused from landing page)
- Zmienia się content w zależności od aktualnej strony

#### Dynamic Content
```javascript
// src/sections/Shared/OtherMaterialsSection.tsx
const OtherMaterialsSection = ({ currentPage }) => {
  // Filter out current page from materials cards
  const otherMaterials = materialsCards.filter(
    card => card.id !== currentPage
  );

  return (
    <section>
      <Typography variant="h2">Pozostałe materiały</Typography>
      <div className={styles.cardsGrid}>
        {otherMaterials.map(card => (
          <MaterialCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
```

---

## 11. Dla Rodziców Page (`/dla-rodzicow`)

**Ścieżka**: `src/pages/ForParentsPage/`
**Figma Node**: 40:935

### Page Structure
```
1. Header (reused)
2. Hero Section (similar to children page, no age tabs)
3. Materials Section (6 items)
4. "Pomocne treści" - Expandable Articles Section
5. Newsletter Section
6. "Zaloguj się do Strefy Opiekuna" CTA
7. "Pozostałe materiały" Section
8. Help Section
9. Footer (reused)
```

### 🆕 "Pomocne treści" - Expandable Articles Section

**Ścieżka**: `src/sections/ForParents/HelpfulArticlesSection/`

#### Layout
```
┌────────────────────────────────────────┐
│         "Pomocne treści"               │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ Jak rozmawiać z dzieckiem o...  ▼│ │
│  ├──────────────────────────────────┤ │
│  │ [Długi artykuł edukacyjny...]    │ │
│  │ [Może zawierać setki słów...]    │ │
│  │ [Paragrafy, listy, formatting...]│ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ Budowanie bliskości z dzieckiem  │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<ExpandableArticles />` **(NOWY)** - wrapper
- `<ArticleAccordion />` **(NOWY)** - individual article
- Podobny do `<Accordion />`, ale dla długich treści

#### Component Structure
```javascript
// src/components/organisms/ExpandableArticles/
interface Article {
  id: string;
  title: string;
  content: string; // Markdown or rich text
  author?: string;
  readTime?: string; // np. '5 min czytania'
}

const ExpandableArticles: React.FC<{articles: Article[]}> = ({ articles }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className={styles.articlesContainer}>
      {articles.map(article => (
        <ArticleAccordion
          key={article.id}
          article={article}
          isExpanded={expandedId === article.id}
          onToggle={() => setExpandedId(
            expandedId === article.id ? null : article.id
          )}
        />
      ))}
    </div>
  );
};
```

#### Data Structure
```javascript
// src/data/articles/forParents.js
export const parentArticles = [
  {
    id: 'rozmowy-z-dzieckiem',
    title: 'Jak rozmawiać z dzieckiem o bezpieczeństwie?',
    content: `
# Wprowadzenie

Rozmowy o bezpieczeństwie nie muszą być trudne...

## Kluczowe Zasady

1. **Regularność** - Rozmawiaj często, krótko
2. **Dostosowanie** - Używaj języka zrozumiałego dla dziecka
3. **Spokój** - Utrzymuj spokojny ton głosu

...
    `,
    author: 'Eksperci FDDS',
    readTime: '8 min',
  },
  {
    id: 'budowanie-bliskosci',
    title: 'Budowanie bliskości z dzieckiem',
    content: `...`,
    readTime: '6 min',
  },
  // ... więcej artykułów
];
```

#### Styling
```css
.articleAccordion {
  border: 1px solid var(--color-beige-3);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
  overflow: hidden;
}

.articleHeader {
  padding: var(--spacing-6);
  background: var(--color-white);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.articleContent {
  padding: var(--spacing-8);
  background: var(--color-beige-1);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-slow);
}

.articleContent--expanded {
  max-height: 2000px; /* or use auto with JS measurement */
}

/* Rich text formatting inside article */
.articleContent h2 {
  font-size: var(--font-size-2xl);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
}

.articleContent p {
  margin-bottom: var(--spacing-4);
  line-height: var(--line-height-relaxed);
}

.articleContent ul,
.articleContent ol {
  margin-left: var(--spacing-6);
  margin-bottom: var(--spacing-4);
}
```

### 🆕 "Zaloguj się do Strefy Opiekuna" CTA Section

**Ścieżka**: `src/sections/ForParents/LoginCTASection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│     "Zaloguj się do Strefy Opiekuna"  │
│                                         │
│  Uzyskaj dostęp do dodatkowych...      │
│                                         │
│         [Zaloguj się - Button]         │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Typography variant="h2" />`
- `<Typography variant="body" />`
- `<Button variant="primary" size="large" />`

#### Data
```javascript
const loginCTA = {
  heading: 'Zaloguj się do Strefy Opiekuna',
  description: 'Uzyskaj dostęp do dodatkowych materiałów, narzędzi i wsparcia dedykowanego rodzicom i opiekunom.',
  button: {
    text: 'Zaloguj się',
    href: '/login?redirect=/strefa-opiekuna',
  },
};
```

---

## 12. Dla Edukatorów Page (`/dla-edukatorow`)

**Ścieżka**: `src/pages/ForEducatorsPage/`
**Figma Node**: 43:1989

### Page Structure
```
1. Header (reused)
2. Hero Section
3. "Zaloguj się do Strefy Edukatora" - Prominent CTA
4. Materials Section - Public (6 items)
5. "Dodatkowe materiały" - Protected Section
6. Login/Register Encouragement Section
7. Newsletter Section
8. "Pozostałe materiały" Section
9. Help Section
10. Footer (reused)
```

### 🆕 Protected Materials Section

**Ścieżka**: `src/sections/ForEducators/ProtectedMaterialsSection/`

#### Layout
```
┌────────────────────────────────────────┐
│      "Dodatkowe materiały"             │
│   (wymagane logowanie)                 │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 🔒  Formularz raportowania zajęć │ │
│  │     [Zaloguj się aby uzyskać...] │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 🔒  Generator zaświadczeń        │ │
│  │     [Zaloguj się aby uzyskać...] │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 🔒  Certyfikat dla szkoły        │ │
│  │     [Zaloguj się aby uzyskać...] │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<ProtectedMaterialCard />` **(NOWY)**
- `<LockIcon />` (atom)
- `<Button variant="secondary" />`

#### Component Structure
```javascript
// src/components/molecules/ProtectedMaterialCard/
interface ProtectedMaterialCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  requiresLogin: boolean;
  onLoginClick: () => void;
}

const ProtectedMaterialCard: React.FC<ProtectedMaterialCardProps> = ({
  title,
  description,
  icon,
  requiresLogin,
  onLoginClick,
}) => {
  return (
    <div className={styles.protectedCard}>
      <div className={styles.header}>
        {requiresLogin && <LockIcon className={styles.lockIcon} />}
        {icon && <div className={styles.icon}>{icon}</div>}
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

#### Data Structure
```javascript
// src/data/materials/forEducators.js
export const protectedEducatorMaterials = [
  {
    id: 'reporting-form',
    title: 'Formularz raportowania zajęć',
    description: 'Narzędzie do śledzenia i raportowania przeprowadzonych zajęć edukacyjnych.',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/raportowanie',
  },
  {
    id: 'certificate-generator',
    title: 'Generator zaświadczeń',
    description: 'Automatyczne generowanie zaświadczeń dla uczestników programu GADKI.',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/zaswiadczenia',
  },
  {
    id: 'school-certificate',
    title: 'Certyfikat dla szkoły/przedszkola',
    description: 'Oficjalny certyfikat potwierdzający udział placówki w programie GADKI.',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/certyfikat',
  },
];
```

#### Styling
```css
.protectedCard {
  background: var(--color-white);
  border: 2px dashed var(--color-gray-light);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-8);
  text-align: center;
  position: relative;
}

.lockIcon {
  width: 48px;
  height: 48px;
  color: var(--color-gray);
  margin: 0 auto var(--spacing-4);
}

.protectedCard:hover {
  border-color: var(--color-raspberry);
  border-style: solid;
}
```

### 🆕 Login/Register Encouragement Section

**Ścieżka**: `src/sections/ForEducators/LoginEncouragementSection/`

#### Layout
```
┌────────────────────────────────────────┐
│  "Dołącz do Strefy Edukatora"         │
│                                         │
│  Założenie konta w Strefie Edukatora  │
│  daje dostęp do:                       │
│  • Formularzy raportowania             │
│  • Generatora zaświadczeń             │
│  • Certyfikatów dla placówek          │
│  • Dodatkowych materiałów              │
│                                         │
│  [Zarejestruj się]  [Zaloguj się]     │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Typography variant="h2" />`
- `<Typography variant="body" />`
- `<BulletList />` (custom lub ul/li)
- `<Button />` × 2

#### Data
```javascript
const loginEncouragement = {
  heading: 'Dołącz do Strefy Edukatora',
  description: 'Założenie konta w Strefie Edukatora daje dostęp do:',
  benefits: [
    'Formularzy raportowania zajęć',
    'Generatora zaświadczeń dla uczestników',
    'Certyfikatów dla szkół i przedszkoli',
    'Dodatkowych materiałów edukacyjnych',
    'Wsparcia ekspertów FDDS',
  ],
  buttons: [
    {
      text: 'Zarejestruj się',
      href: '/register?type=educator',
      variant: 'primary',
    },
    {
      text: 'Zaloguj się',
      href: '/login?redirect=/strefa-edukatora',
      variant: 'secondary',
    },
  ],
};
```

---

## 13. FAQ Page (`/faq`)

**Ścieżka**: `src/pages/FAQPage/`
**Figma Node**: 40:1260

### Page Structure
```
1. Header (reused)
2. Hero Section - Large Title Only
3. FAQ Accordion List (10+ items)
4. "Masz więcej pytań?" Contact Section
5. Materials Cards Section
6. Help Section
7. Footer (reused)
```

### 🆕 FAQ Hero - Large Title

**Ścieżka**: `src/sections/FAQ/FAQHeroSection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│                                         │
│     "Często zadawane pytania"          │
│                                         │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Typography variant="display" />` - bardzo duży heading

#### Styling
```css
.faqHero {
  text-align: center;
  padding: var(--spacing-32) var(--spacing-8);
  background: var(--color-beige-1);
}

.faqHero h1 {
  font-size: var(--font-size-10xl); /* 82px */
  font-family: var(--font-primary);
  line-height: var(--line-height-tight);
  color: var(--color-raspberry);
}

@media (max-width: 768px) {
  .faqHero h1 {
    font-size: var(--font-size-6xl); /* 48px */
  }
}
```

### 🆕 FAQ Accordion List Section

**Ścieżka**: `src/sections/FAQ/FAQAccordionListSection/`

#### Layout - Long list of 10+ questions
```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐ │
│  │ 01  Czym jest GADKI?           ▼│ │
│  ├──────────────────────────────────┤ │
│  │ GADKI to program edukacyjny...   │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ 02  Dla kogo jest GADKI?         │ │
│  └──────────────────────────────────┘ │
│                                         │
│  ... (8+ more questions)               │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Accordion />` (reused, ale więcej itemów)

#### Data Structure
```javascript
// src/data/faq/main.js
export const mainFAQ = [
  {
    number: '01',
    question: 'Czym jest GADKI?',
    answer: 'GADKI to program edukacyjny Fundacji Dajemy Dzieciom Siłę, który uczy dzieci podstawowych zasad bezpieczeństwa...',
  },
  {
    number: '02',
    question: 'Dla kogo jest program GADKI?',
    answer: 'Program przeznaczony jest dla dzieci w wieku 4-12 lat oraz ich rodziców, opiekunów i edukatorów...',
  },
  {
    number: '03',
    question: 'Czy materiały są bezpłatne?',
    answer: 'Tak, wszystkie materiały edukacyjne GADKI są dostępne całkowicie za darmo...',
  },
  {
    number: '04',
    question: 'Jak pobrać materiały?',
    answer: 'Materiały można pobrać bezpośrednio ze stron dedykowanych poszczególnym grupom...',
  },
  {
    number: '05',
    question: 'Czy mogę wykorzystać materiały w szkole/przedszkolu?',
    answer: 'Tak, materiały są przygotowane właśnie z myślą o wykorzystaniu w placówkach edukacyjnych...',
  },
  {
    number: '06',
    question: 'Jak uzyskać certyfikat dla placówki?',
    answer: 'Edukatorzy po zalogowaniu się do Strefy Edukatora mogą wygenerować certyfikat...',
  },
  {
    number: '07',
    question: 'Czy jest szkolenie dla edukatorów?',
    answer: 'Tak, FDDS oferuje szkolenia online i stacjonarne dla edukatorów...',
  },
  {
    number: '08',
    question: 'Jak zgłosić problem z materiałami?',
    answer: 'Problemy techniczne lub merytoryczne można zgłaszać pod adresem gadki@fdds.pl...',
  },
  {
    number: '09',
    question: 'Czy materiały są dostępne w innych językach?',
    answer: 'Obecnie materiały dostępne są w języku polskim oraz ukraińskim...',
  },
  {
    number: '10',
    question: 'Jak mogę wesprzeć program GADKI?',
    answer: 'Możesz wesprzeć program poprzez udostępnianie materiałów, darowizny...',
  },
];
```

### 🆕 "Masz więcej pytań?" Contact Section

**Ścieżka**: `src/sections/FAQ/MoreQuestionsContactSection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│  "Masz więcej pytań?                   │
│   Skontaktuj się z nami!"              │
│                                         │
│     gadki@fdds.pl  [Copy 📋]           │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Typography variant="h3" />`
- `<EmailCopyButton />` **(NOWY)**

#### EmailCopyButton Component
```javascript
// src/components/molecules/EmailCopyButton/
const EmailCopyButton: React.FC<{ email: string }> = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className={styles.emailCopyContainer}>
      <a href={`mailto:${email}`} className={styles.email}>
        {email}
      </a>
      <button
        onClick={handleCopy}
        className={styles.copyButton}
        aria-label="Skopiuj adres email"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? 'Skopiowano!' : 'Kopiuj'}
      </button>
    </div>
  );
};
```

#### Styling
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
  cursor: pointer;
  transition: all var(--transition-base);
}

.copyButton:hover {
  background: var(--color-raspberry-dark);
}
```

---

## 14. Strona Tekstowa - Article Template (`/artykul/:slug`)

**Ścieżka**: `src/pages/ArticlePage/`
**Figma Node**: 2007:351

### Page Structure
```
1. Header (reused)
2. Article Hero
3. Article Content (long-form)
4. Newsletter Section
5. Related Materials Cards
6. Help Section
7. Footer (reused)
```

### 🆕 Article Hero Section

**Ścieżka**: `src/sections/Article/ArticleHeroSection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│   "O bliskości i jej budowaniu między │
│    dzieckiem a opiekunem, rodzicem"   │
│                                         │
│   [Gadek Avatar]  Autor: FDDS         │
│   Data: 12.11.2025                     │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<Typography variant="display" />` - Article title
- `<Avatar size="small" />` - Author avatar
- `<Typography variant="small" />` - Metadata

#### Data Structure
```javascript
interface Article {
  slug: string;
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishDate: string; // ISO date
  content: string; // Markdown
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
  relatedMaterials?: MaterialCard[];
}
```

### 🆕 Article Content Section

**Ścieżka**: `src/sections/Article/ArticleContentSection/`

#### Layout
```
┌────────────────────────────────────────┐
│                                         │
│  Paragraf treści artykułu z odpowied-  │
│  nim line-height i spacingiem...       │
│                                         │
│  ## Podtytuł sekcji                    │
│                                         │
│  Kolejny paragraf z treścią...         │
│                                         │
│  ┌──────────────────────────────────┐ │
│  │ "Ważny cytat o komunikacji"      │ │
│  │  — Ekspert                        │ │
│  └──────────────────────────────────┘ │
│                                         │
│  Więcej treści...                      │
│                                         │
└────────────────────────────────────────┘
```

#### Komponenty Używane
- `<MarkdownRenderer />` **(NOWY)** - or use library like `react-markdown`
- `<QuoteBox />` **(NOWY)** - for highlighted quotes
- Typography components for rich text

#### QuoteBox Component
```javascript
// src/components/molecules/QuoteBox/
interface QuoteBoxProps {
  quote: string;
  author?: string;
}

const QuoteBox: React.FC<QuoteBoxProps> = ({ quote, author }) => {
  return (
    <div className={styles.quoteBox}>
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

#### Styling for Article Content
```css
.articleContent {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--spacing-16) var(--spacing-8);
}

.articleContent h2 {
  font-family: var(--font-primary);
  font-size: var(--font-size-4xl);
  margin-top: var(--spacing-12);
  margin-bottom: var(--spacing-6);
  color: var(--color-raspberry);
}

.articleContent h3 {
  font-family: var(--font-secondary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-4);
}

.articleContent p {
  font-family: var(--font-secondary);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-6);
  color: var(--color-black-soft);
}

.articleContent ul,
.articleContent ol {
  margin-left: var(--spacing-6);
  margin-bottom: var(--spacing-6);
}

.articleContent li {
  margin-bottom: var(--spacing-3);
  line-height: var(--line-height-normal);
}

/* Quote Box */
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
```

#### Example Article Content (Markdown)
```markdown
## Wprowadzenie

Bliskość między dzieckiem a opiekunem jest fundamentem zdrowego rozwoju emocjonalnego. W tym artykule omówimy, jak budować i pielęgnować tę szczególną więź.

## Czym jest bliskość rodzicielska?

Bliskość to nie tylko fizyczna obecność, ale przede wszystkim emocjonalna dostępność...

> "Dzieci potrzebują naszej obecności bardziej niż naszych prezentów."
> — Jesse Jackson

## Jak budować bliskość?

### 1. Poświęć czas

Regularne, nieprzerywane chwile tylko z dzieckiem...

### 2. Słuchaj aktywnie

Prawdziwe słuchanie oznacza pełną uwagę...

### 3. Bądź dostępny emocjonalnie

Dziel się swoimi emocjami w sposób dostosowany do wieku dziecka...
```

---

## Next Steps

Po zbudowaniu nowych podstron:
1. Dodaj scroll-triggered animations (patrz: `interactions.md`)
2. Test responsywności każdej sekcji (patrz: `responsive.md`)
3. Accessibility audit (keyboard nav, screen readers)
4. Performance optimization (lazy loading, code splitting)
5. SEO optimization dla artykułów (meta tags, structured data)
