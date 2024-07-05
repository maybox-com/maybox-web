import React from 'react';
import '../assets/styles/plan.css'
import wellnessImage from '../assets/images/wellness.jpg';
function Plans() {
    return ( 
        <>
       <div className='plan-container flex flex-col justify-center md:flex-row-reverse px-4 md:px-[12em] space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse'>
      <div className='main-container justify-center'>
        <div className='pricing-txt text-center'>
          <h1 className='font-ordinary text-[54px]'>How to get started</h1>
          <span className='font-neueEinstellung text-[24px]'>Select a simple subscription plan to set you up</span>
        </div>
        <div className='price-container flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-8'>
          <div className='price-plans font-neueEinstellung'>
            <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
            <span className='font-bold'>$30/m USD</span>
            <span>Pause and cancel anytime</span>
            <button className='plans-btn'>Subscribe</button>
          </div>
          <div className='price-plans font-neueEinstellung'>
            <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
            <span className='font-bold'>$30/m USD</span>
            <span>Pause and cancel anytime</span>
            <button className='plans-btn'>Subscribe</button>
          </div>
          <div className='price-plans font-neueEinstellung'>
            <h1 className='font-semibold text-2xl text-customRed'>Standard</h1>
            <span className='font-bold'>$30/m USD</span>
            <span>Pause and cancel anytime</span>
            <button className='plans-btn'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default Plans;