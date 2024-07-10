import React from "react";
import "../assets/styles/contact.css";
import ContactImage from "../assets/images/Contact.jpg"; // Import the image correctly

// Import FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

function Contactus() {
  return (
    <>
      <div className="container mx-auto mt-20 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-playtip font-semibold text-4xl contactus mb-4">
              Contact Us
            </h2>
            <p className="font-neueEinstellung pl-[4px] font-normal text-gray-600 mb-6 ">
              Reach out to us and tell us more about the package you want.
            </p>

            {/* Form Section */}
            <form className="space-y-4 ">
              <div>
                <label className="block text-sm font-neueEinstellung font-normal text-gray-600 mb-2" htmlFor="name">
                  Full name
                </label>
                <input
                  className="border rounded-lg font-neueEinstellung w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John doe"
                />
              </div>

              <div>
                <label
                  className="block font-neueEinstellung font-normal text-gray-600 text-sm mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border font-neueEinstellung rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label
                  className="block font-neueEinstellung font-normal text-gray-600 text-sm mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="border font-neueEinstellung rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="+23408045789512"
                />
              </div>

              <div>
                <label
                  className="block font-neueEinstellung font-normal text-gray-600 text-sm mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="border font-neueEinstellung rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="your message..."
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-customOrangeDark text-white font-normal font-neueEinstellung py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
            {/* End of Form Section */}
          </div>
          <div className="hidden md:flex w-full md:w-1/2 justify-center">
            <img
              src={ContactImage}
              alt="Contact Us"
              className="contact-image max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
