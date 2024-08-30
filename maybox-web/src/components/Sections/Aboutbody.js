import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart } from "react-icons/fa";
import "../../assets/styles/Aboutbody.css";

const Aboutbody = () => {
  return (
    <>
      <section className="sect1">
        <div className="relative flex flex-col text-customOrangeDark items-center justify-center min-h-screen px-4">
          <div className="absolute bottom-10 left-4 md:bottom-28 md:left-8 z-10 bg-white p-4 md:p-16">
            <p className="font-semibold pl-[4px] tracking-tight text-[15px] font-neueEinstellung">Joy cannot be contained</p>
            <p className="font-normal font-playtip text-2xl md:text-5xl mb-4 md:mb-8">
              Meet your best <br /> friend in beauty.
            </p>
            <Link
              to="#"
              className="bg-customOrangeDark font-neueEinstellung hover:bg-customRed py-2 px-5 md:py-3 md:px-7 mt-4 md:mt-10 text-white"
            >
              Get It Here
            </Link>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-24  font-neueEinstellung px-6 md:px-12">
        <div className="">
          <p className="mb-4">
            When we started maybox, we set out to make the world of beauty
            better.{" "}
          </p>
          <p className="mb-4">
            The solution we found? Bringing you to the center. Amid the beauty
            industry’s impossible, exclusive standards, not to mention the
            overwhelming choices from ingredients to <br /> routines to
            products, we want to help you feel like your best self––based on
            your own definition.
          </p>
          <p>
            We also believe in products that work and that you love. The end
            result? That feeling you get when your monthly box arrives—of joy,
            of discovery, of a few seconds just for me––is even sweeter.
          </p>
        </div>
      </section>

      <section className="mt-24 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img
              src="https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2F9483d55e-b56e-4532-bdb9-98b857cc2806_pexels-rodnae-productions-8760417%2B%25281%2529%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75"
              alt=""
              className="w-64 md:w-96 mt-12"
            />
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Racial Equity
            </h2>
            <p className="text-[15px] font-neueEinstellung">
              For the Black members, Indigenous members, and People of Color
              within our company and the beauty casual community to be and feel
              authentically seen at Birchbox. We intentionally partner with
              BIPOC-founded, owned, and run beauty brands, making it easy for
              our community to shop with their values while finding products
              that suit their needs. We're focused on building an inclusive work
              environment where people feel welcomed and can succeed. We audit
              and innovate company-wide practices to best serve our BIPOC
              subscribers and customers.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-52 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="w-full md:w-1/3 px-4 mt-12">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Sustainability
            </h2>
            <p className="text-[15px] font-neueEinstellung">
              To make it easy for you, our community, to work eco-friendly,
              sustainably-minded choices into your daily beauty and grooming
              routine. We’re focused on three areas: Reducing waste,
              Recyclability, Reusability.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2Fda5c76ff-f56a-47ce-88c6-a2fa628b7043_pexels-vlada-karpovich-4668362%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75"
              alt=""
              className="w-64 md:w-96"
            />
          </div>
        </div>
      </section>

      <section className="mt-52 mb-32 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="flex justify-center">
            <img
              src="https://www.birchbox.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fbirchbox%2F2782482b-59b8-44af-97f6-b0c6083a5a94_katy-anne-nTP8aZjedqI-unsplash%2B%25281%2529%2B1.png%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C0%2C640%2C400%26w%3D600%26h%3D375&w=640&q=75"
              alt=""
              className="w-64 md:w-96 mt-12"
            />
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Empowering Women
            </h2>
            <p className="text-[15px] font-neueEinstellung">
              As a woman-run, led, and founded business, we’re committed to
              lifting up and celebrating women in the beauty industry to honor
              their accomplishments. We intentionally partner with
              women-founded, owned, and run beauty brands, making it easy for
              our community to shop with their values while finding product that
              suit their needs. We engage in opportunities to speak to and
              mentor women in all stages and types of careers. We partner with
              women-founded, owned, and run companies and non-profits with
              women-centered missions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbody;