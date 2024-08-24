import PropTypes from 'prop-types';
import Button from '../../Common/Button';
import './index.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
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
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
