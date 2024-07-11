import React from 'react';
import { Link } from 'react-router-dom';
import './css/Aboutbody.css';
import { FaStar, FaRegHeart } from "react-icons/fa";
import "./css/Aboutbody.css";

const Aboutbody = () => {
  return (
    <>
      <section className='sect1'>
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
          <div className="absolute bottom-10 left-4 md:bottom-28 md:left-8 z-10 bg-white p-4 md:p-16">
            <p className='font-semibold'>Joy cannot be contained</p>
            <p className='font-semibold text-2xl md:text-5xl mb-4 md:mb-8'>Meet your best <br /> friend in beauty.</p>
            <Link to="#" className="bg-blue-950 hover:bg-customRed py-2 px-5 md:py-3 md:px-7 mt-4 md:mt-10 text-white">
              Get It Here
            </Link>
          </div>
        </div>
      </section>  {/* Corrected closing tag */}
      
      <section className="bg-gray-100 sect1">
        <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
          <div className="relative font-playtip container mx-auto z-10 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-[54px]  font-bold text-customOrangeDark">
              Beauty Wellness: <br />
              <span className="relative inline-block md:mr-20  font-bold sm:text-6xl md:text-[54px]">
                Our Vision Unveiled
              </span>
            </h1>
          </div>
        </div>
      </section>
      
      <section className="mt-24 px-4">
        <div className='flex flex-col justify-center'>
          <p className="mb-4">When we started maybox, we set out to make the world of beauty better. </p>
          <p className="mb-4">The solution we found? Bringing you to the center. Amid the beauty industry’s impossible, exclusive standards, not to mention the overwhelming choices from ingredients to <br /> routines to products, we want to help you feel like your best self––based on your own definition.</p>
          <p>We also believe in products that work and that you love. The end result? That feeling you get when your monthly box arrives—of joy, of discovery, of a few seconds just for me is even sweeter.</p>
        </div>
      </section>

      <section className='mt-24 px-4'>
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img src='https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2F9483d55e-b56e-4532-bdb9-98b857cc2806_pexels-rodnae-productions-8760417%2B%25281%2529%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75' alt='' className='w-64 md:w-96 mt-12' />
          </div>
        
          <div className='w-full md:w-1/4 px-4'>
            <h2 className='font-medium text-xl md:text-3xl mb-6'>Racial Equity</h2>
            <p className='text-base'>For the Black members, Indigenous members, and People of Color within our company and the beauty casual community to be and feel authentically seen at Birchbox. We intentionally partner with BIPOC-founded, owned, and run beauty brands, making it easy for our community to shop with their values while finding products that suit their needs. We're focused on building an inclusive work environment where people feel welcomed and can succeed. We audit and innovate company-wide practices to best serve our BIPOC subscribers and customers.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-24">
        <div className="relative flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="https://vimcosmo.com/pics/10-years-experience.webp"
              alt=""
              className="rounded-r-full hover:animate-pulse w-full lg:w-auto"
            />
          </div>

          <div className="ml-0 lg:ml-24 mt-12 lg:mt-24 p-4 lg:p-0">
            <h2 className="text-[54px] leading-none sm:text-5xl lg:text-6xl font-playtip font-medium mb-8 text-customOrangeDark">
              Love your beauty, <br />
              <span className="mt-2 font-playtip leading-none text-[54px] inline-block">
                body & skin
              </span>
            </h2>
            <p className="text-xl font-neueEinstellung sm:text-xl lg:text-xl text-gray-600 font-normal mb-8">
              Try something new by exploring our website <br />
              and we will help you find what works for you <br />
              and your skin, with your top concerns in mind
            </p>

            <Link
              to="#"
              className="flex font-neueEinstellung justify-center items-center bg-customOrangeDark text-white rounded-[4px] hover:bg-customRed hover:text-white transition duration-300 text-lg sm:text-xl lg:text-2xl font-medium py-4 lg:py-6 w-full lg:w-1/2 hover:-translate-y-2 hover:scale-120"
            >
              Browse products
            </Link>
          </div>
        </div>
      </section>
      
      <section className='mt-52 px-4'>
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className='w-full md:w-1/3 px-4 mt-12'>
            <h2 className='font-medium text-xl md:text-3xl mb-6'>Sustainability</h2>
            <p className='text-base'>To make it easy for you, our community, to work eco-friendly, sustainably-minded choices into your daily beauty and grooming routine. We’re focused on three areas: Reducing waste, Recyclability, Reusability.</p>
          </div>

          <div className="flex justify-center">
            <img src='https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2Fda5c76ff-f56a-47ce-88c6-a2fa628b7043_pexels-vlada-karpovich-4668362%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75' alt='' className='w-64 md:w-96' />
          </div>
        </div>
      </section>
      
      <section className="bg-gray-100 mt-24">
        <div className="px-4">
          <div className="flex items-center p-2 mb-4 space-x-2">
            <FaStar className="text-customOrangeDark text-5xl" />
            <h2 className="font-semibold text-3xl font-playtip sm:text-4xl md:text-5xl">
              Our Vision
            </h2>
          </div>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-11">
            <div className="mb-8 md:mb-16">
              <p className="text-2xl sm:text-3xl text-gray-600 font-playtip font-medium">
                01.
              </p>
              <h3 className="my-4 font-bold text-lg font-neueEinstellung sm:text-xl">
                Deliver Personalized beauty product discoveries:
              </h3>
              <p className="text-base font-neueEinstellung">
                Maybox aims to curate and send its subscribers a monthly box
                filled with deluxe samples of high-quality beauty, skincare, and
                grooming products tailored to each individual's unique
                preferences and needs.
              </p>
            </div>

            <div className="mb-8 md:mb-16">
              <p className="text-2xl sm:text-3xl text-gray-600 font-playtip font-medium">
                02.
              </p>
              <h3 className="my-4 font-bold text-lg font-neueEinstellung sm:text-xl">
                Deliver Personalized beauty product discoveries:
              </h3>
              <p className="text-base font-neueEinstellung">
                Maybox aims to curate and send its subscribers a monthly box
                filled with deluxe samples of high-quality beauty, skincare, and
                grooming products tailored to each individual's unique
                preferences and needs.
              </p>
            </div>

            <div className="mb-8 pb-4 md:mb-16">
              <p className="text-2xl sm:text-3xl text-gray-600 font-playtip font-medium">
                03.
              </p>
              <h3 className="my-4 font-bold text-lg font-neueEinstellung sm:text-xl">
                Deliver Personalized beauty product discoveries:
              </h3>
              <p className="text-base font-neueEinstellung">
                Maybox aims to curate and send its subscribers a monthly box
                filled with deluxe samples of high-quality beauty, skincare, and
                grooming products tailored to each individual's unique
                preferences and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className='mt-52 mb-32 px-4'>
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img src='https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2F2782482b-59b8-44af-97f6-b0c6083a5a94_katy-anne-nTP8aZjedqI-unsplash%2B%25281%2529%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75' alt='' className='w-64 md:w-96 mt-12' />
          </div>
        
          <div className='w-full md:w-1/4 px-4'>
            <h2 className='font-medium text-xl md:text-3xl mb-6'>Empowering Women</h2>
            <p className='text-base'>As a woman-run, led, and founded business, we’re committed to lifting up and celebrating women in the beauty industry to honor their accomplishments. We intentionally partner with women-founded, owned, and run beauty brands, making it easy for our community to shop with their values while finding product that suit their needs. We engage in opportunities to speak to and mentor women in all stages and types of careers. We partner with women-founded, owned, and run companies and non-profits with women-centered missions.</p>
          </div>
        </div>
      </section>
      
      <section className="mt-24">
        <div className="relative flex flex-col lg:flex-row">
          <div className="ml-0 w-full  lg:ml-60 mt-12 lg:w-1/2 lg:mt-6 p-4 lg:p-0">
            <h2 className="text-4xl font-playtip sm:text-5xl lg:text-6xl font-medium mb-8 text-customOrangeDark">
              Unlock your
              <br />
              <span className="mt-4 inline-block">body & skin</span>
            </h2>
            <p className="text-[15px]  font-neueEinstellung sm:text-xl lg:text-[15px] text-gray-600 mb-8">
              Join Maybox to enjoy a relaxing, enjoyable experience.
            </p>
            <button className="plans-btn bg-customOrangeDark mt-4 font-neueEinstellung">Start here</button>
          </div>

          <div className="w-full lg:w-1/2 ml-0 lg:ml-96 mt-12 lg:mt-0 p-4 lg:p-0">
            <img
              src="https://img.freepik.com/free-photo/lovely-young-afro-woman-applies-nourishing-clay-mask-has-eyes-shut-lips-folded-covers-half-face-with-big-green-leaf-wears-shower-headband-isolated-pink-wall_273609-32987.jpg?t=st=1720435168~exp=1720438768~hmac=13b1e98a6f7a6822818eae9877134d390d43643ab476f0028de21e8339e1ea73&w=1380"
              alt=""
              className="rounded-l-full hover:animate-pulse w-full lg:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbody;