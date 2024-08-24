import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Common/Button';
import './index.css';

interface CultureCardProps {
  name: string;
  url: string;
  imageUrl: string;
}

const CultureCard: React.FC<CultureCardProps> = ({ name, url, imageUrl }) => {
  const navigate = useNavigate();

  const navigateToCulture = () => {
    navigate(`/cultures/${url.toLowerCase()}`);
  };

  return (
    <div
      className="card"
      onClick={navigateToCulture}
      onKeyDown={navigateToCulture}
      role="button"
      tabIndex={0}
    >
      <img src={imageUrl} alt={name} className="cardImage" />
      <div className="cardContent">
        <h2 className="cardTitle">{name}</h2>
        <Button onClick={navigateToCulture}>READ MORE →</Button>
      </div>
    </div>
  );
};

export default CultureCard;
