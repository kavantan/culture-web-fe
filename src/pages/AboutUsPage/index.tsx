import kathakaliVideo from 'assets/videos/kathakali-video1.mp4';

function AboutUsPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">About Us</div>
      <div className="flex-center-responsive gap-large">
        <div className="media-responsive-base">
          <video controls>
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
              Kathakali is a classical dance-drama from Kerala, India, known for
              its vibrant costumes, intricate makeup, and elaborate facial
              expressions. It combines dance, music, and acting to tell stories
              from Indian epics like the Mahabharata and Ramayana.
            </div>
            <a
              href="/cultures/kootiyattam"
              className="font-2xlarge red-underline mb-small"
            >
              Kootiyattam
            </a>
            <div className="font-xlarge gray text-left">
              Koodiyattam is an ancient Sanskrit theater tradition from Kerala,
              considered one of the oldest living forms of theater. It blends
              dance, drama, and ritualistic elements.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
