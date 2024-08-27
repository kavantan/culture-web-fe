import { useState } from 'react';
import kathakaliImage from 'assets/images/kathakali-stock-images/kathakali1.jpg';
import ImageUpload from 'components/FileUploads/ImageUpload';
import uploadImgToCharRecBE from 'utils/invokeBackend';
import RenderCharacterContent from 'components/ContentRender/RenderCharacterContent';
import Button from 'components/Common/Button';
import './index.css';

function KathakaliPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mb64">
      <div className="font-64 white mb32">Kathakali</div>
      <img className="topImage" src={kathakaliImage} alt="Kathakali" />
      <nav className="flex-center font-20 gap-16 text-only-button">
        <button
          className="white-underline p-16 text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'overview')}
        >
          Overview
        </button>
        <button
          className="white-underline p-16 text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm1')}
        >
          Character Recognition Algorithm
        </button>
        <button
          className="white-underline p-16 text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm2')}
        >
          Expression Recognition Algorithm
        </button>
        <button
          className="white-underline p-16 text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'connect')}
        >
          Connect
        </button>
      </nav>
      <section id="overview" className="mb32">
        <div className="font-64 white mb16">Overview</div>
        <div className="font-32 gray">
          text text text text text text text text text text text text text text
        </div>
      </section>
      <section id="algorithm1" className="mb32">
        <div className="font-64 white mb16">
          Character Recognition Algorithm
        </div>
        <div className="font-32 gray mb16">
          This is an AI algorithm that helps users understand the major types of
          Kathakali characters, namely: Pacha, Kathi, Minukku-Female,
          Chuvanna-Thadi, Vella-Thadi and Kari-Male.
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Upload Image</Button>
        {isModalOpen && (
          <ImageUpload
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            uploadFunction={uploadImgToCharRecBE}
            renderContent={(prediction) => (
              <RenderCharacterContent prediction={prediction} />
            )}
          />
        )}
        <div className="font-32 gray my16">
          The algorithm uses image recognition to identify the characters and
          display the name of the character. Simply upload an image of a
          Kathakali character to see the result.
        </div>
      </section>

      <section id="algorithm2" className="mb32">
        <div className="font-64 white mb16">
          Expression Recognition Algorithm
        </div>
        <div className="font-32 gray mb16">
          text text text text text text text text text text text text text text
        </div>
        <Button>Upload Image</Button>
        <div className="font-32 gray my16">
          text text text text text text text text text text text text text text
        </div>
      </section>
      <section id="connect">
        <div className="font-64 white mb16">Connect</div>
        <div className="font-32 gray">
          text text text text text text text text text text text text text text
        </div>
      </section>
    </div>
  );
}

export default KathakaliPage;
