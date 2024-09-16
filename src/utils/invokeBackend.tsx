import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple, Prediction, Location } from 'types/interface';

const uploadImage = async (
  imageFile: File,
  endpoint: string,
): Promise<PredictionMultiple> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await fetch(`${BACKEND_URI}/${endpoint}`, {
    method: 'POST',
    body: formData,
  })
    .then((output) => output.json())
    .catch(() => {
      throw new Error('Failed to upload image.');
    });

  const toReturn: Prediction[] = response.map(
    (value: {
      prediction: string;
      location: Location[];
      accuracy: number[];
    }) => ({
      prediction: value.prediction,
      location: {
        x: value.location[0],
        y: value.location[2],
        width: value.location[1],
        height: value.location[3],
        probability: value.accuracy,
      },
    }),
  );
  return { prediction: toReturn };
};

export const uploadImgToExpressionRecBE = async (
  imageFile: File,
): Promise<PredictionMultiple> => uploadImage(imageFile, 'classify-expression');

export const uploadImgToCharRecBE = async (
  imageFile: File,
): Promise<PredictionMultiple> => uploadImage(imageFile, 'kathakali');
