import { IoIosNotifications } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "/Uc's files/Files/maybox-web-main/maybox-web/maybox-web/src/assets/styles/Dashboard-Nav.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar bg-gray-900 flex justify-between items-center p-4">
      {/* Toggle Button for Mobile View */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <p className="text-white flex-1 text-lg text-center">beauty that delivers, subscribe now! 🎉</p>

      {/* Avatar Icon Section */}
      <div className="relative ml-5">
        <div className="relative w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <span className="top-0 left-4 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
    </div>
  );
};

export default Navbar;