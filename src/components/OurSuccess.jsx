import React, { useState, useEffect } from "react";
import CountUp from "./CountUP";

const OurSuccess = () => {
  return (
    <div className="scroll-container">
      <div className="h-auto min-h-[80vh] flex flex-col items-center justify-center">
        <div
          id="success-section"
          className="flex flex-col p-5 mt-20 items-center min-h-[60vh] justify-center"
        >
          <h1 className="text-center font-bold text-4xl">Our Success</h1>
          <p className="text-sm opacity-[85%] text-center m-5">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrieces eu ornare tristique vel nisl orci.
          </p>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-0 justify-between mt-20 px-3 lg:px-32 w-[100vw]">
            <div className="flex flex-col w-[90%] md:w-[25%]">
              <p className="text-6xl text-center text-blue-500">15000+</p>
              <p className="text-center text-xl text-gray-600">Students</p>
            </div>
            <div className="flex flex-col w-[90%] md:w-[25%]">
              <p className="text-6xl text-center text-blue-500">75%</p>
              <p className="text-center text-xl text-gray-600">Total success</p>
            </div>
            <div className="flex flex-col w-[90%] md:w-[25%]">
              <p className="text-6xl text-center text-blue-500">1000+</p>
              <p className="text-center text-xl text-gray-600">
                Main questions
              </p>
            </div>
            <div className="flex flex-col w-[90%] md:w-[25%]">
              <p className="text-6xl text-center text-blue-500">100+</p>
              <p className="text-center text-xl text-gray-600">Chief experts</p>
            </div>
            <div className="flex flex-col w-[90%] md:w-[25%]">
              <p className="text-6xl text-center text-blue-500">20+</p>
              <p className="text-center text-xl text-gray-600">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSuccess;
