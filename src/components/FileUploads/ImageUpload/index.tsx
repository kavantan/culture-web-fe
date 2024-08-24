import React, { useState, ChangeEvent } from 'react';
import Button from 'components/Common/Button';
import Modal from '../Modal';
import './index.css';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
  renderContent: (content: any) => JSX.Element;
  uploadFunction: (file: File) => Promise<any>;
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
  const [content, setContent] = useState<any>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setContent(null);
    }
  };

  const handleUploadImage = async () => {
    if (!image) {
      console.error('Please select an image first.');
      return;
    }

    setUploading(true);
    setError('');
    try {
      const output = await uploadFunction(image);
      setContent(output);
    } catch (err: any) {
      console.error('Upload error:', err);
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="imageUploadContainer">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="fileInput"
        />
        <Button
          className="uploadButton"
          onClick={handleUploadImage}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </Button>
        {error && <p className="error">{error}</p>}
        {content && renderContent(content)}
      </div>
    </Modal>
  );
};

export default ImageUpload;
