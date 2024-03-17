import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './CultureCard.module.css';

function CultureCard({ name, url, imageUrl }) {
  const navigate = useNavigate();

  const navigateToCulture = () => {
    navigate(`/cultures/${url.toLowerCase()}`);
  };

  return (
    <div
      className={styles.card}
      onClick={navigateToCulture}
      onKeyDown={navigateToCulture}
      role="button"
      tabIndex={0}
    >
      <img src={imageUrl} alt={name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <button type="button" className={styles.readMoreButton}>
          READ MORE →
        </button>
      </div>
    </div>
  );
}

CultureCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CultureCard;
