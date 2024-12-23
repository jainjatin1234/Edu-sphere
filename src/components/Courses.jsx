
import { Link } from "react-router-dom";
import { BiArrowFromLeft } from "react-icons/bi";
import CoursesLogo from "./CoursesLogo"

 
 const Courses = ()=>{
    const detail ={}
    return(
        <div className="bg-zinc-100 pt-32 px-12 w-full pb-8 rounded-t-[20em] rounded-b-[20em]">
            <h1 className="font-medium opacity-90 text-2xl ml-24 mb-8">Explore course</h1>
            
            <div >
               <div className="flex justify-between">
               <h2 className="font-medium text-sm sm:text-xl mt-8 sm:mb-8  md:ml-28">Web Development</h2>
               <Link to="/manycourses" className=" mt-8 sm:mb-8 md:mr-28 font-medium text-[10px] sm:text-sm text-blue-800">See All <BiArrowFromLeft className=" text-sm sm:text-2xl inline-block" /></Link>
               </div>
              <div className="flex flex-col lg:flex-row xl:w-[1200px] justify-between mx-auto">

                 <div className="hidden sm:flex w-[90%] mx-auto lg:w-[50%]  gap-10">
                 <CoursesLogo name={"Frontend"} backGround={" bg-blue-500 "}/>

                    <CoursesLogo name={"Backend"} backGround={" bg-orange-500 "}/>


                    <CoursesLogo name={"Database"} backGround={" bg-sky-400 "}/>

                    <CoursesLogo name={"UI design"} backGround={" bg-pink-500"}/>


                    <CoursesLogo name={"Full stack"} backGround={" bg-yellow-500"}/>

                 </div>


                   <div className="w-[100%] sm:w-[60%]  mx-auto mt-24 lg:mt-0 lg:w-[45%]  lg:ml-32 relative shadow flex flex-col sm:flex-row bg-white p-2 justify-between  border-2 border-sky-300  hover:scale-105 transition-all duration-200">
                        <img src="./signup.avif" className="mx-auto sm:w-[150px] w-[400px] object-cover h-[200px]" alt="" />
                    <div className="flex mt-8 sm:mt-2 flex-col justify-center">
                    <h1 className="font-bold text-center ml-2">Web Development</h1>
                    <p className="text-sm p-2 text-center ">Learn to build and deploy websites rith modern web development skills.</p>
                        <Link to="/manycourses" className="px-8 py-1  bg-blue-600 font-medium  rounded-[20px] text-center mx-auto text-white">Explore</Link>
                         </div>
                </div>


                     
              </div>
            </div>


            <div>
            <div className="flex justify-between mt-10">
            <h2 className="font-medium text-sm sm:text-xl mt-8 sm:mb-8  md:ml-28">UI/UX Design</h2>
               <Link to="/manycourses" className=" mt-8 sm:mb-8 mr-28 font-medium text-[10px] sm:text-sm text-blue-800">See All <BiArrowFromLeft className=" text-sm sm:text-2xl inline-block" /></Link>
               </div>
               <div className="flex flex-col lg:flex-row xl:w-[1200px]  mx-auto">
           
                
                  <div className="w-[100%] sm:w-[60%]  mx-auto mt-24 lg:mt-0 lg:w-[45%] mb-8 lg:mb-0 lg:ml-32 relative shadow flex flex-col sm:flex-row bg-white p-2 justify-between  border-2 border-sky-300  hover:scale-105 transition-all duration-200">
                  <img src="./signup.avif" className="mx-auto sm:w-[150px] w-[400px] object-cover h-[200px]" alt="" />
                    <div className="flex mt-8 sm:mt-2 flex-col justify-center">
                    <h1 className="font-bold text-center ml-2">UI/UX Design</h1>
                    <p className="text-sm p-2 text-center ">Master UI/UX design principles with hand-on courses. Elevate your skills in user Experience and interface design</p>
                        <Link to="/manycourses" className="px-8 py-1  bg-blue-600 font-medium  rounded-[20px] text-center mx-auto text-white">Explore</Link>
                         </div>
                </div>

                <div className="hidden lg:flex w-[90%] mx-auto lg:w-[50%]  gap-10">
                <CoursesLogo name={"Database"} backGround={" bg-sky-400 "}/>

<CoursesLogo name={"UI design"} backGround={" bg-pink-500"}/>


                <CoursesLogo name={"Frontend"} backGround={" bg-blue-500 "}/>
                
                    <CoursesLogo name={"Backend"} backGround={" bg-orange-500 "}/>


                 
                    <CoursesLogo name={"Full stack"} backGround={" bg-yellow-500"}/>

                 </div>

                
                     
              </div>
            </div>


            <div className="pb-48">

            <div className="flex md:mr-10 xl:mr-0 justify-between">
            <h2 className="font-medium text-sm sm:text-xl mt-8 sm:mb-8  md:ml-28">Database</h2>
               <Link to="/manycourses" className=" sm:my-8 mt-8  sm:mr-28 font-medium text-[10px] sm:text-sm text-blue-800">See All <BiArrowFromLeft className="text-sm sm:text-2xl inline-block" /></Link>
               </div>
               <div className="flex flex-col lg:flex-row xl:w-[1200px] justify-between mx-auto">



        

              <div className="w-[100%] sm:w-[60%]  mx-auto mt-24 lg:mt-0 lg:w-[45%]  lg:ml-32 relative shadow flex flex-col sm:flex-row bg-white p-2 justify-between  border-2 border-sky-300  hover:scale-105 transition-all duration-200">
                        <img src="./signup.avif" className="mx-auto sm:w-[150px] w-[400px] object-cover h-[200px]" alt="" />
                    <div className="flex mt-8 sm:mt-2 flex-col justify-center">
                        <h1 className="font-bold text-center ml-2">Database</h1>
                        <p className="text-sm p-2 text-center ">Learn database management, SQL, and data modeling. Build and optimize robust database with expert-led courses.</p>
                            <Link to="/manycourses" className="px-8 py-1  bg-blue-600 font-medium  rounded-[20px] text-center mx-auto text-white">Explore</Link>
                         </div>
                </div>

                <div className="hidden sm:flex w-[90%] mx-auto lg:w-[50%]  gap-10">
                    
                <CoursesLogo name={"Full stack"} backGround={" bg-yellow-500"}/>
              

                    <CoursesLogo name={"Backend"} backGround={" bg-orange-500 "}/>


                    <CoursesLogo name={"Database"} backGround={" bg-sky-400 "}/>

                    <CoursesLogo name={"UI design"} backGround={" bg-pink-500"}/>

                    <CoursesLogo name={"Frontend"} backGround={" bg-blue-500 "}/>

                 </div>

                
                     
              </div>
            </div>

                

        </div>
    )
 }
 export default Courses;