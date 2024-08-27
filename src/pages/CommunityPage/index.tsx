import CommunityCard from 'components/Common/CommunityCard';
import { watchContent, readContent } from './content';
import './index.css';

function CommunityPage() {
  return (
    <div className="mb64">
      <div className="font-64 white mb32">Community</div>
      <div className="mb32">
        <div className="font-32 white mb16">Hi there!</div>
        <div className="flex justify-center gap-32">
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
        <div className="font-32 white mb16">Resources</div>
        <div className="flex justify-center gap-32">
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
