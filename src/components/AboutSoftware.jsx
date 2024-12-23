const AboutSoftware = () => {
  return (
    <>
      <div className="relative px-4 pb-4 mx-auto  mb-4">
        <h1 className=" text-center text-2xl font-bold text-blue-400 m-4 ">
          <span className="text-blue-900">All In One</span> Software.
        </h1>
        <p className="text-center opacity-[85%] mb-4">
          LearnSphere is one powerfull online software suite that combines all
          the tools
          <br /> needed to run a successfull school or office
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2  md:grid-row-2 lg:grid-row-1 gap-10 lg:grid-cols-3 w-[80%] mt-20 mx-auto space-x-4 ">
          <div className="relative flex justify-center flex-col border shadow hover:scale-105 p-14 items-center transition-all duration-200">
            <img
              src="./icons8-invoice-72.png"
              className="absolute bg-blue-600 px-4 py-4 w-[70px]  -top-7  rounded-full"
              alt=""
            />
            <h2 className="text-blue-900 text-center text-2xl font-medium mb-4">
              Online Billing Invoicing, & Contracts
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Simple and secure control of your organization's financial and
              legal transactions. Send customized Invoices and contracts
            </p>
          </div>

          <div className="relative border shadow hover:scale-105 flex flex-col justify-center items-center p-14  transition-all duration-200 ">
            <img
              src="./icons8-calendar-100.png"
              className="absolute bg-blue-500 px-4 py-4  w-[70px] -top-7  rounded-full"
              alt=""
            />
            <h2 className="text-blue-900 text-center text-2xl font-medium mb-4">
              Online Billing Invoicing, & Contracts
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Simple and secure control of your organization's financial and
              legal transactions. Send customized Invoices and contracts
            </p>
          </div>

          <div className="relative border shadow hover:scale-105 p-14 flex flex-col justify-center items-center transition-all duration-200">
            <img
              src="./icons8-customers-96.png"
              className="absolute bg-blue-500 px-4 py-4  w-[70px] -top-7 rounded-full"
              alt=""
            />
            <h2 className="text-blue-900 text-center text-2xl font-medium mb-4">
              Online Billing Invoicing, & Contracts
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Simple and secure control of your organization's financial and
              legal transactions. Send customized Invoices and contracts
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutSoftware;
