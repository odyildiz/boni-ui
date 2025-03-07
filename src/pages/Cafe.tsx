import { useLanguage } from '../context/LanguageContext';
import menuContent from '../content/menu-content.json';

const Cafe = () => {
  const { getLocalizedText, language } = useLanguage();

  function getLocalizedName(name: any) {
    return name[language];
  }

  return (
    <div className="min-h-screen bg-black px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8 text-center font-['Big_Shoulders_Stencil']">{getLocalizedText('cafe.title')}</h1>
      <div>
        <div>
          {Object.entries(menuContent.menuCategories).map(([category, items]) => (
            items.slug != 'extra' ? (
              <div key={category} className="mb-12">
              <h2 className="text-2xl font-light mb-4 text-gray-300 border-l-4 border-gray-400 pl-4">
                {getLocalizedName(items.name)}
              </h2>
              {items.menuItems?.map((item, index) => (
                <div key={index} className="flex justify-between mb-3">
                  <span className="mr-12 flex-1">{getLocalizedName(item.name)}</span>
                  <span className="font-medium text-gray-300">
                    {item.price.price1} {item.price.price2 ? ' / ' + item.price.price2 : ''} ₺
                  </span>
                </div>
              ))}
            </div>)
            : (
              <div className="mb-12">
              <div className="flex flex-wrap gap-x-6 items-center">
                <span className="font-medium text-gray-300 mr-2">{getLocalizedName(items.name)}</span>
                {items.menuItems?.map((item, index) => (
                  <span key={index} className="text-sm">
                    {getLocalizedName(item.name)} 
                    <span className="text-gray-300"> +{item.price.price1}₺</span>
                  </span>
                ))}
              </div>
            </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cafe;