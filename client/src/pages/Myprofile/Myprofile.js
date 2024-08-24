import React from "react";

import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <p className="mb-4">Manage your account settings here.</p>
          <Link to="/settings" className="text-blue-500 hover:underline">
            Go to Settings
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Share My Subscription</h2>
          <p className="mb-4">Share your subscriptions with others.</p>
          <Link
            to="/sharemyubs"
            className="text-blue-500 hover:underline"
          >
            Share Now
          </Link>
        </div>

        {/* Add more sections as needed */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Section</h2>
          <p className="mb-4">
            Additional information or options 
          </p>
          <Link to="/additional-info" className="text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
