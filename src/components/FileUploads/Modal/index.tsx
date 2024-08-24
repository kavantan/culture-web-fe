import React from 'react';
import Button from 'components/Common/Button';
import './index.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClose();
    }
  };

  return (
    <div
      className="modalOverlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {children}
        <Button className="closeButton" onClick={onClose}>
          X
        </Button>
      </div>
    </div>
  );
};

export default Modal;
