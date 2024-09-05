import React from "react";
import "../../assets/styles/contact.css";
import ContactImage from "../../assets/images/Contact.jpg"; // Import the image correctly


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

function Contactus() {
  return (
    <>
      <div className="container mx-auto mt-20 p-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="font-serif font-medium text-xl contactus mb-4">Let's talk</h2>
            <h2 className="italic font-medium text-xl contactus mb-4 pb-5">business</h2>
            <p className="font-sans font-light mb-6">From conception to completion, <span className="font-medium font-serif">Maybox</span> works <br></br> shoulder to shoulder with our clients ensuring <br></br> that their vision and goals are achieved.</p>
            
            {/* Form Section */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-light mb-2" htmlFor="name">
                  Full name
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="John doe"
                />
              </div>
              
              <div>
                <label className="block font-light text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              
              <div>
                <label className="block font-light text-sm mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="+23408045789512"
                />
              </div>
              
              <div>
                <label className="block font-light text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="your message..."
                />
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  className="bg-customRed text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                  type="button"
                >
                  Send Message
                  <FontAwesomeIcon icon={faArrowPointer} className="ml-2" />
                </button>
              </div>
            </form>
            {/* End of Form Section */}
          </div>
          <div className="hidden md:flex w-full md:w-1/2 justify-center">
            <img src={ContactImage} alt="Contact Us" className="contact-image max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
