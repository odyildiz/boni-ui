import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

// Lazy load pages with default export
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default || module })));
const Cafe = lazy(() => import('./pages/Cafe').then(module => ({ default: module.default || module })));
const Store = lazy(() => import('./pages/Store').then(module => ({ default: module.default || module })));
const Cart = lazy(() => import('./pages/Cart').then(module => ({ default: module.default || module })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default || module })));
const Bio = lazy(() => import('./pages/Bio').then(module => ({ default: module.default || module })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(module => ({ default: module.default || module })));
const Payment = lazy(() => import('./pages/Payment').then(module => ({ default: module.default || module })));
const Shipment = lazy(() => import('./pages/Shipment').then(module => ({ default: module.default || module })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.default || module })));

const AppRoutes: React.FC = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="main-content">
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        }>
          <Routes>
            {/* English routes */}
            <Route path="/en" element={<Navigate to="/en/" replace />} />
            <Route path="/en/" element={<Home />} />
            <Route path="/en/cafe" element={<Cafe />} />
            <Route path="/en/store" element={<Store />} />
            <Route path="/en/store/:id" element={<ProductDetail />} />
            <Route path="/en/cart" element={<Cart />} />
            <Route path="/en/payment" element={<Payment />} />
            <Route path="/en/shipment" element={<Shipment />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/bio" element={<Bio />} />
            <Route path="/en/gallery" element={<Gallery />} />

            {/* Turkish routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Redirect root to default language */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <OrderProvider>
          <LanguageProvider>
            <AppRoutes />
          </LanguageProvider>
        </OrderProvider>
      </CartProvider>
    </Router>
  );
};

export default App;