import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Aboutbody.css";
import racially from "../assets/images/portrait-diverse-latin-people.jpg";
import sustain from "../assets/images/top-view-smartphone-template-workspace.jpg";
import empower from "../assets/images/togetherness-group-women-hugging.jpg";

const Aboutbody = () => {
  return (
    <>
      <section className="sect1 mt-24">
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
        <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
              Our Mission
            </h2>
            <p className="mb-4 text-xl">
              Making Beauty Personal
          </p>
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
            src={racially}
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
              src={sustain}
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
              src={empower}
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

      <section className="mt-52 mb-32 px-4">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="font-medium text-customOrangeDark font-playtip text-xl md:text-3xl mb-6">
            Why Maybox?
            </h2>
            <p className="text-[15px] font-neueEinstellung">
            At Maybox, our focus is on you. We believe that beauty is a personal journey, and we’re here to help you discover products that work for you—no matter your skin type, beauty preferences, or routine. Whether you’re looking to explore new brands, simplify your routine, or just treat yourself to something special, Maybox is designed to bring joy, excitement, and quality products to your doorstep every month.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutbody;