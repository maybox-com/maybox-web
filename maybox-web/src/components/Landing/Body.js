import React, { useRef } from "react";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import LordIcon from "./LordIcon";
import Tag from "../../assets/images/TAG.svg";
import Check from "../../assets/images/CALENDER.svg";
import Hand from "../../assets/images/HAND.svg";
import Guarantee from "./Guarantee";
import WaitlistForm from "./Waitlist";
import Steps from "../UI/Steps";
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
      <div className="div-1 relative container mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl text-center md:text-6xl font-playtip tracking-tight font-bold text-customOrangeDark lg:text-center">
          Beauty, self-care and wellness that <br />
          <span className="relative inline-block text-[#FBA013] font-bold font-playtip">
            <Typewriter
              options={{
                strings: ["delivers!", "inspires!", "rejuvenates!", "refreshes!"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="mt-8 font-neueEinstellung text-customOrangeDark text-center text-base sm:text-lg md:text-xl leading-relaxed">
          A customizable box of premium beauty, self-care & wellness products
          delivered monthly, just for you whenever and however you need it.
        </p>

        <div className="header-btn font-neueEinstellung mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={scrollToJoinUs}
            className="px-6 py-3 bg-[#FBA013] text-white  hover:bg-[#E68A00] transition duration-300 inline-block sm:px-8 sm:py-4 w-full sm:w-auto text-center"
          >
            Join the waitlist
          </button>
        </div>
      </div>

      {/* Image Grid Section with Icons */}
      <div className="w-full font-neueEinstellung mt-8 mb-8 bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm tracking-widest font-semibold">
            The Benefits
          </p>
          <h2 className="text-3xl font-meduim text-black">Feel balanced.</h2>
          <p className="text-gray-600 mt-4">
            Helping you feel, look your best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/3736281/pexels-photo-3736281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
              alt="Feel"
              width={350}
              height={300}
              className="border-2 border-black mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/jjoolpwc.json" />
            <h3 className="text-xl font-bold mt-4 text-black">FEEL</h3>
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
              className="border-2 border-black mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/zpwnkfbk.json" />
            <h3 className="text-xl font-bold mt-4 text-black">LOOK</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help you <span className="font-bold">look</span> bold with
              a natural glow.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/6978068/pexels-photo-6978068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Do"
              width={350}
              height={300}
              className="border-2 border-black mb-4"
            />
            <LordIcon src="https://cdn.lordicon.com/jyrzvbtn.json" />
            <h3 className="text-xl font-bold mt-4 text-black">DO</h3>
            <p className="text-gray-600 mt-2 text-center">
              Let us help inspire you to <span className="font-bold">do</span>{" "}
              good work.
            </p>
          </div>
        </div>
      </div>

      <Steps />

      <div className="w-full mt-[8em] font-neueEinstellung bg-[#FCF5EB] py-16">
        <div className="text-center mb-8">
          <p className="text-[#FBA013] uppercase text-sm  tracking-widest font-semibold">
            MEMBERSHIP PERKS
          </p>
          <h2 className="text-3xl font-medium text-black">
            Glow better, stress less.
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
            <p className="text-black mt-2 text-2xl text-center">
              Perfectly timed to your routine.
            </p>
            <span className="text-center text-gray-600">
              Get your self-care essentials delivered exactly when you need
              them. No more waiting.
            </span>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Tag}
              alt="Do"
              className=" mb-4"
              width={80}
              height={80}
            />
            <p className="text-black mt-2 text-2xl text-center">
              Save more, because taking care of yourself shouldn’t break the
              bank.
            </p>
            <span className="text-center text-gray-600">
              Get your self-care essentials delivered exactly when you need
              them. No more waiting.
            </span>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={Hand}
              alt="Do"
              className=" mb-4"
              width={80}
              height={80}
            />
            <p className="text-black mt-2 text-2xl text-center">
              You're in control.
            </p>
            <span className="text-center text-gray-600">
              Pause, skip, or cancel anytime. It’s self-care on your terms.
            </span>
          </div>
        </div>
      </div>

      <Faq  id="faq" ref={faqRef} />
      <div id="guarantee">
        <Guarantee />
      </div>

      <div id="joinus" ref={joinUsRef}>
        <WaitlistForm />
      </div>
    </div>
  );
}
