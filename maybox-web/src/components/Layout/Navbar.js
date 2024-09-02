import { useState } from "react";
import NavList from "./NavList";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav className="fixed w-full border border-gray-300 bg-customWhite z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="font-clash self-center text-[18px] font-semibold whitespace-nowrap text-customOrangeDark">
              MayBox™
            </span>
          </a>
          <div className="flex font-neueEinstellung font md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/signin">
              <button
                type="button"
                className="text-white bg-customOrangeDark focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-customRed transition duration-300"
              >
                Get started
              </button>
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-customRed focus:outline-none focus:ring-2 focus:ring-customOrangeLight dark:text-customOrangeDark dark:hover:bg-customRed dark:focus:ring-customOrangeLight"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-12 h-[9em]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`font-neueEinstellung items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out transform ${isNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-screen md:opacity-100'}`}
            id="navbar-sticky"
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
