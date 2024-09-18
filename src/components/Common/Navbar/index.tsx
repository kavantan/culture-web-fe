import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import logoKathakalAI from 'assets/images/logos/kathakalai-pink.png';
import './index.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className="navbar flex-between align-center px-xlarge">
      <button
        type="button"
        onClick={() => handleNavigate('/')}
        className="font-xlarge text-only-button red font-bold flex align-center"
      >
        <img src={logoKathakalAI} alt="KathakalAI Logo" className="logo-img" />
        KathakalAI
      </button>
      <div className={`nav-links font-large ${isOpen ? 'active' : ''}`}>
        <button
          type="button"
          onClick={() => handleNavigate('/')}
          className={`text-only-button ${
            isActive('/') ? 'white-underline' : 'gray-underline'
          }`}
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/cultures')}
          className={`text-only-button ${
            isActive('/cultures') ? 'white-underline' : 'gray-underline'
          }`}
        >
          Cultures
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/about-us')}
          className={`text-only-button ${
            isActive('/about-us') ? 'white-underline' : 'gray-underline'
          }`}
        >
          About Us
        </button>
        {/* <button
          type="button"
          onClick={() => handleNavigate('/community')}
          className={`text-only-button ${
            isActive('/community') ? 'white-underline' : 'gray-underline'
          }`}
        >
          Community
        </button> */}
        <button
          type="button"
          onClick={() => handleNavigate('/contact-us')}
          className={`text-only-button ${
            isActive('/contact-us') ? 'white-underline' : 'gray-underline'
          }`}
        >
          Contact Us
        </button>
      </div>
      <MenuOutlined className="menu gray" onClick={() => setIsOpen(!isOpen)} />
    </nav>
  );
}

export default Navbar;
