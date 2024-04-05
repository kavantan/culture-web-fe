import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/images/kathakali-stock-images/kathakali1.jpg';
import Button from '../../components/Common/Button';
import styles from './MainPage.module.css';

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.mainPage}>
      <div className={styles.heroContent}>
        <h1>Discover the World of Cultures at CultureWeb</h1>
        <p>
          Experience the beauty and diversity of cultures from all around the
          globe.
        </p>
        <div className={styles.heroButtons}>
          <Button onClick={() => handleNavigate('/cultures')}>
            Get Started
          </Button>
          <Button onClick={() => handleNavigate('/about-us')}>
            Learn More →
          </Button>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Cultural" />
      </div>
    </div>
  );
}

export default MainPage;
