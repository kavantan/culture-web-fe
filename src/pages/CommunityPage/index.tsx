import CommunityCard from 'components/Common/CommunityCard';
import './index.css';

const watchContent = [
  {
    title: 'Kathakali',
    description: 'Watch a video on Kathakali here!',
    buttonText: 'Watch here',
  },
  {
    title: 'Culture 2',
    description: 'Watch a video on Culture 2 here!',
    buttonText: 'Watch here',
  },
];

const readContent = [
  {
    title: 'Kathakali',
    description: 'Learn more about Kathakali here!',
    buttonText: 'Read here',
  },
  {
    title: 'Culture 2',
    description: 'Learn more about Culture 2 here!',
    buttonText: 'Read here',
  },
  {
    title: 'Culture 3',
    description: 'Learn more about Culture 3 here!',
    buttonText: 'Read here',
  },
];

function CommunityPage() {
  return (
    <div className="communityPage">
      <h1 className="header">Community</h1>

      <div className="section">
        <h2 className="sectionHeader">Hi there!</h2>
        <div className="cardsContainer">
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

      <div className="section">
        <h2 className="sectionHeader">Resources</h2>
        <div className="cardsContainer">
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
