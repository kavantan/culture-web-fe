import CultureCard from 'components/Common/CultureCard';
import cultureData from './content';

function CulturesPage() {
  return (
    <div className="mb-xlarge">
      <div className="font-4xlarge white mb-large">Cultures</div>
      <div className="flex-center-responsive gap-xlarge">
        {cultureData.map((culture) => (
          <CultureCard
            key={culture.name}
            name={culture.name}
            url={culture.url}
            imageUrl={culture.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default CulturesPage;
