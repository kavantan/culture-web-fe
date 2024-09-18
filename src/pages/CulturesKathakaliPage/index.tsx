import { useState } from 'react';
import kathakaliImage from 'assets/images/kathakali-stock-images/kathakali6.jpg';
import ImageUpload from 'components/FileUploads/ImageUpload';
import {
  uploadImgToCharRecBE,
  uploadImgToExpressionRecBE,
} from 'utils/invokeBackend';
import RenderCharacterContent from 'components/ContentRender/RenderCharacterContent';
import RenderExpressionContent from 'components/ContentRender/RenderExpressionContent';
import Button from 'components/Common/Button';

function KathakaliPage() {
  const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);
  const [isExpressionModalOpen, setIsExpressionModalOpen] = useState(false);

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
      <img
        className="media-responsive-base"
        src={kathakaliImage}
        alt="Kathakali"
      />
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
        {/* <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'connect')}
        >
          Connect
        </button> */}
      </nav>
      <div className="max-width-75">
        <section id="overview" className="mb-large">
          <div className="font-4xlarge white mb-base">Overview</div>
          <div className="font-2xlarge gray">
            Kathakali is a classical dance-drama form from Kerala, India,
            renowned for its vibrant costumes, elaborate makeup, and dramatic
            storytelling. It combines dance, music, and acting to depict stories
            from Hindu epics like the Mahabharata and Ramayana. The performers
            use expressive facial expressions, detailed hand gestures (mudras),
            and precise body movements to convey emotions and narratives.
            Traditionally performed at night, Kathakali is a highly stylised art
            form that emphasizes exaggerated expressions and dramatic elements,
            creating a visually striking and immersive theatrical experience.
          </div>
        </section>
        <section id="algorithm1" className="mb-large">
          <div className="font-4xlarge white mb-base">
            Character Recognition Algorithm
          </div>
          <div className="font-2xlarge gray mb-base">
            This is an AI algorithm that helps users understand the major types
            of Kathakali characters, namely: Pacha, Kathi, Minukku-Female,
            Chuvanna-Thadi, Vella-Thadi and Kari-Male.
          </div>
          <div className="font-2xlarge white mb-base">
            To learn more about this research,{' '}
            <a
              href="https://www.sciencedirect.com/science/article/abs/pii/S2212054823000450"
              target="_blank"
              rel="noopener noreferrer"
              className="red"
            >
              read this
            </a>
            .
          </div>
          <Button onClick={() => setIsCharacterModalOpen(true)}>
            Upload Image
          </Button>
          {isCharacterModalOpen && (
            <ImageUpload
              isOpen={isCharacterModalOpen}
              onClose={() => setIsCharacterModalOpen(false)}
              uploadFunction={uploadImgToCharRecBE}
              renderContent={(prediction, file) => (
                <RenderCharacterContent
                  predictionMultiple={prediction}
                  file={file}
                />
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
            This is an AI algorithm that helps users understand the Navarasasas
            (9 Types of Facial Expressions of Kathakali).
          </div>
          <div className="font-2xlarge gray mb-base">
            These are: Raudra (Anger), Sringara (Love), Bibatsa (Odious), Karuna
            (Pity), Shanta (Peace), Adbhuta (Wonder), Vira (Heroic), Bhayanaka
            (Terrible) and Hasya (Comic).
          </div>
          <div className="font-2xlarge white mb-base">
            This research is accepted for IEEE SPICES 2024, India.
          </div>
          <Button onClick={() => setIsExpressionModalOpen(true)}>
            Upload Image
          </Button>
          {isExpressionModalOpen && (
            <ImageUpload
              isOpen={isExpressionModalOpen}
              onClose={() => setIsExpressionModalOpen(false)}
              uploadFunction={uploadImgToExpressionRecBE}
              renderContent={(prediction, file) => (
                <RenderExpressionContent
                  predictionMultiple={prediction}
                  file={file}
                />
              )}
            />
          )}
          <div className="font-2xlarge gray my-small">
            The algorithm uses image recognition to identify the expressions and
            display the name of the expression. Simply upload an image of a
            Kathakali expression to see the result.
          </div>
        </section>
        {/* <section id="connect">
        <div className="font-4xlarge white mb-base">Connect</div>
        <div className="font-2xlarge gray">
          text text text text text text text text text text text text text text
        </div>
      </section> */}
      </div>
    </div>
  );
}

export default KathakaliPage;
