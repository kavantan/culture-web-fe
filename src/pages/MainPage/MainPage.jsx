import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import heroImage from '../../assets/images/kathakali1.jpg';
import styles from './MainPage.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Discover the World of Cultures at CultureWeb</h1>
        <p>
          Experience the beauty and diversity of cultures from all around the
          globe.
        </p>
        <div className={styles.heroButtons}>
          <Button
            label="Get Started"
            className={styles.btnPrimary}
            onClick={() => {
              // Nav to something, placeholder for now
            }}
          />
          <Button
            label="Learn More →"
            className={styles.btnSecondary}
            onClick={() => {
              // Nav to something, placeholder for now
            }}
          />
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Cultural" />
      </div>
    </section>
  );
}

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <HeroSection />
    </div>
  );
}

export default MainPage;
