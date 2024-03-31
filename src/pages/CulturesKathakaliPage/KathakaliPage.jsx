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
          Character Recognition Algorithm
        </button>
        <button
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm2')}
        >
          Hand Gesture Algorithm
        </button>
        <button type="button" onClick={(e) => handleNavigation(e, 'connect')}>
          Connect
        </button>
      </nav>
      <section id="overview" className={styles.section}>
        <h2>Overview</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
      <section id="algorithm1" className={styles.section}>
        <h2>Character Recognition Algorithm</h2>
        <p>
          This is an AI algorithm that helps users understand the major types of
          Kathakali characters, namely: Pacha, Kathi, Minukku-Female,
          Chuvanna-Thadi, Vella-Thadi and Kari-Male.
        </p>
        <ImageUploadAndDisplay />
        <p>
          The algorithm uses image recognition to identify the characters and
          display the name of the character. Simply upload an image of a
          Kathakali character to see the result.
        </p>
      </section>

      <section id="algorithm2" className={styles.section}>
        <h2>Hand Gesture Algorithm</h2>
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
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
    </div>
  );
}

export default KathakaliPage;
