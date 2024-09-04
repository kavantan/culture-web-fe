import React, { useState } from 'react';
import { Modal, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
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
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState('');
  const [content, setContent] = useState<PredictionMultiple | null>(null);

  const beforeUpload = (file: File): boolean => {
    setImage(file);
    setIsUploaded(false);
    // setContent(null);
    return false;
  };

  const onRemove = () => {
    setImage(null);
    setIsUploaded(false);
    setContent(null);
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
      setIsUploaded(true);
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
      className="text-center"
      styles={{
        content: { backgroundColor: '#2b2d38' },
      }}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <div className="flex-column align-center justify-center p-large">
        <Upload
          className="gray"
          name="image"
          listType="picture"
          beforeUpload={beforeUpload}
          onRemove={onRemove}
          multiple={false}
          showUploadList={true}
          accept="image/*"
        >
          <Button>
            <UploadOutlined /> <span>Select Image</span>
          </Button>
        </Upload>
        {error && <div className="red mt-base">{error}</div>}
        {content && renderContent(content)}
        {!isUploaded && (
          <Button
            className="mt-base"
            onClick={handleUploadImage}
            disabled={uploading || !image}
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default ImageUpload;
