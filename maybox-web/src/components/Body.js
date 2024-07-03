import React from "react";
import "../assets/styles/body.css"

function Body() {
  return <>
         <main className="main-block-body">
        
<div className="relative flex flex-col items-center justify-center h-screen bg-gray-100 text-black">
  <div className="relative container mx-auto z-10 text-center px-4">
    <h1 className="text-5xl md:text-6xl font-ordinary font-bold">
      Beauty,self-care and wellness that <br />
      <span className="relative inline-block font-ordinary font-bold">
        delivers!
      </span>
    </h1>
    <p className="mt-4 font-neueEinstellung text-lg md:text-xl text-customRed text-center">
      A customizable box of premium beauty, self-care & wellness products<br />
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
         </main>
  </>;
}

export default Body;


