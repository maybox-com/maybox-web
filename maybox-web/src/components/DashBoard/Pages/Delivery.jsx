import React from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { CiDeliveryTruck} from "react-icons/ci";

const Delivery = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <main className='mt-12'>
        <h3 className='text-2xl font-bold'>Welcome, <span className='text-[#FBA013] font-normal'>David</span></h3>

        <div className='mt-24'>
            <h3 className='text-2xl font-semibold'>Delivery</h3>

            <div class="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded">
            <div><CiDeliveryTruck className='text-[#22D031] text-2xl'/></div>
                <div>ID:</div>
                <div className='-ml-[10rem]'>asfadyweewrwwfrwwfwf</div>
                <div className='-ml-[2rem]'>Date:</div>
                <div className='-ml-[10rem]'>14/01/2023</div>
                <div className='-ml-[9rem]'>to</div>
                <div className='-ml-[10rem]'>20/04/2034</div>
                <div className='ml-44 text-[#FBA013]'>Details</div>
                </div>
                
        </div>
        </main>
      
    </div>
  )
}

export default Delivery;
