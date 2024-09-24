import React from "react";
import "../../assets/styles/body.css";
import HeroSection from "./Hero-section";

function Body() {
  return (
    <>
      <main className="main-block-body">
        <div className="hero flex flex-col items-center justify-center h-screen text-black">
          <div className="relative container mx-auto z-10 text-center px-4">
            <h1 className="text-4xl sm:text-5xl text-center md:text-6xl font-playtip tracking-tight font-bold text-customOrangeDark lg:text-start lg:pl-[4em]">
              Beauty, self-care and wellness that <br />
              <span className="relative inline-block font-bold font-playtip">
                delivers!
              </span>
            </h1>
            <p className="mt-4 font-neueEinstellung sm:text-center md:text-xl text-customOrangeDark text-center lg:text-start lg:pl-[12em]">
              A customizable box of premium beauty, self-care & wellness
              products
              <br className="hidden sm:block" />
              delivered monthly, just for you whenever and however you need it.
            </p>
            <div className="header-btn font-neueEinstellung mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:pl-[15em]">
              <a
                href="#"
                className="px-6 py-3 bg-customOrangeDark text-white hover:bg-customRed transition duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center"
              >
                Build Your Box
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-customOrangeDark text-white hidden sm:block hover:bg-customRed transition duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        <HeroSection />
      </main>
    </>
  );
}

export default Body;
