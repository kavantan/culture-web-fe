import { useState } from 'react';
import PropTypes from 'prop-types';
import BACKEND_URI from '../../configs/env.config';
import Modal from '../Modal';
import styles from './ImageUploadAndDisplay.module.css';

function ImageUploadAndDisplay({ isOpen, onClose }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUploadImage = async () => {
    if (!image) {
      console.log('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    setUploading(true);
    setError('');
    try {
      const response = await fetch(`${BACKEND_URI}/kathakali/`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image.');
      }

      const result = await response.json();
      setOutput(result?.prediction);
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.imageUploadContainer}>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className={styles.fileInput}
        />
        <button
          type="button"
          className={styles.uploadButton}
          onClick={handleUploadImage}
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {output && (
          <div className={styles.output}>
            <h3>Result:</h3>
            <p>{output}</p>
          </div>
        )}
      </div>
    </Modal>
  );
}

ImageUploadAndDisplay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageUploadAndDisplay;
