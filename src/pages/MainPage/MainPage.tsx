import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/images/kathakali-stock-images/kathakali1.jpg';
import Button from '../../components/Common/Button';
import './index.css';

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="mainPage">
      <div className="heroContent">
        <h1>Discover the World of Cultures at CultureWeb</h1>
        <p>
          Experience the beauty and diversity of cultures from all around the
          globe.
        </p>
        <div className="heroButtons">
          <Button onClick={() => handleNavigate('/cultures')}>
            Get Started
          </Button>
          <Button onClick={() => handleNavigate('/about-us')}>
            Learn More →
          </Button>
        </div>
      </div>
      <div className="heroImage">
        <img src={heroImage} alt="Cultural" />
      </div>
    </div>
  );
}

export default MainPage;
