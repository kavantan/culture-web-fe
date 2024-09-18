import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple, Prediction, Location } from 'types/interface';

const getImageDimensions = (
  imageFile: File,
): Promise<{ width: number; height: number }> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = reject;
      img.src = event.target?.result as string;
    };

    reader.readAsDataURL(imageFile);
  });

const uploadImage = async (
  imageFile: File,
  endpoint: string,
): Promise<PredictionMultiple> => {
  const formData = new FormData();
  const { width, height } = await getImageDimensions(imageFile);
  formData.append('image', imageFile);
  const response = await fetch(`${BACKEND_URI}/kathakali/${endpoint}`, {
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
        x: 0,
        y: 0,
        width,
        height,
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
): Promise<PredictionMultiple> => uploadImage(imageFile, '');
