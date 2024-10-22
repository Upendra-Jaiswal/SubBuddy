import React from "react";

const Chat = () => {
  const alertmessage = () => {
    alert("hold on!! feature coming soon");
  };
  return (
    <div className="flex justify-center items-center h-[93vh] bg-gray-200 p-4">
      <div className="w-full max-w-4xl h-[70vh] bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col">
        {/* Chat Header */}
        <div className="bg-blue-600 text-white p-4 text-lg font-semibold">
          Chat
        </div>

        {/* Chat Body */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-100 bg-opacity-80">
          <div className="space-y-2">
            <div className="bg-blue-50 p-3 rounded-lg max-w-xs ml-2 shadow-sm">
              <p className="text-gray-800">Hello! How can I help you today?</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg max-w-xs ml-auto shadow-sm">
              <p className="text-gray-800">
                I need some information about your services.
              </p>
            </div>
            {/* Add more messages */}
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-gray-300  flex items-center shadow-md">
          <input
            // onClick={alertmessage}
            type="text"
            placeholder="Type your message..."
            className="bg-gray-200 flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={alertmessage}
            className="ml-4 bg-blue-600 text-white p-2 rounded-lg flex-shrink-0 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <i className="fa fa-send">Send</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
