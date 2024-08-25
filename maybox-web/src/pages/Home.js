import React from 'react';
import Body from '../components/Sections/Body';
import Navbar from '../components/Layout/Navbar';
import Plans from '../components/UI/Plans';
import Faq from '../components/UI/Faq';
import '../index.css'
import '../assets/styles/home.css'
import Footer from '../components/Layout/Footer';


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