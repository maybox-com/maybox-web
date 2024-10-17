import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const Personaldetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of new personal details
    console.log({
      newName,
      newEmail,
      newPhone,
      newAddress,
    });
    toggleModal(); // Close modal after submission
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar}/>
      <div>
      <Sidebar isOpen={isSidebarOpen} />
        <main>
        <div className="container lg:-mt-[52rem] md:-mt-[100rem] sm:-mt-[0rem]">
          <h1 className='font-semibold text-gray-900'>
            <span className='text-gray-500 font-light'>Dashboard </span>/ Personal Details
          </h1>
          <div className='w-full bg-gray-600 h-1 mt-5 rounded-xl'></div>
          <h3 className='font-semibold font-sans tracking-wide pt-10 text-gray-900 text-xl'>Personal Information</h3>
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

  <div className='mt-10 text-sm underline flex cursor-pointer' onClick={toggleModal}>
              Update / Edit Personal details
              <FaRegEdit className='ml-1 mt-1' />
            </div>
</div>
        </div>
      </main>
      </div>
      

      {/* Update Personal Details Modal */}
      {isModalOpen && (
        <div id="update-modal" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <button onClick={toggleModal} className="absolute top-3 right-3 text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Update Personal Details</h3>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label className="block text-gray-700">New Name:</label>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#FBA013]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">New Email:</label>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#FBA013]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">New Phone Number:</label>
                    <input
                      type="tel"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#FBA013]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">New Address:</label>
                    <input
                      type="text"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-[#FBA013]"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FBA013] text-white py-2 rounded-md"
                  >
                    Update Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personaldetails;