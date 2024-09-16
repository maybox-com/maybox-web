import {React, useEffect, useRef } from "react";
import Smilingwomen from "../../assets/images/women-smiling.png";
import { Player } from '@lordicon/react';

const ICON = require('./assets/lock.json');

export default function Body() {
  return (
    <div className="flex flex-col items-center mt-20 justify-center min-h-screen text-black">
      <div className="div-1 relative container mx-auto  text-center px-4">
        <h1 className="text-4xl sm:text-5xl text-center md:text-6xl font-playtip tracking-tight font-bold text-customOrangeDark lg:text-center">
          Beauty, self-care and wellness that <br />
          <span className="relative inline-block font-bold font-playtip">
            delivers!
          </span>
        </h1>

        <p className="mt-8 font-neueEinstellung sm:text-center md:text-xl text-customOrangeDark text-center">
          A customizable box of premium beauty, self-care & wellness products
          <br className="hidden sm:block" />
          delivered monthly, just for you whenever and however you need it.
        </p>

        <div className="header-btn font-neueEinstellung mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="px-6 py-3 bg-[#FBA013] text-white hover:bg-[#E68A00] transition duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center"
          >
            Build Your Box
          </a>
        </div>
      </div>
      <div className="div-2 mt-8 lg:mt-10 flex justify-center lg:justify-end">
        <img
          src={Smilingwomen} // Make sure to replace with your actual image path
          alt="Beauty products"
          className=""
          width={1000}
        />
      </div>
      <div className="flex flex-col gap-8 items-center text-center mt-8">
        {/* Quote Section */}
        <p className="text-lg font-neueEinstellung text-gray-700">
          "Every Package is Quality tested to the Nth degree"
        </p>

        {/* Stars Section */}
        <div className="flex mb-8 space-x-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              strokeWidth={2}
              width="400"
              height="400"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M97.083 349.999L124.166 232.915L33.333 154.165L153.333 143.749L200 33.332L246.666 143.749L366.666 154.165L275.833 232.915L302.916 349.999L200 287.915L97.083 349.999Z"
                fill="#FBA013"
              />
            </svg>
          ))}
        </div>
      </div>
      <div className="w-full font-neueEinstellung bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-customOrangeDark uppercase text-sm font-playtip tracking-widest font-semibold">
            The Benefits
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Feel balanced.</h2>
          <p className="text-gray-600 mt-4">
            Helping people feel, look, and do good.
          </p>
        </div>

        {/* Images grid or other content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          {/* Replace these with actual images or content */}
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
          <div className="bg-gray-300 h-64"></div>
        </div>
      </div>
    </div>
  );
}
