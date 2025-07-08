import React, { useState } from "react";
import DashBoardNav from "./DashBoardNav";
import Footer from "./Footer";
import { TiThMenu } from "react-icons/ti";
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { FaBook } from "react-icons/fa";
import { TbLivePhoto } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import download from '../assets/images/download.jpeg'
const Content = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col pt-4 min-h-screen bg-gray-100">
        {/* Navbar */}
        <div className="px-4">
          <DashBoardNav />
        </div>

        {/* Main Content Wrapper */}
        <div className="flex flex-1 relative">
          {/* Sidebar */}
          <aside
            className={`fixed w-[60%] top-0 left-0 h-full bg-white shadow-md z-20 md:p-4 px-4 py-8 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform lg:relative lg:translate-x-0 lg:w-1/5`}
          >
            <div className="flex flex-col h-full space-y-6">
              <div className="flex justify-between text-xl items-center">
                <a
                  href="#overview"
                  className="text-gray-700 font-semibold hover:text-blue-600"
                >
                  Overview
                </a>
                <HiOutlineDocumentMagnifyingGlass />
              </div>
              <div className="flex justify-between text-xl items-center">
                <a
                  href="#content"
                  className="text-gray-700  font-semibold hover:text-blue-600"
                >
                  Content
                </a>
                <FaBook />
              </div>
              <div className="flex justify-between text-xl items-center">
                <a
                  href="#live-classes"
                  className="text-gray-700  font-semibold hover:text-blue-600"
                >
                  Live Classes
                </a>
                <TbLivePhoto />
              </div>
              <div className="flex justify-between text-xl items-center">
                <a
                  href="#attendance"
                  className="text-gray-700  font-semibold hover:text-blue-600"
                >
                  Attendance
                </a>
                <FaUserCheck />
              </div>
              <div className="flex justify-between text-xl items-center">
                <a
                  href="#announcements"
                  className="text-gray-700  font-semibold hover:text-blue-600"
                >
                  Announcements
                </a>
                <GrAnnounce />
              </div>
            </div>
          </aside>

          {/* Sidebar Overlay */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <main className="flex-1 relative px-4 pb-6 lg:p-">
            {/* Mobile Menu Button */}
            <div className="lg:hidden -top-14 right-16 absolute mb-4">
              <TiThMenu
                onClick={() => {
                  setIsSidebarOpen(!isSidebarOpen);
                }}
              ></TiThMenu>
            </div>

            {/* Course Details */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start">
                <img
                  src={download}
                  alt="Course Thumbnail"
                  className="w-full lg:w-1/4 rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">
                    (OCT) New Full-Stack Developer Batch Exclusive for Beginner
                    with Projects + Certificate
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Ends on <span className="font-medium">2025/02/14</span>
                  </p>
                </div>
                <div className="text-right">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Talk to Tutor
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <p className="text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                  similique architecto molestiae accusamus, doloremque illum
                  velit laboriosam nostrum, possimus pariatur autem officia
                  necessitatibus doloribus debitis! Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Itaque minus laudantium dolorem
                  saepe nam velit incidunt nulla autem at. Ratione. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Maxime,
                  voluptatem.
                </p>
                <button className="text-blue-600 hover:underline mt-2">
                  Read More
                </button>
              </div>

              {/* Content Summary */}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-4.553m0 0a2.121 2.121 0 013 0l2 2a2.121 2.121 0 010 3L17.121 15m2.121 2.121L13.5 10m2.121 2.121l4.553-4.553M12 12l4.553 4.553M13.5 10L8.5 15m0 0a2.121 2.121 0 010 3l-2 2a2.121 2.121 0 01-3 0L4 19.5m2.121 2.121L3.5 18m2.121 2.121L12 12m0 0L4.553 4.553M4.553 4.553L4 4m0 0H0"
                    ></path>
                  </svg>
                  <span className="ml-2 font-medium">744 Videos</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 10h16m-7 4h7"
                    ></path>
                  </svg>
                  <span className="ml-2 font-medium">293 Files</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10h18M3 14h18m-9-9h1a3 3 0 013 3v8a3 3 0 01-3 3h-1m-4-3H9a3 3 0 01-3-3v-8a3-3H8"
                    ></path>
                  </svg>
                  <span className="ml-2 font-medium">116 Tests</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mt-6 text-gray-500">
                <p>
                  <span className="font-medium">Duration:</span> 6 Months
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
export default Content;
