import React from 'react'

import { IoIosNotifications } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex justify-between items-center p-4 w-[145.72%] -ml-[19rem]">
      <svg width="225" height="25" viewBox="0 0 225 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.161 33V0.956388H11.8639L18.5977 25.5696H18.6906L25.3779 0.956388H37.0808V33H29.4646V20.972L29.7897 7.04003H29.6968L22.8702 31.5139H14.3716L7.54496 7.04003H7.45208L7.77716 20.972V33H0.161ZM38.6935 33L49.0961 0.956388H60.6132L71.0622 33H62.1457L60.2881 25.9876H49.4212L47.61 33H38.6935ZM51.1859 19.3466H58.5698L54.9011 5.41463H54.8082L51.1859 19.3466ZM64.1811 0.956388H73.0976L76.9057 10.3373L79.7849 18.2785H79.8778L82.8035 10.3373L86.6116 0.956388H95.5281L84.0574 23.3869V33H75.6053V23.3869L64.1811 0.956388ZM96.9866 0.956388C101.213 0.77063 104.51 0.58487 109.015 0.58487C115.702 0.58487 122.204 1.93163 122.204 8.57255C122.204 11.9162 120.114 14.6098 114.912 16.003V16.0958C120.392 17.0711 123.411 19.8575 123.411 23.8513C123.411 30.7244 117.606 33 107.25 33H96.9866V0.956388ZM105.253 26.8235H108.736C112.544 26.8235 114.959 25.9411 114.959 23.0154C114.959 20.5076 112.962 19.1609 109.061 19.1609H105.253V26.8235ZM105.253 13.8667H109.107C111.755 13.8667 114.123 12.7986 114.123 10.198C114.123 7.87595 112.358 6.76139 108.968 6.76139C107.946 6.76139 106.507 6.80783 105.253 6.90071V13.8667ZM140.985 33.5108C129.793 33.5108 124.638 26.1733 124.638 16.9782C124.638 7.78307 129.793 0.445549 140.985 0.445549C152.223 0.445549 157.378 7.78307 157.378 16.9782C157.378 26.1733 152.223 33.5108 140.985 33.5108ZM133.09 16.9782C133.09 23.0154 136.016 26.7306 140.985 26.7306C145.954 26.7306 148.926 23.0154 148.926 16.9782C148.926 10.941 145.954 7.22579 140.985 7.22579C136.016 7.22579 133.09 10.941 133.09 16.9782ZM154.431 33L163.765 16.6996L154.942 0.956388H164.369L169.292 14.0525L174.168 0.956388H183.595L174.818 16.6996L184.106 33H174.028L169.245 19.3466L163.905 33H154.431ZM195.443 3.37127L195.489 0.956388H207.053L207.006 3.37127H202.641V16.2816H199.901V3.37127H195.443ZM208.446 16.2816V0.956388H212.533L216.619 14.0989L220.706 0.956388H224.793V16.2816H222.146V8.66543L222.192 2.81399H222.146L218.198 15.0277H214.994L211.093 2.81399H211.047L211.093 8.66543V16.2816H208.446Z" fill="#FBA013"/>
</svg>

    <p className="text-white text-center ml-auto mr-4">beauty that delivers, subscribe now!🎉</p>
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
