import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="w-[100vw] bg-[#14192b] flex justify-center  flex-col mx-auto p-10">
      <div className=" flex flex-col items-center md:flex-row justify-center">
        <Logo />
        <hr className=" text-white opacity-40 mx-8 w-16   md:rotate-90 mt-6" />
        <p className="text-[#fffd] font-medium mt-4">Virtual Class for Zoom</p>
      </div>
      <p className="mt-8 text-gray-400 md:text-lg text-center tracking-wider">
        Subscribe to get our Newsletter
      </p>
      <form className="flex justify-center flex-col md:flex-row">
        <input
          type="email"
          placeholder="Your Email"
          className="pl-4 pr-16 border border-gray-400 text-gray-400 bg-transparent py-2 rounded-[20px] mt-4 md:my-4 mr-3"
        />
        {/* <input type="button" /> */}
        <div className="my-4">
          <button className="bg-blue-400 font-medium rounded-[20px] px-6 py-2 hover:bg-blue-500 transition-all duration-200 text-white">
            Subscribe
          </button>
        </div>
      </form>

      <div className=" flex flex-col md:flex-row gap-2 md:gap-0 justify-center mt-4">
        <a href="#careers" className="text-gray-400 md:ml-4">
          {" "}
          Careers
        </a>
        <hr className=" hidden md:block text-white opacity-40 mx-4 w-5 rotate-90 mt-4" />
        <a href="#privacypolicy" className="text-gray-400">
          Privacy Policy
        </a>
        <hr className="hidden  md:block text-white opacity-40 mx-4 w-5 rotate-90 mt-4" />
        <a href="#terms&condition" className="text-gray-400">
          Terms & Condition
        </a>
      </div>

      <p className="mt-6 text-gray-400 text-sm tracking-wider text-center">
        @ 2024 Jatin Jain.
      </p>
    </div>
  );
};
export default Footer;
