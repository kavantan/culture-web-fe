import React from 'react';
import charactersData from 'assets/data/characters.json';
import toPascalCase from 'utils/toPascalCase';
import Button from 'components/Common/Button';
import { Prediction } from 'types/interface';
import * as characterImages from './images';
import './index.css';

interface Character {
  name: string;
  shortDescription: string;
  examples: string;
  url: string;
  imagePath: string;
}

const RenderCharacterContent: React.FC<{ prediction: Prediction }> = ({
  prediction,
}) => {
  const characterInfo = charactersData.find(
    (char: Character) =>
      char.name.toLowerCase() === prediction?.prediction.toLowerCase(),
  );

  const characterImage =
    characterImages[
      toPascalCase(characterInfo?.name || '') as keyof typeof characterImages
    ];

  return (
    characterInfo && (
      <div className="output flex-column align-center text-center mx-auto mt16">
        <img
          src={characterImage}
          alt={characterInfo.name}
          className="characterImage"
        />
        <table className="mb16">
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
};

export default RenderCharacterContent;
