import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Nie znaleziono strony - GADKI</title>
      </Helmet>
      <div style={{ padding: 'var(--spacing-16) var(--spacing-8)', textAlign: 'center', minHeight: '50vh' }}>
        <h1 style={{ fontSize: 'var(--font-size-9xl)', color: 'var(--color-raspberry)' }}>404</h1>
        <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: 'var(--font-size-4xl)', marginTop: 'var(--spacing-4)' }}>
          Nie znaleziono strony
        </h2>
        <p style={{ fontSize: 'var(--font-size-lg)', marginTop: 'var(--spacing-4)', color: 'var(--color-gray-600)' }}>
          Przepraszamy, ale strona której szukasz nie istnieje.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginTop: 'var(--spacing-8)',
            padding: 'var(--spacing-4) var(--spacing-8)',
            backgroundColor: 'var(--color-raspberry)',
            color: 'var(--color-white)',
            borderRadius: 'var(--radius-xl)',
            textDecoration: 'none',
            fontSize: 'var(--font-size-lg)',
            fontFamily: 'var(--font-secondary)',
            fontWeight: 'var(--font-weight-bold)',
          }}
        >
          Wróć do strony głównej
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
