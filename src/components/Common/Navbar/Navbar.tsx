import { useNavigate } from 'react-router-dom';
import './index.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="logo">CultureWeb</div>
      <div className="navLinks">
        <button
          type="button"
          onClick={() => handleNavigate('/')}
          className="navItem"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/cultures')}
          className="navItem"
        >
          Cultures
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/about-us')}
          className="navItem"
        >
          About Us
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/community')}
          className="navItem"
        >
          Community
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/contact-us')}
          className="navItem"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
