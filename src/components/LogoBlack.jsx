const LogoBlack = () => {
  return (
    <>
      <div className="relative flex items-center">
        <div className="absolute border-black h-[35px] w-[35px] border-2 rotate-45"></div>
        <div className="left-5 absolute h-[35px] w-[35px] border-2 border-red-500 rotate-45"></div>
        <div className="left-10 absolute h-[35px] w-[35px] border-2 border-blue-500 rotate-45"></div>
        <div className="left-16  absolute h-[35px] w-[35px] border-2 border-yellow-500 rotate-45"></div>
        <h1 className="px-3 text-black relative text-3xl font-semibold">
          LearnSphere
        </h1>
      </div>
    </>
  );
};
export default LogoBlack;
