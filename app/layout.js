// app/layout.js
import Header from '../components/Header';
import styles from '../styles/globals.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <main>{children}</main>
    {/* Add footer or other components here */}
  </div>
);

export default Layout;
