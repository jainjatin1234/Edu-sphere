import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    // Handle registration logic here
    try {
      const response = await axios.post(
        "https://learn-sphere-learnsphere.netlify.app/user/v2/register",
        {
          username,
          email,
          password,
        }
      );

      toast.success("Registration successful! Redirecting...");

      setTimeout(() => navigate("/login"), 3000);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Registration failed");
      } else if (error.request) {
        toast.error("No response from server. Please try again later.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-5">
          <div className="md:w-1/2 flex flex-col items-center p-5">
            <img
              src="./signup.avif"
              height="100px"
              width="350px"
              alt="Placeholder"
              className="rounded-lg "
            />
          </div>
          <div className="md:w-1/2 relative p-5">
            <div className="w-full absolute top-4 right-6 flex justify-end text-3xl">
              <IoMdCloseCircle
                onClick={() => {
                  navigate("/");
                }}
                className="hover:cursor-pointer duration-300  hover:scale-125"
              ></IoMdCloseCircle>
            </div>
            <h2 className="text-3xl font-semibold text-start mb-5">Register</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-2"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
              onClick={handleRegister}
            >
              Register
            </button>

            <p className="text-medium font-semibold text-center my-5">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
