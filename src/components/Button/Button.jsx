import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ label, onClick }) {
  return (
    <button type="button" className={styles.btnPrimary} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
