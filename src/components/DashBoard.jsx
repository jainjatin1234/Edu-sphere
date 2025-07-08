import React, { useState, useEffect, useContext } from "react";

import axios from "axios";
import PurchasedCourse from "./PurchasedCourse";
import CoursesContext from "../utils/Context.jsx";
import CoursesCard from "./CoursesCard";
import Footer from "./Footer.jsx";
import DashBoardNav from "./DashBoardNav.jsx";

const DashBoard = () => {
  const { courses } = useContext(CoursesContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/v2/dashboard",
          {
            withCredentials: true, // Ensures the authToken cookie is sent
          }
        );
        console.log(response);

        setUserInfo(response.data); // Update user info in state
      } catch (error) {
        console.error("Error fetching user data:", error.response.data.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Header */}
        <DashBoardNav />
        {/* Purchased Courses */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Your Purchased Courses{" "}
            {userInfo ? `(${userInfo.purchasedCourses.length})` : "(0)"}
          </h2>
          <div className="flex flex-wrap gap-4">
            <PurchasedCourse />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Others",
            "Placement",
            "TCS",
            "Mern-Stack",
            "COCUBES",
            "DSA",
            "PHP",
            ".NET",
          ].map((topic, idx) => (
            <button
              key={idx}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Coupons */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Courses for You</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-row-2 lg:grid-row-1 gap-10 xl:grid-cols-3 w-[80%] mt-10 mx-auto space-x-4">
            {courses.map((course, i) => (
              <CoursesCard key={i} data={course} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
