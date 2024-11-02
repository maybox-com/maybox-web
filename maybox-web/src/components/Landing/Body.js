import React, { useRef } from "react";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import LordIcon from "./LordIcon";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Tag from "../../assets/images/TAG.svg";
import Check from "../../assets/images/CALENDER.svg";
import Hand from "../../assets/images/HAND.svg";
import Guarantee from "./Guarantee";
import WaitlistForm from "./Waitlist";
import Steps from "../UI/Steps";
import "../../assets/styles/landing-page.css";
import Feel from "../../assets/images/feel.jpg";
import Look from "../../assets/images/look.jpg";
import Do from "../../assets/images/do.jpg";


import Faq from "../UI/Faq";

export default function Body() {
  const joinUsRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToJoinUs = () => {
    joinUsRef.current.scrollIntoView({ behavior: "smooth" });

  };

  return (
    <div
      className="flex flex-col items-center mt-20 justify-center min-h-screen text-black"
      data-aos="fade-up"
    >
      <div className="div-1  relative container hero-box mx-auto text-center px-4 pt-10 pb-20">
        <p className="text-sm sm:text-sm pb-2 pt-40">Get started in a few simple steps <span className="span">Quickstart Guide ↗</span></p>
        <h1 className="text-base leading-loose hero-box sm:text-3xl text-center md:text-5xl  tracking-tight font-bold text-customOrangeDark lg:text-center">
        The new way to shop beauty, <br></br> wellness & selfcare products
        </h1>

        <div className="header-btn font-neueEinstellung mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={scrollToJoinUs}
            className="px-6 py-3 bg-white text-customOrangeDark  hover:bg-[#E68A00] transition rounded-xl duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center border border-darkgray"
          >
            Join the waitlist →
          </button>
        </div>
      </div>


     
        <h1 className="text-base pt-20 pb-4 leading-loose hero-box sm:text-3xl text-center md:text-3xl  tracking-tight font-semibold text-customOrangeDark lg:text-center">
       Meet Maybox.
        </h1>
        <p className="pb-20">Pratical steps to help you get started.</p>

        <Steps />
      {/* Image Grid Section with Icons */}
      <div className="w-full font-neueEinstellung mt-8 mb-8 bg-[#FCF8F2] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm tracking-widest font-semibold">
            The Benefits
          </p>
          <h2 className="text-3xl font-meduim text-black">Feel balanced.</h2>
          <p className="text-gray-600 mt-2 font-poppins pb-5">
          Helping people feel, look and do good.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div className="flex flex-col items-center">
            <img
              src={Feel}
              alt="Feel"
              width={350}
              height={100}  
              className="border rounded-md"
            />
            <div className="bg-white p-3 rounded-full border w-16 h-16 flex items-center justify-center -mt-8 relative z-10">
              <LordIcon src="https://cdn.lordicon.com/jjoolpwc.json" />
            </div>
            <h3 className="text-xl font-base mt-4 text-black">FEEL</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help you <span className="font-base italic">feel<br></br></span> glamorous
              and beautiful.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Look}
              alt="Look"
              width={350}
              height={100}
              className="border rounded-md"
            />
            <div className="bg-white p-3 rounded-full border w-16 h-16 flex items-center justify-center -mt-8 relative z-10">
              <LordIcon src="https://cdn.lordicon.com/zpwnkfbk.json" />
            </div>
            <h3 className="text-xl font-base mt-4 text-black">LOOK</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help you <span className="italic">look <br></br></span> bold with
              a natural glow.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Do}
              alt="Do"
              width={350}
              height={100}
              className="border rounded-md"
            />
            <div className="bg-white p-3 rounded-full border w-16 h-16 flex items-center justify-center -mt-8 relative z-10">
              <LordIcon src="https://cdn.lordicon.com/jyrzvbtn.json" />
            </div>
            <h3 className="text-xl font-base mt-4 text-black">DO</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help inspire you to <span className="font-base italic">do<br></br></span>{" "}
              good work.
            </p>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 mb-8 md:grid-cols-3 gap-8 px-4 md:px-16">
  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/3736281/pexels-photo-3736281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
      alt="Feel"
      width={300}  
      height={250} 
      className="border-2 border-black mb-4"
    />
    <LordIcon
      src="https://cdn.lordicon.com/jjoolpwc.json"
      className="w-20 h-20"
    />
    <h3 className="text-xl font-bold mt-4 text-black">FEEL</h3>
    <p className="text-gray-600 mt-2 text-center">
      Let us help you <span className="font-bold">feel</span> glamorous and beautiful.
    </p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/15829509/pexels-photo-15829509/free-photo-of-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Look"
      width={300} 
      height={250}
      className="border-2 border-black mb-4"
    />
    <LordIcon
      src="https://cdn.lordicon.com/zpwnkfbk.json"
      className="w-20 h-20"
    />
    <h3 className="text-xl font-bold mt-4 text-black">LOOK</h3>
    <p className="text-gray-600 mt-2 text-center">
      Let us help you <span className="font-bold">look</span> bold with a natural glow.
    </p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src="https://images.pexels.com/photos/6978068/pexels-photo-6978068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Care"
      width={300}  
      height={250}
      className="border-2 border-black mb-4"
    />
    <DotLottieReact
      src="https://lottie.host/0e8ba1a7-5d0b-4466-ab55-31354f50cd28/VkfZ1p75qC.json"
      className="w-20 h-20"
      loop
      autoplay
    />
    <h3 className="text-xl font-bold mt-4 text-black">CARE</h3>
    <p className="text-gray-600 mt-2 text-center">
      Let us help you care for <span className="font-bold">yourself</span> every day.
    </p>
  </div>
</div>



      

      <div className="w-full mt-[8em] font-neueEinstellung bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm  tracking-widest font-semibold">
            MEMBERSHIP PERKS
          </p>
          <h2 className="text-3xl font-medium text-black">
            Glow better, stress less.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
          <div className="flex flex-col items-center">
            <img
              src={Check}
              alt="Timing"
              className="mb-3"
              width={60}
              height={60}
            />
            <p className="text-black mt-1 text-xl text-center font-medium">
              Perfectly timed to your routine.
            </p>
            <span className="text-center text-gray-600 text-sm">
              Get your self-care essentials delivered exactly when you need them.
            </span>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Tag}
              alt="Savings"
              className="mb-3"
              width={60}
              height={60}
            />
            <p className="text-black mt-1 text-xl text-center font-medium">
              Save more on self-care
            </p>
            <span className="text-center text-gray-600 text-sm">
              Taking care of yourself shouldn't break the bank.
            </span>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Hand}
              alt="Control"
              className="mb-3"
              width={60}
              height={60}
            />
            <p className="text-black mt-1 text-xl text-center font-medium">
              You're in control
            </p>
            <span className="text-center text-gray-600 text-sm">
              Pause, skip, or cancel anytime. It's self-care on your terms.
            </span>
          </div>
        </div>
      </div>

      <Faq id="faq" ref={faqRef} />
      <div id="guarantee">
        <Guarantee />
      </div>

      <div id="joinus" ref={joinUsRef}>
        <WaitlistForm />
      </div>
    </div>
  );
}
