import React from "react";
import { Player } from "@lordicon/react";
import LordIcon from "./LordIcon";
import Tag from "../../assets/images/tag-1.png";
import Check from "../../assets/images/check-mark.png";
import Hand from "../../assets/images/hand-up.png";
import Guarantee from "./Guarantee";
import WaitlistForm from "./Waitlist";

export default function Body() {
  return (
    <div className="flex flex-col items-center mt-20 justify-center min-h-screen text-black" data-aos="fade-up">
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

      {/* Image Grid Section with Icons */}
      <div className="w-full font-neueEinstellung mt-8 bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm font-playtip tracking-widest font-semibold">
            The Benefits
          </p>
          <h2 className="text-3xl font-bold text-gray-800">Feel balanced.</h2>
          <p className="text-gray-600 mt-4">
            Helping people feel, look, and do good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/15829509/pexels-photo-15829509/free-photo-of-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Feel"
              width={350}
              height={300}
              className=" mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/jjoolpwc.json" />
            <h3 className="text-xl font-bold mt-4">FEEL</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help you <span className="font-bold">feel</span> glamorous
              and beautiful.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/15829509/pexels-photo-15829509/free-photo-of-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Look"
              width={350}
              height={300}
              className=" mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/zpwnkfbk.json" />
            <h3 className="text-xl font-bold mt-4">LOOK</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help you <span className="font-bold">look</span> bold with
              a natural glow.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/15829509/pexels-photo-15829509/free-photo-of-portrait-of-a-woman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Do"
              width={350}
              height={300}
              className=" mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/jyrzvbtn.json" />
            <h3 className="text-xl font-bold mt-4">DO</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help inspire you to <span className="font-bold">do</span>{" "}
              good work.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-[8em] font-neueEinstellung bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm font-playtip tracking-widest font-semibold">
            MEMBERSHIP PERKS
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Feeling better, made easier.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div className="flex flex-col items-center">
            <img
              src={Check}
              alt="Do"
              className=" mb-4"
              width={80}
              height={80}
            />
            <p className="text-gray-600 mt-2 text-center">
              Convinently delivered on your schedule.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Tag} alt="Do" className=" mb-4" width={80} height={80} />
            <p className="text-gray-600 mt-2 text-center">
              Save 20%, our prices are affordable
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={Hand} alt="Do" className=" mb-4" width={80} height={80} />
            <p className="text-gray-600 mt-2 text-center">
              Pause or cancel at any time.
            </p>
          </div>
        </div>
      </div>
      <div id="guarantee">
        <Guarantee />
      </div>
      <div id="joinus">
        <WaitlistForm />
      </div>
    </div>
  );
}
