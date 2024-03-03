import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CultureWeb</div>
      <div className={styles.navLinks}>
        <button className={styles.navItem} type="button">
          Home
        </button>
        <button className={styles.navItem} type="button">
          Cultures
        </button>
        <button className={styles.navItem} type="button">
          About Us
        </button>
        <button className={styles.navItem} type="button">
          Community
        </button>
        <button className={styles.navItem} type="button">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
