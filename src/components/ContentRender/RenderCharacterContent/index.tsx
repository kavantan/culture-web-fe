import React, { useEffect, useState } from 'react';
import { Carousel, Card, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import charactersData from 'assets/data/characters.json';
import Button from 'components/Common/Button';
import { PredictionMultiple, Character } from 'types/interface';
import toPascalCase from 'utils/toPascalCase';
import * as characterImages from './images';
import './index.css';

const RenderCharacterContent: React.FC<{
  predictionMultiple: PredictionMultiple;
  file: File;
}> = ({ predictionMultiple, file }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      setLoading(false);
      return () => URL.revokeObjectURL(url);
    }
    return undefined;
  }, [file]);

  if (loading) {
    return <Spin indicator={<LoadingOutlined spin />} />;
  }

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
              <div
                style={{
                  // width: `${prediction.location.width}px`,
                  // height: `${prediction.location.height}px`,
                  backgroundImage: `url(${imageUrl})`,
                  backgroundPosition: `-${prediction.location.x}px -${prediction.location.y}px`,
                }}
                className="cropImage"
              />
              <div className="font-base gray mb-base">
                {characterInfo.shortDescription}
              </div>
              <img
                src={characterImage}
                alt={characterInfo.name}
                className="characterImage"
              />
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
