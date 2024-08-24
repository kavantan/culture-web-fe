import * as characterImages from './images';
import charactersData from '../../../assets/data/characters.json';
import toPascalCase from '../../../utils/toPascalCase';
import Button from '../../Common/Button';
import './index.css';

function RenderCharacterContent(output) {
  const characterInfo = charactersData.find(
    (char) => char.name.toLowerCase() === output?.prediction.toLowerCase(),
  );

  const characterImage =
    characterImages[toPascalCase(characterInfo?.name || '')];

  return (
    characterInfo && (
      <div className="output">
        <img
          src={characterImage}
          alt={characterInfo.name}
          className="characterImage"
        />
        <table className="characterTable">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{characterInfo.name}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{characterInfo.shortDescription}</td>
            </tr>
            <tr>
              <th>Examples:</th>
              <td>{characterInfo.examples}</td>
            </tr>
          </tbody>
        </table>
        <Button onClick={() => window.open(characterInfo.url, '_blank')}>
          Find Out More
        </Button>
      </div>
    )
  );
}

export default RenderCharacterContent;
