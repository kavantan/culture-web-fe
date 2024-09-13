import kootiyattamImage from 'assets/images/kootiyattam-stock-images/kootiyattam2.jpg';

function KootiyattamPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">Kootiyattam</div>
      <img
        className="media-responsive-base"
        src={kootiyattamImage}
        alt="Kootiyattam"
      />
    </div>
  );
}

export default KootiyattamPage;
