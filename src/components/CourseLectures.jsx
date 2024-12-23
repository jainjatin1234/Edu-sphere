import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CoursesContext from "../utils/Context";

const CourseModule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const { courses } = useContext(CoursesContext);

  const courseId = parseInt(id, 10);

  if (!courses[courseId - 1]) {
    return <p>Course not found</p>;
  }

  const items = courses[courseId - 1].items;

  if (!courses) {
    // Handle the case when data is not an array
    return (
      <p className="flex justify-center items-center h-[100vh]">Loading...</p>
    );
  }

  return (
    <div className="relative mt-20 md:-top-32">
      {items.map((item, id) => (
        <div
          key={id}
          className="border w-[90vw] mx-auto border-gray-300 rounded-lg shadow-lg mb-4"
        >
          <div
            className="flex justify-between items-center p-4 bg-blue-100 text-blue-800 rounded-t-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <div className="flex items-center">
              <span className="mr-2">{item.duration}</span>
              <svg
                className={`w-5 h-5 transform ${isOpen ? "rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {isOpen && (
            <div className="p-4 bg-white rounded-b-lg">
              <ul className="space-y-2">
                {item.subItems.map((lesson, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-800"
                  >
                    <span>{lesson.name}</span>
                    <span>{lesson.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}{" "}
    </div>
  );
};

export default CourseModule;
