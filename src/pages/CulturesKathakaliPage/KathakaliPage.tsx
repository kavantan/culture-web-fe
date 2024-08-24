import { useState } from 'react';
import kathakaliImage from '../../assets/images/kathakali-stock-images/kathakali1.jpg';
import ImageUpload from '../../components/FileUploads/ImageUpload';
import uploadImgToCharRecBE from '../../utils/invokeBackend';
import RenderCharacterContent from '../../components/ContentRender/RenderCharacterContent';
import Button from '../../components/Common/Button';
import './index.css';

function KathakaliPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="kathakaliPage">
      <h1 className="header">Kathakali</h1>
      <img src={kathakaliImage} alt="Kathakali" className="topImage" />
      <nav className="sectionNav">
        <button type="button" onClick={(e) => handleNavigation(e, 'overview')}>
          Overview
        </button>
        <button
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm1')}
        >
          Character Recognition Algorithm
        </button>
        <button
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm2')}
        >
          Hand Gesture Algorithm
        </button>
        <button type="button" onClick={(e) => handleNavigation(e, 'connect')}>
          Connect
        </button>
      </nav>
      <section id="overview" className="section">
        <h2>Overview</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
      <section id="algorithm1" className="section">
        <h2>Character Recognition Algorithm</h2>
        <p>
          This is an AI algorithm that helps users understand the major types of
          Kathakali characters, namely: Pacha, Kathi, Minukku-Female,
          Chuvanna-Thadi, Vella-Thadi and Kari-Male.
        </p>
        <Button onClick={() => setIsModalOpen(true)}>Upload Image</Button>

        {isModalOpen && (
          <ImageUpload
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            uploadFunction={uploadImgToCharRecBE}
            renderContent={RenderCharacterContent}
          />
        )}
        <p>
          The algorithm uses image recognition to identify the characters and
          display the name of the character. Simply upload an image of a
          Kathakali character to see the result.
        </p>
      </section>

      <section id="algorithm2" className="section">
        <h2>Hand Gesture Algorithm</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
        <Button>Upload</Button>
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
      <section id="connect" className="section">
        <h2>Connect</h2>
        <p>
          text text text text text text text text text text text text text text
        </p>
      </section>
    </div>
  );
}

export default KathakaliPage;
