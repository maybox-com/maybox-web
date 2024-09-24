import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Footer from '../Layout/Footer';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS styles

export default function LandingPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}
