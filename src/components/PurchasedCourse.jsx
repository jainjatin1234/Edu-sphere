import React from "react";
import { useNavigate } from "react-router-dom";
import download from '../assets/images/download.jpeg'

const PurchasedCourse = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
          <img
            src={download}
            alt="Course Preview"
            className="rounded-lg"
          />
        </div>
        <div className="w-full sm:flex-1">
          <h3 className="text-md font-semibold">Full-Stack Developer</h3>
          <p className="text-sm text-gray-600">Batch Exclusive</p>
          <button
            onClick={() => {
              navigate("/content");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PurchasedCourse;
