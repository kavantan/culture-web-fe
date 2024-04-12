import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ onClick, children, className = '' }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
