import PropTypes from 'prop-types';
import Button from '../Button';
import './index.css';

function CommunityCard({ title, description, buttonText }) {
  const handleButtonClick = () => {
    console.log('Handle');
  };

  return (
    <div className="card">
      <div className="cardContent">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardDescription">{description}</p>
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
