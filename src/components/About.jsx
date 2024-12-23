import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  const NavDetail = {
    backGroundColor: "white",
    textColor: "black",
    shadow: true,
  };
  return (
    <>
      <Navbar NavDetail={NavDetail}></Navbar>
      <div className="bg-gray-100 h-full w-full text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4xl">
              Welcome to{" "}
              <span className="font-semibold text-blue-600">LearnSphere</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Your premier online learning platform offering a wide range of
              courses to help you achieve your educational goals.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border md:p-16 p-6 bg-white hover:scale-105 transition-all duration-200">
                <h3 className="text-2xl  font-bold text-gray-700">
                  Our Mission
                </h3>
                <p className="mt-4 text-gray-600">
                  At LearnSphere, our mission is to provide accessible and
                  high-quality education to everyone, everywhere. We believe in
                  empowering individuals through knowledge and skills that can
                  help them succeed in their personal and professional lives.
                </p>
              </div>
              <div className="border md:p-16 p-6 bg-white hover:scale-105 transition-all duration-200">
                <h3 className="text-2xl font-bold text-gray-700">
                  What We Offer
                </h3>
                <p className="mt-4 text-gray-600">
                  LearnSphere offers a diverse selection of courses in various
                  domains including Frontend, Backend, Full Stack, UI/UX Design,
                  MongoDB, and much more. Our courses are designed by industry
                  experts and are updated regularly to keep up with the latest
                  trends and technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-2xl font-bold text-gray-700">Join Us Today</h3>
            <p className="mt-4 text-gray-600">
              Start your learning journey with LearnSphere and unlock endless
              opportunities for growth and success.
            </p>
            <Link
              to="/manycourses"
              className="mt-6 inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
