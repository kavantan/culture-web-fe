import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Button from '../../Common/Button';
import './index.css';

function ImageUpload({ isOpen, onClose, renderContent, uploadFunction }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [content, setContent] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setContent(null);
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
    } catch (err) {
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
}

ImageUpload.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  uploadFunction: PropTypes.func.isRequired,
};

export default ImageUpload;
