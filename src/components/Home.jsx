import Navbar from "./Navbar";
import Herosection from "./Herosection";
import OurSuccess from "./OurSuccess";
import AboutSoftware from "./AboutSoftware";
import AboutTOTC from "./AboutTOTC";
import Ourfeatures from "./Ourfeatures";
import Courses from "./Courses";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const Home = ()=>{
    const NavDetail = {
        backGroundColor:"teal-500",
        textColor:"white",
        shadow:true
    }
    return (
        <div className="overflow-x-hidden">
            <Navbar NavDetail={NavDetail}/>
            <Herosection/>
            <OurSuccess />
            <AboutSoftware />
            <AboutTOTC/>        
            <Courses/>
            <Testimonial/>
            <Footer/>

        </div>
    )
}
export default Home;