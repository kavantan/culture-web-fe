import styles from './AboutUsPage.module.css';
import kathakaliVideo from '../../assets/videos/kathakali-video1.mp4';

function AboutUsPage() {
  return (
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.header}>About Us</h1>
      <div className={styles.mainContent}>
        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source src={kathakaliVideo} type="video/mp4" />
            <track kind="captions" src="captions.vtt" label="English" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subHeader}>
            Learn More about Different Cultures
          </h2>
          <p>
            CultureWeb has many resources that teach you more about different
            cultures.
          </p>
          <div className={styles.cultureLinks}>
            <a href="/cultures/kathakali" className={styles.link}>
              Kathakali
            </a>
            <p className={styles.text}>
              Kathakali is a... sample text sample text sample text
            </p>
            <a href="/cultures/culture2" className={styles.link}>
              Culture 2
            </a>
            <p className={styles.text}>
              Culture 2 is a... sample text sample text sample text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
