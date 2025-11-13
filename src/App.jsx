import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PageLayout from '@/components/layout/PageLayout';

// Eager loading dla głównej strony
import HomePage from '@/pages/HomePage';

// Lazy loading dla pozostałych stron
const ForChildrenPage = lazy(() => import('@/pages/ForChildrenPage'));
const ForParentsPage = lazy(() => import('@/pages/ForParentsPage'));
const ForEducatorsPage = lazy(() => import('@/pages/ForEducatorsPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    fontSize: 'var(--font-size-xl)',
    color: 'var(--color-raspberry)',
  }}>
    Ładowanie...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
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
