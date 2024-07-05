import React, { useState } from 'react';

const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`accordion py-8 border-b border-solid border-gray-200 ${isOpen ? 'active' : ''}`}>
      <button
        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
        aria-controls="basic-collapse-one"
        onClick={onClick}
      >
        <h5 className=''>{title}</h5>
        <svg
          className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 ${isOpen ? 'rotate-180' : ''}`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        aria-labelledby="basic-heading-one"
      >
        <p className="text-base font-normal text-gray-600 ">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
