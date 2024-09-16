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
          src={GuaranteeImage} 
          alt="Woman smiling with skincare"
          width={500}
          height={500}
        />
      </div>

      <div className="mt-2 lg:-mt-120 lg:ml-16 text-center lg:text-left">
        <h3 className="text-[#FBA013] font-playtip font-normal text-3xl mb-2">
          Happiness Guarantee
        </h3>
        <h2 className="text-3xl font-normal text-gray-800 mb-4">
          Love it, or it’s on us.
        </h2>
        <ul className="space-y-4 ">
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
              <p className="text-gray-600 text-start text-sm">Shipping and returns</p>
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
              <p className="text-gray-600 text-sm">Feel better and keep a clear head.</p>
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
              <p className="font-semibold text-start">Ships All Across Nigeria (For Now)</p>
              <p className="text-gray-600 text-sm text-start">No prescription needed.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
