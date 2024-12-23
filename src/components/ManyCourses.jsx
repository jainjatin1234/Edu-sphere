import { useContext } from "react";
import Navbar from "./Navbar";
import CoursesContext from "../utils/Context.jsx";
import CoursesCard from "./CoursesCard";
import Footer from "./Footer";

const ManyCourses = () => {
  const { courses } = useContext(CoursesContext);

  const NavDetail = {
    backGroundColor: "teal-500",
    textColor: "white",
    shadow: true,
  };

  return (
    <div className="overflow-x-hidden w-[100vw]">
      <Navbar NavDetail={NavDetail} />
      <div className="py-5 px-2 md:p-10 mt-5">
        <h2 className="ml-8 text-3xl sm:text-start  md:ml-32 font-bold text-[#293972]">
          Courses
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-row-2 lg:grid-row-1 gap-10 xl:grid-cols-3 w-[80%] mt-10 mx-auto space-x-4">
          {courses.map((course, i) => (
            <CoursesCard key={i} data={course} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ManyCourses;
