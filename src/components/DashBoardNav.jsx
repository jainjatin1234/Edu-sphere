import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";

const DashBoardNav = () => {
  axios.defaults.withCredentials = true;

  const [userInfo, setUserInfo] = useState(null);

  const { setUser } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://edu-sphere-backend.onrender.com/user/v2/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      toast.success("Logout successfully...");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const logoutmenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://edu-sphere-backend.onrender.com/user/v2/dashboard",
          {
            withCredentials: true, // Ensures the authToken cookie is sent
          }
        );
        console.log(response);
        console.log("Hello");

        setUserInfo(response.data); // Update user info in state
      } catch (error) {
        console.error("Error fetching user data:", error.response.data.message);
      }
    };

    fetchUserData();
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-0 gap-3 flex-wrap justify-between bg-white items-center mb-6 border py-2 px-5 rounded-full">
        {/* Header title */}
        <div className="text-xl sm:text-2xl flex gap-3 font-bold">
          <button
            onClick={() => navigate("/dashboard")}
            className="hover:text-blue-500 transition duration-300"
          >
            Store
          </button>
          <button
            onClick={() => navigate("/chats")}
            className="text-blue-500 hover:underline"
          >
            Chats
          </button>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-blue-500 text-xl sm:text-2xl font-semibold">
            Learn Sphere
          </h1>
        </div>

        {/* User actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications Icon */}
          <div className="relative">
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* User Avatar */}
          <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
            <FaUser className="text-gray-600" />
          </div>

          {/* User Dropdown */}
          <div className="relative flex items-center gap-3">
            <h1 className="text-sm sm:text-base capitalize font-semibold">
              {userInfo ? userInfo.username : "Loading..."}
            </h1>
            <IoIosArrowDown
              onClick={logoutmenu}
              className="text-xl cursor-pointer"
            />

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute z-50 top-10 right-0 bg-white shadow-lg border rounded-lg p-3 w-32">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardNav;
