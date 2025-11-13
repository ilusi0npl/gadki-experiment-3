import { Helmet } from 'react-helmet-async';

const ForEducatorsPage = () => {
  return (
    <>
      <Helmet>
        <title>Dla Edukatorów - GADKI</title>
        <meta name="description" content="Materiały i zasoby dla edukatorów" />
      </Helmet>
      <div style={{ padding: 'var(--spacing-16) var(--spacing-8)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-6xl)', color: 'var(--color-raspberry)' }}>
          Dla edukatorów
        </h1>
      </div>
    </>
  );
};

export default ForEducatorsPage;
