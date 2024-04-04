import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>CultureWeb</div>
      <div className={styles.navLinks}>
        <button
          type="button"
          onClick={() => handleNavigate('/')}
          className={styles.navItem}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/cultures')}
          className={styles.navItem}
        >
          Cultures
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/about-us')}
          className={styles.navItem}
        >
          About Us
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/community')}
          className={styles.navItem}
        >
          Community
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/contact-us')}
          className={styles.navItem}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
