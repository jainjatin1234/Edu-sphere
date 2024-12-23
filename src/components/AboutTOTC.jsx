const AboutTOTC = () => {
  return (
    <div className="flex justify-center items-center mt-16 p-4 mb-32">
      <div className="w-[80%] ">
        {" "}
        <h1 className="text-2xl text-center  font-bold text-blue-800 mb-8">
          What is <span className="text-blue-400">LearnSphere?</span>{" "}
        </h1>
        <p className="text-md text-gray-600 text-center mb-8">
          LearnSphere is a platform that allows educator to create online
          classes whereby they can
          <br />
          store the course material online; manage assignments, quizes and
          exams, monitor
          <br /> due dates; grade results and provide students with feedback all
          in one place.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
          <div className="relative group w-[90%] md:w-[50%]  hover:scale-105 transition-all duration-200">
            <video
              src="https://res.cloudinary.com/jatincloud809/video/upload/v1732279510/Learn%20sphere/Instructor.mp4"
              autoPlay
              muted
              loop
              className=" mb-8 shadow rounded-md "
            ></video>
          </div>
          <div className=" relative group  w-[90%] md:w-[50%]  hover:scale-105 transition-all duration-200">
            <video
              src="https://res.cloudinary.com/jatincloud809/video/upload/v1732279504/Learn%20sphere/Instructor-2.mp4"
              autoPlay
              muted
              loop
              className=" mb-8 shadow rounded-md "
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTOTC;
