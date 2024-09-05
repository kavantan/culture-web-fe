import React from 'react';
import { Carousel } from 'antd';
import charactersData from 'assets/data/characters.json';
import toPascalCase from 'utils/toPascalCase';
import Button from 'components/Common/Button';
import { PredictionMultiple } from 'types/interface';
import * as characterImages from './images';
import './index.css';

interface Character {
  name: string;
  shortDescription: string;
  examples: string;
  url: string;
  imagePath: string;
}

const RenderCharacterContent: React.FC<{
  predictionMultiple: PredictionMultiple;
  file: File;
}> = ({ predictionMultiple, file }) => (
  <Carousel arrows>
    {predictionMultiple.prediction.map((prediction) => {
      const characterInfo = charactersData.find(
        (char: Character) =>
          char.name.toLowerCase() === prediction.prediction.toLowerCase(),
      );
      if (!characterInfo) return null;

      const characterImage =
        characterImages[
          toPascalCase(
            characterInfo?.name || '',
          ) as keyof typeof characterImages
        ];

      return (
        <div key={characterInfo.name}>
          <img
            src={URL.createObjectURL(file)}
            alt={characterInfo.name}
            style={{ maxHeight: '200px' }}
          />
          <img
            src={characterImage}
            alt={characterInfo.name}
            className="characterImage"
          />
          <table className="mb-base">
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
          <Button
            className="text-center"
            onClick={() => window.open(characterInfo.url, '_blank')}
          >
            Find Out More
          </Button>
        </div>
      );
    })}
  </Carousel>
);

export default RenderCharacterContent;
