import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} />
    <h1>My Portfolio</h1>
  </header>
);

export default Header;
