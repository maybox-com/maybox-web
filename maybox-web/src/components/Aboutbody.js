import React from 'react';
import { FaStar, FaRegHeart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import './css/Aboutbody.css';

const Aboutbody = () => {
  return (
    <>
      <section className='bg-gray-100 sect1'>
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
          <div className="relative container mx-auto z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-ordinary font-bold text-customRed">
              Beauty Wellness: <br />
              <span className="relative inline-block md:mr-20 font-ordinary font-bold sm:text-6xl md:text-7xl">
                Our Vision Unveiled
              </span>
            </h1>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 mt-24'>
        <div className="px-4">
          <div className="relative flex flex-col lg:flex-row p-4 md:p-12">
            <div className="flex-1 mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-customRed">
                Unveiling Wellness <br />
                <span>Excellence</span>
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-base sm:text-lg md:text-xl font-medium">
                With Maybox, discover the transforming realm of wellness, beauty, and self-care. Our carefully chosen collections provide tailored answers that enable you to succeed in all facets of your life. Every product, from opulent skincare to revitalizing self-care practices, is chosen based on its effectiveness and quality. With Maybox, you can embrace wellness since each item is designed to accentuate the beauty of nature and encourage a sense of well-being. Learn the true meaning of self-care and improve your everyday regimen with items that yield remarkable outcomes.
              </p>
            </div>
          </div>
          <div className="flex justify-center p-4 md:p-12">
            <div className="max-w-full">
              <p className="text-center text-base sm:text-lg md:text-xl px-4 md:px-36">
                From the inception of our lifestyle health app to the dynamic team leading its development, our story is one of enthusiasm, dedication, and ongoing development. We are a community, not just a team, motivated by the same goal of transforming the future of well-being. Discover our path, where each accomplishment, obstacle, and milestone adds to a legacy of excellence and empowerment for all in the field of holistic wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100'>
        <div className="px-4">
          <div>
            <div className='flex items-center p-8 space-x-2'>
              <FaStar className='text-customRed text-5xl' />
              <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>Our Vision</h2>
            </div>
          </div>

          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-11'>
            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>01.</p>
              <h3 className='mt-2 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <hr className="border-t border-gray-900 my-2" />
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>

            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>02.</p>
              <h3 className='mt-2 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <hr className="border-t border-gray-900 my-2" />
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>

            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>03.</p>
              <h3 className='mt-2 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <hr className="border-t border-gray-900 my-2" />
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 sect4 mt-24'>
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
          <div className="relative container mx-auto z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-ordinary font-bold text-customPink">
              Unlock your<br />
              <span className="relative inline-block font-ordinary font-bold sm:text-6xl md:text-7xl">
                Beauty
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl font-neueEinstellung text-center">
              Join Maybox today and experience a well-pleasing and stress-free joy.
            </p>

            <div className="mt-8 flex justify-center space-x-4">
              {/* <Link
                to="#"
                className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-red-200 text-customRed rounded-full hover:bg-red-400 transition duration-300 text-lg sm:text-xl md:text-2xl"
              >
                <FaRegHeart className="mr-2 sm:mr-4 heart text-2xl sm:text-3xl rounded-full" />
                Start Free Trial
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutbody;