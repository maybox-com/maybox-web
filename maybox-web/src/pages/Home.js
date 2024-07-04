import React from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Plans from '../components/Plans';
import Faq from '../components/Faq';
import '../index.css'
import '../assets/styles/home.css'
import Footer from '../components/Footer';

function Home() {
    return ( 
        <main className='main'>
        <Navbar />
        <Body />
        <Plans />
        <Faq />
        <Footer />
        </main>
     );
}

export default Home;