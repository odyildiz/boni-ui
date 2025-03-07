import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import { LanguageProvider } from './context/LanguageContext';

// Lazy load pages with default export
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default || module })));
const Cafe = lazy(() => import('./pages/Cafe').then(module => ({ default: module.default || module })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default || module })));
const Bio = lazy(() => import('./pages/Bio').then(module => ({ default: module.default || module })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.default || module })));
const GalleryNude = lazy(() => import('./pages/GalleryNude').then(module => ({ default: module.default || module })));
const Studio = lazy(() => import('./pages/Studio').then(module => ({ default: module.default || module })));

const AppRoutes: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 md:ml-[280px] flex flex-col">
      <Navigation />
      <main className="main-content flex-1">
        <Suspense fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
          </div>
        }>
          <Routes>
            {/* English routes */}
            <Route path="/en" element={<Navigate to="/en/" replace />} />
            <Route path="/en/" element={<Home />} />
            <Route path="/en/cafe" element={<Cafe />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/bio" element={<Bio />} />
            <Route path="/en/gallery" element={<Gallery />} />
            <Route path="/en/nude" element={<GalleryNude />} />
            <Route path="/en/studio" element={<Studio />} />

            {/* Turkish routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/nude" element={<GalleryNude />} />
            <Route path="/studio" element={<Studio />} />

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
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </Router>
  );
};

export default App;