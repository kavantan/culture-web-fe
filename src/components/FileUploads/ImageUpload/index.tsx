import React, { useState } from 'react';
import { Modal, Upload, Spin } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';
import { PredictionMultiple } from 'types/interface';
import './index.css';

interface ImageUploadProps {
  isOpen: boolean;
  onClose: () => void;
  renderContent: (prediction: PredictionMultiple, file: File) => JSX.Element;
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
      <div className="align-center justify-center p-large">
        <ImgCrop rotationSlider>
          <Upload
            className="gray"
            listType="text"
            beforeUpload={beforeUpload}
            onRemove={onRemove}
            multiple={false}
            maxCount={1}
            accept="image/*"
          >
            <Button disabled={!!image}>
              <UploadOutlined /> <span>Select Image</span>
            </Button>
          </Upload>
        </ImgCrop>
        {error && <div className="red mt-base">{error}</div>}
        {uploading ? (
          <Spin indicator={<LoadingOutlined spin />} />
        ) : (
          content && image && renderContent(content, image)
        )}
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
