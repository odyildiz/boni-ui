import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { Shipment } from './pages/Shipment';
import { Payment } from './pages/Payment';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <CartProvider>
          <div className="min-h-screen bg-white">
            <Navigation />
            <main className="main-content">
              <Routes>
                {/* Turkish routes (default) */}
                <Route path="/" element={<Home />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/store" element={<Store />} />
                <Route path="/store/:productId" element={<ProductDetail />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/cafe" element={<Cafe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shipment" element={<Shipment />} />
                <Route path="/payment" element={<Payment />} />

                {/* English routes */}
                <Route path="/en" element={<Home />} />
                <Route path="/en/bio" element={<Bio />} />
                <Route path="/en/store" element={<Store />} />
                <Route path="/en/store/:productId" element={<ProductDetail />} />
                <Route path="/en/gallery" element={<Gallery />} />
                <Route path="/en/cafe" element={<Cafe />} />
                <Route path="/en/contact" element={<Contact />} />
                <Route path="/en/cart" element={<Cart />} />
                <Route path="/en/shipment" element={<Shipment />} />
                <Route path="/en/payment" element={<Payment />} />

                {/* Catch all redirect */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </CartProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;