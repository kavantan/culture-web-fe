import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple } from 'types/interface';

const mockResponse: PredictionMultiple = {
  prediction: [
    {
      prediction: 'Minukku-Female',
      location: {
        x: 1762,
        y: 218,
        width: 1905,
        height: 379,
        probability: 0,
      },
    },
    {
      prediction: 'White-beard',
      location: {
        x: 856,
        y: 411,
        width: 1003,
        height: 567,
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
