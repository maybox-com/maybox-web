import React from "react";
import GuaranteeImage from "../../assets/images/guarantee-woman.png";
import Haze from "../../assets/images/haze.png";
import Clapping from "../../assets/images/clapping.png";
import Flag from "../../assets/images/flag.png";

export default function Guarantee() {
  return (
    <div className="flex flex-col font-neueEinstellung lg:flex-row items-center justify-between mt-20 px-4 lg:px-16">
      <div className="flex-shrink-0">
        <img
        className="border-2 border-black"
          src="https://images.pexels.com/photos/6977992/pexels-photo-6977992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
          alt="Woman smiling with skincare"
           width={350}
           height={250}
        />
      </div>

      <div className="mt-2 lg:-mt-120 lg:ml-16 text-center lg:text-left">
        <h3 className="text-[#FBA013] font-playtip font-normal text-3xl mb-6">
          Happiness Guarantee
        </h3>
        <h2 className="text-3xl font-normal text-gray-800 mb-6">
          Love it, or it’s on us.
        </h2>
        <ul className="flex flex-col gap-6 space-y-4 ">
          <li className="flex items-center">
            <img
              src={Clapping}
              alt="Do"
              className=" mb-4 mx-2"
             width={35}
              height={35}
            />
            <div>
              <p className=" text-start font-semibold">Try Maybox Risk-Free</p>
              <p className="text-gray-600 text-start text-sm">We’ve got your back with easy returns</p>
            </div>
          </li>

          <li className="flex items-center">
            <img
              src={Haze}
              alt="Do"
              className=" mb-4 mx-2"
              width={35}
              height={35}
            />
            <div>
              <p className="font-semibold text-start">No Fuzzy Haze</p>
              <p className="text-gray-600 text-sm">Glow up, feel great—no confusion, no stress</p>
            </div>
          </li>

          <li className="flex items-center">
            <img
              src={Flag}
              alt="Do"
              className=" mb-4 mx-2"
              width={35}
              height={35}
            />
            <div>
              <p className="font-semibold text-start">Ships Only to Port Harcourt (For Now)</p>
              <p className="text-gray-600 text-sm text-start">Sorry, rest of Nigeria, we’re working on it!</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
