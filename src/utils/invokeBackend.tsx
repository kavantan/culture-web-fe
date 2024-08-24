import BACKEND_URI from 'configs/env.config';
import { Prediction } from 'types/interface';

const uploadImgToCharRecBE = async (imageFile: File): Promise<Prediction> => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetch(`${BACKEND_URI}`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image.');
  }
  return response.json();
};

export default uploadImgToCharRecBE;
