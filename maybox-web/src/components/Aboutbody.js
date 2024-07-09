import React from 'react';
import { FaStar, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
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

      <section className="mt-24">
        <div className='relative flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2'>
            <img
              src='https://vimcosmo.com/pics/10-years-experience.webp'
              alt=''
              className='rounded-r-full hover:animate-pulse w-full lg:w-auto'
            />
          </div>

          <div className='ml-0 lg:ml-24 mt-12 lg:mt-24 p-4 lg:p-0'>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 text-customPink">
              Love your beauty, <br />
              <span className="mt-4 inline-block">body & skin</span>
            </h2>
            <p className='text-lg sm:text-xl lg:text-2xl text-gray-400 font-semibold mb-8'>
              Try something new by exploring our website <br />
              and we will help you find what works for you <br />
              and your skin, with your top concerns in mind
            </p>

            <Link to="#" className="flex justify-center items-center bg-red-200 text-customRed rounded-full hover:bg-customRed hover:text-white transition duration-300 text-lg sm:text-xl lg:text-2xl font-medium py-4 lg:py-6 w-full lg:w-1/2 hover:-translate-y-2 hover:scale-120">
              Browse products
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 mt-24'>
        <div className="px-4">
          <div className='flex items-center p-8 space-x-2'>
            <FaStar className='text-customRed text-5xl' />
            <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>Our Vision</h2>
          </div>

          <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-11'>
            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>01.</p>
              <h3 className='my-4 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>

            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>02.</p>
              <h3 className='my-4 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>

            <div className='mb-8 md:mb-16'>
              <p className='text-2xl sm:text-3xl text-gray-400 font-medium'>03.</p>
              <h3 className='my-4 font-bold text-lg sm:text-xl'>Deliver Personalized beauty product discoveries:</h3>
              <p className='text-base'>Maybox aims to curate and send its subscribers a monthly box filled with deluxe samples of high-quality beauty, skincare, and grooming products tailored to each individual's unique preferences and needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-24'>
        <div className='relative flex flex-col lg:flex-row'>
          <div className='ml-0 lg:ml-60 mt-12 lg:mt-24 p-4 lg:p-0'>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 text-customPink">
              Unlock your<br />
              <span className="mt-4 inline-block">body & skin</span>
            </h2>
            <p className='text-lg sm:text-xl lg:text-2xl text-gray-400 font-semibold mb-8'>
              Join Maybox to enjoy a relaxing, enjoyable experience.
            </p>

            <Link to="#" className="flex justify-center items-center px-6 py-4 lg:py-6 bg-red-200 text-customRed rounded-full hover:bg-red-400 transition duration-300 w-full lg:w-1/2 font-medium hover:-translate-y-1 hover:scale-180">
              <FaRegHeart className="mr-2 text-2xl heart lg:text-3xl rounded-full" />
              <span className="hover:text-white text-lg lg:text-xl">Start Free Trial</span>
            </Link>
          </div>

          <div className='w-full lg:w-1/2 ml-0 lg:ml-96 mt-12 lg:mt-0 p-4 lg:p-0'>
            <img
              src='https://img.freepik.com/free-photo/lovely-young-afro-woman-applies-nourishing-clay-mask-has-eyes-shut-lips-folded-covers-half-face-with-big-green-leaf-wears-shower-headband-isolated-pink-wall_273609-32987.jpg?t=st=1720435168~exp=1720438768~hmac=13b1e98a6f7a6822818eae9877134d390d43643ab476f0028de21e8339e1ea73&w=1380'
              alt=''
              className='rounded-l-full hover:animate-pulse w-full lg:w-auto'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutbody;