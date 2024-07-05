import React from "react";
import "../assets/styles/contact.css";
import online from "../assets/images/round.png";
import contactbg from "../assets/images/3d-casual-life-woman-talking-with-chatbot.png";

// Import FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

function Contactus() {
  return (
    <>
      <div className="overflow-hidden px-4 sm:px-6 lg:px-8">
        <h1 className="text-customRed mt-20 sm:mt-40 text-2xl sm:text-4xl font-bold font-ordinary">Get in touch with Us</h1>
        <h2 className="font-light pt-2 sm:pt-5">Online 24hr</h2>
        <div className="active pt-2 sm:pt-5 mb-10 sm:mb-20 relative">
          <img src={online} alt="active icon" className="w-3 h-3" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start mt-20 sm:mt-40 space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="flex-1">
            <h1 className="text-customRed text-2xl sm:text-4xl font-bold">Do you want to learn more</h1>

            <p className="pt-2 sm:pt-5">Reach out today and we’ll get back to you <br /> as soon as possible.</p>
            <div className="pt-2 sm:pt-5">
              <img src={contactbg} alt="Description of the image" className="w-full sm:w-80 h-auto rounded-xl mt-10 mb-20 sm:mb-20" />
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1">
            <form className="space-y-4">
              <div>
                <label htmlFor="fullname" className="block text-lg font-medium text-customRed">Full name*</label>
                <input
                  type="text"
                  id="fullname"
                  className="mt-1 block w-full p-2 border border-customRed rounded-2xl shadow-sm focus:border-customRed focus:ring focus:outline-none"
                  required
                  placeholder=" John Ortega"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-customRed">Email*</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-customRed rounded-2xl shadow-sm focus:border-customRed focus:ring focus:outline-none"
                  required
                  placeholder=" johnortega@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-lg font-medium text-customRed">Comment*</label>
                <textarea
                  id="comment"
                  className="mt-1 block w-full p-2 h-40 border border-customRed rounded-2xl shadow-sm focus:border-customRed focus:ring focus:outline-none"
                  required
                  placeholder=" Type your comment here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-customRed"
              >
                Send Message
                <FontAwesomeIcon icon={faArrowPointer} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
