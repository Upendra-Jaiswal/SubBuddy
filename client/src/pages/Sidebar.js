import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/myprofile"); // Redirect to the profile page
  };

  return (
    <div className="fixed inset-0 flex justify-end items-start z-50 m-7">
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 w-64 h-[40vh] p-4 shadow-lg relative mb-7">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none mb-7"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col items-center justify-center h-full text-white">
          <ul className="space-y-4 w-full text-center">
            <li
              className="py-2 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer transition duration-300"
              onClick={handleProfileClick}
            >
              My Profile
            </li>
            <li
              className="py-2 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer transition duration-300"
              onClick={() => console.log("Log Out")}
            >
              Log Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
