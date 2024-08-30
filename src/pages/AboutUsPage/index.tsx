import kathakaliVideo from 'assets/videos/kathakali-video1.mp4';
import './index.css';

function AboutUsPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">About Us</div>
      <div className="flex-center-responsive gap-large">
        <div>
          <video controls className="media-responsive">
            <source src={kathakaliVideo} type="video/mp4" />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <div className="font-3xlarge mb-base">
            Learn More about Different Cultures
          </div>
          <div className="font-xlarge text-left gray mb-base">
            KathakalAI has many resources that teach you more about different
            cultures.
          </div>
          <div className="flex-column">
            <a
              href="/cultures/kathakali"
              className="font-2xlarge red-underline mb-small"
            >
              Kathakali
            </a>
            <div className="font-xlarge gray mb-base text-left">
              Kathakali is a... sample text sample text sample text sample text
              sample text sample text.
            </div>
            <a
              href="/cultures/culture2"
              className="font-2xlarge red-underline mb-small"
            >
              Culture 2
            </a>
            <div className="font-xlarge gray text-left">
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
