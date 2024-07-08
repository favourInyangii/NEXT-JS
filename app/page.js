import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Portfolio
        </h1>
        <p className={styles.description}>
          Explore my projects and get to know me better.
        </p>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 My Portfolio</p>
      </footer>
    </div>
  );
}
