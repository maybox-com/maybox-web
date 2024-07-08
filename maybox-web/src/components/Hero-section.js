import React from "react";
import "../assets/styles/hero-section.css";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-[12em] my-[8em] section-main">
        <section className="flex flex-col  md:flex-row font-neueEinstellung font-regular gap-[6em]">
          <div className="section-1 w-full md:w-1/2 p-4">
          <h1 className="font-medium font-playtip text-customOrangeDark mb-8 text-2xl leading-tight md: text-[48px] space-x-3 ">Your Perfect Picks.</h1>
            Products curated just for you. Choose your favorites or let us <br className="hidden sm:block" /> guide
            you through new finds tailored to your preferences.
          </div>
          <div className="section-2 w-full md:w-1/2 p-4 mt-4 md:mt-12">
          <h1 className="font-meduim font-playtip text-customOrangeDark mb-8 text-2xl md: text-[48px] ">What you love.</h1>
            Try new brands. From cult favourites to popular <br className="block" /> brands.
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
