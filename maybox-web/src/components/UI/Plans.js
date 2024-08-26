import React from 'react';
import '../../assets/styles/plan.css'
import Steps from './Steps';
import wellnessImage from '../../assets/images/wellness.jpg';
function Plans() {
    return ( 
        <>
         <Steps />
       <div className='plan-container flex flex-col justify-center border-b-2 md:flex-row-reverse px-4 md:px-[12em] space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse'>
      <div className='main-container justify-center my-[5.4em]'>
        <div className='pricing-txt text-center'>
          <h1 className='font-playtip mb-6 text-3xl md:text-[54px] '>How to get started ?</h1>
          <span className='font-neueEinstellung text-[18px] md:text-[24px]'>Select a simple subscription plan to set you up</span>
        </div>
        <div className="price-container flex flex-col justify-center items-center gap-8 mt-8 md:flex-row md:gap-[5em]">
  <div className="price-plans font-neueEinstellung text-center">
    <h1 className="font-semibold text-3xl text-customOrangeDark">Standard</h1>
    <span className="font-bold">$30/m USD</span>
    <span>Pause and cancel anytime</span>
    <button className="plans-btn bg-customOrangeDark mt-4">Subscribe</button>
  </div>
  <div className="price-plans font-neueEinstellung text-center">
    <h1 className="font-semibold text-3xl text-customOrangeDark">Premium</h1>
    <span className="font-bold">$50/m USD</span>
    <span>Pause and cancel anytime</span>
    <button className="plans-btn bg-customOrangeDark mt-4">Subscribe</button>
  </div>
  <div className="price-plans font-neueEinstellung text-center">
    <h1 className="font-semibold text-3xl text-customOrangeDark">Pro</h1>
    <span className="font-bold">$70/m USD</span>
    <span>Pause and cancel anytime</span>
    <button className="plans-btn bg-customOrangeDark mt-4">Subscribe</button>
  </div>
</div>

      </div>
    </div>
        </>
     );
}

export default Plans;