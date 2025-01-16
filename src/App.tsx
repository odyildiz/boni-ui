import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import Cafe from './pages/Cafe';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Cart } from './pages/Cart';
import { Payment } from './pages/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bio" element={<Bio />} />
              <Route path="/store" element={<Store />} />
              <Route path="/store/:productId" element={<ProductDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cafe" element={<Cafe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;