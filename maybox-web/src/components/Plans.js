import React from 'react';
import '../assets/styles/plan.css'
function Plans() {
    return ( 
        <>
        <div className='main-container'>
            <div className='pricing-txt'>
                <h1 className='font-ordinary text-[24px]'>How to get started</h1>
            <span className='font-neueEinstellung '>Select a simple subscription plan to set you up</span>
            </div>
            <div className='price-container'>
                <div className='price-plans font-neueEinstellung'>
                    <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
                    <span className='font-bold'>$30/m USD</span>
                    <span className='font-thin'>Pause and cancel anytime</span>
                    <button className='font-thin'>Subscribe</button>
                </div>
                <div className='price-plans font-neueEinstellung'>
                    <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
                    <span className='font-bold'>$30/m USD</span>
                    <span className='font-thin'>Pause and cancel anytime</span>
                    <button className='font-thin'>Subscribe</button>
                </div>
                <div className='price-plans font-neueEinstellung'>
                    <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
                    <span className='font-bold'>$30/m USD</span>
                    <span className='font-thin'>Pause and cancel anytime</span>
                    <button className='font-thin'>Subscribe</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default Plans;