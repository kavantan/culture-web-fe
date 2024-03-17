import styles from './KathakaliPage.module.css';
import kathakaliImage from '../../assets/images/kathakali1.jpg';
import ImageUploadAndDisplay from '../../components/ImageUploadAndDisplay';

function KathakaliPage() {
  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.kathakaliPage}>
      <h1 className={styles.header}>Kathakali</h1>
      <img src={kathakaliImage} alt="Kathakali" className={styles.topImage} />
      <nav className={styles.sectionNav}>
        <button type="button" onClick={(e) => handleNavigation(e, 'overview')}>
          Overview
        </button>
        <button
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm1')}
        >
          Algorithm 1
        </button>
        <button
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm2')}
        >
          Algorithm 2
        </button>
        <button type="button" onClick={(e) => handleNavigation(e, 'connect')}>
          Connect
        </button>
      </nav>
      <section id="overview" className={styles.section}>
        <h2>Overview</h2>
        text text text text text text text text text text text text text text
      </section>
      <section id="algorithm1" className={styles.section}>
        <h2>Algorithm 1</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
        <ImageUploadAndDisplay />
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>

      <section id="algorithm2" className={styles.section}>
        <h2>Algorithm 2</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
        <button type="button" className={styles.uploadButton}>
          Upload
        </button>{' '}
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
      <section id="connect" className={styles.section}>
        <h2>Connect</h2>
        text text text text text text text text text text text text text text
      </section>
    </div>
  );
}

export default KathakaliPage;
