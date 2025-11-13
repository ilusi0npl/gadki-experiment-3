import { Helmet } from 'react-helmet-async';

const ForParentsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dla Rodziców - GADKI</title>
        <meta name="description" content="Artykuły i porady dla rodziców" />
      </Helmet>
      <div style={{ padding: 'var(--spacing-16) var(--spacing-8)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-6xl)', color: 'var(--color-raspberry)' }}>
          Dla rodziców
        </h1>
      </div>
    </>
  );
};

export default ForParentsPage;
