import kathakaliVideo from 'assets/videos/kathakali-video1.mp4';
import './index.css';

function AboutUsPage() {
  return (
    <div className="mb64">
      <div className="font-64 white mb32">About Us</div>
      <div className="flex gap-32">
        <div>
          <video controls className="video">
            <source src={kathakaliVideo} type="video/mp4" />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <div className="font-48 mb16">
            Learn More about Different Cultures
          </div>
          <div className="font-24 text-left gray mb16">
            CultureWeb has many resources that teach you more about different
            cultures.
          </div>
          <div className="flex-column">
            <a href="/cultures/kathakali" className="font-32 red-underline mb8">
              Kathakali
            </a>
            <div className="font-24 gray mb16 text-left">
              Kathakali is a... sample text sample text sample text sample text
              sample text sample text.
            </div>
            <a href="/cultures/culture2" className="font-32 red-underline mb8">
              Culture 2
            </a>
            <div className="font-24 gray text-left">
              Culture 2 is a... sample text sample text sample text sample text
              sample text sample text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
