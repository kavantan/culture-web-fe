import * as characterImages from './images';
import charactersData from '../../../assets/data/characters.json';
import styles from './RenderCharacterContent.module.css';

function RenderCharacterContent(output) {
  const characterInfo = charactersData.find(
    (char) => char.name.toLowerCase() === output?.prediction.toLowerCase(),
  );

  const characterImage = characterImages[characterInfo?.name.replace(/-/g, '')];

  return (
    characterInfo && (
      <div className={styles.output}>
        <h3>{characterInfo.name}</h3>
        <img
          src={characterImage}
          alt={characterInfo.name}
          className={styles.characterImage}
        />
        <p>{characterInfo.description}</p>
        <button
          type="button"
          className={styles.findOutMoreButton}
          onClick={() => window.open(characterInfo.url, '_blank')}
        >
          Find Out More
        </button>
      </div>
    )
  );
}

export default RenderCharacterContent;
