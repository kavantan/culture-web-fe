import React, { useState, ChangeEvent } from 'react';
import Button from 'components/Common/Button';
import { Prediction } from 'types/interface';
import Modal from '../Modal';
import './index.css';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
  renderContent: (prediction: Prediction) => JSX.Element;
  uploadFunction: (file: File) => Promise<Prediction>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  isOpen,
  onClose,
  renderContent,
  uploadFunction,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [content, setContent] = useState<Prediction | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setContent(null);
    }
  };

  const handleUploadImage = async () => {
    if (!image) {
      setError('Please select an image first.');
      return;
    }

    setUploading(true);
    setError('');
    try {
      const prediction = await uploadFunction(image);
      setContent(prediction);
    } catch (err: unknown) {
      if (err instanceof Error) {
        // TODO: Show error message
        setError(err.message);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex-column align-center justify-center p-32">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="mb32"
        />
        <Button
          className="uploadButton"
          onClick={handleUploadImage}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </Button>
        {error && <div className="red mt16">{error}</div>}
        {content && renderContent(content)}
      </div>
    </Modal>
  );
};

export default ImageUpload;
