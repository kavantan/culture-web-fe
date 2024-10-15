import kootiyattamImage from 'assets/images/kootiyattam-stock-images/kootiyattam2.jpg';

function KootiyattamPage() {
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
      <div className="font-4xlarge white mb-large">Kootiyattam</div>
      <img
        className="media-responsive-base"
        src={kootiyattamImage}
        alt="Kootiyattam"
      />
      <nav className="flex-center font-large gap-base text-only-button">
        <button
          className="white-underline p-base text-only-button"
          type="button"
          onClick={(e) => handleNavigation(e, 'overview')}
        >
          Overview
        </button>
      </nav>
      <div className="max-width-75">
        <section id="overview" className="mb-large">
          <div className="font-4xlarge white mb-base">Overview</div>
          <div className="font-2xlarge gray">
            Kootiyattam is one of the oldest traditional theatre forms in India,
            originating in Kerala. It blends ancient Sanskrit theatre with local
            performing traditions, using highly stylized facial expressions,
            gestures, and elaborate costumes. Kootiyattam performances are
            traditionally conducted in temple theatres and follow an elaborate
            ritual structure, with each performance often spanning multiple
            days. Recognized by UNESCO as a masterpiece of the oral and
            intangible heritage of humanity, it stands as one of the most
            respected art forms with deep roots in Indian history and culture.
          </div>
        </section>
      </div>
    </div>
  );
}

export default KootiyattamPage;
