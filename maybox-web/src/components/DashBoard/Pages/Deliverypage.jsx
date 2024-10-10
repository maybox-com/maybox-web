import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { CiDeliveryTruck } from "react-icons/ci";

const Deliverypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className='mt-12 main-content'>
        <h1 className='font-semibold text-gray-900'>
          <span className='text-gray-500 font-light'>Dashboard </span>/ Delivery Details
        </h1>
        <div className='w-full bg-gray-600 h-1 mt-5 rounded-xl'></div>
        <div className='mt-24'>
          <h3 className='text-2xl font-semibold'>Delivery Details</h3>

          {/* Delivery Item 1 */}
          <div className="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded-md">
            <div><CiDeliveryTruck className='text-[#22D031] text-2xl' /></div>
            <div className=''>ID:</div>
            <div className='-ml-[8rem] text-sm'>asfadyweewrwwfrwwfwf</div>
            <div className='-ml-[8rem] text-sm mt-1'>Date:</div>
            <div className='-ml-[8rem] text-sm mt-1'>14/01/2023</div>
            <div className='-ml-[8rem] text-sm mt-1'>to</div>
            <div className='-ml-[8rem] text-sm mt-1'>20/04/2034</div>
            <button onClick={toggleModal} className='ml-44 text-[#FBA013]'>Details</button>
          </div>

          {/* Delivery Item 2 */}
          <div className="flex justify-between mt-8 bg-orange-50 px-3 py-2 rounded-md">
            <div><CiDeliveryTruck className='text-red-500 text-2xl' /></div>
            <div className=''>ID:</div>
            <div className='-ml-[8rem] text-sm'>asfadyweewrwwfrwwfwf</div>
            <div className='-ml-[8rem] text-sm mt-1'>Date:</div>
            <div className='-ml-[8rem] text-sm mt-1'>14/01/2023</div>
            <div className='-ml-[8rem] text-sm mt-1'>to</div>
            <div className='-ml-[8rem] text-sm mt-1'>20/04/2034</div>
            <button onClick={toggleModal} className='ml-44 text-[#FBA013]'>Details</button>
          </div>
        </div>
      </main>

      {/* Delivery Modal */}
      {isModalOpen && (
        <div id="delivery-modal" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Delivery</h3>
                <p className="text-gray-500 mb-4">Here are the details of your delivery.</p>
                <div className="mb-4">
                  <h4 className="font-semibold">Delivery ID:</h4>
                  <p>asfadyweewrwwfrwwfwf</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Delivery Date:</h4>
                  <p>14/01/2023 to 20/04/2034</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Status:</h4>
                  <p>In Transit</p>
                </div>
                {/* Additional delivery details can be added here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deliverypage;