import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Urban Shadows T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    name: "City Lights T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01"
  },
  {
    id: 3,
    name: "Autumn Streets Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6"
  },
  {
    id: 4,
    name: "Winter Tales Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71"
  }
];

const Store = () => {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light mb-8">Store</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link to={`/store/${product.id}`} key={product.id} className="group">
            <div className="bg-gray-100 aspect-square mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
              />
            </div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Store;