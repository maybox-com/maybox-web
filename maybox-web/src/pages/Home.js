import React from 'react';
import Body from '../components/Body';
import Navbar from '../components/Navbar';
import Plans from '../components/Plans';
import '../index.css'
import '../assets/styles/home.css'

function Home() {
    return ( 
        <main className='main'>
        <Navbar />
        <Body />
        <Plans />
        </main>
     );
}

export default Home;