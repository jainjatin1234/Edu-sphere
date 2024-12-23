import React from "react";
import Footer from "./Footer";
import DashBoardNav from "./DashBoardNav";

const Chats = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Navbar */}
        <DashBoardNav />
        {/* Chat Section */}
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg h-[calc(100%-150px)] overflow-hidden">
          {/* Chat Sidebar */}
          <div className="sm:w-1/3 w-full border-r p-4 flex-shrink-0">
            <input
              type="text"
              placeholder="Search by name"
              className="w-full p-2 mb-4 border rounded-lg text-sm"
            />
            <div className="space-y-4">
              {["Admin", "John Doe", "Support Team"].map((chat, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                >
                  <h3 className="font-bold text-sm sm:text-base">{chat}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Last message preview...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Main Area */}
          <div className="flex-1 flex flex-col p-4">
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-4 border-b">
              <h2 className="text-base sm:text-lg font-bold">LearnSphere</h2>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  ...
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mt-4 space-y-4">
              {/* Incoming Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-yellow-300 rounded-full"></div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="text-sm">Hello! How can I help you today?</p>
                </div>
              </div>

              {/* Outgoing Message */}
              <div className="flex items-end justify-end space-x-2">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <p className="text-sm">I need assistance with my course.</p>
                </div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Message Input */}
            <div className="mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 border-t pt-4">
              <input
                type="text"
                placeholder="Write something here..."
                className="flex-1 p-2 border rounded-lg text-sm"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chats;
