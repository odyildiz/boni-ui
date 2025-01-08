import React from 'react';

const menu = {
  drinks: [
    { name: "Espresso", price: 3.50 },
    { name: "Cappuccino", price: 4.50 },
    { name: "Latte", price: 4.50 },
    { name: "Americano", price: 3.50 },
    { name: "Hot Chocolate", price: 4.00 }
  ],
  food: [
    { name: "Croissant", price: 3.50 },
    { name: "Chocolate Muffin", price: 3.50 },
    { name: "Avocado Toast", price: 8.50 },
    { name: "Granola Bowl", price: 7.50 }
  ]
};

const Cafe = () => {
  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Studio Cafe</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Cafe interior"
            className="w-full h-96 object-cover mb-8"
          />
          <p className="text-gray-600">
            Our studio cafe is a peaceful space where art meets coffee. Enjoy carefully crafted beverages
            while surrounded by selected prints from our collection.
          </p>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-light mb-4">Drinks</h2>
            {menu.drinks.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-light mb-4">Food</h2>
            {menu.food.map((item, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cafe;