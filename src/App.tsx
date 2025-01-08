import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Store from './pages/Store';
import Gallery from './pages/Gallery';
import Cafe from './pages/Cafe';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:productId" element={<ProductDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cafe" element={<Cafe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;