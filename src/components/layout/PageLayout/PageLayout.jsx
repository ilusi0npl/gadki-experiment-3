import styles from './PageLayout.module.css';

// Temporary simple header and footer (will be replaced with full components later)
const SimpleHeader = () => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.logo}>GADKI</div>
      <nav className={styles.nav}>
        <a href="/">Strona główna</a>
        <a href="/dla-dzieci">Dla dzieci</a>
        <a href="/dla-rodzicow">Dla rodziców</a>
        <a href="/dla-edukatorow">Dla edukatorów</a>
        <a href="/faq">FAQ</a>
      </nav>
    </div>
  </header>
);

const SimpleFooter = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <p>&copy; 2024 GADKI. Wszystkie prawa zastrzeżone.</p>
    </div>
  </footer>
);

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
      <SimpleHeader />
      <main className={styles.mainContent}>{children}</main>
      <SimpleFooter />
    </div>
  );
};

export default PageLayout;
