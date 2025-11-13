import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import { articles } from '@/data/articles';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} - GADKI</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      <article style={{ padding: 'var(--spacing-16) var(--spacing-8)', maxWidth: '800px', margin: '0 auto' }}>
        <header>
          <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-6xl)', color: 'var(--color-raspberry)' }}>
            {article.title}
          </h1>
          <p style={{ color: 'var(--color-gray-600)', marginTop: 'var(--spacing-4)' }}>
            {article.author} • {article.date} • {article.readTime}
          </p>
        </header>
        <div style={{ marginTop: 'var(--spacing-8)' }} dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
      </article>
    </>
  );
};

export default ArticlePage;
