import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        {/* Settings Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <p className="mb-4">Manage your account settings here.</p>
          <Link to="/settings" className="text-blue-500 hover:underline">
            Go to Settings
          </Link>
        </div>

        {/* Subscription Sharing Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Manage Subscriptions</h2>
          <p className="mb-4">
            Easily share your subscriptions with others and track your shared
            subscriptions.
          </p>
          <div className="space-y-2">
            <div>
              <Link to="/sharemysubs" className="text-blue-500 hover:underline">
                Share a Subscription
              </Link>
            </div>
            <div>
              <Link
                to="/seemysharedsubs"
                className="text-blue-500 hover:underline"
              >
                View Shared Subscriptions
              </Link>
            </div>
            <div>
              <Link
                to="/boughtSubscriptions"
                className="text-blue-500 hover:underline"
              >
                View Bought Subscriptions
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Additional Section</h2>
          <p className="mb-4">Additional information or options</p>
          <Link to="/additional-info" className="text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
