import { FcRating } from "react-icons/fc"
import { BsStarFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
const Rating = ()=>{
    return (
        <>
            <div className="bg-zinc-200 p-5  m-5 rounded-md shadow">
                    <div className="flex gap-6 flex-col md:flex-row  items-center md:justify-between">
                        <div className="bg-zinc-50 px-5 py-3 flex flex-col justify-center items-center rounded-md shadow">
                            <p className="text-sm font-semibold text-gray-600">4 out of 5</p>
                           
                           <p className="flex gap-1 my-2"> 
                               <BsStarFill className="text-orange-400 text-[10px]"/>
                                <BsStarFill className="text-orange-400 text-[10px]"/>
                                <BsStarFill className="text-orange-400 text-[10px]"/>
                                <BsStarFill className="text-orange-400 text-[10px]"/>
                                <BsStarFill className="text-orange-400 text-[10px]"/>
                           </p>
                            <p className="text-[13px] font-semibold text-gray-500">Top Rating</p>
                        </div>
                        <div className="w-[90%] md:w-[70%] space-y-2">
                           <div className="flex  gap-3">
                                <p className="text-[12px] text-gray-400 font-medium ">5 Stars</p>
                                <p className="relative top-2 md:top-1 w-[80%] rounded-md  h-1 bg-zinc-50"> <span className="w-[30px] h-4 text-green-800"></span> </p>
                           </div>
                           <div className="flex gap-3">
                                <p className="text-[12px] text-gray-400 font-medium ">4 Stars</p>
                                <p className="relative top-2 md:top-1 w-[80%] rounded-md  h-1 bg-white"> <span className="w-[80%] text-green-800"></span> </p>
                           </div>
                           <div className="flex gap-3">
                                <p className="text-[12px] text-gray-400 font-medium ">3 Stars</p>
                                <p className="relative top-2 md:top-1  w-[80%] rounded-md  h-1 bg-zinc-50"> <span className="w-[30px] text-green-800"></span> </p>
                           </div>
                           <div className="flex gap-3">
                                <p className="text-[12px] text-gray-400 font-medium ">2 Stars</p>
                                <p className="relative top-2 md:top-1  w-[80%] rounded-md  h-1 bg-zinc-50"> <span className="w-[30px] text-green-800"></span> </p>
                           </div>
                           <div className="flex gap-3">
                                <p className="text-[12px] text-gray-400 font-medium ">1 Stars</p>
                                <p className="relative top-2 md:top-1  w-[80%] rounded-md  h-1 bg-zinc-50"> <span className="w-[30px] text-green-800"></span> </p>
                           </div>
                        </div>
                      </div>

                      <div className="mt-10">
                        <div className="border-b border-gray-400">
                            <div className="flex justify-between">
                                <div className="flex">
                                <img src="../reviewgirl.avif" className="bg-white mr-2 h-[20px] w-[20px] rounded-full" alt="" />
                                <div>
                                 <p className="text-[10px] font-semibold text-gray-600">Krishna</p>
                           
                                    <p className="flex gap-1 "> 
                                        <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                    </p>
                                </div>
                                </div>
                                  <div><BsClockFill className="inline-block sm:mr-1 text-[8px] text-zinc-500"/> <span className="text-[8px] sm:text-[12px] text-gray-500">3 Months</span> </div>
                            </div>
                            <div className="text-[10px] mb-3 p-2 pl-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quo autem omnis saepe aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, qui?
                            </div>
                        </div>
                        <div className=" mt-6 ">
                            <div className="flex justify-between">
                                <div className="flex">
                                <img src="../reviewgirl.avif" className="bg-white mr-2 h-[20px] w-[20px] rounded-full" alt="" />
                                <div>
                                 <p className="text-[10px] font-semibold text-gray-600">Krishna</p>
                           
                                    <p className="flex gap-1 "> 
                                        <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                            <BsStarFill className="text-orange-400 text-[10px]"/>
                                    </p>
                                </div>
                                </div>
                                  <div><BsClockFill className="inline-block text-[8px] sm:mr-1 text-zinc-500"/> <span className="text-[8px] sm:text-[12px] text-gray-500">3 Months</span> </div>
                            </div>
                            <div className="text-[10px] mb-3 p-2 pl-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam quo autem omnis saepe aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, qui?
                            </div>
                        </div>
                     
                      </div>
            </div>
        </>
    )
}
export default Rating;