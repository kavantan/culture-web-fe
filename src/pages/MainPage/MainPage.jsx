import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import heroImage from '../../assets/images/kathakali1.jpg';
import styles from './MainPage.module.css';

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Discover the World of Cultures at CultureWeb</h1>
        <p>
          Experience the beauty and diversity of cultures from all around the
          globe.
        </p>
        <div className={styles.heroButtons}>
          <Button
            label="Get Started"
            onClick={() => handleNavigate('/cultures')}
          />
          <Button
            label="Learn More →"
            onClick={() => handleNavigate('/about-us')}
          />
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="Cultural" />
      </div>
    </div>
  );
}

export default MainPage;
