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
    // TODO: Implement button click functionality
  };

  return (
    <div className="card flex-column justify-center align-center">
      <div className="text-center">
        <div className="font-2xlarge mb-base">{title}</div>
        <div className="font-base gray mb-base">{description}</div>
        <Button onClick={handleButtonClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default CommunityCard;
