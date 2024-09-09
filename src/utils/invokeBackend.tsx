import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple } from 'types/interface';

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

const uploadImgToCharRecBE = async (
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

export default uploadImgToCharRecBE;
