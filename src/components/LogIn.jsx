import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");   

    try {
      const response = await axios.post(
        "http://localhost:5000/user/v2/login",
        {
          username,
          password,
        },
        {
          withCredentials: true, // Add this to include cookies in the request
        }
      );
      setUser(response.data);

      toast.success("Successfully Login..");
      navigate("/dashboard");
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

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Close button at the top-right of the screen */}
      <div className="absolute top-4 right-4 text-3xl">
        <IoMdCloseCircle
          onClick={() => {
            navigate("/");
          }}
          className="hover:cursor-pointer duration-300 hover:scale-125"
        />
      </div>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-5 max-w-screen-sm w-full">
        <div className="md:w-1/2 flex justify-center md:justify-start mb-5 md:mb-0">
          <img
            src="./signup.avif"
            height="100px"
            width="350px"
            alt="Placeholder"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-5">
          <h2 className="text-2xl font-semibold text-center mb-5">
            Welcome to LearnSphere
          </h2>
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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="text-center mt-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
