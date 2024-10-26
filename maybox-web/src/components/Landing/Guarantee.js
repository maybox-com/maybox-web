import React from "react";
import Haze from "../../assets/images/haze.png";
import Clapping from "../../assets/images/clapping.png";
import Flag from "../../assets/images/flag.png";
import GuaranteeImage from "../../assets/images/guarantee.jpg";

export default function Guarantee() {
  return (
    <div className="pb-20 flex flex-col font-neueEinstellung lg:flex-row items-center justify-between mt-20 px-4 lg:px-16">
      <div className="flex-shrink-0">
        <img
          className=" border rounded-md"
          src={GuaranteeImage}
          alt="Woman smiling with skincare"
          width={550}
          height={50}
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
              <p className="text-gray-600 text-start text-sm">Experience Maybox with confidence. If you don’t love your first box, we’ll make it right—guaranteed.
</p>
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
              <p className="font-semibold text-start">No Hidden Fees</p>
              <p className="text-gray-600 text-sm text-start">No surprises. What you see is what you get—transparent pricing, no extra charges.</p>
            </div>
          </li>

          {/* <li className="flex items-center">
            <img
              src={Flag}
              alt="Do"
              className=" mb-4 mx-2"
              width={35}
              height={35}
            />
            <div>
              <p className="font-semibold text-start">Ships Only to Port Harcourt (For Now)</p>
              <p className="text-gray-600 text-sm text-start">At the moment, Maybox ships exclusively to Port Harcourt. We’re working tirelessly to expand to more locations soon.</p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
