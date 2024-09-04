import { useState } from 'react';
import kathakaliImage from 'assets/images/kathakali-stock-images/kathakali1.jpg';
import ImageUpload from 'components/FileUploads/ImageUpload';
import uploadImgToCharRecBE from 'utils/invokeBackend';
import RenderCharacterContent from 'components/ContentRender/RenderCharacterContent';
import Button from 'components/Common/Button';

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
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">Kathakali</div>
      <img className="media-responsive" src={kathakaliImage} alt="Kathakali" />
      <nav className="flex-center font-large gap-base text-only-button">
        <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'overview')}
        >
          Overview
        </button>
        <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm1')}
        >
          Character Recognition Algorithm
        </button>
        <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'algorithm2')}
        >
          Expression Recognition Algorithm
        </button>
        <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'connect')}
        >
          Connect
        </button>
      </nav>
      <section id="overview" className="mb-large">
        <div className="font-4xlarge white mb-base">Overview</div>
        <div className="font-2xlarge gray">
          text text text text text text text text text text text text text text
        </div>
      </section>
      <section id="algorithm1" className="mb-large">
        <div className="font-4xlarge white mb-base">
          Character Recognition Algorithm
        </div>
        <div className="font-2xlarge gray mb-base">
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
              <RenderCharacterContent predictionMultiple={prediction} />
            )}
          />
        )}
        <div className="font-2xlarge gray my-small">
          The algorithm uses image recognition to identify the characters and
          display the name of the character. Simply upload an image of a
          Kathakali character to see the result.
        </div>
      </section>

      <section id="algorithm2" className="mb-large">
        <div className="font-4xlarge white mb-base">
          Expression Recognition Algorithm
        </div>
        <div className="font-2xlarge gray mb-base">
          text text text text text text text text text text text text text text
        </div>
        <Button>Upload Image</Button>
        <div className="font-2xlarge gray my-small">
          text text text text text text text text text text text text text text
        </div>
      </section>
      <section id="connect">
        <div className="font-4xlarge white mb-base">Connect</div>
        <div className="font-2xlarge gray">
          text text text text text text text text text text text text text text
        </div>
      </section>
    </div>
  );
}

export default KathakaliPage;
