import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { MdPayment, MdOutlineShoppingCart } from "react-icons/md";
import { CiDeliveryTruck, CiLogout } from "react-icons/ci";
import { GoHistory } from "react-icons/go";

const Sidebar = () => {
    return (
        <div className="flex">
            <aside
                id="default-sidebar"
                className="fixed mt-[0.01rem] left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-r-gray-400 "
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <Link to="/dashboardpage" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <RxDashboard className="mr-2 text-base text-gray-600" />
                        DashBoard
                    </Link>
                    <Link to="/personaldetails" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <FaRegUser className="mr-2 text-base text-gray-600" />
                        Personal Details
                    </Link>
                    <Link to="/subscriptionpage" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <MdPayment className="mr-2 text-base text-gray-600" />
                        Subscription
                    </Link>
                    <Link to="/cart" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <MdOutlineShoppingCart className="mr-2 text-base text-gray-600" />
                        Cart
                    </Link>
                    <Link to="/delivery" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <CiDeliveryTruck className="mr-2 text-base text-gray-600" />
                        Delivery
                    </Link>
                    <Link to="/history" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                        <GoHistory className="mr-2 text-base text-gray-600" />
                        History
                    </Link>

                    <div className='mt-20'>
                        <Link to="/logout" className="flex items-center p-2 hover:bg-gray-800 hover:text-gray-50 text-lg">
                            <CiLogout className="mr-2 text-base text-red-900 " />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
