import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClose();
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        {children}
        <button className={styles.closeButton} onClick={onClose} type="button">
          Close
        </button>
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
