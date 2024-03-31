import { useState } from 'react';
import PropTypes from 'prop-types';
import BACKEND_URI from '../../configs/env.config';
import Modal from '../Modal';
import charactersData from '../../assets/data/characters.json';
import styles from './ImageUploadAndDisplay.module.css';

function ImageUploadAndDisplay({ isOpen, onClose }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setCharacterInfo(null);
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
      const character = charactersData.find(
        (char) => char.name.toLowerCase() === result?.prediction.toLowerCase(),
      );
      setCharacterInfo(character);
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
        {characterInfo && (
          <div className={styles.output}>
            <h3>{characterInfo.name}</h3>
            <p>{characterInfo.description}</p>
            <button
              type="button"
              className={styles.findOutMoreButton}
              onClick={() => window.open(characterInfo.url, '_blank')}
            >
              Find Out More
            </button>
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
