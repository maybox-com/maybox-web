import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { GoDotFill } from "react-icons/go";

const Subscriptionpage = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <main className='mt-12'>
      <h3 className='text-2xl font-bold'>Welcome, <span className='text-[#FBA013] font-normal'>David</span></h3>

      <div className='mt-16'>
      <h3 className='text-2xl font-semibold'>Subscription Status</h3>
      <div className='mt-10'>
        <p className='text-xl text-[#FBA013] font-semibold'>Standard</p>
        <p className="flex font-semibold mt-1" style={{ fontSize: '0.5rem' }}>
  Active Subscription <GoDotFill className='text-[#22D031]'/> </p>
  <p className='font-semibold mt-2'>$2,995/m USD</p>
  <p className='text-sm mt-2'>Pause or cancel anytime</p>

  <div className="flex space-x-4 text-gray-100 mt-6">
    <button className='bg-[#FBA013] px-4 py-2'>Upgrade / Cancel</button>
    <button className='bg-[#FBA013] px-4 py-2'>Subscription Details</button>
</div>

      </div>
      </div>
      </main>
    </div>
  )
}

export default Subscriptionpage
