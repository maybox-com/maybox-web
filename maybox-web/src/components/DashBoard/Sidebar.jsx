import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { MdPayment, MdOutlineShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoHistory } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className='bg-gray-50 w-64 p-4 absolute left-0 h-screen '>
        <div className='mt-3'>
        <a href="#" className="flex items-center p-2  hover:bg-gray-900 hover:text-gray-50">
        <FaRegUser className="mr-2" />
        Personal Details
      </a>
      <a href="#" className="flex items-center p-2  hover:bg-gray-900 hover:text-gray-50">
        <MdPayment className="mr-2" />
        Subscription
      </a>
      <a href="#" className="flex items-center p-2  hover:bg-gray-900 hover:text-gray-50">
        <MdOutlineShoppingCart className="mr-2" />
        Cart
      </a>
      <a href="#" className="flex items-center p-2  hover:bg-gray-900 hover:text-gray-50">
        <CiDeliveryTruck className="mr-2" />
        Delivery
      </a>
      <a href="#" className="flex items-center p-2  hover:bg-gray-900 hover:text-gray-50">
        <GoHistory className="mr-2" />
        History
      </a>
        </div>
    
    </div>
  );
}

export default Sidebar;
