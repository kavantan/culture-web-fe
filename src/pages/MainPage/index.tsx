import { useNavigate } from 'react-router-dom';
import heroImage from 'assets/images/kathakali-stock-images/kathakali5.jpg';
import Button from 'components/Common/Button';

function MainPage() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">Home</div>
      <div className="flex-between align-center gap-xlarge">
        <div className="mx-auto">
          <div className="font-4xlarge white">
            Discover the World of Cultures at KathakalAI
          </div>
          <div className="font-2xlarge gray my-small">
            Experience the beauty and diversity of cultures from all around the
            globe.
          </div>
          <div className="flex-center gap-large my-small">
            <Button onClick={() => handleNavigate('/cultures')}>
              Get Started
            </Button>
            <Button onClick={() => handleNavigate('/about-us')}>
              Learn More →
            </Button>
          </div>
        </div>
        <img
          className="media-responsive-large"
          src={heroImage}
          alt="Cultural"
        />
      </div>
    </div>
  );
}

export default MainPage;
