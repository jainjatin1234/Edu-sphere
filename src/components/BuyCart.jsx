import { useContext, useEffect } from "react";
import CoursesContext from "../utils/Context";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import { FaBuysellads } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

const BuyCart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const { courses } = useContext(CoursesContext);

  const course = courses[id - 1];
  console.log(course);

  if (!course) {
    // Handle the case when data is not an array
    return (
      <p className="flex justify-center items-center h-[100vh]">Loading...</p>
    );
  }

  return (
    <div className="w-full h-full">
      <div>
        {/* cart for buy */}
        <div className="w-[100vw] relative h-[70vh]">
          <video
            src="https://res.cloudinary.com/jatincloud809/video/upload/v1732279753/Learn%20sphere/CourseDetails.mp4"
            className="h-[100%]  w-full aspect-video object-cover"
            autoPlay
            muted
            loop
          ></video>
          <div className="absolute top-7 bg-gray-100  rounded-full p-2  left-5">
            <IoMdArrowRoundBack
              onClick={() => {
                navigate(-1);
              }}
              className=" text-2xl text-black z-50 duration-300 hover:cursor-pointer  hover:scale-125"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center mx-3 items-center w-[90%] md:justify-between">
          <div className="md:ml-10 w-[85%] md:w-[50%]   relative md:bottom-10 ">
            <Rating />
          </div>
          <div className=" relative md:bottom-64  border w-[80%] md:w-[50%] lg:w-[30%] shadow hover:scale-105 transition-all bg-white duration-200  p-3 ">
            <img src={`${course.imageUrl}`} className="w-[100%]" alt="" />
            <div className="flex justify-between">
              <p className="font-bold text-xl m-4">$4000</p>
              <Link
                to={`/coursedetails/${id}/checkout`}
                className="px-8  flex items-center  bg-blue-600 font-medium  rounded-[20px] text-center  text-white mt-2 mr-4 mb-2 hover:bg-blue-800 hover:font-bold transition-all duration-200"
              >
                Buy Now <FaBuysellads className="inline-block" />
              </Link>
            </div>

            <h2 className="m-2 font-bold text-xl">This Includes:</h2>

            <p className="m-2 ml-6 text-gray-800 font-medium">
              ✔ No Pre-requisite Required
            </p>

            <p className="m-2 ml-6  text-gray-800 font-medium">
              ✔ 50+ hours On-Demand Video
            </p>

            <p className="m-2 ml-6 text-gray-800 font-medium">
              ✔ 8 Real World Design Problems (asked by Top Companies)
            </p>

            <p className="m-2 ml-6 text-gray-800 font-medium">
              ✔ Live Interview Preparation & mentorship sessions
            </p>

            <p className="m-2 ml-6 text-gray-800 font-medium">
              ✔ LIVE Revision && Doubts Class
            </p>

            <p className="m-2 ml-6 text-gray-800 font-medium">
              ✔ LLD - Design Patterns [With Examples]
            </p>

            <p className="m-2 ml-6 mb-8 text-gray-800 font-medium">
              ✔ with Doubt Assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyCart;
