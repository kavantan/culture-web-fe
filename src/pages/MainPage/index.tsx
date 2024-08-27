import { useNavigate } from 'react-router-dom';
import heroImage from 'assets/images/kathakali-stock-images/kathakali1.jpg';
import Button from 'components/Common/Button';
import './index.css';

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="mb64">
      <div className="font-64 white mb32">Home</div>
      <div className="flex-between align-center gap-64">
        <div className="mx-auto">
          <div className="font-64 white">
            Discover the World of Cultures at CultureWeb
          </div>
          <div className="font-32 gray my16">
            Experience the beauty and diversity of cultures from all around the
            globe.
          </div>
          <div className="flex gap-32 my16">
            <Button onClick={() => handleNavigate('/cultures')}>
              Get Started
            </Button>
            <Button onClick={() => handleNavigate('/about-us')}>
              Learn More →
            </Button>
          </div>
        </div>
        <img src={heroImage} alt="Cultural" />
      </div>
    </div>
  );
}

export default MainPage;
