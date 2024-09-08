import CommunityCard from 'components/Common/CommunityCard';
import { watchContent, readContent } from './content';

function CommunityPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">Community</div>
      <div className="mb-large">
        <div className="font-2xlarge white mb-base">Hi there!</div>
        <div className="flex-center-responsive gap-large">
          {watchContent.map((content) => (
            <CommunityCard
              key={content.title}
              title={content.title}
              description={content.description}
              buttonText={content.buttonText}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="font-2xlarge white mb-base">Resources</div>
        <div className="flex-center-responsive gap-large">
          {readContent.map((content) => (
            <CommunityCard
              key={content.title}
              title={content.title}
              description={content.description}
              buttonText={content.buttonText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
