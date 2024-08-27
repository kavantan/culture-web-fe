import { useNavigate } from 'react-router-dom';
import './index.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="navbar flex-between align-center px-64 py-16">
      <div className="font-24 font-bold red">CultureWeb</div>
      <div className="font-20">
        <button
          type="button"
          onClick={() => handleNavigate('/')}
          className="text-only-button gray-underline"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/cultures')}
          className="text-only-button gray-underline"
        >
          Cultures
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/about-us')}
          className="text-only-button gray-underline"
        >
          About Us
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/community')}
          className="text-only-button gray-underline"
        >
          Community
        </button>
        <button
          type="button"
          onClick={() => handleNavigate('/contact-us')}
          className="text-only-button gray-underline"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
