import React from 'react';
import { useParams } from 'react-router-dom';

const products = {
  1: {
    name: "Urban Shadows T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "100% organic cotton t-shirt featuring our popular Urban Shadows photograph."
  },
  2: {
    name: "City Lights T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01",
    description: "Premium quality t-shirt with our iconic City Lights print."
  },
  3: {
    name: "Autumn Streets Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
    description: "Set of 5 postcards featuring autumn street photography."
  },
  4: {
    name: "Winter Tales Postcard Set",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1418985991508-e47386d96a71",
    description: "Collection of 5 winter themed postcards."
  }
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-light mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price}</p>
          <p className="mb-8">{product.description}</p>
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;