import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './CommunityCard.module.css';

function CommunityCard({ title, description, buttonText }) {
  const handleButtonClick = () => {
    console.log('Handle');
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
}

CommunityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CommunityCard;
