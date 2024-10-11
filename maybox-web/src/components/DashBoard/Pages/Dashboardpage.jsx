import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import "../../../assets/styles/Dashboard.css";

const Dashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='sm:-ml-[0.62rem]'>
      <Navbar toggleSidebar={toggleSidebar}/>
      <div className="dashboard-layout">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content ">
          <div className="container mx-auto">
            <h1 className='font-semibold text-gray-900'>
              <span className='text-gray-500 font-light'>Dashboard </span>/ Overview
            </h1>
            <h3 className='text-2xl pt-10 pb-3 font-bold'>Welcome, <span className='text-[#FBA013] font-normal'>David!</span></h3>
            <p className='text-sm text-gray-600'>Here is the overview of your business</p>

            <h3 className='font-semibold font-sans tracking-wide pt-10 text-gray-900 text-xl flex justify-between items-center'>
              Personal Information
              <div className='flex items-center text-gray-800 font-normal text-sm border p-2 rounded-xl'>
                <SlCalender className="mr-2 text-base text-gray-900" />
                Oct 7
              </div>
            </h3>
            <div className='flex flex-wrap justify-between pt-10 '>

  <div className='w-full sm:w-1/2 pr-2'>
    <label className='text-gray-800'>Full Name:</label>
    <div
      className="relative flex items-center p-3 mt-2 w-full font-medium text-gray-700 text-sm rounded-xl bg-[#FFF6E7] "
    >
      <FaRegCircleUser className="absolute left-3 text-base text-gray-900" />
      <input type="text" className="bg-[#FFF6E7] pl-10 py-2 w-full rounded-xl border-none focus:outline-none focus:ring-0" placeholder="Full Name"  />
    </div>
  </div>


  <div className='w-full sm:w-1/2 pl-2'>
    <label className='text-gray-700'>Email:</label>
    <div
      className="relative flex items-center p-3 mt-2 w-full font-medium text-gray-700 text-sm rounded-xl bg-[#FFF6E7] "
    >
      <MdAttachEmail className="absolute left-3 text-base text-gray-900" />
      <input type="email" className="bg-[#FFF6E7] pl-10 py-2 w-full rounded-xl border-none focus:outline-none focus:ring-0" placeholder="Email" />
    </div>
  </div>

 
  <div className='w-full mt-5 sm:w-1/2 pr-2'>
    <label className='text-gray-800'>Mobile Number:</label>
    <div
      className="relative flex items-center p-3 mt-2 w-full font-medium text-gray-700 text-sm rounded-xl bg-[#FFF6E7] "
    >
      <FaSquarePhone className="absolute left-3 text-base text-gray-900" />
      <input type="tel" className="bg-[#FFF6E7] pl-10 py-2 w-full rounded-xl border-none focus:outline-none focus:ring-0" placeholder="Mobile Number"  />
    </div>
  </div>

  <div className='w-full pt-5 sm:w-1/2 pl-2 sm:pl-0'>
    <label className='text-gray-700'>Address:</label>
    <div
      className="relative flex items-center p-3 mt-2 w-full font-medium text-gray-700 text-sm rounded-xl bg-[#FFF6E7] "
    >
      <IoLocation className="absolute left-3 text-base text-gray-900" />
      <input type="text" id="address" name="address" autocomplete="street-address" className="bg-[#FFF6E7] pl-10 py-2 w-full rounded-xl border-none focus:outline-none focus:ring-0" placeholder="Address"/>
    </div>
  </div>
</div>




            <div className='mt-16 '>
              <h3 className='text-2xl font-semibold'>Subscription Status</h3>
              <div className="w-3/5 mt-10 border-2 p-5 border-gray-700 rounded-xl ">
                <p className='text-xl text-[#FBA013] font-semibold'>Standard</p>
                <p className="flex font-semibold mt-1" style={{ fontSize: '0.5rem' }}>
                  Active Subscription <GoDotFill className='text-[#22D031]' />
                </p>
                <p className='font-semibold mt-2'>$2,995/m USD</p>
                <p className='text-sm mt-2'>Pause or cancel anytime</p>
              </div>
            </div>

            <div className='mt-24'>
              <h3 className='text-2xl font-semibold'>Delivery Details</h3>
              <div className="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded-md">
                <div><CiDeliveryTruck className='text-[#22D031] text-2xl' /></div>
                <div>ID:</div>
                <div className='text-sm'>asfadyweewrwwfrwwfwf</div>
                <div className='text-sm'>Date:</div>
                <div className='text-sm'>14/01/2023</div>
                <div className='text-sm'>to</div>
                <div className='text-sm'>20/04/2034</div>
              </div>

              <div className="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded-md">
                <div><CiDeliveryTruck className='text-red-500 text-2xl' /></div>
                <div>ID:</div>
                <div className='text-sm'>asfadyweewrwwfrwwfwf</div>
                <div className='text-sm'>Date:</div>
                <div className='text-sm'>14/01/2023</div>
                <div className='text-sm'>to</div>
                <div className='text-sm'>20/04/2034</div>
              </div>
            </div>

            <div className='p-10'></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboardpage;