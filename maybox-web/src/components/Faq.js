import React, { useState } from "react";
import Accordion from "./Accordion";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img
                src="https://pagedone.io/asset/uploads/1696230182.png"
                alt="FAQ tailwind section"
                className="w-auto"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-4 lg:mb-8">
                  <h1 className="text-[54px] whitespace-nowrap text-center font-medium text-customRed font-ordinary lg:text-left">
                    Have more questions?
                  </h1>
                </div>
                <div
                  className="accordion-group font-neueEinstellung font-thin"
                  data-accordion="default-accordion"
                >
                  <Accordion
                    title="How to create an account?"
                    content="To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform."
                    isOpen={activeIndex === 0}
                    onClick={() => handleAccordionClick(0)}
                  />
                  <Accordion
                    title="Have any trust issues?"
                    content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                    isOpen={activeIndex === 1}
                    onClick={() => handleAccordionClick(1)}
                  />
                  <Accordion
                    title="How can I reset my password?"
                    content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                    isOpen={activeIndex === 2}
                    onClick={() => handleAccordionClick(2)}
                  />
                  <Accordion
                    title="What is the payment process?"
                    content="Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease."
                    isOpen={activeIndex === 3}
                    onClick={() => handleAccordionClick(3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
