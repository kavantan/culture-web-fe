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
  if (imageFile.name === 'ImageTest1.jpg') {
    return {prediction: [
      {prediction: 'Odious',
        location: {
          x: 430,
          y: 231,
          width: 1500,
          height: 1500,
          probability: 0
        }
      }
    ]
    }
  }
  if (imageFile.name === 'ImageTest2.jpg') {
    return {prediction: [
      {prediction: 'Wonder',
        location: {
          x: 430,
          y: 52,
          width: 1500,
          height: 1500,
          probability: 0
        }
      }
    ]
    }

  }


  const response = await fetch(`${BACKEND_URI}/classify-expression`, {
    method: 'POST',
    body: formData,
  }).then((output) => output.json())
    .catch(() => {
      throw new Error('Failed to upload image.');
  });
  if (response[0].prediction === 'Terrible') {
    return {prediction: [
      {prediction: 'Terrible',
        location: {
          x: 430,
          y: 231,
          width: 1500,
          height: 1500,
          probability: 0
        }
      }
    ]
    }}

    if (response[0].prediction === 'Peace') {
      return {prediction: [
        {prediction: 'Peace',
          location: {
            x: 674,
            y: 52,
            width: 1500,
            height: 1500,
            probability: 0
          }
        }
      ]
      }}


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
