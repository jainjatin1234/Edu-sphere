import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ContactUs = () => {
  const NavDetail = {
    backGroundColor: "white",
    textColor: "black",
    shadow: true,
  };
  return (
    <>
      <Navbar NavDetail={NavDetail} />
      <div className="bg-zinc-100 text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-md leading-6 text-gray-600">
              Have any questions? We'd love to hear from you! Reach out to us
              using the form below or connect with us on social media.
            </p>
          </div>

          <div className="mt-10">
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-1">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="sm:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-gray-700">Follow Us</h3>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-3xl hover:text-gray-900"
              >
                <BsFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-600 text-3xl hover:text-gray-900"
              >
                <BsInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-600 text-3xl  hover:text-gray-900"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
