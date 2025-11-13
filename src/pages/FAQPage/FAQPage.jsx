import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - GADKI</title>
        <meta name="description" content="Najczęściej zadawane pytania" />
      </Helmet>
      <div style={{ padding: 'var(--spacing-16) var(--spacing-8)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-6xl)', color: 'var(--color-raspberry)' }}>
          Najczęściej zadawane pytania
        </h1>
      </div>
    </>
  );
};

export default FAQPage;
