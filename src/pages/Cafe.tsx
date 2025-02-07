import { useLanguage } from '../context/LanguageContext';

const menu = {
  coffee: [
    { nameKey: 'cafe.menu.items.single-espresso', price: 80.00 },
    { nameKey: 'cafe.menu.items.double-espresso', price: 90.00 },
    { nameKey: 'cafe.menu.items.lungo', price: 80.00 },
    { nameKey: 'cafe.menu.items.americano', price: 100.00 },
    { nameKey: 'cafe.menu.items.caramel-latte', price: 130.00 },
    { nameKey: 'cafe.menu.items.vanilla-latte', price: 130.00 },
    { nameKey: 'cafe.menu.items.latte', price: 120.00 },
    { nameKey: 'cafe.menu.items.cappuccino', price: 120.00 },
    { nameKey: 'cafe.menu.items.flat-white', price: 120.00 },
    { nameKey: 'cafe.menu.items.cortado', price: 115.00 },
    { nameKey: 'cafe.menu.items.cafe-miel', price: 140.00 },
    { nameKey: 'cafe.menu.items.mocha', price: 130.00 },
    { nameKey: 'cafe.menu.items.white-chocolate-mocha', price: 130.00 },
    { nameKey: 'cafe.menu.items.filter-coffee', price: 100.00 },
    { nameKey: 'cafe.menu.items.turkish-coffee', price: 75.00 }
  ],
  coldcoffee: [
    { nameKey: 'cafe.menu.items.iced-americano', price: 120.00 },
    { nameKey: 'cafe.menu.items.iced-latte', price: 130.00 },
    { nameKey: 'cafe.menu.items.iced-flat-white', price: 130.00 },
    { nameKey: 'cafe.menu.items.iced-mocha', price: 135.00 },
    { nameKey: 'cafe.menu.items.iced-white-chocolate-mocha', price: 135.00 },
    { nameKey: 'cafe.menu.items.affogato', price: 140.00 }
  ],
  drinks: [
    { nameKey: 'cafe.menu.items.honey-milk', price: 100.00 },
    { nameKey: 'cafe.menu.items.salep', price: 125.00 },
    { nameKey: 'cafe.menu.items.hot-chocolate', price: 130.00 },
    { nameKey: 'cafe.menu.items.tea', price: 30.00 },
    { nameKey: 'cafe.menu.items.cup-tea', price: 50.00 },
    { nameKey: 'cafe.menu.items.herbal-tea', price: 110.00 }
  ],
  colddrinks: [
    { nameKey: 'cafe.menu.items.mineral-water', price: 50.00 },
    { nameKey: 'cafe.menu.items.churchill', price: 80.00 },
    { nameKey: 'cafe.menu.items.fizzy-drink', price: 80.00 },
    { nameKey: 'cafe.menu.items.cold-chocolate', price: 135.00 },
    { nameKey: 'cafe.menu.items.orange-juice', price: 120.00 },
    { nameKey: 'cafe.menu.items.water', price: 30.00 }
  ],
  snacks: [
    { nameKey: 'cafe.menu.items.boni-toast', price: 190.00 },
    { nameKey: 'cafe.menu.items.white-tomato-toast', price: 190.00 },
    { nameKey: 'cafe.menu.items.kashar-toast', price: 170.00 }
  ],
  desserts: [
    { nameKey: 'cafe.menu.items.brownie', price: 190.00 },
    { nameKey: 'cafe.menu.items.chocolate-cookie', price: 80.00 }
  ]
};

const Cafe = () => {
  const { getLocalizedText } = useLanguage();

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">{getLocalizedText('cafe.title')}</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe interior"
            className="w-full h-96 object-cover mb-8"
          />
          <p className="text-gray-600">
            {getLocalizedText('cafe.description')}
          </p>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4"><b>{getLocalizedText('cafe.menu.coffee')}</b></h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.coldcoffee')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.drinks')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.colddrinks')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{item.price}₺</span>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">{getLocalizedText('cafe.menu.snacks')}</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{getLocalizedText(item.nameKey)}</span>
                <span>{item.price}₺</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;