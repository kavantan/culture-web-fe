import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple, Prediction, Location } from 'types/interface';

const mockResponse: PredictionMultiple = {
  prediction: [
    {
      prediction: 'White-beard',
      location: {
        x: 210,
        y: 60,
        width: 224,
        height: 75,
        probability: 0,
      },
    },
    {
      prediction: 'Kari-Male',
      location: {
        x: 44,
        y: 42,
        width: 61,
        height: 62,
        probability: 0,
      },
    },
  ],
};

export const uploadImgToExpressionRecBE = async (
  imageFile: File,
): Promise<PredictionMultiple> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await fetch(`${BACKEND_URI}/classify-expression`, {
    method: 'POST',
    body: formData,
  }).then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
      throw new Error('Failed to upload image.');
  });

  const toReturn: Prediction[] = response.map((value: { prediction: any; location: any[]; accuracy: any[]; }) => {
    return {
      prediction: value.prediction,
      location: {
        x: value.location[0],
        y: value.location[2],
        width: value.location[1],
        height: value.location[3],
        probability: value.accuracy
      }
    }
  })
  return {prediction: toReturn};
};

export const uploadImgToCharRecBE = async (
  imageFile: File,
): Promise<PredictionMultiple> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetch(`${BACKEND_URI}/classify`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image.');
  }

  // TODO: Uncomment return statement and test function once backend is ready
  // return response.json();
  return mockResponse;
};

// TODO: Uncomment and test function once backend is ready
// const uploadImgToExpressionRecBE = async (
//   imageFile: File,
// ): Promise<PredictionMultiple> => {
//   const formData = new FormData();
//   formData.append('image', imageFile);

//   const response = await fetch(`${BACKEND_URI}/expression`, {
//     method: 'POST',
//     body: formData,
//   });

//   if (!response.ok) {
//     throw new Error('Failed to upload image.');
//   }
//   return response.json();
// };
