import React from 'react';

const steps = [
  {
    title: "Step 1",
    description: "Share your beauty goals",
    details: "Answer a few questions to help us match you with the right products for your skin, hair, and style.",
    bgColor: "bg-customRed",
  },
  {
    title: "Step 2",
    description: "Choose your products",
    details: "Choose the products you want, or let us build a box that's tailored just for you.",
    bgColor: "bg-customOrangeDark",
    textColor:"text-[#f0f0f0;]"
  },
  {
    title: "Step 3",
    description: "Discover new beauty",
    details: "Try new products each month, find your favorites in our Shop, and be effortlessly you.",
    bgColor: "bg-customOrangeLight",
    
  }
];

function Steps() {
  return (
    <div className="flex flex-col gap-[7em] md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center max-w-[299px] md:max-w-[290px] bg-white shadow-lg overflow-hidden">
          <div className={`w-full p-6 ${step.bgColor} border-b-4`}>
            <h3 className={`text-lg justify-start ${step.textColor} font-neueEinstellung font-bold`}>{step.title}</h3>
          </div>
          <div className="p-6 justify-start">
            <h4 className="text-2xl  font-semibold font-playtip mb-2">{step.description}</h4>
            <p className="text-gray-600 font-neueEinstellung">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;