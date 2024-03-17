import { useState } from 'react';

function ImageUploadAndDisplay() {
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
      const response = await fetch('http://localhost:3001/kathakali/', {
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
    <>
      <div>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button type="button" onClick={handleUploadImage} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>
      <div>
        {error && <p>Error: {error}</p>}
        {output && (
          <div>
            <h3>Result:</h3>
            <p>{output}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ImageUploadAndDisplay;
