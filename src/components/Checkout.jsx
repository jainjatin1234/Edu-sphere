import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { BsPaypal } from "react-icons/bs";
import { GrAmex } from "react-icons/gr";
import { RiVisaFill } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";

import { IoMdArrowRoundBack } from "react-icons/io";
const Checkout = () => {
  const navigate = useNavigate();
  const NavDetail = {
    backGroundColor: "white",
    textColor: "black",
    shadow: true,
  };
  return (
    <div className="overflow-x-hidden w-[100vw]">
      <div class=" flex  justify-center items-center  bg-gray-100">
        <div class="bg-white m-4 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-2/3 p-4">
              <div className="flex gap-2">
                <IoMdArrowRoundBack
                  onClick={() => {
                    navigate(-1);
                  }}
                  className="text-2xl hover:cursor-pointer hover:scale-125 duration-300 "
                />
                <h2 class="text-xl font-semibold mb-6">Checkout</h2>
              </div>

              <div class="mb-4">
                <h3 class="text-sm font-medium text-gray-600 mb-2">
                  Card Type
                </h3>
                <div class="flex space-x-4 ">
                  <BsPaypal class="w-14 h-10 text-blue-500 bg-white shadow p-1" />
                  <GrAmex class="w-12 h-10 bg-blue-500 rounded-md shadow text-white p-1" />
                  <RiVisaFill class="w-12 h-10 text-blue-500 bg-white shadow p-1 " />
                  <RiMastercardFill class="w-12 h-10 shadow bg-white text-orange-700 p-1" />
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-600">
                  Name on Card
                </label>
                <input
                  type="text"
                  class="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-600">
                  Card Number
                </label>
                <input
                  type="text"
                  class="w-full p-3 border border-gray-300 rounded-lg mt-2"
                />
              </div>
              <div class="flex space-x-4">
                <div class="w-1/2">
                  <label class="block text-sm font-medium text-gray-600">
                    Expiration Date (MM/YY)
                  </label>
                  <input
                    type="text"
                    class="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  />
                </div>
                <div class="w-1/2">
                  <label class="block text-sm font-medium text-gray-600">
                    CVC
                  </label>
                  <input
                    type="text"
                    class="w-full p-3 border border-gray-300 rounded-lg mt-2"
                  />
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <input type="checkbox" id="save-info" class="mr-2" />
                <label for="save-info" class="text-sm text-gray-600">
                  Save my information for faster checkout
                </label>
              </div>
              <button class="w-full bg-teal-500 text-white p-3 rounded-lg mt-6 hover:bg-teal-600">
                Confirm Payment
              </button>
            </div>

            <div class="md:w-1/3 p-4 bg-blue-50 rounded-lg shadow-md mt-8 md:mt-0">
              <h2 class="text-xl font-semibold mb-6">Summary</h2>

              <div class="border-t border-gray-300 mt-4 pt-4">
                <div class="flex justify-between text-gray-700 mb-2">
                  <span>Subtotal</span>
                  <span>$51.38</span>
                </div>
                <div class="flex justify-between text-gray-700 mb-2">
                  <span>Coupon Discount</span>
                  <span>0%</span>
                </div>
                <div class="flex justify-between text-gray-700 mb-2">
                  <span>TAX</span>
                  <span>$5</span>
                </div>
                <div class="flex justify-between text-gray-800 font-semibold text-lg">
                  <span>Total</span>
                  <span>$56.38</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
