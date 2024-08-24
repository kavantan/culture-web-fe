import kathakaliVideo from 'assets/videos/kathakali-video1.mp4';
import './index.css';

function AboutUsPage() {
  return (
    <div className="aboutUsPage">
      <h1 className="header">About Us</h1>
      <div className="mainContent">
        <div className="videoContainer">
          <video controls className="video">
            <source src={kathakaliVideo} type="video/mp4" />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="textContainer">
          <h2 className="subHeader">Learn More about Different Cultures</h2>
          <p>
            CultureWeb has many resources that teach you more about different
            cultures.
          </p>
          <div className="cultureLinks">
            <a href="/cultures/kathakali" className="link">
              Kathakali
            </a>
            <p className="text">
              Kathakali is a... sample text sample text sample text
            </p>
            <a href="/cultures/culture2" className="link">
              Culture 2
            </a>
            <p className="text">
              Culture 2 is a... sample text sample text sample text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
