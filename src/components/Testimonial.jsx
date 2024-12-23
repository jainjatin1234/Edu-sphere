import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between p-2 w-[80%] mx-auto my-10 md:my-32">
      <div className="flex flex-col w-[90%]  py-2 md:px-16 justify-around ">
        <div className="text-gray-700 tracking-widest">
          <div className="bg-gray-400 relative top-2 mr-6 inline-block  mb-4 w-16 p-[.3px]"></div>
          TESTIMONIAL
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#293972] mb-6 mt-8">
          What They Say?
        </h2>
        <p className="text-gray-700 mb-4  font-medium">
          LearnSphere has got more than 100K positive rating from our users
          around the world.{" "}
        </p>
        <p className="text-gray-700 mb-4 font-medium">
          Some of the students and teachers were greately helped by the skilline
        </p>
        <p className="text-gray-700 mb-12 font-medium">
          Are you Too? Please give your assessment
        </p>
        <Link
          to="/contactus"
          className=" px-8 py-2 border rounded-[20px] border-sky-400 text-sky-400 bg-transparent md:w-[40%] text-center font-medium"
        >
          Write Your assessment
        </Link>
      </div>

      <div className="relative w-[100%] md:w-[50%] ">
        <img src="./Testimonial.avif" className="  shadow rounded-md" alt="" />
      </div>
    </div>
  );
};
export default Testimonial;
