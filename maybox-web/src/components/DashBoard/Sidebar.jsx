import React from 'react';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { CiDeliveryTruck, CiLogout } from "react-icons/ci";
import "../../assets/styles/Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      id="default-sidebar"
      className={`fixed left-0 z-40 w-64 h-screen bg-white transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 border-r-2 border-r-gray-600 rounded-xl`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 pt-5 overflow-y-auto">
        <Link to="/dashboardpage" className="flex items-center border-gray-700 border hover:text-black hover:font-medium rounded-md ite p-2 text-gray-700 text-sm">
          <RxDashboard className="mr-2 text-base text-gray-900" />
          Dashboard
        </Link>
        <div className='pt-2'>
          <Link to="/personaldetails" className="flex items-center border-gray-700 border hover:text-black hover:font-medium text-gray-700 rounded-md ite p-2 text-sm">
            <FaRegUser className="mr-2 text-base text-gray-900" />
            Personal Details
          </Link>
        </div>
        <div className='pt-2'>
          <Link to="/subscriptionpage" className="flex items-center border-gray-700 border hover:text-black hover:font-medium text-gray-700 rounded-md p-2 text-sm">
            <MdPayment className="mr-2 text-base text-gray-900" />
            Subscription
          </Link>
        </div>
        <div className='pt-2'>
          <Link to="/deliverypage" className="flex items-center border-gray-700 border hover:text-black hoer:font-medium text-gray-700 rounded-md p-2 text-sm">
            <CiDeliveryTruck className="mr-2 text-base textgray-900" />
            Delivery
          </Link>
        </div>
        <div className='mt-20'>
          <Link to="/logout" className="flex items-center p-2 hover:border text-gray-900 hover:border-gray-500 hover:rounded-md text-sm">
            <CiLogout className="mr-2 text-base text-gray-900 " />
            Logout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
