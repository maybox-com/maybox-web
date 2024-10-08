import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import VendorForm from './components/Landing/VendorForm';
import Shop from './pages/Shop';
import Contact from './pages/ContactUs';
import Lost from './pages/404';
import './index.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgottenPassword';
import LandingPage from './components/Landing/LandingPage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='bg-img'>
      <div className="container mx-auto scroll-behavior: smooth;">
        <Analytics />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendors" element={<VendorForm />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword" element={<ForgotPassword />} /> */}
          <Route path="*" element={<Lost />} />
          {/* <Route path="/landing" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
