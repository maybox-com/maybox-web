import React from "react";
import "../assets/styles/body.css";
import HeroSection from "./Hero-section";

function Body() {
  return (
    <>
      <main className="main-block-body">
        <div className="hero relative flex flex-col items-center justify-center h-screen  text-black">
          <div className="relative container mx-auto z-10 text-center px-4">
            <h1 className="text-5xl  text-white md:text-6xl font-ordinary ">
              Beauty,self-care and wellness that <br />
              <span className="relative inline-block font-ordinary">
                delivers!
              </span>
            </h1>
            <p className="mt-4 font-neueEinstellung text-lg md:text-xl text-white text-center">
              A customizable box of premium beauty, self-care & wellness
              products
              <br />
              delivered monthly, just for you whenever and however you need it.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="px-6 py-3 bg-customRed text-white rounded-[10px] hover:bg-customPink transition duration-300"
              >
                Build Your Box
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-customRed text-white rounded-[10px] hover:bg-customPink transition duration-300"
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
