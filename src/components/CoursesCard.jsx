import { Link } from "react-router-dom";
import { FaBuysellads } from "react-icons/fa";

const CoursesCard = ({ data }) => {
  return (
    <div className="relative shadow flex flex-col bg-white p-2 justify-between  border-2 hover:scale-105 transition-all duration-200">
      <img src={data.imageUrl} width="[100%]" height="50%" alt="" />
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-center mt-4">{data.title}</h1>
        <p className="text-sm p-2 text-center ">{data.description}</p>
        <Link
          to={`/coursedetails/${data.id}`}
          className="px-8 py-1  bg-blue-600 font-medium  rounded-[20px] text-center mx-auto text-white mb-4"
        >
          Buy Now <FaBuysellads className="inline-block" />{" "}
        </Link>
      </div>
    </div>
  );
};
export default CoursesCard;
