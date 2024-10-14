import React from 'react'

import { IoIosNotifications } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-dark-600 flex justify-between items-center p-4 w-[145.72%] -ml-[19rem]">
     <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="font-playtip self-center text-4xl font-semibold whitespace-nowrap text-[#FBA013]">
        MayBox™
      </span>
    </a>

    <p className="text-white font-neueEinstellung  text-center ml-auto mr-4">Beauty that delivers, subscribe now!🎉</p>
    <div className="text-white flex items-center ml-auto">
      <IoIosNotifications className="text-2xl"/>
      <GoDotFill className="absolute ml-2 mb-4 text-orange-700"/>
      <span className="ml-2">Subscribe</span>
      <FaLocationArrow className="ml-1 text-xs"/>
    </div>
  </div>
  

  )
}

export default Navbar
