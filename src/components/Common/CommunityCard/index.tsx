import React from 'react';
import Button from 'components/Common/Button';
import './index.css';

interface CommunityCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  title,
  description,
  buttonText,
}) => {
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
};

export default CommunityCard;
