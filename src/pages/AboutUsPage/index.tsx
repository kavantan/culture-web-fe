import { Card } from 'antd';
import kathakaliVideoUrl from './content';
import './index.css';

function AboutUsPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">About Us</div>
      <div className="flex-center-responsive gap-large">
        <Card
          className="flex-1"
          styles={{
            body: { backgroundColor: '#1c1e24' },
          }}
          bordered={false}
          hoverable
        >
          <iframe
            src={kathakaliVideoUrl}
            className="video-container"
            title="Kathakali Youtube Video"
            frameBorder={0}
            allowFullScreen
          />
        </Card>
        <div className="flex-2">
          <div className="font-3xlarge mb-base">
            Learn More about Different Cultures
          </div>
          <div className="font-xlarge gray mb-base">
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
            <div className="font-xlarge gray mb-base">
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
            <div className="font-xlarge gray">
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
