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
import "/Uc's files/Files/maybox-web-main/maybox-web/maybox-web/src/assets/styles/Dashboard.css";

const Dashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="dashboard-layout">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <div className="container">
            <h1 className='font-semibold text-gray-900'>
              <span className='text-gray-500 font-light'>Dashboard </span>/ Overview
            </h1>
            <h3 className='text-2xl pt-10 pb-3 font-bold'>Welcome, <span className='text-[#FBA013] font-normal'>David!</span></h3>
            <p className='text-sm text-gray-600'>Here is the overview of your business</p>

            <h3 className='font-semibold font-sans tracking-wide pt-10 text-gray-900 text-xl flex justify-between items-center'>
              Personal Information
              <div className='width flex text-gray-800 font-normal text-sm border p-2 mr-20 rounded-xl'>
                <SlCalender className="mr-2 text-base text-gray-900" />
                Oct 7
              </div>
            </h3>

            <div className='flex flex-wrap justify-between pt-10'>
              <div className='w-full sm:w-1/2 pr-2'>
                <label className='text-gray-800'>Full Name:</label>
                <div style={{ backgroundColor: '#FFF6E7' }} className="flex items-center p-3 mt-2 edit bg-FFA212 w-96 font-medium text-gray-700 text-sm rounded-xl">
                  <FaRegCircleUser className="mr-2 mb-1 text-base text-gray-900" />
                  Nwamadi David Zamani
                </div>
              </div>
              <div className='w-full sm:w-1/2 pl-2'>
                <label className='text-gray-700'>Email:</label>
                <div style={{ backgroundColor: '#FFF6E7' }} className="flex p-3 mt-2 edit bg-FFA212 w-96 font-medium text-gray-700 text-sm rounded-xl">
                  <MdAttachEmail className="mr-2 pt-1 text-base text-gray-900" />
                  zamaninwamadidavid@gmail.com
                </div>
              </div>
              <div className='w-full mt-5 sm:w-1/2 pr-2'>
                <label className='text-gray-800'>Mobile Number:</label>
                <div style={{ backgroundColor: '#FFF6E7' }} className="flex p-3 mt-2 edit bg-FFA212 w-96 font-medium text-gray-700 text-sm rounded-xl">
                  <FaSquarePhone className="mr-2 pt-1 text-base text-gray-900" />
                  +234 506 507 8902
                </div>
              </div>
              <div className='w-full pt-5 sm:w-1/2 pl-2'>
                <label className='text-gray-700'>Address:</label>
                <div style={{ backgroundColor: '#FFF6E7' }} className="flex p-3 mt-2 edit bg-FFA212 w-96 font-medium text-gray-700 text-sm rounded-xl">
                  <IoLocation className="mr-2 pt-1 text-base text-gray-900" />
                  123 Street Name, City, Country
                </div>
              </div>
            </div>

            <div className='mt-16'>
              <h3 className='text-2xl font-semibold'>Subscription Status</h3>
              <div className="edit1 mt-10 border p-5 border-2 border-gray-700 rounded-xl w-full">
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
                <div className='-ml-[8rem] mt-1 text-sm'>asfadyweewrwwfrwwfwf</div>
                <div className='-ml-[8rem] text-sm mt-1'>Date:</div>
                <div className='-ml-[8rem] text-sm mt-1'>14/01/2023</div>
                <div className='-ml-[8rem] text-sm mt-1'>to</div>
                <div className='-ml-[8rem] text-sm mt-1'>20/04/2034</div>
              </div>

              <div className="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded-md">
                <div><CiDeliveryTruck className='text-red-500 text-2xl' /></div>
                <div>ID:</div>
                <div className='-ml-[8rem] mt-1 text-sm'>asfadyweewrwwfrwwfwf</div>
                <div className='-ml-[8rem] text-sm mt-1'>Date:</div>
                <div className='-ml-[8rem] text-sm mt-1'>14/01/2023</div>
                <div className='-ml-[8rem] text-sm mt-1'>to</div>
                <div className='-ml-[8rem] text-sm mt-1'>20/04/2034</div>
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