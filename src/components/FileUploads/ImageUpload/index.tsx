import React, { useState, ChangeEvent } from 'react';
import { Modal } from 'antd';
import Button from 'components/Common/Button';
import { PredictionMultiple } from 'types/interface';
import './index.css';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
  renderContent: (prediction: PredictionMultiple) => JSX.Element;
  uploadFunction: (file: File) => Promise<PredictionMultiple>;
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
  const [content, setContent] = useState<PredictionMultiple | null>(null);

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
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
        <Button
          className="uploadButton"
          onClick={handleUploadImage}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </Button>,
      ]}
    >
      <div className="flex-column align-center justify-center p-large">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="mb-large"
        />
        {error && <div className="red mt-base">{error}</div>}
        {content && renderContent(content)}
      </div>
    </Modal>
  );
};

export default ImageUpload;
