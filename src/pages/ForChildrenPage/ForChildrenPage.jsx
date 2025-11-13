import { Helmet } from 'react-helmet-async';

const ForChildrenPage = () => {
  return (
    <>
      <Helmet>
        <title>Dla Dzieci - GADKI</title>
        <meta name="description" content="Materiały edukacyjne dla dzieci 4-12 lat" />
      </Helmet>

      <div style={{ padding: 'var(--spacing-16) var(--spacing-8)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-6xl)', color: 'var(--color-raspberry)' }}>
          Materiały dla dzieci
        </h1>
        <p style={{ fontSize: 'var(--font-size-lg)', marginTop: 'var(--spacing-4)' }}>
          Wybierz grupę wiekową swojego dziecka
        </p>
      </div>
    </>
  );
};

export default ForChildrenPage;
