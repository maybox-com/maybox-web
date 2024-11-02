import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { GoDotFill } from "react-icons/go";
import "../../../assets/styles/Subscriptionpage.css";

const Subscriptionpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className='mt-12 main-content'>
        <h1 className='font-semibold text-gray-900'>
          <span className='text-gray-500 font-light'>Dashboard </span>/ Subscription
        </h1>
        <div className='mt-16'>
          <h3 className='text-2xl font-semibold'>Subscription Status</h3>
          <div className="edit1 mt-10 border p-5 border-2 border-gray-700 rounded-xl w-full">
            <p className='text-xl text-[#FBA013] font-semibold'>Standard</p>
            <p className="flex font-semibold mt-1" style={{ fontSize: '0.5rem' }}>
              Active Subscription <GoDotFill className='text-[#22D031]' />
            </p>
            <p className='font-semibold mt-2'>$2,995/m USD</p>
            <p className='text-sm mt-2'>Pause or cancel anytime</p>

            <div className="flex space-x-4 text-gray-100 mt-6">
              <button onClick={toggleModal} className='bg-[#FBA013] px-4 py-2'>Upgrade / Cancel</button>
              <button onClick={toggleDetailsModal} className='bg-[#FBA013] px-4 py-2'>Subscription Details</button>
            </div>
          </div>
        </div>
      </main>

      {/* Upgrade / Cancel Modal */}
      {isModalOpen && (
        <div id="progress-modal" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4">
                <h3 className="mb-1 text-xl font-bold text-gray-900">Manage Your Subscription</h3>
                <p className="text-gray-500 mb-4">Are you sure you want to upgrade or cancel your subscription?</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-normal">Current Plan: Standard</span>
                  <span className="text-sm font-semibold text-gray-900">$2,995/m USD</span>
                </div>
                <div className="flex items-center mt-6 space-x-4">
                  <button type="button" className="text-white bg-orange-500 hover:bg-orange-300 font-medium rounded-lg text-sm px-5 py-2.5">Upgrade to PRO</button>
                  <button onClick={toggleModal} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subscription Details Modal */}
      {isDetailsModalOpen && (
        <div id="timeline-modal" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={toggleDetailsModal} className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Subscription Details</h3>
                <p className="text-green-500 mb-4">Subscription is active with delivery pending.</p>
                <div className="mb-4">
                  <h4 className="font-semibold">Delivery Address:</h4>
                  <p>123 Main St, Anytown, USA</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Expiration Date:</h4>
                  <p>November 30, 2024</p>
                </div>
                <ol className="relative border-l border-gray-200">
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full -left-1.5 border border-white"></div>
                    <h3 className="flex items-start mb-1 text-lg font-semibold text-gray-900">Order Placed</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">August 1, 2024</time>
                  </li>
                  <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full -left-1.5 border border-white"></div>
                    <h3 className="flex items-start mb-1 text-lg font-semibold text-gray-900">In Transit</h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">August 10, 2024</time>
                  </li>
                  <li>
                    <div className="absolute w-3 h-3 bg-gray-100 rounded-full -left-1.5 border border-white"></div>
                    <h3 className="flex items-start mb-1 text-lg ml-4 font-semibold text-gray-900">Delivered</h3>
                    <time className="block mb-2 text-sm ml-4 font-normal leading-none text-gray-500">August 15, 2024</time>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscriptionpage;