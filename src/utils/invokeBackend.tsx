import BACKEND_URI from 'configs/env.config';
import { PredictionMultiple, Prediction, Location } from 'types/interface';

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

export const uploadImgToExpressionRecBE = async (
  imageFile: File,
): Promise<PredictionMultiple> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const response = await fetch(`${BACKEND_URI}/classify-expression`, {
    method: 'POST',
    body: formData,
  }).then((output) => output.json())
    .catch(() => {
      throw new Error('Failed to upload image.');
  });


  const toReturn: Prediction[] = response.map((value: { prediction: string; location: Location[]; accuracy: number[]; }) => ({
      prediction: value.prediction,
      location: {
        x: value.location[0],
        y: value.location[2],
        width: value.location[1],
        height: value.location[3],
        probability: value.accuracy
      }
    }))
  return {prediction: toReturn};
};

export const uploadImgToCharRecBE = async ( 
  imageFile: File, 
): Promise<PredictionMultiple> => { 
  const formData = new FormData(); 
  formData.append('image', imageFile); 
  const response = await fetch(`${BACKEND_URI}/`, { 
    method: 'POST', 
    body: formData, 
  }).then((output) => output.json()) 
    .catch(() => { 
      throw new Error('Failed to upload image.'); 
  }); 
 
  const toReturn: Prediction[] = response.map((value: { prediction: string; location: Location[]; accuracy: number[]; }) => ({ 
      prediction: value.prediction, 
      location: { 
        x: value.location[0], 
        y: value.location[2], 
        width: value.location[1], 
        height: value.location[3], 
        probability: value.accuracy 
      } 
    })) 
  return {prediction: toReturn}; 
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
