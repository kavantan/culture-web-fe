import CultureCard from 'components/Common/CultureCard';
import cultureData from './content';
import './index.css';

function CulturesPage() {
  return (
    <div className="mb64">
      <div className="font-64 white mb32">Cultures</div>
      <div className="flex-between">
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
