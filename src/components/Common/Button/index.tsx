import React from 'react';
import './index.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className = '',
  type = 'button',
}) => (
  <button
    type={type} // eslint-disable-line react/button-has-type
    className={`custom-button font-base ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
