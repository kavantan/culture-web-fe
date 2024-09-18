import React, { useEffect, useState } from 'react';
import { Carousel, Card } from 'antd';
import { PredictionMultiple } from 'types/interface';
import expressionToContent from './expressions';
import './index.css';

const RenderExpressionContent: React.FC<{
  predictionMultiple: PredictionMultiple;
  file: File;
}> = ({ predictionMultiple, file }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
    return undefined;
  }, [file]);

  return (
    <Carousel arrows>
      {predictionMultiple.prediction.map((prediction) => {
        const characterInfo =
          expressionToContent[
            prediction.prediction as keyof typeof expressionToContent
          ];
        if (!characterInfo) return null;
        return (
          <Card
            key={characterInfo.Name}
            className="mt-base"
            bordered={false}
            styles={{
              body: { backgroundColor: '#1c1e24' },
            }}
          >
            <div>
              <div className="font-xlarge white mb-base">
                {characterInfo.Name}
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
                {characterInfo.Description}
              </div>
            </div>
          </Card>
        );
      })}
    </Carousel>
  );
};

export default RenderExpressionContent;
