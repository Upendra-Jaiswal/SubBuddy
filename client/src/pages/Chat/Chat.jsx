// import React, { useState } from "react";

// const Chat = () => {
//   const [isAlertVisible, setIsAlertVisible] = useState(false);

//   const alertmessage = () => {
//     setIsAlertVisible(true);
//     // Optionally, hide it after a few seconds
//     setTimeout(() => setIsAlertVisible(false), 5000);
//   };

//   // const alertmessage = () => {
//   //   alert("hold on!! feature coming soon");
//   // };

//   return (
//     <div className="flex justify-center items-center h-[93vh] bg-gray-200 p-4">
//       {isAlertVisible && (
//         <div
//           role="alert"
//           className="alert alert-info mt-4 p-4 border-l-4 border-blue-500 bg-blue-100 text-blue-800"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             className="h-6 w-6 shrink-0 stroke-current"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//             ></path>
//           </svg>
//           <span>New software update available.</span>
//         </div>
//       )}
//       <div className="w-full max-w-4xl h-[70vh] bg-white shadow-lg rounded-3xl overflow-hidden flex flex-col">
//         {/* Chat Header */}
//         <div className="bg-blue-600 text-white p-4 text-lg font-semibold">
//           Chat
//         </div>

//         {/* Chat Body */}
//         <div className="flex-grow p-4 overflow-y-auto bg-gray-100 bg-opacity-80">
//           <div className="space-y-2">
//             <div className="bg-blue-50 p-3 rounded-lg max-w-xs ml-2 shadow-sm">
//               <p className="text-gray-800">Hello! How can I help you today?</p>
//             </div>
//             <div className="bg-green-50 p-3 rounded-lg max-w-xs ml-auto shadow-sm">
//               <p className="text-gray-800">
//                 I need some information about your services.
//               </p>
//             </div>
//             {/* Add more messages */}
//           </div>
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 bg-white border-t border-gray-300  flex items-center shadow-md">
//           <input
//             // onClick={alertmessage}
//             type="text"
//             placeholder="Type your message..."
//             className="bg-gray-200 flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             onClick={alertmessage}
//             className="ml-4 bg-blue-600 text-white p-2 rounded-lg flex-shrink-0 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <i className="fa fa-send">Send</i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import { useState } from "react";

const Example = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const alertmessage = () => {
    setIsAlertVisible(true);
    setTimeout(() => setIsAlertVisible(false), 5000); // Hide alert after 5 seconds
  };

  return (
    <div className="flex justify-center items-center h-[93vh] bg-gray-200 p-4 relative">
      {isAlertVisible && (
        <div
          role="alert"
          className="alert alert-info absolute top-4 left-1/2 transform -translate-x-1/2 mt-4 p-4 border-l-4 border-blue-500 bg-blue-100 text-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Chat feature coming !!</span>
        </div>
      )}

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
        <div className="p-4 bg-white border-t border-gray-300 flex items-center shadow-md">
          <input
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

export default Example;
