import { Helmet } from 'react-helmet-async';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>GADKI - Rozmowy budujące bliskość</title>
        <meta
          name="description"
          content="Kampania edukacyjna wspierająca komunikację i bliskość w rodzinie"
        />
      </Helmet>

      <div className={styles.homePage}>
        <section className={styles.hero}>
          <h1>Witaj w GADKI!</h1>
          <p>Kampania edukacyjna wspierająca komunikację i bliskość w rodzinie</p>
        </section>
      </div>
    </>
  );
};

export default HomePage;
