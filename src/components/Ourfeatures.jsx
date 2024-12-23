
const Ourfeatures = ()=>{
    return(
        <div className="flex flex-col p-5 w-[1200px] mx-auto">
            <h1 className="text-blue-700 text-center text-4xl font-bold mb-4">Our<span className="text-blue-400"> Features</span></h1>
            <p className="text-center text-gray-600 mb-4">This very extraordinary feature, can make learning activities more efficient</p>
            <div className="flex justify-between mt-12 py-12">
                        <img src="" alt="" />
                        <div className="flex flex-col justify-center w-[35%]">
                            <h3 className="text-blue-700 font-medium text-2xl my-5">A <span className="text-blue-400">user interface</span> designed for the classroom</h3>
                            <div className="flex justify-between w-full">
                                <img src="" alt="" />
                                <p className="text-gray-600 text-sm w-[70%]  font-xl">Teachers don't get lost in the grid view and have a dedicated podium space</p>
                            </div>
                            <div className="flex justify-between">
                                <img src="" alt="" />
                                <p className="text-gray-600 text-sm" >TA's and presenters can be moved to the front of the class</p>
                            </div>
                            <div className="flex justify-between">
                                <img src="" alt="" />
                                <p className="text-gray-600 text-sm">Teachers can easily see all students and class data at one time</p>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default Ourfeatures;