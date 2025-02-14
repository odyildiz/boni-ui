import { useLanguage } from '../context/LanguageContext';

const menu = {
  coffee: JSON.parse(import.meta.env.VITE_MENU_COFFEE),
  coldcoffee: JSON.parse(import.meta.env.VITE_MENU_COLDCOFFEE),
  extra: JSON.parse(import.meta.env.VITE_MENU_EXTRA),
  drinks: JSON.parse(import.meta.env.VITE_MENU_DRINKS),
  colddrinks: JSON.parse(import.meta.env.VITE_MENU_COLDDRINKS),
  snacks: JSON.parse(import.meta.env.VITE_MENU_SNACKS),
  desserts: JSON.parse(import.meta.env.VITE_MENU_DESSERTS)
};

const Cafe = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8 text-center">{getLocalizedText('cafe.title')}</h1>
      <div>
        <div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.coffee')}</h2>
            {menu.coffee.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price} {item.price2 ? ' / ' + item.price2 : ''} ₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.coldcoffee')}</h2>
            {menu.coldcoffee.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.drinks')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price} {item.price2 ? ' / ' + item.price2 : ''} ₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.colddrinks')}</h2>
            {menu.colddrinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.snacks')}</h2>
            {menu.snacks.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-4 text-[#8B7355] border-l-4 border-[#C8B6A6] pl-4">{getLocalizedText('cafe.menu.desserts')}</h2>
            {menu.desserts.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span className="mr-12 flex-1">{getLocalizedText(item.nameKey)}</span>
                <span className="font-medium text-[#8B7355]">{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <div className="flex flex-wrap gap-x-6 items-center">
              <span className="font-medium text-[#8B7355] mr-2">Extra:</span>
              {menu.extra.map((item, index) => (
                <span key={index} className="text-sm">
                  {getLocalizedText(item.nameKey)} 
                  <span className="text-[#8B7355]"> +{item.price}₺</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;