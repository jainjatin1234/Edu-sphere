const CoursesLogo = ({name,backGround})=>{
return(
    
    <div className="w-[10%] mt-24">

    <div className="rotate-shake-button border-[10px] w-[200px] rotate-[75deg] text-center border-white  rounded-3xl px-4 py-1 "> <button className={`text-white ${backGround} rounded-3xl px-10 py-2`}>{name}</button> </div>
     </div>
 
)
}
export default CoursesLogo;