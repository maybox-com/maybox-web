import React from "react";
import "../assets/styles/hero-section.css";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto px-4 md:px-[12em] section-main">
        <section className="flex flex-col md:flex-row font-neueEinstellung font-regular">
          <div className="section-1 w-full md:w-1/2 p-4">
            Products curated just for you. Choose your favorites or let us guide
            you through new finds tailored to your preferences.
          </div>
          <div className="section-2 w-full md:w-1/2 p-4 mt-4 md:mt-12">
            Try new brands. From cult favourites to popular brands
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
