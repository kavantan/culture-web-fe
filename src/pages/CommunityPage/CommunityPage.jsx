import CommunityCard from '../../components/CommunityCard';
import styles from './CommunityPage.module.css';

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
    <div className={styles.communityPage}>
      <h1 className={styles.header}>Community</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Hi there!</h2>
        <div className={styles.cardsContainer}>
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

      <div className={styles.section}>
        <h2 className={styles.sectionHeader}>Resources</h2>
        <div className={styles.cardsContainer}>
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
