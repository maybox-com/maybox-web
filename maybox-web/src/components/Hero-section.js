import React from "react";
import "../assets/styles/hero-section.css";

function HeroSection() {
  return (
    <>
      <div className="container mx-auto section-main">
        <section className="flex font-neueEinstellung font-regular">
          <div className="section-1 w-1/2 p-4">
            Products curated just for you. Choose your favorites or let us guide
            you through new finds tailored to your preferences.
          </div>
          <div className="section-2 w-1/2 p-4 mt-12">
            Products curated just for you. Choose your favorites or let us guide
            you through new finds tailored to your preferences.
          </div>
        </section>
        <div className="wellness-banner font-ordinary text-white text-6xl flex items-center justify-center mb-6">
  <span className="text-center">wellness</span>
</div>

      </div>
    </>
  );
}

export default HeroSection;
