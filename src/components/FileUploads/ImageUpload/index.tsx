import React, { useState } from 'react';
import { Modal, Upload, Spin } from 'antd';
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import Button from 'components/Common/Button';
import { PredictionMultiple } from 'types/interface';
import type { UploadFile } from 'antd';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const beforeUpload = (file: File): boolean => {
    setImage(file);
    setIsUploaded(false);
    setFileList([
      {
        uid: '-1',
        name: file.name,
        status: 'done',
        thumbUrl: URL.createObjectURL(file),
      },
    ]);
    return false;
  };

  const onRemove = () => {
    setImage(null);
    setIsUploaded(false);
    setContent(null);
    setFileList([]);
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

      setFileList((prevList) =>
        prevList.map((file) => ({
          ...file,
          status: 'done',
          thumbUrl: URL.createObjectURL(image),
        })),
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        setFileList((prevList) =>
          prevList.map((file) => ({
            ...file,
            status: 'error',
          })),
        );
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
      <Upload
          className="gray"
          name="image"
          listType="picture"
          beforeUpload={beforeUpload}
          onRemove={onRemove}
          multiple={false}
          showUploadList
          accept="image/*"
        >
          <Button disabled={!!image}>
            <UploadOutlined /> <span>Select Image</span>
          </Button>
        </Upload>
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
