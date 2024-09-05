import React from 'react';
import { Carousel, Card } from 'antd';
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
}> = ({ predictionMultiple, file }) => {
  return (
    <Carousel arrows>
      {predictionMultiple.prediction.map((prediction) => {
        const characterInfo = charactersData.find(
          (char: Character) =>
            char.name.toLowerCase() === prediction.prediction.toLowerCase(),
        );
        if (!characterInfo) return null;

        const characterImage =
          characterImages[
            toPascalCase(characterInfo.name) as keyof typeof characterImages
          ];

        return (
          <Card
            key={characterInfo.name}
            className="mt-base"
            bordered={false}
            styles={{
              body: { backgroundColor: '#1c1e24' },
            }}
          >
            <div>
              <div className="font-xlarge white mb-base">
                {characterInfo.name}
              </div>
            </div>
            <div>
              <img
                src={characterImage}
                alt={characterInfo.name}
                className="characterImage"
              />
              <div className="font-base gray mb-base">
                {characterInfo.shortDescription}
              </div>
              <div className="flex-center font-base gray gap-base">
                <div className="font-bold white">Examples:</div>
                <div>{characterInfo.examples}</div>
              </div>
              <Button
                className="text-center mt-base mb-base"
                onClick={() => window.open(characterInfo.url, '_blank')}
              >
                Find Out More
              </Button>
            </div>
          </Card>
        );
      })}
    </Carousel>
  );
};

export default RenderCharacterContent;
