import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/ContactUs';
import Lost from './pages/404';
import './index.css';


function App() {
  return (
    <div className='bg-img'>
      <div className="container mx-auto scroll-behavior: smooth;">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
