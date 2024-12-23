import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useContext } from "react";
import CoursesContext from "../utils/Context";

import CourseLectures from "./CourseLectures";
import BuyCart from "./BuyCart";
import DashBoardNav from "./DashBoardNav";

function CourseDetails() {
  const { id } = useParams();

  const { courses } = useContext(CoursesContext);

  const course = courses[id - 1];
  console.log(course);

  if (!courses) {
    // Handle the case when data is not an array
    return (
      <p className="flex justify-center items-center h-[100vh]">Loading...</p>
    );
  }

  const NavDetail = {
    backGroundColor: "white",
    textColor: "black",
    shadow: true,
  };
  return (
    <>
      <BuyCart />
      <CourseLectures />
      <Footer />
    </>
  );
}
export default CourseDetails;
